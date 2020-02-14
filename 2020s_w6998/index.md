---
layout: 2020s_w6998
---


## Overview

Human Data Interaction studies the interface between humans and data. What types of interfaces are suitable for different data tasks? Further, creating human data interfaces is extremely challenging because the responsiveness of the interface directly depends on the system architecture as well as the interface design.  What system innovations are needed to simplify how effective human data interfaces can be created and used?

Human Data Interaction is a nascent field, and we will study modern research in data visualization, HCI, data analysis, and data management systems.  This seminar course will center around reading, reviewing, and discussing research papers.  Each session will consist of a round table discussion of the week's readings to understand the context, the technical details, and to brain storm follow up research questions.  Students will work in small teams on a semester-long research project that is within the scope of the course topic.  

<small style="color: grey">Course capped at 15.</small>


<!--
## Quick Links

<a class="btn btn-default" href="https://forms.gle/jzBnRWAPvCEamRNP8">Submit Reviews</a>
-->


## Recent Announcements

* Week 4:
  * [class' reviews](./reviews/week4.html)
  * Extended project proposal deadline by one week to Weds 2/19 midnight.
* Feb 3
  * A2: We have updated the submission link so students without lionmail can still submit.
  * Submit [reviews using this link from now on](https://forms.gle/jzBnRWAPvCEamRNP8)
  * Added a [template with topics to think about when creating paper presentations](./lecs/presentation_template.pptx)
  * Updated [projects page](./projects) with a list of possible project ideas: 
* Week 2:
  * [class' reviews](./reviews/week2.html)
  * [Presentation and Scribe assignments](https://docs.google.com/spreadsheets/d/1HGmsObHfsZFcDUW2y2DqOhPjvyMANohHFTtPTyuKwQ8/edit?usp=sharing)
* Please note, the full list of all papers and their direct PDF links are below the schedule.  The schedule will link to the papers on nb.mit.edu, which is a nice platform for the class to collaboratively discuss the readings.  You can subscribe using our class' [registration link](http://nb.mit.edu/subscribe?key=Ky57vnKHys8WXkwqSJIZvkdJaqLLVLm6JDCPA0ueYwKLKrqlb6) 
* TODOs for first class
  * [Submit reviews](https://forms.gle/NpGxPBCeMFvKsr4W9)
  * [Submit assignment 1](./a1)
  * [Sign up for the class' slack workspace](https://join.slack.com/t/hdisystems/signup).
  * [Register an account on nb.mit.edu](http://nb.mit.edu/subscribe?key=Ky57vnKHys8WXkwqSJIZvkdJaqLLVLm6JDCPA0ueYwKLKrqlb6)


<!--
 
Every student should [sign up to lead at least one paper discussion and scribe at least once](https://docs.google.com/spreadsheets/d/1vEw-1mgOO0lPy08rc-0338G-r4b4ksCyqBxGJshXN3I/edit?usp=sharing).

-->

## Schedule (In Flux)


<style>
.presenter { }
</style>

<table class="table table-striped schedule">
  <thead>
  <tr>
    <!--<th class="idx" style="width: 3em; max-width:3em;"></th>-->
    <th class="lecid" style="width: 3em; max-width: 3em;"> <span> </span> </th>
    <th class="date" style="width: 6em; max-width: 6em;"> <p> <span>Date </span> </p> </th>
    <th style="min-width: 30%;"> <p> <span>Topic </span> </p> </th>
    <!--<th style="width: 30%"> <p> <span>Notes </span> </p> </th>-->
    <th style="width: 30%"> <p> <span>Readings </span> </p> </th>
    <!--<th style="width: 15%;"> <p> <span>Assigned</span> </p> </th>-->
    <th style="width: 15%;"> <p> <span>Due</span> </p> </th>
  </tr>
  </thead>
{% assign idx = 0 %}

{% for r in site.data.sched_2020s_w6998 %}
  {% assign idx = idx | plus: 1  %}
  <tr>
    <!--<td class="idx">L{{idx}}</td>-->
    <td class="lecid">L{{idx}}</td>
    <td class="date">{{r.date}}</td>
    <td class="slug">
      <b>{{r.slug}}</b>
      <div>
        {% if r.reviews %} <span style='margin-right: 2em;'><a href="{{r.reviews}}">Reviews</a></span>{% endif %}
        {% if r.slides %} <span style='margin-right: 2em;'><a href="{{r.slides}}">Slides</a></span>{% endif %}
        {% if r.notes %} <span><a href="{{r.notes}}">Notes</a></span>{% endif %}
      </div>
    </td>
    <td class="readings">
      {% if r.paper1 %}
        {{r.paper1 | safe}}
        {% if r.presenter1 %}<div class='presenter'>Presenter: {{r.presenter1}}</div>{% endif %}
        {% if r.scribe1 %}<div class='presenter'>Scribe: {{r.scribe1}}</div>{% endif %}
      {% endif %}
      {% if r.paper2 %}
        <br/>
        {{r.paper2 | safe}}
        {% if r.presenter2 %}<div class='presenter'>Presenter: {{r.presenter2}}</div>{% endif %}
        {% if r.scribe2 %}<div class='presenter'>Scribe: {{r.scribe2}}</div>{% endif %}
      {% endif %}

      {% if r.optional %}
        <b style="padding:0px;  padding-top:.75em; display:block;">Optional</b>
        {{r.optional | safe}}
      {% endif %}
    </td>
    <!--<td>{{r.assigned | safe}}</td>-->
    <td>{{r.due | safe}}</td>
  </tr>
{% endfor %}
</table>




##  Readings (superset)

#### <a name="general"/>Intro

* JCR Licklider [Man-Computer Symbiosis](http://worrydream.com/refs/Licklider%20-%20Man-Computer%20Symbiosis.pdf)
* Tamara Munzner [(Textbook) Visualization Analysis and Design](https://www-taylorfrancis-com.ezproxy.cul.columbia.edu/books/9780429088902)
* Jeffrey Heer [Agency plus automation: Designing artificial intelligence into interactive systems](https://www.pnas.org/content/pnas/116/6/1844.full.pdf)
* Kristi Morton et al. [Support the Data Enthusiast: Challenges for Next-generation Data-analysis Systems](http://www.vldb.org/pvldb/vol7/p453-morton.pdf)


#### <a name="vis"/>Visualization

<a name="grammars"/>
Grammars 

* Chris Stolte et al. [Polaris](http://graphics.stanford.edu/papers/polaris_extended/polaris.pdf)
  * More details of the VizQL algebra are in [Chapter 4 of Stolte's thesis](http://graphics.stanford.edu/papers/cstolte_thesis/thesis.pdf)
* Arvind Satyanarayan et al. [Vega-Lite: A Grammar of Interactive Graphics](http://idl.cs.washington.edu/papers/vega-lite)
* Hadley Wickham [A Layered Grammar of Graphics](http://vita.had.co.nz/papers/layered-grammar.pdf) Sections 1-3
  * [ggplot2 documentation](https://ggplot2.tidyverse.org/)
  * [ggplot2 book](https://ggplot2-book.org/)
* Arvind Satyanarayan et al. [Declarative Interaction Design for Data Visualization](http://idl.cs.washington.edu/papers/reactive-vega)

<a name="design"/>
Design and Recommendation

* Dominik Moritz et al. [Formalizing Visualization Design Knowledge as Constraints: Actionable and Extensible Models in Draco](https://idl.cs.washington.edu/files/2019-Draco-InfoVis.pdf)
* Kanit Wongsuphasawat et al. [Voyager: Exploratory analysis via faceted browsing of visualization recommendations](http://www.cs.tufts.edu/comp/250VIS/papers/2015-Voyager-InfoVis.pdf)
* Jock D. Mackinlay et al. [Show Me: Automatic Presentation for Visual Analysis](https://research.tableau.com/sites/default/files/200711-infovis-showme.pdf)
* Bahador Saket et al. [Beyond Heuristics: Learning Visualization Design](https://arxiv.org/pdf/1807.06641.pdf)
* Chenglong Wang et al. [Visualization By Example](https://arxiv.org/abs/1911.09668)
* Manasi Vartak et al. [SeeDB: efficient data-driven visualization recommendations to support visual analysis.](http://www.vldb.org/pvldb/vol8/p2182-vartak.pdf)


<a name="tasks"/>
Tasks

* Ben Shneiderman [The Eyes Have It](https://www.cs.umd.edu/~ben/papers/Shneiderman1996eyes.pdf)
* Michael Gleicher [Considerations for Visualizing Comparison](https://graphics.cs.wisc.edu/Papers/2018/Gle18/viscomp.pdf)
* Matthew Brehmer, Tamara Munzner [A Multi-Level Typology of Abstract Visualization Tasks](https://www.cs.ubc.ca/labs/imager/tr/2013/MultiLevelTaskTypology/brehmer_infovis13.pdf)

<a name="perception"/>
Perception

* Zhicheng Liu and Jeffrey Heer. [The Effects of Interactive Latency on Exploratory Visual Analysis](http://idl.cs.washington.edu/papers/latency)
* Jeff Heer et al.  [Crowdsourcing graphical perception: using mechanical turk to assess visualization design](http://vis.stanford.edu/files/2010-MTurk-CHI.pdf)
* Ryan et al. [At a glance: pixel approximate entropy as a measure of line chart complexity](http://www.cs.tufts.edu/~remco/publications/2018/InfoVis2018-Entropy.pdf) 
* Moritz et al. [Trust, but Verify: Optimistic Vis of Approx Queries in Exploring Big Data](https://www.domoritz.de/papers/2017-TrustButVerify-CHI.pdf)
* Kale et al. [Hypothetical Outcome Plots Help Untrained Observers Judge Trends in Ambiguous Data](http://users.eecs.northwestern.edu/~jhullman/hops_jobs_pfs.pdf)
* Jardine et al. [Perceptual Proxies of Visual Comparison](https://osf.io/ykmt7/download?format=pdf)
* Gordon Kindlmann et al.  [An Algebraic Process for Visualization Design](http://algebraicvis.net/assets/paper.pdf)



<a name="modalities"/>
#### Novel Modalities

* Arnab Nandi, Lilong Liang, Michael Mandel [Gestural Query Specification](https://scholar.google.com/scholar?q=gestural+query+specification)
* Codi Burley et al. [ARQuery: Hallucinating Analytics over Real-World Data using Augmented Reality](http://cidrdb.org/cidr2019/papers/p93-burley-cidr19.pdf)
* Emanuel Zgraggen et al. [(s/q)ueries: Visual Regular Expressions for Querying and Exploring Event Sequences](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/chi2015-squeries.pdf)
* Vraj Shah et al. [SpeakQL: Towards Speech-driven Multimodal Querying of Structured Data](https://adalabucsd.github.io/papers/TR_2019_SpeakQL_v2.pdf)
* Christopher Baik et al.  [Bridging the Semantic Gap with SQL Query Logs in Natural Language Interfaces to Databases](https://arxiv.org/pdf/1902.00031.pdf)


#### Interaction

Expressiveness

* Eirik Bakke et al. [Expressive Query Construction through Direct Manipulation of Nested Relational Results](https://people.csail.mit.edu/ebakke/research/sieuferd_sigmod2016.pdf)   <small>([demo video](https://vimeo.com/17372637://vimeo.com/173726371))</small>
* Fotis Psallidas et al. [Provenance for Interactive Visualizations](https://www.dropbox.com/s/fkp5hk1gp4lrg9h/smoke-hilda18.pdf?dl=0)
* Maeda Hanafi et al. [Texture: A Collaborative Framework for Structure Identification over Print Documents](https://hilda.io/2019/proceedings/HILDA2019_paper_8.pdf)

Interaction Design

* Jeff Heer et al.  [Interactive Dynamics for Visual Analysis](https://queue.acm.org/detail.cfm?id=2146416)
* Bahador Saket et al. [Investigating Direct Manipulation of Graphical Encodings as a Method for User Interaction](https://bahadorsaket.com/publication/infovis2019.pdf)
  * [Liger demo video](https://vimeo.com/327476247)
* Ali Sarvghad et al. [Embedded Merge & Split: Visual Adjustment of Data Grouping](https://bahadorsaket.com/publication/EMS.pdf)
* Miro Mannino and Azza Abouzied. [Expressive Time Series Querying with Hand-Drawn Scale-Free Sketches](http://doi.acm.org/10.1145/3173574.3173962)

#### Interfaces

Example-driven Interfaces for Extraction

* Sean Kandel et al. [Wrangler: Interactive Visual Specification of Data Transformation Scripts](http://doi.acm.org/10.1145/1978942.1979444)
* Sumit Gulwani. [Automating String Processing in Spreadsheets Using Input-output Examples](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/12/popl11-synthesis.pdf)
* Maeda F. Hanafi et al. [SEER: Auto-Generating Information Extraction Rules from User-Specified Examples](https://dl.acm.org/doi/pdf/10.1145/3025453.3025540?download=true)
* Mikael Mayer et al. [User Interaction Models for Disambiguation in Programming by Example](http://doi.acm.org/10.1145/2807442.2807459)
* Eric Horvitz. [Principles of Mixed-initiative User Interfaces](http://doi.acm.org/10.1145/302979.303030)
* Jeffrey Heer, et al. [Predictive Interaction for Data Transformation](https://idl.cs.washington.edu/files/2015-PredictiveInteraction-CIDR.pdf)

For Cleaning

* Sean Kandel et al. [Profiler: Integrated Statistical Analysis and Visualization for Data Quality Assessment](http://vis.stanford.edu/files/2012-Profiler-AVI.pdf)
* Sanjay Krishnan et al. [ActiveClean: Interactive Data Cleaning For Statistical Modeling](http://www.vldb.org/pvldb/vol9/p948-krishnan.pdf)
* Jie Song et al. [GeoFlux: Hands-Off  Data IntegrationLeveraging Join Key Knowledge](https://dl.acm.org/doi/pdf/10.1145/3183713.3193546)

<!--* Archana Ganapathi, Yanpei Chen [Data Quality: Experiences and Lessons from Operationalizing Big Data](http://yanpeichen.com/professional/IEEE_Big_Data_2016_Data_Quality.pdf)-->



#### <a name="ml"/> ML, Interpretation, and Explanation

Applications of

* Pablo Estevez et al. [150 successful machine learning models: 6 lessons learned at Booking.com](https://blog.acolyer.org/2019/10/07/150-successful-machine-learning-models/)
* Shan Carter, Michael Nielsen [Using Artificial Intelligence to Augment Human Intelligence](https://distill.pub/2017/aia/)

ML Interpretation/Explanation

* Chris Olah et al. [The Building Blocks of Interpretability](https://distill.pub/2018/building-blocks)
* Cynthia Rudin [Stop Explaining Black Box Machine Learning Models for High Stakes Decisions and Use Interpretable Models Instead](https://arxiv.org/pdf/1811.10154.pdf)

SQL Query Explanation

* Eugene Wu, Sam Maden [Scorpion: Explaining Away Outliers in Aggregate Queries](http://www.vldb.org/pvldb/vol6/p553-wu.pdf)
* Firas Abuzaid et al. [DIFF: A Relational Interface for Large-Scale Data Explanation](http://www.vldb.org/pvldb/vol12/p419-abuzaid.pdf)


#### Performance

Approximation 

* Dominik Moritz, et al. [Trust, but Verify: Optimistic Visualizations of Approximate Queries for Exploring Big Data](http://doi.acm.org/10.1145/3025453.3025456)
* Bolin Ding et al. [Sample + Seek: Approximating Aggregates with Distribution Precision Guarantee](http://doi.acm.org/10.1145/2882903.2915249)
* Alabi, Daniel and Eugene Wu. [PFunk-H: approximate query processing using perceptual models](http://sirrice.github.io/files/papers/pfunk-hilda16.pdf)
* Feifei Li et al. [Wander Join: Online Aggregation via Random Walks](https://www.cse.ust.hk/~yike/sigmod16.pdf)
* Edward Gan et al. [Moment-based Quantile Sketches for Efficient High Cardinality Aggregation Queries](http://www.vldb.org/pvldb/vol11/p1647-gan.pdf)



Data Structures

* Niranjan Kamat et al. [Distributed and interactive cube exploration](https://arnab.org/files/dice.nandi_.pdf)
* Zhicheng Liu et al. [imMens: real-time visual querying of big data](http://vis.stanford.edu/files/2013-imMens-EuroVis.pdf)
* Wenbo Tao et al. [Kyrix: Interactive Pan/Zoom Visualizations at Scale](http://hci.stanford.edu/~cagatay/projects/kyrix/Kyrix-EuroVis19.pdf)
* Fotis Psallidas et al. [Smoke: Fine-grained Lineage at Interactive Speed](https://arxiv.org/abs/1801.07237)
* Jugel, Uwe et al. [M4: A Visualization-Oriented Time Series Data Aggregation](http://www.vldb.org/pvldb/vol7/p797-jugel.pdf)

Effects of poor performance

* Kelly Mack et al. [Characterizing Scalability Issues in Spreadsheet Software Using Online Forums](https://arxiv.org/pdf/1801.03829.pdf)


#### Misc 

* Qianrui Zhang et al. [Precision Interfaces](https://arxiv.org/abs/1904.02344)
* Xiong Zhang and Philip J. Guo. [DS.Js: Turn Any Webpage into an Example-Centric Live Programming Environment for Learning Data Science](http://www.pgbovine.net/dsjs-paper.htm)
* Kuang Chen et al. [Shreddr: Pipelined Paper Digitization for Low-resource Organizations](http://doi.acm.org/10.1145/2160601.2160605)
* Kuang Chen, Harr Chen, et al. [Usher: Improving Data Quality with Dynamic Forms](http://dx.doi.org/10.1109/TKDE.2011.31)
* Yuze Lou et al. [Knowledge Graph Programming with a Human-in-the-Loop: Preliminary Results](https://hilda.io/2019/proceedings/HILDA2019_paper_9.pdf)
* Leo Meyerovich et al. [Empirical Analysis of Programming Language Adoption](https://lmeyerov.github.io/projects/socioplt/papers/oopsla2013.pdf)
* Christian Bors et al. [A Provenance Task Abstraction Framework](http://www.cs.umd.edu/~leilani/static/papers/bors2019provenance.pdf)
* Eric Ragan et al. [Characterizing Provenance in Visualization and Data Analysis: An Organizational Framework of Provenance Types and Purposes](https://www.cc.gatech.edu/~aendert3/resources/ragan-vast-2015.pdf)



## Acknowledgements 

Readings borrowed from

* [Azza Abouzied](http://azza.azurewebsites.net/): [Capstone course](https://github.com/huda-lab/huda-lab.github.io/blob/master/syllabi/Capstone-InteractiveSystems-SyllabusSpring2019.pdf)
* [Leilani Battle](http://www.cs.umd.edu/~leilani/): [CMSC828D](https://umd.instructure.com/courses/1265679/assignments/syllabus)
* [Agnes Chang](http://agneschang.net/): [COMS 4995 Intro to Data Vis](https://columbiaviz.github.io/2020s_w4995/)
* [Aditya P.](http://people.ischool.berkeley.edu/~adityagp/): [CS598](https://cs598.github.io/index.html#papers)


