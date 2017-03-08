---
layout: page
---

# Explanations

What are examples of explanations?

* Scorpion (sunita's extension)
* QFix
* Macrobase
* Crowdsourced hypotheses and explanations: http://vis.berkeley.edu/papers/CrowdAnalytics/
* LIME
* DNN

          data --> f() --> output
          what is f doing?
          why output?


Provenance primer

* Lineage
* Aside: Semirings??

# Scorpion

        database --> agg query --> viz

SubZero observation

* Lineage is not very useful
* Draw connection with linked brushing

Scorpion

* Applications
  * data cleaning
  * marketing analysis
* Outliers, or "why doesn't X look like Y?"
  * iDiff for cubes in a datacube
* What makes this different than typical outlier explanation or decision trees?  aggregation
* Sensitivity analysis primer
  * for individual tuples
  * this is for the whole relation

Variations

* Why questions 
  * Why is a result tuple missing?
    * change query
    * change input database
  * Why does a result tuple exist?
    * cahnge query/input database
  * Why is a result tuple incorrect?
  * Why are a set of results incorrect
* Explanation Variations for scorpion type question
  * What sets of tuples can I remove? (amol)
  * What parts of the query can I modify? (Scorpion is a subset of this)
  * What data could I add to the database?
  * QBE
    * Given input and output, derive the query
    * reverse engineering aggrgation queries


# QFix

        database --> querylog --> database




# Lime

        database --> ML --> prediction

* LIME: explains predictions of _any_ classifier in interpretable and faithful manner
  * Providing exlanations of predictions increase acceptance of movie recs and other predictors (cited)
* Motivating Concern: if users do'nt trust a model or prediction, they will not use it
  * Trust has 2 definitions
    * trusting a prediction: wether individual prediction is trustworthy
    * trusting a model: trusts it to behave in reasonable ways if deployed
  * Other worries
* Contributions
  * LIME: generate explanaitons for any classifier/regressor using local approximations using interpretable model
    * Q: what's an "interpretable model?"
  * SP-LIME: selects set of representative instances+explanations to address the second type of trust.  Submodular optimization
* Objectives for explanations
  * Interpretable: provide qualitative understanding between join values of input variables and predicted value
  * Local fidelity: correspond to how model behaves in vicinity of predicted instance.  local features may not = global features
    * full faithful would mean the entire model!
  * Model agnostic: treat model as black box
  * Global perspective: some diverse explanations of instances representative of the model

What is an interpretable representation? (Problem Formulation)

* Binary vector indicating presence or absence of a e.g., word for text, or patch of image
        
        x in R^d as original features representation
        x' in {0,1}^d' as interpretable representation
        Q: how to transform x --> x'?
           Easy in some cases:
            text: bag of words 
            image: super pixels/patches


* Interpretable model `g in G` e.g., linear model, decision truee, etc
  * domain of g is x' 
  * `O(g)` is some complexity measure of `g` e.g., depth of tree, # non-zero weights
* Model `f: R^d --> R` e.g., classifier `f(x)` is probability x belongs to a given class
* `PI_x(z)` is distance between instances `z` and `x`  (locality measure)
* `L(f,g,PI_x)`: how unfaithful `g` is in approximating `f` in locality defined by `PI_x`

        Explanation(x) = argmin_{g IN G} (L(f,g,PI_x) + O(g))     (EQ1)

* Toy Procedure (sample aronud instance, translate to interpretable space, get labels, fit a model `g` using EQ1l)
  * Sample inputs near `x` weighed by `PI_x`
  * Sample instances `z'` around `x'` by drawing nonzero elements of `x'` uniformly (# draws is uniformly random)
  * Translate `z'` into original space `z` and use `f(z)` to get `z'`s true label.
  * Optimize (EQ1) using this dataset of `z'`s and their labels.

Sparse linear model algorithm


        f: black box classifier
        N: # samples to draw
        x: instance
        x': interpretable version
        K: lengeth of explanation (# non-zero entries in x'/z' allowed)
        LIME(f, N, x, x', PI_x, K)

          Z = {}
          for i in range(0, N)
            z' = sample_around(x', PI_x)
            z = z' in f's feature space
            Z += { z', f(z), PI_x(z) }
          w = K-Lasso(Z, K) with z' as features, f(z) as target

          return w
          

