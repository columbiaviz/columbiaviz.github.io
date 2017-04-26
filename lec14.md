---
layout: page
---

# What is cleaning anyways?

What does it mean for a dataset to be dirty anyways?  With respect to what?

* integrity constraints
  * FDs are the classic constraints we discuss in intro to DB
  * Note that foreign and primary keys are special cases of how to use FDs to normalize a database
  * Classic Chase algorithm
* Application requirements

What is an example of dirtiness?  Can it happen to me?

* Luna's truth discovery paper sheds light on even pretty clean settings
* Do we think the rule-based approaches could solve Luna's problems?

How to decompose cleaning?

* Steps
  * Detect: what errors to repair
  * Repair: fix them
* What do you think is the realistic form of cleaning?
  * directly update the database?
  * send proposed errors to an expert?
  * something else?
* What are classes of errors that the DB literature deal with
  * Attribute errors: missing/incorrect values
    * value imputation, data repairing
  * Duplicates
    * dedup
  * Relevance error: data is irrelevant
    * delete it
  


# Data Source Integration

Truth finding on the deep web

What do we know?

* aggregating data from sources on the web is nice but hard.  But _how hard_?  Unclear in terms of quantifying before this paper
* What is the "deep web"?
  * HTML is not written by hand anymore, generated from data.
  * DBMS -> webapp -> HTML string -> browser
  * a webpage is a "view" over a database.
  * We see the browser, but deepweb is the dbms
* Luna looks at 2 domains that you would think would be clean: flights and stocks
  * search on google/yahoo for keywords (e.g., flights, stocks)
  * pikcs top pages, extracts their sources via crawling
    * federal aviation administration, AA website

The setup

* data model
  * object: a flight, a stock
  * attr/data item: takeoff time, duration, departure gate, etc
  * for given object's attr, single true value (debatable!  but fair assumption)
* Sources provide subset of objects and attributes
* sources can differ in three ways
  * schema: structure/attrs differ
  * instance: objects identified (pkeys) using different attrs (id vs name+company)
  * value: true values, diff value, diff format, wrong, missing, etc
* too  many issues! paper fixes schema and instance, only focus on value

### The Sources

Stock

* 55 sources
  * search "stock price quotes", "AAPL quotes" and find deep-web sources of top 200 results
  * 89 sources total, 76 use GET methods, 55 crawlable (others use JS/reject crawling)
  * 1000 stocks: 30 from dow, 100 from nasdaq, 873 random from russel 3000
  * crawl once a day during July after market close
  * object: stock on day X
* attrs
  * 3-71 attrs per source; 333 total (local attrs); 153 after manual matching (global attrs)
  * distribution follows zipf's law
  * (21) 13% provided by 1/3 of source; picked 16 of them to study.
* Performed data cleaning e.g., 6.7M = 6700000 = 6,700,000
* picked 5 popular sources, voted to pick gold standard values for 200 symbols

Flight dataset

* 38 sources, 1200 flights from AA, UA, Continental hub airports
* crawl every day in Dec
* object: flight on day X
* 43 local, 15 global, 4-15 attrs per source
* 6 (40%) attrs in 50% of sources; used those
* 3 airline websites on 100 flights as gold

### The Data

Redundancy

* Stocks have high coverage
  * all sources provide 90% of stocks
  *  50% sources have all stocks 
* Flights
  * 36% sources cover 90% flights; 50% flights in 60% sources
  * 28% sources provide 50% attrs; 29% attrs in 50% sources
* small # extremely common/rare attrs, most are found in small number of sources (fat tail)

Are values consistent?

* What are possible metrics?
  * # values
  * entropy: higher entropy --> higher inconsistency
  * dominant value D: val found in most sources
  * deviation from dominant value (std, but use dominant instead of mean. why?)
  * how dominant: % sources with dominant val D
  * are dominant values == gold?
* fundamentally what are these metrics measuring?
  * disagreement!  variety and spread of values
  * f(distribution of values)
* stocks
  * 3.7 vals/attr
  * 17% attrs have 1 value (37% if exclude a bad data source); 30% have 2 values.
  * valuues seem to be similar
    * low deviation and entropy.  
    * Suggests data is pretty similar. (one would hope so for stocks!)
  * realtime values have less inconsistency than statistics -- more semantic ambiguity with statistics (see below)
