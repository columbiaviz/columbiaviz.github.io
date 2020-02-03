---
layout: page_2020
---

# Intro: HDI systems overview

Eugene Wu

* PhD MIT, 2015
* Systems for Human Data Interaction
  * Database systems, data cleaning, explanation, visualization
* OH: 421 Mudd
* ewu@cs.columbia.edu

Administrative

* TA: Yiru Chen (yiru.chen@columbia.edu)
  * OH: Thurs 3:30-4:30 PM, 406 Mudd
* Slack, nb.csail.mit.edu
* Weds 2-4.  Break in the middle
* $300 Google credits
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


# Review

Submit paper reviews for required papers in class 2.  In addition:

* what you would LIKE this class to teach
* go through paper list (skim titles/abstracts) and pick topic areas and papers that are of interest to you.


# Course Overview


Why HDI?

* (discussion)
* Why not computer science?
  * Automation, abstraction, computability
* Why not databases?
  * Great HDI innovation wrt declarativity and optimization but...
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
  * Bottom line: gap between design and building the actual system

Licklider

* Most important figure in CS and computing history
  * "computing's Johnny Appleseed"
  * ideas and political/funding effort 
* At the time, computers were batch processing
  * you write a program, wait for it to be scheduled,
    it provides a printout that doesn't answer the actual problem
  * 10 yrs before personal computers
  * 30 yrs before internet
* Head of ARPA.  Funded...
  * Engelbart's work
    * UI/UX interactive computing
  * ARPANet: networking, internet
  * Project MAC for time sharing
* Many alternative models
  * Machine as tool
    * user supplies the goal and the how 
      (initiative, directon, integration, criterion)
    * machine simply performs the task
    * user is the only organism
  * semi-automatic systems
    * systems that tried to be automatic, but failed.  
    * human operators responsible for functions that are infeasible to automate
    * mturk
* Man-Computer Symbiosis
  * AI as part of symbiosis
    * dissimilar organisms cooperative living together
  * spring + summer of 1957, a "user study" to track how he spent his working time
    * from his psychoacoustics background
    * 85% spent geting into a position to think/make a decision/learn what's needed
      * more time finding info than digesting
      * hours plotting and munging and translating data (from one unit to another)
    * analogous to "85%" time on data cleaning/wrangling during analysis
  * computing machines can do readily, well, and rapidly 
    many things that are difficult or impossible for man, 
    and men can do readily and well, though not rapidly, 
    many things that are difficult or impossible for computers.
* Human will 
  * set goals, 
  * provide fallible but leading contributions,
  * define criteria and serve as evaluators.
  * Handle very-low-prob situations -- sum of low prob events is 
    too large to ignore
* Machine will
  * convert hypotheses into testable models
  * test models against data
  * interpolate, extrapolate, transform
  * convert static/logical statements into dynamic models to explore


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
  * query/search
  * understanding/explanation
  * programing/data debugging

Architecture of a new user-facing application (case study)

* Three parts: user (task), interface, execution engine
  * Think UID: JS+HTML, Flask, DB
* Existing tools
  * Design: powerpoint, figma, photoshop, etc
  * Interaction: JS, Widget toolkits
  * Processing: PL
  * Data management: RDBMS, noSQL engine etc
* Challenging when combining them end-to-end
  * Changes in design may be isolated to pixel-level prototype (if no new information)
  * Changes in interaction require changes in processing/DB
  * Changes in processing require changes in DB, interface between UI and backend
  * Changes in DB require changes everywhere
  * Changes in data types require changes everywhere
  * Performance + functionality affects everything

Architecture for HDI systems

* User(s): functionalities, tasks, perceptual/cognitive limitations
* Interface: expressiveness of language/API, DSL, interactions+UI _to_ express
* Data analysis/logic: programs/queries, execution, management

Themes of this course

* Interplay between interface and system
  * How task/interface affects system design
  * How system designs affect interface
* Examine examples throughout the HDI "stack"
  * Lot of time on data visualization as exemplar domain
  * Different data types
  * Different modalities 
  * Functionality and features

We do NOT focus on

* Core database topics
  * xacts, distributed db, cloud
  * in-depth query optimization 
* Deep HCI concerns

# Overview of the themes

We will focus the first portion of the class using Interactive Visualizations as an example application domain to illustrate different concerns for HDI systems.  We will then branch out to discuss each concern in general.  

### Vis as an HDI application

* Grammar, expressiveness
* Tasks, Users, Goals
* Design
* Scalability and Responsiveness

