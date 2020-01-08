---
layout: page_2020
---

# Intro: HDI systems overview

Eugene Wu

* PhD MIT, 2015
* Systems for Human Data Interaction
  * Database systems, data cleaning, explanation, visualization
* OH: 421 Mudd, TBA
* ewu@cs.columbia.edu

Administrative

* TA: Yiru Chen (yiru.chen@columbia.edu)
  * OH: TBA
* Slack, nb.csail.mit.edu
* Weds 2-4.  Break in the middle
* Google credits
* Cap: 15

Prereqs

* Useful
  * 4111: intro to DB
  * 4995: intro to data vis
  * 4170: user interface design
* See Ramakrishnan for basics
* Talk to me if unsure

Waitlist

* Submit first review by Friday midnight
* I will decide course admission based on reviews by Sunday night



Course Philosophy

* Started off as a reading group, but want to open it up
  * Reading is arguably the most important for conducting research
  * Formulate hypotheses/extrapolations and assess them
* Very much a “take what you want”
  * You will not be tested or taught (lectures) traditionally: not my job!
  * Very minor assignments, no exams
  * Instead, you will engage in research
  * Read, comment on, and discuss papers 
* I won’t be teaching: we will discuss together
* Pursue a research project
  * That said: this is not an easy course!
  * The research project requires dedication and ingenuity + dealing with unpredictable outcomes
  * If you haven’t done research at all before, talk to me!

Course Goal

* Study a research area: Data Management 
  * Subarea: Systems for HDI
  * Important in world of data science
  * 97% of world are not programmers
  * ~100% of world revolves around data
  * Not just interface design, not just systems
* Critically evaluate papers
* Present research
* Conduct novel, publishable research


Grading

* Project 50%
* Participation 45%
  * Inc. paper reviews
* Assignments 5%
* No curve.  Everyone can get an A
* If project is amazing, automatic A 



* Systems: trade-offs, abstractions
* Interaction: tasks, usability
* Systems for HDI: Systems trade-offs/features to enable new tasks
  * Being able to identify trade-offs: systems usually != proofs

Class Format

* Discussion group
* Submit paper reviews by Monday night
  * What is significant and why?
  * Technical strengths: I like ...?
  * Limitations:  I wish ...?
  * What if ....?
* Read and discuss 2+ papers per session
  * (student) 15-20 min presentation of key elements of the paper
    * find + read related work to provide context
    * Illustrative examples
  * Deep dive into a specific section of the paper
    * Why was it written that way?  Argument structure.
    * sentence by sentence
  * Open ended discussion/debate
    * What is great about the work?
    * What could have been better?
  * Everyone reads and prepares observations, things they like, and Qs about the papers
* Scribe takes notes during discussion
* Sign up to lead presentations


Paper Reviews

* shared with class
* can skip 3 paper reviews (each class has >=1 papers!)
* no late submissions accepted

Presentation

* 15% of grade
* Next week, choose what papers you want to present
* 15-20 minutes (1 slide/minute)
* Expect to read paper AND related works
* Cover key aspects of paper (see prospectus)
  * Intuition >> formulae
  * Create your own examples, don't download the authors' slides
* Slides emailed by Monday midnight.


Research projects

* 50% of grade
* Goal
  * Build/design/evaluate something new and cool
  * Project that is ~publishable in an HDI conference/workshop
* A few types of projects
  * Perceptual/user study
    * shows: new understanding of users
  * System/tool/component/interaction design
    * show: novelty, performance, ease of use
  * Algorithm
    * show: novel, correctness, scalability
* Format
  * Teams of 1-2
    * work proportional to team size
  * Pick hypotheses answerable in 3-4 weeks
  * BUILD something, & evaluate to answer the hypothesis
  * Get feedback, and learn to give feedback
  * Write a research paper 8-10 pages, ACM format
* Steps
  * Initial prospectus: Feb 12 5%
  * Related Works: Mar 1 5%
  * Prototype Check-in: Mar 12  5%
  * Showcase: Apr 30  10%
  * Final Paper: May 10 25%

The most important aspect of research: clear hypothesis