* flights
  * 1.45 vals/attr
  * 61% attrs have 1 val; 93% have <= 2 vals
  * large deviation in some attrs such as departure times (~15minutes off)

Why the inconsistency?

* Semantics (46% cases): dividend computed for year or quarter?  Market cap? Yield?
* Instance ambiguity (6%): stock symbol interpreted incorrectly (stock was terminated)
* Out of date (34%) stale data
* Data units (1 error): 76"B" instead of 76"M"  (billion instead of million!)
* Wrong data (11%)
* Stock data saw all types of inconsistency, flights saw semantic, out of date, and pure errors (56% cases)

### Does dominance work?  Can I take majority vote and call it a day?

Stock

* 42% attrs of dominant vals supported by >90% sources 
* dominance factor seems correlated with precision: 90% if in 50% sources
* 90% overall

Flight

* lower inconsistency (higher dominance factor), lower precision
* 80% prec at 60% dominance factor.  Big dip at 50% due to copying
* 85% overall

Very high dominance is usually correct.  Precision quickly drops when dominance decreases

Are sources accurate?  (% of its values are gold) (Figure 7)

* stocks: 
  * 86% average
  * 35% have 90% acc.
  * authoratative sources: 83-90%
* flight
  * 80% avg
  * 40% sources > 90% acc
  * authoratative sources: 71-90%

Data copying

* why is this bad?  skews voting scheme. ballot stuffing 
* copynig everywhere:
  * partnerships
  * redirect queries to third party
  * iframes
  * objects/attrs almost identical
* accuracy of copied source varies!
  * stock 75-92% 
  * flight 50-90%
* copying from bad sources?  why?
* removing copied sources helps dominant values (majority vote) a lot!


### Data Fusion

Compare 15 approaches from research to majority vote scheme. Categories

* Web-link based: page rank on source 
  * (node = source, edge if share a value)
* Information retrieval: similarity measures
  * each value is 1,0,-1 vector.  one val for each source
  * 1 if source provides the value, -1 if it provides different value, 0 otherwise
  * seed with set of true values
* Bayesian
  * accuXXX methods.  fancy
* copy-aware: discount copying

All variations of voting basically

* iterative algorithms
  * source quality proportional to agreement with others
  * weigh in majority vote is the quality
  * iterate between source quality and majority vote until converge
* taking into account
  * trustworthiness (bootstrap by labeling some sources with quality)
  * difficulty of attributes
  * similarity and formatting of values (recall values were preprocessed for this paper)
  * copying (identified manually)

High level results

* majority vote < best source < best fusion
  * having best sources important (50% flight errors due to trustworthiness)
  * picking fusion method matters [not a promising result :( ]
* table 9:
  * stock:  vote: 92%;  accuformatter: 94%;  accucopy: 88%
  * flight: vote: 88%;  accuformatter: 95%;  accucopy: 98%
  * accucopy bad for stock, best for flight
* trustworthiness: learning a bayesian prior on which source is best is helpful 
* bias: learning which sources copy from one another is helpful 
* most accurate methods are slowest by factor of 1000x (fig 12)
* no one fusion method that wins 
* fusing small number of good sources >> fusing all sources

Takeaways

* unique slowflake: every ource has its own attriutes of interest.  has its own values for those attributes
* learning the best source matters
  * why nielson/bloomberg/reuters make money
* combining sources, even simple majority vote, helps
* trade off improved accuracy for algorithmic efficiency
* no best algorithm (recall the data cleaning challenges from beginning of lecture?)
* small number of good sources usually good enough! (positive result)










# Constraints

## The Chase

Al Aho, et al

Given a decomposition and a set of FDs F, can repeated applications of F on the decomposition reconstruct a full tuple?


            R1 = (ABDE)
            R2 = (ACDF)
            R3 = (BCEF)

            FDs: A -> B,  F -> E

                 A    B    C    D    E    F    G
            t1 = a1   a2   b13  a4   a5   b16  b17
            t2 = a1   b22  a3   a4   b25  a6   b27
            t3 = b31  a2   a3   b34  a5   a6   b37

Apply `A -> B`

                 A    B    C    D    E    F    G
            t1 = a1   a2   b13  a4   a5   b16  b17
            t2 = a1   a2   a3   a4   b25  a6   b27
            t3 = b31  a2   a3   b34  a5   a6   b37

Apply `F -> E`

                 A    B    C    D    E    F    G
            t1 = a1   a2   b13  a4   a5   b16  b17
            t2 = a1   a2   a3   a4   a5   a6   b27
            t3 = b31  a2   a3   b34  a5   a6   b37

            t2 is in R1 U R2 U R3, thus lossless



* At a high level
  * each FD implies a repair expression 
  * repeatedly apply repair expressions until reach a fixed point.  Either full table is inferred or not
* constraint-based repair algorithms are basically variations of this

## Denial Constraints

A negative logical statement that should not evaluate to true.

        FOR ALL x1, x2, .. !(R(xi), R(xj)..., P1 ^ P2 ... ^ Pm)

        x1...xk      attributes in the database
        R(xi)        a relation R a la datalog
        P1 ... Pm    simple predicates
                     v1 OP v2
                     v:  attribute or value
                     OP: = < > != <= ~


Functional Deps can be expressed this way

        A -> B
        FOR ALL x !(R(x.a,x.b), R(x.a', x.b'), x.a=x.a' AND x.b != x.b')

Denial constraints are nice because falsifying any predicate falsifies the entire constraint

* for the above FD, we can either force `x.a != x.a'` or `x.b = x.b'`.    These are valid "repair" expressions.

High level statement

* given a set of denial constraints E and a database instance I that contains constraint violations, 
  generate I' that does not violate any constraints and has minimal distance dist(I, I')
