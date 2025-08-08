!(function(){var Qe=Object.defineProperty,ke=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var Ve=(I,t,e)=>t in I?Qe(I,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):I[t]=e,F=(I,t)=>{for(var e in t||(t={}))He.call(t,e)&&Ve(I,e,t[e]);if(ze)for(var e of ze(t))Ye.call(t,e)&&Ve(I,e,t[e]);return I},Ce=(I,t)=>ke(I,qe(t));var Le=(I,t)=>{var e={};for(var n in I)He.call(I,n)&&t.indexOf(n)<0&&(e[n]=I[n]);if(I!=null&&ze)for(var n of ze(I))t.indexOf(n)<0&&Ye.call(I,n)&&(e[n]=I[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{36419:function(I,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return Ie}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return v.D},useIsomorphicLayoutEffect:function(){return s.L},useMergeProps:function(){return a.S},useMergeState:function(){return R.R},usePrevious:function(){return b.D},useResizeObserver:function(){return M.y}});var p={};e.r(p),e.d(p,{canUseDom:function(){return E.J},debounce:function(){return O.D},isArray:function(){return L.kJ},isEmptyObject:function(){return L.Qr},isFunction:function(){return L.mf},isNumber:function(){return L.hj},isObject:function(){return L.Kn},isString:function(){return L.HD},isUndefined:function(){return L.o8},omit:function(){return z.C},pick:function(){return G},throttle:function(){return ee.P}});var r={};e.r(r),e.d(r,{default:function(){return H.Y},useTransition:function(){return H.Y},useTransitionMap:function(){return Q},useTransitionState:function(){return H.Y}});var c=e(90819),i=e.n(c),o=e(89933),m=e.n(o),x=e(53360),h=e.t(x,2),f=e(45990),d=e(4177),u=e(86752),l=e.t(u,2),v=e(37797),s=e(60164),a=e(7657),R=e(62222),b=e(45844),M=e(8240),E=e(34028),O=e(78831),L=e(80703),z=e(12598);function G(J,ce){const de={};return ce.forEach(B=>{B in J&&(de[B]=J[B])}),de}var ee=e(6890),ie=e(22532),W=e(75257),N=e(7829),H=e(64508),$=e(75601);const ne=(J,ce,de,B,w,y)=>{clearTimeout(w);const C=(0,$.y0)(ce),g=new Map(B.current);g.set(J,C),de(g),B.current=g,y&&y({key:J,current:C})},Q=({allowMultiple:J,enter:ce=!0,exit:de=!0,preEnter:B,preExit:w,timeout:y,initialEntered:C,mountOnEnter:g,unmountOnExit:K,onStateChange:D}={})=>{const[q,te]=(0,x.useState)(new Map),Z=(0,x.useRef)(q),le=(0,x.useRef)(new Map),[Y,me]=(0,$.fj)(y),U=(0,x.useCallback)((se,T)=>{const{initialEntered:X=C}=T||{},_=X?$.cn:(0,$.Ef)(g);ne(se,_,te,Z),le.current.set(se,{})},[C,g]),re=(0,x.useCallback)(se=>{const T=new Map(Z.current);return T.delete(se)?(te(T),Z.current=T,le.current.delete(se),!0):!1},[]),he=(0,x.useCallback)(se=>{const T=Z.current.get(se);if(!T)return;const{timeoutId:X}=le.current.get(se),_=(0,$.XZ)(T._s,K);_&&ne(se,_,te,Z,X,D)},[D,K]),ge=(0,x.useCallback)((se,T)=>{const X=Z.current.get(se);if(!X)return;const _=le.current.get(se),fe=ye=>{switch(ne(se,ye,te,Z,_.timeoutId,D),ye){case $.d0:Y>=0&&(_.timeoutId=setTimeout(()=>he(se),Y));break;case $.Ix:me>=0&&(_.timeoutId=setTimeout(()=>he(se),me));break;case $.iL:case $.iU:_.timeoutId=(0,$.Y3)(fe,ye);break}},xe=X.isEnter;typeof T!="boolean"&&(T=!xe),T?xe||(fe(ce?B?$.iL:$.d0:$.cn),!J&&Z.current.forEach((ye,pe)=>pe!==se&&ge(pe,!1))):xe&&fe(de?w?$.iU:$.Ix:(0,$.Ef)(K))},[D,he,J,ce,de,B,w,Y,me,K]),oe=(0,x.useCallback)(se=>{if(!(!J&&se!==!1))for(const T of Z.current.keys())ge(T,se)},[J,ge]);return{stateMap:q,toggle:ge,toggleAll:oe,endTransition:he,setItem:U,deleteItem:re}};var k=e(53175),ae=e(67324),P=e(71932),A=e(31716),S=e(95154),j=e(81184),V=e.t(j,2),Ie={"sqi-web-src-common-demo-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,99902))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49108).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":d,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":d,"react-dom":l,"@sqi-ui/hooks":n,"@sqi-ui/utils":p},renderOpts:{compile:function(){var J=m()(i()().mark(function de(){var B,w=arguments;return i()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,e.e(70).then(e.bind(e,25070));case 2:return C.abrupt("return",(B=C.sent).default.apply(B,w));case 3:case"end":return C.stop()}},de)}));function ce(){return J.apply(this,arguments)}return ce}()}},"sqi-web-src-common-demo-css-motion-base":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,74587))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58072).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":ie,"../CSSMotion.tsx":W,"../config-provider/context.ts":k,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":ie,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":W,clsx:N,"react-transition-state":r,"@sqi-ui/utils":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":k},renderOpts:{compile:function(){var J=m()(i()().mark(function de(){var B,w=arguments;return i()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,e.e(70).then(e.bind(e,25070));case 2:return C.abrupt("return",(B=C.sent).default.apply(B,w));case 3:case"end":return C.stop()}},de)}));function ce(){return J.apply(this,arguments)}return ce}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,85773))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":ie,"../CSSMotion.tsx":W,"../config-provider/context.ts":k,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":ie,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":W,clsx:N,"react-transition-state":r,"@sqi-ui/utils":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":k},renderOpts:{compile:function(){var J=m()(i()().mark(function de(){var B,w=arguments;return i()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,e.e(70).then(e.bind(e,25070));case 2:return C.abrupt("return",(B=C.sent).default.apply(B,w));case 3:case"end":return C.stop()}},de)}));function ce(){return J.apply(this,arguments)}return ce}()}},"sqi-web-src-common-demo-css-motion-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,6685))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1175).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},"./motion.css":{type:"FILE",value:e(79172).Z},clsx:{type:"NPM",value:"2.1.1"},"react-dom":{type:"NPM",value:"19.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"../Portal.tsx":d,"../CSSMotion.tsx":W,"./motion.css":ie,"../config-provider/context.ts":k,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":W,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":ie,clsx:N,"react-dom":l,"react-transition-state":r,"@sqi-ui/hooks":n,"@sqi-ui/utils":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":k},renderOpts:{compile:function(){var J=m()(i()().mark(function de(){var B,w=arguments;return i()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,e.e(70).then(e.bind(e,25070));case 2:return C.abrupt("return",(B=C.sent).default.apply(B,w));case 3:case"end":return C.stop()}},de)}));function ce(){return J.apply(this,arguments)}return ce}()}},"sqi-web-src-common-demo-resize-observer":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,80023))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25094).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(87425).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(90458).Z},"../_util/toArray.ts":{type:"FILE",value:e(17588).Z},"../_util/dom.ts":{type:"FILE",value:e(48557).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":ae,"../_util/ref.ts":P,"../_util/toArray.ts":A,"../_util/dom.ts":S,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":ae,"@sqi-ui/utils":p,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":P,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":A,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":S,"react-is":V},renderOpts:{compile:function(){var J=m()(i()().mark(function de(){var B,w=arguments;return i()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,e.e(70).then(e.bind(e,25070));case 2:return C.abrupt("return",(B=C.sent).default.apply(B,w));case 3:case"end":return C.stop()}},de)}));function ce(){return J.apply(this,arguments)}return ce}()}}}},13842:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73819))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95121).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,15202))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75458).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35563))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44633).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},6677:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(5629),h={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,16286))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98669))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41122).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,86011))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18024))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42791).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,7792))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95453).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},58718:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(84912),h={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42303))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52648).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,24394))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10654).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,55519))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8780))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42331).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98868))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(302).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41499))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37544).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},94435:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,40787))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71841).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30933))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77322).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},29876:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35038))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54117).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,31503))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58549).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35680))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65325).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},60061:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(66351),h={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,69753))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9098).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,93817))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96507).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26989))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8872).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33271))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17153).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,32093))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95921).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29727))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78066).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30407))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82986).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,56682))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23972).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},13438:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(5629),x=e(45990),h={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73043))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m,"@sqi-ui/web":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37317))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36848).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m,"@sqi-ui/web":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,28981))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66135).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},73931:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(5629),h={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,27878))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25623).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30525))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38082).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,99670))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8899).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,66666))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(90822).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,32910))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13589).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,77182))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56596).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,52035))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34941).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,96294))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80488).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72326))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31475).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,20416))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37604).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},95752:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(74944),h={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75228))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71038).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1753))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31932).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,46052))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8910).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,99789))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32105).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37848))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75386))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2930).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,91859))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27389).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=i()(r()().mark(function u(){var l,v=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,v));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},5237:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72626))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7420).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,19067))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39113).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1251))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74317).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,44842))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(24811).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,66545))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17474).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(r()().mark(function d(){var u,l=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(u=s.sent).default.apply(u,l));case 3:case"end":return s.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},37666:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return d}});var p=e(90819),r=e.n(p),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(43261),h=e(45513),f=e(52342),d={"sqi-web-src-trigger-demo-core":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,51031))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-core",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73739).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(91778).Z},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z}},entry:"index.tsx"},context:{"./demo.module.css":x,"./_wrapper.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h},renderOpts:{compile:function(){var u=i()(r()().mark(function v(){var s,a=arguments;return r()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(s=b.sent).default.apply(s,a));case 3:case"end":return b.stop()}},v)}));function l(){return u.apply(this,arguments)}return l}()}},"sqi-web-src-trigger-demo-motion":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42191))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-motion",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41010).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(96443).Z},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z},"./demo.module.css":{type:"FILE",value:e(91778).Z}},entry:"index.tsx"},context:{"./motion.css":f,"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var u=i()(r()().mark(function v(){var s,a=arguments;return r()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(s=b.sent).default.apply(s,a));case 3:case"end":return b.stop()}},v)}));function l(){return u.apply(this,arguments)}return l}()}}}},75257:function(I,t,e){"use strict";e.r(t);var n=e(73193),p=e.n(n),r=e(10154),c=e.n(r),i=e(45332),o=e.n(i),m=e(84176),x=e.n(m),h=e(53360),f=e(7829),d=e(64508),u=e(80703),l=e(53175),v=["children","name","prefixCls"],s=(0,h.forwardRef)(function(a,R){var b=(0,h.useContext)(l.ConfigContext),M=a.children,E=a.name,O=a.prefixCls,L=x()(a,v),z=(0,d.Y)(L),G=o()(z,2),ee=G[0],ie=G[1],W=(0,h.isValidElement)(M);(0,h.useImperativeHandle)(R,function(){return{toggle:ie}});var N="".concat(O||b.prefixCls).concat(E?"-".concat(E):""),H=(0,f.default)(["".concat(N,"-motion")],c()({},"".concat(N,"-motion-").concat(ee.status),ee.status));return(0,u.mf)(M)?ee.isMounted?M(p()(p()({},ee),{},{className:H,toggle:ie})):null:W?ee.isMounted?(0,h.cloneElement)(M,{className:(0,f.default)(M.props.className,H)}):null:M});s.displayName="CSSMotion",t.default=s},4177:function(I,t,e){"use strict";e.r(t);var n=e(45332),p=e.n(n),r=e(53360),c=e(86752),i=e(60164),o=e(34028),m=e(80703),x=(0,o.J)();function h(d){return x?(0,m.HD)(d)?document.querySelector(d):(0,m.mf)(d)?d():d instanceof HTMLElement?d:document.body:null}var f=(0,r.forwardRef)(function(d,u){var l=d.getContainer,v=d.prefixCls,s=d.children,a=d.open,R=a===void 0?!0:a,b=d.rootStyle,M=(0,r.useState)(null),E=p()(M,2),O=E[0],L=E[1],z=(0,r.useState)(null),G=p()(z,2),ee=G[0],ie=G[1],W=ee||document.body;(0,r.useEffect)(function(){var H=h(l);ie(H||null)},[l]);var N=function(){if(!x||O)return null;var $=document.createElement("div");v&&($.className="".concat(v,"-portal-wrapper")),b&&Object.assign($.style,b),$.setAttribute("data-portal","true"),L($)};return(0,i.L)(function(){x&&(R?N():L(null))},[R]),(0,r.useImperativeHandle)(u,function(){return O},[O]),(0,i.L)(function(){if(!(!x||!O)){var H=function(){return!O.parentNode&&W.appendChild(O)},$=function(){var Q;return(Q=O.parentNode)===null||Q===void 0?void 0:Q.removeChild(O)};return R?H():$(),function(){$()}}},[R,O]),R&&s&&O?(0,c.createPortal)(s,O):null});f.displayName="Portal",t.default=f},67324:function(I,t,e){"use strict";e.r(t);var n=e(53360),p=e(6890),r=e(8240),c=e(31716),i=e(95154),o=e(71932),m=(0,n.forwardRef)(function(x,h){var f=x.children,d=x.disabled,u=x.throttleMs,l=u===void 0?100:u,v=x.onResize,s=(0,n.isValidElement)(f),a=s?(0,c.toArray)(f):[],R=s?(0,i.getReactNodeRef)(f):null,b=(0,n.useRef)(null),M=(0,o.useComposeRef)(R,b),E=function(){return(0,i.getDOM)(b.current)};(0,n.useImperativeHandle)(h,function(){return E()});var O=v?(0,p.P)(v,l):void 0;return(0,r.y)(b,O,!d),s?(0,n.cloneElement)(f,{ref:M}):f});m.displayName="ResizeObserverComponent",t.default=m},95154:function(I,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return i},getReactNodeRef:function(){return o},isDOM:function(){return c}});var n=e(89957),p=e.n(n),r=e(53360);function c(m){return m instanceof HTMLElement||m instanceof SVGElement}function i(m){return m&&p()(m)==="object"&&c(m.nativeElement)?m.nativeElement:c(m)?m:null}function o(m){var x=m&&(0,r.isValidElement)(m);if(!x)return null;if(parseInt(r.version)>=19){var h;return((h=m.props)===null||h===void 0?void 0:h.ref)||null}return m.ref}},71932:function(I,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return i},fillRef:function(){return o},supportNodeRef:function(){return f},supportRef:function(){return x},useComposeRef:function(){return m}});var n=e(37797),p=e(80703),r=e(53360),c=e(11607),i=function(){for(var u=arguments.length,l=new Array(u),v=0;v<u;v++)l[v]=arguments[v];var s=l.filter(Boolean);return s.length<=1?s[0]:function(a){l.forEach(function(R){o(R,a)})}},o=function(u,l){(0,p.mf)(u)?u(l):(0,p.Kn)(u)&&"current"in u&&(u.current=l)},m=function(){for(var u=arguments.length,l=new Array(u),v=0;v<u;v++)l[v]=arguments[v];return(0,n.D)(function(){return i.apply(void 0,l)},l,function(s,a){return s.length!==a.length||s.every(function(R,b){return R!==a[b]})})},x=function(u){var l,v;if(!u)return!1;var s=parseInt(r.version);if(h(u)&&s>=19)return!0;var a=(0,c.isMemo)(u)?u.type.type:u.type;return!(typeof a=="function"&&!((l=a.prototype)!==null&&l!==void 0&&l.render)&&a.$$typeof!==c.ForwardRef||typeof u=="function"&&!((v=u.prototype)!==null&&v!==void 0&&v.render)&&u.$$typeof!==c.ForwardRef)};function h(d){return(0,r.isValidElement)(d)&&!(0,c.isFragment)(d)}var f=function(u){return h(u)&&x(u)}},31716:function(I,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return r}});var n=e(53360),p=e(11607);function r(c){var i=[];return n.Children.toArray(c).forEach(function(o){o!=null&&(Array.isArray(o)?i=i.concat(r(o)):(0,n.isValidElement)(o)&&(0,p.isFragment)(o)&&o.props?i=i.concat(r(o.props.children)):i.push(o))}),i}},84912:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),p=e(69787);function r(c){var i=c.item,o=c.checked,m={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,p.jsxs)("div",{style:m,children:[(0,p.jsx)("div",{style:x}),(0,p.jsx)("strong",{children:i}),(0,p.jsx)("div",{children:"this is a checkbox"})]})}},53175:function(I,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return r},defaultConfigProps:function(){return p}});var n=e(53360),p={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(p)},66351:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),p=e(69787);function r(c){var i=c.colorPalette,o=i===void 0?6:i,m=c.children,x=c.height;return(0,p.jsx)("div",{style:{height:x||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:m})}},74944:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),p=e(69787);function r(c){var i=c.item,o=c.checked,m={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,p.jsxs)("div",{style:m,children:[(0,p.jsx)("div",{style:x}),(0,p.jsx)("strong",{children:i}),(0,p.jsx)("div",{children:"this is a radio"})]})}},45513:function(I,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return c}});var n=e(53360),p=e(43261),r=e(69787),c=(0,n.forwardRef)(function(i,o){var m=i.size,x=i.backgroundColor,h=i.children;return(0,r.jsx)("div",{ref:o,className:p.default.box,style:{width:m+"px",height:m+"px",backgroundColor:x},children:h})});c.displayName="Component"},22532:function(I,t,e){"use strict";e.r(t)},43261:function(I,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai","sqi-demo-motion":"lyPu5JRah80EXpc61PWj","sqi-demo-motion-preEnter":"wq8WrD6Ji_cIyktNYUsJ","sqi-demo-motion-exiting":"yRmFPwtGXTMctvysu9rP","sqi-demo-motion-entered":"rmokT3yXIS0BKvSg921n","sqi-demo-motion-exited":"XDMMMhdu0RkwQBzK1_dJ"}},52342:function(I,t,e){"use strict";e.r(t)},34481:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 css \u9690\u85CF\u7EC4\u4EF6",paraId:4}]},97302:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},81955:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},15096:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},38427:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},68291:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactN`ode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},18070:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},50409:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},50310:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u8F93\u5165\u6846\u7EC4\u4EF6",paraId:10,tocIndex:11},{value:"InputProps",paraId:10,tocIndex:11},{value:"\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u63CF\u8FF0",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"type",paraId:11,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:11,tocIndex:12},{value:"MDN",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"text",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:11,tocIndex:12},{value:"ConfigSize",paraId:11,tocIndex:12},{value:"md",paraId:11,tocIndex:12},{value:"status",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:11,tocIndex:12},{value:"success",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"warning",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"error",paraId:11,tocIndex:12},{value:"tips",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"allowClear",paraId:11,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"align",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"center",paraId:11,tocIndex:12},{value:" |",paraId:11,tocIndex:12},{value:"right",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"variant",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"borderless",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"underline",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"addonBefore",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"addonAfter",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"prefix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"suffix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"visibilityToggle",paraId:11,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"VisibilityToggle",paraId:12,tocIndex:12},{value:"maxLength",paraId:11,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:11,tocIndex:12},{value:"number",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"MaxLength",paraId:13,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:11,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:14,tocIndex:13},{value:"\u63CF\u8FF0",paraId:14,tocIndex:13},{value:"\u7C7B\u578B",paraId:14,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:13},{value:"visible",paraId:14,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:14,tocIndex:13},{value:"boolean",paraId:14,tocIndex:13},{value:"renderIcon",paraId:14,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:14,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:14,tocIndex:13},{value:"onVisibleChange",paraId:14,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:14,tocIndex:13},{value:"(visible: boolean) => void",paraId:14,tocIndex:13},{value:"\u5C5E\u6027",paraId:15,tocIndex:14},{value:"\u63CF\u8FF0",paraId:15,tocIndex:14},{value:"\u7C7B\u578B",paraId:15,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:14},{value:"length",paraId:15,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:15,tocIndex:14},{value:"number",paraId:15,tocIndex:14},{value:"showLimit",paraId:15,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14},{value:"true",paraId:15,tocIndex:14},{value:"errorOnly",paraId:15,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14}]},65793:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},18328:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684 ",paraId:1,tocIndex:6},{value:"SpaceProps",paraId:1,tocIndex:6},{value:" \u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u4E3A Markdown \u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:2,tocIndex:6},{value:"\u63CF\u8FF0",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"size",paraId:2,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:2,tocIndex:6},{value:"SizeType",paraId:3,tocIndex:6},{value:" | ",paraId:2,tocIndex:6},{value:"[SizeType, SizeType]",paraId:2,tocIndex:6},{value:"direction",paraId:2,tocIndex:6},{value:"\u65B9\u5411",paraId:2,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:6},{value:"'horizontal'",paraId:2,tocIndex:6},{value:"align",paraId:2,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:2,tocIndex:6},{value:"wrap",paraId:2,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"split",paraId:2,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:2,tocIndex:6},{value:"ReactNode",paraId:2,tocIndex:6},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u63CF\u8FF0",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"SizeType",paraId:4,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:4,tocIndex:7},{value:"ConfigSize",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"number",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"undefined",paraId:4,tocIndex:7}]},8825:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 Popover \u7EC4\u4EF6\uFF08\u89C4\u5212\u4E2D\uFF09\u6765\u66FF\u4EE3 Trigger \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popperjs \u7684\u57FA\u7840\u529F\u80FD\uFF08\u903B\u8F91\u5B9E\u73B0\u5F88\u810F\uFF0C\u4E14\u5F88\u591A\u60C5\u51B5\u672A\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:2,tocIndex:1},{value:"table th tr",paraId:2,tocIndex:1},{value:" \u4E0B\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0Ccss ",paraId:2,tocIndex:1},{value:"will-change transform",paraId:2,tocIndex:1},{value:" \u7B49\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF09",paraId:2,tocIndex:1},{value:"\u540E\u7EED\u53EF\u80FD\u4F1A\u5BF9\u5B9A\u4F4D\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C\u6709\u80FD\u529B\u91CD\u5199\u7684\u8BDD\uFF0CI am very vegetable :)",paraId:3,tocIndex:1},{value:"\u76EE\u524D\u7684\u8BBE\u8BA1\uFF0C\u7BAD\u5934\u548C\u5B9A\u4F4D\u5185\u5BB9\u662F\u4E24\u5957\u72EC\u7ACB\u7684\u5B9A\u4F4D\u903B\u8F91\uFF0C\u4E24\u8005\u57FA\u672C\u4E92\u4E0D\u5173\u8054\uFF0C\u5BF9\u529F\u80FD\u7684\u5B9E\u73B0\u4EA7\u751F\u5F88\u5927\u5F71\u54CD\u3002\u5728\u53C2\u8003 ",paraId:4,tocIndex:1},{value:"ant design",paraId:4,tocIndex:1},{value:" \u7684\u8BBE\u8BA1\u540E\uFF0C\u53EF\u4EE5\u91C7\u53D6\u628A\u7BAD\u5934\u5B9A\u4F4D\u5230\u5185\u5BB9\u4E2D\u7684\u65B9\u6848\u8FDB\u884C\u5C0F\u8303\u56F4\u504F\u79FB\u53EF\u4EE5\u51CF\u5C11\u975E\u5E38\u591A\u903B\u8F91\u4EE3\u7801\u3002\u4F7F\u7528 ",paraId:4,tocIndex:1},{value:"display: block;",paraId:4,tocIndex:1},{value:" \u5373\u53EF\u5B9E\u73B0 abosult \u57FA\u4E8E ",paraId:4,tocIndex:1},{value:"\u5305\u542B\u5757",paraId:4,tocIndex:1},{value:" \u5B9A\u4F4D",paraId:4,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:5},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"top",paraId:6},{value:" \u548C ",paraId:6},{value:"bottom",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5\u8BBE\u7F6E y \u8F74",paraId:6},{value:"\u7684\u504F\u79FB\u53EF\u5DE5\u4F5C",paraId:6},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"left",paraId:6},{value:" \u548C ",paraId:6},{value:"right",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5\u8BBE\u7F6E x \u8F74",paraId:6},{value:"\u7684\u504F\u79FB\u53EF\u5DE5\u4F5C\u3002",paraId:6},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popper \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08\u4E5F\u4E0D\u662F\u8BEF\u5DEE\uFF0C\u800C\u662F\u6B64\u65F6 popper \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:7},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:8,tocIndex:2},{value:"transform",paraId:8,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:8,tocIndex:2}]},6321:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { useTransitionState, type TransitionOptions, type TransitionState } from 'react-transition-state';
import { isFunction } from '@sqi-ui/utils';
import { ConfigContext } from '../config-provider/context';

export interface ChildCallbackResult extends TransitionState {
  className: string;
  toggle: (toEnter?: boolean) => void;
}

export interface CSSMotionProps extends TransitionOptions {
  prefixCls?: string;
  name?: string;
  children: ((result: ChildCallbackResult) => React.ReactElement) | React.ReactElement;
}

export interface CSSMotionInstance {
  toggle: (toEnter?: boolean) => void;
}

const CSSMotion = forwardRef<CSSMotionInstance, CSSMotionProps>((props: CSSMotionProps, ref) => {
  const ctx = useContext(ConfigContext);
  const { children, name, prefixCls, ...restProps } = props;
  const [state, toggle] = useTransitionState(restProps);
  const isElement = isValidElement(children);

  useImperativeHandle(ref, () => ({ toggle }));

  const mergedPrefixCls = \`\${prefixCls || ctx.prefixCls}\${name ? \`-\${name}\` : ''}\`;

  const className = clsx([\`\${mergedPrefixCls}-motion\`], {
    [\`\${mergedPrefixCls}-motion-\${state.status}\`]: state.status,
  });

  if (isFunction(children)) {
    return state.isMounted ? children({ ...state, className, toggle }) : null;
  } else {
    if (!isElement) {
      // ==================== Warning ======================
      if (process.env.NODE_ENV !== 'production') {
        console.error('[CSSMotion] children should be a valid ReactElement or a function that returns a ReactElement');
      }
      return children;
    }
    return state.isMounted
      ? cloneElement(children as any, { className: clsx((children.props as any).className, className) })
      : null;
  }
});

CSSMotion.displayName = 'CSSMotion';

export default CSSMotion;
`},16173:function(I,t){"use strict";t.Z=`import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '@sqi-ui/hooks';
import { canUseDom, isFunction, isString } from '@sqi-ui/utils';

export type PortalContainer = string | (() => HTMLElement | null) | HTMLElement | null;

export interface PortalProps {
  prefixCls?: string;
  /**
   * @description \u6307\u5B9A\u6302\u8F7D\u7684\u8282\u70B9\uFF0C\u9ED8\u8BA4\u4E3A document.body
   * @default document.body
   */
  getContainer?: PortalContainer;
  children: React.ReactNode;
  open?: boolean;
  rootStyle?: React.CSSProperties;
}

const isBrowser = canUseDom();

function getAttachNode(getContainer: PortalProps['getContainer']): HTMLElement | null {
  if (!isBrowser) return null;

  if (isString(getContainer)) return document.querySelector(getContainer);
  if (isFunction(getContainer)) return getContainer();
  if (getContainer instanceof HTMLElement) return getContainer;

  return document.body;
}

const Portal = forwardRef<HTMLDivElement, PortalProps>((props, ref) => {
  const { getContainer, prefixCls, children, open = true, rootStyle } = props;

  const [containerWrapper, setContainerWrapper] = useState<HTMLDivElement | null>(null);
  const [customizeParent, setCustomizeParent] = useState<HTMLElement | null>(null);
  const mergedParentNode = customizeParent || document.body;

  useEffect(() => {
    const newParentNode = getAttachNode(getContainer);
    setCustomizeParent(newParentNode || null);
  }, [getContainer]);

  const createContainerNode = () => {
    if (!isBrowser || containerWrapper) return null;

    const node = document.createElement('div');
    if (prefixCls) {
      node.className = \`\${prefixCls}-portal-wrapper\`;
    }

    if (rootStyle) {
      Object.assign(node.style, rootStyle);
    }

    node.setAttribute('data-portal', 'true');
    setContainerWrapper(node);
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return;
    if (open) {
      createContainerNode();
    } else {
      setContainerWrapper(null);
    }
  }, [open]);

  useImperativeHandle(ref, () => containerWrapper as HTMLDivElement, [containerWrapper]);

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser || !containerWrapper) return;

    const attachToParent = () => !containerWrapper.parentNode && mergedParentNode.appendChild(containerWrapper);

    const detachFromParent = () => containerWrapper.parentNode?.removeChild(containerWrapper);

    if (open) {
      attachToParent();
    } else {
      detachFromParent();
    }

    return () => {
      detachFromParent();
    };
  }, [open, containerWrapper]);

  if (!(open && children)) return null;

  return containerWrapper ? createPortal(children, containerWrapper) : null;
});

Portal.displayName = 'Portal';

export default Portal;
`},87425:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef } from 'react';
import { throttle } from '@sqi-ui/utils';
import { useResizeObserver } from '@sqi-ui/hooks';
import { toArray } from '../_util/toArray';
import { getDOM, getReactNodeRef } from '../_util/dom';
import { useComposeRef } from '../_util/ref';

export interface ResizeObserverProps {
  onResize?: (entry: ResizeObserverEntry[]) => void;
  children?: React.ReactElement;
  /**
   * @description \u662F\u5426\u7981\u7528 observer
   */
  disabled?: boolean;
  /**
   * @description \u8282\u6D41\u65F6\u95F4
   * @default 100
   */
  throttleMs?: number;
}

const ResizeObserverComponent = forwardRef<HTMLElement, ResizeObserverProps>((props, ref) => {
  const { children, disabled, throttleMs = 100, onResize } = props;

  const isElement = isValidElement(children);

  const childNodes = isElement ? toArray(children) : [];

  const originRef = isElement ? getReactNodeRef<Element>(children!) : null;
  const elementRef = useRef<Element>(null);
  const mergedRef = useComposeRef(originRef, elementRef);

  if (process.env.NODE_ENV !== 'production') {
    if (!isElement) {
      console.error('[@sqi-ui/web]: The \`children\` of ResizeObserverComponent is invalid. Nothing is in observe.');
    }
    if (childNodes.length > 1) {
      console.error(
        '[@sqi-ui/web]: Find more than one child node with \`children\` in ResizeObserverComponent. Please ensure only one child node',
      );
    } else if (childNodes.length === 0) {
      console.error('[@sqi-ui/web]: \`children\` of ResizeObserverComponent is empty. Nothing is in observe.');
    }
  }

  const getDomElement = () => {
    return getDOM(elementRef.current) as HTMLElement;
  };

  useImperativeHandle(ref, () => getDomElement());

  const throttleResize = onResize ? throttle(onResize, throttleMs) : undefined;

  useResizeObserver(elementRef, throttleResize, !disabled);

  return isElement ? cloneElement(children as any, { ref: mergedRef }) : children;
});

ResizeObserverComponent.displayName = 'ResizeObserverComponent';

export default ResizeObserverComponent;
`},58072:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Space } from '@sqi-ui/web';
import CSSMotion, { type CSSMotionInstance } from '../CSSMotion';
import './motion.css';

const styles: React.CSSProperties = {
  width: 250,
  background: 'var(--sqi-error-color)',
  padding: 20,
  color: 'white',
  marginTop: 10,
};

export default function Demo() {
  const motionRef = React.useRef<CSSMotionInstance>(null);
  const [unmountDestroy, setUnmountDestroy] = React.useState(false);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => motionRef.current?.toggle()}>
          Toggle Motion
        </Button>

        <Checkbox checked={unmountDestroy} onChange={(e) => setUnmountDestroy(e.target.checked)}>
          Unmount Destroy Dom
        </Checkbox>
      </Space>

      <CSSMotion ref={motionRef} timeout={500} name="demo" initialEntered preEnter unmountOnExit={unmountDestroy}>
        <div style={styles}>
          <p>Motion Container</p>
          <Button type="primary" onClick={() => motionRef.current?.toggle()}>
            Close Motion
          </Button>
        </div>
      </CSSMotion>
    </>
  );
}
`},1175:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Space } from '@sqi-ui/web';
import CSSMotion, { type CSSMotionInstance } from '../CSSMotion';
import './motion.css';
import Portal from '../Portal';

