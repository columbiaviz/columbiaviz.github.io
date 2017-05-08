---
layout: page
title: E6998.003 Research Project
---

# This page is in progress

## Important Dates and What to Hand In

<style>
.project tr td:first-child {
  width: 15%;
  font-weight: bold;
}
.project tr td:nth-child(2) {
  width: 15%;
}
</style>


{: .table .project :}
| Project Teams |   2/1 |  -  |
| Prospectus    |   2/8 |  15% |
| Midpoint Review |  3/01 | 5%  |
| Poster Session |  5/3 |  15% |
| Report         | 5/5 (edited: 5/10 midnight) |   65% |

#### Project Teams
Teams should consist of 1-3 people. In addition, if you have a project in mind, please indicate briefly (1--2 sentences) what you are thinking. We have included a list of possible projects at the end of this document although you are not required to choose from these. 

**Submission**

* In class, please hand in one sheet of paper per team. 
* If you do not have a team, simply turn in a sheet with your name and we will match you up. 

#### Prospectus
Your reserach prospectus will contain an overview of the research problem, _your hypothesis<sup>1</sup>_, first pass at related work, a description of how you plan to complete the project, and metrics to decide _if it worked_.   A good prospectus is basically the skeleton of the full report.

Your prospectus should follow the example:

* [Click here for an example prospectus](./files/prospectus/prospectus.pdf)
* [Click here for the tex files](https://github.com/columbiaviz/columbiaviz.github.io/tree/master/files/prospectus)

It is _highly recommended_ that you come to office hours to discuss project ideas before writing the prospectus.

<sup>1</sup>This is science after all.

**Submission**

1. Rename the filename of your prospectus to the following format, last names should be in alphabetical order. `prospectus_<lastname1>_<lastname2>.._<lastnameN>.pdf`
2. [Upload the file by 2/8 11:59PM EST](https://www.dropbox.com/request/NT8wHw3Wjs98fFxeKR9G)


<a name="midpoint"></a>

#### Midpoint Review

The midpoint review will be an in-class exercise where teams will present and receive feedback/suggestions in a "speed-dating" style session.  Details will be released closer to the session.

Meet with your counterpart for 20 minutes - 10 minutes per team.  One team will describe the goal of their project and the current status and challenges, and the other team will listen and provide comments.

For the listening team, ask and provide answers to the following questions:

1. What opportunities/changes that make this work useful and timely? 
2. Why existing approaches fail to make use of these opportunities? 
3. What is the hypothesis?
4. What are the concrete steps to validate the hypothesis?
5. What suggestions did you, as the listener, provide?

#### Poster Session
Your team will prepare and present a project poster at the end-of-course poster session.   This gives you an opportunity to present a short demo of your work and show what you have accomplished in the class!

**Submission**

* Simply attend and present at the poster session.

#### Report
You will prepare a conference-style report on your project with **maximum length** of 15 pages (10 pt font or larger, one or two columns, 1 inch margins, single or double spaced -- more is not better.) Your report should expand upon your prospectus and introduce and motivate the problem your project addresses, describe related work in the area, discuss the elements of your solution, and present results that measure the behavior, performance, or functionality of your system (with comparisons to other related systems as appropriate.)

Because this report is the primary deliverable upon which you will be graded, **do not treat it as an afterthought**. Plan to leave at least a week to do the writing, and make sure your proofread and edit carefully!

**Submission**

1. Rename the filename of your report to the following format, last names should be in alphabetical order. `report_<lastname1>_<lastname2>.._<lastnameN>.pdf`
2. [Upload the file by 11:59PM EST](https://www.dropbox.com/request/7qrVOSxks22F22zXQl0C)

## What is Expected

Good class projects can vary dramatically in complexity, scope, and topic. The only requirement is that they be related to something we have studied in this class and that they contain some element of research -- e.g., that you do more than simply engineer a piece of software that someone else has described or architected. To help you determine if your idea is of reasonable scope, we will arrange to meet with each group several times throughout the semester.

<!--

# Project Suggestions

The following are examples of possible projects -- they are by no means a complete list and you are free to select your own projects.  In general, projects can be of three varieties:

1. Research project: model an unsolved problem, propose algorithmic solution, evaluate and report findings.
2. Win: pick an existing useful application and a well-recognized metric (latency, prediction, etc) and win against the state of the art.
3. Break and fix: implement a state of the art algorithm on real data, show that it doesn't actually work (results are poor, it's slow, etc), make it work.
4. End-to-end system: identify a new modality or new exploration approach for a particular domain and build a prototype that a normal person could use.


### More Well-defined Projects

The steps to complete the following projects are relatively well-defined.  All of them have the potential to be publishable work. Your report _does not need to be published_ to do well in the class.

Does chat-based querying actually work?

* Implement or get the code to run a couple of chat-based querying papers.  
* Perform user studies to see if they actually work.
* (can collaborate with other groups to evaluate different systems, could turn into publication)

Be Relatable:

* Presenting query results via analogy: given a [knowledge base](https://en.wikipedia.org/wiki/Knowledge_Graph), facts that the user has accessed (assumed), and a database query, recontextualize it relative to facts the user understands.  
  * Think of it as a more powerful version of [this](https://idl.cs.washington.edu/papers/spatial-analogies).

PDFs + tables

* Public datasets (UCI ML data, government datasets) often accompanied by description files that describe the attributes and the contents.
* identify the segments in the description files that relate to attributes in the dataset
* Make it work for some simple domains (datasets)
* (this is of practical value)

Implement Innochat

* Read the [InnoChat abstract](https://www.dropbox.com/s/yeojaciedsktp77/cidr17abstract.pdf?dl=0), study existing information extraction/caching approaches and build an end-to-end prototype (perhaps using slack/twilio).

Query The Web

*  Web pages are simply views over an underlying dataset (e.g., Amazon is a product database that renders product information) combined with query interactions (e.g., filter by clicking on a product category).  However the interactions are fixed by the developer.   Identify the schema of a website's data, let users write SQl queries over the schema, and make it work.

Which Optimization Makes Sense?

* It's currently unclear whether  sampling or data cubes or other optimizations are the most appropriate for any given visualization + interaction.  Run studies to better understand the trade-offs.
* Bonus: use trade-offs to recommend optimizations for new interactive visualizations.

Run some perceptual studies:

*  What are humans able to perceive anyways?  Run perception studies to build user perception models that could be used for perceptual push-down. 
  * Related: [pfunk](http://sirrice.github.io/files/papers/pfunk-hilda16.pdf), [Section 3.2 of CIDR paper](https://www.dropbox.com/s/0rdjsv7m7wbhmlk/cidr17-camera.pdf?dl=1)

Data file formats

* Given a random binary or text data file, it's a huge amount of work to identify a scehma and extract structured data from it.  But there are _plenty_ of binary and text data files to learn from!  Train a deep learning/parsing model over a large variety of data files/formats and use the trained model to "parse" a new data file.

### Harder (more ambiguous) Projects

Modalities

* **Augment, not Replace:** I suspect that analysts don't want to perform NLP/voice-only data analysis, but would rather use voice to _augment_ their programming-based analysis?   For example, if the analyst asks "what's that?" then it probably has to do with the part of the visualization that the cursor is pointing to.  Survey existing human computer interaction literature on multi-modal approaches to data analysis (or run an informal user study) and build a prototype using Alex/NLP that _augments_ a data scientist's job.  Some ideas of what to augment:
  * While a user explores an interactive visualization, automatically zoom in, highlight data, generate new views, etc based on the user's comments.
  * Data science analysis session
* **Checklist Manifesto:** Customer service representatives (and most chat bots) follow a fill-in-the-blank rubric when communicating with users/customers.  The purpose is to extract the most information to solve your problem in the least amount of time.  Given a collection of chat logs, can you infer an optimized rubric?
* **Google Time:** With Google Maps, people can browse the world in their laptop. The aim of Google Times is to do the same thing, but for time instead of space. The project is made of two parts: 1. Extract as many dates as possible from public data sets, to obtain a huge database of dates, 2. Create a browsing system to explore this timeline in real time.
* **Audification:** While data visualization is well understood, its small cousin audification is still in its infancy [https://en.wikipedia.org/wiki/Audification] The aim of this project is to answer the question: what is the grammar of audification? What would the "Tableau of audio" look (sound) like? 

Explanation and Cleaning

* **But, Why?** Identify a context during data exploration (either in a visualization system, or via any other modality) where the user will natually ask "why?" and expect an explanation.  Formalize the context, formalize the problem and develop a prototype solution.
  * Prior examples: [Scorpion](http://sirrice.github.io/files/papers/scorpion-vldb13.pdf), [QFix](http://eugenewu.net/files/papers/qfix-sigmod17.pdf), [Dialectic](https://www.dropbox.com/s/9lgkbku2aa80fui/dialectic-icwsm17.pdf?dl=0)
* **Cleaning and Extraction Pushdown:** Data collected from the web (e.g., from a form) is typically used by downstream applications for a variety of purposes such as training data for models, or to analyze using queries.  However if the data is not collected and validated appropriately, then the analyst needs to perform expensive data cleaning to fix errors, or extract structured information from free-form text.  Is there a way, given the downstream applications or the existing data cleaning steps, to augment the input form so that the submitted data is already clean and in the appropriate form?    
  * Related to [Dialectic](https://www.dropbox.com/s/9lgkbku2aa80fui/dialectic-icwsm17.pdf?dl=0).
* **Will it Clean?** Even automatic error _detection_ is notoriously difficult due to the ambiguounotion of what "clean" means.  However in data science applications, the test data for the prediction model provides a crisp notion of "clean" and has been used in BoostClean to perform automatic error detection and cleaning.  BoostClean simply worked for simple static datasets: extend its ideas to streaming datasets where the errors may change over time.
* **Excel Sucks:** Many many very important datasets are shared as a big collection of excel files.  For example, the [Equality of Opportunity Project](http://www.equality-of-opportunity.org/data/) shares their data as 6 - 15 excel files for each category, and you end up needing to figure out how to download all of them, identify the schema, and join them together to even _start_ exploration.  Your project is to fix this.  Let me point to a website with links, get the excel files, automatically infer the joins (they may be at different granularities such as county and state!) to produce a single set of database tables to query.
  * data: [OECD](https://data.oecd.org/searchresults/?r=+f/type/datasets), [Equality](http://www.equality-of-opportunity.org/data/), [data.gov](http://www.data.gov)

Core Data Processing for Viz

* **Perceptual push-down:** why compute what cannot be seen?  Our prior perceptual studies have found interesting trade-offs between different approximation techniques.  Build on our findings and prototype a system that intelligently picks between different approximation and optimization options.
* **Request Probabilities:** instead of the typical request-response model of interaction, what if the client constantly sens probability distributions of what the user might do?  What if the server constantly sends data to the client at maximum bandwidth?
  * How does a data processing system execute a probability distribution of queries?
  * What data should the server send to the client?
* **Run studies:** What are humans able to perceive anyways?  Run perception studies to build user perception models that could be used for perceptual push-down. 
  * Related: [pfunk](http://sirrice.github.io/files/papers/pfunk-hilda16.pdf), [Section 3.2 of CIDR paper](https://www.dropbox.com/s/0rdjsv7m7wbhmlk/cidr17-camera.pdf?dl=1)


Recommendations and Predictions

* **Causality and viz:** Recently, the ML community has made great progress in the field of causality detection, i.e., understand what variable causes another variable in a data set [see this paper](https://arxiv.org/abs/1412.3773). Can these methods help recommend interesting visualization views? 
  * Related: [Zenvisage](http://data-people.cs.illinois.edu/papers/zenvisage-vldb.pdf), [Voyager](https://idl.cs.washington.edu/papers/voyager), [Voyager2](https://idl.cs.washington.edu/papers/voyager2/)
* **Text and viz:** In many cases, datasets come with a text description of what they contain. For instance, UCI repo data often include a file that describes the columns. How can you mine this information to recommend interesting new visualizations? Can you make it better with external knowledge, e.g., a knowledge base or a Web crawl?  
* **Predicting crime:** You work for the FBI, you lead a team of 30 agents, and you just discovered this dump of dark web marketplaces:
https://www.gwern.net/Black-market%20archives
WHere will you send your agents? 

-->
