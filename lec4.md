---
layout: page
---

From previous class:

* Note that immens was pretty cool because it is insitiu rendering, which is pretty cool.
* The LDAV (large data analysis and vis) folks do that for scivis all the time

### Sampling basics

Why sampling?

* output is error tolerant (how does one know??)
* number of matching tuples is HUGE
* Synopses vs runtime sampling
* precomputation is not feasible -- when is this the case?

Simple example with one result value

* Sample S from the database
* Want Y' in [Y-err, Y+err] with probability ~p
* [Horvitz-Thompson Estimator](https://onlinecourses.science.psu.edu/stat506/node/16)
  * Unbiased estimator for any design (bias), with or without replacement

	          n samples
	          N total records
	          sum  =      sum(prob_i^-1 * y_i for i in [1, n])
	          mean =      1/N * sum
	          var(mean) = depends!

* Estimating the value is easy, estimating the err bound is hard!
  * Hoeffding, Chernoff, Bernstein, etc

	          est = 1/n * sum_i val_i
	          P{ |est - truemean| <= err } >= 1 - 2*e^{foo} = p
	          foo = -2nerr^2 / (b-a)^2
	          a, b  are the min max values of the attribute val in the database
	          n:    number of samples drawn
	          p:    probability threshold p
	
	          err_n = (b-a) * 1/(2n) * ln(2/(1-p)) ^ 0.5
	
	          can get away without knows a and b for large samples.

Goals
  * can construct an unbiased error estimator
  * don't need too many samples to have a small error

Why is sampling a database and using the sample hard?

* filtering -- why?
* outliers
* joins and estimation error
* drawing samples

Types of sampling and their issues (these are typically done apriori)

* uniform: take 1% sample, compute aggregate, scale up by 100x
  * issues: 
    * large data variance e.g., data skew
    * low selectivity problem: avg sal of small department -- may have 0 tuples in the sample

            data:          10k tuples
                           99% have value 1
                            1% have value 1000
                           sum is 109900
            draw 1% sample
              all values 1
              estimated sum = 100 * 100 = 10k

              99 with val 1, 1 with val 1000
              estimated sum = 1099 * 100 = 109900

              98 with val 1, 2 with val 1000
              estimated sum = 2098 * 100 = 209800

            prob to get exactly 1 draw of 1000 is only 37%

            standard error ~ (draw - estimated_mean) ^ 2
            --> outlier draws will kill your variance

* icicles: tackle low selectivity problem: 
  * bias samples to commonly accessed tuples --> increase their probability of being drawn
    * how to actually implement this?  punt -- do it all offline :/
  * issues: heuristic, doesnt' address variance problem
* outlier indexing: outliers stored in separate index, icicles/biased sampling for the rest
  * partition into outlier and non outlier values
  * exact answer for outliers, approximate for non outliers
  * combine together
  * need to know workload in advance
* stratefied sampling

What are other challenges?

* Is sampling free?   
  * Underlying assumption: independent draws -- hard!
    * index: if on index key, then index is useless
    * reading sequentially from a heap file

	          insert order:  1111119999
	          read order:    9999111111
	          sample:        9999
	          estimate:      36 / 4 * 10

    * Disk random access: 

	          5ms * 5000 tuples = 25s
	          200 rand access/s * 128k pages ~ 20mb/s of pages (assuming all tuples useful)

    * blinkDB will discuss how to deal with this

  * Replacement (covariance between two draws =0) vs wout replacement


# Sample + Seek: Approximating Aggregates with distribution Precision Guarantee

Bolin Ding, Silu Huang, Surajit Chaudhuri, et al

Problems

* CI as a precision metrics has "inadequate semantics" for group bys
  * 90% CI for each group != correct for all groups at the same time with 90% probability
  * misleading semantics
* Data-dependent errors
  * CI width ~ std(sample of m tuples) / sqrt(m)
  * outlier screw things up

Go through Example

* stratefied samples draw more from smaller groups.  In this case, all groups the same
* issues here are due to the measure values (outliers) rather than group sizes

Contributions

* L2 error distance
  * Normalize and model group-by results as a distribution
  * Guarantee L2 distance to true answer is < epsilon
  * Guarantees that error for _each group_ is also < epsilon
* Separate solutions for big and small COUNT and SUM qureies for table of size n
  * Need 1/epsilon^2 samples to make guarantee
  * big == (selectivity >= 1/sqrt(n))
  * big qureies
    * COUNT: O(sqrt(n)/epsilon^2) uniform sample 
    * SUM(a): O(sqrt(n)/epsilon^2) sample stratefied on measure a's value
    * Why enough?  selectivity > 1/sqrt(n), so expect that 1/epsilon^2 samples to match.  Win
  * small query: 
    * measure augmented inverted index. 
      * For each categorical dim value, map to list of row ids with that value 
        (called a postings list)
      * union/intersect/diff of postings lists supports AND/OR/NOT operators
      * store measure attributes along with the row ids, however they are 
        2 approximated values (e.g., true val <= approx <= 2*true val)
    * low-freq group index
      * for each infrequent val in categorical dimension (e.g., # rows < sqrt(n))
      * just store the rows sequentiall on disk.
* What is stored where?
  * big samples in memory
  * small query indexes on disk
* What do you need to know ahead of time to build these data structures??
* Stratefied sampling based on [Horvitz-Thompson estimator](https://en.m.wikipedia.org/wiki/Horvitz%E2%80%93Thompson_estimator)


Main algorithm

* GB: group by attributes
* F(M): aggregation function over measure M
* P: predicate
* x': estimated ditribution (x'i for group i's estimate)
* sup: # rows satisfying predicate P

        Input Q(GB, F(M), P)
        Output epsilon-approximate answer distribution

        If F = COUNT
          (x', sup) = process(uniform sample)
        If F = SUM
          (x', sup) = process(statefied (measure-biased) sample)
        If sup > 1/epsilon^2    // if a big query
          return x'
        if low-req group index is usable
          x' = process with low freq index
        else
          x' = process with measure augmented index

        process(sample):
          " linearly scan the sample "
          for t in sample
            if matches predicate P
              x[i] += 1 for group i
              sup  += 1

How many samples for COUNT AND SUM?

* count: O(sqrt(n) / err^2) uniform sample
* sum: O(sqrt(n) / err^2) measure biased sample
  * measure biased == prob = 1/value

Low Frequency Index

* Meant to be a fast pass for obviously small queries, worst case, just use measure aug index
* If # rows that match a condition (a single attr op val) is < 1/sqrt(n) then just store them directly
  because can't be handled by the samples

        (dim, val) -> [rows]

        let predicate P be:
        P: d1 = v1 AND ... dt=vt

* if any d1 = v1 is in this index, then can use


Mesaure-augmented inverted index:

* map each categorical dimension value to list of rows

        (dim, val) -> [row ids]

  * fast to do intersection/union ops on row id list
  * along with row id, store approximations of the row's measure values

	          let t.m be a measure value (e.g., tuple.sale)
	          store apx(t.m) as a 2-approximation s.t.
	          apx(t.m) <= t.m <= 2*apx(t.m)
	
	          only need log(log(domainOfMeasure)) + 1 bits

* Size: for each dimension and each row, store the row id and the measures

	          O(N rows * D dims * 
	          (log(NRows) + SUM_{measure attribute Mi} log(log(domain of Mi)))) bits


  * uniform sampling woul require O(domain^3/epsilon^2) sample rows.  Domain is the domain of the measure in F(m)
  * Would like to use biased sampling based on t.m -- but # bits for each t.m is large.  Use apx(t.m) instead
  * Use biased sampling with probability proportional to apx(t.m)
  * only need O(1/epsilon^2) samples 

Other things?

* What about negative numbers?
* Workload?
* Storage requirements at 2.5% err
  * Samples: ~10% of base table
  * LF idx:  5-50%
  * MA idx:  30-60%
* Several OOM faster than stratefied sampling (blinkDB)


# PFunk

Problem

* Sampling is great, what to set the error bound to?  Eyes!
* How approximate are our eyes?  How to measure?

Solutions

* Why perceptual limitation?  resolutions are increasing too much
* Perceptual studies
  * Two main ways -- directly measure estimation error, and JND
    * cleveland mcgill
    * JND, staircase method
  * Common properties: error relative to data (weber's law)
* fixing a universal error bound is incorrect and inefficient
  * WHat about sample-seek's measure?
* Similar to online aggregation

        f(X, delta, err)
          sample = {}
          while P(CI > err) < delta
            draw sample
          return estimator(sample)

  * Some challenges
    * operators must be non-blocking
    * hash instead of sort
    * NLJ instead of hash or sortmerge join
* But get rid of err

        f(P, X, delta)
          sample = {}
          while !goodenough(P, sample, delta)
            sample.add X.newsample()
          return estimator(sample)

* ensure

        CI ≤ εmin where εmin = argmin_{v∈[v′± (CI/2) ]} P(v) 


# Future Directions

* Sample+Seek suggests error over the entire graph by viewing it as a distribution
  * can that be pushed further?
* Pfunk-H is effectively exploiting JND on a per-mark basis
  * what about JND for the entire chart?  "shape-JND"


# Next time

Assignment

* deliverable?

Topics next time

* Prefetching
* Optimiizing for the network






# (Bonus) Wanderjoin

Background

* Onlineaggregation draws random samples from a table and scale it up to get an unbiased estimator for the agg()
* Ripple join:
  
      draw t1 from R1
      compare with all tuples drawn from R2
      draw t2 from R2
      compare with all tuples drawn from R1 (including t1)
      repeat

* If there is an index, use index ripple join
  * only sample t from one of the tables (R1)
  * for t, fully compute t ⨝ R2 ⨝ ... ⨝ Rk
* Problem: uniform samples, but NOT independent!  makes computing CIs complicated

Wander join: nonuniform, independent samples

* R1 ⨝ R2 ... ⨝ Rk
* Assuming join key indexes on R2 ... Rk
* Model as a graph of tuples, and edges are valid joins
* Randomly sample from R1, then randomly walk the graph until reach Rk, or can't go any further -- that's a path
* Problem: each path (t1,...tk) has a different sampling probability (non uniform samples)
  * Horvitz-thompson estimator deals with this
  
      agg(path) / prob(path)  = unbiased estimator of SUM_paths v(path)
      prob(path)              = 1/|R1| * 1/d2(t1) * 1/d3(t2) * ...
      dn(tn-1)                = # tuples in Rn that join with tn-1
      agg(stuck path)         = 0

  * Take multiple random walks, average all of the unbiased estimates

Some details

* For a join query, need to pick a join order such that
  * index on every step
  * if cyclic join query, then 
    * pick a spanning tree as join order 
    * for a given sampled un-stuck path, test the rest of the join conditions manually
* Probability and General estimator

        prob(pi) = 1 / |R1| * 1/d2(t1) * ... * 1/dk(tk-1)

        n paths p1,... pn
        u(i) = 1 / prob(pi) if pi was successful walk
             = 0            otherwise (e.g., stuck, or fail predicates)

        Estimator is for any u and v
        1 / n SUM u(i) agg(i)

* Predicates and group bys
  * if index on selection predicate over R1, then directly sample a satisfying tuples using Olken's method
    * replace `1/|R1|` in `prob(pi)` with `1/|tuples satisifying condition in R1|` computed from an index scan
  * if group by G, put each path into appropriate bucket and compute estimates for each bucket independently
* Comparing with ripple join in terms of:
  * sampling efficiency

        k tables, N tuples per table, each tuple ti joins with d tuples in Ri+1
        let ripple join sample n from each table
            wander join made n random walks

        Ripple join

          p = (t1,... tk), each ti is sampled from Ri
          prob(p) = (d/N)^{k-1}     // of p being successful join tuple
          E[card] = n^k * prob(p)   // # expcted join results from ripple join's samples
          
          if d = 1, N=10^6, k=3
          n = 10,000 before first join result!

          Dependent on k and N

        Wander join

          let F be the fraction of tuples in Ri with a joining tuple in Ri+1
          prob(p) = F^{k-1}         // each step has F chance of getting another successful join
          E[card] = n * prob(p)

          argue that F would not be too small because normal join would then be cheap

          Indep of N!

  * Compute costs

          Ripple: O(kn^k)
          Wander: O(kn)   if hash indexes are O(1)

  * Ripple join converges to "full join" exactly.  Wander join does not -- could do sampling w/out replacement, but complicated.

Optimizer 

* High levels
  * Find connected components in table graph.  Wander join within each component, ripple join across components
  * enumerate all join orders
  * try them all independently one plan has 100 successful walks, pick one with best Var[agg()]E[running time]
  * can reuse all walks found towards final result (effort not wasted)
* performance: variance of final estimator after t seconds

        t     total seconds run
        Xi    estimator from ith walk
              e.g., u(i)agg(i) if successful
                    0          otherwise
        T     running time of 1 walk
        W     random walks in t

        final estimator:

          eq = 1/W SUM Xi   for all walks X0 to XW

        want to minimize its variance:

          Var[eq] = 
          E[Var[ eq | W ]] + Var[E[eq | W ]] = 
          E[Var[X1]/W] + Var[E[X1]] =
          E[Var[X1]/W] + 0 =
          E[Var[X1]]/E[W]  =
          Var[X1] * E[1/W] = 
          Var[X1] * E[T/t] = 
          Var[X1] * E[T]/t      // variance of estimator * cost per walk

  * So do random walks to estimate `Var[X1]` and `E[T]` 

Weirds

* Justify the index assumption
* Join graph optimization algs are all exhaustive -- hopes to have <= 8 tables in a join query