### Novel interfaces and interactions for different data types

Although the core analysis task is typically querying and summarizing relational data, raw data needs to be transformed and cleaned before it is suitable for relational data analytics.  We will study data tasks for different data types such as text, image, video, and relational records.  For these tasks, we will examine interface and interaction designs for those tasks.  

Data types 

* Text 
* Image
* Video
* Relational Records: 

Interaction Modalities

* Direct Manipulation
  * GestureQuery + touch
* Programmatic/language design
  * Modin/Spreadsheets/Spark
  * KBP
* Example-driven
  * Wrangler/DataPlay/PBE

### Performance and Systems

Performance and responsiveness is a crucial aspect to maintaining interactivity. We will survey performance techniques used specifically to improve the interactivity or expressiveness of HDIs.

* Query optimization and planning


### Explanation and interpretation

Interfaces present the results of data analyses to users.  However, what if they are incorrect or suspicious?  We will survey work in interpreting analysis results and explaining anomalies in those results.


# Agency + Automation: Designing AI into interactive systems

Jeff Heer

Intro

* AI focuses on full automation.
  * can mislead due to inappropriate assumptions/iased training
  * optimize fixed but wrong/outdated objectives
  * users may be overly reliant on faulty systems
* famous AI researchers call for "well-thought-out interactions of humans and computers".  
* HCI has exactly studied this.  many ways to combine user + AI
  * direct manipulation vs interface agents (Clippy)
  * consensus: increased automation to amplify user productivy and capabilities
    for their tasks, while preserving sense of control and responsibility
* Big question: how best to combine user-facing interfaces and automation?
  * argument: shared representations of possible actions (DSL)
  * user review, selects, edits, ignores automated suggestions

Classic example: spelling checker, search autocompletion

Illustrates core principles

1. positive value.  promotes efficiency, correctness, alternatives
2. low overhead: augment, not replace, user interaction
3. doesn't decrease value: useful for TASK even if imperfect 
4. user and AI learns over time via user-ai interactions


#### Examples of shared representations

       user
     ---DSL--- 
      system

Data Wrangler

* go from unstructured lines of text to records, via extraction functions
* wrangler DSL
* user selects what they want, synthesize program in DSL
* predictive interaction methodology

        interactions --> (many options) --> choose option
             ^                                   |
             |                                   v
        code/DSL  --- can write code too --->  new code


Data Vis (Voyager)

* vega-lite DSL
* given current chart, suggest next chart one "action" away
* changes user behaviors (good or bad?  not totally clear)

        w/out related views, users had more 'depth-first" search patterns.
        with voyager, biased users to "increased consideration of alternative
        charts and additional data field combos"

* can remove agency!  "..but also spoiling that I start thinking less..."


#### Comments

Why the need?

* many data tasks are ill-formed and user iteratively identifies what the task is
  * data-science
  * data cleaning
  * exploration and analysis
  * creative tasks
* big design+action space
* AI imperfect
  * worse -- not sure HOW and when it's imperfect
    * ideally, perfect in known subspace, and 0 everywhere else
  * user needs to judge (note: takes effort)
* task space big and unknown
* using AI is NOT user's goal.  the task is!
  * is task always clear?  maybe not...

AI + USER (HDI) means

* AI augments
* gets out of the way
* things that it does are correct


Can we model if it's worth it?

      P(c):  probability of correct rec
      P(f):  probability of identifying incorrect rec
      U(c):  utility if task correctly done
      U(e):  utility if task incorrectly done
      W(ai): work if AI correct
      W(v):  work to verify rec correctness
      W(u):  work for user to do task

      Original Utility and Work:
        U(c)
        W(u)

      Utility:
        P(c)U(c) + 
        (1-P(c)) (P(f)U(c) - (1-P(f))U(e))

      Work:
        W(v) + P(c)W(ai) + (1-P(c)) W(u)



# Resources

Advice on how to read papers

* S Keshav [How to Read a Paper](http://blizzard.cs.uwaterloo.ca/keshav/home/Papers/data/07/paper-reading.pdf)
* M Mitzenmacher [How to read a research paper.](http://www.eecs.harvard.edu/~michaelm/postscripts/ReadPaper.pdf)

Thoughts on approaching research

* Richard Hamming [You and Your Research](http://www.cs.virginia.edu/~robins/YouAndYourResearch.html)
* Eugene Wu [Research as Optimization](https://researchsetup.github.io/researchmodel)


