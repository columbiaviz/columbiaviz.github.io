---
layout: 2020s_w6998
---


#### Overview

Human Data Interaction studies the interface between humans and data. What types of interfaces are suitable for different data tasks? Further, creating human data interfaces is extremely challenging because the responsiveness of the interface directly depends on the system architecture as well as the interface design.  What systews innovations are needed to simplify how effective human data interfaces can be created and used?

Human Data Interaction is a nascent field, and this seminar course will focus on answering the above questions.  The course will involve reading, reviewing, and discussing research papers in the fields of data visualization, human computer interaction, and data systems. 

Each session will consist of a round table discussion of the week's readings to understand the context, the technical details, and to brain storm follow up research questions.  Students will work in small teams on a semester-long research project that is within the scope of the course topic.  

<small style="color: grey">Course capped at 15.</small>



#### Recent Announcements

#### Schedule (In Flux)


<style>
.presenter { }
</style>

<table class="table table-striped schedule">
  <thead>
  <tr>
    <!--<th class="idx" style="width: 3em; max-width:3em;"></th>-->
    <th class="date" style="width: 4em; max-width: 4em;"> <p> <span>Date </span> </p> </th>
    <th style="min-width: 15%;"> <p> <span>Topic </span> </p> </th>
    <th style="width: 20%"> <p> <span>Notes </span> </p> </th>
    <th style="width: 10%"> <p> <span>Readings </span> </p> </th>
    <!--<th style="width: 15%;"> <p> <span>Assigned</span> </p> </th>-->
    <th style="width: 15%;"> <p> <span>Due</span> </p> </th>
  </tr>
  </thead>
{% assign idx = 0 %}

{% for r in site.data.2020s_w6998_sched %}
  {% assign idx = idx | plus: 1  %}
  <tr>
    <!--<td class="idx">L{{idx}}</td>-->
    <td class="date">L{{idx}}: {{r.date}}</td>
    <td class="slug">
      <b>{{r.slug}}</b>
      {% if r.presenter %}
        <br/>
        <span class='presenter'>Presenter: {{r.presenter}}</span>
      {% endif %}

      </td>
    <td class="notes">
      {% if r.link %}
        <a href="{{r.link}}">Notes</a>
      {% endif %}
    </td>
    <td class="readings">
      {{r.readings}}
    </td>
    <!--<td>{{r.assigned | safe}}</td>-->
    <td>{{r.due | safe}}</td>
  </tr>
{% endfor %}
</table>