const styles: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: 0,
  zIndex: 1000,
  background: 'red',
  padding: 20,
  color: 'white',
};

export default function Demo() {
  const motionRef = React.useRef<CSSMotionInstance>(null);
  const [unmountDestroy, setUnmountDestroy] = React.useState(false);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => motionRef.current?.toggle()}>
          Toggle Portal
        </Button>

        <Checkbox checked={unmountDestroy} onChange={(e) => setUnmountDestroy(e.target.checked)}>
          Unmount Destroy Portal
        </Checkbox>
      </Space>

      <CSSMotion ref={motionRef} timeout={500} name="demo" mountOnEnter preEnter unmountOnExit={unmountDestroy}>
        {({ className }) => {
          return (
            <Portal>
              <div className={className} style={styles}>
                This is a container use Portal
              </div>
            </Portal>
          );
        }}
      </CSSMotion>
    </>
  );
}
`},45672:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';
import CSSMotion, { type CSSMotionInstance } from '../CSSMotion';
import './motion.css';

const styles: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: 0,
  zIndex: 1000,
  background: 'red',
  padding: 20,
  color: 'white',
};

export default function Demo() {
  const motionRef = React.useRef<CSSMotionInstance>(null);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => motionRef.current?.toggle()}>
          Toggle Motion
        </Button>
      </Space>

      <CSSMotion ref={motionRef} timeout={500} name="demo" mountOnEnter preEnter unmountOnExit>
        <div style={styles}>Motion Container</div>
      </CSSMotion>
    </>
  );
}
`},79172:function(I,t){"use strict";t.Z=`.sqi-demo-motion {
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.sqi-demo-motion.sqi-demo-motion-preEnter,
.sqi-demo-motion.sqi-demo-motion-exiting {
  opacity: 0;
  transform: scale(0.5);
}

.sqi-demo-motion.sqi-demo-motion-entered {
  opacity: 1;
  transform: scale(1);
}

.sqi-demo-motion.sqi-demo-motion-exited {
  display: none;
}
`},49108:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';
import Portal from '../Portal';

export default function Demo() {
  const [open1, setOpen1] = React.useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [open2, setOpen2] = React.useState(false);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setOpen1(!open1)}>
          open
        </Button>
        <Button ref={btnRef} type="primary" onClick={() => setOpen2(!open2)}>
          custom append container
        </Button>
      </Space>

      <Portal open={open1}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1000,
            background: 'red',
            padding: 20,
            color: 'white',
          }}
        >
          Base append content
        </div>
      </Portal>

      <Portal open={open2} getContainer={btnRef.current}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1000,
            background: 'red',
            padding: 20,
            color: 'white',
          }}
        >
          Append dom position in Button
        </div>
      </Portal>
    </>
  );
}
`},25094:function(I,t){"use strict";t.Z=`import React from 'react';
import { Checkbox } from '@sqi-ui/web';
import ResizeObserver, { type ResizeObserverProps } from '../ResizeObserver';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    console.log('Ref:', textareaRef.current);
  }, []);

  const onResize: ResizeObserverProps['onResize'] = (entries) => {
    const entry = entries[0];
    const { width, height } = entry.target.getBoundingClientRect();
    const { offsetWidth, offsetHeight } = entry.target as HTMLElement;

    setTimes((prevTimes) => prevTimes + 1);
    console.log('Resize:', '\\n', 'BoundingBox', width, height, '\\n', 'Offset', offsetWidth, offsetHeight);
  };

  return (
    <>
      <div>
        <Checkbox onChange={(e) => setDisabled(e.target.checked)}>Disabled Observe</Checkbox>
        {' >>> '}
        <span>Resize times: {times}</span>
      </div>

      <ResizeObserver onResize={onResize} disabled={disabled}>
        <textarea ref={textareaRef} placeholder="I'm a textarea!" />
      </ResizeObserver>
    </>
  );
}
`},48557:function(I,t){"use strict";t.Z=`import { isValidElement, version } from 'react';

export function isDOM(node: any): node is HTMLElement | SVGElement {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element
  return node instanceof HTMLElement || node instanceof SVGElement;
}

export function getDOM(node: any): HTMLElement | SVGElement | null {
  // object ==> ref object
  if (node && typeof node === 'object' && isDOM(node.nativeElement)) {
    return node.nativeElement;
  }

  // real dom
  if (isDOM(node)) {
    return node;
  }

  return null;
}

export function getReactNodeRef<T = any>(node: React.ReactNode): React.Ref<T> | null {
  const element = node && isValidElement(node);
  if (!element) return null;

  // \`ref\` \u5728 react19 \u4F5C\u4E3A props \u4F20\u9012\uFF0C\u800C\u5728\u5176\u4E4B\u524D\u7684\u7248\u672C\uFF0C\u5219\u4F7F\u7528 ref \u5C5E\u6027\u4F20\u9012\u83B7\u53D6
  if (parseInt(version) >= 19) {
    return (node.props as any)?.ref || null;
  }
  // @ts-expect-error \`element.ref\` is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return node.ref;
}
`},90458:function(I,t){"use strict";t.Z=`import { useCompareMemo } from '@sqi-ui/hooks';
import { isFunction, isObject } from '@sqi-ui/utils';
import { isValidElement, version } from 'react';
import { ForwardRef, isFragment, isMemo } from 'react-is';

export const composeRef = <T>(...refs: React.Ref<T>[]): React.Ref<T> => {
  const refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
};

export const fillRef = <T>(ref: React.Ref<T>, node: T) => {
  if (isFunction(ref)) {
    ref(node);
  } else if (isObject(ref) && 'current' in ref) {
    ref.current = node;
  }
};

