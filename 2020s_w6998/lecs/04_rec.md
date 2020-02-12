# Draco

Intro

* Challenge: perceptual studies and design knowledge keep changing
  * how to continuously incorporate into vis design tools?
  * current systems are adhoc rules + search
* Want a common representation of the knowledge (a "knowledge base") + system that can use it
  * The knowledge is ASP statements.  System to use it is the clingo solver.  
* seek to make formal models of design knowledge a shared resources
  * implies that design knowledge is a matter of running comparison experiments between vega-lite statements
  * studies == partial rankings
* Borrows a lot from APT's formalisms, extended to 
  * use a constraint solver
  * support vega-lite
  * and soft constraints


Vega-lite is hierarchical, grammar needs to be flattened to use in ASP.  

        "mark": "bar",
        "encoding": 
          "x": 
            "field": "?"
            "type": "ordinal"
          "y":
            "field": "Horsepower", 
            "type": "quantitative",
            "aggregate": "mean"


        mark(bar)
        encoding(e0)    -- nesting == variable
        channel(e0, x)
        type(e0, ord)
        field(e0,_)
        ...


For instance, if data transform can be a pipeline of A, B, C, then need to enumerate one atom for every combo


How is Draco supposed to be used?

* 

Markov Logic Networks

* applies markov network to first-order logic for uncertainty inference
* unsatisfiable statements have prob 0, all tautologies have prob 1
* atomic formulas don't have truth value unless they are grounded
* sentence in MLN corresponds to a visualization (encodings, channels, etc) in draco
* P(v) = e^{-Cost(v)}
* MLN is similar to datalog + constraints