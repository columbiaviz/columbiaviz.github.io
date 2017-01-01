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
| Project Teams |   1/25 |  -  |
| Prospectus    |   2/1 |  20% |
| Poster Session |  5/3 |  15% |
| Report         | 5/5 |   65% |

#### Project Teams
Teams should consist of 2 or 3 people. In addition, if you have a project in mind, please indicate briefly (1--2 sentences) what you are thinking. We have included a list of possible projects at the end of this document although you are not required to choose from these. 

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
2. [Upload the file by 11:59PM EST](https://www.dropbox.com/request/NT8wHw3Wjs98fFxeKR9G)

#### Poster Session
Your team will prepare and present a project poster at the end-of-course poster session.   This gives you an opportunity to present a short demo of your work and show what you have accomplished in the class!

**Submission**

* Simply attend and present at the poster session.

#### Report
You will prepare a conference-style report on your project with **maximum length** of 15 pages (10 pt font or larger, one or two columns, 1 inch margins, single or double spaced -- more is not better.) Your report should expand upon your prospectus and introduce and motivate the problem your project addresses, describe related work in the area, discuss the elements of your solution, and present results that measure the behavior, performance, or functionality of your system (with comparisons to other related systems as appropriate.)

Because this report is the primary deliverable upon which you will be graded, **do not treat it as an afterthought**. Plan to leave at least a week to do the writing, and make sure your proofread and edit carefully!

**Submission**

1. Rename the filename of your report to the following format, last names should be in alphabetical order. `report_<lastname1>_<lastname2>.._<lastnameN>.pdf`
2. [Upload the file by 11:59PM EST](https://www.dropbox.com/request/NT8wHw3Wjs98fFxeKR9G)

## What is Expected

Good class projects can vary dramatically in complexity, scope, and topic. The only requirement is that they be related to something we have studied in this class and that they contain some element of research -- e.g., that you do more than simply engineer a piece of software that someone else has described or architected. To help you determine if your idea is of reasonable scope, we will arrange to meet with each group several times throughout the semester.


## Project Suggestions

The following are examples of possible projects -- they are by no means a complete list and you are free to select your own projects.

#### Modalities

Talk to me

* Read the [InnoChat abstract](https://www.dropbox.com/s/yeojaciedsktp77/cidr17abstract.pdf?dl=0), study existing information extraction/caching approaches and build a prototype.
* I suspect that analysts don't want to perform NLP/voice-only data analysis, but would rather use voice to _augment_ their programming-based analysis?   For example, if the analyst asks "what's that?" then it probably has to do with the part of the visualization that the cursor is pointing to.  Survey existing human computer interaction literature on multi-modal approaches to data analysis (or run an informal user study) and build a prototype using Alex/NLP that _augments_ a data scientist's job.  Some ideas of what to augment:
  * While a user explores an interactive visualization, automatically zoom in, highlight data, generate new views, etc based on the user's comments.
  * Data science analysis session
* Presenting query results via analogy: given a knowledge base, facts that the user has accessed (assumed), and a database query, recontextualize it relative to facts the user understands.
* NLP + DB + Chat
* DNN + NLP --> Queries


Seeing is beleiving

* Data + VR/AR



#### Explanation and Cleaning

* **But, Why?** Identify a context during data exploration (either in a visualization system, or via any other modality) where the user will natually ask "why?" and expect an explanation.
  Formalize the context, formalize the problem and develop a prototype solution.
  * Related: Scorpion, QFix, Dialectic
* **Cleaning and Extraction Pushdown:** Data collected from the web (e.g., from a form) is typically used by downstream applications for a variety of purposes such as training data for models, or to analyze using queries.  However if the data is not collected and validated appropriately, then the analyst needs to perform expensive data cleaning to fix errors, or extract structured information from free-form text.  Is there a way, given the downstream applications or the existing data cleaning steps, to augment the input form so that the submitted data is already clean and in the appropriate form?  
* **Will it Clean?** Even automatic error _detection_ is notoriously difficult due to the ambiguounotion of what "clean" means.  However in data science applications, the test data for the prediction model provides a crisp notion of "clean" and has been used in BoostClean to perform automatic error detection and cleaning.  BoostClean simply worked for simple static datasets: extend its ideas to streaming datasets where the errors may change over time.
* **Guess My Schema:** Given a random binary or text data file, it's a huge amount of work to identify a scehma and extract structured data from it.  But there are _plenty_ of binary and text data files to learn from!  Train a deep learning model over a large variety of data files/formats and use the trained model to "parse" a new data file.

#### Core Data Processing for Viz

Extend the DVMS system in different ways

* **:** why compute what cannot be seen?  Our prior perceptual studies have found interesting trade-offs between different approximation techniques.  Build on our findings and prototype a system that intelligently picks between different approximation and optimization options.

#### Recommendations

#### Pragmatics

* **Make it scale:** Take an existing large-scale data visualization and design a system that 1) increases its scale by 10x while preserving the same 
  interactivity, 2) reduces the latency by 10x while preserving the same scale, 3) or for bonus points does (1) and (2).




