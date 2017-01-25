---
layout: page
---

# Lecture 2: Specification

Assignment

* What were the tradeoffs between SQL, Pyth,n Tableau?
  * expressiveness?  
  * ease of use (what does that mean?)?  
  * applicability to task?  (what task?)

High level thoughts

* Abstraction
  * How is a viz modeled?
  * How is interaction modeled?
* Similar to linq/spark/dataframe dataset abstraction
* Changes
  * Codd: if Delta(app) << Delta(Env), shield apps from changes via data independence
    * Delta(Env): optimizations, data sources, formats, schema changes, hardware, ...
  * Viz: Delta(web tech) >> Delta(frameworks)
    * D3 says: Web tech already exposes reasonable abstractions.
* When does generalization and wide expressiveness important? When is optimization and performance?

What is Tableau's model of a visualization?

* what can you manipulate, what is happening under the covers?

# D3

* Tied to the browser, betting on web standards. not a bad bed fellow
* Many arguments are of the pragmatic nature

"Rather than empowering direct manipulation of the existing model (DOM), 
such toolkits supplant it with custom scene graph abstractions"

Two arguments

* Accessibility
  * Custom representation different than web standards means more to learn

          // width, height, bottom are primitives of protovis, not any web standard
          // (schemas matter)
          vis.add(pv.Bar)
            .data([1, 1.2, 1.7, 1.5, .7, .3])
            .width(20)
            .height(function(d) d * 80)
            .bottom(0)
            .left(function() this.index * 25);

  * (why? look for an answer) Sys with intermediate scene graph abstractions and 
    delayed property eval can be difficult to debug
* Expressiveness
  * Implementation supported by underlying system (in this case browser) 

Objectives

* Compatibility: web ecosystem has tools.  adopt them rather than reimplement them
* Debugging: tools already exist for browser.  
  Toolkits have crazy internal representations impossible to understand/debug
* Performance: hard to make "high level abstractions (languages)" fast 
  * do you believe this?
  * similar to argument for writing assembly
* Begs the question: why have frameworks? what are they good for?


Why not use...

* JQuery
  * to do anything, need to know _what_ you are doing to and give it a name
  * CSS selector is universal
  * but can't write.  diagram: SVG element + rows = bars
    * SVG exists, rows exist, need to create bars dynamically
    * What if rows change, what should the bars do?
* Graphics libraries
  * Want flexibility to make crazy vizes
  * Processing's Ellipse != Raphael Circle != Prefuse Dot != SVG Circle
    * Browser will ultimately render as a circle (unless CANVAS), so why bother with the others?
    * Circles are fine, but what about more complex shapes?  libraries.
  * Typically architected with: model, language, engine.
    * D3: DOM, JS, JS engine
    * DB: Relational, SQL, RDBMS

Walk through why data join makes sense

* go back to "create bars dynamically" example
  * if using loops, what would you need to do anyways if the data changes
* really: Data left outer join DOM
* Why bind data to DOM?
  * in JS: data may go out of scope

How are interactions specified?

* Browesr events

Pie chart example

        .selectAll("path")
          .data(d3.layout.pie())                    // what is this?
        .enter().append("svg:path")
          .attr("transform", ...)
          .attr("d", d3.svg.arc().outerRadius(70))  // what is this?

* benefit: only need to learn `pie()` and `arc()` if need it

Execution

* just JS code
* What's lost from immediate evaluation?
  * Why does spark dataframe lazily execute?
  * What's the issue in the browser environment?

Performance

* thoughts?  is it good?  is it bad?  how do you evaluate it?
* added indexes to the library since the paper.  Why?
          


# Vega-lite

High level

* Progression: single view plot, multi-view plot, interaction
  * How are each modeled?
  * Where is the magic/internal logic?  Is it reasonable?
* Why a vega-lite?  Contrast their argument with D3's.  Are they both right?

Intro arguments

* Two types of visualization use cases: custom explanatory viz and exploratory viz
  * The latter benefit from a simple language (this is the metric!)
* Contributions
  * algebra to compose multi-view plots (no interaction)
  * interaction model and support


Model of a viz

* ggplot says:
  * data, mappings, facets, scales, coord, legend
* vega-lite says
  * data attrs, visual attrs, mappings, data transforms, scales

        data --> xform --> map to mark attributes

* d3 says
  * data, dom elements, attribute functions
* magic
  * axes drawn automatically

Multi-view

* slightly more control than ggplot2 wrt transformations/functions/layers
* Unit: single cartesian plot

        unit = (data, transforms, mark-type, encodings)
        transforms run before plotting

* Encoding is

        encoding = (channel, field, datatype, val, functions, scale, guide)
        channel: x, y, color, shape, size, text, 
                 order (for stacking/layering order), 
                 path (for  sequences of points in a line)
        functions is weird: bin, aggregate, count

        encoding: (x, 'month', 'int', 'linear scale')
                  (y, 'sal', 'int', 'sum()', 'linear scale')
        
