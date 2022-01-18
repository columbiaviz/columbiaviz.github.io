(function(){
  //
  // ANIMATION
  //
  const EASING = {
    linear:  function (t, b, c, d) {        return c*t/d + b },

    easeInQuad: function (t, b, c, d) {     return c*(t/=d)*t + b },
    easeOutQuad: function (t, b, c, d) {    return -c *(t/=d)*(t-2) + b },
    easeInOutQuad: function (t, b, c, d) {  return ((t/=d/2) < 1) ? c/2*t*t + b
                                                                  : -c/2 * ((--t)*(t-2) - 1) + b },
    easeInCubic: function (t, b, c, d) {    return c*(t/=d)*t*t + b },
    easeOutCubic: function (t, b, c, d) {   return c*((t=t/d-1)*t*t + 1) + b },
    easeInOutCubic: function (t, b, c, d) { return ((t/=d/2) < 1) ? c/2*t*t*t + b
                                                                  : c/2*((t-=2)*t*t + 2) + b },
    easeInQuart: function (t, b, c, d) {    return c*(t/=d)*t*t*t + b },
    easeOutQuart: function (t, b, c, d) {   return -c * ((t=t/d-1)*t*t*t - 1) + b },
    easeInOutQuart: function (t, b, c, d) { return ((t/=d/2) < 1) ? c/2*t*t*t*t + b
                                                                  : -c/2 * ((t-=2)*t*t*t - 2) + b },
    easeInQuint: function (t, b, c, d) {    return c*(t/=d)*t*t*t*t + b },
    easeOutQuint: function (t, b, c, d) {   return c*((t=t/d-1)*t*t*t*t + 1) + b },
    easeInOutQuint: function (t, b, c, d) { return ((t/=d/2) < 1) ? c/2*t*t*t*t*t + b
                                                                  : c/2*((t-=2)*t*t*t*t + 2) + b },
    easeInSine: function (t, b, c, d) {     return -c * Math.cos(t/d * (Math.PI/2)) + c + b },
    easeOutSine: function (t, b, c, d) {    return c * Math.sin(t/d * (Math.PI/2)) + b },
    easeInOutSine: function (t, b, c, d) {  return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b },

    easeInCirc: function (t, b, c, d) {     return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b },
    easeOutCirc: function (t, b, c, d) {    return c * Math.sqrt(1 - (t=t/d-1)*t) + b },
    easeInOutCirc: function (t, b, c, d) {  return ((t/=d/2) < 1) ? -c/2 * (Math.sqrt(1 - t*t) - 1) + b
                                                                  :  c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b },
    easeInExpo: function (t, b, c, d) {     return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b },
    easeOutExpo: function (t, b, c, d) {    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b },
    easeInOutExpo: function (t, b, c, d) {  return (t==0) ? b
                                                 : (t==d) ? b+c
                                                 : ((t/=d/2) < 1) ? c/2 * Math.pow(2, 10 * (t - 1)) + b
                                                 : c/2 * (-Math.pow(2, -10 * --t) + 2) + b }
  }

  var easing = function({ease='linear', at=0, to=1, rng=1}={}){
    ease = (typeof arguments[0]=='string') ? arguments[0] : ease
    return (pos) => EASING[ease](_.clamp(pos, 0, rng), at, to-at, rng)
  }

  var tween = function({at=0, to=1, dur=1000, ease='easeOutQuart', start=true, precision=3, step=_.noop, complete=_.noop}){
    const now = () => new Date(),
          progress = (rng=1.0) => rng * Math.min(new Date()-since, dur) / dur,
          rAF = () => window.requestAnimationFrame(tick);

    let since = now(),
        interp = _.get(EASING, ease, EASING.easeOutQuart),
        halt = start ? false : Number.EPSILON;

    function tick(){
      var pos = progress(dur),
          val = interp(pos, at, to-at, dur),
          mag = 10 * precision;
      if (Math.round(val*mag)==Math.round(to*mag) || pos>=dur)
        [val, pos] = [to, dur] // short circuit once the anim is asymptotic
      if (halt) halt = pos/dur
      else if (step(val)===false || pos==dur) complete()
      else rAF()
    }

    let anim = {
      get progress(){ return halt || progress()},
      set progress(p){ halt = _.clamp(p, 0, 1)},
      get now(){ return anim.progress * dur },
      set now(t){ anim.progress = t/dur },
      get dur(){ return dur },
      set dur(v){
        since = now() - progress(v)
        dur = v
      },
      stop:(update) => {
        halt = anim.progress
      },
      start:() => {
        if (halt){
          since = now() - halt * dur
          rAF()
        }
        halt = false
      }
    }

    if (start) rAF()
    return anim
  }

  const spring = ({at=0, to=1, stiffness=15, damping=6, mass=.10, precision=1.9, limit=0, step=_.noop, complete=_.noop}) => {
    const rAF = () => window.requestAnimationFrame(tick),
          resume = () => { since = Date.now(); rAF() },
          limiter = limit ? v => _.clamp(v, -limit, limit) : _.identity;

    let velocity = 0,
        thresh = Math.pow(10, -precision),
        since = Date.now(),
        halt, done;

    const tick = () => {
      var now = Date.now(),
          dt = (now - since) / 1000;

      var force = stiffness * (to - at)
      var damp = damping * velocity
      var accel = (force - damp) / mass
      velocity += accel * dt
      at += limiter(velocity) * dt
      since = now;

      done = (Math.abs(velocity) <= thresh) && (Math.abs(to - at) <= thresh)
      if (step(done ? to : at)===false || done) complete()
      else if (!halt) rAF()
    }

    let sim = {
      get at(){ return at },
      set at(val){ at = parseFloat(val) },
      get to(){ return to },
      set to(val){
        to = parseFloat(val)
        if (done && !halt) resume()
      },
      set: (opts) => {
        sim.at=_.get(opts, 'at', at);
        sim.to=_.get(opts, 'to', to)
        return sim
      },
      stop: () => { halt = true },
      start: () => {
        if (halt) resume()
        halt = false
      }
    }

    rAF()
    return sim.set({at, to})
  }


  var scrollPage = ({to=0, dur=1000, complete=_.noop}) => {
    let at = document.documentElement.scrollTop || document.body.scrollTop
    to = _.hasIn(to, 'offset') ? to.offset().top - 20 : to // `to` can be a y value or an elt
    return tween({
      at, to, dur, complete,
      step:(y) => {document.body.scrollTop = y; document.documentElement.scrollTop = y}
    })
  }

  //
  // BEZIER INTERPOLATION
  //

  function getQuadraticPoint(src, ctrl, dst, pct) {
    var inv = 1-pct,
        x = Math.pow(inv, 2) * src.x + 2*inv * pct * ctrl.x + Math.pow(pct,2) * dst.x,
        y = Math.pow(inv, 2) * src.y + 2*inv * pct * ctrl.y + Math.pow(pct,2) * dst.y;
    return {x,y}
  }



  _.extend(window, {spring, tween, easing, scrollPage, getQuadraticPoint})
})()
