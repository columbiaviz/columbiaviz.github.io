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


