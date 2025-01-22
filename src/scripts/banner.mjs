import $ from 'cash-dom'
import * as _ from 'lodash-es'
import chroma from 'chroma-js'
import {tween} from "./anim.mjs"

export default function(selector){
  document.addEventListener("DOMContentLoaded", () => {

    const dpr = window.devicePixelRatio || 1,
          w = 200, h = 200,
          outdated = !!document.querySelector("nav .alert.outdated"),
          grey = chroma.scale(['#eee', '#444']),
          cubehelix = chroma.cubehelix().lightness([0.3,0.7]).rotations(-0.45).start(235),
          palette = outdated ? grey : cubehelix

    function reset(obj){
      obj.canvas.width = obj.canvas.width
      obj.ctx.fillStyle = 'black'
      obj.ctx.scale(dpr, dpr)
      return obj.ctx
    }

    function polar([cx, cy], angle, dist){
      return [cx+Math.cos(angle/180*Math.PI) * dist, cy+Math.sin(angle/180*Math.PI) * dist]
    }

    let render = {
      cube: function(a, b, c, d){
        let ctx = reset(this)
        let origin = [w/2, h],
            right = polar(origin, -30, 100),
            top = polar(origin, -90, 100),
            left = polar(origin, -150, 100),
            above = pt => polar(pt, -90, 100);

        ctx.lineWidth = 2
        ctx.strokeStyle = 'rgba(0,0,0,.1)'
        ctx.fillStyle = '#f5f5f5'
        ctx.beginPath()
        ctx.moveTo(...origin)
        ctx.lineTo(...right)
        ctx.lineTo(...top)
        ctx.lineTo(...left)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        ctx.strokeStyle = 'rgba(0,0,0,.03)'
        ctx.beginPath()
        ctx.moveTo(...top)
        ctx.lineTo(...above(top))
        ctx.stroke()

        ctx.lineWidth = 4
        ctx.strokeStyle = palette(b)
        ctx.beginPath()
        let src = polar(origin, -150, 100*a)
        let dst = polar(src, -30, 100*b)
        ctx.moveTo(...src)
        ctx.lineTo(...dst)
        ctx.stroke()

        ctx.strokeStyle = palette(a)
        ctx.beginPath()
        src = polar(origin, -30, 100*b)
        dst = polar(src, -150, 100*a)
        ctx.moveTo(...src)
        ctx.lineTo(...dst)
        ctx.stroke()

        ctx.strokeStyle = palette(c)
        ctx.beginPath()
        let apex = polar(dst, -90, 100*c)
        ctx.moveTo(...dst)
        ctx.lineTo(...apex)
        ctx.stroke()

        ctx.fillStyle = palette(d)
        ctx.lineWidth = 1
        ctx.strokeStyle = 'white'
        ctx.beginPath()
        let r = 2 + 8*d
        ctx.ellipse(...apex, r, r, 0, 0, 2*Math.PI)
        ctx.fill()
        ctx.stroke()

        ctx.lineWidth = 2
        ctx.strokeStyle = 'rgba(0,0,0,.1)'
        ctx.beginPath()
        ctx.moveTo(...left)
        ctx.lineTo(...above(left))
        ctx.lineTo(...above(top))
        ctx.lineTo(...above(right))
        ctx.lineTo(...right)
        ctx.moveTo(...above(left))
        ctx.lineTo(...top)
        ctx.lineTo(...above(right))
        ctx.moveTo(...top)
        ctx.lineTo(...origin)
        ctx.stroke()
      },
      treemap: function(a, b, c, d){
        let ctx = reset(this),
            upper = h * (a+b) / (a+b+c+d),
            lower = h - upper,
            umid = w * a / (a+b),
            lmid = w * c / (c+d);

        ctx.strokeStyle = 'white'
        ctx.fillStyle = palette(a)
        ctx.fillRect(0, 0, umid, upper)
        ctx.strokeRect(0, 0, umid, upper)

        ctx.fillStyle = palette(b)
        ctx.fillRect(umid, 0, w-umid, upper)
        ctx.strokeRect(umid, 0, w-umid, upper)

        ctx.fillStyle = palette(c)
        ctx.fillRect(0, upper, lmid, lower)
        ctx.strokeRect(0, upper, lmid, lower)

        ctx.fillStyle = palette(d)
        ctx.fillRect(lmid, upper, w-lmid, lower)
        ctx.strokeRect(lmid, upper, w-lmid, lower)
      },
      radial: function(a, b, c, d){
        let ctx = reset(this)
        ctx.lineWidth = 18

        ctx.beginPath()
        ctx.strokeStyle = palette(a)
        ctx.ellipse(w/2, h/2, 30, 30, 0, 0, 2*Math.PI * a)
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = palette(b)
        ctx.ellipse(w/2, h/2, 50, 50, 0, 0, 2*Math.PI * b)
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = palette(c)
        ctx.ellipse(w/2, h/2, 70, 70, 0, 0, 2*Math.PI * c)
        ctx.stroke()

        ctx.beginPath()
        ctx.strokeStyle = palette(d)
        ctx.ellipse(w/2, h/2, 90, 90, 0, 0, 2*Math.PI * d)
        ctx.stroke()

      },
      blots: function(a, b, c, d){
        let ctx = reset(this)
        var [sa, sb, sc, sd] = [a, b, c, d].map(x => x*.23*w)

        ctx.fillStyle = palette(a)
        ctx.beginPath()
        ctx.ellipse(w*.25, h*.25, sa, sa, 0, 0, 2*Math.PI)
        ctx.fill()

        ctx.fillStyle = palette(b)
        ctx.beginPath()
        ctx.ellipse(w*.75, h*.25, sb, sb, 0, 0, 2*Math.PI)
        ctx.fill()

        ctx.fillStyle = palette(c)
        ctx.beginPath()
        ctx.ellipse(w*.25, h*.75, sc, sc, 0, 0, 2*Math.PI)
        ctx.fill()

        ctx.fillStyle = palette(d)
        ctx.beginPath()
        ctx.ellipse(w*.75, h*.75, sd, sd, 0, 0, 2*Math.PI)
        ctx.fill()
      },
      // swatches: function(a, b, c, d){
      //   let ctx = reset(this)
      //   var [sa, sb, sc, sd] = [a, b, c, d].map(x => x*.48)
      //   ctx.fillStyle = palette(a)
      //   ctx.fillRect(0, 0, w*sa, h*sa)
      //   ctx.fillStyle = palette(b)
      //   ctx.fillRect(w/2, 0, w*sb, h*sb)
      //   ctx.fillStyle = palette(c)
      //   ctx.fillRect(0, h/2, w*sc, h*sc)
      //   ctx.fillStyle = palette(d)
      //   ctx.fillRect(w/2, h/2, w*sd, h*sd)
      // },
      // bars: function(a, b, c, d){
      //   let ctx = reset(this)
      //   ctx.fillStyle = palette(a)
      //   ctx.fillRect(0, h, w*.2, -h*a)
      //   ctx.fillStyle = palette(b)
      //   ctx.fillRect(w*.25, h, w*.2, -h*b)
      //   ctx.fillStyle = palette(c)
      //   ctx.fillRect(w*.5, h, w*.2, -h*c)
      //   ctx.fillStyle = palette(d)
      //   ctx.fillRect(w*.75, h, w*.2, -h*d)
      // },
    }

    if (outdated){
      $(selector).css('marginTop', 60)
    }

    const demo = Object.fromEntries(Object.keys(render).map((mode, idx) => {
      let canvas = $(selector)
        .children("canvas")
        .eq(idx)
        .attr('class', mode)
        .attr('width',w*dpr)
        .attr('height',h*dpr)
        // .appendTo(selector)
        .get(0)
      return [mode, render[mode].bind({canvas, ctx:canvas.getContext("2d")})]
    }))

    const shuffle = () => _.shuffle(
      _.range(4).map(i => i*0.25 + Math.random()*0.25)
    )

    let last = shuffle()
    let next = last
    const redraw = (pct=0) => {
      let [a, b, c, d] = _.zip(last, next).map(([src, dst]) => src + pct * (dst-src))
      for (const mode in demo){
        demo[mode](a, b, c, d)
      }
    }
    redraw()

    const update = () => {
      last = next
      next = shuffle()
      tween({ dur:10000, ease:"easeInOutSine", precision:15, step:redraw, complete:() => {setTimeout(update, 750)} })
    }
    update()

  })
}