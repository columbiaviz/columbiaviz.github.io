---
layout: 2018f_w4995
---

# Introduction to Data Visualization

<br>
_COMS W 4995 004 (3 pts)_ <br>
_Instructor:_ Agnes Chang (ac3882), office hours by appt. <br>
_IAs:_ TBD <br>
_Time:_ Tues 6:10-8pm <br>
[Class Slack](https://columbiavis-fa18.slack.com/messages/CC7B6321K) <br>
[Course Feedback Form](https://goo.gl/forms/UG6Lq2kqFjYqP6bf1)

## Overview

This course is a hands-on introduction to design principles, theory, and software techniques for visualizing data. Classes will be a combination of lecture, design studio, and lab. Through readings, design critique and code assignments, students will learn how visual representations can help in the understanding of complex data, and how to design and evaluate visualizations for the purpose of analysis or communication. Students will develop skills in processing data, and building interactive visualizations using D3. Topics include visual perception, exploratory data analysis, task analysis, graphic design, narrative, etc.

Students should have programming experience as well as experience working with databases, and you should be comfortable picking up new programming tools on your own. Experience in JavaScript and web development, as well as Python for data processing is helpful but not required.

## Course Objectives

Students will learn to

* Apply a structured design process to create effective visualizations
* Conceptualize ideas and interaction techniques using sketching and prototyping
* Apply principles of color, typography, and layout as well as principles of human perception and cognition in visual design
* Process and analyze a variety of data types: quantitative, text, geospatial, qualitative
* Create web-based interactive visualizations using D3 and Observable
* Critically evaluate visualizations and suggest improvements and refinements
* Work constructively as a member of a team to carry out a complex project

## Schedule

{: .overview .table .table-striped :}
||Class| Reading | Assigned | Due |
|--|--|--|--|--|
| 9/4 | **Introduction:** why visualize? schedule and expectations. | • [The Visual Display of Quantitative Information](https://www.amazon.com/Visual-Display-Quantitative-Information/dp/1930824130), Chp. 1-3, Edward Tufte<br>• [Design and Redesign in Data Visualization](https://medium.com/@hint_fm/design-and-redesign-4ab77206cf9#.mha4ohu1t) by Viegas & Wattenberg<br>• [How to be creative](http://faculty.washington.edu/ajko/books/design-methods/how-to-be-creative.html), Andrew Ko. 2017.<br>• Lateral Thinking(Excerpts), Edward deBono. | [A1.1 Vis Design: divergence](a1.html) assigned| |
| 9/11| **Designing**: form vs. function, generating ideas, iterating, and critique. | • [A Tour through the Visualization Zoo](http://queue.acm.org/detail.cfm?id=1805128). Jeffrey Heer, Michael Bostock, and Vadim Ogievetsky. ACM. 2010.<br>• [The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations](http://drum.lib.umd.edu/bitstream/handle/1903/466/CS-TR-3665.pdf?sequence=2), Ben Shneiderman, 1996<br>• [D3: Data-Driven Documents](http://vis.stanford.edu/files/2011-D3-InfoVis.pdf). Michael Bostock, Vadim Ogievetsky, Jeffrey Heer. InfoVis 2011. |[A1.2 Vis Design: revisions](a1.html) assigned| |
| 9/18| **Data Models**: data types, task types, corresponding visualization formats, and tools. | • [Learning About Your Data](http://proquest.safaribooksonline.com.ezproxy.cul.columbia.edu/book/databases-and-reporting-tools/9781787129764/1dot-module-1/ch03_html?uicode=columbia), Chp. 3 from [_Data Visualization_](https://clio.columbia.edu/catalog/13061581?counter=1) by Kirk, A.<br>• Chp 6: Analytical Patterns from Now You See It by Stephen Few, 2009.<br>• [Voyager: Exploratory Analysis](https://ieeexplore-ieee-org.ezproxy.cul.columbia.edu/document/7192728/) in IEEE Vis. by Wongsuphasawat, K. et. al. 2016.<br>• [Bad Data Guide](https://github.com/Quartz/bad-data-guide) by [Quartz](http://agneschang.net/gsapp-dataviz-archhum/qz.com) data team | [A2 Exploratory Data Analysis](a2.html): assigned | [A1 Design](a1.html) DUE |
| 9/25| **Data Exploration**: EDA, data wrangling and Tableau. | • [Semiology of Graphics](https://www.amazon.com/Semiology-Graphics-Diagrams-Networks-Maps/dp/1589482611), Part I, by Jacques Bertin.<br>• [Understanding Comics, Chp. 5,7,8](https://courseworks2.columbia.edu/files/2308737/download?download_frd=1), by Scott McCloud<br>• [Mastering Hued Color Scales](https://www.vis4.net/blog/2013/09/mastering-multi-hued-color-scales/), Gregor Aisch, 2013. | | |
| 10/2| **Visual Encoding**: marks, channels, expressiveness & effectiveness.| • Chp 3: Task Abstraction, Chp 4: Analysis(Excerpts).[Visualization Analysis and Design](https://clio.columbia.edu/catalog/11255731) by Munzner, T. 2014.<br>• [The Design of Everyday Things, Chp.1](https://courseworks2.columbia.edu/files/2308403/download?download_frd=1)by Norman, D. 1988.<br>• [39 Studies About Human Perception in 30 Minutes](https://medium.com/@kennelliott/39-studies-about-human-perception-in-30-minutes-4728f9e31a73). Kennedy Elliott. | [A3.1 Interactive Vis: static](a3.html) assigned | [A2 EDA](a2.html) DUE |
| 10/9| **Perception and Evaluation**: how we see, color and attention theory, misrepresentation and a framework for analysis. | • [Reinventing Explanation. ](http://michaelnielsen.org/reinventing_explanation/)Michael Nielsen, 2014.<br>• [Narrative Visualization: Telling Stories with Data](https://ieeexplore-ieee-org.ezproxy.cul.columbia.edu/document/5613452/) in IEEE Vis by Segal and Heer, 2010.<br>• [The Architecture of a Data Visualization](https://medium.com/accurat-studio/the-architecture-of-a-data-visualization-470b807799b4), Accurat Studio | Study for midterm |
| 10/16 | _Midterm Exam._<br><br>**Narrative:** why storytelling, techniques and examples. | • [Interactive Dynamics for Visual Analysis.](http://portal.acm.org/ft_gateway.cfm?id=2146416&type=pdf) Jeffrey Heer & Ben Shneiderman. 2012.<br>• [In Defense of Interactive Graphics](https://www.vis4.net/blog/2017/03/in-defense-of-interactive-graphics/), Gregor Aisch, 2017. | [A3.2 Interactive Vis: dynamic](a3.html) assigned | |
| 10/23 | **Interaction:** overview vs. details, small multiples, brushing, etc. | • Envisioning Information, Chp. 2,4,8(Excerpts), Edward Tufte<br>• Chp 5: Analytical Techniques from Now You See It by Stephen Few, 2009.<br>• [Powers of Ten](https://youtu.be/0fKBhvDjuy0)(video), Charles & Ray Eames, 1977.| [A4.1 Final Project: Proposals](a4.html) assigned | [A3 Interactive](a3.html) DUE |
| 10/30 | **Animation and Focus:** providing context, managing complexity, multiple axes.| • [Cartography: Thematic Map Design, ](https://magrawala.github.io/cs448b-fa17/assets/docs/Dent-Chap11.pdf)Chp. 11 Value-by-Area Mapping, Borden Dent.<br>• [Adaptive Composite Map Projections](http://ieeexplore.ieee.org/document/6327263/). Bernhard Jenny. InfoVis 2012. | [A4 Final Project](a4.html) assigned | [A4.1 Proposals](a4.html) DUE |
| 11/6| _Election day, no class._|||
| 11/13 | **Maps:** projections, isolines, chloropleths. | • Chp 9: Networks and Trees(Excerpt) from [Visualization Analysis and Design](https://clio.columbia.edu/catalog/11255731) by Munzner, T. 2014.<br>• [Visualizing Algorithms. ](https://bost.ocks.org/mike/algorithms/)Mike Bostock. 2014.<br>• [Teachable Machine](https://teachablemachine.withgoogle.com/).Google Creative Lab, 2017<br>• [Four Experiments in Handwriting with a Neural Network](https://distill.pub/2016/handwriting/). Shan Carter et. al., 2016 | | [A4.2 Final](a4.html) in-progress critique|
| 11/20 | **Networks and Algorithms:** node-link diagrams, trees, layout algorithms; visualizing algorithms. | • [Chp. 11 Information Visualization for Text Analysis](http://searchuserinterfaces.com/book/sui_ch11_text_analysis_visualization.html). from Search User Interfaces by Hearst, M. 2009.<br>• [Behind The Scenes of “The Whole Brilliant Enterprise.”](http://www.popsci.com/article/science/behind-scenes-%E2%80%9C-whole-brilliant-enterprise%E2%80%9D) by Office of Creative Research.<br>• TBD Research Topics in InfoVis||
| 11/27 | **Text and Vis Research Topics**: text concordance, classification, flow; guest lecture |||
| 12/4| _Final Project Presentations._ ||| [A5 Final Documentation](a5.html) DUE |
