---
layout: page
---

# Macrobase

From 1000x.io

1. The MacroBase paper argues that the engine can adapt to new application domains via the use of new feature transform operators. 
  a. Describe an application and target behavior for which this observation is applicable 
     (i.e., feature transforms are all that is needed for accurate processing), and describe the feature transform you would employ. 
  b. Describe an application and target behavior for which this observation is not applicable 
     (i.e., feature transforms alone are insufficient for accurate processing) and describe why.
2. Briefly propose an alternative way to explain outlying behavior.

Other questions

* They argue that automatically generated data is the future.  For those, analytic monitoring is the key application
  * What do we think is analytic monitoring?  
  * Are there other applications on this type of data?
  * Are there other ways that data will be generated in the future that are unsolved?
* Can they ever measure recall?  Does it matter?


High level notes

* This paper takes a lot of courage -- each of the components and the whole system has been studied to death, so to say that a new architecture is needed and that existing work can be demolished is a strong statement.
* The premise in the intro is ROCK SOLID.
  * IoT = huge volumes of streaming data = scalability and latency issues
  * IoT = heterogeneous = too many possible things to draw user attention
  * Humans use the data, but don't scale = "limited attention" and latency needs
* These entail the system that they build
  * streaming 
  * scalability/latency --> approximation and sketches
  * attention --> summarization via "data explanations"
* "Macrobase provides users with a set of interfaces that are specialized for analytic monitoring"



## Explain in normal terms how the system works

THis paper is kind of hard to read, because they talk about lots of technical details but don't go into connecting the dots to explain how all the techniques are used.

Detection

* In normal person terms, what is the goal of the outlier detection step?
  * What is the problem with the obvious way to do it? 
  * For existing techniques, what are the two key problems with them?
  * They use ADR on the outlier scores -- how does that work?

Explanation

* What is an explanation (in common sense terms, and in the paper's term)?
* What is OI-ratio/relative risk/support?  Why are we talking about them?
* What's FP-tree/frequent itemset mining?
* What's the basic approach and why are their optimizatins OK?
* What's the main difference between normal explanation and streaming?
  * AMC: What's the connection between heavy hitters and the non-streaming case?  
         Why is it the obvious solution to use?
  * What's a CPS tree and how does it relate to the AMC?

Detect outliers

* Goal: 
  * user specifies attr(s) for metric, compute outlier threshold
  * output is a boolean is_outlier label for each tuple
* Problems: detection sucks, and is slow
* Sucks
  * Z-score (aka std) depends on mean, which depends on outliers, so can't detect them
    * low breakdown statistic
  * MAD for single attr distribution and MCD for multidimentional coorelaton.
  * What is MCD's Scatter?
  * Honest that thees are for normal distributions.
* Slow
  * MCD and MAD need to fit the data (compute median and scatter), which too slow for whole stream
  * Take an exponentially decaying sample, and run MCD/MAD on sample instead
  * Like resevoir sampling, but adds a decay operation  ("adaptable damped reservoir")
* How to compute the threshold?
  * Compute "adaptable damped reservoir" for MAD outputs over time --> how does it work?

Summarize outliers