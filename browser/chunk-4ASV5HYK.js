import{a as g}from"./chunk-ZYBIYUJK.js";import"./chunk-IVQSTHXJ.js";import{v as u}from"./chunk-RV5XFZSS.js";import{d as P}from"./chunk-KFZQC3P5.js";var r=.25,M=2,y=Math.PI*M,q=2,I=.5,d=class extends g{constructor(t,s,a,e){super(t,s,a,e)}init(){return P(this,null,function*(){})}randomPosition(){let t=this.size,s=this.fill,a=this.position,e=(i,o)=>{let n=u()*r,h=Math.atan(o/i*Math.tan(y*n)),m=u();return m<r?h:m<M*r?Math.PI-h:m<M*r+r?Math.PI+h:-h},w=(i,o,n)=>i*o/Math.sqrt((o*Math.cos(n))**q+(i*Math.sin(n))**q),[p,c]=[t.width*I,t.height*I],l=e(p,c),f=w(p,c,l),x=s?f*Math.sqrt(u()):f;return{position:{x:a.x+x*Math.cos(l),y:a.y+x*Math.sin(l)}}}};var b=class{generate(t,s,a,e){return new d(t,s,a,e)}};export{b as EmittersCircleShapeGenerator};