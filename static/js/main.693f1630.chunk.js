(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r,s=n(8),i=n.n(s),o=n(3),a=n(4),u=n(6),c=n(5),b=n(1),d=n.n(b),l=n(2),h=n.n(l),m=n(0),p=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.goodsFromServer;return Object(m.jsx)("ul",{children:e.map((function(e){return Object(m.jsx)("li",{children:e},e)}))})}}]),n}(h.a.PureComponent),j=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]);!function(e){e.NONE="none",e.ALPABET="alpabet",e.LENGTH="length"}(r||(r={}));var v=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isStarted:!1,isReversed:!1,sortType:r.NONE,minLength:0},e.start=function(){e.setState((function(e){return{isStarted:!e.isStarted}}))},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortAlpabet=function(){e.setState({sortType:r.ALPABET,isReversed:!1})},e.sortByLength=function(){e.setState({sortType:r.LENGTH,isReversed:!1})},e.reset=function(){e.setState({sortType:r.NONE,isReversed:!1})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isStarted,s=t.isReversed,i=t.sortType,o=t.minLength,a=j.filter((function(e){return e.length>=o}));a.sort((function(e,t){switch(i){case r.ALPABET:return e.localeCompare(t);case r.LENGTH:return e[r.LENGTH]-t[r.LENGTH];default:return 0}}));return s&&a.reverse(),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("button",{className:d()("button",{"button--hidden":n}),type:"button",onClick:this.start,children:"Start"}),Object(m.jsx)("button",{type:"button",onClick:this.sortAlpabet,className:d()("button",{"button--hidden":!n}),children:"Sort alphabetically"}),Object(m.jsx)("button",{type:"button",onClick:this.sortByLength,className:d()("button",{"button--hidden":!n}),children:"Sort by length"}),Object(m.jsx)("button",{type:"button",onClick:this.reverse,className:d()("button",{"button--hidden":!n}),children:"Reverse"}),Object(m.jsx)("button",{type:"button",onClick:this.reset,className:d()("button",{"button--hidden":!n}),children:"Reset"}),Object(m.jsxs)("select",{value:o,defaultValue:1,onChange:function(t){e.setState({minLength:+t.target.value})},className:d()("button",{"button--hidden":!n}),children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Chose minimum length"}),[{id:"one",number:1},{id:"two",number:2},{id:"three",number:3},{id:"four",number:4},{id:"fmive",number:5},{id:"six",number:6},{id:"seven",number:7},{id:"eight",number:8},{id:"nine",number:9},{id:"ten",number:10}].map((function(e){return Object(m.jsx)("option",{value:e.number,children:e.number},e.id)}))]}),n?Object(m.jsx)(p,{goodsFromServer:a}):""]})}}]),n}(h.a.Component);i.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.693f1630.chunk.js.map