# Zach notes

* RSExplain: Causal paths is essentially provenance (defined directly by the query plan)
* Give 20 seconds when asking for questions
* identified the nuanced differeces from data xray and scorpion.  nice
* FD pruning only is useful if you DIFF on state and country

# DIFF

Several reviews mentioned that DIFF supports more metrics, which Scorpion cannot do,
or that DIFF's metrics "are similar" to Scorpion's.  These descriptions are fairly high
level, and leads to some natural questions:

* what types of metrics?  
* are Diff's supported metrics a superset of scorpion or simply different?
* does the formulation of the metrics affect the types of solutions?
* why are these metrics chosen?  for algorithmic convenience?  Or because it's useful to a real problem?

If the answers to these questions are not obvious, then it signals a good observation to START a deeper investigation of the technical differences.


Is embedding DIFF as an operator extension in SQL a technical contribution, or a good usability idea?

# Vs last week's papers

Adam made a good observation.  Both weeks are studying the problem of understanding

    f(Data) --> Output

* Last week is focused on understanding f() and its process of generating O
* This week is focused on parts of Data that cause O to take certain values


Ultimately, what makes a good "explanation"?  Discuss