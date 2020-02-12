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


ASP primer and defining the search space

        A :- L1 .. Ln           // A is atom, L1...Ln is body
                                // if body is true, then derives "record(s)" A
        A :- not L              // derivation stops if L is true
        A.                      // defines a base "record"
          :- L                  // constraint.  should derive to False
          :~ L [n]              // soft constraint with penalty n
        l { A0 .. An } k        // l - k atoms in set should be true
                                // e.g., between 1 to 5 encodings

Defining vega-lite search space as rules

        marktype(point; line; ...)      // defines "base" records that defines design space
        mark(M) :- marktype(M)          // user specifies "mark(E0)" or "mark(bar)"
                                        // says mark M must be valid mark type

        obj_id(1..max_extra_encs).      // up to 5 object ids allocatable
        { encoding(E): obj_id(E) }.     // alloc unique object id for each encoding
        { channel(E,C): channel(C) } = 1 :- encoding(E).   // num encodings for a 
                                                           // given channel should be 1


        :- log(E), zero(E)              // log scale should not contain zero.
        0 { zero(E) } 1 :- encoding(E). // program can tell spec that encoding is zero
        0 { log(E) } 1 :- encoding(E).  // 

        // rules to define zero(), log(), discrete/contiuous channels, transforms, stacking, overlap, statistics, etc etc
        // anything that can affect a design decision

What about rules such as: for Quant, pos > len > angle > slope > area ...

        :~ channel(E,y), type(E,quant). [0]
        :~ channel(E,x), type(E,quant). [0]
        :~ channel(E,xlen), type(E,quant). [1]
        :~ channel(E,ylen), type(E,quant). [1]
        ...


* data schema as numrows, fieldtype, cardinality, extent, entropy, etc.
  * what about compositional statistics? 
  * if data transform can be a pipeline of A, B, C, then need to enumerate one atom for every combo
* task as a multi-class variable (summary, value).  
  * What about more complex/compositional tasks?


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


Eval shows

* Expressiveness
  * reconstruct APT/voyager preferences
  * show competitive perf to hand-coded search
* Show that rankSVM works, in the sense that the visualization is different than non-learned weights


How is Draco supposed to be used?

* Given a partial spec, fill in the rest
  * Where does partial spec come from?
  * Primarily for seeded recommendations
* Need to know what statistics will be useful for makin design decisions up front
* Need to know how many encodings are needed

Markov Logic Networks

* applies markov network to first-order logic for uncertainty inference
* unsatisfiable statements have prob 0, all tautologies have prob 1
* atomic formulas don't have truth value unless they are grounded
* sentence in MLN corresponds to a visualization (encodings, channels, etc) in draco
* P(v) = e^{-Cost(v)}
* MLN is similar to datalog + constraints

Questions

* How to verify that the hundreds of constraint rules are correct?
  (general problem with declarative programs, SQL included)