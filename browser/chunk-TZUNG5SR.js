import{a as h}from"./chunk-TKJBX5KQ.js";import"./chunk-IVQSTHXJ.js";import{P as g,Q as u,aa as D,ba as v,z as d}from"./chunk-RV5XFZSS.js";import{d as j}from"./chunk-KFZQC3P5.js";function y(x){let{context:o,particle:t,radius:n,opacity:i}=x,e=t.emojiData,r=2,c=n*r,m=o.globalAlpha;e&&(o.globalAlpha=i,o.drawImage(e,-n,-n,c,c),o.globalAlpha=m)}var S='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"',b=class{constructor(){this._emojiShapeDict=new Map}destroy(){for(let[o,t]of this._emojiShapeDict)t instanceof ImageBitmap&&(t?.close(),this._emojiShapeDict.delete(o))}draw(o){y(o)}init(o){return j(this,null,function*(){let t=o.actualOptions;if(!h.find(e=>g(e,t.particles.shape.type)))return;let n=[u(S)],i=h.map(e=>t.particles.shape.options[e]).find(e=>!!e);i&&D(i,e=>{e.font&&n.push(u(e.font))}),yield Promise.all(n)})}particleDestroy(o){delete o.emojiData}particleInit(o,t){let i=t.shapeData;if(!i?.value)return;let e=v(i.value,t.randomIndexData),r=i.font??S;if(!e)return;let c=`${e}_${r}`,m=this._emojiShapeDict.get(c);if(m){t.emojiData=m;return}let p=d(t.size.value)*2,f,l=d(t.size.value);if(typeof OffscreenCanvas<"u"){let s=new OffscreenCanvas(p,p),a=s.getContext("2d");if(!a)return;a.font=`400 ${l*2}px ${r}`,a.textBaseline="middle",a.textAlign="center",a.fillText(e,l,l),f=s.transferToImageBitmap()}else{let s=document.createElement("canvas");s.width=p,s.height=p;let a=s.getContext("2d");if(!a)return;a.font=`400 ${l*2}px ${r}`,a.textBaseline="middle",a.textAlign="center",a.fillText(e,l,l),f=s}this._emojiShapeDict.set(c,f),t.emojiData=f}};export{b as EmojiDrawer};
