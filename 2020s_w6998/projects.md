---
layout: page_2020
---

<style>
.cool {
  background-color: steelblue;
  color: white;
  text-weight: bold;
}
</style>

### Important Dates 

Percentages are of your total class grade.

* Prospectul      2/12     (10%)
* Check-in        3/12     (0%)
* Project Showcase  4/30    (10%)
* Report          5/10     (40%)



### Overview

The major portion of your grade is based on the research project.  It should take about 3-4 weeks to complete.  

Teams should consist of 1-3 people. In addition, if you have a project in mind, please indicate briefly (1--2 sentences) what you are thinking. We have included a list of possible projects at the end of this document although you are not required to choose from these.

Good class projects can vary dramatically in complexity, scope, and topic. The only requirement is that they be related to something we have studied in this class and that they contain some element of research -- e.g., that you do more than simply engineer a piece of software that someone else has described or architected. To help you determine if your idea is of reasonable scope, we will arrange to meet with each group several times throughout the semester.



### Prospectus 

Your research prospectus will contain an overview of the research problem, _your hypothesis_, first pass at related work, a description of how you plan to complete the project, and metrics to decide _if it worked_.   

Your prospectus should follow the example:

* [Click here for an example prospectus](./files/prospectus/prospectus.pdf)
* [Click here for the tex files](https://github.com/w6113/w6113.github.io/tree/master/files/prospectus)

**Submission**

1. Rename the filename of your prospectus to the following format, last names should be in **alphabetical order**. `prospectus_<UNI>_.._<UNIn>.pdf`
2. [**Click here to upload the file by 2/12 11:59PM EST**](#)




### Final Project Showcase 

Your team will prepare and present a project poster at the end-of-course poster session.   This gives you an opportunity to present a short demo of your work and show what you have accomplished in the class!

**Submission**

* Simply attend and present at the poster session.



### Report 

You will prepare a conference-style report on your project with **maximum length** of 12 pages (10 pt font or larger, one or two columns, 1 inch margins, single or double spaced -- more is not better.) Your report should expand upon your prospectus and introduce and motivate the problem your project addresses, describe related work in the area, discuss the elements of your solution, and present results that measure the behavior, performance, or functionality of your system (with comparisons to other related systems as appropriate.)

Because this report is the primary deliverable upon which you will be graded, **do not treat it as an afterthought**. Plan to leave at least a week to do the writing, and make sure your proofread and edit carefully!

**Submission**

* [CMT website](#) by 5/10 11:59PM EST


<a name="suggestions"></a>
## Project Suggestions

The following are examples of possible projects -- they are by no means a complete list and **you are free to select your own projects**.  In fact, a common source of ideas is to take your experience from another domain, and combine it with databases/data management.  Projects often come in several flavors:

0. Make DataBass better: extend DataBass in a significant way, and evaluate it against other systems.  For instance, support DSM/PAX, distributed execution, LLVM compilation, lineage, etc.  Code quality matters for this option.
1. Research project: model an unsolved problem, propose algorithmic solution, evaluate and report findings.
2. Win: pick an existing useful application and a well-recognized metric (latency, prediction, etc) and win against the state of the art.
3. Break and fix: implement a state of the art algorithm on real data, show that it doesn't actually work (results are poor, it's slow, etc), make it work.
4. Evaluate: there are many options out there, it's not clear which ones are actually best, and under what conditions.  Run a bake-off and evaluate.
5. Fill a gap:  think about something useful that _should_ be easily doable, but is painful or impossible with current state of the art.  Fill that gap.


#### Precision Interfaces

[Precision interfaces](https://www.dropbox.com/s/bac9qjz0s5m4kpx/precisioninterface-sigmod19-v2.pdf?dl=0) analyzes query logs and generates custom interaction components from the logs.  The goal is to scalably generate dozens or hundreds of custom interactive analysis interfaces for any analysis found in a log.    

* Precision interfaces is currently language agnostic and does not take into account the database nor the database contents.   Adapting the system to make weak but general assumptions about the nature of query plans, data, and query results can potentially improve the usability and usefulness of the generated interfaces.  
* Embed design heuristics into the interface generation process.  The system currently has a very simple model of "interface complexity" --- make it more real by taking existing HCI research into UI complexity and design into account.

#### Deep Neural Inspection

[DeepBase](https://medium.com/thewulab/deep-neural-inspection-with-deepbase-de3653257643) is a system to perform deep neural inspection: it extracts hidden unit activations (or other types of behaviors) and computes the statistical relationships with user-specified hypotheses.    

* Idea 1: Use ideas from class to make the system scalable across a cluster of machines.  
* Idea 2: Hypotheses are currently represented as independent vectors/matrices and processed one at a time (essentially).    Since most hypotheses are binary or have a restricted value range, there may be opportunity for bit-level packing and shared processing.  


#### Lineage 

[Smoke](https://www.dropbox.com/s/6xvg5qkdret60jk/smoke-vldb18-revision.pdf?dl=0) is the fastest lineage-enabled database engine.  It captures the relationships between output and input records as efficient lineage indexes.  It turns out, this can be used to express and speed up interactive applications such as visualizations.  Extend or use it in interesting ways 

* There are a number of compression techniques that are possible to reduce the storage costs, but they have trade-offs in terms of storage reduction vs write overhead vs lineage query lookup costs.  Explore ways to generate compressed representations that do not increase, or even reduce the overhead of lineage capture.
* [Smoke](https://arxiv.org/abs/1801.07237) is a query compiler instrumented to generate lineage.  It is written in C++, and emits C++.  If the goal is to compile queries into C++ (or C), a high level language like Python may be easier to program in.  Report on the benefits (or weaknesses) of using a high-level dynamic language to write a query compiler.  Python interoperates well with C -- are there opportunities to dynamically compile queries into C and link it into the same Python process?
* The [Smoke HILDA paper](https://www.dropbox.com/s/fkp5hk1gp4lrg9h/smoke-hilda18.pdf?dl=0) envisioned a world where any interactive applications built on top of a lineage-supporting data store can inter-operate with any other application.  No longer are applications siloed!  Data selected, analyzed, and annotated in any application should be connected to any other application!  This requires connecting the core functionality in Smoke with application level lineage support and tracking.  Is there a simple app toolkit/library, with a small set of primitives, that could make it easy to build applications that enable this vision?  Is something like react or elm a good fit?


#### New Querying Interfaces

[Scalable](https://www.microsoft.com/en-us/research/uploads/prod/2019/01/Wu-drucker-QueryingVideos.pdf),
[Image](http://cidrdb.org/cidr2019/papers/p141-kang-cidr19.pdf),
[Databases](http://cidrdb.org/cidr2019/papers/p40-krishnan-cidr19.pdf) are on the horizon.  However, a major limitation is that the query interface is incredibly impoverished.  How do you specify that you want to find red cars that move along a trajectory?  Or to look for relationships between two objects over time?  Certainly not by writing SQL-like text queries.   The challenge is that video is fundamentally 3D, but query interfaces are 1D.  

* Idea 1: the core abstraction in relational algebra is Joins.  In video, it is likely also joins, but for the same image across video frames, or the relationship between objects across video frames.  The nature of trajectories, positioning, and timing are all core aspects to relating concepts in video.  Propose and implement a prototype to help users express video joins.
* Idea 2: VR can render videos as 3D objects.  What does a query language look like if designed for VR?  What types of joins, or filtering, make sense?  You should have VR experience.   

#### Query-based Graph Visualization

Graphs are fundamentally high dimensional, and generating good graph visualizations is still an unsolved problem.  There are plenty of ways to visualize a graph---as a matrix, as a node-link layout (with many mayn layout algorithms), as histograms, and so on.  Suppose you know what analysis _queries_ (e.g., recursive SQL queries, or a query workload) have been run on the graph.  Can those queries be analyzed to recommend the appropriate visualization?

#### What We Talk About When We Talk About Data

How are data and analyses referred to and described in scientific work?  When data is presented as figures or tables, how is it referred to?  What are the verbs and nouns?  Is there a universal set of ways that figures are described (e.g., in terms of comparisons? in relative terms? ).  This can serve as the evidence for a new data analysis language.  Analyze [Viziometrics](http://viziometrics.org/api/) and ArXiV for their figures and captions and surrounding text (ArXiV provides LateX files)

<!--
#### Bake-off

There are more and more database implementations popping up from big companies: [uber](https://eng.uber.com/aresdb/),   

-->



<!--


#### Data Cleaning

Understand how scientific articles use and talk about data.  Two possible directions:

Arachnid is a new explanation engine that automatically generates cleaning programs based on user specifications of data quality.  It is an extension to ideas from [Scorpion](https://www.dropbox.com/s/1v6dcb16r840sdo/scorpion-vldb13.pdf?dl=0).  Contact Eugene for a copy of Arachnid.  Some possible projects:

* Integrate Arachnid into an interactive data exploration interface in a way that the user can clean any part of a visualization without programming
* Implement a fast version of Arachnid in the browser



-->




