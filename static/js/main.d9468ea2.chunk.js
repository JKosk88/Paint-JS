(this.webpackJsonppaint=this.webpackJsonppaint||[]).push([[0],{15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),s=n(9),i=n.n(s),o=(n(15),n(8)),l=n(3),u=n(4);var b=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!1),r=Object(o.a)(n,2),s=r[0],i=r[1],b=Object(a.useState)(25),j=Object(o.a)(b,2),d=j[0],h=j[1];Object(a.useEffect)((function(){var n=e.current;n.width=2*(window.innerWidth-100),n.height=2*(window.innerHeight-200),n.style.width="".concat(window.innerWidth-100,"px"),n.style.height="".concat(window.innerHeight-200,"px");var c=n.getContext("2d");c.scale(2,2),c.lineCap="round",c.strokeStyle="rgb(0, 0, 0)",c.lineWidth=25,t.current=c,x("white")}),[]);var x=function(t){e.current.getContext("2d").fillStyle=t,e.current.getContext("2d").fillRect(0,0,e.current.width,e.current.height)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"panel",children:[Object(c.jsxs)("form",{onChange:function(t){e.current.getContext("2d").lineCap=t.target.value},children:[Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{type:"radio",name:"brush",value:"square"}),Object(c.jsx)("span",{className:"checkmark square"})]}),Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{type:"radio",name:"brush",value:"round"}),Object(c.jsx)("span",{className:"checkmark round"})]})]}),Object(c.jsxs)("form",{onChange:function(t){e.current.getContext("2d").strokeStyle=t.target.value},children:[Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{type:"radio",name:"color",value:"rgb(255, 0, 55)"}),Object(c.jsx)("span",{className:"checkmark red",onDoubleClick:function(){return x("rgb(255, 0, 55)")},value:"das"})]}),Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{type:"radio",name:"color",value:"rgb(255, 230, 0)"}),Object(c.jsx)("span",{className:"checkmark yellow",onDoubleClick:function(){return x("rgb(255, 230, 0)")}})]}),Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{type:"radio",name:"color",value:"rgb(38, 185, 38)"}),Object(c.jsx)("span",{className:"checkmark green",onDoubleClick:function(){return x("rgb(38, 185, 38)")}})]}),Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{type:"radio",name:"color",value:"rgb(0, 174, 255)"}),Object(c.jsx)("span",{className:"checkmark blue",onDoubleClick:function(){return x("rgb(0, 174, 255)")}})]}),Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{type:"radio",name:"color",value:"rgb(0, 0, 0)"}),Object(c.jsx)("span",{className:"checkmark black",onDoubleClick:function(){return x("rgb(0, 0, 0)")}})]}),Object(c.jsxs)("label",{className:"container",children:[Object(c.jsx)("input",{type:"radio",name:"color",value:"rgb(255, 255, 255)"}),Object(c.jsx)("span",{className:"checkmark white",onDoubleClick:function(){return x("rgb(255, 255, 55)")}})]})]}),Object(c.jsx)(l.a,{icon:u.c,className:"fa-2x",onClick:function(){e.current.getContext("2d").lineWidth=d+10,h(d+10)}}),Object(c.jsxs)("span",{className:"fa-3x noselect",children:[" ",d," "]}),Object(c.jsx)(l.a,{icon:u.b,className:"fa-2x",onClick:function(){var t;t=d-10<5?5:d-10,e.current.getContext("2d").lineWidth=t,h(t)}}),Object(c.jsx)(l.a,{icon:u.a,className:"fa-2x",onClick:function(){e.current.getContext("2d").clearRect(0,0,e.current.width,e.current.height)}}),Object(c.jsx)(l.a,{icon:u.d,className:"fa-2x",onClick:function(){e.current.getContext("2d").globalCompositeOperation="difference",e.current.getContext("2d").fillStyle="white",e.current.getContext("2d").globalAlpha=1,e.current.getContext("2d").fillRect(0,0,e.current.width,e.current.height)}})]}),Object(c.jsx)("canvas",{onMouseDown:function(e){var n=e.nativeEvent,c=n.offsetX,a=n.offsetY;t.current.beginPath(),t.current.moveTo(c,a),i(!0)},onMouseUp:function(){t.current.closePath(),i(!1)},onMouseMove:function(e){var n=e.nativeEvent;if(s){var c=n.offsetX,a=n.offsetY;t.current.lineTo(c,a),t.current.stroke()}},ref:e})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),j()}},[[21,1,2]]]);
//# sourceMappingURL=main.d9468ea2.chunk.js.map