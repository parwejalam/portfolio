import{d as p}from"./chunk-KFZQC3P5.js";var i=class{constructor(r,o,a,e){this.position=r,this.size=o,this.fill=a,this.options=e}resize(r,o){this.position=r,this.size=o}};function x(t,r=!0){return p(this,null,function*(){if(!t.emitterShapeManager){let{ShapeManager:e}=yield import("./chunk-JLZMQ2YC.js");t.emitterShapeManager=new e(t)}t.addEmitterShapeGenerator||(t.addEmitterShapeGenerator=(e,s)=>{t.emitterShapeManager?.addShapeGenerator(e,s)});let{EmittersPlugin:o}=yield import("./chunk-G24E6YR3.js"),a=new o(t);yield t.addPlugin(a,r)})}export{i as a,x as b};