* what's a sensible distance?
  * number of cells changed  (Cardinality-Minimality Cost) --> NP-hard for FDs only
  * numeric distance squared, string edit distance
* what are the key challenges?
  * how to model violations?  
  * how to avoid cell repairs that introduce new errors?  
  * given a set of violating cells, how to fix them?

### Modeling Violations

Hypergraph

* node: table cell
* hyper edge: violation

            
               A B C D
            t1 1 2 1 1
            t2 1 1 2 1
            t3 2 1 3 1
            t4 3 1 3 5

            C1: A -> C
            C2: B -> C
            C3: R[D=5] -> R[C=5]

            Violating sets
            C1: e1: t1.A, t2.A, t1.C, t2.C
            C2: e2: t2.B, t3.B, t2.C, t3.C
            C2: e3: t2.B, t2.C, t4.B, t4.C
            C3: e4: t4.C, t4.D

Questions

* How many cells may need to change for a given hyperedge?
  * size of the largest chain of connected variables in the DC's repair expressions
* How can we minimize number of changes needed?
  * prioritize cells in the min vertex cover of the hypergraph
  * `t2.C, t4.C` for above example

### Fixing violations

High level alg

* start with min vertex cover MVC
* expand set of repairs from the MVC
  * frontier = a cell in MVC
  * follow all repair exprs
  * expand all encountered variables (cells) and add to frontier

              for t2.C:

              e1: t2.C = t1.C.  add t1.C to frontier
                                t1.C not in any other repair exprs, skip
              e2: t2.C = t3.C.  add t3.C to frontier
              e3: t2.C = t4.C   add t4.C to frontier
              e4: t4.C = 5      

* Repair context:

              frontier:     t1.C, t2.C, t3.C, t4.C
              repair exprs: t2.C = t1.C
                            t2.C = t3.C
                            t2.C = t4.C
                            t4.C = 5
               
* Turn frontier+repair exprs into constraint problems for solvers


              DC1: !(L(r,d,y), r="A", d<3)
              DC2: !(L(r,d,y), y>4, d<4)

              t1: (A,2,5)
              repair problem or t1.d is:

                minimize (t1.d - 2)^2
                s.t      t1.d >= 3
                         t1.d >= 4

              note that it could instead repair t1.r and t1.y instead, but t1.d is "minimal"


### Algorithm

              loop
                mvc = compute_ordered_mvc()
                while |mvc|
                  c = cell from mvc
                  rc = new repair context
                  for edge in c's hyperedges
                    rc += expand frontier using edge
                  assignments = solve(c, rc)
                  database.update(assignments)

                rebuild graph
                if no graph: break
                if cells in graph not yet touched, continue

Violation detection dominates the cost

* O(Ncells^|atoms|)
* atoms == # tables in the denial constraint

solve()

