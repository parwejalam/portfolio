import"./chunk-IVQSTHXJ.js";import{ia as e,sa as s,ta as t}from"./chunk-RV5XFZSS.js";import"./chunk-KFZQC3P5.js";var a=class{constructor(o){this.container=o}init(o){let n=e(o.options.color,o.id,o.options.reduceDuplicates);n&&(o.color=s(n,o.options.color.animation,this.container.retina.reduceFactor))}isEnabled(o){let{h:n,s:l,l:r}=o.options.color.animation,{color:i}=o;return!o.destroyed&&!o.spawning&&(i?.h.value!==void 0&&n.enable||i?.s.value!==void 0&&l.enable||i?.l.value!==void 0&&r.enable)}update(o,n){t(o.color,n)}};export{a as ColorUpdater};
