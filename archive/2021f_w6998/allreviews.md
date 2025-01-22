---
layout: page_2020
---
<style>
p.review {
  border-left: 2px solid grey;
}

div.block {
  margin-bottom: 1em;
}
</style>


{% assign reviews1 = site.data.reviews1 | reverse %}

## Discussion Points

{% for r in reviews1 %}
  {% if r.discussion %}
  <p class="block">{{ r.discussion | newline_to_br | safe }}</p>
  {% endif %}
{% endfor %}



## Paper 1

{% for r in reviews1 %}
  <h3>{{r.Timestamp}} {{r.Name}}</h3>
  <p class="block">{{ r.review1 | newline_to_br | safe }}</p>
{% endfor %}


## Paper 2
{% for r in reviews1 %}
  <h3>{{r.Timestamp}} {{r.Name}}</h3>
  <p class="block">{{ r.review2 | newline_to_br | safe }}</p>
{% endfor %}



## Query Explanations vs ML Interpretation/Explanations
{% for r in reviews1 %}
  {% if r.review3 %}
  <h3>{{r.Timestamp}} {{r.Name}}</h3>
  <p class="block">{{ r.review3 | newline_to_br | safe }}</p>
  {% endif %}
{% endfor %}




<!--
## Reviews
{% for r in reviews3 %}
  <p class="review">
  <h3>{{r.Timestamp}} {{r.Name}}</h3>

  <div>Response:</div>
  <p class="block">{{ r.Review | newline_to_br | safe }}</p>
  <div>Comments:</div>
  <p class="block">{{ r.Comments | newline_to_br | safe }}</p>
  <div>Predictions 1:</div>
  <p class="block">{{ r.Prediction1 | newline_to_br | safe }}</p>
  <div>Predictions 2:</div>
  <p class="block">{{ r.Prediction2 | newline_to_br | safe }}</p>
   <div>Predictions 3:</div>
  <p class="block">{{ r.Prediction3 | newline_to_br | safe }}</p>
  
  </p>
  <hr/>
{% endfor %}
-->



