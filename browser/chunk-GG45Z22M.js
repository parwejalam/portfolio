import{b}from"./chunk-Q6AB2CPB.js";import{a as h}from"./chunk-IVQSTHXJ.js";import{P as y,ma as v,na as u,oa as M,ua as x,w as m}from"./chunk-RV5XFZSS.js";import"./chunk-KFZQC3P5.js";var R=0,C=1,E=0;function F(i,t,n,o){let e=Math.floor(n.getRadius()/t.getRadius()),r=t.getFillColor(),s=n.getFillColor();if(!r||!s)return;let d=t.getPosition(),a=n.getPosition(),l=M(r,s,t.getRadius(),n.getRadius()),c=i.createLinearGradient(d.x,d.y,a.x,a.y);return c.addColorStop(R,u(r,o)),c.addColorStop(m(e,R,C),v(l,o)),c.addColorStop(C,u(s,o)),c}function H(i,t,n,o,e){x(i,o,e),i.lineWidth=t,i.strokeStyle=n,i.stroke()}function L(i,t,n,o){let e=i.actualOptions,r=e.interactivity.modes.connect;if(r)return F(t,n,o,r.links.opacity)}function P(i,t,n){i.canvas.draw(o=>{let e=L(i,o,t,n);if(!e)return;let r=t.getPosition(),s=n.getPosition();H(o,t.retina.linksWidth??E,e,r,s)})}var q="connect",S=0,O=class extends h{constructor(t){super(t)}clear(){}init(){let t=this.container,n=t.actualOptions.interactivity.modes.connect;n&&(t.retina.connectModeDistance=n.distance*t.retina.pixelRatio,t.retina.connectModeRadius=n.radius*t.retina.pixelRatio)}interact(){let t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&t.interactivity.status==="pointermove"){let o=t.interactivity.mouse.position,{connectModeDistance:e,connectModeRadius:r}=t.retina;if(!e||e<S||!r||r<S||!o)return;let s=Math.abs(r),d=t.particles.quadTree.queryCircle(o,s,a=>this.isEnabled(a));d.forEach((a,l)=>{let c=a.getPosition(),w=1;for(let f of d.slice(l+w)){let p=f.getPosition(),g=Math.abs(e),k=Math.abs(c.x-p.x),D=Math.abs(c.y-p.y);k<g&&D<g&&P(t,a,f)}})}}isEnabled(t){let n=this.container,o=n.interactivity.mouse,e=(t?.interactivity??n.actualOptions.interactivity).events;return e.onHover.enable&&o.position?y(q,e.onHover.mode):!1}loadModeOptions(t,...n){t.connect||(t.connect=new b);for(let o of n)t.connect.load(o?.connect)}reset(){}};export{O as Connector};
