import"./chunk-IVQSTHXJ.js";import{A as i,o as f,v as p,y as t}from"./chunk-RV5XFZSS.js";import"./chunk-KFZQC3P5.js";var l=class{constructor(){this.angle=50,this.move=10}load(e){e&&(e.angle!==void 0&&(this.angle=i(e.angle)),e.move!==void 0&&(this.move=i(e.move)))}};var d=class{constructor(){this.distance=5,this.enable=!1,this.speed=new l}load(e){if(e&&(e.distance!==void 0&&(this.distance=i(e.distance)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0))if(f(e.speed))this.speed.load({angle:e.speed});else{let n=e.speed;n.min!==void 0?this.speed.load({angle:n}):this.speed.load(e.speed)}}};var w=0,S=2,v=Math.PI*S,x=60;function c(s,e){let{wobble:n}=s.options,{wobble:o}=s;if(!n?.enable||!o)return;let u=o.angleSpeed*e.factor,g=o.moveSpeed*e.factor,b=g*((s.retina.wobbleDistance??w)*e.factor)/(1e3/x),a=v,{position:r}=s;o.angle+=u,o.angle>a&&(o.angle-=a),r.x+=b*Math.cos(o.angle),r.y+=b*Math.abs(Math.sin(o.angle))}var M=2,R=Math.PI*M,D=360,I=10,P=0,m=class{constructor(e){this.container=e}init(e){let n=e.options.wobble;n?.enable?e.wobble={angle:p()*R,angleSpeed:t(n.speed.angle)/D,moveSpeed:t(n.speed.move)/I}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=t(n?.distance??P)*this.container.retina.pixelRatio}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.options.wobble?.enable}loadOptions(e,...n){e.wobble||(e.wobble=new d);for(let o of n)e.wobble.load(o?.wobble)}update(e,n){this.isEnabled(e)&&c(e,n)}};export{m as WobbleUpdater};
