---
layout: 2020s_w4995
---

<svg id="d3banner"></svg>

# Introduction to Data Visualization

<br>
_COMS W {{ layout.courseno }} (3 pts)_ <br>
_Instructor:_ Agnes Chang (ac3882), office hours by appt. <br>
_IAs:_ Emma Lu (ell2140; [Mon 3-5p](https://calendar.google.com/calendar/selfsched?sstoken=UUlMMTVhN1dWRS12fGRlZmF1bHR8NmJlNTBlZjJlMmEwYWNjYWQ5YWUzN2FkMmU5MTY2ZTg)), Irene Koo (hk2919; [Wed 2-4p](http://bit.ly/irene_OH)) <br>
_Class Time:_ Tues. 6:10-8pm <br>
_Room:_ 301M Fayerweather<br>
[Class Slack](https://columbiaviz-sp20.slack.com) <br>
[Course Feedback Form](https://forms.gle/sJne6fxphDzFBJN38)

## Spring 2021 Final Projects

- [What’s Shakespeare About Anyways? “As You Like It” through introductory text analysis](https://observablehq.com/@span728/a5-w-tfidf)
- [Visualizing COVID Testing Policies](https://sahovic.me/covid-testing-viz/)
- [Is Netflix Actually Chill? Exploring popularity of Netflix vs. non-Netflix produced shows](https://observablehq.com/@tw2686/is-netflix-actually-chill)
- [Injuries on Japan's Railway System](http://japantrainincidents.github.io/)
- [GBBO: Managing Risk in Your Competitive Baking Flavor Portfolio](http://bit.ly/gbbo-viz)
- [Heartbeat of a City: Economic inequality and neighborhood transportation in a time of COVID](http://heartbeatofa.city/)
- [How Diverse is Museum Mile?](https://observablehq.com/@oh/how-diverse-is-museum-mile)
- [NBA Exploratory Viz Tool](http://nba.yuxuan.site)
- [Music Moods & COVID-19](https://observablehq.com/@rjs97/music-moods-covid-19)
- [NYC Transit Trends](https://observablehq.com/@ja3143/nyc-transit-historical-trends)
- [MTA + COVID-19](https://observablehq.com/@rcawkwell/mta-covid)
- [Flight Delays](http://dataviza5.herokuapp.com/)
- [Economical effects of COVID-19 crisis](https://leonardogavaudan.github.io/)

## Overview

This course is a hands-on introduction to design principles, theory, and software techniques for visualizing data. Classes will be a combination of lecture, design studio, and lab. Through readings, design critique and code assignments, students will learn how visual representations can help in the understanding of complex data, and how to design and evaluate visualizations for the purpose of analysis or communication. Students will develop skills in processing data, and building interactive visualizations using D3. Topics include visual perception, exploratory data analysis, task analysis, graphic design, narrative, etc.

Students should have experience in JavaScript programming and web development, as well as familiarity with databases and data formats. You should be comfortable picking up new programming tools on your own. Experience in Python or R for data processing is helpful but not required.

## Schedule

{: .overview .table .table-striped :}
||Class| Reading Due | Assigned | Due Monday-before |
|--|--|--|--|--|
| 1/21 | **Introduction:** why visualize? schedule and expectations. <br>([slides](https://docs.google.com/presentation/d/1_ji4tnETuWSqdNlUvFIUaRYJ9kkgUHWZvPNX8BnZMzA/edit?usp=sharing))<br>([APPLY TO ENROLL by Friday](a0.html)) |  | [A2.1 Vis Design: divergence](a2.html) assigned| |
| 1/28 | **Designing**: form vs. function, generating ideas, iterating, and critique.<br>([slides](https://docs.google.com/presentation/d/1yHjRatAzQeSdUgCsC0u8wsr5iq5tIg9l-LlfbxX5zRg/edit?usp=sharing))<br>([quiz](https://forms.gle/A7haK8czcKVyTAzf9)) | • Visual Explanations, [Chp. 2 Excerpt](../files/readings/Tufte_VisualExplanations-Shuttle-Excerpt.pdf), by Tufte, E. 2007.<br>• [How to be creative](http://faculty.washington.edu/ajko/books/design-methods/how-to-be-creative.html) & [How to be critical](http://faculty.washington.edu/ajko/books/design-methods/how-to-be-critical.html), Amy Ko. 2017.<br>• Lateral Thinking, [Excerpts](../files/readings/debono_excerpts.pdf), Edward deBono, 1967.<br>• _Optional:_ [The Architecture of a Data Visualization](https://medium.com/accurat-studio/the-architecture-of-a-data-visualization-470b807799b4), Accurat Studio. |[A2.2 Vis Design: revisions](a2.html) assigned| |
| 2/4 | **Data Models**: data types, task types, corresponding visualization formats.<br>([slides](https://docs.google.com/presentation/d/1ErodlOxgnt_7NeSUiZtEdEXiXGHmZdM-L3ZIpY1Vgfc/edit?usp=sharing))<br>([quiz](https://forms.gle/QRvACxYtFXTJ2L7Q9)) | • Semiology of Graphics, [Excerpt](../files/readings/bertin_semiologyofgraphics_excerpts.pdf), Jacques Bertin, 1967.<br>• [A Tour through the Visualization Zoo](http://queue.acm.org/detail.cfm?id=1805128). Jeffrey Heer, Michael Bostock, and Vadim Ogievetsky. ACM. 2010.<br>• [Visualization Analysis and Design, Chp. 2.1–2.5](https://clio.columbia.edu/catalog/14286801) by Munzner, T. 2014.<br>• *Optional:* [The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations](http://drum.lib.umd.edu/bitstream/handle/1903/466/CS-TR-3665.pdf?sequence=2), Ben Shneiderman, 1996 | [A3 Exploratory Data Analysis](a3.html): assigned | [A2 Design](a2.html) DUE |
| 2/11 | **Data Exploration**: EDA, data wrangling and Tableau.<br>([slides](https://docs.google.com/presentation/d/14HNo2BQYDD3-nO-Ru9j0QF7OFKXPWb5jjyJUg82b0cA/edit?usp=sharing))<br>([quiz](https://forms.gle/Ru2dr9zYMyz5Lxn16)) | • [Chp. 6: Analytical Patterns]({{ layout.canvasfiles }}6721556) from Now You See It by Stephen Few, 2009.<br>• [Polaris: A System for Query, Analysis and. Visualization of Multi-dimensional Relational Databases](https://research.tableau.com/sites/default/files/Tableau-CACM-Nov-2008-Polaris-Article-by-Stolte-Tang-Hanrahan.pdf) by Stolte, C. et. al. ACM 2008.<br>• [Postmortem of an Example]({{ layout.canvasfiles }}6721547), Jacques Bertin, 1981.<br>• *Optional:* [A Layered Grammar of Graphics](http://vita.had.co.nz/papers/layered-grammar.html), Wickham, H. 2010.<br>• *Optional:* [Bad Data Guide](https://github.com/Quartz/bad-data-guide) by [Quartz](http://agneschang.net/gsapp-dataviz-archhum/qz.com) data team | | |
| 2/18 | **Visual Encoding**: marks, channels, expressiveness & effectiveness.<br>([slides](https://docs.google.com/presentation/d/1Qe5EJG4YolNnF78fDhzELQKhVDKkCoyWWQXJIsqqKGM/edit?usp=sharing))<br>([quiz](https://forms.gle/i6dNJ85LEhf4r5kY8)) | • [Understanding Comics, Chp. 5,7,8]({{ layout.canvasfiles }}6721545), by Scott McCloud<br>• [Chp. 3: The Power of Representation]({{ layout.canvasfiles }}6721549) in Things That Make Us Smart by Norman, D. 1993.<br>• [Visual Display of Quantitative Information, Chp. 2,4,5]({{ layout.canvasfiles }}6721546), by Tufte, E. 2007<br>• _Optional:_ [D3: Data-Driven Documents](http://vis.stanford.edu/files/2011-D3-InfoVis.pdf). Michael Bostock, Vadim Ogievetsky, Jeffrey Heer. InfoVis 2011. | [A4.1 Interactive: static](a4.html) assigned | [A3 EDA](a3.html) DUE |
| 2/25 | **Interaction:** overview vs. details, small multiples, brushing, etc <br>([slides](https://docs.google.com/presentation/d/1zsnsRqO2KPSM5ATC3RsSnezSfI9dV791pjU_14D60Rw/edit?usp=sharing))<br>([quiz](https://forms.gle/umDZLLKcVVpvwX3K7)) | • [Interactive Dynamics for Visual Analysis.](http://portal.acm.org/ft_gateway.cfm?id=2146416&type=pdf) Jeffrey Heer & Ben Shneiderman. 2012.<br>• [Ladder of Abstraction](http://worrydream.com/LadderOfAbstraction/) by Bret Victor, 2011.<br>• [In Defense of Interactive Graphics](https://www.vis4.net/blog/2017/03/in-defense-of-interactive-graphics/), Gregor Aisch, 2017.<br>• _Optional:_ [Mastering Hued Color Scales](https://www.vis4.net/blog/2013/09/mastering-multi-hued-color-scales/), Gregor Aisch, 2013. | [A4.2 Interactive: dynamic](a4.html) assigned | |
| 3/3 | **Evaluation, Perception, Review**: a framework for analysis; how we see, color and attention theory.<br>([slides](https://docs.google.com/presentation/d/1XcWbg0IMOX47SGLaojcUlb6F8dVf7GPwQscfFkQ9Gh4/edit?usp=sharing))<br>([quiz](https://forms.gle/bC5N3UENwY55gTYS9)) | • [Visualization Analysis and Design](https://clio.columbia.edu/catalog/14286801), Chp. 3.1–3.4, 4.1–4.6 by Munzner, T. 2014.<br>• [The Design of Everyday Things, Chp.1]({{ layout.canvasfiles }}6721550) by Norman, D. 1988.<br>• [Now You See It, Chp. 3]({{ layout.canvasfiles }}6721548) by Stephen Few, 2009.<br>• [39 Studies About Human Perception in 30 Minutes](https://medium.com/@kennelliott/39-studies-about-human-perception-in-30-minutes-4728f9e31a73) by Kennedy Elliott.<br>• _Optional:_ [Design and Redesign in Data Visualization](https://medium.com/@hint_fm/design-and-redesign-4ab77206cf9#.mha5ohu1t) by Viegas & Wattenberg, 2015. | Study for midterm |  |
| 3/10 | ~~_Midterm Exam._~~ Postponed, moved [online](midterm.html).<!---- <br>([final project inspiration](https://docs.google.com/presentation/d/1x0_cR6_7IGnDqW7whyGFrl4xwN1QW2F7ANu-A4m0kUs/edit?usp=sharing))----> |  | [A4.3 Interactive: evaluation](a4.html) assigned | |
| 3/17 | _Spring Break, no class._| | | |
| ~~3/24~~<br>3/31 | **Animation:** motion perception, transitions, pros/cons.<br>([slides](https://docs.google.com/presentation/d/1Zgslh16_k9Ub0KzRHOnz19W4NdM8rteksj1WSrXTon4/edit?usp=sharing))<br>([quiz](https://forms.gle/6CfaMzHdxQTE1kgQ7)) | • [Creating Usability with Motion](https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc), by Willenskomer, I. 2017<br>• [Chp. 5: Analytical Techniques]({{ layout.canvasfiles }}6721555) from Now You See It by Stephen Few, 2009.<br>• [Powers of Ten](https://youtu.be/0fKBhvDjuy0)(video), Charles & Ray Eames, 1977.<br>• _Optional:_ [Animated Transitions in Statistical Data Graphics](http://vis.berkeley.edu/papers/animated_transitions/2007-AnimatedTransitions-InfoVis.pdf) by Heer, 2007. | [A5.1 Final: Proposals](a5.html) assigned | [A4 Interactive](a4.html) DUE<br>[Online midterm](midterm.html) DUE |
| ~~3/31~~<br>4/7 | **Maps & Narrative:** projections; typography, rhythm; why storytelling, techniques.<br>([slides](https://docs.google.com/presentation/d/1q5ttlpOlagcEYOD7hdGdW2rTDolLxSe7Hwx_0jDlxRk/edit?usp=sharing))<br>([quiz](https://forms.gle/WYRj63KpVMpVKxUQ7))<br>([survey](https://forms.gle/WF2ZpRwG8ys6LEc78)) | • [Reinventing Explanation. ](http://michaelnielsen.org/reinventing_explanation/) Michael Nielsen, 2014.<br>• [The Making of R2D3](https://www.youtube.com/watch?v=tuPjPaEcUKI) (video) and [A Visual Introduction to Machine Learning](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/) (viz) by Chu, T. 2016.<br>• [What to consider when creating choropleth maps](https://blog.datawrapper.de/choroplethmaps/) by Rost, L. C. 2017.<br>• _Optional:_ [Narrative Visualization: Telling Stories with Data]({{ layout.canvasfiles }}6721551) in IEEE Vis by Segal and Heer, 2010. | [A5.2](a5.html) assigned |  [A5.1 Proposals](a5.html) DUE |
| ~~4/7~~<br>4/14 | _Final Project In-progress Critique._<br>([slides](https://docs.google.com/presentation/d/1EudkyDR1onHK2SL14kYOfd6YutNrY9ExsExzyKtgbqI/edit?usp=sharing))<br>Critics: [Hannah Fresques](https://www.propublica.org/people/hannah-fresques), [Jia Zhang](https://www.arch.columbia.edu/faculty/2391-jia-zhang), [Erica Greene](https://www.linkedin.com/in/ericagreene/), and [Eugene Wu](http://www.eugenewu.net/) | | | [A5.2 In-Progress Presentation ](a5.html) DUE |
| ~~4/14~~<br>4/21 | **Networks, Text, Algorithms:** node-link diagrams, trees, force layout; visualizing words and algorithms.<br>([slides](https://docs.google.com/presentation/d/1mcsY84k4jcc0q546slCyf3S_3FJb8uGIrOCb4l_k1Pg/edit?usp=sharing))<br>([quiz](https://forms.gle/9721nAWmKvBkeoyL6)) | •  [Visualization Analysis and Design](https://clio.columbia.edu/catalog/14286801) Chp 9: Networks and Trees by Munzner, T. 2014.<br>• [Pictures of Arguments, Songs, and Ancient Texts](https://vimeo.com/69497902) (video, till 38'20") by Viegas and Wattenberg, at Eyeo  conference 2013.<br>• [Visualizing Algorithms. ](https://bost.ocks.org/mike/algorithms/) Mike Bostock. 2014.<br>• *Optional:* [Four Experiments in Handwriting with a Neural Network](https://distill.pub/2016/handwriting/). Shan Carter et. al., 2016 | [Extra Credit](ax.html) DUE |
| ~~4/21~~<br>4/28 | **Ethics, Vis in Industry vs. Research**: between persuasion and misrepresentation; jobs, and guest lecture by [Prof. Wu](http://www.cs.columbia.edu/~ewu/) on research.<br>([slides](https://docs.google.com/presentation/d/1HGC3YVwYzkX_d2YAxNjR8F9DPhEkBniOxx174jiUaKo/edit?usp=sharing))<br>([quiz](https://forms.gle/hL9Ei1RrmXtRvebv8)) | • [Six Provocations for Big Data](https://courseworks2.columbia.edu/courses/99589/files?preview=7704096) by boyd & Crawford, 2011<br>• [What Is Visualization Research?](https://medium.com/multiple-views-visualization-research-explained/what-is-visualization-research-what-should-it-be-8840a9ba658) by Hullman, J.<br>• _Optional:_ [The Case for Data Visualization Management Systems](https://www.dropbox.com/s/yhwnsxfhau7pp1c/Ermac.pdf?dl=0) by Wu, et. al.<br>• _Optional:_ [What is a Senior Data Visualization Engineer?](https://medium.com/@Elijah_Meeks/what-is-a-senior-data-visualization-engineer-eb032996297) by Meeks, E. 2018. ||
| ~~4/28~~<br>5/5 | _Final Project Showcase 6–8pm_ <!-- <br>@ Brown Institute, Pulitzer Hall_<!-- <br>([slides](https://docs.google.com/presentation/d/1EgzqSZ2qFvdJEYSd5SVniElfcj6WPbjTOEiowcf3ntE/edit?usp=sharing)) --> ||| [A5.3 Lightning Talk](a5.html) DUE |
| 5/11 MON | ||| [A5.4 Final Visualization](a5.html) DUE +<br>[A5.5 Final Documentation](a5.html) DUE |

## Past semesters

- [Fall 2019](/2019f_w4995/)
- [Spring 2019](/2019s_w4995)
- [Fall 2018](/2018f_w4995)

{% include datavis_d3banner.html d3colorscheme="RdPu" %}{%comment%}PuBuGn{%endcomment%}
