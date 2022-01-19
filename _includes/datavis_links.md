{%- for link in layout.links[include.week] -%}
  {%- if link.draft %}{% break %}{% endif -%}
  <br>⟨[{{link.label}}]({{link.url}})⟩
{%- endfor -%}

