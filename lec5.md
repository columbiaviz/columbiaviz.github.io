---
layout: page
---


Exercise: what prediction accuracy do you need for good perceived latency??
(This analysis _must_ exist in the caching literature!)

        t ms             # when we will make the request
        l_net = N(u, s)  # latency
              = u        # assume s = 0
        l_mem = 10       # in cache cost
        a                # accuracy
        l_perc           # perceived latency when requesting at time t

        l_perc = 100
               = (10 + max(0, l_net - t)) * a + l_net * (1 - a) 
               = (10) * a + l_net * (1 - a)     # assuming l_net < t


        100 = 10a + l_net - l_net*a
            = (10 - l_net) * a + l_net
        l_net - 100 = (l_net - 10) * a
        a = (l_net - 100) / (l_net - 10)


        # What if fetch costs is larger than pre-fetch horizon: (l_net > t)
        l_perc = 100
               = (10 + l_net - t) * a + l_net * (1 - a) 
        100 = (10 + l_net - t - l_net) * a + l_net
        (100 - l_net) / (10 - t) = a          # t < l_net

        ggplot(data.frame(x=100:1000), aes(x)) +
        stat_function(fun=function(x) (100 - x) / (10 - (0.95 * x)), color="pink") + 
        stat_function(fun=function(x) (100 - x) / (10 - (0.90 * x)), color="red") + 
        stat_function(fun=function(x) (100 - x) / (10 - (0.80 * x)), color="darkred") + 
        scale_y_continuous(lim=c(0, 1))

        lperc = (10 + max(0, l_net - t)) * (1 - A) + l_net * A
              = (10 + max(0, l_net - t)) - (10 + max(0, l_net - t) - l_net) * A
        lperc - (10 + max(0, l_net - t)) = - (10 + max(0, l_net - t) - l_net) * A
        (lperc - 10 - max(0, l_net + t)) / (l_net - 10 - max(0, l_net - t)) = A = (1 - a)^N
        a = 1-((lperc - 10 - max(0, l_net + t)) / (l_net - 10 - max(0, l_net - t)))^(1/N) 

        # N concurrent requests
        l_perc = 10 * (1 - (1-a)^N) + l_net * (1 - a)^N
               = 10 * (1 - A) + l_net * A

        l_perc = 10 - 10A + l_net*A
        100    = 10 + (l_net - 10) * A
        90     = (l_net - 10) * A
        A      = 90 / (l_net - 10) = (1 - a)^N

        # plot N = 1, 2, 5
        ggplot(data.frame(x=100:1000), aes(x)) + 
        stat_function(fun=function(x) (1 - ((90) / (x-10))**(1/2)), color="blue") + 
        stat_function(fun=function(x) (1 - ((90) / (x-10))**(1/5)), color="orange") + 
        stat_function(fun=function(x) (x-100)/(x-10)) +
        scale_y_continuous(lim=c(0, 1))

        # What about l_perc = 500 in the paper?
        ggplot(data.frame(x=100:1000), aes(x)) + 
        stat_function(fun=function(x) (1 - ((490) / (x-10))**(1/2)), color="blue") + 
        stat_function(fun=function(x) (1 - ((490) / (x-10))**(1/5)), color="orange") + 
        stat_function(fun=function(x) (x-500)/(x-10)) +
        geom_hline(yintercept=1/9, color="grey") +
        geom_vline(xintercept=950, color="grey") +
        scale_y_continuous(lim=c(0, 1)) +
        scale_x_continuous(name="request latency")



        # What if you only need half the tile?

        A      = 90 / ((l_net / 2) - 10) = (1 - a)^N

        ggplot(data.frame(x=100:1000), aes(x)) + 
        stat_function(fun=function(x) (1 - ((90) / (x-10))**(1/5)), color="orange") + 
        stat_function(fun=function(x) (1 - ((90) / ((x/2)-10))**(1/5)), color="orange", linetype="dashed") + 
        stat_function(fun=function(x) (1 - ((90) / ((x/4)-10))**(1/5)), color="orange", linetype="longdash") + 
        stat_function(fun=function(x) (x-100)/(x-10)) + 
        geom_hline(yintercept=1/9, color="grey") +
        geom_vline(xintercept=950, color="grey") +
        scale_y_continuous(lim=c(0, 1))+
        scale_x_continuous(name="request latency")

    
        # What about the 500ms threshold in forecache?
        ggplot(data.frame(x=100:1000), aes(x)) + 
        stat_function(fun=function(x) (1 - ((490) / (x-10))**(1/5)), color="orange") + 
        stat_function(fun=function(x) (1 - ((490) / ((x/2)-10))**(1/5)), color="orange", linetype="dashed") + 
        stat_function(fun=function(x) (1 - ((490) / ((x/4)-10))**(1/5)), color="orange", linetype="longdash") + 
        stat_function(fun=function(x) (x-490)/(x-10)) + 
        geom_hline(yintercept=1/9, color="grey") +
        geom_vline(xintercept=950, color="grey") +
        scale_y_continuous(lim=c(0, 1))+
        scale_x_continuous(name="request latency")



                
# Forecache

Goals

* "interactivity": <= 500ms delays
  * note Liu, Nielson.  They are all rules of thumb! 
  * note they say "average latency within 500ms".  why?
* Rank and prefetch data tiles
* Tough balance between expressiveness of the interface and predictability
  * Usually don't want to sacrafice interaction richness for performance -- but hard problem!