* pick strings from other tuples
* use QP for numbers, maybe take the number of undetermined variables into account in an outer loop

### Evaluation

Not great

* default e?  not stated
* report best of 6 runs
* What are the constraints?
* What are the attribute types?
* "scalability" test increases the number of simple conditional FDs
* Does MVC matter?  A bit.

Errors

* each cell has e% chance to be changed
* str: change a character to "X"
* num: pick a random numerical value

# Statistical

Limitation for constraint approaches is that 

* who comes up with constraints?  what if they are incomplete?
* does resolving constraints improve the application?
* How about we directly use the application as a quality measure for deciding what to clean?

High level optimization framework

        Quality measure(dataset)
                |
                |
                | synthesize sequence/set of cleaning operations
                |
                |
        Cleaning Operators

* Examples
  * Constraints:
    * data: database
    * quality: # violations
    * cleaning operators: value assignment
    * optimization: heuristics
  * wrangler
    * data: input string(s)
    * quality: # output string(s)
    * cleaning operators: fold/unfold/extract/regex/etc
    * optimization: A\* in most recent paper (foofah)
  * Activeclean
    * data: table
    * quality: convex model
    * cleaning operators: reassign tuple(s) values via oracle
    * optimization: pick best set of tuples
  * Boostclean
    * data: table
    * quality: ML model
    * cleaning operators: simple, parameterized python functions
    * optimization: boosting
  * Visualization (scorpion)
    * data: table + aggregation query
    * quality: user complaints
    * cleaning operators: delete predicate
    * optimization: greedy search
  * Add your own flavor
    * optimization: backprop?  why not?

## ActiveClean 

Models are natural quality measures

Why is incremental cleaning for models hard?

* simpsons paradox -- mixing distributions leads to weird results
* cleaning more may make model worse.  Seems counter-productive

Problems to tackle

* If I clean a sample S, how to update the model correctly?
* What sample should I pick to improve the model the most?  
* Is this the same as active learning?

### Updates

            T is the model params
            loss: convex parameter curve
            T_new = T_d - gamma * gradient(loss(T_d))

Ideally, go through each point in the dataset, compute its gradient wrt T, take the average.
This is gradient descent

            g*(T) = gradient(loss(T)) = 1/N SUM_i gradient(loss(x_i, y_i, T))

But this relies on `x_i` and `y_i` all being clean.  Need to estimate `g*(T)` from things we have already cleaned along with a dirty sample that we will clean.

            g_c:   gradient over already cleaned data
            g_s:   gradient over sample
            alpha: |# clean|/|dataset|
            g(T) = alpha * g_c(T) + (1-alpha) * g_S(T)

            # this is normal gradient descent over subset of cleaned data R_clean
            g_c(T) = 1/|#clean| * SUM_{i in R_clean} gradient(loss(x_i, y_i, T))

            # s is the sample
            # p(i) is probability of sampling x_i.  allows for importance sampling
            # each sample is cleaned
            g_s(T) = 1/|s| SUM_{i in s} 1/p(i) * gradient(loss(x_i_cleaned, y_i_cleaned, T))

            T_{t+1} = T_{t} - gamma * g(T)

### Other stuff


How do we set `p(i)`?  Uniform sampling may work, but some records may be more important than others.
Ideally want proportional to the magnitude of a clean record's gradient.

            p(i) ~ |gradient(loss(x_i_clean, y_i_clean, T))|

But clearly we don't know that.  One way is to just estimate using the dirty data:

            p(i) ~ |gradient(loss(x_i, y_i, T))|


What are candidate dirty records?

* What if we already knew what's dirty?  Then initialize R_clean and start from there.
* Otherwise, use the cleaned records to learn a classifier that learns what type of error a record exhibits

Evaluation

* Solid work
* Does cleaning matter?  Yes, better for systematic errors.  5% systematic erro --> 10% lower acc
  * compare full cleaning, no cleaning, delete dirty data, robust model, and AC
  * mixing dirty and clean also is a bad idea.
* Does AC work if we know the dirty records up front?
  * compare active learning, sample clean, AC+oracle
  * 2x more accurate than active learning after 500 samples/ere
* If we don't know what's dirty, it's less good, still better than activelearning/sample clean
  * adaptive detection better with systematic errors, no benefit over no detection if random errors.
