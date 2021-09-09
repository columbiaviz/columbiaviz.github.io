---
layout: 2021f_w6998
---


## Overview

Human Data Interaction studies the interface between humans and data that help users achieve data-oriented tasks. Further, creating human data interfaces is extremely challenging because the responsiveness of the interface directly depends on the system architecture as well as the interface design.  What system innovations are needed to simplify how effective human data interfaces can be created and used?

Human Data Interaction is a nascent field, and we will study modern research in data visualization, HCI, data analysis, and data management systems.   We will first survey research in visualization interfaces and data management, then deep dive into the interplay between the two fields, and finally explore how the ideas apply in different application domains.


The goal of the seminar is to learn about current research, and learn _how_ to conduct research.   
Students will submit reviews of the class readings before each session.  A session will consist of a round table discussion of the week's readings to understand the context, the technical details, and to brain storm follow up research questions.  Course membership will be determined based on quality of reviews and active participation.  Students will also work in small teams on a semester-long research project that is within the scope of the course topic.  

<!--
<small style="color: grey">Enrollment based on .</small>
-->


## Recent Announcements

* 09/13/21: TODOs for first class
  * [Submit assignment 1](./a1)
  * [Sign up for the class' slack workspace](https://join.slack.com/t/hdisystems/signup).


## Schedule (In Flux)

<!--
Goal: understand the challenges that sit in between scale/data and data interface design

By the end of the course, students should be able to

* understand how a given interaction design affects the system 
* be able to take an interface and reframe it in terms of data flow and rendering
* understand the trade-off between optimizations and interaction expressiveness
* take an innotativation in the ssytem/alg side and see how it can change the interface design

Themes

* task defines design and goodness metrics
  * Tamara's task modeling
* language to describe task
* mapping language to UI and to data processing

HDI

* Visual representation of processed data
* Ways to interact with and manipulate data/program
* Differences based on the task, data type, and scalability/system concerns

Data models: relational, nested, streaming, (meta)lineage
DB-VIS connections
* vis=view
* selection is lineage
* interaction is query transforms
* concurrency control and async 
* failure modes: layout, nested orgs, pure design
* Collaboration and coordination
  * https://cs598.github.io/papers/collab-vis.pdf
* performance/optimization
  * Columnar: cstore, arrow, arquero, duckdb
  * Approx: AQP, blinkdb
  * precompute: immens/indexes
  * PVD

Examples throughout data pipeline

* Data ingest, load
* Data extraction (ML, etc)
  * Wrangler
* Data prep, transform, cleaning
  * Constraints
  * Data programming
  * Complaints
* Data augmentation/dataset search
* Data exploration
* Data modeling
* Data presentation


When making arguments (X sucks, X is slow), provide qualifying examples (e.g., Y is a setting where X is slow).

-->

<style>
.presenter { }
</style>

<table class="table table-striped schedule">
  <thead>
  <tr>
    <th class="date" style="max-width: 15em; text-align: left;"> <p> <span>Date </span> </p> </th>
    <th style="min-width: 15%;"> <p> <span>Topic </span> </p> </th>
    <th style="width: 10%"> <p> <span>Notes </span> </p> </th>
    <th style="width: 5%;"> <p> <span>Assigned</span> </p> </th>
    <th style="width: 15%;"> <p> <span>Due</span> </p> </th>
  </tr>
  </thead>
{% assign idx = 0 %}

{% for r in site.data.sched_2021f_w6998 %}
  {% assign idx = idx | plus: 1  %}
  <tr style="background-color: {{r.color}}; ">
    <!--<td class="idx">C{{idx}}</td>-->
    <td class="date" style="text-align: left">C{{idx}}: {{r.date}}</td>
    <td class="slug">
      {% if r.link %}
        <a href="./papers#{{r.link}}"><b>{{r.slug}}</b></a>
      {% else %}
        <b>{{r.slug}}</b>
      {% endif %}
      {% if r.presenter %}
        <br/>
        <span class='presenter'>Presenter: {{r.presenter}}</span>
      {% endif %}
      {% if r.notes %}
        <br/>
        {{r.notes|raw}}
      {% endif %}
      </td>
    <td class="notes">
    </td>
    <td>{{r.assigned | safe}}</td>
    <td>{{r.due | safe}}</td>
  </tr>
{% endfor %}
</table>





### Acknowledgements 

* [Azza Abouzied](http://azza.azurewebsites.net/): [Capstone course](https://github.com/huda-lab/huda-lab.github.io/blob/master/syllabi/Capstone-InteractiveSystems-SyllabusSpring2019.pdf)
* [Leilani Battle](http://www.cs.umd.edu/~leilani/): [CMSC828D](https://umd.instructure.com/courses/1265679/assignments/syllabus)
* [Agnes Chang](http://agneschang.net/): [COMS 4995 Intro to Data Vis](https://columbiaviz.github.io/2020s_w4995/)
* [Aditya P.](http://people.ischool.berkeley.edu/~adityagp/): [CS598](https://cs598.github.io/index.html#papers)