What are the constraints placed on the user's interactions?  Why?

* Data tiles -- binned and discretized
  * Too many tiles to fit into memory
  * What is the dimensionality?  2D maps, or 1D time series.
* No updates (fair), small lookups, no jumping around (tex boxes)
  * Zoom and pan
  * Note that panning is typically a continuous interaction but discretized into a "go left" button
  * Why no a drag interface ala google maps?
* How many possible actions are there at any given time?
  * 4 directions + 2 zooms

Approach

* Recommendation models
  * No single model works, use ensemble
  * High level: Model Analysis goals 
    * Analysis "phases"
    * prediction conditioned on analysis goal
  * Low Level: markov + data similarity


High Level

* Foraging, Sensemaking, Navigation
  * Forage: coarse zoom, looking for interesting regions
  * Sensemaking: test hypothesis, will zoom in and look at neighbors
  * Navigation: zoom between forage and sensemaking
* Do these make sense in, say, a richer interactive viz? 
  * Why do they NEED navigation?  because of poor interactive controls?
  * Do these make sense?  What kind of users does this model?
* Sensemaking model -- what is it?
* How?
  * SVM of recent operation and tile/zoom position

Low Level 

        given request r
        candidate tiles C = T1, T2, ...
        request history H
        tile ordering P = Ti1, Ti2, ...
        ROI: zoomed in tiles between zoom in, zoom out actions

        Prediction engine will trim P based on space constraints

* C = all tiles d moves away 
  * could generalize to tiles n seconds away
* Markov model
  * Each state is a 3-gram of the user's actions (left, right, up, down, zoomin, zoomout)
  * predicts the next operation
* Signature model
  * Compute image features (mean, std, histogram, sift) of tiles in ROI
  * Compute CHIsquared dist between candidate tiles and ROI tiles
  * Compute tile location distances
  * L^2 norm of the difference vectors, one for each ROI tile, sum them up 
  * Use to rank tiles in C

How to use the high level strategies?

* Use to "weigh" the models by allocating cache space
* Navigation: 100% cache for Markov model
* Sensemaking: 100% for signature
* Foraging: half and half

Experimens

* "Given tha .. prefetches new tiles after every request,  we found.. more than one move ahead did not actually improve acc"
* Baselines
  * momentum, aka previous move
  * hotspot: previous move or a move towards a hotspot (if nearby)
* N=18, modis experts
* Is the interface "clear and efficient"?
* Queries
  * SELECT tile WHERE NSDI > ? AND zoom = ? LIMIT 4
  * If that's the case, just give a query interface??
* Figure 9 shows users indeed zoom in, pan, zoom out.  
* Figure 10c
  * markov good for foraging
  * sift good for others, not huge difference
* "reduced latency by >50% when k>=5"  -- that's >50% of possible future actions
* 6.1: "..restrict number of possible interations..ontly two dimensions to explore at a time.  This technique reduces the user's range of possible actions"
  * If I completely restrict it to nothing, then prediciton is 100%

Ultimately

* Prediction is _hard_!
  * Tradeoff between interaction constraints and ability to make accurate predictions
  * Is this a false dichotomy??
* Prefetching whole tiles can be expensive -- 900ms/tile
  * Partial tiles?
* Need a large cache size for it to work

Wu Principle


# M4

Goals

* End-to-end visualization latency is dominated by rendering/networking costs
  * need way to perform data reduction
  * focus on 2 colored time series line plots
* Rendering SELECT * is expensive
  * "each user will have to wait for nearly 260MB to be loaded to the client before ..can examine a chart"
    what problem does this suggest?

Main ideas

* "pixel perfect" 
  * contrast with sampling/binning/data cube/tiles
  * JND
* slow down data processing to reduce output result size
* rewrite into single, more complex query that does:

              input: Q
              if |Q| > threshold
                data_reduction(Q)
              else
                Q

Naive method for visualizing query Q

* run Q
* bin Q results and compute min/max statistics for each bin (x-pixel)

              SELECT x, min(y), max(y)
              FROM Q
              GROUP BY x

* re-join with Q to get actual tuples for each min/max value
  * hopefully there's a unique value, otherwise need to pick.
* render in client
  * for each x-pixel, paint all y-pixels between min and max in black
  * interpolate between x-pixels and paint interpolated pixels grey 

Problem (Figure 8)

* line intepolation can be incorrect
  * the min and max values could be _anywhere_ along the x axis within the pixel
  * interpolation line with the min/max value of next pixel could overlap with neighboring pixels (incorrectly)
  * (whether this matters is up for debate)

M4 Solution

* bin Q results and compute min(val), max(val), min(tstamp), max(tstamp)
* re-join with Q and get tuples for each of the above values 
* now line interpolation is correct (paper proves correctness)
  * further optimization could remove tuples at end points if they are in the 
    same y-pixel as closest min/max value
* Thus can reduce data transfered to <= 4 * #x-pixels
* More wins if allowed to interpolate across x-pixels  and approximate the results

Figure 16 categorization is interesting and useful!

* Completely in the context of data reduction!
* no reduction.  send data to client
* image reduction: render on server, compress images, send to client 
  * fetch images ala yahoo finance
  * lack interactivity (is this true? immens)
* data reduction: still need to send lots of data from db to data reduction engine
  * What about sending samples/synopses??
* M4: change the query