* Worth asking?  Based on existing work, user needs
* Can be answered?  Based on specificity and scope of hypothesis question.
* Answered correctly? Based on methodology 


# Course Overview


Why HDI?

* (discussion)
* Why not computer science?
  * Automation, abstraction, computability
* Why not databases?
  * user and their goals matter
  * DBs hard to use.  
  * Many _don't_ use databases! (scripts, excel, etc)
  * (why?) hard to..
    * interactively use
    * learn
    * scale
    * quick n dirty/one off analysis
    * noisy, ill-formatted, unstructured data
    * versioning/copies
    * schema/load up front
    * ML, analysis
  * bottom line: gap between what user wants and what DB gives
* Why not HCI?
  * Emphasis: computing! 
  * deals with design, presentation, usability, consistency, expectation, user control, error prevention, design
  * hard to
    * develop the system
    * scale the system
    * manage the data
    * implement features
  * licklider
  * Bottom line: gap between design and building the actual system

Architecture for HDI systems

* User(s): functionalities, tasks, limitations
* interface: interactions/interactivity, expressiveness, 
* data analysis/logic: queries, execution, management

Other examples of Systems for HDI (progression in complexity)

* static tabular visualization
* Interactive visualization
* Database
* Tableau
* Google infra
* Uses of HDI systems
  * data extraction, cleaning
  * exploration
  * visual analysis
  * search
  * understanding/explanation
  * code/program/data debugging


Architecture of a new user-facing application (case study)

* Three parts: user (task), interface, execution engine
  * Think UID: JS, HTML, DB, Flask
* Existing tools
  * Design: powerpoint, figma, photoshop, etc
  * Interaction: JS, Widget toolkits
  * Processing: PL
  * Data management: RDBMS, noSQL engine etc
* Challenging when combining them end-to-end
  * Changes in design may be isolated (if no new information)
  * Changes in interaction require changes in processing/DB
  * Changes in processing require changes in DB, interface between UI and backend
  * Changes in DB require changes everywhere
  * Performance affects everything

Themes of this course

* How interface affects systems and vice versa
* Examine examples throughout the HDI "stack"
  * Applications e.g.,
    * data visualizations 
    * data extraction/cleaning
    * data science
  * Interface and interaction design
  * Systems optimizations informed by interfaces

We do NOT focus on

* Core database topics
  * xacts, distributed db, cloud
* Deep HCI concerns

# Overview of the themes

We will focus the first portion of the class using Interactive Visualizations as an example application domain to illustrate different concerns for HDI systems.  We will then branch out to discuss each concern in general.  

### Vis as an HDI application

* Tasks, Users, Goals
* Grammar, expressiveness
* Design
* Scalability and Responsiveness

### Novel interfaces and interactions for different data types

Although the core analysis task is typically querying and summarizing relational data, raw data needs to be transformed and cleaned before it is suitable for relational data analytics.  We will study data tasks for different data types such as text, image, video, and relational records.  For these tasks, we will examine interface and interaction designs for those tasks.  

Data types 

* Text 
* Image
* Video
* Relational Records

Interaction Modalities

* Direct Manipulation
* Programmatic/language design
* Example-driven

### Performance and Systems

Performance and responsiveness is a crucial aspect to maintaining interactivity. We will survey performance techniques used specifically to improve the interactivity or expressiveness of HDIs.

* Query optimization and planning


### Explanation and interpretation

Interfaces present the results of data analyses to users.  However, what if they are incorrect or suspicious?  We will survey work in interpreting analysis results and explaining anomalies in those results.


# Resources

Advice on how to read papers

* S Keshav [How to Read a Paper](http://blizzard.cs.uwaterloo.ca/keshav/home/Papers/data/07/paper-reading.pdf)
* M Mitzenmacher [How to read a research paper.](http://www.eecs.harvard.edu/~michaelm/postscripts/ReadPaper.pdf)

Thoughts on approaching research

* Richard Hamming [You and Your Research](http://www.cs.virginia.edu/~robins/YouAndYourResearch.html)
* Eugene Wu [Research as Optimization](https://researchsetup.github.io/researchmodel)


