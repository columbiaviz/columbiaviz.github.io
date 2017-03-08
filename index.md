---
layout: page
---

# Overview

Human beings rely on summarizing and visualizing data to make informed decisions.  The number and volume of data continues to increase at exponential rates, and new user-facing systems and modalities are needed to handle the scale and heterogeneity of future data.
This course surveys the landscape interactive data exploration systems along several axes.

* What interaction modalities do modern systems provide?
* How are such systems developed and optimized to ensure interactivity?
* What novel functionality can drastically enhance the user's understanding of the dataset?
* Can we take advantage of domain-specific data and needs?

<br/>


{: .overview .table .table-striped :}
| Staff+OH     |  [Eugene Wu](http://www.eugenewu.net) (Instructor)   | Weds 4-5PM |
|              |  [Thibault Sellam](http://homepages.cwi.nl/~sellam/) | By Appt    |
| Meetings     | Weds 2-4PM 503 Hamilton Hall |        First 1.5 hours paper discussion<br/>Last 30 minutes open discussion.        |
| Units        | 3             |                |
| Grading      | Questions     | 10% |
|              | Participation | 15% |
|              | Assignments   | 15% |
|              | Project       | 60% |
|              | Presentation  | 0-10% extra credit |
|              | If publishable quality | >10-20% extra credit |
|Communication | [Piazza](https://piazza.com/class/ivpqa35byxu4o) | Aside from personal questions, use Piazza instead of email. |
|              | [Course Github](https://github.com/columbiaviz/) | |


#### Course Expectations

What This Class is **NOT**

* Our goal is *not* to learn how to design effective or beautiful visualizations.  Our goal is to understand how modern systems are engineered, and explore the research opportunities in visual data exploration.

What I expect from You

* Students should be comfortable reading research papers; you will read, answer questions, and comment on the readings before class.
* Students should be comfortable coding data processing systems;  familiarity with database query execution, some machine learning, and algorithms is expected.
* Students are expected to active participate in discussion in class; participation is a large part of the grade.
* Students should be comfortable conducting a research project and writing up the results in a research paper format.

#### Assignments

* [Homework 1](./hw1)
* [Homework 2](https://github.com/cudbg/stream/blob/master/src/prototype/README.md)
* [Homework 3](https://github.com/cudbg/stream/blob/master/src/chrome/README.md)
* [Homework 4](https://github.com/cudbg/stream/tree/master/src/prototype#assignment-4)
* Homework 5



For assignments, you allowed 5 penalty free late days to use throughout the semester. One late day equals one 24 hour period after the due date of the assignment. Once you have used your late days, there will be a 20% penalty for each day an assignment is late. You do not need to explictly declare the use of late days; we will assign them to you in a way that is optimal for your grade when different assignments are worth different numbers of points. Late days may not be used for the final project.



#### Project (semester long)

You will pursue a [semester long research project](./proposals) related to this course.
The project is a significant part of the course grade.


#### Paper Questions (every class)

You are expected to answer the short questions associated with the readings every course.
The class reviews must be submitted by **9PM the day before class**.

{: .btn :}
[Add your answers to the appropriate lecture's wiki page](https://github.com/columbiaviz/columbiaviz.github.io/wiki)


#### Paper Presentations

You have the _option_ to present as a group (1-2 people) for one lecture on a topic/paper of your choice (within reason).  The paper(s) you select can be from the list given below.  You are also free to list a paper of your choice as long as it matches the themes of the class.
**This list must be submitted by midnight Feb 1.**

You will be asked to complete three milestones for the presentation. Their purpose is to ensure high presentation quality---it is also a good excuse to practice your presentation skills and get feedback:

1. **2 weeks before your presentation**: present to Professor Wu
2. **1 week before your presentation**: present to two or more classmates and get feedback.  The classmates should send me their notes from the presentation.
3. **Day of class**: give awesome presentation

{: .btn :}
[Submit the teammates and papers to present](https://goo.gl/forms/4ymov5u7dFo2k7Ft1)


# Schedule

{: .schedule .table  :}
|  Day | Presenter | Papers                                                                      | Notes/Due |
|------|-----------|-----------------------------------------------------------------------------|--|
| 1/18 | Eugene    | Introduction                                           |  |
| 1/25 | Eugene    | Specification.                                                              | [Readings + Qs](https://github.com/columbiaviz/columbiaviz.github.io/wiki/Visualization-Specifications) <br/> [HW 1](./hw1) |
| 2/01 | Eugene    | Performance overview, end-to-end systems                                 | [Readings + Qs](https://github.com/columbiaviz/columbiaviz.github.io/wiki/End-to-End-Visualization-Systems) <br/> [Submit presentation requests](https://goo.gl/forms/4ymov5u7dFo2k7Ft1) <br/> Turn in project teams in class!     |
| 2/08 | Eugene    | Sampling                                                     | [Readings + Qs](https://github.com/columbiaviz/columbiaviz.github.io/wiki/Sampling)<br/>[Project Prospectus Due](./proposals) <br/>[Stream HW 1 released](https://github.com/cudbg/stream/blob/master/src/prototype/README.md)      | 
| 2/15 | Eugene    | Prefetching/Network                                          | [Readings + Qs](https://piazza.com/class/ivpqa35byxu4o?cid=25)<br/>[Stream HW1 due](https://github.com/cudbg/stream/blob/master/src/prototype/README.md) <br/>[Stream HW 2 released](https://github.com/cudbg/stream/blob/master/src/chrome/README.md) |
| 2/22 | Gabriel/Daniel | Specialized Systems: Macrobase (and BlinkDB?)            | [Readings + Qs](https://piazza.com/class/ivpqa35byxu4o?cid=36) <br/> Evaluation functions for Stream HW2 due. |
| 3/01 | Alireza/Luren | Dremel                                                    | [Readings + Qs](https://piazza.com/class/ivpqa35byxu4o?cid=50) <br/> Prediction functions for Stream HW2 due 3/5. |
| 3/08 | Eugene    | Explanation + [Midpoint Review](./proposals#midpoint)         | [Readings + Qs](https://piazza.com/class/ivpqa35byxu4o?cid=52)<br/>[HW 4 is out](https://github.com/cudbg/stream/tree/master/src/prototype#assignment-4) |
| 3/15 |           | NO CLASS.  Spring Break!                                                    |
| 3/22 | Thibault  | Modalities                                                                  |
| 3/29 | Brennan/Drashko   | Recommendation + Summarization                                                              |
| 4/05 | [Patrick Shafto](http://shaftolab.com/) (guest lecture) | TBA                           |
| 4/12 |           |                                                                             |
| 4/19 | Thibault  | Autocomplete/refinement.  Wu will be away at [ICDE](http://icde2017.sdsc.edu/) |
| 4/26 | Eugene/Thibault    | Cleaning?                                                                   |
| 5/03 |           | Poster Presentation + [submit writeups](./proposals)                                     |


# Topics

Background you should be comfortable with

* [Relational algebra](https://en.m.wikipedia.org/wiki/Relational_algebra) and [SQL](https://www.postgresql.org/docs/9.5/static/sql-select.html)
* [Cost-based optimization](http://web.stanford.edu/class/cs345d-01/rl/chaudhuri98.pdf)

Classics

* [Tukey, John W. Exploratory Data Analysis. 1979](https://scholar.google.com/scholar?hl=en&q=2.+Tukey%2C+John+W.+Exploratory+Data+Analysis.+1979)

Surveys

* [Making Database Systems Usable](https://scholar.google.com/scholar?q=Making+Database+Systems+Usable)
* [Overview of Data Exploration Techniques](http://stratos.seas.harvard.edu/files/stratos/files/exploration-tutorial.pdf)
* Optional: Associating the visual representation of user interfaces with their internal structures and metadata.

#### Specifying Visualizations and Exploration

Declarative Visualization Languages

* [A layered grammar of graphics](http://vita.had.co.nz/papers/layered-grammar.html)
* [D³ Data-Driven Documents](https://scholar.google.com/scholar?q=D%C2%B3+Data-Driven+Documents)
* [Vega-Lite: A Grammar of Interactive Graphics](https://idl.cs.washington.edu/files/2017-VegaLite-InfoVis.pdf)
* [Combining Design and Performance in aData Visualization Management System](/files/papers/dvmscidr.pdf)
* Assignment
  * Play with [SandDance](https://sanddance.azurewebsites.net/BeachPartyApp/BeachPartyApp.html)

Interaction Modalities

* Touch
  * [Gestural Query Specification](https://scholar.google.com/scholar?q=gestural+query+specification)
* NLP
  * [Constructing an Interactive Natural Language Interface for Relational Databases](/files/papers/nlpdb.pdf)
  * [Analyza: Exploring Data with Conversation](https://static.googleusercontent.com/media/research.google.com/fr//pubs/archive/45791.pdf)
* Spreadsheets
  * [Expressive Query Construction through Direct Manipulation of Nested Relational Results](https://scholar.google.com/scholar?q=Expressive+Query+Construction+through+Direct+Manipulation+of+Nested+Relational+Results)
* Other
  * [Visualization-by-Sketching: An Artist’s Interface for Creating Multivariate Time-Varying Data Visualizations](http://www.cs.tufts.edu/comp/250VIS/papers/Visualization-by-Sketching.pdf)
  * [(s/q)ueries: Visual Regular Expressions for Querying and Exploring Event Sequences](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/chi2015-squeries.pdf)
  * Characterizing provenance in visualization and data analysis: an organizational framework of provenance types and purposes.

#### Augmenting User Exploration

Recommendation

* [Voyager: Exploratory analysis via faceted browsing of visualization recommendations](http://www.cs.tufts.edu/comp/250VIS/papers/2015-Voyager-InfoVis.pdf)
* [Towards A General-Purpose Query Language for Visualization Recommendation](https://idl.cs.washington.edu/files/2016-CompassQL-HILDA.pdf)
* [Effortless Data Exploration with zenvisage: An Expressive and Interactive Visual Analytics System](http://web.engr.illinois.edu/~adityagp/zenvisage.pdf)
* [SeeDB: efficient data-driven visualization recommendations to support visual analysis.](/files/papers/seedb.pdf)
* [Data Polygamy: The Many-Many Relationships among Urban Spatio-Temporal Data Sets](https://arxiv.org/pdf/1610.06978.pdf)
* Optional: Characterizing provenance in visualization and data analysis: an organizational framework of provenance types and purposes.
* Optional: Adaptive recommendation-based modeling support for data analysis workflows.

Autocomplete and refinement

* [Snipsuggest: Context-aware autocompletion for sql]()
* Query By Output
* DataPlay: Interactive Tweaking and Example-driven Correction of Graphical Database Queries
* Machine learning for online query relaxation

Explanation

* [Scorpion: Explaining away outliers in aggregate queries](http://sirrice.github.io/files/papers/scorpion-vldb13.pdf)
* [QFix: Diagnosing errors through query histories](/files/papers/qfix.pdf)
* [Visual discovery and model-driven explanation of time series patterns](https://www.cl.cam.ac.uk/~as2006/files/sarkar_2016_gatherminer.pdf)
* [Interpretable and Informative Explanations of Outcomes](http://www.vldb.org/pvldb/vol8/p61-elgebaly.pdf)
* [The Lumiere Pro ject: Bayesian User Modeling for Inferring the Goals and Needs of Software Users](/files/papers/lum.pdf)

#### Garbage in Garbage out

Data Cleaning

* Wrangler: interactive visual specification of data transformation scripts
* Profiler: Integrated Statistical Analysis and Visualization for Data Quality Assessment
* BoostClean: Automated Error Detection and Repair forMachine Learning
* [Data Quality: Experiences and Lessons from Operationalizing Big Data](http://yanpeichen.com/professional/IEEE_Big_Data_2016_Data_Quality.pdf)

#### Scaling Visual Exploration Systems

End-to-end fast data visualization systems

* [Polaris: A system for query, analysis, and visualization of multidimensional relational databases](/files/papers/polaris.pdf)
* [imMens: real-time visual querying of big data](/files/papers/immens.pdf)
* [Superconductor: a language for big data visualization.](/files/papers/superconductor.pdf)
* [Profiler: Integrated Statistical Analysis and Visualization for Data Quality Assessment]()
* [Combining Design and Performance in aData Visualization Management System](/files/papers/dvmscidr.pdf)

Data Processing Systems

* [MacroBase: Analytic Monitoring for the Internet of Things](/files/papers/macrobase.pdf)
* [Dremel: Interactive Analysis Of Web-Scale Datasets](/files/papers/dremel.pdf)
* [Spark SQL: Relational Data Processing in Spark](https://amplab.cs.berkeley.edu/wp-content/uploads/2015/03/SparkSQLSigmod2015.pdf)
* [BlinkDB: Queries with Bounded Errors and Bounded Response Times on Very Large Data](/files/papers/blinkdb.pdf)
* [Data cube: A relational aggregation operator generalizing group-by, cross-tab, and sub-totals.](/files/papers/olap.pdf)

Prefetching

* [Dynamic prefetching of data tiles for interactive visualization.](/files/papers/forecache.pdf)
* [Query Steering for Interactive Data Exploration](/files/papers/steering.pdf)

Sampling

* [PFunk-H: Approximate Query Processing using Perceptual Models](/files/papers/pfunk.pdf)
* [Wander Join: Online Aggregation via Random Walks](/files/papers/wanderjoin.pdf)
* [Sample + Seek: Approximating Aggregates with Distribution Precision Guarantee](/files/papers/sigmod16sampleseek.pdf)
* [Rapid Sampling for Visualizations with Ordering Guarantees](/files/papers/rapidsampling.pdf)


Network

* [M4: A Visualization-Oriented Time Series Data Aggregation](/files/papers/m4.pdf)


<!--
* Visualization-aware sampling for very large datasets
* Visage: A user interface environment for exploring information.
* [Online Dynamic Reordering for Interactive Data Processing](/files/paper/juggle.pdf)
* Dynamic client-server optimization for scalable interactive visualization on the web.
* Queriosity: Automated Data Exploration, IEEE 2015
* An Analytic Data Engine for Visualization in Tableau, SIGMOD, 2011
* Multiscale Visualization Using Data Cubes, 2002
* G-OLA: Generalized On-Line Aggregation for Interactive Analysis on Big Data, SIGMOD, 2015
-->


Neat applications

* https://www.remix.com/