export const useComposeRef = <T>(...refs: React.Ref<T>[]): React.Ref<T> => {
  return useCompareMemo(
    () => composeRef(...refs),
    refs,
    (prev, next) => prev.length !== next.length || prev.every((ref, i) => ref !== next[i]),
  )!;
};

export const supportRef = (nodeOrComponent: any): boolean => {
  if (!nodeOrComponent) {
    return false;
  }

  const ReactMajorVersion = parseInt(version);

  // React 19 no need \`forwardRef\` anymore. So just pass if is a React element.
  if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) {
    return true;
  }

  const type = isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !type.prototype?.render && type.$$typeof !== ForwardRef) {
    return false;
  }

  // Class component
  if (
    typeof nodeOrComponent === 'function' &&
    !nodeOrComponent.prototype?.render &&
    nodeOrComponent.$$typeof !== ForwardRef
  ) {
    return false;
  }
  return true;
};

interface RefAttributes<T> extends React.Attributes {
  ref: React.Ref<T>;
}

function isReactElement(node: React.ReactNode) {
  return isValidElement(node) && !isFragment(node);
}

export const supportNodeRef = <T = any>(node: React.ReactNode): node is React.ReactElement & RefAttributes<T> => {
  return isReactElement(node) && supportRef(node);
};
`},17588:function(I,t){"use strict";t.Z=`import { Children, isValidElement, type ReactNode } from 'react';
import { isFragment } from 'react-is';

export function toArray(children: ReactNode): ReactNode[] {
  let realNode: ReactNode[] = [];

  Children.toArray(children).forEach((child) => {
    if (child === null || child === undefined) {
      return;
    }

    // Fragment \u4E0D\u5E94\u5360\u7528 space-item\uFF0C\u5BF9\u5176\u8FDB\u884C\u8FC7\u6EE4\uFF08context \u4E0D\u80FD\u8FC7\u6EE4\uFF09
    if (Array.isArray(child)) {
      realNode = realNode.concat(toArray(child));
    } else if (isValidElement(child) && isFragment(child) && child.props) {
      realNode = realNode.concat(toArray((child.props as any).children));
    } else {
      realNode.push(child);
    }
  });
  return realNode;
}
`},44633:function(I,t){"use strict";t.Z=`import React from 'react';
import { Alert, Button } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Alert
        description="this is a description"
        action={
          <Button status="primary" size="sm">
            Action
          </Button>
        }
        closable
      />
      <br />
      <Alert title="this is a title" description="this is a description" closable />
      <br />
      <Alert title="this is a title" description="this is a description" action="Action" />
    </>
  );
}
`},95121:function(I,t){"use strict";t.Z=`import React from 'react';
import { Alert } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Alert description="this is a description" />
      <br />
      <Alert title="this is a title" description="this is a description" />
    </>
  );
}
`},75458:function(I,t){"use strict";t.Z=`import React from 'react';
import { Alert } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Alert description="this is a default/info description" />
      <br />
      <Alert type="success" description="this is a success description" />
      <br />
      <Alert type="warning" description="this is a warning description" />
      <br />
      <Alert type="error" description="this is a error description" />
    </>
  );
}
`},60705:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <h5>Basic</h5>
      <Space>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button status="primary">Primary</Button>
        <Button status="danger">Danger</Button>
        <Button status="success">Success</Button>
        <Button status="warning">Warning</Button>
      </Space>
      <h5>Href</h5>
      <div>
        <Space>
          <Button href="#">Default</Button>
          <Button href="#" type="primary">
            Primary
          </Button>
          <Button href="#" status="primary">
            Primary
          </Button>
          <Button href="#" status="danger">
            Danger
          </Button>
          <Button href="#" status="success">
            Success
          </Button>
          <Button href="#" status="warning">
            Warning
          </Button>
        </Space>
      </div>
    </>
  );
}
`},41122:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <h5>Disabled</h5>
      <Space>
        <Button disabled>Default</Button>
        <Button type="primary" disabled>
          Primary
        </Button>
        <Button disabled status="primary">
          Primary
        </Button>
        <Button disabled status="danger">
          Danger
        </Button>
        <Button disabled status="success">
          Success
        </Button>
        <Button disabled status="warning">
          Warning
        </Button>
      </Space>
      <h5>Disabled href</h5>
      <Space>
        <Button disabled href="#">
          Default
        </Button>
        <Button type="primary" disabled href="#">
          Primary
        </Button>
        <Button disabled status="primary" href="#">
          Primary
        </Button>
        <Button disabled status="danger" href="#">
          Danger
        </Button>
        <Button disabled status="success" href="#">
          Success
        </Button>
        <Button disabled status="warning" href="#">
          Warning
        </Button>
      </Space>
    </>
  );
}
`},89593:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
import { Button, Divider, Space } from '@sqi-ui/web';
import { AddIcon } from '@sqi-ui/icons';

export default function Demo() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  return (
    <>
      <Space>
        <Button loading>Default</Button>
        <Button type="primary" loading>
          Primary
        </Button>
        <Button loading status="primary">
          Primary
        </Button>
        <Button loading status="danger">
          Danger
        </Button>
        <Button loading status="success">
          Success
        </Button>
        <Button loading status="warning">
          Warning
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" icon={<AddIcon />} loading={loading1} onClick={() => setLoading1(!loading1)} />
        <Button type="primary" icon={<AddIcon />} loading={loading2} onClick={() => setLoading2(!loading2)}>
          Click
        </Button>
        <Button type="primary" loading={loading3} onClick={() => setLoading3(!loading3)}>
          Click
        </Button>
      </Space>
    </>
  );
}
`},95453:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <Button type="primary" size="sm">
        SM
      </Button>
      <Button type="primary">MD</Button>
      <Button type="primary" size="lg">
        LG
      </Button>
    </Space>
  );
}
`},42791:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <h5>Outline</h5>
      <Space>
        <Button variant="outline">Default</Button>
        <Button variant="outline" type="primary">
          Primary
        </Button>
        <Button variant="outline" status="danger">
          Danger
        </Button>
        <Button variant="outline" status="success">
          Success
        </Button>
        <Button variant="outline" status="warning">
          Warning
        </Button>
      </Space>
      <h4>Text</h4>
      <Space>
        <Button variant="text">Default</Button>
        <Button variant="text" type="primary">
          Primary
        </Button>
        <Button variant="text" status="danger">
          Danger
        </Button>
        <Button variant="text" status="success">
          Success
        </Button>
        <Button variant="text" status="warning">
          Warning
        </Button>
      </Space>
      <h5>Dashed</h5>
      <Space>
        <Button variant="dashed">Default</Button>
        <Button variant="dashed" type="primary">
          Primary
        </Button>
        <Button variant="dashed" status="danger">
          Danger
        </Button>
        <Button variant="dashed" status="success">
          Success
        </Button>
        <Button variant="dashed" status="warning">
          Warning
        </Button>
      </Space>
    </>
  );
}
`},18359:function(I,t){"use strict";t.Z=`import React from 'react';

export default function CardBlock({ item, checked }: { item: React.ReactNode; checked: boolean }) {
  const styles: React.CSSProperties = {
    padding: '10px 16px',
    borderRadius: '4px',
    width: '200px',
    boxSizing: 'border-box',
    border: \`1px solid \${checked ? 'var(--sqi-brand-color)' : 'var(--sqi-component-border)'}\`,
    color: checked ? 'var(--sqi-brand-color)' : '',
    backgroundColor: checked ? 'var(--sqi-brand-color-1)' : '',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s',
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '20px 20px 0 0',
    borderColor: 'var(--sqi-brand-color) transparent transparent transparent',
    opacity: checked ? 1 : 0,
    transition: 'all 0.3s',
  };

  return (
    <div style={styles}>
      <div style={iconStyle} />
      <strong>{item}</strong>
      <div>this is a checkbox</div>
    </div>
  );
}
`},52648:function(I,t){"use strict";t.Z=`import React from 'react';
import { Checkbox } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox indeterminate>Indeterminate</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled indeterminate>
        Indeterminate
      </Checkbox>
      <Checkbox checked disabled>
        Checked
      </Checkbox>
    </>
  );
}
`},10654:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
import { Button, Checkbox, type CheckboxProps } from '@sqi-ui/web';

export default function Demo() {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => setChecked(!checked);

  const toggleDisable = () => setDisabled(!disabled);

  const onChange: CheckboxProps['onChange'] = (e) => {
    setChecked(e.target.checked);
  };

  const label = \`\${checked ? 'Checked' : 'Unchecked'}-\${disabled ? 'Disabled' : 'Enabled'}\`;

  return (
    <>
      <p>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </Checkbox>
      </p>
      <Button type="primary" size="sm" onClick={toggleChecked}>
        {!checked ? 'Check' : 'Uncheck'}
      </Button>
      <Button style={{ margin: '0 10px' }} type="primary" size="sm" onClick={toggleDisable}>
        {!disabled ? 'Disable' : 'Enable'}
      </Button>

      <span style={{ marginLeft: 12 }}>
        {JSON.stringify(checked)} {JSON.stringify(disabled)}
      </span>
    </>
  );
}
`},302:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Divider } from '@sqi-ui/web';
import CardBlock from './_card-block';

export default function Demo() {
  return (
    <>
      <Divider text="Custom single render" align="left" />
      <Checkbox>
        {({ checked }) => {
          return (
            <Button tabIndex={-1} type={checked ? 'primary' : 'default'}>
              Custom
            </Button>
          );
        }}
      </Checkbox>

      <Divider text="Custom checkbox group render" align="left" />
      <Checkbox.Group defaultValue={['Beijing']}>
        {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
          return (
            <Checkbox key={item} value={item}>
              {({ checked }) => (
                <Button tabIndex={-1} key={item} type="primary" variant={checked ? 'default' : 'outline'}>
                  {item}
                </Button>
              )}
            </Checkbox>
          );
        })}
      </Checkbox.Group>

      <Divider text="Custom checkbox group render" align="left" />
      <Checkbox.Group defaultValue={['Beijing']}>
        {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
          return (
            <Checkbox value={item} key={item}>
              {({ checked }) => <CardBlock item={item} checked={checked} />}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </>
  );
}
`},93672:function(I,t){"use strict";t.Z=`import React from 'react';
import { Checkbox, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space direction="vertical">
      <Checkbox.Group defaultValue={['Apple']}>
        <Checkbox value="Apple">Apple</Checkbox>
        <Checkbox value="Pear">Pear</Checkbox>
        <Checkbox value="Orange">Orange</Checkbox>
      </Checkbox.Group>

      <Checkbox.Group defaultValue={['Orange']}>
        <Checkbox value="Apple">Apple</Checkbox>
        <Checkbox value="Pear">Pear</Checkbox>
        <Checkbox value="Orange">Orange</Checkbox>
      </Checkbox.Group>

      <Checkbox.Group disabled defaultValue={['Apple']}>
        <Checkbox value="Apple">Apple</Checkbox>
        <Checkbox value="Pear">Pear</Checkbox>
        <Checkbox value="Orange">Orange</Checkbox>
      </Checkbox.Group>
    </Space>
  );
}
`},42331:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
import { Checkbox, Divider, type CheckboxProps, type CheckboxValue } from '@sqi-ui/web';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export default function Demo() {
  const [checkedList, setCheckedList] = useState<CheckboxValue[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: CheckboxValue[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} />
      <Divider />
      <Checkbox.Group value={checkedList} onChange={onChange}>
        {plainOptions.map((option) => (
          <Checkbox key={option} value={option}>
            {option}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </>
  );
}
`},37544:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
import { Button, Divider, Checkbox, type CheckboxValue } from '@sqi-ui/web';
import CardBlock from './_card-block';

export default function Demo() {
  const [value, setValue] = useState<CheckboxValue[]>([3]);

  return (
    <>
      <Divider align="left" text="Base" />
      <Checkbox.Group defaultValue={['Apple']} options={['Apple', 'Pear', 'Orange']} />

      <Divider align="left" text="Custom Checkbox group render" />
      <Checkbox.Group
        defaultValue={[3]}
        options={[
          { label: 'Apple', value: 1 },
          { label: 'Pear', value: 2 },
          { label: 'Orange', value: 3 },
        ]}
        renderOption={(params) => (
          <Button tabIndex={-1} type="primary" variant={params.checked ? 'default' : 'outline'}>
            {params.label}
          </Button>
        )}
      />

      <Divider align="left" text="Custom Checkbox group render and control state" />
      <Checkbox.Group
        value={value}
        options={[
          { label: 'Apple', value: 1 },
          { label: 'Pear', value: 2 },
          { label: 'Orange', value: 3 },
        ]}
        onChange={setValue}
        renderOption={(params) => <CardBlock item={params.label} checked={params.checked} />}
      />
      <span style={{ marginLeft: 16 }}>control value is: {value}</span>
    </>
  );
}
`},77613:function(I,t){"use strict";t.Z=`import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sqi',
  iconPrefix: 'sqi',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
`},71841:function(I,t){"use strict";t.Z=`import React from 'react';
import { ConfigProvider, Button } from '@sqi-ui/web';

export default function Demo() {
  return (
    <ConfigProvider
      size="lg"
      componentConfig={{
        Button: {
          status: 'danger',
        },
      }}
    >
      <Button>Button</Button>
    </ConfigProvider>
  );
}
`},77322:function(I,t){"use strict";t.Z=`import React from 'react';
import { ConfigProvider, Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <Button type="primary">Button</Button>
      {/* use ConfigProvider */}
      <ConfigProvider size="lg">
        <Space>
          <Button type="primary">Button</Button>

          <ConfigProvider
            size="sm"
            componentConfig={{
              Button: {
                status: 'success',
              },
            }}
          >
            <Button type="primary">Button</Button>
          </ConfigProvider>
        </Space>
      </ConfigProvider>
    </Space>
  );
}
`},54117:function(I,t){"use strict";t.Z=`import React from 'react';
import { Divider } from '@sqi-ui/web';

const text = Array.from({ length: 5 })
  .map(() => 'Hello, my name is LiHua')
  .join('! ');

export default function Demo() {
  return (
    <div style={{ width: 500 }}>
      {text}
      <Divider></Divider>
      {text}
      <Divider></Divider>
      {text}
      <Divider></Divider>
    </div>
  );
}
`},65325:function(I,t){"use strict";t.Z=`import React from 'react';
import { Divider } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      sing
      <Divider direction="vertical" />
      jump
      <Divider direction="vertical" />
      rap
      <Divider direction="vertical" />
      basketball
    </>
  );
}
`},58549:function(I,t){"use strict";t.Z=`import React from 'react';
import { Divider } from '@sqi-ui/web';

const text = Array.from({ length: 5 })
  .map(() => 'Hello, my name is LiHua')
  .join('! ');

export default function Demo() {
  return (
    <div style={{ width: 500 }}>
      {text}
      <Divider>Children WithText</Divider>
      {text}
      <Divider text="Text WithText" align="left" />
      {text}
      <Divider align="right" dashed>
        <span style={{ fontWeight: 600 }}>Dashed WithText</span>
      </Divider>
    </div>
  );
}
`},95921:function(I,t){"use strict";t.Z=`import React from 'react';
import { Col, Divider, Row } from '@sqi-ui/web';
import BoxDemo from './box-demo';

export default function Demo() {
  return (
    <>
      <Divider align="left">align start</Divider>
      <Row align="start" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={6}>
          <BoxDemo colorPalette={5} height={100}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={6} height={50}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={5} height={120}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={6} height={80}>
            col-6
          </BoxDemo>
        </Col>
      </Row>

      <Divider align="left">align center</Divider>
      <Row align="center" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={6}>
          <BoxDemo colorPalette={5} height={100}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={6} height={50}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={5} height={120}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={6} height={80}>
            col-6
          </BoxDemo>
        </Col>
      </Row>

      <Divider align="left">align bottom</Divider>
      <Row align="end" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={6}>
          <BoxDemo colorPalette={5} height={100}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={6} height={50}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={5} height={120}>
            col-6
          </BoxDemo>
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={6} height={80}>
            col-6
          </BoxDemo>
        </Col>
      </Row>
    </>
  );
}
`},9098:function(I,t){"use strict";t.Z=`import React from 'react';
import { Row, Col } from '@sqi-ui/web';
import BoxDemo from './box-demo';

export default function Demo() {
  return (
    <>
      <Row>
        <Col span={24}>
          <BoxDemo colorPalette={5} height={40} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <BoxDemo colorPalette={5} height={40} />
        </Col>
        <Col span={12}>
          <BoxDemo colorPalette={6} height={40} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>
          <BoxDemo colorPalette={5} height={40} />
        </Col>
        <Col span={8}>
          <BoxDemo colorPalette={6} height={40} />
        </Col>
        <Col span={8}>
          <BoxDemo colorPalette={5} height={40} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={6}>
          <BoxDemo colorPalette={5} height={40} />
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={6} height={40} />
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={5} height={40} />
        </Col>
        <Col span={6}>
          <BoxDemo colorPalette={6} height={40} />
        </Col>
      </Row>
    </>
  );
}
`},93720:function(I,t){"use strict";t.Z=`import React from 'react';

