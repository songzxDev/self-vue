!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("vue2-org-tree",[],n):"object"==typeof exports?exports["vue2-org-tree"]=n():e["vue2-org-tree"]=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="dist",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);n.default=r.a},function(e,n,t){"use strict";var r=t(2),o=function e(n){e.installed||(e.installed=!0,n.component(r.a.name,r.a))};r.a.install=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r.a),n.a=r.a},function(e,n,t){"use strict";function r(e){t(3)}var o=t(5),a=t(7),s=t(4),i=r,l=s(o.a,a.a,!1,i,null,null);n.a=l.exports},function(e,n){},function(e,n){e.exports=function(e,n,t,r,o,a){var s,i=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(s=e,i=e.default);var c="function"==typeof i?i.options:i;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns,c._compiled=!0),t&&(c.functional=!0),o&&(c._scopeId=o);var p;if(a?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=p):r&&(p=r),p){var u=c.functional,d=u?c.render:c.beforeCreate;u?(c._injectStyles=p,c.render=function(e,n){return p.call(n),d(e,n)}):c.beforeCreate=d?[].concat(d,p):[p]}return{esModule:s,exports:i,options:c}}},function(e,n,t){"use strict";var r=t(6);n.a={name:"Vue2OrgTree",components:{OrgTreeNode:{render:r.a,functional:!0}},props:{data:{type:Object,required:!0},props:{type:Object,default:function(){return{label:"label",expand:"expand",children:"children"}}},horizontal:Boolean,collapsable:Boolean,renderContent:Function,labelWidth:[String,Number],labelClassName:[Function,String]}}},function(e,n,t){"use strict";var r=function(e,n){return!(Array.isArray(e[n])&&e[n].length>0)},o=function(e,n,t){var o=t.props,a=["org-tree-node"],l=[],c=n[o.props.children];return r(n,o.props.children)?a.push("is-leaf"):o.collapsable&&!n[o.props.expand]&&a.push("collapsed"),l.push(s(e,n,t)),o.collapsable&&!n[o.props.expand]||l.push(i(e,c,t)),e("div",{domProps:{className:a.join(" ")}},l)},a=function(e,n,t){var r=t.props,o=t.listeners["on-expand"],a=["org-tree-node-btn"];return n[r.props.expand]&&a.push("expanded"),e("span",{domProps:{className:a.join(" ")},on:{click:function(e){e.stopPropagation(),o&&o(n)}}})},s=function(e,n,t){var o=t.props,s=n[o.props.label],i=o.renderContent,l=t.listeners["on-node-click"],c=[];if("function"==typeof i){var p=i(e,n);p&&c.push(p)}else c.push(s);o.collapsable&&!r(n,o.props.children)&&c.push(a(e,n,t));var u=["org-tree-node-label-inner"],d=o.labelWidth,f=o.labelClassName;return"number"==typeof d&&(d+="px"),"function"==typeof f&&(f=f(n)),f&&u.push(f),e("div",{domProps:{className:"org-tree-node-label"}},[e("div",{domProps:{className:u.join(" ")},style:{width:d},on:{click:function(e){return l&&l(e,n)}}},c)])},i=function(e,n,t){if(Array.isArray(n)&&n.length){var r=n.map(function(n){return o(e,n,t)});return e("div",{domProps:{className:"org-tree-node-children"}},r)}return""},l=function(e,n){var t=n.props;return o(e,t.data,n)};n.a=l},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"org-tree-container"},[t("div",{staticClass:"org-tree",class:{horizontal:e.horizontal,collapsable:e.collapsable}},[t("org-tree-node",{attrs:{data:e.data,props:e.props,horizontal:e.horizontal,"label-width":e.labelWidth,collapsable:e.collapsable,"render-content":e.renderContent,"label-class-name":e.labelClassName},on:{"on-expand":function(n){e.$emit("on-expand",n)},"on-node-click":function(n,t){e.$emit("on-node-click",n,t)}}})],1)])},o=[],a={render:r,staticRenderFns:o};n.a=a}])});
//# sourceMappingURL=index.js.map