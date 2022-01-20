{%- for link in page.links[include.week] -%}
  {%- if link.draft %}{% break %}
  {%- elsif link.slides %}<br>⟨[slides]({{link.slides}})⟩
  {%- elsif link.quiz %}<br>⟨[quiz]({{link.quiz}})⟩
  {%- elsif link.label %}<br>⟨[{{link.label}}]({{link.url}})⟩
  {%- elsif link.critics %}<br>Critics: [{{link.critics[0].name}}]({{link.critics[0].url}})
    {%- for critic in link.critics offset:1 %}, [{{critic.name}}]({{critic.url}}){% endfor -%}
  {%- endif -%}
{%- endfor -%}