// this is a demo component, not api example
export default function BoxDemo({
  colorPalette = 6,
  children,
  height,
}: {
  colorPalette?: number;
  children?: React.ReactNode;
  height?: number;
}) {
  return (
    <div
      style={{
        height: height ? height : 'auto',
        padding: 12,
        backgroundColor: \`var(--sqi-brand-color-\${colorPalette})\`,
        color: 'var(--sqi-text-color-anti)',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
}
`},8872:function(I,t){"use strict";t.Z=`import React from 'react';
import { Row, Col, Divider } from '@sqi-ui/web';
import BoxDemo from './box-demo';

export default function Demo() {
  return (
    <>
      <Divider align="left">Percentage columns</Divider>
      <Row>
        <Col flex={2}>
          <BoxDemo colorPalette={5}>2 / 5</BoxDemo>
        </Col>
        <Col flex={3}>
          <BoxDemo colorPalette={6}>3 / 5</BoxDemo>
        </Col>
      </Row>
      <Divider align="left">Fill rest</Divider>
      <Row>
        <Col flex="100px">
          <BoxDemo colorPalette={5}>100px</BoxDemo>
        </Col>
        <Col flex="auto">
          <BoxDemo colorPalette={6}>Fill Rest</BoxDemo>
        </Col>
      </Row>
      <Divider align="left">Raw flex style</Divider>
      <Row>
        <Col flex="1 1 200px">
          <BoxDemo colorPalette={5}>1 1 200px</BoxDemo>
        </Col>
        <Col flex="0 1 300px">
          <BoxDemo colorPalette={6}>0 1 300px</BoxDemo>
        </Col>
      </Row>
      <br />
      <Row wrap={false}>
        <Col flex="none">
          <BoxDemo colorPalette={5}>none</BoxDemo>
        </Col>
        <Col flex="auto">
          <BoxDemo colorPalette={6}>auto with no-wrap</BoxDemo>
        </Col>
      </Row>
    </>
  );
}
`},96507:function(I,t){"use strict";t.Z=`import React from 'react';
import { Row, Col, Divider } from '@sqi-ui/web';
import BoxDemo from './box-demo';

export default function Demo() {
  return (
    <>
      <Divider text="Horizontal" align="left" />
      <Row gutter={16}>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
      </Row>

      <Divider text="Horizontal and Vertical" align="left" />
      <Row gutter={[16, 8]}>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
      </Row>

      <Divider text="Responsive (try resize or zoom window)" align="left" />
      <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 32, xl: 64, xxl: 128 }}>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
        <Col span={8}>
          <BoxDemo>col-8</BoxDemo>
        </Col>
      </Row>
    </>
  );
}
`},17153:function(I,t){"use strict";t.Z=`import React from 'react';
import { Col, Divider, Row } from '@sqi-ui/web';
import BoxDemo from './box-demo';

export default function Demo() {
  return (
    <>
      <Divider align="left">element align left</Divider>
      <Row justify="start" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
      </Row>

      <Divider align="left">element align center</Divider>
      <Row justify="center" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
      </Row>

      <Divider align="left">element align right</Divider>
      <Row justify="end" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
      </Row>

      <Divider align="left">element monospaced arrangement</Divider>
      <Row justify="space-between" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
      </Row>

      <Divider align="left">element align full</Divider>
      <Row justify="space-around" style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={5}>col-4</BoxDemo>
        </Col>
        <Col span={4}>
          <BoxDemo colorPalette={6}>col-4</BoxDemo>
        </Col>
      </Row>
    </>
  );
}
`},78066:function(I,t){"use strict";t.Z=`import React from 'react';
import { Row, Col } from '@sqi-ui/web';

export default function Demo() {
  return (
    <div style={{ width: '100%' }}>
      <Row style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={8}>
          <Placeholder color={5}>col - 8</Placeholder>
        </Col>
        <Col span={8} offset={8}>
          <Placeholder color={6}>col - 8 | offset - 8</Placeholder>
        </Col>
      </Row>
      <br />
      <Row style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={6} offset={8}>
          <Placeholder color={5}> col - 6 | offset - 8</Placeholder>
        </Col>
        <Col span={6} offset={4}>
          <Placeholder color={6}>col - 6 | offset - 4</Placeholder>
        </Col>
      </Row>
      <br />
      <Row style={{ backgroundColor: 'var(--sqi-bg-color-component)' }}>
        <Col span={12} offset={8}>
          <Placeholder color={5}>col - 12 | offset - 8</Placeholder>
        </Col>
      </Row>
    </div>
  );
}

function Placeholder({ children, color }: { children?: React.ReactNode; color: number }) {
  const bg = \`var(--sqi-brand-color-\${color})\`;

  return (
    <div
      style={{
        padding: '12px 0',
        backgroundColor: bg,
        color: 'var(--sqi-text-color-anti)',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
`},82986:function(I,t){"use strict";t.Z=`import React from 'react';
import { Col, Divider, Row } from '@sqi-ui/web';
import BoxDemo from './box-demo';

export default function Demo() {
  return (
    <>
      <Divider align="left" text="Basic" />
      <Row>
        <Col span={6} order={4}>
          <BoxDemo colorPalette={5}>1 col-order-4</BoxDemo>
        </Col>
        <Col span={6} order={3}>
          <BoxDemo colorPalette={6}>2 col-order-3</BoxDemo>
        </Col>
        <Col span={6} order={2}>
          <BoxDemo colorPalette={5}>3 col-order-2</BoxDemo>
        </Col>
        <Col span={6} order={1}>
          <BoxDemo colorPalette={6}>4 col-order-1</BoxDemo>
        </Col>
      </Row>
      <Divider align="left" text="Responsive (try resize or zoom window)" />
      <Row>
        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
          <BoxDemo colorPalette={5}>1 col-order-responsive</BoxDemo>
        </Col>
        <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
          <BoxDemo colorPalette={6}>2 col-order-responsive</BoxDemo>
        </Col>
        <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
          <BoxDemo colorPalette={5}>3 col-order-responsive</BoxDemo>
        </Col>
        <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
          <BoxDemo colorPalette={6}>4 col-order-responsive</BoxDemo>
        </Col>
      </Row>
    </>
  );
}
`},23972:function(I,t){"use strict";t.Z=`import React from 'react';
import { Col, Divider, Row } from '@sqi-ui/web';
import BoxDemo from './box-demo';

export default function Demo() {
  return (
    <>
      <Divider align="left">Col responsive</Divider>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <BoxDemo colorPalette={5}>responsive col</BoxDemo>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          <BoxDemo colorPalette={6}>responsive col</BoxDemo>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <BoxDemo colorPalette={5}>responsive col</BoxDemo>
        </Col>
      </Row>

      <Divider align="left">support other props to responsive</Divider>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <BoxDemo colorPalette={5}>responsive col</BoxDemo>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <BoxDemo colorPalette={6}>responsive col</BoxDemo>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <BoxDemo colorPalette={5}>responsive col</BoxDemo>
        </Col>
      </Row>
    </>
  );
}
`},64705:function(I,t){"use strict";t.Z=`import React from 'react';
import { AddIcon, SearchIcon } from '@sqi-ui/icons';
import { Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <AddIcon />
      <SearchIcon />

      <SearchIcon rotate={90} />
      <AddIcon spin />
    </Space>
  );
}
`},36848:function(I,t){"use strict";t.Z=`import React from 'react';
import { SearchIcon } from '@sqi-ui/icons';
import { Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <div style={{ color: 'orangered' }}>
        <SearchIcon />
      </div>
      <SearchIcon style={{ color: 'blue' }} />
    </Space>
  );
}
`},66135:function(I,t){"use strict";t.Z=`import React from 'react';
import Icon from '@sqi-ui/icons';

export default function Demo() {
  return <Icon svg={<CustomIcon />} style={{ color: 'red' }} />;
}

function CustomIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-angry-icon lucide-angry"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <path d="M7.5 8 10 9" />
      <path d="m14 9 2.5-1" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
    </svg>
  );
}
`},34941:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input addonBefore="https://" placeholder="Please enter" />
      <br />
      <Input addonAfter=".com" placeholder="Please enter" />
      <br />
      <Input addonBefore="https://" addonAfter=".com" placeholder="Please enter" />
    </>
  );
}
`},80488:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';
import { AddIcon, ChevronDownIcon, SearchIcon, UploadIcon } from '@sqi-ui/icons';

export default function Demo() {
  return (
    <>
      <Input prefix={<SearchIcon />} placeholder="Please enter" />
      <br />
      <Input suffix={<SearchIcon />} placeholder="Please enter" />
      <br />
      <Input prefix={<SearchIcon />} suffix={<AddIcon />} placeholder="Please enter" />
      <br />
      <Input
        addonBefore="+86"
        addonAfter={<ChevronDownIcon />}
        prefix={<AddIcon />}
        suffix={<UploadIcon />}
        placeholder="Please enter"
      />
    </>
  );
}
`},90822:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input align="left" defaultValue="this is value" />
      <br />
      <Input align="center" defaultValue="this is value" />
      <br />
      <Input align="right" defaultValue="this is value" />
    </>
  );
}
`},25623:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input placeholder="Please enter" />
      <br />
      <Input readOnly placeholder="readonly input" />
      <br />
      <Input defaultValue="this is value" allowClear placeholder="Allow clear" />
      <br />
      <Input placeholder="Disabled enter" disabled />
    </>
  );
}
`},37604:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input placeholder="Please enter" maxLength={10} />
      <br />
      <Input placeholder="Please enter" defaultValue="this is long value" maxLength={10} />
      <br />
      <Input
        placeholder="Please enter"
        defaultValue="this is long value"
        maxLength={{
          length: 10,
          errorOnly: true,
        }}
      />
      <br />
      <Input
        placeholder="Please enter"
        defaultValue="hidden limit tip"
        maxLength={{
          length: 10,
          errorOnly: true,
          showLimit: false,
        }}
      />
    </>
  );
}
`},31475:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Divider, Input, Space } from '@sqi-ui/web';

export default function Demo() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <>
      <Divider align="left" text="Default" />
      <Input type="password" placeholder="Please enter" />
      <Divider align="left" text="Controlled toggle password" />
      <Space>
        <Input
          defaultValue="123456"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
          type="password"
          placeholder="Please enter"
        />
        <Button type="primary" onClick={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? 'Hide' : 'Show'}
        </Button>
      </Space>
      <Divider align="left" text="Custom Visibility Icon" />
      <Input
        defaultValue="123456"
        visibilityToggle={{
          renderIcon: (visible) => (visible ? 'Hide' : 'Show'),
        }}
        type="password"
        placeholder="Please enter"
      />
    </>
  );
}
`},38082:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input size="lg" placeholder="large size" />
      <br />
      <Input placeholder="default size" />
      <br />
      <Input size="sm" placeholder="small size" />
    </>
  );
}
`},13589:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input placeholder="default status" />
      <br />
      <Input placeholder="success status" status="success" />
      <br />
      <Input placeholder="warning status" status="warning" />
      <br />
      <Input placeholder="error status" status="error" />
      <br />
    </>
  );
}
`},56596:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input tips="this is a default tip" placeholder="default tip" />
      <br />
      <Input tips="this is a success tip" status="success" placeholder="success tip" />
      <br />
      <Input tips="this is a warning tip" status="warning" placeholder="warning tip" />
      <br />
      <Input tips="this is a error tip" status="error" placeholder="error tip" />
      <br />
    </>
  );
}
`},8899:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Input variant="outline" placeholder="Please enter" />
      <br />
      <Input variant="borderless" placeholder="Please enter" />
      <br />
      <Input variant="underline" placeholder="Please enter" />
    </>
  );
}
`},61963:function(I,t){"use strict";t.Z=`import React from 'react';

export default function CardBlock({ item, checked }: { item: React.ReactNode; checked: boolean }) {
  const styles: React.CSSProperties = {
    padding: '10px 16px',
    borderRadius: '4px',
    width: '200px',
    boxSizing: 'border-box',
    border: \`1px solid \${checked ? 'var(--sqi-brand-color)' : 'var(--sqi-component-border)'}\`,
    color: checked ? 'var(--sqi-brand-color)' : '',
    backgroundColor: checked ? 'var(--sqi-brand-color-1)' : '',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s',
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '20px 20px 0 0',
    borderColor: 'var(--sqi-brand-color) transparent transparent transparent',
    opacity: checked ? 1 : 0,
    transition: 'all 0.3s',
  };

  return (
    <div style={styles}>
      <div style={iconStyle} />
      <strong>{item}</strong>
      <div>this is a radio</div>
    </div>
  );
}
`},31932:function(I,t){"use strict";t.Z=`import React from 'react';
import { Divider, Radio } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Divider text="radio" align="left" />
      <Radio.Group defaultValue={3}>
        <Radio value={1}>Radio</Radio>
        <Radio value={2}>Radio</Radio>
        <Radio value={3}>Radio</Radio>
      </Radio.Group>

      <Divider text="Outline radio button" align="left" />
      <Radio.Group defaultValue={3}>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3}>Radio</Radio.Button>
      </Radio.Group>

      <Divider text="Filled radio button" align="left" />
      <Radio.Group buttonVariant="filled" defaultValue={3}>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3}>Radio</Radio.Button>
      </Radio.Group>
    </>
  );
}
`},71038:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
import { Button, Divider, Radio, type RadioChangeEvent } from '@sqi-ui/web';

export default function Demo() {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState<string>('Radio 1');

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value as string);
  };

  return (
    <>
      <Divider text="Base" align="left" />
      <Radio>Radio</Radio>
      <Radio defaultChecked>DefaultChecked</Radio>

      <Divider text="Control State" align="left" />
      <Radio disabled={disabled}>Disabled</Radio>
      <Radio checked disabled={disabled}>
        Disabled Checked
      </Radio>
      <Button type="primary" style={{ marginLeft: 8 }} onClick={() => setDisabled(!disabled)}>
        Toggle Disabled
      </Button>

      <Divider text="Control state from Radio Group" align="left" />
      <Radio.Group value={value} onChange={handleChange}>
        <Radio value="Radio 1">Radio 1</Radio>
        <Radio value="Radio 2">Radio 2</Radio>
        <Radio value="Radio 3">Radio 3</Radio>
      </Radio.Group>
      <span style={{ marginLeft: 8 }}>value is : {value}</span>
    </>
  );
}
`},2930:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Divider, Radio } from '@sqi-ui/web';
import CardBlock from './_card-block';

export default function Demo() {
  return (
    <>
      <Divider text="Custom single render" align="left" />
      <Radio>
        {({ checked }) => {
          return (
            <Button tabIndex={-1} type={checked ? 'primary' : 'default'}>
              Custom
            </Button>
          );
        }}
      </Radio>

      <Divider text="Custom radio group render" align="left" />
      <Radio.Group defaultValue="Beijing">
        {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
          return (
            <Radio key={item} value={item}>
              {({ checked }) => (
                <Button tabIndex={-1} key={item} type="primary" variant={checked ? 'default' : 'outline'}>
                  {item}
                </Button>
              )}
            </Radio>
          );
        })}
      </Radio.Group>

      <Divider text="Custom radio group render" align="left" />
      <Radio.Group defaultValue="Beijing">
        {['Beijing', 'Shanghai', 'Guangzhou'].map((item) => {
          return (
            <Radio value={item} key={item}>
              {({ checked }) => <CardBlock item={item} checked={checked} />}
            </Radio>
          );
        })}
      </Radio.Group>
    </>
  );
}
`},8910:function(I,t){"use strict";t.Z=`import React from 'react';
import { Divider, Radio } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Divider text="Outline(default)" align="left" />
      <Radio.Group defaultValue={3}>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3} disabled>
          Disabled Checked
        </Radio.Button>
        <Radio.Button value={4} disabled>
          Disabled
        </Radio.Button>
      </Radio.Group>

      <Divider text="Disabled all outline" align="left" />
      <Radio.Group defaultValue={3} disabled>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3} disabled={false}>
          Undisabled Checked
        </Radio.Button>
        <Radio.Button value={4}>Disabled</Radio.Button>
      </Radio.Group>

      <Divider text="filled" align="left" />
      <Radio.Group buttonVariant="filled" defaultValue={3}>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3} disabled>
          Disabled Checked
        </Radio.Button>
        <Radio.Button value={4} disabled>
          Disabled
        </Radio.Button>
      </Radio.Group>

      <Divider text="Disabled all filled" align="left" />
      <Radio.Group disabled buttonVariant="filled" defaultValue={3}>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3} disabled={false}>
          Undisabled Checked
        </Radio.Button>
        <Radio.Button value={4}>Disabled</Radio.Button>
      </Radio.Group>
    </>
  );
}
`},27389:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Divider, Radio } from '@sqi-ui/web';
import CardBlock from './_card-block';

export default function Demo() {
  const [value, setValue] = React.useState(3);

  return (
    <>
      <Divider align="left" text="Base" />
      <Radio.Group defaultValue="Radio 1" options={['Radio 1', 'Radio 2', 'Radio 3']} />

      <Divider align="left" text="Button appearance" />
      <Radio.Group
        defaultValue={3}
        appearance="button"
        buttonVariant="filled"
        options={[
          { label: 'Radio 1', value: 1 },
          { label: 'Radio 2', value: 2 },
          { label: 'Radio 3', value: 3 },
        ]}
      />

      <Divider align="left" text="Custom radio group render" />
      <Radio.Group
        defaultValue={3}
        options={[
          { label: 'Radio 1', value: 1 },
          { label: 'Radio 2', value: 2 },
          { label: 'Radio 3', value: 3 },
        ]}
        renderOption={(params) => (
          <Button tabIndex={-1} type="primary" variant={params.checked ? 'default' : 'outline'}>
            {params.label}
          </Button>
        )}
      />

      <Divider align="left" text="Custom radio group render and control state" />
      <Radio.Group
        value={value}
        options={[
          { label: 'Radio 1', value: 1 },
          { label: 'Radio 2', value: 2 },
          { label: 'Radio 3', value: 3 },
        ]}
        onChange={(e) => setValue(e.target.value as number)}
        renderOption={(params) => <CardBlock item={params.label} checked={params.checked} />}
      />
      <span style={{ marginLeft: 16 }}>control value is: {value}</span>
    </>
  );
}
`},32105:function(I,t){"use strict";t.Z=`import React from 'react';
import { Divider, Radio } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Divider text="Small radio" align="left" />
      <Radio.Group size="sm" defaultValue={1}>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3}>Radio</Radio.Button>
      </Radio.Group>

      <Divider text="Normal radio" align="left" />
      <Radio.Group size="md" defaultValue={1}>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3}>Radio</Radio.Button>
      </Radio.Group>

      <Divider text="Large radio" align="left" />
      <Radio.Group size="lg" defaultValue={1}>
        <Radio.Button value={1}>Radio</Radio.Button>
        <Radio.Button value={2}>Radio</Radio.Button>
        <Radio.Button value={3}>Radio</Radio.Button>
      </Radio.Group>
    </>
  );
}
`},75593:function(I,t){"use strict";t.Z=`import React from 'react';
import { Radio, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <Radio.Group defaultValue={3}>
        <Space size="sm" direction="vertical">
          <Radio value={1}>Radio</Radio>
          <Radio value={2}>Radio</Radio>
          <Radio value={3}>Radio</Radio>
        </Space>
      </Radio.Group>

      <Radio.Group style={{ display: 'inline-flex', flexDirection: 'column', gap: 8 }} defaultValue={3}>
        <Radio value={1}>Radio</Radio>
        <Radio value={2}>Radio</Radio>
        <Radio value={3}>Radio</Radio>
      </Radio.Group>
    </>
  );
}
`},74317:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <Space style={{ border: '1px solid blue' }}>
        center
        <Button type="primary">Item1</Button>
        <PlaceholderBlock />
      </Space>
      <Space align="start" style={{ border: '1px solid blue' }}>
        start
        <Button type="primary">Item1</Button>
        <PlaceholderBlock />
      </Space>
      <Space align="end" style={{ border: '1px solid blue' }}>
        end
        <Button type="primary">Item1</Button>
        <PlaceholderBlock />
      </Space>
      <Space align="baseline" style={{ border: '1px solid blue' }}>
        baseline
        <Button type="primary">Item1</Button>
        <PlaceholderBlock />
      </Space>
    </Space>
  );
}

function PlaceholderBlock() {
  return <div style={{ padding: '32px 12px 16px', backgroundColor: 'powderblue' }}>Block</div>;
}
`},7420:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <>
      <h5>Small gap </h5>
      <Space size="sm">
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
        <Button type="primary">Item3</Button>
      </Space>
      <h5>Middle gap (default)</h5>
      <Space>
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
        <Button type="primary">Item3</Button>
      </Space>
      <h5>Large gap</h5>
      <Space size="lg">
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
        <Button type="primary">Item3</Button>
      </Space>
      <h5>Custom gap</h5>
      <Space size={64}>
        <Button type="primary">Item1</Button>
        <Button type="primary">Item2</Button>
        <Button type="primary">Item3</Button>
      </Space>
    </>
  );
}
`},39113:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space direction="vertical">
      <Button type="primary">Item1</Button>
      <Button type="primary">Item2</Button>
      <Button type="primary">Item3</Button>
    </Space>
  );
}
`},17474:function(I,t){"use strict";t.Z=`import React from 'react';
import { Space, Divider } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space size={4} split={<Divider direction="vertical" />}>
      <span>text</span>
      <span>text</span>
      <span>text</span>
    </Space>
  );
}
`},24811:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space wrap>
      {Array.from({ length: 20 }).map((_, index) => (
        <Button key={index} type="primary">
          Item{index + 1}
        </Button>
      ))}
    </Space>
  );
}
`},34167:function(I,t){"use strict";t.Z=`import React, { forwardRef } from 'react';
import styles from './demo.module.css';

