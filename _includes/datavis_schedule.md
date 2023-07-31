||Topic| Reading Due In Class | Assigned, Individual | Assigned, Group | Due {{include.due}} Before Class |
|--|--|--|--|--|--|
{% for pair in site.data[include.data] -%}
  {%- assign week = pair[1] -%}
  | {{ week.date }} | {{ week.topic }}
  {%- unless week.draft %}{% for link in week.links -%}
    {%- if link.slides %} <br>⟨[slides]({{link.slides}})⟩
    {%- elsif link.quiz %} <br>⟨[quiz]({{link.quiz}})⟩
    {%- elsif link.label %} <br>⟨[{{link.label}}]({{link.url}})⟩
    {%- elsif link.critics %} <br>Guest Critics: [{{link.critics[0].name}}]({{link.critics[0].url}})
      {%- for critic in link.critics offset:1 %}, [{{critic.name}}]({{critic.url}}){% endfor -%}
    {%- endif -%}
  {%- endfor %}{% endunless %} | {%- for item in week.readings -%}
    <span class="outdent">• </span>{{ item }}<br>
  {%- endfor -%} | {% for proj in week.work.ind -%}
    {% if proj.assign %}{{ proj.assign }}{% else %}{{ proj }} assigned<br>{% endif %}
  {%- endfor %} | {% for proj in week.work.grp -%}
    {{ proj }} assigned<br>
  {%- endfor %} | {% for proj in week.work.due -%}
    {{ proj }} DUE<br>
  {%- endfor %} |
{% endfor %}
