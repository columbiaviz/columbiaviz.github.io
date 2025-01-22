

# Polaris

* Confusion between marks and chart types
* Comparison with Visual Insights:
  * tied to cubes (and its limitations)
  * manual layout vs a layout algebra
  * VI focuses on 3D navigation and visualization
* What makes spotfire/xgobi etc, whose views are augmented with interaction techniques, limiting?
  * the interaction are prescriptive, and cannot be changed/composed.  
  * polaris basically gives handles to core rel alg transforms
* What does user-facing flexibility and succinctness mean?
  * How to achieve the example views without vizql?


### Background: Algebra

What makes an algebra?  Set + operations over the set that satisfy properties e.g., commutivity, etc.

* p-entry: an atom.  (tag:value) pair where
  * tag may be "field", "constant", <name of field>
  * value is a base value for first two tags, or value in the fields domain for latter
* p-tuple: finite sequence of p-entries.  
  * A p-tuple defines a single pane axis values.
  * Sequence because it needs to be rendered in order
* An operand is a finite sequence of p-tuples.  Each tuple is a row/col/layer in the layout

Operators

* Add (+): concat two sequences
* Cross (x): cartesian product
* Nest (/): Tricky definition.
* Dot (.): Hierarchy aware nesting.  (dont use nest because it needs to read values in table, Dot uses provided hierarchy info)

Layers restrictied to expressions over only ordinal operands

* Would need to ordinalize any numerical operands





# Vega-Lite

Quite a bit lower level than VizQL.  

* User needs to think about data xforms, data flow (repeat, facet, etc), nuances regarding axes (resolve), and visual encodings.  
* leaky abstractions: restrictions that seem arbitrary unless understand how vega-lite works
  * layer only supports unit views and not nested views
* Why is all the complexity around resolve needed?
* Counter argument: Intended as a target language

What is delta above ggplot2?

* integration into JS
* more design flexibility e.g., different axes across layers
* interaction


What is the intended use cases for vega-lite?

* analysis?  design?  intermediate language for a tool?
  * if you compute some results and just want to plot something sensible?
  * if you want to perform visual analysis?


## Summary

* extensions to vanilla vega for layers, facets, and repeated subplots
  * Tricky part is how to specific reconciliation policies ("resolve" keyword)
    of components (axes) shared across subplots (layers, small multiples)
* extensions for interation -- specifically how to deal with selections in a single view and multiple views

### Static Exetnsions

* Unit: single cartesian plot

        unit = (data, transforms, mark-type, encodings)
        transforms run before plotting

* Encoding is

        encoding = (channel, field, datatype, val, functions, scale, guide)
        channel: x, y, color, shape, size, text, 
                 order (for stacking/layering order), 
                 path (for  sequences of points in a line)
                 detail (grouping field but don't map to a visual prop.
                        in lieu of [color: field], which would agg by 
                        field but also map to color.  same as "group" in
                        ggplot2)
        val:     fixed value (if don't use field)
        

### Static Multi-view Specifications

Layers

        layer([unit1,...], resolve)
        resolve = (channel, scale/guide, resolution)
        resolution: independent or union

* resolve a specific channel (encoding) across the layers by adding a separate scale (space partition) or unioning them (merge function)

Concatenation for Layout
  
        hconcat/vconcat([view1,...], resolve)

Facet: partition dataset, show small multiples

* use `resolve` if want to explicitly control axis behavior

Repeat: replicate all of the dataset for each subplot -- for SPLOMS
  
        repeat: { column: {'col1', 'col2', ... } }

### Interaction

* Primarily for selections

        selection: (name, type, predicate, domain|range, event, init, transforms, resolve)

* selections backed by values or predicates

        type: point    -- copy the selected record explicitly
        type: list     -- predicate over the dataset using (IN) operator
        type: interval -- range predicate over dataset

        select: { id: { type: "point" } }
        ...
        color: {
          { if: id, field: Origin, Type: N } -- use the value in record.Origin if in the selection as defined by id
          { value: 'grey' }                  -- default gray

* `toggle` config means interacting with a mark toggles its value instead of explicitly selecting ONLY that value

        id: { type: list, toggle: true }               -- clicking (default event) toggles selection for that mark and adds to list
        id: { type: list, on: click, toggle: true }    -- same as above
        id: { type: point, toggle:true }               -- unclear its semantics
        id: { type: list, on: mouseover, toggle: true} -- select via hovering over

* "Transforms" can apply on top of predicate results to further transform selected data

        project(fields, channels)      -- database projection
        toggle(event)                  -- modifies contest of a list type
        translate(events, by)          -- offset values of backed records via the events (details unclear)
        zoom(event, factor):           -- either determined by event (e.g., mouse wheel) or by factor function
        nearest()                      -- voronoi decomposition and find nearest mark

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

        resolve: single      -- only one subplot can be selected at any time, the rest cleared
        resolve: indep       -- selections happen independently (can happen in multiple subplots, but independent)
        resolve: union       -- selections across subplots are unioned (OR operator)
        resolve: intersect   -- selections across subplots intersected (AND)


Confusing points

* Specification Conflicts Manually handled

        select: {
          region:
            ...
            on: [mousedown[event.shiftKey], mouseup] > mousemove
          grid: 
            type: interval, ...
            translate: [mousedown[!event.shiftKey], mouseup] > mousemove

        -- shiftKey statements must be carefully designed to avoid ambiguity with non-shiftkey interactions
        
  * This is probably a core issue in interaction design.
    * user inputs are streams of events.  interaction responds to patterns matched to those evens.
    * multiple interactions compose in weird ways (at the same time, with potentially conflicting effects)

* Focus is on selections   
  * argument is that pointing to what you want to muck with is the hard part?  Do the effects not matter as much?

        