* Layers draw on top of each other.  How to set the axes?

        layer([unit1,...], resolve)
        resolve = (channel, scale/guide, resolution)
                  (x, 'scale', independent) // add a new scale
                  (y, 'scale', union)       // share the same scale
                  (y, 'guide', union)
        resolution: independent or union

* others
  
        // concatenation for layout
        hconcat/vconcat([view1,...], resolve)

        // facet: partition dataset, show small multiples
        resolve for axes

        // repeat: shorthand for concat
        // reference "column" in rest of spec
        repeat: { column: {'col1', 'col2', ... } }

Interaction

* What is it?
  * select "things" (how to select, what are things)
  * how can they be used?
    * changed
    * shown directly
    * replace things




* selections backed by values or predicates

        type: point    -- copy the selected record explicitly
        type: list     -- predicate over the dataset using (IN) operator
        type: interval -- range predicate over dataset

        select: 
          id: 
            type: "point"
        ...
        color: 
          -- use the value in record.Origin if in the selection as defined by id
          { if: id, field: Origin, Type: N } 
          -- default gray
          { value: 'grey' }                  

* `toggle` config means interacting with a mark toggles 
   its value instead of explicitly selecting ONLY that value

        -- clicking (default event) toggles selection for that mark and adds to list
        id: { type: list, toggle: true }               
        id: { type: list, on: click, toggle: true }   

        -- unclear its semantics
        id: { type: point, toggle:true }               

        -- select via hovering over
        id: { type: list, on: mouseover, toggle: true} 

* "Transforms" can apply on top of predicate results to further transform selected data

        project(fields, channels) -- database projection
        toggle(event)             -- modifies content of a list type
        translate(events, by)     -- offset backed recs via by func (details unclear)
        zoom(event, factor):      -- event (e.g., mouse wheel) or factor func
        nearest()                 -- voronoi decomposition and find nearest mark

* Selection Ambiguities
  * multiple subplots, with selections defined in each subplot individually

        repeat
          row: displacement, mpg    -- rows in splom
          col: horsepower, mpg      -- columns in splom
        spec: ...
          select:
            region:                 -- specific to a single subplot
              type: interval,
              ...
              on: [mousedown[shift], mouseup] > mousemove
              resolve: single

        resolve: single      -- only one subplot can be selected at any time, rest cleared
        resolve: indep       -- sels can happen in multiple subplots, but independent
        resolve: union       -- sels across subplots are unioned (OR operator)
        resolve: intersect   -- sels across subplots intersected (AND)
        (pretty convenient)

Comment on "Evaluation"

* Taxonomy of interaction methods, show examples for each
  1. select
  1. explore (change data)
  1. connect (brushing)
  1. abstract/elaborate (level of detail)
  1. reconfigure (normalize data)
  1. filter
  1. encode

Confusing points

* Specification Conflicts Manually handled

        select: {
          ...
          on: [mousedown[event.shiftKey], mouseup] > mousemove
        grid: 
          type: interval, ...
          translate: [mousedown[!event.shiftKey], mouseup] > mousemove

        -- shiftKey stmts carefully designed to avoid ambiguity with non-shiftkey facts
        -- done by partitioning the input space
        

* Focus is on selections   
  * is pointing to data the hard part?  
  * What about stuff you want to do with the selections?

        


### Example

Figure 2a: line chart with aggregation

        data: ...
        mark: line,
        encoding:
          x:
            field: "date
            type: "temporal"
            timeUnit: month  // what's this?
          y:
            field: temp_max
            type: quantitative
            aggregate: mean
          color:
            field: loc
            type: nominal

* Why the complexity?  CSV has no schema.  Thus, spec needs to
  * define data structure
  * define math transfors
  * define mappings to viz
  * define groupings

DeVIL

        T1 = select getmonth(date) as x, avg(temp_max) as y
             from weather
             group by getmonth(date)

        T2 = select loc as color, line(x, y)
             from T1
             group by loc  // group by syntax is stupid
             

# Example

D3:

        xs = scales.linear().domain(...).range(...)
        ys = scales.linear().domain(...).range(...)
        circles = svg.selectAll("circle")
        circles.data(rows)
          .enter().append("circle")
            .attr("cx", xs)
            .attr("cy", ys)
        circles
          .on("mousedown", ...)
          .on("mousemove", ...)
          .on("mouseup", ...)

Vega-lite

* what's a transform, what's allowed?

        data:
        mark: circrle
        encoding
          cx: 
            field: 
          cy:
            field:
          color: [
            { if region, use Origin:nominal field }
            { else grey }
          ]

        select:
          region: // the name
            on: [down, up] > move
            target: 
              type: interval
              name: region