interface ComponentProps {
  children: React.ReactNode;
  size?: number;
  backgroundColor?: string;
}
export const Component = forwardRef<HTMLDivElement, ComponentProps>(({ size, backgroundColor, children }, ref) => {
  return (
    <div ref={ref} className={styles.box} style={{ width: size + 'px', height: size + 'px', backgroundColor }}>
      {children}
    </div>
  );
});

Component.displayName = 'Component';
`},73739:function(I,t){"use strict";t.Z=`import React from 'react';
import { Trigger, Radio, Divider, Space, Input, Checkbox } from '@sqi-ui/web';
import type { RadioChangeEvent, TriggerDirection, CheckboxValue } from '@sqi-ui/web';
import { Component } from './_wrapper';
import styles from './demo.module.css';

const positions = [
  'top',
  'right',
  'bottom',
  'left',
  'top-start',
  'top-end',
  'right-start',
  'right-end',
  'bottom-start',
  'bottom-end',
  'left-start',
  'left-end',
];

export default function Demo() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [direction, setDirection] = React.useState<TriggerDirection>('bottom');
  const [detectEdge, setDetectEdge] = React.useState<string[]>(['flip', 'shift']);
  const [offsetX, setOffsetX] = React.useState<string>();
  const [offsetY, setOffsetY] = React.useState<string>();
  const [showArrow, setShowArrow] = React.useState(true);

  React.useLayoutEffect(() => {
    containerRef.current?.scrollTo(containerRef.current.clientWidth + 115, containerRef.current.clientHeight);
  }, [containerRef]);

  function changeDirection(e: RadioChangeEvent) {
    setDirection(e.target.value as TriggerDirection);
  }

  function changeDetectEdge(value: CheckboxValue[]) {
    setDetectEdge(value as string[]);
  }

  return (
    <>
      <div ref={containerRef} className={styles.container}>
        <div className={styles['container-scroll']}>
          <Trigger
            enableFlip={detectEdge.includes('flip')}
            enableShift={detectEdge.includes('shift')}
            offset={{ x: Number(offsetX), y: Number(offsetY) }}
            direction={direction}
            getContainer={() => containerRef.current}
            arrow={showArrow ? <div style={{ width: 12, height: 12, backgroundColor: 'red' }}></div> : undefined}
            motion={{ initialEntered: true }}
            popper={
              <Component size={110} backgroundColor="var(--sqi-bg-color-container)">
                Popper Element
              </Component>
            }
          >
            <Component size={80} backgroundColor="var(--sqi-success-color)">
              Reference Element
            </Component>
          </Trigger>
        </div>
      </div>

      <Divider style={{ margin: '8px 0' }} text="Position" align="left" />
      <Radio.Group value={direction} onChange={changeDirection} options={positions} style={{ marginBottom: 10 }} />

      <Divider style={{ margin: '8px 0' }} text="Detect Edge" align="left" />
      <Checkbox.Group value={detectEdge} onChange={changeDetectEdge} options={['flip', 'shift']} />

      <Divider style={{ margin: '8px 0' }} text="Arrow" align="left" />
      <Checkbox checked={showArrow} onChange={(e) => setShowArrow(e.target.checked)}>
        Enable Arrow
      </Checkbox>

      <Divider style={{ margin: '8px 0' }} text="Offset" align="left" />
      <Space>
        <Input
          prefix="offsetX"
          value={offsetX}
          onChange={setOffsetX}
          disabled={direction.startsWith('top') || direction.startsWith('bottom')}
        />
        <Input
          prefix="offsetY"
          value={offsetY}
          onChange={setOffsetY}
          disabled={direction.startsWith('left') || direction.startsWith('right')}
        />
      </Space>
    </>
  );
}
`},91778:function(I,t){"use strict";t.Z=`.container {
  margin: auto;
  background-color: var(--sqi-bg-color-secondary-container);
  height: 400px;
  width: 80%;
  max-width: 600px;
  overflow: auto;
  position: relative;
  border-radius: 5px;
  box-shadow: inset 0 0 6px 0 var(--sqi-gray-color-8);
  scrollbar-width: thin;
}

.container-scroll {
  width: 350%;
  height: 300%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  box-shadow: 0 0 6px #becadb;
}

