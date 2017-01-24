---
layout: page
---

# Lecture 1: Intro

## Self Introduction

Typically have inspirational slides, we'll try using the blackboard

Who

* Eugene
* Thibault
* Guest lectures

My work 

* Data cleaning
* Data explanation
* DVMS
* In service of making it easier to build and enhance interactive data exploration systems

Class structure

* 20-40 minutes: Presentation of readings
* 20-30 minutes: Discussion of readings, how they relate to curent technology, brainstorming
* 20-30 minutes: overview of next class


## Context for this class

Situate within the rest of the classes at columbia

* database classes (intro, ken, luis)
* ML: identifying patterns -- but how depends on the actual data!
* HCI -- interaction design and understanding humans
* typical viz classes
* big data classes
* All talks about the same thing -- building apps using data
  * Ultimately, all of these techniques are interface questions about how to achieve some goal
    * How does a user best interact with an interface (eye tracking, skin input [harrison], 3d tracking, apple watch, etc)?  
    * How does a programmer interact with 1000 machines?
    * How does a user interact with a large pile of data?
  * But they take different perspective of the problem
  * Our class takes the perspective of building end-to-end interactive systems and the research problems in such a setting

Our class is a blend of all of these areas with the overarching hypotheses:

        "how we interact and explore data will certainly change, 
        but data management techniques will underlie technologies to support this transition"

  * They may not be "build an RDBMS problems", but taking a data management perspective has benefits
    * What are the key benefits that databases provide?
      * declarative interface
      * data independence
      * cost-based optimization + cost models

This is important

* However the pace of data volumes and diversity of data is outpacing the tools that are available.  
  * light bulbs, server logs, CCTV, live streaming, chat, gittr, supply chain data, etc
  * almost guarantee that tools that exist, if they can technically get things done, suck

Two things out of this class

* how to build and enhance visual data exploration systems
* what data exploration means for future applications and domains


## Short history lesson:

* Pre DB: 

        user -- application that does data management, optimization, _and_ app
                   for loops over binary csv files (basically)

* DB: 

                    rel alg
        user -- app ------ dbms that does optimization

  * mention OLAP.  turns out it's a very useful subset of SQL
    * GROUP BY Year
    * GROUP BY Month
    * FILTER BY prod = coffee GROUP BY MONTH
  * Direct map to Tableau (no one wants ot write and rewrite OLAP queries)

* MapReduce/Hadoop:

               java programs
        user ---------------- too much data for one machine

  * Benefits: job scheduling, cluster management, resource allocation
  * Problems: imperative programming, dog slow

* Spark
  
            scala/python
              RDDs
        user -------- too much data but in memory

