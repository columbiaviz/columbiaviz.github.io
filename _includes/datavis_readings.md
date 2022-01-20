{%- for item in page.readings[include.week] -%}
  <span class="outdent">• </span>{{ item }}<br>
{%- endfor -%}