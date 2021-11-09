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
* 11/09/21
  * A4 has been released and is due by Nov 15, 11:59 PM (EST)
* 10/21/21
  * Readings for 25th Nov (Monday) have been updated, kindly check and complete before the deadline.
* 11/09/21
  * [Voice And Natural Language by Carlos Eguiluz Rosas](./sessions/Voice_Natural_Language.pptx)
  * [Performance & Engine PPT by Jeffrey Tao](./sessions/HDI_ Performance & Engines.pptx)
  * [Approximation & Precomputation PPT by Haoran Pu](./sessions/Approximation and Precomputation.pptx)
* 10/16/21
  * Virtual Classes will be held until 3rd Nov, 2021, after which all classes will be held in-person for all students. 
* 10/10/21
  * [Instructions for Reading Presentation](./sessions/presentation.pptx)
* 10/2/21
  * No reviews for class on Wed 10-06.  We will use to review the Vis topics, instead of multiverse analysis.
* 09/21/21
  * [Slides used at the beginning of classes](./sessions/slides.pptx)
* 09/15/21
  * [Link to PDF of notes taken in class](https://www.dropbox.com/s/z41ojralfc98p29/public%20notebook.pdf?dl=0)
  * [Slides from first class](./sessions/01.pptx)
* 09/13/21
  * Read our COVID policy in [the syllabus](./syllabus)
  * [Start and submit assignment 1](./a1)
  * Start reading wednesday's paper and submit a review by the night before


## Schedule (In Flux)

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
        <span class='presenter'>{{r.presenter}}</span>
      {% endif %}
      {% if r.notes %}
        <br/>
        {{r.notes|raw}}
      {% endif %}
      </td>
    <td class="notes">
     {{r.notes}}
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