* Hadoop systems have all transitioned back to DB on Hadoop architectures
* For all of these
  * ways to improve the interactiov for developers
  * just low level mechanisms to "run queries".  That's not the set of interactions the actual users want to deal with
  * dashboarding and visual interfaces are the dominant applications that users interact with.  Why?
  * have been relational data (what's that?).  Do you think that's still the case?  What are limitations to the relational model?

        user --------- IoT data streams 
             --------- industrial sensor data 
             --------- Video streams
             --------- Chat logs
             --------- Human beings
             --------- Scientific data
             --------- the web
             

        monitoring  (has anything gone wrong?)
        prediction
        outlier detection
        urban planning
        find the best (infer)
        ellicit comments from a crowd
        
Step back

* relational systems were successful because it found a really useful DSL, but it's not perfect
* Interactive data exploration will change based on the domain, the user, the types of questions

Any domain you look, the classic tools to explore, interact with, and make sense of data are completely impoverished

* nothing actually works the way it should, or requires substantial programming skills
* can't scale (CV algs to huge volumes, heterogeneity, variety of users, etc)
* isn't the best interface
* isn't the best interaction
* isn't fast

This class will be about data exploration.  

* It will be hands-on.  There will be labs/assignments so that you can come in and tell us what you thought.  
* The purpose of the class time is to discuss the papers, what you think, and share views on technology.  
* Point is not to have lecturers lecturing.
* The focus will largely center around visual data exploration systems, and branch out from there

## Simple Model

What's a simple model for data exploration?  
What are the parameters for which we may vary things?


     .
               modality
     wants    interaction     how to build?     queries
     clean      QBE
     outliers  "Why?"                                       data clean/reliable?
     patterns
  
      User <--------------> Exploration System <----------> Processing Sys/data
  
            response                          results
          autocomplete
              recs

* Basics
	* User
    * Exploration goals (there is always a goal)
      * build report
      * validate expected patters
      * "find" patterns
  * What is the data/data source?
    * relational data (10 years of logs)
    * streaming data (live CCTV feeds, twitch, chat)
    * a human (chat, data science, expert help)
    * the internet (websites)
* Using/interacting with systems
	* Input Modality 
    * Scope of interactions (splunk vs tableau vs mapd vs gesturedb)
  * What does the system tell the user? (recs, augmentations, data mining)
  * How is the data presented?
* Building and Optimizing (scope of interactions drives this)
	* What languages are used to implement the system?
    * d3 + js + python + ...
    * ggplot2
    * dvms
  * What is the architecture?
    * what's the problem with using multiple technologies?  
      * analysis/optimization decisions limited within tech boundaries
  * What optimization techniques are used to make things fast?

Making it fast is the easiest thing to do

* faster DB
* do only one thing (end-to-end)
* change the larguage so all operators are optimized  
* use user models as part of execution: perception pushdown
* single data/compute model instead of using 5 different technologies (why?)
* But
  * If lacks data indep, then making it fast changes the architecture.  
  * design changes require architecture changes.

Primer on data optimization

* Sampling
* Pre-computation
* Partitioning/Parallelization (GPU is extreme)
* Hardware ($$$)
* Reduce number of intermediaries
* let it go (concurrentUX)

### Let's take look at MapD

* Data: tweets turned into relational tables
* Goal: render num tweets in a region and time period by loc, time, and hashtag
* Analyses: Agg of counts, Normalization (else NYC always lights up)
* Presentation: heatmap, wordcloud, facets/filters to drill down (zoom, click on hashtag)
* Modality: point, click, drag
* Architecture
  * Browser client, generates API calls
  * Application middleware for REST calls (open inspector)
  * GPU does everything, sends images/datasets to browser

Anatomy of a query

* SELECT sender, text FROM tweets WHERE lat < 0 ORDER BY DIST(lon, lat, 31, 30)
* parser -> optimizer -> executor
* On disk/in-memory data:

        id  lat lon date  sender  text
        0   31  -87 10-11 bob      lol
        1   -41 16  10-14 ewu      columbia

* On gpu:

        id  lat lon txt
        0   31  -87 lol

        id  lat lon txt
        1   -41 16  columbia

* Process filter, order by, sort on GPU
* Join with in memory to get sender and text (fast ID lookup)

But what assumptions does it need in order to work?

* Only real bottleneck is GPU 
  * (separate logic for client and backend is OK)
  * makes sense: easier to hire a UX expert to solely work on frontend
* Data is in relational form
* Network is fast, browser is fast
* Only want counts and normalizations
* (When are these assumptions true?)


## Syllabus


3-4 Assignments

* Purpose: play with/practice/implement ideas from the readings

Presentations

* Eugene, Thibault, and guest lectures
* Opportunities for group presentations of relevant papers as well.  
	* extra credit opportunity, so not required but a _very good exercise_.
	* Forcing function to really get to learn the papers related to your project

Project/Proposals

* Prospectus
* Project
	* Many options
    * Research project
    * "Disrupt" something: build something that wins along a dimension
    * Collect data, implement a state of the art algorithm, find that it doesn't work, make it work.
    * build interface/modality that's new

Reading questions

* Due 6PM Tuesday before class


Class is large -- typically ~10-15

* Value of this class will be the discussions 
  * N ideas + N^2 interactions is a rich source of knowledge
* large == more difficult to have discussions
  * If this becomes a problem, will need to reduce the size
* I am willing to accomodate anyone that active participates in lecture, your grade will suffer tremendously otherwise
* put in an extra effort to prep and talk in class (why participation is very high)
	* assignment is basically to read and think about the papers
	* discussion is encouraged, but write the answers on your own

### Relational model

Let's remind ourselves of a more traditional way of life: the relational model.

The relational model:

* Collections of records and relationships between them
* Collections of records/rows that are similar are stored in a relation/table.  All of these records have the same set of attributes (a schema).
* Each record/row should be unique, and relations are unordered sets of these records.
* Each record/row has a unique ID (a primary key), and records in other tables can refer to records in some table with their unique ID.

Properties of these relational database systems

* Usually offer transactions, which offer ACID
  * Atomicity: all-or-nothing---a sequence of changes to the database will either all work out or will all be reverted.  Requires heavy-weight machinery like logging, etc.
  * Consistency: data respects some set of constraints (unique IDs, foreign key references to other tables only refer to data that actually exists, data follows a schema, etc.).  No transaction will break this rule.
  * Isolation: two transactions that are half-way done won't see each other's half-way dirtied data.
  * Durability: committed operations remain visible, even across a variety of faults.

What are some criticisms you'll read about relational databases

* difficulty in changing schemas: if i add a new column or something like it, i have to update every record in the DB, and if implemented incorrectly, that could slow things down significantly.
  * relational database person response: not requiring set schema for data makes developers' lives harder
* they don't scale past a single machine
  * relational database person response: there's nothing fundamental in the relational model that makes it not scale.  open source rdbms don't have excellent support for this.  certain sql constructs might not parallelize well, and certain transactional guarantees make it hard.
* performance of queries is variable/unpredictable/depends on the underlying physical structures
* sql makes it hard to do some things: iteration (e.g., machine learning), order-dependent logic, arbitrary code, etc.
  

So why look from a database/relational perspective?

* Simple model -- subsets of ideas pop up everywhere
* Useful to map onto e.g., web, humans, etc
* Optimization techniques and systems building all apply to any new data processing and exploration system