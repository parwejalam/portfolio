import"./chunk-IVQSTHXJ.js";import{ba as r,ia as l,sa as a,ta as d,y as s}from"./chunk-RV5XFZSS.js";import"./chunk-KFZQC3P5.js";var c=1,u=class{constructor(o){this.container=o}init(o){let e=this.container,n=o.options,t=r(n.stroke,o.id,n.reduceDuplicates);o.strokeWidth=s(t.width)*e.retina.pixelRatio,o.strokeOpacity=s(t.opacity??c),o.strokeAnimation=t.color?.animation;let i=l(t.color)??o.getFillColor();i&&(o.strokeColor=a(i,o.strokeAnimation,e.retina.reduceFactor))}isEnabled(o){let e=o.strokeAnimation,{strokeColor:n}=o;return!o.destroyed&&!o.spawning&&!!e&&(n?.h.value!==void 0&&n.h.enable||n?.s.value!==void 0&&n.s.enable||n?.l.value!==void 0&&n.l.enable)}update(o,e){this.isEnabled(o)&&d(o.strokeColor,e)}};export{u as StrokeColorUpdater};
