---
layout: page
---

Presentations

* (topic?) Dremel/Visual discovery and model driven explantion
* (recs) Voyager and SeeDB.  Maybe data polygamy
* (summarization?) ConVis/Wikum

HW Questions

* What does performance even mean?
  * latency for the viz to update
  * ability for users to quickly express certain layouts/interactions
    * direct manipulation to shelves vs writing SQL
    * mention db approaches to this (queryviz.com, gesturedb, etc)
  * perceptual ability to decode visual information (immens color mapping)
* polaris: 
  * major: OLAP -- the algebraic layouts.  
  * minor: allowable marks, labels, etc
  * is that why aggrgates and transforms are tricky?
* immens
  * major: low dimensional linked bin-plots
* What is relationship with SQL?
  * polaris: direct mapping to SQL for the heavy lifting
    * we saw SQL not enough to do the partitioning (nestedSQL ok)
  * immens: charts and linkings all turn into SQL queries
  * hard to optimize unless you restrict the operations (indexes only good for certain operations. same for cubes, etc)
  * discuss second order?

# Lecture 3: Intro to Performance

## Polaris

Much of the paper is about graphical encodings and defining an interaction model. 
But look closely -- this is _the classic_ big data visualization architecture.

Context

* 2002: D3, web, didn't really exist
  * Intel releases the Celeron 1.3 GHz with a 100 MHz bus and 256 kB of level 2 cache.
* Data was still dominated by big companies (business, genome project, factories, marketing)
* Tools for building visualizations really didn't exist or were really clunky (form based)
  * Tioga2/datasplash was about stuffing a data viz into a database by manually building workflows 
  * focus on non-form ways to express queries
* 2000: snap-together visualization -- connected fkey relationships with brushing
* machines were catching up, so designers had to specify low level performance details such as rendering costs.
  which cores to use, what data to persist in cache/memory

        Rivet (their previous system) also provides mechanisms for allocating
        resources, such as drawing time and screen space, among metaphors.

Requirements and insights

* Multidimensional databases were becoming popular
* Render multiple dimensions, different types of views, translate direct manipulation into exploration queries
* Tables are great -- walkthrough excel
  * each cell visualizes text of an attribute
  * each cell could instead render a bar
  * each cell could render multiple bars
  * the bars could be computed from queries

Pat is a wizard at building languages

* How do they model a visualization?
  * Data organization/processing (their algebra)
  * Each "cell" in the table 
  * Visual encodings

Algebra

* Based on OLAP
  * dimensions vs measures
  * dimensions have hierarchical relationships
* Two types of attributes: ordinal (non-numerical but ordered), and quantitative (numerical)
  * ordinal: A = {coffee, tea, ..}
  * quantitative: P = { sale }
* Attributes can be combined along the X and  Y axes
* Set: of tuples
  * tuple = sequence of tag:value pairs 
  * tag: "attrval", "constant", "attrname"
  * e.g., coffee, "const", "producttype"
* Operators
  * Add (+): concat two sequences
    * Prefix of adds can't be quantitative
  * Cross (x): cartesian product
  * Nest (/): Tricky definition.
    * Cross product but ignore values that don't exist
    * For hierarchical relationships (Year/Month)

Table Cells

* Ordinal-Ordinal: render a table with a mark or value in each cell
* Ordinal-Quantitative: bar chart
* Quant-quant: map, scatter plot, etc

### Performance/Systems

Translate to SQL

* filters are just where clauses
* actually need nested relational algebra, hack it with a loop:
  * for each table cell, filter records for the cell, then run GROUP BY

Performance dominated by database performance

* "one major advancage of our approach (over grammar of graphics) is that it leverages exsiting db systems
   and thus was very easy to implement"
* CUBE
* C-store was a big win
* putting a C-store in the tableau client was a big win
* bought Hypr

## What did we learn?

Classic architecture

        client(does everything)
        database(does viz)

        client -- server -- database

        client(db) --- server --- database

        ??

How to make it faster?

* reduce number of components
  * build a single narrow system (for a domain, an analysis, a viz, etc)
* make db faster (will naturally happen)
* do less
  * sampling
* do things earlier
  * pre-compute
  * prefetch
* make individual interactions/components faster
  * network faster: M4
  * brushed linking and indexes (immens)
* spend $$
  * more powerful client
* wackier ideas?
  * tell the user what to do (excel is extreme example)


# imMens

Brushed linking of discretized datasets is common.  Make it _fast_

Assumptions?

* GPUs have lots of memory and are fast
* Simple interactions
* Simple types of rendering requirements
* Simple interactions

Setup

* focus on binned plots (why Section 4?)
  * provide context for data cubes and aggregations
* precomputation is common in viz -- think maps
  * make it work for interactive _data_ viz
* really make use of the GPU's parallel processing capabilities
  * for computation (first pass) and rendering (second pass)
* scale to the output resolution (a common theme)


Example Viz

        Axes       quantitative val
        ---------------------
        lat, lon --> count(*)
        month    --> count(*)
        day      --> count(*)
        hour     --> count(*)

Naive

        lat, lon, month, day, hour --> count(*)
        lat, lon: one group per pixel

Interaction needed:

* hover over lat, lon to filter by month/day/hour
* hover over month to filter by lat,lon/day/hour
* ...
* zoom levels
* Each dimenion indexed by (start, end, zoom)

Get away with smaller cubes (all combinations of two Axes)

* encode as PNG images (why?)
  * R/G/B can encode values in [0-2^31]
* pass 1: for each rollup output value, compute in parallel, write to off screen buffer
* pass 2: knows the extent of each mark in the viz.
  * for each pixel, read corresponding value, determine color.
* Performance questions?
  * where do the wins come from?

Today

* Davavore: columnar store data cubing using JS arrays
  * http://vis.stanford.edu/projects/datavore/
* Today, can do graphics stuff using asm.js
  * [afterburner](https://arxiv.org/abs/1605.04035)

            int32      [header ptrs] [attr1 (int)] [attr2 (int)] .............. [name ptrs (str)] ..............
            int8       .......................................................................... [name strings]
            float32    ..........................................[price (float)] ...............................
            arraybuf   ............................... .........................................................

  * asm code for counting prices above X

            function count_asm(val, length){
              "use asm";
              val=+(val);
              length=length|0;
              length=length<<2;
              id=0;
              while ((id|0) < (length|0)){
                if (+(extendedprice[id>>2]) < +(val))
                  cnt=(cnt+1)|0;
                  id=(id+4)|0;
                }
              return cnt|0;
            }

            +(val)  32-bit float
            val|0   32-bit int


* Cube decomposition shows the power at the extremes
* Network?  
* How easily could tile sizes blow up?

        400 x 600 map, render avg
        2d 20 x 20 heat map, render count
        1d 24-hour bar chart, render sum

        400 * 600 * 20 * 20 * 4 bytes * 2 ~= 750mb
        hmm

* When to use these techniques?
