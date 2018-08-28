!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listAll=t.fetchTodos=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3)),o=function(e){return e&&e.__esModule?e:{default:e}}(n(14));t.fetchTodos=function(){return function(e){return o.default.get("http://5b84ef64db24a100142dce76.mockapi.io/todos").then(function(t){return e(u(t.data))}).catch(function(e){return e})}};var u=t.listAll=function(e){return{type:r.ALL,todos:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD="ADD",t.ALL="ALL"},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";var r=y(n(6)),o=y(n(7)),u=n(8),i=y(n(9)),c=y(n(0)),a=y(n(10)),f=n(18),l=y(n(19)),s=n(4),p=y(n(20)),d=n(1);function y(e){return e&&e.__esModule?e:{default:e}}var b=(0,r.default)();b.use((0,o.default)()),b.use(r.default.static("public"));var h=(0,s.createStore)(p.default,(0,s.applyMiddleware)(l.default));b.get("*",function(e,t,n){var r=(0,f.matchRoutes)(a.default,e.url).map(function(e){var t=e.route.component.fetchData;return t instanceof Function?t(h):Promise.resolve(null)});return Promise.all(r).then(function(n){var r=(0,u.renderToString)(c.default.createElement(d.Provider,{store:h},c.default.createElement(i.default,{location:e.url,context:{}},(0,f.renderRoutes)(a.default))));t.send('\n                <!DOCTYPE html>\n                <html>\n                <head>\n                    <title>SSR with RR</title>\n                </head>\n\n                <body>\n                    <div id="app">'+r+"</div>\n                    <script> window.__PRELOADED_STATE__ = "+JSON.stringify(h.getState())+'<\/script>\n                    <script src="/bundle.js"><\/script>\n                </body>\n                </html>\n            ')}).catch(function(e){return e})}),b.listen(3e3,function(){console.log("Server is listening on port: 3000")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router-dom/StaticRouter")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(11)),o=i(n(16)),u=i(n(17));function i(e){return e&&e.__esModule?e:{default:e}}var c=[{component:r.default,routes:[{path:"/",exact:!0,component:o.default},{path:"/home",component:o.default},{path:"/list",component:u.default}]}];t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),u=n(12),i=a(n(13)),c=a(n(15));function a(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,"Hello",o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(u.Link,{to:"/list"},"List")),o.default.createElement("li",null,o.default.createElement(u.Link,{to:"/home"}," Home"))),o.default.createElement(u.Route,{component:i.default,path:"/list"}),o.default.createElement(u.Route,{component:c.default,path:"/home"}))}}]),t}();t.default=f},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(1),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2));var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchTo()}},{key:"render",value:function(){return console.log(this.props.todos),u.default.createElement("div",null,this.props.todos.map(function(e){return u.default.createElement("div",{key:e.id},u.default.createElement("span",null,e.name))}))}}],[{key:"fetchData",value:function(e){return e.dispatch(c.fetchTodos())}}]),t}();t.default=(0,i.connect)(function(e){return{todos:e.todos}},function(e){return{fetchTo:function(){return e(c.fetchTodos())}}})(a)},function(e,t){e.exports=require("axios")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,"Home")}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement("div",null,"Home")}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(1),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(2));var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){this.props.fetchTo()}},{key:"render",value:function(){return console.log(this.props.todos),u.default.createElement("div",null,this.props.todos.map(function(e){return u.default.createElement("div",{key:e.id},u.default.createElement("span",null,e.name))}))}}],[{key:"fetchData",value:function(e){return e.dispatch(c.fetchTodos())}}]),t}();t.default=(0,i.connect)(function(e){return{todos:e.todos}},function(e){return{fetchTo:function(){return e(c.fetchTodos())}}})(a)},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("redux-thunk")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=function(e){return e&&e.__esModule?e:{default:e}}(n(21));var u=(0,r.combineReducers)({todos:o.default});t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3));var u={todos:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case o.ALL:return console.log(t),t.todos;default:return r({},e)}}}]);