.sqi-demo-motion {
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.sqi-demo-motion.sqi-demo-motion-preEnter,
.sqi-demo-motion.sqi-demo-motion-exiting {
  opacity: 0;
  transform: scale(0.5);
}

.sqi-demo-motion.sqi-demo-motion-entered {
  opacity: 1;
  transform: scale(1);
}

.sqi-demo-motion.sqi-demo-motion-exited {
  display: none;
}
`},96443:function(I,t){"use strict";t.Z=`.sqi-trigger-demo-motion {
  /* overflow: hidden; */
  transition: opacity 0.5s ease-in-out;
}

.sqi-trigger-demo-motion.sqi-trigger-demo-motion-preEnter,
.sqi-trigger-demo-motion.sqi-trigger-demo-motion-exiting {
  opacity: 0;
}

.sqi-trigger-demo-motion.sqi-trigger-demo-motion-entered {
  opacity: 1;
}

.sqi-trigger-demo-motion.sqi-trigger-demo-motion-exited {
  display: none;
}
`},41010:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Input, Space, Trigger, type TriggerProps } from '@sqi-ui/web';
import { Component } from './_wrapper';
import './motion.css';

export default function Demo() {
  return (
    <Space>
      <Container>
        <Button type="primary">Hover me</Button>
      </Container>
      <Container trigger="click">
        <Button type="primary">Click me</Button>
      </Container>
      <Container trigger="focus">
        <Input placeholder="Focus me" />
      </Container>
      <Container trigger="context-menu">
        <Button type="primary">Right click me</Button>
      </Container>
    </Space>
  );
}

function Container({ trigger, children }: { trigger?: TriggerProps['trigger']; children: React.ReactElement }) {
  return (
    <Trigger
      motion={{ timeout: 500, name: 'trigger-demo', mountOnEnter: true, preEnter: true }}
      arrow={<div style={{ width: 12, height: 12, backgroundColor: 'red' }}></div>}
      trigger={trigger}
      popper={
        <Component size={110} backgroundColor="var(--sqi-bg-color-container)">
          Popper Element
        </Component>
      }
    >
      {children}
    </Trigger>
  );
}
`},27833:function(I,t,e){"use no memo";"use strict";var n=Object.create,p=Object.defineProperty,r=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,i=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,m=(P,A)=>{for(var S in A)p(P,S,{get:A[S],enumerable:!0})},x=(P,A,S,j)=>{if(A&&typeof A=="object"||typeof A=="function")for(let V of c(A))!o.call(P,V)&&V!==S&&p(P,V,{get:()=>A[V],enumerable:!(j=r(A,V))||j.enumerable});return P},h=(P,A,S)=>(S=P!=null?n(i(P)):{},x(A||!P||!P.__esModule?p(S,"default",{value:P,enumerable:!0}):S,P)),f=P=>x(p({},"__esModule",{value:!0}),P),d={};m(d,{$dispatcherGuard:()=>ee,$makeReadOnly:()=>W,$reset:()=>ie,$structuralCheck:()=>ae,c:()=>E,clearRenderCounterRegistry:()=>H,renderCounterRegistry:()=>N,useRenderCounter:()=>Q}),I.exports=f(d);var u=h(e(53360)),{useRef:l,useEffect:v,isValidElement:s}=u,a,R=(a=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)!=null?a:u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.memo_cache_sentinel"),M,E=typeof((M=u.__COMPILER_RUNTIME)==null?void 0:M.c)=="function"?u.__COMPILER_RUNTIME.c:function(A){return u.useMemo(()=>{const S=new Array(A);for(let j=0;j<A;j++)S[j]=b;return S[b]=!0,S},[])},O={};["readContext","useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","unstable_isNewReconciler","getCacheSignal","getCacheForType","useCacheRefresh"].forEach(P=>{O[P]=()=>{throw new Error(`[React] Unexpected React hook call (${P}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)}});var L=null;O.useMemoCache=P=>{if(L==null)throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");return L.useMemoCache(P)};function z(P){return R.ReactCurrentDispatcher.current=P,R.ReactCurrentDispatcher.current}var G=[];function ee(P){const A=R.ReactCurrentDispatcher.current;if(P===0){if(G.push(A),G.length===1&&(L=A),A===O)throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");z(O)}else if(P===1){const S=G.pop();if(S==null)throw new Error("React Compiler internal error: unexpected null in guard stack");G.length===0&&(L=null),z(S)}else if(P===2)G.push(A),z(L);else if(P===3){const S=G.pop();if(S==null)throw new Error("React Compiler internal error: unexpected null in guard stack");z(S)}else throw new Error("React Compiler internal error: unreachable block"+P)}function ie(P){for(let A=0;A<P.length;A++)P[A]=b}function W(){throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")}var N=new Map;function H(){for(const P of N.values())P.forEach(A=>{A.count=0})}function $(P,A){let S=N.get(P);S==null&&(S=new Set,N.set(P,S)),S.add(A)}function ne(P,A){const S=N.get(P);S!=null&&S.delete(A)}function Q(P){const A=l(null);A.current!=null&&(A.current.count+=1),v(()=>{if(A.current==null){const S={count:0};$(P,S),A.current=S}return()=>{A.current!==null&&ne(P,A.current)}})}var k=new Set;function ae(P,A,S,j,V,Ie){function J(B,w,y,C){const g=`${j}:${Ie} [${V}] ${S}${y} changed from ${B} to ${w} at depth ${C}`;k.has(g)||(k.add(g),console.error(g))}const ce=2;function de(B,w,y,C){if(!(C>ce)){if(B===w)return;if(typeof B!=typeof w)J(`type ${typeof B}`,`type ${typeof w}`,y,C);else if(typeof B=="object"){const g=Array.isArray(B),K=Array.isArray(w);if(B===null&&w!==null)J("null",`type ${typeof w}`,y,C);else if(w===null)J(`type ${typeof B}`,"null",y,C);else if(B instanceof Map)if(!(w instanceof Map))J("Map instance","other value",y,C);else if(B.size!==w.size)J(`Map instance with size ${B.size}`,`Map instance with size ${w.size}`,y,C);else for(const[D,q]of B)w.has(D)?de(q,w.get(D),`${y}.get(${D})`,C+1):J(`Map instance with key ${D}`,`Map instance without key ${D}`,y,C);else if(w instanceof Map)J("other value","Map instance",y,C);else if(B instanceof Set)if(!(w instanceof Set))J("Set instance","other value",y,C);else if(B.size!==w.size)J(`Set instance with size ${B.size}`,`Set instance with size ${w.size}`,y,C);else for(const D of w)B.has(D)||J(`Set instance without element ${D}`,`Set instance with element ${D}`,y,C);else if(w instanceof Set)J("other value","Set instance",y,C);else if(g||K)if(g!==K)J(`type ${g?"array":"object"}`,`type ${K?"array":"object"}`,y,C);else if(B.length!==w.length)J(`array with length ${B.length}`,`array with length ${w.length}`,y,C);else for(let D=0;D<B.length;D++)de(B[D],w[D],`${y}[${D}]`,C+1);else if(s(B)||s(w))s(B)!==s(w)?J(`type ${s(B)?"React element":"object"}`,`type ${s(w)?"React element":"object"}`,y,C):B.type!==w.type?J(`React element of type ${B.type}`,`React element of type ${w.type}`,y,C):de(B.props,w.props,`[props of ${y}]`,C+1);else{for(const D in w)D in B||J(`object without key ${D}`,`object with key ${D}`,y,C);for(const D in B)D in w?de(B[D],w[D],`${y}.${D}`,C+1):J(`object with key ${D}`,`object without key ${D}`,y,C)}}else{if(typeof B=="function")return;isNaN(B)||isNaN(w)?isNaN(B)!==isNaN(w)&&J(`${isNaN(B)?"NaN":"non-NaN value"}`,`${isNaN(w)?"NaN":"non-NaN value"}`,y,C):B!==w&&J(B,w,y,C)}}}de(P,A,"",0)}},11607:function(I,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler");Symbol.for("react.provider");var i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),u=Symbol.for("react.view_transition"),l=Symbol.for("react.client.reference");function v(s){if(typeof s=="object"&&s!==null){var a=s.$$typeof;switch(a){case e:switch(s=s.type,s){case p:case c:case r:case x:case h:case u:return s;default:switch(s=s&&s.$$typeof,s){case o:case m:case d:case f:return s;case i:return s;default:return a}}case n:return a}}}t.ContextConsumer=i,t.ContextProvider=o,t.Element=e,t.ForwardRef=m,t.Fragment=p,t.Lazy=d,t.Memo=f,t.Portal=n,t.Profiler=c,t.StrictMode=r,t.Suspense=x,t.SuspenseList=h,t.isContextConsumer=function(s){return v(s)===i},t.isContextProvider=function(s){return v(s)===o},t.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===e},t.isForwardRef=function(s){return v(s)===m},t.isFragment=function(s){return v(s)===p},t.isLazy=function(s){return v(s)===d},t.isMemo=function(s){return v(s)===f},t.isPortal=function(s){return v(s)===n},t.isProfiler=function(s){return v(s)===c},t.isStrictMode=function(s){return v(s)===r},t.isSuspense=function(s){return v(s)===x},t.isSuspenseList=function(s){return v(s)===h},t.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===p||s===c||s===r||s===x||s===h||typeof s=="object"&&s!==null&&(s.$$typeof===d||s.$$typeof===f||s.$$typeof===o||s.$$typeof===i||s.$$typeof===m||s.$$typeof===l||s.getModuleId!==void 0)},t.typeOf=v},81184:function(I,t,e){"use strict";I.exports=e(11607)},37797:function(I,t,e){"use strict";e.d(t,{D:function(){return p}});var n=e(53360);function p(r,c,i){const o=(0,n.useRef)({});return(!("value"in o.current)||i(o.current.condition,c))&&(o.current.value=r(),o.current.condition=c),o.current.value}},60164:function(I,t,e){"use strict";e.d(t,{L:function(){return c}});var n=e(53360),p=e(34028);const c=(0,p.J)()?n.useLayoutEffect:n.useEffect},7657:function(I,t,e){"use strict";e.d(t,{S:function(){return p}});var n=e(53360);function p(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return(0,n.useMemo)(()=>{const o=F(F({},c),i),m=F({},r);for(const x in o)m[x]===void 0&&(m[x]=o[x]);return m},[r,c,i])}},62222:function(I,t,e){"use strict";e.d(t,{R:function(){return c}});var n=e(53360),p=e(80703),r=e(45844);function c(i,o){const{defaultValue:m,value:x,onChange:h}=o||{},[f,d]=(0,n.useState)(()=>(0,p.o8)(x)?(0,p.o8)(m)?(0,p.mf)(i)?i():i:(0,p.mf)(m)?m():m:x),u=(0,r.D)(x),l=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(l.current){l.current=!1;return}(0,p.o8)(x)&&u!==x&&d(x)},[x]);const v=(0,p.o8)(x)?f:x,s=(0,n.useCallback)(a=>{const R=(0,p.mf)(a)?a(v):a;(0,p.o8)(x)&&d(R),!Object.is(R,v)&&(h==null||h(R))},[f,v]);return[v,s]}},45844:function(I,t,e){"use strict";e.d(t,{D:function(){return p}});var n=e(53360);function p(r){const c=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{c.current=r},[r]),c.current}},8240:function(I,t,e){"use strict";e.d(t,{y:function(){return i}});var n=e(53360),p=e(20759),r=e(34028),c=e(60164);function i(o,m){let x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const h=(0,n.useRef)(null);h.current=m,(0,c.L)(()=>{const f=o.current;let d=null;if(!x||!(0,r.J)()||!f)return;const u=l=>{var v;(v=h.current)==null||v.call(h,l)};return d=new p.Z(u),d.observe(f),()=>{if(d&&f){var l;d.unobserve(f),(l=d.disconnect)==null||l.call(d),d=null}}},[o,x])}},31136:function(I,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(53360);const r=(0,n.createContext)({})},37907:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(7829),r=e(31136);const c=(0,n.forwardRef)((o,m)=>{const b=o,{svg:x,type:h,spin:f,rotate:d,className:u,style:l}=b,v=Le(b,["svg","type","spin","rotate","className","style"]),{prefixCls:s="sqi"}=(0,n.useContext)(r.Z),a=(0,p.default)(`${s}-icon`,{[`${s}-icon-spin`]:!!f&&!!x},u),R=l||{};return Number.isSafeInteger(d)&&(R.transform=`rotate(${d}deg)`),n.createElement("span",F({role:"img",ref:m,"aria-label":h,className:a,style:R},v),x)});c.displayName="Icon";const i=c},46874:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"add",ref:m},o)));c.displayName="AddIcon";const i=c},1824:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"browse",ref:m},o)));c.displayName="BrowseIcon";const i=c},85569:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"browse-off",ref:m},o)));c.displayName="BrowseOffIcon";const i=c},23436:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"check-circle-filled",ref:m},o)));c.displayName="CheckCircleFilledIcon";const i=c},46608:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"chevron-down",ref:m},o)));c.displayName="ChevronDownIcon";const i=c},58360:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"close-circle-filled",ref:m},o)));c.displayName="CloseCircleFilledIcon";const i=c},27377:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"close",ref:m},o)));c.displayName="CloseIcon";const i=c},50397:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"info-circle-filled",ref:m},o)));c.displayName="InfoCircleFilledIcon";const i=c},60333:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"loading",ref:m},o)));c.displayName="LoadingIcon";const i=c},36106:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"search",ref:m},o)));c.displayName="SearchIcon";const i=c},65466:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"upload",ref:m},o)));c.displayName="UploadIcon";const i=c},21925:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),p=e(37907);function r(o){return(0,n.createElement)("svg",F({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(p.Z,F({svg:(0,n.createElement)(r),type:"warn-circle-filled",ref:m},o)));c.displayName="WarnCircleFilledIcon";const i=c},5629:function(I,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return r.Z},BrowseIcon:function(){return i.Z},BrowseOffIcon:function(){return c.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return m.Z},CloseCircleFilledIcon:function(){return x.Z},CloseIcon:function(){return h.Z},IconContext:function(){return p.Z},InfoCircleFilledIcon:function(){return f.Z},LoadingIcon:function(){return d.Z},SearchIcon:function(){return u.Z},UploadIcon:function(){return l.Z},WarnCircleFilledIcon:function(){return v.Z},default:function(){return s}});var n=e(37907),p=e(31136),r=e(46874),c=e(85569),i=e(1824),o=e(23436),m=e(46608),x=e(58360),h=e(27377),f=e(50397),d=e(60333),u=e(36106),l=e(65466),v=e(21925);const s=n.Z},34028:function(I,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(I,t,e){"use strict";e.d(t,{D:function(){return n}});function n(p,r){let c=null;const i=function(){for(var o=arguments.length,m=new Array(o),x=0;x<o;x++)m[x]=arguments[x];c&&clearTimeout(c),c=setTimeout(()=>{p.apply(this,m),c=null},r)};return i.cancel=()=>{c&&(clearTimeout(c),c=null)},i}},80703:function(I,t,e){"use strict";e.d(t,{HD:function(){return i},Kn:function(){return o},Qr:function(){return m},hj:function(){return x},kJ:function(){return c},mf:function(){return p},o8:function(){return r}});const n=Object.prototype.toString;function p(h){return n.call(h)==="[object Function]"}function r(h){return h===void 0}function c(h){return n.call(h)==="[object Array]"}function i(h){return n.call(h)==="[object String]"}const o=h=>n.call(h)==="[object Object]",m=h=>{if(!o(h))return!0;for(const f in h)if(Object.prototype.hasOwnProperty.call(h,f))return!1;return!0},x=h=>n.call(h)==="[object Number]"&&h===h},12598:function(I,t,e){"use strict";e.d(t,{C:function(){return n}});function n(p,r){const c=Object.assign({},p);return Array.isArray(r)&&r.forEach(i=>{delete c[i]}),c}},6890:function(I,t,e){"use strict";e.d(t,{P:function(){return p}});var n=e(78831);function p(r,c){let i=null;const o=(0,n.D)(r,c),m=function(){for(var x=arguments.length,h=new Array(x),f=0;f<x;f++)h[f]=arguments[f];i===null?i=Date.now():Date.now()-i>=c&&(i=Date.now(),o.cancel()),o(...h)};return m.cancel=o.cancel,m}},92266:function(I,t,e){"use strict";e.d(t,{C:function(){return c},Z:function(){return i}});var n=e(53360),p=e(7829),r=e(62222);const c=(0,n.forwardRef)((o,m)=>{const z=o,{prefixCls:x,className:h,style:f,checked:d,disabled:u,defaultChecked:l=!1,type:v="checkbox",title:s,onChange:a,_getCheckedValue:R}=z,b=Le(z,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[M,E]=(0,r.R)(l,{value:d});(0,n.useEffect)(()=>{R==null||R(M)},[M]);const O=(0,p.default)(x,h,{[`${x}-checked`]:M,[`${x}-disabled`]:u}),L=G=>{u||("checked"in o||E(G.target.checked),a==null||a({target:Ce(F({},o),{checked:G.target.checked}),event:G}))};return n.createElement("span",{className:O,title:s,style:f},n.createElement("input",Ce(F({},b),{className:`${x}-input`,ref:m,onChange:L,disabled:u,checked:M,type:v})),n.createElement("span",{className:`${x}-inner`}))});c.displayName="BaseCheckbox";const i=c},40549:function(I,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(53360),p=e(7829),r=e(64508),c=e(80703),i=e(57577);const o=(0,n.forwardRef)((x,h)=>{const f=(0,n.useContext)(i.E),E=x,{children:d,name:u,prefixCls:l}=E,v=Le(E,["children","name","prefixCls"]),[s,a]=(0,r.Y)(v),R=(0,n.isValidElement)(d);(0,n.useImperativeHandle)(h,()=>({toggle:a}));const b=`${l||f.prefixCls}${u?`-${u}`:""}`,M=(0,p.default)([`${b}-motion`],{[`${b}-motion-${s.status}`]:s.status});return(0,c.mf)(d)?s.isMounted?d(Ce(F({},s),{className:M,toggle:a})):null:R?s.isMounted?(0,n.cloneElement)(d,{className:(0,p.default)(d.props.className,M)}):null:d});o.displayName="CSSMotion";const m=o},4814:function(I,t,e){"use strict";e.d(t,{sQ:function(){return i},t4:function(){return f},x1:function(){return m}});var n=e(37797),p=e(80703),r=e(53360),c=e(11607);const i=function(){for(var d=arguments.length,u=new Array(d),l=0;l<d;l++)u[l]=arguments[l];const v=u.filter(Boolean);return v.length<=1?v[0]:s=>{u.forEach(a=>{o(a,s)})}},o=(d,u)=>{(0,p.mf)(d)?d(u):(0,p.Kn)(d)&&"current"in d&&(d.current=u)},m=function(){for(var d=arguments.length,u=new Array(d),l=0;l<d;l++)u[l]=arguments[l];return(0,n.D)(()=>i(...u),u,(v,s)=>v.length!==s.length||v.every((a,R)=>a!==s[R]))},x=d=>{var u,l;if(!d)return!1;const v=parseInt(r.version);if(h(d)&&v>=19)return!0;const s=(0,c.isMemo)(d)?d.type.type:d.type;return!(typeof s=="function"&&!((u=s.prototype)!=null&&u.render)&&s.$$typeof!==c.ForwardRef||typeof d=="function"&&!((l=d.prototype)!=null&&l.render)&&d.$$typeof!==c.ForwardRef)};function h(d){return(0,r.isValidElement)(d)&&!(0,c.isFragment)(d)}const f=d=>h(d)&&x(d)},21299:function(I,t,e){"use strict";e.d(t,{q:function(){return r}});var n=e(53360),p=e(11607);function r(c){let i=[];return n.Children.toArray(c).forEach(o=>{o!=null&&(Array.isArray(o)?i=i.concat(r(o)):(0,n.isValidElement)(o)&&(0,p.isFragment)(o)&&o.props?i=i.concat(r(o.props.children)):i.push(o))}),i}},69203:function(I,t,e){"use strict";e.d(t,{b:function(){return a}});var n=e(27833),p=e(53360),r=e(7829),c=e(7657),i=e(23436),o=e(50397),m=e(58360),x=e(21925),h=e(27377),f=e(40549),d=e(57577);const u={type:"info",showIcon:!0},l={success:i.Z,info:o.Z,error:m.Z,warning:x.Z},v=(0,p.forwardRef)((b,M)=>{const E=(0,n.c)(38),{prefixCls:O,componentConfig:L}=(0,p.useContext)(d.E),{className:z,style:G,title:ee,description:ie,type:W,closable:N,showIcon:H,action:$,icon:ne,onClose:Q}=(0,c.S)(b,u,L==null?void 0:L.Alert),k=(0,p.useRef)(null);let ae;E[0]!==ne||E[1]!==W?(ae=()=>(0,p.isValidElement)(ne)?ne:W?(0,p.createElement)(l[W]):null,E[0]=ne,E[1]=W,E[2]=ae):ae=E[2];const P=ae,A=`${O}-alert`,S=`${O}-alert-${W}`;let j;E[3]!==z||E[4]!==A||E[5]!==S?(j=(0,r.default)(A,S,z),E[3]=z,E[4]=A,E[5]=S,E[6]=j):j=E[6];const V=j;let Ie;E[7]!==Q?(Ie=q=>{var te;(te=k.current)==null||te.toggle(),Q==null||Q(q)},E[7]=Q,E[8]=Ie):Ie=E[8];const J=Ie;let ce;E[9]!==O||E[10]!==P||E[11]!==H?(ce=H&&p.createElement("div",{className:`${O}-alert-icon`},P()),E[9]=O,E[10]=P,E[11]=H,E[12]=ce):ce=E[12];const de=`${O}-alert-content`;let B;E[13]!==O||E[14]!==ee?(B=!!ee&&p.createElement("div",{className:`${O}-alert-title`},ee),E[13]=O,E[14]=ee,E[15]=B):B=E[15];const w=`${O}-alert-description`;let y;E[16]!==ie||E[17]!==w?(y=p.createElement("div",{className:w},ie),E[16]=ie,E[17]=w,E[18]=y):y=E[18];let C;E[19]!==de||E[20]!==B||E[21]!==y?(C=p.createElement("div",{className:de},B,y),E[19]=de,E[20]=B,E[21]=y,E[22]=C):C=E[22];let g;E[23]!==$||E[24]!==O?(g=$&&p.createElement("div",{className:`${O}-alert-action`},$),E[23]=$,E[24]=O,E[25]=g):g=E[25];let K;E[26]!==N||E[27]!==J||E[28]!==O?(K=N&&p.createElement("button",{className:`${O}-alert-close`,onClick:J},p.createElement(h.Z,null)),E[26]=N,E[27]=J,E[28]=O,E[29]=K):K=E[29];let D;return E[30]!==V||E[31]!==M||E[32]!==G||E[33]!==C||E[34]!==g||E[35]!==K||E[36]!==ce?(D=p.createElement(f.Z,{ref:k,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},p.createElement("div",{role:"alert",className:V,style:G,ref:M},ce,C,g,K)),E[30]=V,E[31]=M,E[32]=G,E[33]=C,E[34]=g,E[35]=K,E[36]=ce,E[37]=D):D=E[37],D});v.displayName="Alert";const a=v,R=null},60884:function(I,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(53360),p=e(7829),r=e(60333),c=e(7657),i=e(57577);const o={type:"default",variant:"default",htmlType:"button"},m=(0,n.forwardRef)((d,u)=>{const{prefixCls:l,size:v="md",componentConfig:s}=(0,n.useContext)(i.E),P=(0,c.S)(d,o,s==null?void 0:s.Button),{children:R,type:b,size:M=v,htmlType:E,status:O,loading:L,disabled:z,variant:G,icon:ee,href:ie,target:W,onClick:N,anchorProps:H={}}=P,$=Le(P,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),ne=L?n.createElement(r.Z,{spin:L}):ee,Q=ie?"link":b,k=(0,p.default)(`${l}-btn`,`${l}-btn-${Q}`,{[`${l}-btn-size-${M}`]:M,[`${l}-btn-status-${O}`]:!!O,[`${l}-btn-variant-${G}`]:G,[`${l}-btn-loading`]:L,[`${l}-btn-disabled`]:z}),ae=A=>{if(L||z)return void A.preventDefault();N==null||N(A)};return ie?n.createElement("a",Ce(F({},H),{href:ie,target:W,className:k,onClick:ae,ref:u}),ne,n.createElement("span",null,R)):n.createElement("button",Ce(F({},$),{type:E,className:k,onClick:ae,ref:u}),ne,n.createElement("span",null,R))});m.displayName="Button";const h=m,f=null},67824:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),p=e(7829),r=e(7657),c=e(45844),i=e(80703),o=e(92266),m=e(4814),x=e(57577),h=e(81372);const f={defaultChecked:!1,indeterminate:!1},d=(0,n.forwardRef)((l,v)=>{const{prefixCls:s,componentConfig:a}=(0,n.useContext)(x.E),R=(0,n.useContext)(h.w),Q=(0,r.S)(l,f,a==null?void 0:a.Checkbox),{children:b,style:M,className:E,indeterminate:O}=Q,L=Le(Q,["children","style","className","indeterminate"]),[z,G]=(0,n.useState)(!1),ee="disabled"in L?L.disabled:R.disabled;let ie=(0,c.D)(L.value);const W=(0,n.useRef)(null);(0,n.useEffect)(()=>{var k;(k=R.registerValue)==null||k.call(R,L.value)},[]),(0,n.useEffect)(()=>{if(L.value!==ie){var k,ae;(k=R.unregisterValue)==null||k.call(R,ie),(ae=R.registerValue)==null||ae.call(R,L.value),ie=L.value}return()=>{var P;return(P=R.unregisterValue)==null?void 0:P.call(R,L.value)}},[L.value]),(0,n.useEffect)(()=>{W.current&&(W.current.indeterminate=O)},[O]);const N=F({},L);(0,i.Qr)(R)||(N.onChange=function(){for(var k=arguments.length,ae=new Array(k),P=0;P<k;P++)ae[P]=arguments[P];var A,S;(A=L.onChange)==null||A.call(L,...ae),(S=R.toggleOption)==null||S.call(R,L.value)},N.name=R.name,N.checked=R.value.includes(L.value));const H=(0,p.default)(`${s}-checkbox-wrapper`,{[`${s}-checkbox-wrapper-checked`]:N.checked,[`${s}-checkbox-wrapper-disabled`]:ee},E),$=k=>{if((0,i.mf)(b)){var ae;k.preventDefault(),(ae=W.current)==null||ae.click()}},ne=()=>(0,i.o8)(b)?null:(0,i.mf)(b)?b({checked:"checked"in N?!!N.checked:z}):n.createElement("span",{className:`${s}-checkbox-label`},b);return n.createElement("label",{className:H,onClick:$},n.createElement(o.C,Ce(F({},N),{type:"checkbox",ref:(0,m.sQ)(v,W),disabled:ee,prefixCls:`${s}-checkbox`,className:(0,p.default)({[`${s}-checkbox-indeterminate`]:O}),style:Ce(F({},M),{display:(0,i.mf)(b)?"none":void 0}),_getCheckedValue:G})),ne())});d.displayName="Checkbox";const u=d},56104:function(I,t,e){"use strict";e.d(t,{Z:function(){return f}});var n=e(53360),p=e(7829),r=e(7657),c=e(80703),i=e(57577),o=e(81372),m=e(67824);const x={},h=(0,n.forwardRef)((d,u)=>{const{prefixCls:l,componentConfig:v}=(0,n.useContext)(i.E),s=(0,n.useId)(),A=(0,r.S)(d,x,v==null?void 0:v.CheckboxGroup),{defaultValue:a,children:R,options:b,className:M,style:E,disabled:O,name:L=s,onChange:z,renderOption:G}=A,ee=Le(A,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[ie,W]=(0,n.useState)(ee.value||a||[]),[N,H]=(0,n.useState)([]);(0,n.useEffect)(()=>{"value"in ee&&W(ee.value||[])},[ee.value]);const $=(0,n.useCallback)(S=>{H(j=>[...j,S])},[]),ne=(0,n.useCallback)(S=>{H(j=>j.filter(V=>V!==S))},[]),Q=(0,n.useMemo)(()=>b==null?void 0:b.map(S=>(0,c.HD)(S)||(0,c.hj)(S)?{label:S,value:S}:S),[b]),k=(0,n.useCallback)(S=>{const j=[...ie],V=ie.indexOf(S);V===-1?j.push(S):j.splice(V,1),"value"in ee||W(j);const Ie=j.filter(J=>N.includes(J));z==null||z(Ie)},[ie,N,ee,z]);let ae=R;if((0,c.kJ)(Q)&&Q.length>0){const S=(0,c.mf)(G);ae=Q.map(j=>{const V=ie.includes(j.value),Ie=S?()=>G(Ce(F({},j),{checked:V})):j.label;return n.createElement(m.Z,{key:`checkbox-group-options-${j.value}`,className:j.className,style:j.style,disabled:"disabled"in j?j.disabled:O,value:j.value,checked:V,id:j.id,title:j.title,onChange:j.onChange},Ie)})}const P=(0,n.useMemo)(()=>({name:L,value:ie,disabled:O,toggleOption:k,registerValue:$,unregisterValue:ne}),[L,ie,O,k,$,ne]);return n.createElement("div",{className:(0,p.default)(`${l}-checkbox-group`,M),style:E,ref:u},n.createElement(o.w.Provider,{value:P},ae))});h.displayName="CheckboxGroup";const f=h},81372:function(I,t,e){"use strict";e.d(t,{w:function(){return p}});var n=e(53360);const p=(0,n.createContext)({})},89946:function(I,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return m},CheckboxGroup:function(){return x},default:function(){return h}});var n=e(67824),p=e(56104),r=e(558),c=e.n(r),i={};for(var o in r)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(i[o]=function(f){return r[f]}.bind(0,o));e.d(t,i);const m=n.Z;m.Group=p.Z;const x=m.Group,h=m},558:function(){},57577:function(I,t,e){"use strict";e.d(t,{$:function(){return p},E:function(){return r}});var n=e(53360);const p={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(p)},83405:function(I,t,e){"use strict";e.d(t,{i:function(){return x}});var n=e(27833),p=e(53360),r=e(12598),c=e(7657),i=e(31136),o=e(57577);function m(h){const f=(0,n.c)(11),d=(0,c.S)(h,o.$),{iconPrefix:u,children:l}=d;let v;f[0]!==d?(v=(0,r.C)(d,["children","iconPrefix"]),f[0]=d,f[1]=v):v=f[1];const s=v,a=u?i.Z.Provider:p.Fragment;let R;f[2]!==u?(R={prefixCls:u},f[2]=u,f[3]=R):R=f[3];let b;f[4]!==a||f[5]!==l||f[6]!==R?(b=p.createElement(a,{value:R},l),f[4]=a,f[5]=l,f[6]=R,f[7]=b):b=f[7];let M;return f[8]!==s||f[9]!==b?(M=p.createElement(o.E.Provider,{value:s},b),f[8]=s,f[9]=b,f[10]=M):M=f[10],M}m.displayName="ConfigProvider";const x=m},48380:function(I,t,e){"use strict";e.d(t,{i:function(){return x}});var n=e(53360),p=e(7829),r=e(7657),c=e(57577);const i={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((f,d)=>{const{prefixCls:u,componentConfig:l}=(0,n.useContext)(c.E),v=(0,r.S)(f,i,l==null?void 0:l.Divider),{direction:s,align:a,dashed:R,className:b,children:M,text:E,style:O}=v,L=M||E,z=s!=="vertical"&&!!L,G=(0,p.default)(`${u}-divider`,{[`${u}-divider-${s}`]:s,[`${u}-divider-with-text`]:z,[`${u}-divider-with-text-${a}`]:z,[`${u}-divider-dashed`]:!!R,className:b});return n.createElement("div",{className:G,style:O,ref:d},z&&n.createElement("span",{className:`${u}-divider-inner-text`},L))});o.displayName="Divider";const x=o,h=null},17599:function(I,t,e){"use strict";e.d(t,{J:function(){return ie},X:function(){return ee}});var n=e(53360),p=e(7829),r=e(7657),c=e(80703),i=e(57577);const o=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},x=Object.keys(m),h=new Map;let f=-1,d={};const l={handlers:{},dispatch(W){return d=W,h.forEach(N=>N(d)),h.size>=1},subscribe(W){return h.size||this.register(),f+=1,h.set(f,W),W(d),f},unsubscribe(W){h.delete(W),h.size||this.unregister()},register(){x.forEach(W=>{const N=ne=>{let{matches:Q}=ne;this.dispatch(Ce(F({},d),{[W]:Q}))},H=m[W],$=window.matchMedia(H);$.addListener(N),this.handlers[H]={mql:$,listener:N},N($)})},unregister(){x.forEach(W=>{const N=m[W],H=this.handlers[N];H==null||H.mql.removeListener(H==null?void 0:H.listener)}),h.clear()}},s=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},R=(0,n.forwardRef)((W,N)=>{const{prefixCls:H,componentConfig:$}=(0,n.useContext)(i.E),D=(0,r.S)(W,a,$==null?void 0:$.Row),{align:ne,justify:Q,gutter:k,className:ae,wrap:P,children:A,style:S}=D,j=Le(D,["align","justify","gutter","className","wrap","children","style"]),[V,Ie]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const q=l.subscribe(te=>{((0,c.Kn)(k)||(0,c.kJ)(k)&&((0,c.Kn)(k[0])||(0,c.Kn)(k[1])))&&Ie(te)});return()=>l.unsubscribe(q)},[]);const J=ce();function ce(){const q=[void 0,void 0];return((0,c.kJ)(k)?k:[k,void 0]).forEach((Z,le)=>{if((0,c.Kn)(Z))for(let Y=0;Y<o.length;Y++){const me=o[Y];if(V[me]&&Z[me]!==void 0){q[le]=Z[me];break}}else q[le]=Z}),q}const de=(0,p.default)(`${H}-row`,{[`${H}-row-nowrap`]:P===!1,[`${H}-row-align-${ne}`]:ne,[`${H}-row-justify-${Q}`]:Q},ae),[B,w]=J,y=(0,n.useMemo)(()=>({gutter:[B,w],wrap:P}),[B,w,P]),C={},g=(0,c.hj)(B)&&B!==0,K=(0,c.hj)(w)&&w!==0;if(g||K){const q=-B/2,te=-w/2;q&&(C.marginLeft=q,C.marginRight=q),te&&(C.marginTop=te,C.marginBottom=te)}return n.createElement(s.Provider,{value:y},n.createElement("div",Ce(F({},j),{ref:N,className:de,style:F(F({},S),C)}),A))});R.displayName="Row";const b=R,M={offset:0};function E(W){return(0,c.hj)(W)?`${W} ${W} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(W)?`0 0 ${W}`:W}const O=["xs","sm","md","lg","xl","xxl"],L=(W,N)=>{let H={};return O.forEach($=>{const ne=W[$];if(!ne)return;let Q={};(0,c.hj)(ne)?Q.span=ne:(0,c.Kn)(ne)&&(Q=ne),H=Ce(F({},H),{[`${N}-col-${$}-${Q.span}`]:(0,c.hj)(Q.span),[`${N}-col-${$}-order-${Q.order}`]:Q.order,[`${N}-col-${$}-offset-${Q.offset}`]:Q.offset})}),H},z=(0,n.forwardRef)((W,N)=>{const{componentConfig:H,prefixCls:$}=(0,n.useContext)(i.E),{gutter:ne}=(0,n.useContext)(s),D=(0,r.S)(W,M,H==null?void 0:H.Col),{span:Q,offset:k,children:ae,className:P,style:A,flex:S,order:j,xs:V,sm:Ie,md:J,lg:ce,xl:de,xxl:B}=D,w=Le(D,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),y=L({xs:V,sm:Ie,md:J,lg:ce,xl:de,xxl:B},$),C=(0,p.default)(`${$}-col`,{[`${$}-col-${Q}`]:(0,c.hj)(Q),[`${$}-col-offset-${k}`]:k,[`${$}-col-order-${j}`]:j},y,P),g={};if(ne){const q=ne[0]?ne[0]/2:0,te=ne[1]?ne[1]/2:0;q&&(g.paddingLeft=q,g.paddingRight=q),te&&(g.paddingTop=te,g.paddingBottom=te)}const K={};return S&&(K.flex=E(S)),n.createElement("div",Ce(F({ref:N},w),{className:C,style:F(F(F({},A),K),g)}),ae)});z.displayName="Col";const G=z,ee=b,ie=G},45990:function(I,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return p.z},Col:function(){return m.J},ConfigProvider:function(){return i.i},Divider:function(){return o.i},Input:function(){return x.I},Row:function(){return m.X},Space:function(){return f.T}});var n=e(69203),p=e(60884),r=e(89946),u={};for(var c in r)["default","Alert","Button"].indexOf(c)<0&&(u[c]=function(l){return r[l]}.bind(0,c));e.d(t,u);var i=e(83405),o=e(48380),m=e(17599),x=e(38312),h=e(37663),u={};for(var c in h)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input"].indexOf(c)<0&&(u[c]=function(v){return h[v]}.bind(0,c));e.d(t,u);var f=e(92595),d=e(36112),u={};for(var c in d)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Radio","RadioButton","RadioGroup","Space"].indexOf(c)<0&&(u[c]=function(v){return d[v]}.bind(0,c));e.d(t,u)},38312:function(I,t,e){"use strict";e.d(t,{I:function(){return s}});var n=e(53360),p=e(7829),r=e(7657),c=e(62222),i=e(80703),o=e(58360),m=e(85569),x=e(1824),h=e(4814),f=e(57577);const d={type:"text",size:"md",align:"left",visibilityToggle:!0};function u(R,b,M){let E;return E=R===null||(0,i.o8)(R)||(0,i.HD)(R)?R||"":String(R),(0,i.hj)(b)&&!M?E.slice(0,b):E}const l=(0,n.forwardRef)((R,b)=>{const{prefixCls:M,componentConfig:E}=(0,n.useContext)(f.E),Be=(0,r.S)(R,d,E==null?void 0:E.Input),{size:O,status:L,align:z,disabled:G,allowClear:ee,placeholder:ie,variant:W="outline",addonBefore:N,addonAfter:H,prefix:$,suffix:ne,value:Q,defaultValue:k,type:ae,className:P,style:A,readOnly:S,visibilityToggle:j,maxLength:V,tips:Ie,onFocus:J,onBlur:ce,onChange:de}=Be,B=Le(Be,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),w=(0,n.useRef)(null),[y,C]=(0,n.useState)(!1),g=ue=>{G||S||(C(!0),J==null||J(ue))},K=ue=>{G||S||(C(!1),ce==null||ce(ue))},D=(0,i.hj)(V)?V:V==null?void 0:V.length,q=(0,i.hj)(V)?!1:V==null?void 0:V.errorOnly,te=(0,i.hj)(V)?!0:(V==null?void 0:V.showLimit)!==!1,[Z,le]=(0,c.R)(k,{value:Q}),Y=u(Z,D,q),me=(0,i.hj)(D)?Y.length>D:!1,U=ue=>{const{value:ve}=ue.target;le(ve),de==null||de(ve,ue)},re=()=>{var ue;G||(ue=w.current)==null||ue.focus()},he=(0,p.default)(`${M}-input`,{[`${M}-input-variant-${W}`]:W,[`${M}-input-size-${O}`]:O,[`${M}-input-disabled`]:G,[`${M}-input-align-${z}`]:z,[`${M}-input-status-${L}`]:L,[`${M}-input-focus`]:y,[`${M}-input-limit-length-error`]:me},P),ge=(0,p.default)(`${M}-input-real`),oe=ee&&Y&&!G,se=n.createElement(o.Z,null),T=ue=>{ue.stopPropagation(),le(""),de==null||de("",ue)},X=oe&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,p.default)(`${M}-input-suffix`,`${M}-input-clear`),onClick:T},se),_=(0,i.Kn)(j)&&!(0,i.o8)(j.visible),[fe,xe]=(0,n.useState)(ae);(0,n.useEffect)(()=>{xe(_?j.visible?"text":"password":ae)},[ae,_,j==null?void 0:j.visible]);const ye=()=>{if(G)return;const ue=fe==="password"?"text":"password";if(xe(ue),_){var ve;(ve=j.onVisibleChange)==null||ve.call(j,ue==="text")}},pe=ae==="password",Ee=(0,n.useMemo)(()=>pe?(0,i.Kn)(j)&&(0,i.mf)(j.renderIcon)?j.renderIcon(fe==="text"):fe==="password"?n.createElement(m.Z,null):fe==="text"?n.createElement(x.Z,null):null:ne,[pe,fe,j,ne]),Re=(0,n.useMemo)(()=>function(ue){let{children:ve}=ue;const Ne=N||H;let Oe=ve;return Ne&&(Oe=n.createElement("div",{className:`${M}-input-group`},Oe)),Ie&&(Oe=n.createElement("div",{className:`${M}-input-group-extra`},Oe)),Oe},[N,H,Ie]),De=$&&n.createElement("span",{className:`${M}-input-prefix`},$),be=Ee&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,p.default)(`${M}-input-suffix`,{[`${M}-input-suffix-password`]:pe}),onClick:ye,onMouseDown:ue=>ue.preventDefault(),onMouseUp:ue=>ue.preventDefault()},Ee),Ae=(0,i.hj)(D)&&te&&n.createElement("span",{className:`${M}-input-limit-length-text`},Y.length,"/",D),we=Ie&&n.createElement("div",{className:(0,p.default)(`${M}-input-tips`,{[`${M}-input-tips-status-${L}`]:L})},Ie),Pe=n.createElement(n.Fragment,null,n.createElement("span",{className:he,style:A,onClick:re},De,n.createElement("input",Ce(F({ref:(0,h.sQ)(b,w)},B),{type:fe,value:Y,readOnly:S,className:ge,placeholder:ie,disabled:G,onChange:U,onFocus:g,onBlur:K})),X,be,Ae)),Me=N&&n.createElement("span",{className:(0,p.default)(`${M}-input-group-addon`)},N),Te=H&&n.createElement("span",{className:(0,p.default)(`${M}-input-group-addon`)},H);return n.createElement(Re,null,Me,Pe,Te,we)});l.displayName="Input";const s=l,a=null},74052:function(I,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),p=e(7829),r=e(7657),c=e(80703),i=e(92266),o=e(4814),m=e(57577),x=e(83595);const h={defaultChecked:!1},f=(0,n.forwardRef)((u,l)=>{const{prefixCls:v,componentConfig:s}=(0,n.useContext)(m.E),a=(0,n.useContext)(x.Z),k=(0,r.S)(u,h,s==null?void 0:s.Radio),{_IS_BUTTON_:R,value:b,children:M,style:E}=k,O=Le(k,["_IS_BUTTON_","value","children","style"]),L=ae=>{var P,A;(P=O.onChange)==null||P.call(O,ae),a==null||(A=a.onChange)==null||A.call(a,ae)},z=F({},O);let G="md";if(!(0,c.Qr)(a)){z.name=a.name,z.onChange=L,z.checked=b===a.value;var ee;z.disabled=(ee=z.disabled)!=null?ee:a.disabled,G=a.size?a.size:G}const[ie,W]=(0,n.useState)(!1),N=R?`${v}-radio-button`:`${v}-radio`,H=(0,p.default)(`${N}-wrapper`,{[`${N}-wrapper-disabled`]:z.disabled,[`${N}-wrapper-checked`]:z.checked,[`${N}-wrapper-size-${G}`]:G,[`${N}-wrapper-filled`]:a.buttonVariant==="filled"}),$=()=>(0,c.o8)(M)?null:(0,c.mf)(M)?M({checked:"checked"in z?!!z.checked:ie}):n.createElement("span",{className:`${N}-label`},M),ne=(0,n.useRef)(null),Q=ae=>{if((0,c.mf)(M)){var P;ae.preventDefault(),(P=ne.current)==null||P.click()}};return n.createElement("label",{className:H,onClick:Q},n.createElement(i.Z,Ce(F(F({},O),z),{ref:(0,o.sQ)(l,ne),value:b,type:"radio",prefixCls:N,style:Ce(F({},E),{display:(0,c.mf)(M)?"none":void 0}),disabled:z.disabled,_getCheckedValue:W})),$())});f.displayName="Radio";const d=f},89312:function(I,t,e){"use strict";e.d(t,{Z:function(){return o}});var n=e(27833),p=e.n(n),r=e(53360),c=e(74052);const i=(0,r.forwardRef)((m,x)=>{const h=(0,n.c)(3);let f;return h[0]!==m||h[1]!==x?(f=r.createElement(c.Z,Ce(F({_IS_BUTTON_:!0},m),{ref:x})),h[0]=m,h[1]=x,h[2]=f):f=h[2],f});i.displayName="RadioButton";const o=i},59803:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),p=e(7829),r=e(7657),c=e(62222),i=e(80703),o=e(57577),m=e(83595),x=e(74052),h=e(89312);const f={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},d=(0,n.forwardRef)((l,v)=>{const{prefixCls:s,componentConfig:a}=(0,n.useContext)(o.E),R=(0,r.S)(l,f,a==null?void 0:a.RadioGroup),b=(0,n.useId)(),{className:M,style:E,name:O=b,value:L,defaultValue:z,children:G,disabled:ee,size:ie,buttonVariant:W,renderOption:N,onChange:H,appearance:$,options:ne}=R,[Q,k]=(0,c.R)(z,{value:L}),ae=(0,n.useCallback)(j=>{const V=j.target.value;"value"in R||k(V),V!==Q&&(H==null||H(j))},[Q,H]);let P=G;const A=$==="button"?h.Z:x.Z;if((0,i.kJ)(ne)&&ne.length>0){const j=(0,i.mf)(N);P=ne.map(V=>{if((0,i.HD)(V)||(0,i.hj)(V)){const ce=Q===V,de=j?()=>N({label:V,value:V,checked:ce}):V;return n.createElement(A,{key:V.toString(),disabled:ee,value:V,checked:ce},de)}const Ie=Q===V.value,J=j?()=>N(Ce(F({},V),{checked:Ie})):V.label;return n.createElement(A,{key:`radio-group-options-${V.value}`,className:V.className,style:V.style,disabled:V.disabled||ee,value:V.value,checked:Ie,id:V.id,title:V.title,onChange:V.onChange},J)})}const S=(0,n.useMemo)(()=>({name:O,value:Q,disabled:ee,size:ie,buttonVariant:W,onChange:ae}),[O,L,ee,ie,W,ae]);return n.createElement("div",{ref:v,className:(0,p.default)(`${s}-radio-group`,M),style:E},n.createElement(m.Z.Provider,{value:S},P))});d.displayName="RadioGroup";const u=d},83595:function(I,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(53360);const r=(0,n.createContext)({})},37663:function(I,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return x},RadioButton:function(){return f},RadioGroup:function(){return h},default:function(){return d}});var n=e(74052),p=e(89312),r=e(59803),c=e(63149),i=e.n(c),o={};for(var m in c)["default","Radio","RadioButton","RadioGroup"].indexOf(m)<0&&(o[m]=function(u){return c[u]}.bind(0,m));e.d(t,o);const x=n.Z;x.Group=r.Z,x.Button=p.Z;const h=x.Group,f=x.Button,d=x},63149:function(){},92595:function(I,t,e){"use strict";e.d(t,{T:function(){return d}});var n=e(53360),p=e(7829),r=e(80703),c=e(7657),i=e(21299),o=e(57577);const m={sm:8,md:16,lg:24},x={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((l,v)=>{const{prefixCls:s,size:a="md",componentConfig:R}=(0,n.useContext)(o.E),Q=(0,c.S)(l,x,R==null?void 0:R.Space),{className:M,children:E,size:O=a,direction:L="horizontal",align:z,split:G,wrap:ee=!1}=Q,ie=Le(Q,["className","children","size","direction","align","split","wrap"]),W=(0,i.q)(E),N=L==="horizontal"&&z===void 0?"center":z,H=(0,p.default)(`${s}-space`,`${s}-space-direction-${L}`,{[`${s}-space-align-${N}`]:N,[`${s}-space-wrap`]:ee},M),$=(0,n.useCallback)(k=>{const ae=(0,r.kJ)(O)?O:[O,O],[P,A]=ae.map(S=>(0,r.HD)(S)?m[S]:S||0);return ee?{marginRight:P,marginBottom:A}:L==="vertical"?{marginBottom:A}:{marginRight:k?void 0:P}},[O]),ne=W.map((k,ae)=>{const P=ae===W.length-1;return n.createElement(n.Fragment,{key:`space-item-${ae}`},n.createElement("div",{className:"space-item",style:$(P)},k),!P&&G&&n.createElement("span",{className:"sqi-space-item-split"},G))});return n.createElement("div",Ce(F({className:H},ie),{ref:v}),ne)});h.displayName="Space";const d=h,u=null},35541:function(I,t,e){"use strict";e.d(t,{Z:function(){return w}});var n=e(53360),p=e(7657),r=e(62222),c=e(60164),i=e(27833),o=e(6890),m=e(8240),x=e(21299);function h(y){return y instanceof HTMLElement||y instanceof SVGElement}function f(y){return y&&typeof y=="object"&&h(y.nativeElement)?y.nativeElement:h(y)?y:null}function d(y){if(!(y&&(0,n.isValidElement)(y)))return null;if(parseInt(n.version)>=19){var g;return((g=y.props)==null?void 0:g.ref)||null}return y.ref}var u=e(4814);const l=(0,n.forwardRef)((y,C)=>{const g=(0,i.c)(14),{children:K,disabled:D,throttleMs:q,onResize:te}=y,Z=q===void 0?100:q;let le;g[0]!==K?(le=(0,n.isValidElement)(K),g[0]=K,g[1]=le):le=g[1];const Y=le,me=Y?(0,x.q)(K):[];let U;g[2]!==K||g[3]!==Y?(U=Y?d(K):null,g[2]=K,g[3]=Y,g[4]=U):U=g[4];const re=U,he=(0,n.useRef)(null),ge=(0,u.x1)(re,he);let oe;g[5]===Symbol.for("react.memo_cache_sentinel")?(oe=()=>f(he.current),g[5]=oe):oe=g[5];const se=oe;let T;g[6]===Symbol.for("react.memo_cache_sentinel")?(T=()=>se(),g[6]=T):T=g[6],(0,n.useImperativeHandle)(C,T);let X;g[7]!==te||g[8]!==Z?(X=te?(0,o.P)(te,Z):void 0,g[7]=te,g[8]=Z,g[9]=X):X=g[9];const _=X;(0,m.y)(he,_,!D);let fe;return g[10]!==K||g[11]!==Y||g[12]!==ge?(fe=Y?(0,n.cloneElement)(K,{ref:ge}):K,g[10]=K,g[11]=Y,g[12]=ge,g[13]=fe):fe=g[13],fe});l.displayName="ResizeObserverComponent";const v=l;var s=e(86752),a=e(34028),R=e(80703);const b=(0,a.J)();function M(y){return b?(0,R.HD)(y)?document.querySelector(y):(0,R.mf)(y)?y():y instanceof HTMLElement?y:document.body:null}const E=(0,n.forwardRef)((y,C)=>{const g=(0,i.c)(25),{getContainer:K,prefixCls:D,children:q,open:te,rootStyle:Z}=y,le=te===void 0?!0:te,[Y,me]=(0,n.useState)(null),[U,re]=(0,n.useState)(null),he=U||document.body;let ge,oe;g[0]!==K?(ge=()=>{const Re=M(K);re(Re||null)},oe=[K],g[0]=K,g[1]=ge,g[2]=oe):(ge=g[1],oe=g[2]),(0,n.useEffect)(ge,oe);let se;g[3]!==Y||g[4]!==D||g[5]!==Z?(se=()=>{if(!b||Y)return null;const Re=document.createElement("div");D&&(Re.className=`${D}-portal-wrapper`),Z&&Object.assign(Re.style,Z),Re.setAttribute("data-portal","true"),me(Re)},g[3]=Y,g[4]=D,g[5]=Z,g[6]=se):se=g[6];const T=se;let X;g[7]!==T||g[8]!==le?(X=()=>{b&&(le?T():me(null))},g[7]=T,g[8]=le,g[9]=X):X=g[9];let _;g[10]!==le?(_=[le],g[10]=le,g[11]=_):_=g[11],(0,c.L)(X,_);let fe,xe;g[12]!==Y?(fe=()=>Y,xe=[Y],g[12]=Y,g[13]=fe,g[14]=xe):(fe=g[13],xe=g[14]),(0,n.useImperativeHandle)(C,fe,xe);let ye;g[15]!==Y||g[16]!==he||g[17]!==le?(ye=()=>{if(!b||!Y)return;const Re=()=>!Y.parentNode&&he.appendChild(Y),De=()=>{var be;return(be=Y.parentNode)==null?void 0:be.removeChild(Y)};return le?Re():De(),()=>{De()}},g[15]=Y,g[16]=he,g[17]=le,g[18]=ye):ye=g[18];let pe;if(g[19]!==Y||g[20]!==le?(pe=[le,Y],g[19]=Y,g[20]=le,g[21]=pe):pe=g[21],(0,c.L)(ye,pe),!(le&&q))return null;let Ee;return g[22]!==q||g[23]!==Y?(Ee=Y?(0,s.createPortal)(q,Y):null,g[22]=q,g[23]=Y,g[24]=Ee):Ee=g[24],Ee});E.displayName="Portal";const O=E;var L=e(57577);function z(y,C,g){const{top:K,left:D,width:q,height:te}=y.getBoundingClientRect(),Z=K+g,le=D+C;return{width:q,height:te,top:Z,bottom:Z+te,left:le,right:le+q}}function G(y){if(!y||y.tagName==="HTML")return;const C=window.getComputedStyle(y),g=K=>["auto","scroll"].includes(K);return y.clientHeight<y.scrollHeight&&g(C.overflowX)||y.clientWidth<y.scrollWidth&&g(C.overflowY)?y:G(y.parentNode)}function ee(y,C){return Math.round(Math.abs(y))>Math.round(Math.abs(C))?y:C}const ie=(y,C)=>`translate3d(${y}px, ${C}px, 0)`;function W(y){if(!y)return[0,0];const C=window.getComputedStyle(y),g=C.transform||C.webkitTransform||"none";if(g==="none")return[0,0];if(g.match(/matrix\(([^)]+)\)/)){var K,D;const Z=((D=g.match(/matrix\((.+)\)/))==null||(K=D[1])==null?void 0:K.split(",").map(Number))||[0,0];if(Z.length===6)return[Z[4],Z[5]]}const[,q=0,te=0]=(g.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(Z=>Number(Z));return[q,te]}function N(y){const C=y.split("-"),g=C[0],K=C[1];let D;const q=g==="top"||g==="bottom",te=g==="left"||g==="right";return q&&(K==="start"&&(D="left"),K==="end"&&(D="right")),te&&(K==="start"&&(D="top"),K==="end"&&(D="bottom")),[g,D,q,te]}function H(y){return y?(0,R.Kn)(y)?[y.x||0,y.y||0]:[y||0,y||0]:[0,0]}const $={direction:"bottom",enableFlip:!0,enableShift:!0};function ne(y,C){const{reference:g,popper:K,arrow:D}=y;if(!g||!K)return;const q=F(F({},$),C),te=K.parentNode,[Z,le]=W(te),Y=window.pageYOffset,me=window.pageXOffset,U=z(g,me,Y),re=z(K,me,Y),he=U.width-re.width,ge=U.height-re.height;let oe=U.left-re.left+Z,se=U.top-re.top+le,T=oe,X=se;const[_,fe,xe,ye]=N(q.direction);let pe=_;const Ee=fe==="left"?0:fe==="right"?he:he/2,Re=he-Ee,De=fe==="top"?0:fe==="bottom"?ge:ge/2,be=ge-De;xe&&(oe+=Ee,se+=_==="top"?-re.height:U.height),ye&&(oe+=_==="left"?-re.width:U.width,se+=De);let Ae=G(g),we,Pe=0,Me=0;const[Te,Be]=H(q.offset),{height:ue=0,width:ve=0}=D?z(D,me,Y):{};for(;Ae;)we=z(Ae,me,Y),Fe(we),Ae=G(Ae.parentNode);const{clientHeight:Ne,clientWidth:Oe}=document.documentElement;Fe({top:Y,bottom:Y+Ne,left:me,right:me+Oe,height:Ne,width:Oe}),oe-=Pe,se-=Me,Xe(),xe&&(se+=pe==="bottom"?Be:-Be),ye&&(oe+=pe==="right"?Te:-Te),te.style.transform=ie(oe,se),te.setAttribute("data-direction",pe);function Fe(Se){const{top:$e,bottom:je,left:We,right:Ze,height:Ge,width:Je}=Se;if(xe){const Ke=Math.round(U.top-$e+U.height/2),Ue=Math.round(Ge/2);q.enableFlip&&(U.top-(re.height+Be+ue)<$e&&Ke<=Ue&&pe==="top"?(se+=re.height+U.height,pe="bottom"):U.bottom+re.height+Be+ue>Ge+$e&&Ke>=Ue&&pe==="bottom"&&(se-=re.height+U.height,pe="top")),q.enableShift&&(U.left+Ee<We&&(Pe=ee(U.right-ve>We?U.left+Ee-We:-U.width+Ee+ve,Pe)),U.right-Re>Ze&&(Pe=ee(U.left+ve<Ze?U.right-Re-Ze:U.width-Re-ve,Pe)))}if(ye){const Ke=Math.round(U.left-We+U.width/2),Ue=Math.round(Je/2);q.enableFlip&&(U.left-(re.width+Te+ve)<We&&Ke<Ue&&pe==="left"?(oe+=U.width+re.width,pe="right"):U.right+re.width+Te+ve>Ze&&Ke>Ue&&pe==="right"&&(oe-=U.width+re.width,pe="left")),q.enableShift&&(U.top+De<$e&&(Me=ee(U.bottom-ue>$e?U.top+De-$e:-U.height+De+ue,Me)),U.bottom-be>je&&(Me=ee(U.top+ue<je?U.bottom-be-je:U.height-be-ue,Me)))}}function Xe(){if(D){if(xe){const Se=U.width<re.width;Se?T+=U.width/2:T=oe+re.width/2,T-=ve/2,pe==="bottom"&&(X=se,se+=ue),pe==="top"&&(se-=ue,X=se+re.height),Pe<0&&Pe-Ee<0&&(Se?T+=(Ee-Pe)/2:U.width-Ee+Pe<re.width&&(T+=(U.width-Ee+Pe-re.width)/2)),Pe>0&&Pe+Re>0&&(Se?T-=(Pe+Re)/2:U.width-Pe-Re<re.width&&(T-=(U.width-Pe-Re-re.width)/2))}if(ye){const Se=U.height<re.height;Se?X+=U.height/2:X=se+re.height/2,X-=ue/2,pe==="left"&&(oe-=ve,T=oe+re.width),pe==="right"&&(T=oe,oe+=ve),Me<0&&Me-De<0&&(Se?X+=(De-Me)/2:U.height-De+Me<re.height&&(X+=(U.height-De+Me-re.height)/2)),Me>0&&Me+be>0&&(Se?X-=(Me+be)/2:U.height-Me-be<re.height&&(X-=(U.height-Me-be-re.height)/2))}xe&&(X+=pe==="bottom"?Be:-Be),ye&&(T+=pe==="right"?Te:-Te),D.style.transform=ie(T,X),D.setAttribute("data-direction",pe)}}}function Q(y){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!y)return[];const g=A(y);if(g===y.ownerDocument.body){const q=window.visualViewport?[window.visualViewport]:[],te=ae(g)?[g]:[];return[...C,window,...q,...te]}const D=Q(k(g));return[...C,g,...D]}function k(y){return y.nodeName.toLowerCase()==="html"?y:y.parentNode}function ae(y){const{overflow:C,overflowX:g,overflowY:K,display:D}=getComputedStyle(y);return/auto|scroll|overlay|hidden|clip/.test(C+K+g)&&!["contents"].includes(D)}const P=new Set(["html","body","#document"]);function A(y){return P.has(y.nodeName.toLowerCase())?y.ownerDocument.body:ae(y)?y:A(k(y))}var S=e(40549);const j="Escape",Ie=y=>{const{trigger:C,delay:g,disabled:K,visible:D,clickOutsideClose:q,triggeEl:te,onVisibleChange:Z}=y,le=(0,n.useRef)(!1),Y=(0,n.useRef)(!1),me=(0,n.useRef)(null),U=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(K)return;const oe=se=>{var T;!(te==null||(T=te.contains)==null)&&T.call(te,se.target)||le.current||D&&q&&(Z==null||Z(!1,{e:se,trigger:"document"}))};return document.addEventListener("mousedown",oe),document.addEventListener("touchend",oe),()=>{document.removeEventListener("mousedown",oe),document.removeEventListener("touchend",oe)}},[K,D,te]);function re(oe){g?(clearTimeout(me.current),me.current=setTimeout(oe,g)):oe()}function he(){return K?{}:{onMouseEnter:oe=>{C==="hover"&&!Y.current&&(clearTimeout(me.current),Z==null||Z(!0,{e:oe,trigger:"hover"}))},onMouseLeave:oe=>{C==="hover"&&(Y.current=!0,clearTimeout(me.current),Z==null||Z(!1,{e:oe,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(U.current),le.current=!0,U.current=window.setTimeout(()=>{le.current=!1})},onTouchEnd:()=>{clearTimeout(U.current),le.current=!0,U.current=window.setTimeout(()=>{le.current=!1})}}}function ge(oe){return K?{}:{onMouseDown:T=>{var X,_;C==="mousedown"&&re(()=>Z==null?void 0:Z(!D,{e:T,trigger:"mousedown"})),(X=(_=oe.props).onMouseDown)==null||X.call(_,T)},onClick:T=>{var X,_;C==="click"&&(T.preventDefault(),T.stopPropagation(),re(()=>Z==null?void 0:Z(!D,{e:T,trigger:"click"}))),(X=(_=oe.props).onClick)==null||X.call(_,T)},onTouchStart:T=>{var X,_;(C==="hover"||C==="mousedown")&&(Y.current=!1,re(()=>Z==null?void 0:Z(!0,{e:T,trigger:"hover"}))),(X=(_=oe.props).onTouchStart)==null||X.call(_,T)},onMouseEnter:T=>{var X,_;C==="hover"&&(Y.current=!1,re(()=>Z==null?void 0:Z(!0,{e:T,trigger:"hover"}))),(X=(_=oe.props).onMouseEnter)==null||X.call(_,T)},onMouseLeave:T=>{var X,_;C==="hover"&&(Y.current=!1,re(()=>Z==null?void 0:Z(!1,{e:T,trigger:"hover"}))),(X=(_=oe.props).onMouseLeave)==null||X.call(_,T)},onFocus:T=>{var X,_;C==="focus"&&re(()=>Z==null?void 0:Z(!0,{e:T,trigger:"focus"})),(X=(_=oe.props).onFocus)==null||X.call(_,T)},onBlur:T=>{var X,_;C==="focus"&&re(()=>Z==null?void 0:Z(!1,{e:T,trigger:"blur"})),(X=(_=oe.props).onBlur)==null||X.call(_,T)},onContextMenu:T=>{var X,_;C==="context-menu"&&(T.preventDefault(),re(()=>Z==null?void 0:Z(!0,{e:T,trigger:"context-menu"}))),(X=(_=oe.props).onContextMenu)==null||X.call(_,T)},onKeyDown:T=>{var X,_;(T==null?void 0:T.key)===j&&re(()=>Z==null?void 0:Z(!1,{e:T,trigger:"keydown-esc"})),(X=(_=oe.props).onKeyDown)==null||X.call(_,T)}}}return{genPopupProps:he,genTriggerProps:ge}};var J=e(7829);const ce={direction:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:0,trigger:"hover",delay:100,clickOutsideClose:!0,disabled:!1},de={position:"absolute",top:0,left:0,willChange:"transform"},B=(0,n.forwardRef)((y,C)=>{const{prefixCls:g,componentConfig:K}=(0,n.useContext)(L.E),{children:D,popper:q,enableShift:te,arrow:Z,motion:le={},enableFlip:Y,offset:me,direction:U,getContainer:re,zIndex:he,trigger:ge,delay:oe,disabled:se,visible:T,clickOutsideClose:X,onVisibleChange:_}=(0,p.S)(y,ce,K==null?void 0:K.Trigger),fe=(0,n.isValidElement)(D),xe=(0,n.useRef)(null),ye=(0,n.useRef)(null),pe=d(q),Ee=(0,n.useRef)(null),Re=(0,u.x1)(pe,Ee),De=(0,n.useRef)(null),[be,Ae]=(0,r.R)(T,{onChange:_}),{genPopupProps:we,genTriggerProps:Pe}=Ie({clickOutsideClose:X,delay:oe,disabled:se,visible:be,onVisibleChange:Ae,trigger:ge,triggeEl:xe.current});(0,n.useImperativeHandle)(C,()=>{});const Me=(0,u.t4)(D),Te=(0,u.t4)(q),Be=(0,n.useCallback)(ue=>{var ve;ue&&ue.type!=="resize"&&!((ve=ue.target)!=null&&ve.contains(xe.current))||setTimeout(()=>{ne({reference:xe.current,popper:Ee.current,arrow:ye.current},{direction:U,enableFlip:Y,enableShift:te,offset:me})})},[U,Y,te,me]);return(0,c.L)(()=>{if(be!==void 0){if(Be(),be===!0){var ue;(ue=De.current)==null||ue.toggle(!0)}else if(be===!1){var ve;(ve=De.current)==null||ve.toggle(!1)}}},[be]),(0,c.L)(()=>{Be();const ue=Q(xe.current),ve=Q(Ee.current),Ne=[...ue,...ve];return Ne.forEach(Oe=>{Oe.addEventListener("scroll",Be,{passive:!0})}),window.addEventListener("resize",Be,{passive:!0}),()=>{Ne.forEach(Oe=>{Oe.removeEventListener("scroll",Be)}),window.removeEventListener("resize",Be)}},[U,Y,te,me,xe.current,Re,ye.current]),console.log(le),fe?n.createElement(n.Fragment,null,n.createElement(v,{ref:xe,onResize:()=>Be()},(0,n.cloneElement)(D,F({},Pe(D)))),q?n.createElement(S.Z,Ce(F({ref:De},le),{unmountOnExit:le.unmountOnExit||!0}),ue=>{let{className:ve}=ue;return n.createElement(O,{getContainer:re},Z&&n.createElement("div",{style:Ce(F({},de),{zIndex:he}),ref:ye,className:(0,J.default)(`${g}-trigger-arrow`,ve)},Z),n.createElement("div",Ce(F({},we()),{className:(0,J.default)(`${g}-trigger`,ve),style:Ce(F({},de),{zIndex:he})}),(0,n.cloneElement)(q,{ref:Re})))}):null):null});B.displayName="Trigger";const w=B},36112:function(I,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return m}});var n=e(35541),p=e(98479),r=e.n(p),c={};for(var i in p)["default","Trigger"].indexOf(i)<0&&(c[i]=function(x){return p[x]}.bind(0,i));e.d(t,c);const o=n.Z,m=o},98479:function(){},84176:function(I,t,e){var n=e(75863);function p(r,c){if(r==null)return{};var i=n(r,c),o,m;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(r);for(m=0;m<x.length;m++)o=x[m],!(c.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(i[o]=r[o])}return i}I.exports=p,I.exports.__esModule=!0,I.exports.default=I.exports},75863:function(I){function t(e,n){if(e==null)return{};var p={},r=Object.keys(e),c,i;for(i=0;i<r.length;i++)c=r[i],!(n.indexOf(c)>=0)&&(p[c]=e[c]);return p}I.exports=t,I.exports.__esModule=!0,I.exports.default=I.exports},7829:function(I,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return p}});function n(r){var c,i,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var m=r.length;for(c=0;c<m;c++)r[c]&&(i=n(r[c]))&&(o&&(o+=" "),o+=i)}else for(i in r)r[i]&&(o&&(o+=" "),o+=i);return o}function p(){for(var r,c,i=0,o="",m=arguments.length;i<m;i++)(r=arguments[i])&&(c=n(r))&&(o&&(o+=" "),o+=c);return o}t.default=p},64508:function(I,t,e){"use strict";e.d(t,{Y:function(){return c}});var n=e(53360),p=e(75601);const r=(i,o,m,x,h)=>{clearTimeout(x.current);const f=(0,p.y0)(i);o(f),m.current=f,h&&h({current:f})},c=({enter:i=!0,exit:o=!0,preEnter:m,preExit:x,timeout:h,initialEntered:f,mountOnEnter:d,unmountOnExit:u,onStateChange:l}={})=>{const[v,s]=(0,n.useState)(()=>(0,p.y0)(f?p.cn:(0,p.Ef)(d))),a=(0,n.useRef)(v),R=(0,n.useRef)(),[b,M]=(0,p.fj)(h),E=(0,n.useCallback)(()=>{const L=(0,p.XZ)(a.current._s,u);L&&r(L,s,a,R,l)},[l,u]),O=(0,n.useCallback)(L=>{const z=ee=>{switch(r(ee,s,a,R,l),ee){case p.d0:b>=0&&(R.current=setTimeout(E,b));break;case p.Ix:M>=0&&(R.current=setTimeout(E,M));break;case p.iL:case p.iU:R.current=(0,p.Y3)(z,ee);break}},G=a.current.isEnter;typeof L!="boolean"&&(L=!G),L?!G&&z(i?m?p.iL:p.d0:p.cn):G&&z(o?x?p.iU:p.Ix:(0,p.Ef)(u))},[E,l,i,o,m,x,b,M,u]);return[v,O,E]}},75601:function(I,t,e){"use strict";e.d(t,{Ef:function(){return f},Ix:function(){return i},XZ:function(){return d},Y3:function(){return l},cn:function(){return r},d0:function(){return p},fj:function(){return u},iL:function(){return n},iU:function(){return c},y0:function(){return h}});const n=0,p=1,r=2,c=3,i=4,o=5,m=6,x=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=v=>({_s:v,status:x[v],isEnter:v<c,isMounted:v!==m,isResolved:v===r||v>i}),f=v=>v?m:o,d=(v,s)=>{switch(v){case p:case n:return r;case i:case c:return f(s)}},u=v=>typeof v=="object"?[v.enter,v.exit]:[v,v],l=(v,s)=>setTimeout(()=>{isNaN(document.body.offsetTop)||v(s+1)},0)}}]);
}());