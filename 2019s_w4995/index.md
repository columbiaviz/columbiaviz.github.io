---
layout: 2019s_w4995
---

<svg id="d3banner"></svg>

# Introduction to Data Visualization

<br>
_COMS W 4995 006 (3 pts)_ <br>
_Instructor:_ Agnes Chang (ac3882), office hours by appt. <br>
_IAs:_ Conder Shou (cs3544; TBD), Jeevan Farias (jtf2126; TBD)<br>
_Class Time:_ Tues 6:10-8pm <br>
_Room:_ 963 EXT Schermerhorn <br>
[Class Slack](https://columbiavis-sp19.slack.com/) <br>
[Course Feedback Form](https://goo.gl/forms/UG6Lq2kqFjYqP6bf1)

## Overview

This course is a hands-on introduction to design principles, theory, and software techniques for visualizing data. Classes will be a combination of lecture, design studio, and lab. Through readings, design critique and code assignments, students will learn how visual representations can help in the understanding of complex data, and how to design and evaluate visualizations for the purpose of analysis or communication. Students will develop skills in processing data, and building interactive visualizations using D3. Topics include visual perception, exploratory data analysis, task analysis, graphic design, narrative, etc.

Students should have experience in JavaScript programming and web development, as well as familiarity with databases and data formats. You should be comfortable picking up new programming tools on your own. Experience in Python or R for data processing is helpful but not required.

## Schedule

{: .overview .table .table-striped :}
||Class| Reading | Assigned | Due |
|--|--|--|--|--|
| 1/22 | **Introduction:** why visualize? schedule and expectations.<br>([slides](https://docs.google.com/presentation/d/12LPcwfeRnI7x1jdL4Bncq3kU8UjfVTWxyPk0WPNIZ5s/edit?usp=sharing))<br>([APPLY TO ENROLL](a0.html)) | • Visual Explanations, [Chp. 2 Excerpt](../files/readings/Tufte_VisualExplanations-Shuttle-Excerpt.pdf), by Tufte, E. 2007.<br>• [How to be creative](http://faculty.washington.edu/ajko/books/design-methods/how-to-be-creative.html) & [How to be critical](http://faculty.washington.edu/ajko/books/design-methods/how-to-be-critical.html), Andrew Ko. 2017.<br>• Lateral Thinking, [Excerpts](../files/readings/debono_excerpts.pdf), Edward deBono, 1967. | [A2.1 Vis Design: divergence](a2.html) assigned| |
| 1/29| **Designing**: form vs. function, generating ideas, iterating, and critique.<br>([slides](https://docs.google.com/presentation/d/1Q0-dDKadfTpGoS_vwhDuNpBWRMZYqioxTEshMSG36Yk/edit?usp=sharing))<br>([quiz](https://goo.gl/forms/cxlPv7xxeeDpFVIU2)) | • Semiology of Graphics, [Excerpt](../files/readings/bertin_semiologyofgraphics_excerpts.pdf), Jacques Bertin, 1967.<br>• [A Tour through the Visualization Zoo](http://queue.acm.org/detail.cfm?id=1805128). Jeffrey Heer, Michael Bostock, and Vadim Ogievetsky. ACM. 2010.<br>• [Visualization Analysis and Design, Chp. 2.1–2.5](https://clio.columbia.edu/catalog/13676720) by Munzner, T. 2014.<br>• *Optional:* [The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations](http://drum.lib.umd.edu/bitstream/handle/1903/466/CS-TR-3665.pdf?sequence=2), Ben Shneiderman, 1996 |[A2.2 Vis Design: revisions](a2.html) assigned| |
| 2/5| **Data Models**: data types, task types, corresponding visualization formats, and tools. | • [Chp 6: Analytical Patterns](../files/readings/few_nowyouseeit_chp6.pdf) from Now You See It by Stephen Few, 2009.<br>• [Polaris: A System for Query, Analysis and. Visualization of Multi-dimensional Relational Databases](https://research.tableau.com/sites/default/files/Tableau-CACM-Nov-2008-Polaris-Article-by-Stolte-Tang-Hanrahan.pdf) by Stolte, C. et. al. ACM 2008.<br>• [Postmortem of an Example](../files/readings/bertin_postmortem_of_an_example.pdf), Jacques Bertin, 1981.<br>• *Optional:* [A Layered Grammar of Graphics](http://vita.had.co.nz/papers/layered-grammar.html), Wickham, H. 2010.<br>• *Optional:* [Bad Data Guide](https://github.com/Quartz/bad-data-guide) by [Quartz](http://agneschang.net/gsapp-dataviz-archhum/qz.com) data team | [A3 Exploratory Data Analysis](a3.html): assigned | [A2 Design](a3.html) DUE |
| 2/12 | **Data Exploration**: EDA, data wrangling and Tableau. | • [Understanding Comics, Chp. 5,7,8](https://courseworks2.columbia.edu/courses/79575/files/3201028), by Scott McCloud<br>• [Now You See It, Chp. 3](https://courseworks2.columbia.edu/courses/79575/files?preview=3347098) by Stephen Few, 2009.<br>• [Visual Display of Quantitative Information, Chp. 2,4,5](https://courseworks2.columbia.edu/courses/79575/files/3298097), by Tufte, E. 2007<br>• _Optional:_ [D3: Data-Driven Documents](http://vis.stanford.edu/files/2011-D3-InfoVis.pdf). Michael Bostock, Vadim Ogievetsky, Jeffrey Heer. InfoVis 2011. | | |
| 2/19 | **Visual Encoding**: marks, channels, expressiveness & effectiveness. | • [Interactive Dynamics for Visual Analysis.](http://portal.acm.org/ft_gateway.cfm?id=2146416&type=pdf) Jeffrey Heer & Ben Shneiderman. 2012.<br>• [Ladder of Abstraction](http://worrydream.com/LadderOfAbstraction/) by Bret Victor, 2011.<br>• [In Defense of Interactive Graphics](https://www.vis4.net/blog/2017/03/in-defense-of-interactive-graphics/), Gregor Aisch, 2017.<br>• _Optional:_ [Mastering Hued Color Scales](https://www.vis4.net/blog/2013/09/mastering-multi-hued-color-scales/), Gregor Aisch, 2013. | [A4.1 Interactive: static](a4.html) assigned | [A3 EDA](a3.html) DUE |
| 2/26 | **Interaction:** overview vs. details, small multiples, brushing, etc. | • [Visualization Analysis and Design](https://clio.columbia.edu/catalog/13676720), Chp. 3.1–3.4, 4.1–4.6 by Munzner, T. 2014.<br>• [The Design of Everyday Things, Chp.1](https://courseworks2.columbia.edu/courses/79575/files?preview=3405668) by Norman, D. 1988.<br>• [39 Studies About Human Perception in 30 Minutes](https://medium.com/@kennelliott/39-studies-about-human-perception-in-30-minutes-4728f9e31a73) by Kennedy Elliott.<br>• _Optional:_ [Design and Redesign in Data Visualization](https://medium.com/@hint_fm/design-and-redesign-4ab77206cf9#.mha5ohu1t) by Viegas & Wattenberg, 2015. | [A4.2 Interactive: dynamic](a4.html) assigned | |
| 3/5 | **Evaluation and Perception**: a framework for analysis; how we see, color and attention theory. |  | Study for midterm |  |
| 3/12 | _Midterm Exam._ | • [Reinventing Explanation. ](http://michaelnielsen.org/reinventing_explanation/) Michael Nielsen, 2014.<br>• [Narrative Visualization: Telling Stories with Data](https://courseworks2.columbia.edu/courses/79575/files?preview=3440921) in IEEE Vis by Segal and Heer, 2010.<br>• [ Chp. 11 Value-by-Area Mapping](https://magrawala.github.io/cs448b-fa17/assets/docs/Dent-Chap11.pdf), Cartography by Borden Dent.<br>• _Optional:_ [The Architecture of a Data Visualization](https://medium.com/accurat-studio/the-architecture-of-a-data-visualization-470b807799b4), Accurat Studio | [A5.1 Final Project: Proposals](a5.html) assigned<br>[A4.3 Interactive: evaluation](a4.html) assigned | |
| 3/19 | _Spring break, no class._|||
| 3/26 | **Maps, Color, Narrative:** projections, cartograms, color scales; why storytelling, techniques. | • Visual Display of Quantitative Information, [Chp. 7, 8](https://courseworks2.columbia.edu/courses/79575/files?preview=3348986), by Tufte, E. 2007<br>• [Chp 5: Analytical Techniques](https://courseworks2.columbia.edu/courses/79575/files?preview=3347100) from Now You See It by Stephen Few, 2009.<br>• [Powers of Ten](https://youtu.be/0fKBhvDjuy0)(video), Charles & Ray Eames, 1977.| [A5 Final Project](a5.html) assigned | [A4 Interactive](a4.html) DUE<br>[A5.1 Proposals](a5.html) DUE |
| 4/2 | **Animation:** motion perception, transitions, pros/cons. | &nbsp; |   |  |
| 4/9 | _Final Project In-progress Critique._ | •  [Visualization Analysis and Design](https://clio.columbia.edu/catalog/13676720) Chp 9: Networks and Trees by Munzner, T. 2014.<br>• [Chp. 11 Information Visualization for Text Analysis](http://searchuserinterfaces.com/book/sui_ch11_text_analysis_visualization.html). from Search User Interfaces by Hearst, M. 2009.<br>• [Visualizing Algorithms. ](https://bost.ocks.org/mike/algorithms/) Mike Bostock. 2014.<br>• *Optional:* [Four Experiments in Handwriting with a Neural Network](https://distill.pub/2016/handwriting/). Shan Carter et. al., 2016 | | [A5.2 In-Progress Presentation ](a5.html) DUE |
| 4/16 | **Networks, Text, Algorithms:** node-link diagrams, trees, force layout; visualizing algorithms. | • [Six Provocations for Big Data](https://courseworks2.columbia.edu/courses/79575/files?preview=3722127) by boyd & Crawford, 2011<br>• [What Is Visualization Research?](https://medium.com/multiple-views-visualization-research-explained/what-is-visualization-research-what-should-it-be-8840a9ba658) by Hullman, J.<br>• _Optional:_ [The Case for Data Visualization Management Systems](https://www.dropbox.com/s/yhwnsxfhau7pp1c/Ermac.pdf?dl=0) by Wu, et. al. ||
| 4/23 | **Ethics, Vis Roles and Vis Research**: between persuasion and misrepresentation; vis in industry and research |||
| 4/30 | _Final Project Showcase.<br>Location TBD_<br> ||| [A5.3 Lightning Talk + A5.4 Project](a5.html) DUE |
| 5/6 | ||| [A5 Final Documentation](a5.html) DUE |

## Past semesters

- [Fall 2018](https://columbiaviz.github.io/2018f_w4995)

{% include 2019s_d3banner.html %}