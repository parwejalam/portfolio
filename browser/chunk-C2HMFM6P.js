import{Ca as i}from"./chunk-RV5XFZSS.js";var n=class{constructor(){this.blur=5,this.color=new i,this.color.value="#000",this.enable=!1}load(e){e&&(e.blur!==void 0&&(this.blur=e.blur),this.color=i.create(this.color,e.color),e.enable!==void 0&&(this.enable=e.enable))}};var o=class{constructor(){this.enable=!1,this.frequency=1}load(e){e&&(e.color!==void 0&&(this.color=i.create(this.color,e.color)),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity))}};var r=class{constructor(){this.blink=!1,this.color=new i,this.color.value="#fff",this.consent=!1,this.distance=100,this.enable=!1,this.frequency=1,this.opacity=1,this.shadow=new n,this.triangles=new o,this.width=1,this.warp=!1}load(e){e&&(e.id!==void 0&&(this.id=e.id),e.blink!==void 0&&(this.blink=e.blink),this.color=i.create(this.color,e.color),e.consent!==void 0&&(this.consent=e.consent),e.distance!==void 0&&(this.distance=e.distance),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=e.opacity),this.shadow.load(e.shadow),this.triangles.load(e.triangles),e.width!==void 0&&(this.width=e.width),e.warp!==void 0&&(this.warp=e.warp))}};export{n as a,o as b,r as c};
