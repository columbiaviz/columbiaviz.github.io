---
title: "Labs"
layout: 2023s_w4995
team: https://observablehq.com/@columbiaviz-s22
due: "Wednesday 11:59pm ET"
labs:
  - title: "Shapes and Styles"
    notebook: https://observablehq.com/@columbiaviz-s22/lab-1-shapes-and-styles
    due: "Wednesday 2/2, 11:59pm ET"
  - title: "Data Binding"
    notebook: https://observablehq.com/@columbiaviz-s22/lab-2-data-binding-scales-and-axes
    due: "Wednesday 2/9, 11:59pm ET"
  - title: "Interactivity"
    notebook: https://observablehq.com/@columbiaviz-s22/lab-3-interactivity
    due: "Wednesday 2/24, 11:59pm ET"
---

We will be working in the Observable platform, which is like a web-hosted JavaScript version of Jupyter notebooks. The goal of these assignments is to get you started with coding with D3, the dominant JavaScript library for building interactive visualizations for the web.

All lab assignments are done individually. You are expected to adhere to the [CS Department Honesty Policy](http://www.cs.columbia.edu/education/honesty) and submit your own work. You may not share your work for these assignments with your classmates. It is otherwise acceptable to google and lookup how to write commands.

To start your lab homework, fork the assigned notebook under your personal Observable account, *not* as our team [@columbiaviz-s22]({{page.team}}) account. Make sure you "Publish" your lab notebook using the **Unlisted** visibility setting—your notebook should only be visible to someone with the link. Finally, I repeat: remember to fork!🍴 Otherwise you will be editing the template directly and won't have saving permissions. As a result you will _lose your work!_

To submit, publish your notebook and submit the ‘unlisted’ [Observable notebook url]({{ layout.forms.submit }}) by **{{page.due}}** on the due date.

{% for lab in page.labs %}
### Lab {{forloop.index}}: {{lab.title}}
Fork (remember to fork!🍴) from [Lab {{forloop.index}} template]({{lab.notebook}}).

Submit your [Observable notebook url]({{ layout.forms.submit }}) by **{{lab.due}}**.
{% endfor %}

### Grading Criteria

- Completes notebook problems.
- Each notebook is graded pass/fail.
