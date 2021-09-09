---
layout: page_2021
---

# Readings

You are expected to write and submit a paper review of the readings before each class, and answer some questions about the readings.  The review should be akin to a conference paper review.  The purpose of the readings is to provide an illustrative example of the research area.  You are encouraged but not required to read the supplemental readings to better understand the materials.  

You can discuss questions and ask for clarifications with your colleagues and/or on piazza.  You are expected to formulate your own opinion of the reading(s) and write the review yourself.  See for a description of what we expect in paper reviews.  

We may select a random review to read and discuss in class.  This serves to highlight important characteristics of reading papers and writing good reviews.


#### Submission

Overview

* Reviews are due **10AM EST one day before lecture**.
* Late submissions are given a score of 0 without prior approval.  
* You may miss submissions for up to **4 lectures**.
* To submit, [**go to the class wiki**](https://github.com/columbiaviz/2021f-systemshdi/wiki) and click on the appropriate topic

#### Reading Tips

Ask the following questions while readings

* Context 
  * What are the actual hypotheses?
  * What was the unmet need or opportunity?  Does it make sense?
  * What were existing approaches and why do they work or not work?
  * What is the simplest example that highlights the problem that this approach works best for?
* Approach
  * When does the approach work?  Assess the underlying assumptions.
  * How well does the evaluation validate the core hypotheses/claims?
    * Do you believe their results?
    * Are the results presented well?


How to read papers

* [How to Read a Paper - S. Keshav](https://dl.acm.org/doi/pdf/10.1145/1273445.1273458)
* [How to Read a Research Compendium - Nüst et al.](https://arxiv.org/pdf/1806.09525.pdf)

How to review papers

* [Review AntiPatterns (written for FSE 14 PC)](https://homes.cs.washington.edu/~mernst/advice/review-antipatterns-devanbu.txt)
* [Ethics of Peer Review](https://ori.hhs.gov/sites/default/files/prethics.pdf)
* [How NOT to review a paper](https://sigmodrecord.org/publications/sigmodRecord/0812/p100.open.cormode.pdf)
* [Conference Reviewing Considered Harmful](https://homes.cs.washington.edu/~tom/support/confreview.pdf): A view on how reviewing works in practice.

#### Background

Background you should be comfortable with

* [Relational algebra](https://en.m.wikipedia.org/wiki/Relational_algebra) and [SQL](https://www.postgresql.org/docs/9.5/static/sql-select.html)
* [Cost-based optimization](http://web.stanford.edu/class/cs345d-01/rl/chaudhuri98.pdf)

Visualization Classics

* [Tukey, John W. Exploratory Data Analysis. 1979](https://scholar.google.com/scholar?hl=en&q=2.+Tukey%2C+John+W.+Exploratory+Data+Analysis.+1979)

Surveys

* [Making Database Systems Usable](https://scholar.google.com/scholar?q=Making+Database+Systems+Usable)
* [Overview of Data Exploration Techniques](http://stratos.seas.harvard.edu/files/stratos/files/exploration-tutorial.pdf)


# The Papers


#### <a name="general"/>Intro

Readings 

* Optional: Jeanette Wing [The Data Lifecycle](https://hdsr.mitpress.mit.edu/pub/577rq08d/release/3)
* Optional: JCR Licklider [Man-Computer Symbiosis](http://worrydream.com/refs/Licklider%20-%20Man-Computer%20Symbiosis.pdf)
* Optional: Tamara Munzner [(Textbook) Visualization Analysis and Design](https://www-taylorfrancis-com.ezproxy.cul.columbia.edu/books/9780429088902)
* Optional: Jeffrey Heer [Agency plus automation: Designing artificial intelligence into interactive systems](https://www.pnas.org/content/pnas/116/6/1844.full.pdf)
* Optional: Kristi Morton et al. [Support the Data Enthusiast: Challenges for Next-generation Data-analysis Systems](http://www.vldb.org/pvldb/vol7/p453-morton.pdf)


<a name="tasks"/>
#### Vis: Tasks

Readings

* Required: Matthew Brehmer, Tamara Munzner [A Multi-Level Typology of Abstract Visualization Tasks](https://www.cs.ubc.ca/labs/imager/tr/2013/MultiLevelTaskTypology/brehmer_infovis13.pdf)
  * Her talk [Problem-Driven Visualization Through Design Studies](https://www.cs.ubc.ca/~tmm/talks/chinavis20/vinci21.pdf) contains more examples that motivate the typology.
* Optional: Heer, Shneiderman [Interactive Dynamics for Visual Analysis](https://queue.acm.org/detail.cfm?id=2146416)
* Optional: Ben Shneiderman [The Eyes Have It](https://www.cs.umd.edu/~ben/papers/Shneiderman1996eyes.pdf)




<a name="grammars"/>
#### Vis: Languages

Readings

* Required: Chris Stolte et al. [Polaris](http://graphics.stanford.edu/papers/polaris_extended/polaris.pdf)
  * Focus on the layout algebra
* Required: VizQL algebra are in [Chapter 4 of Stolte's thesis](http://graphics.stanford.edu/papers/cstolte_thesis/thesis.pdf)
* Optional: Pu and Kay [Probabilistic Grammar of Graphics](https://osf.io/dy8qv/)
* Optional: Aidan Slingsby, Jason Dykes, Jo Wood [Configuring Hierarchical Layouts to Address Research Questions](https://openaccess.city.ac.uk/id/eprint/158/1/Configuring_Hierarchical_Layouts_to_Address_Research_Questions.pdf)
  * Website with [syntax documentation](https://www.gicentre.net/hive)
* Optional: Wickham and Hofmann [Product Plots](https://vita.had.co.nz/papers/prodplots.pdf)
* Optional: Arvind Satyanarayan et al. [Vega-Lite: A Grammar of Interactive Graphics](http://idl.cs.washington.edu/papers/vega-lite)
* Optional: Hadley Wickham [A Layered Grammar of Graphics](http://vita.had.co.nz/papers/layered-grammar.pdf) Sections 1-3. 
 [documentation](https://ggplot2.tidyverse.org/).
 [ggplot2 book](https://ggplot2-book.org/)

<!--
* Emanuel Zgraggen et al. [(s/q)ueries: Visual Regular Expressions for Querying and Exploring Event Sequences](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/chi2015-squeries.pdf)
-->

<a name="interactions"/>
#### Vis: Interaction Design

Readings

* Required: Dimara and Perin.  [What is Interaction for Data Visualization?](https://hal.archives-ouvertes.fr/hal-02197062/document)
* Required: Michel Beaudouin-Lafon.  [Instrumental Interaction](https://www.dropbox.com/s/bteajeub18durwe/michel%20-%20instrumental%20interaction.pdf?dl=0)
* Required: Heer and Shneiderman. [Interaction Dynamics for Visual Analytics](https://queue.acm.org/detail.cfm?id=2146416)
* Optional: Bahador Saket et al. [Investigating Direct Manipulation of Graphical Encodings as a Method for User Interaction](https://bahadorsaket.com/publication/infovis2019.pdf)
  * [Liger demo video](https://vimeo.com/327476247)
* Optional: Ali Sarvghad et al. [Embedded Merge & Split: Visual Adjustment of Data Grouping](https://bahadorsaket.com/publication/EMS.pdf)
* Optional: Miro Mannino and Azza Abouzied. [Expressive Time Series Querying with Hand-Drawn Scale-Free Sketches](http://doi.acm.org/10.1145/3173574.3173962)





<a name="perception"/>
#### Vis: Perception

Readings

* Required: Zhicheng Liu and Jeffrey Heer. [The Effects of Interactive Latency on Exploratory Visual Analysis](http://idl.cs.washington.edu/papers/latency)
* Optional: Jeff Heer et al.  [Crowdsourcing graphical perception: using mechanical turk to assess visualization design](http://vis.stanford.edu/files/2010-MTurk-CHI.pdf)
* Optional: Ryan et al. [At a glance: pixel approximate entropy as a measure of line chart complexity](http://www.cs.tufts.edu/~remco/publications/2018/InfoVis2018-Entropy.pdf) 
* Optional: Moritz et al. [Trust, but Verify: Optimistic Vis of Approx Queries in Exploring Big Data](https://www.domoritz.de/papers/2017-TrustButVerify-CHI.pdf)
* Optional: Jardine et al. [Perceptual Proxies of Visual Comparison](https://osf.io/ykmt7/download?format=pdf)
* Optional: Gordon Kindlmann et al.  [An Algebraic Process for Visualization Design](http://algebraicvis.net/assets/paper.pdf)

<a name="cognition"/>
#### Vis: Cognition

Readings

* Required: Kim, YS., Walls, L., Krafft, P., and Hullman, J. [A Bayesian Cognition Approach to Improve Data Visualization](https://mucollective.northwestern.edu/files/2019-BayesianVis-CHI.pdf)
* Optional: In Kwon Choi, Taylor Childers, Nirmal R., Swati Mishra, Kyle Harris, Khairi Reda.  [Concept-driven visual analytics: Hypothesis Based Reasoning](https://khreda.com/papers/chi19-concept-driven-vis.pdf)
* Optional: Kale et al. [Hypothetical Outcome Plots Help Untrained Observers Judge Trends in Ambiguous Data](http://users.eecs.northwestern.edu/~jhullman/hops_jobs_pfs.pdf)



<a name="design"/>
#### Vis: Design Recommendation

Readings

* Required: Jock D. Mackinlay et al. [Show Me: Automatic Presentation for Visual Analysis](https://research.tableau.com/sites/default/files/200711-infovis-showme.pdf)
* Optional: referenced in A2
  * Dominik Moritz et al. [Formalizing Visualization Design Knowledge as Constraints: Actionable and Extensible Models in Draco](https://idl.cs.washington.edu/files/2019-Draco-InfoVis.pdf)
  * Kanit Wongsuphasawat et al. [Voyager: Exploratory analysis via faceted browsing of visualization recommendations](http://www.cs.tufts.edu/comp/250VIS/papers/2015-Voyager-InfoVis.pdf)
  * Lee et al. [Lux: Always-on Vis Recommendations](https://arxiv.org/pdf/2105.00121.pdf)
* Optional: Bahador Saket et al. [Beyond Heuristics: Learning Visualization Design](https://arxiv.org/pdf/1807.06641.pdf)
* Optional: Chenglong Wang et al. [Visualization By Example](https://arxiv.org/abs/1911.09668)
* Optional: Manasi Vartak et al. [SeeDB: efficient data-driven visualization recommendations to support visual analysis.](http://www.vldb.org/pvldb/vol8/p2182-vartak.pdf)


<a name="multiverse"/>
#### Multiverse Analysis

Readings

* Jun et al. [Tea: Automated Statistical Analysis](http://tea-lang.org/index_files/tea_UIST2019.pdf)
  * [Watch the talk](https://www.youtube.com/watch?v=BpYP7U7y77s&ab_channel=ACMSIGCHI)
*  Liu et al. [Boba: Authoring and Visualizing Multiverse Analyses](https://arxiv.org/pdf/2007.05551.pdf)  
   (builds on [Paths Explored, Paths Omitted](https://dl.acm.org/doi/pdf/10.1145/3313831.3376533))
* Dragicevic et al. [Increasing the Transparency of Research Papers with Explorable Multiverse Analyses](https://dl.acm.org/doi/pdf/10.1145/3290605.3300295)
  * [See their interactive demo](https://explorablemultiverse.github.io/)
* Gelman and Loken [Garden of Forking Paths](http://www.stat.columbia.edu/~gelman/research/unpublished/forking.pdf)
* Sedlmair et al [Visual Parameter Space Analysis](http://eprints.cs.univie.ac.at/4162/2/Visual_Parameter_Space_Amalysis.pdf)

<a href="models"/>
#### Data Models

Readings

* Required: Mike Stonebraker, Joe Hellerstein [What Goes Around Comes Around](https://people.cs.umass.edu/~yanlei/courses/CS691LL-f06/papers/SH05.pdf)
* Fotis Psallidas, Eugene Wu [Provenance for Interactive Visualizations](https://www.dropbox.com/s/fkp5hk1gp4lrg9h/smoke-hilda18.pdf?dl=0)

<a name="dbvis"/>
#### Data Interfaces from a Data Perspective

Readings

* TBA
* Optional: Heer and Agrawala [Design considerations for collaborative visual analytics](https://cs598.github.io/papers/collab-vis.pdf)


#### <a name="perf"/>Performance and Engines

Readings

* Required: Leilani Battle and Carlos Scheidegger [A Structured Review of Data Management Technology for Interactive Visualization and Analysis](http://hdc.cs.arizona.edu/papers/infovis_2020_dbsurvey.pdf)
* Optional: [C-Store: A Column-oriented DBMS](https://w6113.github.io/files/papers/cstore-vldb05.pdf)

#### <a name="aqp"/>Performance: Approximation and Precomputation

Readings

* Required: Sameer Agarwal et al. [BlinkDB: Queries with Bounded Errors and Bounded Response Times on Very Large Data](https://sameeragarwal.github.io/blinkdb_eurosys13.pdf)
* Required: Zhicheng Liu et al. [imMens: real-time visual querying of big data](http://vis.stanford.edu/files/2013-imMens-EuroVis.pdf)
* Approximation
  * Optional: Dominik Moritz, et al. [Trust, but Verify: Optimistic Visualizations of Approximate Queries for Exploring Big Data](http://doi.acm.org/10.1145/3025453.3025456)
  * Optional: Bolin Ding et al. [Sample + Seek: Approximating Aggregates with Distribution Precision Guarantee](http://doi.acm.org/10.1145/2882903.2915249)
  * Optional: Alabi, Daniel and Eugene Wu. [PFunk-H: approximate query processing using perceptual models](http://sirrice.github.io/files/papers/pfunk-hilda16.pdf)
  * Optional: Feifei Li et al. [Wander Join: Online Aggregation via Random Walks](https://www.cse.ust.hk/~yike/sigmod16.pdf)
* Precomputation
  * Optional: Niranjan Kamat et al. [Distributed and interactive cube exploration](https://arnab.org/files/dice.nandi_.pdf)
  * Optional: Wenbo Tao et al. [Kyrix: Interactive Pan/Zoom Visualizations at Scale](http://hci.stanford.edu/~cagatay/projects/kyrix/Kyrix-EuroVis19.pdf)




<!--
#### <a name="precomp"/>Performance: Precomputation
-->

#### <a name="miscperf"/>Performance: Physical Design

Readings

* Required: Physical Visualization Design
* Optional: [Sanjay Agrawal, Nicolas Bruno, Surajit Chaudhuri, Vivek Narasayya](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/deb.pdf)

Optional Readings

* Lineage
  * Fotis Psallidas et al. [Smoke: Fine-grained Lineage at Interactive Speed](https://arxiv.org/abs/1801.07237)
* Communication
  * Jugel, Uwe et al. [M4: A Visualization-Oriented Time Series Data Aggregation](http://www.vldb.org/pvldb/vol7/p797-jugel.pdf)
  * Haneen Mohammed, Ziyun Wei, Ravi Netravali, Eugene Wu [Continuous Prefetch for Interactive Data Applications](https://arxiv.org/pdf/2007.07858.pdf)
* Multi-query Optimization
  * Georgios Giannikis et al. [Shared Workload Optimization](http://www.vldb.org/pvldb/vol7/p429-giannikis.pdf)
  * Marcin Zukowski et al. [Cooperative Scans: Dynamic Bandwidth Sharing in a DBMS](http://www.vldb.org/conf/2007/papers/research/p723-zukowski.pdf)
  * Roee Ebenstein, et al. [FluxQuery: An Execution Framework for Highly Interactive Query Workloads](https://dl.acm.org/citation.cfm?id=2882945)
* Compression
  * Richard Wesley et al.  [Leveraging Compression in the Tableau Data Engine](https://research.tableau.com/paper/leveraging-compression-tableau-data-engine)
* Effects of poor performance
  * Kelly Mack et al. [Characterizing Scalability Issues in Spreadsheet Software Using Online Forums](https://arxiv.org/pdf/1801.03829.pdf)
* Sampling
  * Edward Gan et al. [Moment-based Quantile Sketches for Efficient High Cardinality Aggregation Queries](http://www.vldb.org/pvldb/vol11/p1647-gan.pdf)




#### <a name="touch"/>Modalities: Touch and Gesture

* Required: Arnab Nandi, Lilong Liang, Michael Mandel [Gestural Query Specification](https://scholar.google.com/scholar?q=gestural+query+specification)
* Kenrick Kin, Björn Hartmann, Tony DeRose, Maneesh Agrawala [Proton: Multitouch Gestures as Regular Expressions](http://vis.berkeley.edu/papers/proton/)

#### <a name="voice"/>Modalities: Voice and Natural Language

* Required: Immanuel Trummer [Data Vocalization with CiceroDB](http://cidrdb.org/cidr2019/papers/p39-trummer-cidr19.pdf)
* Optional: Vraj Shah et al. [SpeakQL: Towards Speech-driven Multimodal Querying of Structured Data](https://adalabucsd.github.io/papers/TR_2019_SpeakQL_v2.pdf)
* Optional: Christopher Baik et al.  [Bridging the Semantic Gap with SQL Query Logs in Natural Language Interfaces to Databases](https://arxiv.org/pdf/1902.00031.pdf)
* Optional: Jimmy Lin [ICDE 21 Keynote: The Attack of the Muppets!](https://www.youtube.com/watch?v=8K1kCxz7Iro)


#### <a name="spreadsheet"/>Modalities: Spreadsheets

Readings

* Required: Eirik Bakke et al. [Expressive Query Construction through Direct Manipulation of Nested Relational Results](https://people.csail.mit.edu/ebakke/research/sieuferd_sigmod2016.pdf) 
* Required: install/register and use one of the following tools
  * [Dataspread](http://dataspread.github.io/)
  * [Sigma computing](https://www.sigmacomputing.com/free-trial/)
  * [Airtable](https://airtable.com/signup)
* Optional: Bendre et al. [Dataspread: Unifying Databases and Spreadsheets](https://people.eecs.berkeley.edu/~adityagp/papers/data-spread-demo.pdf)
* Optional: Lyn Bartram, Michael Correll, and Melanie Tory [Untidy Data: The Unreasonable Effectiveness of Tables](https://arxiv.org/pdf/2106.15005.pdf)

#### Modalities: Additional Modalities

Optional Reading

* Codi Burley et al. [ARQuery: Hallucinating Analytics over Real-World Data using Augmented Reality](http://cidrdb.org/cidr2019/papers/p93-burley-cidr19.pdf)
* Willett et al.  [Embedded Data Representations](https://hal.inria.fr/hal-01377901/file/embedded-data-representations.pdf)



#### <a name="clean"/>Tasks: Comparison

Readings

* Required: Wu et al. [VCA: View Composition Algebra](#)
* Optional: Michael Gleicher [Considerations for Visualizing Comparison](https://graphics.cs.wisc.edu/Papers/2018/Gle18/viscomp.pdf)




#### <a name="clean"/>Tasks: Data Extraction

Readings

* Required: Sean Kandel et al. [Wrangler: Interactive Visual Specification of Data Transformation Scripts](http://doi.acm.org/10.1145/1978942.1979444)
* Required: Maeda Hanafi et al. [Texture: A Collaborative Framework for Structure Identification over Print Documents](https://hilda.io/2019/proceedings/HILDA2019_paper_8.pdf)
* Optional: Sumit Gulwani. [Automating String Processing in Spreadsheets Using Input-output Examples](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/12/popl11-synthesis.pdf)
* Optional: Maeda F. Hanafi et al. [SEER: Auto-Generating Information Extraction Rules from User-Specified Examples](https://dl.acm.org/doi/pdf/10.1145/3025453.3025540?download=true)
* Optional: Mikael Mayer et al. [User Interaction Models for Disambiguation in Programming by Example](http://doi.acm.org/10.1145/2807442.2807459)
* Optional: Eric Horvitz. [Principles of Mixed-initiative User Interfaces](http://doi.acm.org/10.1145/302979.303030)
* Optional: Jeffrey Heer, et al. [Predictive Interaction for Data Transformation](https://idl.cs.washington.edu/files/2015-PredictiveInteraction-CIDR.pdf)


#### <a name="clean"/>Tasks: Data Cleaning

Readings

* Optional: Sean Kandel et al. [Profiler: Integrated Statistical Analysis and Visualization for Data Quality Assessment](http://vis.stanford.edu/files/2012-Profiler-AVI.pdf)
* Optional: Jie Song et al. [GeoFlux: Hands-Off  Data IntegrationLeveraging Join Key Knowledge](https://dl.acm.org/doi/pdf/10.1145/3183713.3193546)
* Optional: Sanjay Krishnan et al. [ActiveClean: Interactive Data Cleaning For Statistical Modeling](http://www.vldb.org/pvldb/vol9/p948-krishnan.pdf)



<!--* Archana Ganapathi, Yanpei Chen [Data Quality: Experiences and Lessons from Operationalizing Big Data](http://yanpeichen.com/professional/IEEE_Big_Data_2016_Data_Quality.pdf)-->


#### <a name="automation"/>Tasks: Automation

Readings

* Pablo Estevez et al. [150 successful machine learning models: 6 lessons learned at Booking.com](https://blog.acolyer.org/2019/10/07/150-successful-machine-learning-models/)
* Shan Carter, Michael Nielsen [Using Artificial Intelligence to Augment Human Intelligence](https://distill.pub/2017/aia/)



#### <a name="debugml"/> Tasks: Debugging and Interpretable ML

Readings

* Chris Olah et al. [The Building Blocks of Interpretability](https://distill.pub/2018/building-blocks)
* Cynthia Rudin [Stop Explaining Black Box Machine Learning Models for High Stakes Decisions and Use Interpretable Models Instead](https://arxiv.org/pdf/1811.10154.pdf)

#### <a name="debugquery"/>Tasks: Debugging Analytics

Readings

* Required: Eugene Wu, Sam Madden [Scorpion: Explaining Away Outliers in Aggregate Queries](http://www.vldb.org/pvldb/vol6/p553-wu.pdf)
* Required: Tableau [Explain Data demo video](https://www.youtube.com/watch?v=0z3wQCXY8OE&feature=youtu.be&t=3224)
* Optional: Firas Abuzaid et al. [DIFF: A Relational Interface for Large-Scale Data Explanation](http://www.vldb.org/pvldb/vol12/p419-abuzaid.pdf)
* Optional: Wu et al. [Complaint-driven Training Data Debugging for Query 2.0](https://arxiv.org/pdf/2004.05722.pdf)



#### Misc Papers

* Qianrui Zhang et al. [Precision Interfaces](https://arxiv.org/abs/1904.02344)
* Xiong Zhang and Philip J. Guo. [DS.Js: Turn Any Webpage into an Example-Centric Live Programming Environment for Learning Data Science](http://www.pgbovine.net/dsjs-paper.htm)
* Kuang Chen et al. [Shreddr: Pipelined Paper Digitization for Low-resource Organizations](http://doi.acm.org/10.1145/2160601.2160605)
* Kuang Chen, Harr Chen, et al. [Usher: Improving Data Quality with Dynamic Forms](http://dx.doi.org/10.1109/TKDE.2011.31)
* Yuze Lou et al. [Knowledge Graph Programming with a Human-in-the-Loop: Preliminary Results](https://hilda.io/2019/proceedings/HILDA2019_paper_9.pdf)
* Leo Meyerovich et al. [Empirical Analysis of Programming Language Adoption](https://lmeyerov.github.io/projects/socioplt/papers/oopsla2013.pdf)
* Christian Bors et al. [A Provenance Task Abstraction Framework](http://www.cs.umd.edu/~leilani/static/papers/bors2019provenance.pdf)
* Eric Ragan et al. [Characterizing Provenance in Visualization and Data Analysis: An Organizational Framework of Provenance Types and Purposes](https://www.cc.gatech.edu/~aendert3/resources/ragan-vast-2015.pdf)






<!--
# Topics


Related topics

* Intelligent agents and conversational agents
* sensemaking

#### Specifying Visualizations and Exploration

Declarative Visualization Languages

* [A layered grammar of graphics](http://vita.had.co.nz/papers/layered-grammar.html)
* [D³ Data-Driven Documents](https://scholar.google.com/scholar?q=D%C2%B3+Data-Driven+Documents)
* [Vega-Lite: A Grammar of Interactive Graphics](https://idl.cs.washington.edu/files/2017-VegaLite-InfoVis.pdf)
* [Combining Design and Performance in aData Visualization Management System](/files/papers/dvmscidr.pdf)
* Assignment
  * Play with [SandDance](https://sanddance.azurewebsites.net/BeachPartyApp/BeachPartyApp.html)

Interaction Modalities

* Touch
  * [Gestural Query Specification](https://scholar.google.com/scholar?q=gestural+query+specification)
* NLP
  * [Constructing an Interactive Natural Language Interface for Relational Databases](/files/papers/nlpdb.pdf)
  * [Analyza: Exploring Data with Conversation](https://static.googleusercontent.com/media/research.google.com/fr//pubs/archive/45791.pdf)
* Spreadsheets
  * [Expressive Query Construction through Direct Manipulation of Nested Relational Results](https://scholar.google.com/scholar?q=Expressive+Query+Construction+through+Direct+Manipulation+of+Nested+Relational+Results)
* Other
  * [Visualization-by-Sketching: An Artist’s Interface for Creating Multivariate Time-Varying Data Visualizations](http://www.cs.tufts.edu/comp/250VIS/papers/Visualization-by-Sketching.pdf)
  * [(s/q)ueries: Visual Regular Expressions for Querying and Exploring Event Sequences](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/chi2015-squeries.pdf)
  * Characterizing provenance in visualization and data analysis: an organizational framework of provenance types and purposes.

#### Augmenting User Exploration

Recommendation

* [Voyager: Exploratory analysis via faceted browsing of visualization recommendations](http://www.cs.tufts.edu/comp/250VIS/papers/2015-Voyager-InfoVis.pdf)
* [Towards A General-Purpose Query Language for Visualization Recommendation](https://idl.cs.washington.edu/files/2016-CompassQL-HILDA.pdf)
* [Effortless Data Exploration with zenvisage: An Expressive and Interactive Visual Analytics System](http://web.engr.illinois.edu/~adityagp/zenvisage.pdf)
* [SeeDB: efficient data-driven visualization recommendations to support visual analysis.](/files/papers/seedb.pdf)
* [Data Polygamy: The Many-Many Relationships among Urban Spatio-Temporal Data Sets](https://arxiv.org/pdf/1610.06978.pdf)
* Optional: Characterizing provenance in visualization and data analysis: an organizational framework of provenance types and purposes.
* Optional: Adaptive recommendation-based modeling support for data analysis workflows.

Autocomplete and refinement

* [Snipsuggest: Context-aware autocompletion for sql]()
* Query By Output
* DataPlay: Interactive Tweaking and Example-driven Correction of Graphical Database Queries
* Machine learning for online query relaxation

Explanation

* [Scorpion: Explaining away outliers in aggregate queries](http://sirrice.github.io/files/papers/scorpion-vldb13.pdf)
* [QFix: Diagnosing errors through query histories](/files/papers/qfix.pdf)
* [Visual discovery and model-driven explanation of time series patterns](https://www.cl.cam.ac.uk/~as2006/files/sarkar_2016_gatherminer.pdf)
* [Interpretable and Informative Explanations of Outcomes](http://www.vldb.org/pvldb/vol8/p61-elgebaly.pdf)
* [The Lumiere Pro ject: Bayesian User Modeling for Inferring the Goals and Needs of Software Users](/files/papers/lum.pdf)

#### Garbage in Garbage out

Data Cleaning

* Wrangler: interactive visual specification of data transformation scripts
* Profiler: Integrated Statistical Analysis and Visualization for Data Quality Assessment
* BoostClean: Automated Error Detection and Repair forMachine Learning
* [Data Quality: Experiences and Lessons from Operationalizing Big Data](http://yanpeichen.com/professional/IEEE_Big_Data_2016_Data_Quality.pdf)

#### Scaling Visual Exploration Systems

End-to-end fast data visualization systems

* [Polaris: A system for query, analysis, and visualization of multidimensional relational databases](/files/papers/polaris.pdf)
* [imMens: real-time visual querying of big data](/files/papers/immens.pdf)
* [Superconductor: a language for big data visualization.](/files/papers/superconductor.pdf)
* [Profiler: Integrated Statistical Analysis and Visualization for Data Quality Assessment]()
* [Combining Design and Performance in aData Visualization Management System](/files/papers/dvmscidr.pdf)

Data Processing Systems

* [MacroBase: Analytic Monitoring for the Internet of Things](/files/papers/macrobase.pdf)
* [Dremel: Interactive Analysis Of Web-Scale Datasets](/files/papers/dremel.pdf)
* [Spark SQL: Relational Data Processing in Spark](https://amplab.cs.berkeley.edu/wp-content/uploads/2015/03/SparkSQLSigmod2015.pdf)
* [BlinkDB: Queries with Bounded Errors and Bounded Response Times on Very Large Data](/files/papers/blinkdb.pdf)
* [Data cube: A relational aggregation operator generalizing group-by, cross-tab, and sub-totals.](/files/papers/olap.pdf)

Prefetching

* [Dynamic prefetching of data tiles for interactive visualization.](/files/papers/forecache.pdf)
* [Query Steering for Interactive Data Exploration](/files/papers/steering.pdf)

Sampling

* [PFunk-H: Approximate Query Processing using Perceptual Models](/files/papers/pfunk.pdf)
* [Wander Join: Online Aggregation via Random Walks](/files/papers/wanderjoin.pdf)
* [Sample + Seek: Approximating Aggregates with Distribution Precision Guarantee](/files/papers/sigmod16sampleseek.pdf)
* [Rapid Sampling for Visualizations with Ordering Guarantees](/files/papers/rapidsampling.pdf)


Network

* [M4: A Visualization-Oriented Time Series Data Aggregation](/files/papers/m4.pdf)


Some interactions with AI papers

1.     Shortliffe EH, Axline SG, Buchanan BG, Merigan TC, Cohen SN. An Artificial Intelligence program to advise physicians regarding antimicrobial therapy. Computers and Biomedical Research. 1973 Dec 1;6(6):544–60.
2.     Shu-Hsien Liao. Expert system methodologies and applications—a decade review from 1995 to 2004. Expert Systems with Applications. 2005 Jan 1;28(1):93–103.
3.     Sørmo F, Cassens J, Aamodt A. Explanation in Case-Based Reasoning–Perspectives and Goals. Artif Intell Rev. 2005 Oct 1;24(2):109–43.
4.     Shneiderman B. The eyes have it: a task by data type taxonomy for information visualizations. In: , IEEE Symposium on Visual Languages, 1996 Proceedings. 1996. p. 336–43.
5.     Plaisant C, Milash B, Rose A, Widoff S, Shneiderman B. LifeLines: visualizing personal histories. In New York, NY, USA: ACM; 1996 [cited 2011 Nov 16]. p. 221–227. (CHI ’96). Available from: http://doi.acm.org/10.1145/238386.238493
6.     Heer J, Shneiderman B. Interactive Dynamics for Visual Analysis. Commun ACM. 2012 Apr;55(4):45–54.
7.     Goren-Bar D, Shahar Y, Galperin-Aizenberg M, Boaz D, Tahan G. KNAVE II: The Definition and Implementation of an Intelligent Tool for Visualization and Exploration of Time-oriented Clinical Data. In: Proceedings of the Working Conference on Advanced Visual Interfaces [Internet]. New York, NY, USA: ACM; 2004 [cited 2019 Oct 7]. p. 171–174. (AVI ’04). Available from: http://doi.acm.org/10.1145/989863.989889
8.     Shneiderman B, Maes P. Direct Manipulation vs. Interface Agents. interactions. 1997 Nov;4(6):42–61.
9.     Weick KE, Sutcliffe KM, Obstfeld D. Organizing and the Process of Sensemaking. ORGANIZATION SCIENCE. 2005 Jul 1;16(4):409–21.
10.     Billman D, Bier EA. Medical sensemaking with entity workspace. In: Proceedings of the SIGCHI conference on Human factors in computing systems [Internet]. New York, NY, USA: ACM; 2007 [cited 2012 Oct 9]. p. 229–232. (CHI ’07). Available from: http://doi.acm.org/10.1145/1240624.1240662
11.     Russell DM, Stefik MJ, Pirolli P, Card SK. The cost structure of sensemaking. In: Proceedings of the INTERACT ’93 and CHI ’93 conference on Human factors in computing systems [Internet]. New York, NY, USA: ACM; 1993 [cited 2012 Oct 9]. p. 269–276. (CHI ’93). Available from: http://doi.acm.org/10.1145/169059.169209
12.     Pirolli P, Card SK. Sensemaking processes of intelligence analysts and possible leverage points as identified though cognitive task analysis. In: Proceedings of the 2005 International Conference Intelligence Analysis. 2005. p. 6–12.
13.     Manojlovich M. Nurse/physician communication through a sensemaking lens: shifting the paradigm to improve patient safety. Med Care. 2010 Nov;48(11):941–6.
14.     Weick KE. The Collapse of Sensemaking in Organizations: The Mann Gulch Disaster. Administrative Science Quarterly. 1993 Dec;38(4):628–52.
15.     Sittig DF, Wright A, Osheroff JA, Middleton B, Teich JM, Ash JS, et al. Grand challenges in clinical decision support. J Biomed Inform. 2008 Apr;41(2):387–92.
16.     Middleton B, Sittig DF, Wright A. Clinical Decision Support: a 25 Year Retrospective and a 25 Year Vision. Yearb Med Inform. 2016 May 20;(Suppl 1):S103–16.
17.     Richardson JE, Ash JS, Sittig DF, Bunce A, Carpenter J, Dykstra RH, et al. Multiple perspectives on the meaning of clinical decision support. AMIA Annu Symp Proc. 2010 Nov 13;2010:1427–31.
18.     Yu HW, Hussain M, Afzal M, Ali T, Choi JY, Han H-S, et al. Use of mind maps and iterative decision trees to develop a guideline-based clinical decision support system for routine surgical practice: case study in thyroid nodules. J Am Med Inform Assoc. 2019 Jun 1;26(6):524–36.
19.     Shelov E, Muthu N, Wolfe H, Traynor D, Craig N, Bonafide C, et al. Design and Implementation of a Pediatric ICU Acuity Scoring Tool as Clinical Decision Support. Appl Clin Inform. 2018;9(3):576–87.
20.     Murray T. Authoring Intelligent Tutoring Systems: An analysis of the state of the art. 1999 [cited 2019 Jun 24]; Available from: https://telearn.archives-ouvertes.fr/hal-00197339
21.     Crowley RS, Tseytlin E, Jukic D. ReportTutor - an intelligent tutoring system that uses a natural language interface. AMIA Annu Symp Proc. 2005;171–5.
22.     Graesser AC, Conley MW, Olney A. Intelligent tutoring systems. In: In MG Helander, TK Landauer, & PV Prabhu (Eds), Handbook of human-computer interaction. 2012. p. 849–74.
23.     Jennings NR, Sycara K, Wooldridge M. A Roadmap of Agent Research and Development. Autonomous Agents and Multi-Agent Systems. 1998 Jan;1(1):7–38.
24.     Bickmore T, Gruber A, Picard R. Establishing the computer–patient working alliance in automated health behavior change interventions. Patient Education and Counseling. 2005 Oct 1;59(1):21–30.
25.     Montenegro JLZ, da Costa CA, da Rosa Righi R. Survey of conversational agents in health. Expert Systems with Applications. 2019 Sep 1;129:56–67.
26.     Bott N, Wexler S, Drury L, Pollak C, Wang V, Scher K, et al. A Protocol-Driven, Bedside Digital Conversational Agent to Support Nurse Teams and Mitigate Risks of Hospitalization in Older Adults: Case Control Pre-Post Study. J Med Internet Res. 2019 Oct 17;21(10):e13440.
27.     Iqbal S, Altaf W, Aslam M, Mahmood W, Khan MUG. Application of intelligent agents in health-care: review. Artif Intell Rev. 2016 Jun 1;46(1):83–112.
28.     Allen J, Ferguson G, Blaylock N, Byron D, Chambers N, Dzikovska M, et al. Chester: towards a personal medication advisor. J Biomed Inform. 2006 Oct;39(5):500–13.
29.     Laranjo L, Dunn AG, Tong HL, Kocaballi AB, Chen J, Bashir R, et al. Conversational agents in healthcare: a systematic review. J Am Med Inform Assoc. 2018 01;25(9):1248–58.
30.     Ricci F, Rokach L, Shapira B. Recommender Systems: Introduction and Challenges. In: Ricci F, Rokach L, Shapira B, editors. Recommender Systems Handbook [Internet]. Boston, MA: Springer US; 2015 [cited 2019 Nov 18]. p. 1–34. Available from: https://doi.org/10.1007/978-1-4899-7637-6_1
31.     Park DH, Kim HK, Choi IY, Kim JK. A literature review and classification of recommender systems research. Expert Systems with Applications. 2012 Sep 1;39(11):10059–72.
32.     Gomez-Uribe CA, Hunt N. The Netflix Recommender System: Algorithms, Business Value, and Innovation. ACM Trans Manage Inf Syst. 2015 Dec 28;6(4):1–19.
33.     Du F, Plaisant C, Spring N, Crowley K, Shneiderman B. EventAction: A Visual Analytics Approach to Explainable Recommendation for Event Sequences. ACM Trans Interact Intell Syst. 2019 Aug;9(4):21:1–21:31.
34.     Portugal I, Alencar P, Cowan D. The use of machine learning algorithms in recommender systems: A systematic review. Expert Systems with Applications. 2018 May 1;97:205–27.
35.     Hollis V, Konrad A, Springer A, Antoun M, Antoun C, Martin R, et al. What Does All This Data Mean for My Future Mood? Actionable Analytics and Targeted Reflection for Emotional Well-Being. Hum-Comput Interact. 2017 Nov;32(5–6):208–267.
36.     Kipfer P, Westermann R. Realistic and Interactive Simulation of Rivers. In: Proceedings of Graphics Interface 2006 [Internet]. Toronto, Ont., Canada, Canada: Canadian Information Processing Society; 2006 [cited 2019 Jun 24]. p. 41–48. (GI ’06). Available from: http://dl.acm.org/citation.cfm?id=1143079.1143087

-->



<!--
* Visualization-aware sampling for very large datasets
* Visage: A user interface environment for exploring information.
* [Online Dynamic Reordering for Interactive Data Processing](/files/paper/juggle.pdf)
* Dynamic client-server optimization for scalable interactive visualization on the web.
* Queriosity: Automated Data Exploration, IEEE 2015
* An Analytic Data Engine for Visualization in Tableau, SIGMOD, 2011
* Multiscale Visualization Using Data Cubes, 2002
* G-OLA: Generalized On-Line Aggregation for Interactive Analysis on Big Data, SIGMOD, 2015
-->


Neat applications

* https://www.remix.com/
