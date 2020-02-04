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

## Important Dates 

Percentages are of your total class grade.

* [Initial Prospectus](#prospectus)      2/12     (5%)
* [Related Works](#related)  3/4      (5%)
* [Prototype Check-in](#prototype)      3/23-25     (5%)
* [Project Showcase](#showcase)  4/29    (10%)
* [Report](#report)          5/10     (25%)



## Overview

The major portion of your grade is based on the research project.  It should take about 3-4 weeks to complete.  

Teams should consist of 1-3 people. In addition, if you have a project in mind, please indicate briefly (1--2 sentences) what you are thinking. We have included a list of possible projects at the end of this document although you are not required to choose from these.

Good class projects can vary dramatically in complexity, scope, and topic. The only requirement is that they be related to something we have studied in this class and that they contain some element of research -- e.g., that you do more than simply engineer a piece of software that someone else has described or architected. To help you determine if your idea is of reasonable scope, we will arrange to meet with each group several times throughout the semester.



## <a name="prospectus"/>Initial Prospectus 

Your ultimate research paper will describe the research problem, importance, hypothesis, related works, technical details and evaluation.  The prospectus is a sketch to get you to think about these aspects.   You will focusn on describing a research problem, and _your hypothesis_.  You will also provide a first pass at related work, a short 2 paragraph description of how you plan to complete the project, and metrics to decide _if it worked_.   

You should meet with Professor Wu prior to deciding your project.

Your prospectus should follow the example:

* [Click here for an example prospectus](/files/prospectus/prospectus.pdf)
* [Click here for the tex files](https://github.com/columbiaviz/columbiaviz.github.io/tree/master/files/prospectus)

**Submission**

1. Rename the filename of your prospectus to the following format, UNIs should be in **alphabetical order**. `prospectus_<UNI>_.._<UNIn>.pdf`
2. [**Click here to upload the file by 2/12 11:59PM EST**](https://www.dropbox.com/request/eT1Jf0dGlrH3ce8eweAp)

## <a name="related"/>Related Works

You will submit an updated version of your prospectus that contains a revised introduction (problem statement, hypothesis), and a substantially fleshed out related work section.  It should clearly articulate the novelty of the problem with respect to state-of-the-art.  You will need to find and review related literature, and look for software tools that may be related to your problem.  

**Submission**

1. Rename the filename to the following format, UNIs should be in **alphabetical order**. `related_<UNI>_.._<UNIn>.pdf`
2. [**Click here to upload the file by 3/4 11:59PM EST**](https://www.dropbox.com/request/eT1Jf0dGlrH3ce8eweAp)



## <a name="prototype"/>Prototype Check in

Your group will schedule 20 minutes to meet with Professor Wu to go over the project's progress and receive feedback.  Prepare a short 5 minute presentation with 4 slides (roughly 1 minute per slide):

1. Problem and motivation
2. Related work and challenges
3. Progress so far
4. Plan for rest of the project

*Submission*

* [Click here to sign up for an appointment during week of 3/23 to 3/27](https://calendar.google.com/calendar/selfsched?sstoken=UUlmUlc5VDIwWDJwfGRlZmF1bHR8MTUwY2E3NDBiMDNhMTU4ZDIyODhlMjFlZTAzZGMyZTU)




## <a name="showcase"/>Project Showcase 

Your team will prepare and present a project poster at the end-of-course poster session.   This gives you an opportunity to present a short demo of your work and show what you have accomplished in the class!

**Submission**

* Attend and present at the poster session.
* Give a short 3 minute talk about your project
  * 9 slides x 20 sec per slide



## <a name="report"/>Report 

You will prepare a conference-style report on your project with **maximum length** of 12 pages (10 pt font or larger, one or two columns, 1 inch margins, single or double spaced -- more is not better.) Your report should expand upon your prospectus and introduce and motivate the problem your project addresses, describe related work in the area, discuss the elements of your solution, and present results that measure the behavior, performance, or functionality of your system (with comparisons to other related systems as appropriate.)

Because this report is the primary deliverable upon which you will be graded, **do not treat it as an afterthought**. Plan to leave at least a week to do the writing, and make sure your proofread and edit carefully!

**Submission**

1. Rename the filename to the following format, UNIs should be in **alphabetical order**. `final_<UNI1>_.._<UNIn>.pdf`
2. [Click here to upload file](https://www.dropbox.com/request/eT1Jf0dGlrH3ce8eweAp) by 5/10 11:59PM EST



<a name="suggestions"></a>
## Project Suggestions

The following are examples of possible projects -- they are by no means a complete list and **you are free to select your own projects**.  In fact, a common source of ideas is to take your experience from another domain, and combine it with ideas from human data interaction.  Another approach is to take concepts from the papers we read, and apply them to another domain.  Projects often come in several flavors:

1. Research project: model an unsolved problem, propose or extend an algorithmic solution, evaluate and report findings.
2. Design: identify an underserved data problem for which a sound, composable interface doesn't exist, propose an interface and interaction design, build and evaluate it.
3. Fill a gap:  think about something useful that _should_ be easily doable, but is painful or impossible with current state of the art.  Fill that gap.





#### New Querying Interfaces

[Scalable](https://www.microsoft.com/en-us/research/uploads/prod/2019/01/Wu-drucker-QueryingVideos.pdf),
[Image](http://cidrdb.org/cidr2019/papers/p141-kang-cidr19.pdf),
[Databases](http://cidrdb.org/cidr2019/papers/p40-krishnan-cidr19.pdf) are on the horizon.  However, a major limitation is that the query interface is incredibly impoverished.  How do you specify that you want to find red cars that move along a trajectory?  Or to look for relationships between two objects over time?  Certainly not by writing SQL-like text queries.   The challenge is that video is fundamentally 3D, but query interfaces are 1D.  

* Idea 1: the core abstraction in relational algebra is Joins.  In video, it is likely also joins, but for the same image across video frames, or the relationship between objects across video frames.  The nature of trajectories, positioning, and timing are all core aspects to relating concepts in video.  Propose and implement a prototype to help users express video joins.
* Idea 2: VR can render videos as 3D objects.  What does a query language look like if designed for VR?  What types of joins, or filtering, make sense?  You should have VR experience.   


#### What We Talk About When We Talk About Data

How are data and analyses referred to and described in scientific work?  When data is presented as figures or tables, how is it referred to?  What are the verbs and nouns?  Is there a universal set of ways that figures are described (e.g., in terms of comparisons? in relative terms? ).  This can serve as the evidence for a new data analysis language.  
Analyze papers in ArXiV or [Viziometrics](http://viziometrics.org/api/) for their figures and captions and surrounding text (ArXiV provides LateX files)


#### A Task-oriented Language

Vsualization tools and languages such as Polaris, Vega-lite, and others focul on helping users specify the layout, visual encodings, and implicitly, the grouping and aggregations, of their data.  However, choosing the approriate aggregations, layouts, and visual encodings to answer a specific analysis task as quite challenging.  For instance, suppose a dataset contains attributes A and B.  If the task is "compare A and B", then at first glance, a scatter plot makes sense.  However, what if B only contains the two values "1990" and "2000"?  Then, it makes more sense to compare the distributions of A for the years 1990 and 2000.  Design a language that makes it easy for users to specify the _task_, and a compiler that generates the best visual presentation of the data for the task.



#### Precision Interfaces

[Precision interfaces](https://www.dropbox.com/s/09ri46n9zcv7jxh/precisioninterface-ipa20-submitted.pdf?dl=0) analyzes query logs and generates custom interaction components from the logs.  The goal is to scalably generate dozens or hundreds of custom interactive analysis interfaces for any analysis found in a log.    

* Precision interfaces is currently language agnostic and does not take into account the database nor the database contents.   Adapting the system to make weak but general assumptions about the nature of query plans, data, and query results can potentially improve the usability and usefulness of the generated interfaces.  
* Visualization design algorithms such as Draco propose ways to measure the "appropriateness" and "effectiveness" of a visualization.  HCI research has studied UI complexity for software interfaces based on ideas such as GOMS and Fitt's law.    Given a candidate interactive visualization interface (views and interactions) as well as a "workload" of queries users want to express, devise an "interactive interface appropriateness" measure.

<!-- 
* Visualization clients, including Precision Interfaces, generate SQL strings that are executed on a backend database.   This incurs the overhead of parsing and optimization on every interaction.  Precision Interfaces already models the interface as transformations of abstract syntax trees---propose a way to use query compilation 
-->


#### Miscellaneous Ideas

* Pick a class of visual analyses, and get it to scale to 10M+ points in the browser.  
* Pick a data type (document, records, images, music, etc), and design an analysis language/grammar for a useful but underserved class of tasks.
* Design an interface and set of interactions to help users visually perform causal inference on a big dataset

<!--

2. Win: pick an existing useful application and a well-recognized metric (latency, prediction, etc) and win against the state of the art.
3. Break and fix: implement a state of the art algorithm on real data, show that it doesn't actually work (results are poor, it's slow, etc), make it work.
4. Evaluate: there are many options out there, it's not clear which ones are actually best, and under what conditions.  Run a bake-off and evaluate.

#### Precision Interfaces

[Precision interfaces](https://www.dropbox.com/s/bac9qjz0s5m4kpx/precisioninterface-sigmod19-v2.pdf?dl=0) analyzes query logs and generates custom interaction components from the logs.  The goal is to scalably generate dozens or hundreds of custom interactive analysis interfaces for any analysis found in a log.    

* Precision interfaces is currently language agnostic and does not take into account the database nor the database contents.   Adapting the system to make weak but general assumptions about the nature of query plans, data, and query results can potentially improve the usability and usefulness of the generated interfaces.  
* Embed design heuristics into the interface generation process.  The system currently has a very simple model of "interface complexity" --- make it more real by taking existing HCI research into UI complexity and design into account.


#### Data Processing


#### Query-based Graph Visualization

Graphs are fundamentally high dimensional, and generating good graph visualizations is still an unsolved problem.  There are plenty of ways to visualize a graph---as a matrix, as a node-link layout (with many mayn layout algorithms), as histograms, and so on.  Suppose you know what analysis _queries_ (e.g., recursive SQL queries, or a query workload) have been run on the graph.  Can those queries be analyzed to recommend the appropriate visualization?


#### Data Cleaning

Understand how scientific articles use and talk about data.  Two possible directions:

Arachnid is a new explanation engine that automatically generates cleaning programs based on user specifications of data quality.  It is an extension to ideas from [Scorpion](https://www.dropbox.com/s/1v6dcb16r840sdo/scorpion-vldb13.pdf?dl=0).  Contact Eugene for a copy of Arachnid.  Some possible projects:

* Integrate Arachnid into an interactive data exploration interface in a way that the user can clean any part of a visualization without programming
* Implement a fast version of Arachnid in the browser


-->

