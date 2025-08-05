!(function(){var Ue=Object.defineProperty,Ze=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var $e=(x,t,e)=>t in x?Ue(x,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[t]=e,G=(x,t)=>{for(var e in t||(t={}))We.call(t,e)&&$e(x,e,t[e]);if(Se)for(var e of Se(t))we.call(t,e)&&$e(x,e,t[e]);return x},ce=(x,t)=>Ze(x,ze(t));var Ce=(x,t)=>{var e={};for(var n in x)We.call(x,n)&&t.indexOf(n)<0&&(e[n]=x[n]);if(x!=null&&Se)for(var n of Se(x))t.indexOf(n)<0&&we.call(x,n)&&(e[n]=x[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{36419:function(x,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return H}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return I.D},useIsomorphicLayoutEffect:function(){return s.L},useMergeProps:function(){return a.S},useMergeState:function(){return P.R},usePrevious:function(){return Z.D},useResizeObserver:function(){return A.y}});var l={};e.r(l),e.d(l,{canUseDom:function(){return q.J},debounce:function(){return U.D},isArray:function(){return T.kJ},isEmptyObject:function(){return T.Qr},isFunction:function(){return T.mf},isNumber:function(){return T.hj},isObject:function(){return T.Kn},isString:function(){return T.HD},isUndefined:function(){return T.o8},omit:function(){return y.C},pick:function(){return S},throttle:function(){return X.P}});var r={};e.r(r),e.d(r,{default:function(){return z.Y},useTransition:function(){return z.Y},useTransitionMap:function(){return V},useTransitionState:function(){return z.Y}});var c=e(90819),i=e.n(c),o=e(89933),f=e.n(o),h=e(53360),g=e.t(h,2),v=e(45990),p=e(4177),d=e(86752),u=e.t(d,2),I=e(37797),s=e(60164),a=e(7657),P=e(62222),Z=e(45844),A=e(8240),q=e(34028),U=e(78831),T=e(80703),y=e(12598);function S(O,j){const w={};return j.forEach(E=>{E in O&&(w[E]=O[E])}),w}var X=e(6890),Q=e(22532),K=e(75257),N=e(7829),z=e(64508),W=e(75601);const Y=(O,j,w,E,B,b)=>{clearTimeout(B);const R=(0,W.y0)(j),k=new Map(E.current);k.set(O,R),w(k),E.current=k,b&&b({key:O,current:R})},V=({allowMultiple:O,enter:j=!0,exit:w=!0,preEnter:E,preExit:B,timeout:b,initialEntered:R,mountOnEnter:k,unmountOnExit:ne,onStateChange:$}={})=>{const[_,ee]=(0,h.useState)(new Map),te=(0,h.useRef)(_),se=(0,h.useRef)(new Map),[oe,ie]=(0,W.fj)(b),Ie=(0,h.useCallback)((ae,le)=>{const{initialEntered:fe=R}=le||{},pe=fe?W.cn:(0,W.Ef)(k);Y(ae,pe,ee,te),se.current.set(ae,{})},[R,k]),me=(0,h.useCallback)(ae=>{const le=new Map(te.current);return le.delete(ae)?(ee(le),te.current=le,se.current.delete(ae),!0):!1},[]),ue=(0,h.useCallback)(ae=>{const le=te.current.get(ae);if(!le)return;const{timeoutId:fe}=se.current.get(ae),pe=(0,W.XZ)(le._s,ne);pe&&Y(ae,pe,ee,te,fe,$)},[$,ne]),de=(0,h.useCallback)((ae,le)=>{const fe=te.current.get(ae);if(!fe)return;const pe=se.current.get(ae),xe=ge=>{switch(Y(ae,ge,ee,te,pe.timeoutId,$),ge){case W.d0:oe>=0&&(pe.timeoutId=setTimeout(()=>ue(ae),oe));break;case W.Ix:ie>=0&&(pe.timeoutId=setTimeout(()=>ue(ae),ie));break;case W.iL:case W.iU:pe.timeoutId=(0,W.Y3)(xe,ge);break}},he=fe.isEnter;typeof le!="boolean"&&(le=!he),le?he||(xe(j?E?W.iL:W.d0:W.cn),!O&&te.current.forEach((ge,ye)=>ye!==ae&&de(ye,!1))):he&&xe(w?B?W.iU:W.Ix:(0,W.Ef)(ne))},[$,ue,O,j,w,E,B,oe,ie,ne]),ve=(0,h.useCallback)(ae=>{if(!(!O&&ae!==!1))for(const le of te.current.keys())de(le,ae)},[O,de]);return{stateMap:_,toggle:de,toggleAll:ve,endTransition:ue,setItem:Ie,deleteItem:me}};var F=e(53175),J=e(67324),C=e(71932),M=e(31716),m=e(95154),D=e(81184),L=e.t(D,2),H={"sqi-web-src-common-demo-portal":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,99902))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49108).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":p,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":p,"react-dom":u,"@sqi-ui/hooks":n,"@sqi-ui/utils":l},renderOpts:{compile:function(){var O=f()(i()().mark(function w(){var E,B=arguments;return i()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(70).then(e.bind(e,25070));case 2:return R.abrupt("return",(E=R.sent).default.apply(E,B));case 3:case"end":return R.stop()}},w)}));function j(){return O.apply(this,arguments)}return j}()}},"sqi-web-src-common-demo-css-motion-base":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,74587))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58072).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":Q,"../CSSMotion.tsx":K,"../config-provider/context.ts":F,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":Q,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":K,clsx:N,"react-transition-state":r,"@sqi-ui/utils":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":F},renderOpts:{compile:function(){var O=f()(i()().mark(function w(){var E,B=arguments;return i()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(70).then(e.bind(e,25070));case 2:return R.abrupt("return",(E=R.sent).default.apply(E,B));case 3:case"end":return R.stop()}},w)}));function j(){return O.apply(this,arguments)}return j}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,85773))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":Q,"../CSSMotion.tsx":K,"../config-provider/context.ts":F,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":Q,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":K,clsx:N,"react-transition-state":r,"@sqi-ui/utils":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":F},renderOpts:{compile:function(){var O=f()(i()().mark(function w(){var E,B=arguments;return i()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(70).then(e.bind(e,25070));case 2:return R.abrupt("return",(E=R.sent).default.apply(E,B));case 3:case"end":return R.stop()}},w)}));function j(){return O.apply(this,arguments)}return j}()}},"sqi-web-src-common-demo-css-motion-portal":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,6685))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1175).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},"./motion.css":{type:"FILE",value:e(79172).Z},"react-dom":{type:"NPM",value:"19.1.1"},clsx:{type:"NPM",value:"2.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"../Portal.tsx":p,"../CSSMotion.tsx":K,"./motion.css":Q,"../config-provider/context.ts":F,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":K,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":Q,"react-dom":u,clsx:N,"@sqi-ui/hooks":n,"react-transition-state":r,"@sqi-ui/utils":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":F},renderOpts:{compile:function(){var O=f()(i()().mark(function w(){var E,B=arguments;return i()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(70).then(e.bind(e,25070));case 2:return R.abrupt("return",(E=R.sent).default.apply(E,B));case 3:case"end":return R.stop()}},w)}));function j(){return O.apply(this,arguments)}return j}()}},"sqi-web-src-common-demo-resize-observer":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,80023))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25094).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(87425).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(90458).Z},"../_util/toArray.ts":{type:"FILE",value:e(17588).Z},"../_util/dom.ts":{type:"FILE",value:e(48557).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":J,"../_util/ref.ts":C,"../_util/toArray.ts":M,"../_util/dom.ts":m,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":J,"@sqi-ui/utils":l,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":C,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":M,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":m,"react-is":L},renderOpts:{compile:function(){var O=f()(i()().mark(function w(){var E,B=arguments;return i()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,e.e(70).then(e.bind(e,25070));case 2:return R.abrupt("return",(E=R.sent).default.apply(E,B));case 3:case"end":return R.stop()}},w)}));function j(){return O.apply(this,arguments)}return j}()}}}},13842:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73819))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95121).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,15202))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75458).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35563))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44633).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}}}},6677:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h=e(5629),g={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,16286))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98669))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41122).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,86011))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"@sqi-ui/icons":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18024))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42791).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,7792))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95453).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}}}},58718:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h=e(84912),g={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42303))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52648).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,24394))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10654).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,55519))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8780))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42331).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98868))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(302).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41499))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37544).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}}}},94435:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,40787))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71841).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30933))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77322).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}}}},29876:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35038))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54117).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,31503))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58549).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35680))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65325).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}}}},60061:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h=e(66351),g={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,69753))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9098).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,93817))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96507).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26989))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8872).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33271))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17153).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,32093))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95921).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29727))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78066).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30407))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82986).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,56682))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23972).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}}}},13438:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(5629),h=e(45990),g={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73043))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f,"@sqi-ui/web":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37317))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36848).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f,"@sqi-ui/web":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,28981))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66135).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}}}},73931:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h=e(5629),g={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,27878))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25623).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30525))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38082).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,99670))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8899).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,66666))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(90822).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,32910))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13589).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,77182))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56596).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,52035))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34941).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,96294))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80488).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"@sqi-ui/icons":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72326))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31475).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,20416))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37604).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}}}},95752:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h=e(74944),g={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75228))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71038).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1753))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31932).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,46052))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8910).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,99789))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32105).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37848))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75386))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2930).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,91859))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27389).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function d(){var u,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(70).then(e.bind(e,25070));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,I));case 3:case"end":return a.stop()}},d)}));function p(){return v.apply(this,arguments)}return p}()}}}},5237:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72626))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7420).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,19067))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39113).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1251))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74317).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,44842))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(24811).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,66545))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17474).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function p(){var d,u=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(d=s.sent).default.apply(d,u));case 3:case"end":return s.stop()}},p)}));function v(){return g.apply(this,arguments)}return v}()}}}},37666:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return v}});var l=e(90819),r=e.n(l),c=e(89933),i=e.n(c),o=e(53360),f=e(45990),h=e(43261),g=e(45513),v={"sqi-web-src-trigger-demo-core":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,51031))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-core",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73739).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(91778).Z},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z}},entry:"index.tsx"},context:{"./demo.module.css":h,"./_wrapper.tsx":g,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":g},renderOpts:{compile:function(){var p=i()(r()().mark(function u(){var I,s=arguments;return r()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(70).then(e.bind(e,25070));case 2:return P.abrupt("return",(I=P.sent).default.apply(I,s));case 3:case"end":return P.stop()}},u)}));function d(){return p.apply(this,arguments)}return d}()}}}},75257:function(x,t,e){"use strict";e.r(t);var n=e(73193),l=e.n(n),r=e(10154),c=e.n(r),i=e(45332),o=e.n(i),f=e(84176),h=e.n(f),g=e(53360),v=e(7829),p=e(64508),d=e(80703),u=e(53175),I=["children","name","prefixCls"],s=(0,g.forwardRef)(function(a,P){var Z=(0,g.useContext)(u.ConfigContext),A=a.children,q=a.name,U=a.prefixCls,T=h()(a,I),y=(0,p.Y)(T),S=o()(y,2),X=S[0],Q=S[1],K=(0,g.isValidElement)(A);(0,g.useImperativeHandle)(P,function(){return{toggle:Q}});var N="".concat(U||Z.prefixCls).concat(q?"-".concat(q):""),z=(0,v.default)(["".concat(N,"-motion")],c()({},"".concat(N,"-motion-").concat(X.status),X.status));return(0,d.mf)(A)?X.isMounted?A(l()(l()({},X),{},{className:z,toggle:Q})):null:K?X.isMounted?(0,g.cloneElement)(A,{className:(0,v.default)(A.props.className,z)}):null:A});s.displayName="CSSMotion",t.default=s},4177:function(x,t,e){"use strict";e.r(t);var n=e(45332),l=e.n(n),r=e(53360),c=e(86752),i=e(60164),o=e(34028),f=e(80703),h=(0,o.J)();function g(p){return h?(0,f.HD)(p)?document.querySelector(p):(0,f.mf)(p)?p():p instanceof HTMLElement?p:document.body:null}var v=(0,r.forwardRef)(function(p,d){var u=p.getContainer,I=p.prefixCls,s=p.children,a=p.open,P=a===void 0?!0:a,Z=p.rootStyle,A=(0,r.useState)(null),q=l()(A,2),U=q[0],T=q[1],y=(0,r.useState)(null),S=l()(y,2),X=S[0],Q=S[1],K=X||document.body;(0,r.useEffect)(function(){var z=g(u);Q(z||null)},[u]);var N=function(){if(!h||U)return null;var W=document.createElement("div");I&&(W.className="".concat(I,"-portal-wrapper")),Z&&Object.assign(W.style,Z),W.setAttribute("data-portal","true"),T(W)};return(0,i.L)(function(){h&&(P?N():T(null))},[P]),(0,r.useImperativeHandle)(d,function(){return U},[U]),(0,i.L)(function(){if(!(!h||!U)){var z=function(){return!U.parentNode&&K.appendChild(U)},W=function(){var V;return(V=U.parentNode)===null||V===void 0?void 0:V.removeChild(U)};return P?z():W(),function(){W()}}},[P,U]),P&&s&&U?(0,c.createPortal)(s,U):null});v.displayName="Portal",t.default=v},67324:function(x,t,e){"use strict";e.r(t);var n=e(53360),l=e(6890),r=e(8240),c=e(31716),i=e(95154),o=e(71932),f=(0,n.forwardRef)(function(h,g){var v=h.children,p=h.disabled,d=h.throttleMs,u=d===void 0?100:d,I=h.onResize,s=(0,n.isValidElement)(v),a=s?(0,c.toArray)(v):[],P=s?(0,i.getReactNodeRef)(v):null,Z=(0,n.useRef)(null),A=(0,o.useComposeRef)(P,Z),q=function(){return(0,i.getDOM)(Z.current)};(0,n.useImperativeHandle)(g,function(){return q()});var U=I?(0,l.P)(I,u):void 0;return(0,r.y)(Z,U,!p),s?(0,n.cloneElement)(v,{ref:A}):v});f.displayName="ResizeObserverComponent",t.default=f},95154:function(x,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return i},getReactNodeRef:function(){return o},isDOM:function(){return c}});var n=e(89957),l=e.n(n),r=e(53360);function c(f){return f instanceof HTMLElement||f instanceof SVGElement}function i(f){return f&&l()(f)==="object"&&c(f.nativeElement)?f.nativeElement:c(f)?f:null}function o(f){var h=f&&(0,r.isValidElement)(f);if(!h)return null;if(parseInt(r.version)>=19){var g;return((g=f.props)===null||g===void 0?void 0:g.ref)||null}return f.ref}},71932:function(x,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return i},fillRef:function(){return o},supportNodeRef:function(){return v},supportRef:function(){return h},useComposeRef:function(){return f}});var n=e(37797),l=e(80703),r=e(53360),c=e(11607),i=function(){for(var d=arguments.length,u=new Array(d),I=0;I<d;I++)u[I]=arguments[I];var s=u.filter(Boolean);return s.length<=1?s[0]:function(a){u.forEach(function(P){o(P,a)})}},o=function(d,u){(0,l.mf)(d)?d(u):(0,l.Kn)(d)&&"current"in d&&(d.current=u)},f=function(){for(var d=arguments.length,u=new Array(d),I=0;I<d;I++)u[I]=arguments[I];return(0,n.D)(function(){return i.apply(void 0,u)},u,function(s,a){return s.length!==a.length||s.every(function(P,Z){return P!==a[Z]})})},h=function(d){var u,I;if(!d)return!1;var s=parseInt(r.version);if(g(d)&&s>=19)return!0;var a=(0,c.isMemo)(d)?d.type.type:d.type;return!(typeof a=="function"&&!((u=a.prototype)!==null&&u!==void 0&&u.render)&&a.$$typeof!==c.ForwardRef||typeof d=="function"&&!((I=d.prototype)!==null&&I!==void 0&&I.render)&&d.$$typeof!==c.ForwardRef)};function g(p){return(0,r.isValidElement)(p)&&!(0,c.isFragment)(p)}var v=function(d){return g(d)&&h(d)}},31716:function(x,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return r}});var n=e(53360),l=e(11607);function r(c){var i=[];return n.Children.toArray(c).forEach(function(o){o!=null&&(Array.isArray(o)?i=i.concat(r(o)):(0,n.isValidElement)(o)&&(0,l.isFragment)(o)&&o.props?i=i.concat(r(o.props.children)):i.push(o))}),i}},84912:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),l=e(69787);function r(c){var i=c.item,o=c.checked,f={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},h={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,l.jsxs)("div",{style:f,children:[(0,l.jsx)("div",{style:h}),(0,l.jsx)("strong",{children:i}),(0,l.jsx)("div",{children:"this is a checkbox"})]})}},53175:function(x,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return r},defaultConfigProps:function(){return l}});var n=e(53360),l={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(l)},66351:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),l=e(69787);function r(c){var i=c.colorPalette,o=i===void 0?6:i,f=c.children,h=c.height;return(0,l.jsx)("div",{style:{height:h||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:f})}},74944:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),l=e(69787);function r(c){var i=c.item,o=c.checked,f={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},h={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,l.jsxs)("div",{style:f,children:[(0,l.jsx)("div",{style:h}),(0,l.jsx)("strong",{children:i}),(0,l.jsx)("div",{children:"this is a radio"})]})}},45513:function(x,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return c}});var n=e(53360),l=e(43261),r=e(69787),c=(0,n.forwardRef)(function(i,o){var f=i.size,h=i.backgroundColor,g=i.children;return(0,r.jsx)("div",{ref:o,className:l.default.box,style:{width:f+"px",height:f+"px",backgroundColor:h},children:g})});c.displayName="Component"},22532:function(x,t,e){"use strict";e.r(t)},43261:function(x,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai"}},34481:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 css \u9690\u85CF\u7EC4\u4EF6",paraId:4}]},97302:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},81955:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},15096:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},38427:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},68291:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactN`ode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},18070:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},50409:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},50310:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u8F93\u5165\u6846\u7EC4\u4EF6",paraId:10,tocIndex:11},{value:"InputProps",paraId:10,tocIndex:11},{value:"\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u63CF\u8FF0",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"type",paraId:11,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:11,tocIndex:12},{value:"MDN",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"text",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:11,tocIndex:12},{value:"ConfigSize",paraId:11,tocIndex:12},{value:"md",paraId:11,tocIndex:12},{value:"status",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:11,tocIndex:12},{value:"success",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"warning",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"error",paraId:11,tocIndex:12},{value:"tips",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"allowClear",paraId:11,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"align",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"center",paraId:11,tocIndex:12},{value:" |",paraId:11,tocIndex:12},{value:"right",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"variant",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"borderless",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"underline",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"addonBefore",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"addonAfter",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"prefix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"suffix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"visibilityToggle",paraId:11,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"VisibilityToggle",paraId:12,tocIndex:12},{value:"maxLength",paraId:11,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:11,tocIndex:12},{value:"number",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"MaxLength",paraId:13,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:11,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:14,tocIndex:13},{value:"\u63CF\u8FF0",paraId:14,tocIndex:13},{value:"\u7C7B\u578B",paraId:14,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:13},{value:"visible",paraId:14,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:14,tocIndex:13},{value:"boolean",paraId:14,tocIndex:13},{value:"renderIcon",paraId:14,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:14,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:14,tocIndex:13},{value:"onVisibleChange",paraId:14,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:14,tocIndex:13},{value:"(visible: boolean) => void",paraId:14,tocIndex:13},{value:"\u5C5E\u6027",paraId:15,tocIndex:14},{value:"\u63CF\u8FF0",paraId:15,tocIndex:14},{value:"\u7C7B\u578B",paraId:15,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:14},{value:"length",paraId:15,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:15,tocIndex:14},{value:"number",paraId:15,tocIndex:14},{value:"showLimit",paraId:15,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14},{value:"true",paraId:15,tocIndex:14},{value:"errorOnly",paraId:15,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14}]},65793:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},18328:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684 ",paraId:1,tocIndex:6},{value:"SpaceProps",paraId:1,tocIndex:6},{value:" \u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u4E3A Markdown \u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:2,tocIndex:6},{value:"\u63CF\u8FF0",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"size",paraId:2,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:2,tocIndex:6},{value:"SizeType",paraId:3,tocIndex:6},{value:" | ",paraId:2,tocIndex:6},{value:"[SizeType, SizeType]",paraId:2,tocIndex:6},{value:"direction",paraId:2,tocIndex:6},{value:"\u65B9\u5411",paraId:2,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:6},{value:"'horizontal'",paraId:2,tocIndex:6},{value:"align",paraId:2,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:2,tocIndex:6},{value:"wrap",paraId:2,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"split",paraId:2,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:2,tocIndex:6},{value:"ReactNode",paraId:2,tocIndex:6},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u63CF\u8FF0",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"SizeType",paraId:4,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:4,tocIndex:7},{value:"ConfigSize",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"number",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"undefined",paraId:4,tocIndex:7}]},8825:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0},{value:"\u5F53 ",paraId:1},{value:"direction",paraId:1},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:1},{value:"top",paraId:1},{value:" \u548C ",paraId:1},{value:"bottom",paraId:1},{value:" \u65F6\uFF0C",paraId:1},{value:"offset",paraId:1},{value:" \u4EC5\u652F\u6301 y \u8F74\u7684\u504F\u79FB",paraId:1},{value:"\u5F53 ",paraId:1},{value:"direction",paraId:1},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:1},{value:"left",paraId:1},{value:" \u548C ",paraId:1},{value:"right",paraId:1},{value:" \u65F6\uFF0C",paraId:1},{value:"offset",paraId:1},{value:" \u4EC5\u652F\u6301 x \u8F74\u7684\u504F\u79FB\u3002",paraId:1},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popup \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08popup \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:2}]},6321:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},16173:function(x,t){"use strict";t.Z=`import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react';
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
`},87425:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef } from 'react';
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
`},58072:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},1175:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},45672:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},79172:function(x,t){"use strict";t.Z=`.sqi-demo-motion {
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
`},49108:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},25094:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},48557:function(x,t){"use strict";t.Z=`import { isValidElement, version } from 'react';

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
`},90458:function(x,t){"use strict";t.Z=`import { useCompareMemo } from '@sqi-ui/hooks';
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
`},17588:function(x,t){"use strict";t.Z=`import { Children, isValidElement, type ReactNode } from 'react';
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
`},44633:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},95121:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},75458:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},60705:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},41122:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},89593:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},95453:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},42791:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},18359:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},52648:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},10654:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},302:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},93672:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},42331:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},37544:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},77613:function(x,t){"use strict";t.Z=`import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sqi',
  iconPrefix: 'sqi',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
`},71841:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},77322:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},54117:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},65325:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},58549:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},95921:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},9098:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},93720:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},8872:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},96507:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},17153:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},78066:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},82986:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},23972:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},64705:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},36848:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},66135:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},34941:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},80488:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},90822:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},25623:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},37604:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},31475:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},38082:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},13589:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},56596:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},8899:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},61963:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},31932:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},71038:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},2930:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},8910:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},27389:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},32105:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},75593:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},74317:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},7420:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},39113:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},17474:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},24811:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},34167:function(x,t){"use strict";t.Z=`import React, { forwardRef } from 'react';
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
`},73739:function(x,t){"use strict";t.Z=`import React from 'react';
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
            popup={
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
`},91778:function(x,t){"use strict";t.Z=`.container {
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
}
`},27833:function(x,t,e){"use no memo";"use strict";var n=Object.create,l=Object.defineProperty,r=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,i=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,f=(C,M)=>{for(var m in M)l(C,m,{get:M[m],enumerable:!0})},h=(C,M,m,D)=>{if(M&&typeof M=="object"||typeof M=="function")for(let L of c(M))!o.call(C,L)&&L!==m&&l(C,L,{get:()=>M[L],enumerable:!(D=r(M,L))||D.enumerable});return C},g=(C,M,m)=>(m=C!=null?n(i(C)):{},h(M||!C||!C.__esModule?l(m,"default",{value:C,enumerable:!0}):m,C)),v=C=>h(l({},"__esModule",{value:!0}),C),p={};f(p,{$dispatcherGuard:()=>X,$makeReadOnly:()=>K,$reset:()=>Q,$structuralCheck:()=>J,c:()=>q,clearRenderCounterRegistry:()=>z,renderCounterRegistry:()=>N,useRenderCounter:()=>V}),x.exports=v(p);var d=g(e(53360)),{useRef:u,useEffect:I,isValidElement:s}=d,a,P=(a=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)!=null?a:d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.memo_cache_sentinel"),A,q=typeof((A=d.__COMPILER_RUNTIME)==null?void 0:A.c)=="function"?d.__COMPILER_RUNTIME.c:function(M){return d.useMemo(()=>{const m=new Array(M);for(let D=0;D<M;D++)m[D]=Z;return m[Z]=!0,m},[])},U={};["readContext","useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","unstable_isNewReconciler","getCacheSignal","getCacheForType","useCacheRefresh"].forEach(C=>{U[C]=()=>{throw new Error(`[React] Unexpected React hook call (${C}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)}});var T=null;U.useMemoCache=C=>{if(T==null)throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");return T.useMemoCache(C)};function y(C){return P.ReactCurrentDispatcher.current=C,P.ReactCurrentDispatcher.current}var S=[];function X(C){const M=P.ReactCurrentDispatcher.current;if(C===0){if(S.push(M),S.length===1&&(T=M),M===U)throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");y(U)}else if(C===1){const m=S.pop();if(m==null)throw new Error("React Compiler internal error: unexpected null in guard stack");S.length===0&&(T=null),y(m)}else if(C===2)S.push(M),y(T);else if(C===3){const m=S.pop();if(m==null)throw new Error("React Compiler internal error: unexpected null in guard stack");y(m)}else throw new Error("React Compiler internal error: unreachable block"+C)}function Q(C){for(let M=0;M<C.length;M++)C[M]=Z}function K(){throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")}var N=new Map;function z(){for(const C of N.values())C.forEach(M=>{M.count=0})}function W(C,M){let m=N.get(C);m==null&&(m=new Set,N.set(C,m)),m.add(M)}function Y(C,M){const m=N.get(C);m!=null&&m.delete(M)}function V(C){const M=u(null);M.current!=null&&(M.current.count+=1),I(()=>{if(M.current==null){const m={count:0};W(C,m),M.current=m}return()=>{M.current!==null&&Y(C,M.current)}})}var F=new Set;function J(C,M,m,D,L,H){function O(E,B,b,R){const k=`${D}:${H} [${L}] ${m}${b} changed from ${E} to ${B} at depth ${R}`;F.has(k)||(F.add(k),console.error(k))}const j=2;function w(E,B,b,R){if(!(R>j)){if(E===B)return;if(typeof E!=typeof B)O(`type ${typeof E}`,`type ${typeof B}`,b,R);else if(typeof E=="object"){const k=Array.isArray(E),ne=Array.isArray(B);if(E===null&&B!==null)O("null",`type ${typeof B}`,b,R);else if(B===null)O(`type ${typeof E}`,"null",b,R);else if(E instanceof Map)if(!(B instanceof Map))O("Map instance","other value",b,R);else if(E.size!==B.size)O(`Map instance with size ${E.size}`,`Map instance with size ${B.size}`,b,R);else for(const[$,_]of E)B.has($)?w(_,B.get($),`${b}.get(${$})`,R+1):O(`Map instance with key ${$}`,`Map instance without key ${$}`,b,R);else if(B instanceof Map)O("other value","Map instance",b,R);else if(E instanceof Set)if(!(B instanceof Set))O("Set instance","other value",b,R);else if(E.size!==B.size)O(`Set instance with size ${E.size}`,`Set instance with size ${B.size}`,b,R);else for(const $ of B)E.has($)||O(`Set instance without element ${$}`,`Set instance with element ${$}`,b,R);else if(B instanceof Set)O("other value","Set instance",b,R);else if(k||ne)if(k!==ne)O(`type ${k?"array":"object"}`,`type ${ne?"array":"object"}`,b,R);else if(E.length!==B.length)O(`array with length ${E.length}`,`array with length ${B.length}`,b,R);else for(let $=0;$<E.length;$++)w(E[$],B[$],`${b}[${$}]`,R+1);else if(s(E)||s(B))s(E)!==s(B)?O(`type ${s(E)?"React element":"object"}`,`type ${s(B)?"React element":"object"}`,b,R):E.type!==B.type?O(`React element of type ${E.type}`,`React element of type ${B.type}`,b,R):w(E.props,B.props,`[props of ${b}]`,R+1);else{for(const $ in B)$ in E||O(`object without key ${$}`,`object with key ${$}`,b,R);for(const $ in E)$ in B?w(E[$],B[$],`${b}.${$}`,R+1):O(`object with key ${$}`,`object without key ${$}`,b,R)}}else{if(typeof E=="function")return;isNaN(E)||isNaN(B)?isNaN(E)!==isNaN(B)&&O(`${isNaN(E)?"NaN":"non-NaN value"}`,`${isNaN(B)?"NaN":"non-NaN value"}`,b,R):E!==B&&O(E,B,b,R)}}}w(C,M,"",0)}},11607:function(x,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler");Symbol.for("react.provider");var i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.for("react.view_transition"),u=Symbol.for("react.client.reference");function I(s){if(typeof s=="object"&&s!==null){var a=s.$$typeof;switch(a){case e:switch(s=s.type,s){case l:case c:case r:case h:case g:case d:return s;default:switch(s=s&&s.$$typeof,s){case o:case f:case p:case v:return s;case i:return s;default:return a}}case n:return a}}}t.ContextConsumer=i,t.ContextProvider=o,t.Element=e,t.ForwardRef=f,t.Fragment=l,t.Lazy=p,t.Memo=v,t.Portal=n,t.Profiler=c,t.StrictMode=r,t.Suspense=h,t.SuspenseList=g,t.isContextConsumer=function(s){return I(s)===i},t.isContextProvider=function(s){return I(s)===o},t.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===e},t.isForwardRef=function(s){return I(s)===f},t.isFragment=function(s){return I(s)===l},t.isLazy=function(s){return I(s)===p},t.isMemo=function(s){return I(s)===v},t.isPortal=function(s){return I(s)===n},t.isProfiler=function(s){return I(s)===c},t.isStrictMode=function(s){return I(s)===r},t.isSuspense=function(s){return I(s)===h},t.isSuspenseList=function(s){return I(s)===g},t.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===l||s===c||s===r||s===h||s===g||typeof s=="object"&&s!==null&&(s.$$typeof===p||s.$$typeof===v||s.$$typeof===o||s.$$typeof===i||s.$$typeof===f||s.$$typeof===u||s.getModuleId!==void 0)},t.typeOf=I},81184:function(x,t,e){"use strict";x.exports=e(11607)},37797:function(x,t,e){"use strict";e.d(t,{D:function(){return l}});var n=e(53360);function l(r,c,i){const o=(0,n.useRef)({});return(!("value"in o.current)||i(o.current.condition,c))&&(o.current.value=r(),o.current.condition=c),o.current.value}},60164:function(x,t,e){"use strict";e.d(t,{L:function(){return c}});var n=e(53360),l=e(34028);const c=(0,l.J)()?n.useLayoutEffect:n.useEffect},7657:function(x,t,e){"use strict";e.d(t,{S:function(){return l}});var n=e(53360);function l(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return(0,n.useMemo)(()=>{const o=G(G({},c),i),f=G({},r);for(const h in o)f[h]===void 0&&(f[h]=o[h]);return f},[r,c,i])}},62222:function(x,t,e){"use strict";e.d(t,{R:function(){return c}});var n=e(53360),l=e(80703),r=e(45844);function c(i,o){const{defaultValue:f,value:h,onChange:g}=o||{},[v,p]=(0,n.useState)(()=>(0,l.o8)(h)?(0,l.o8)(f)?(0,l.mf)(i)?i():i:(0,l.mf)(f)?f():f:h),d=(0,r.D)(h),u=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(u.current){u.current=!1;return}(0,l.o8)(h)&&d!==h&&p(h)},[h]);const I=(0,l.o8)(h)?v:h,s=(0,n.useCallback)(a=>{const P=(0,l.mf)(a)?a(I):a;(0,l.o8)(h)&&p(P),!Object.is(P,I)&&(g==null||g(P))},[v,I]);return[I,s]}},45844:function(x,t,e){"use strict";e.d(t,{D:function(){return l}});var n=e(53360);function l(r){const c=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{c.current=r},[r]),c.current}},8240:function(x,t,e){"use strict";e.d(t,{y:function(){return i}});var n=e(53360),l=e(20759),r=e(34028),c=e(60164);function i(o,f){let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const g=(0,n.useRef)(null);g.current=f,(0,c.L)(()=>{const v=o.current;let p=null;if(!h||!(0,r.J)()||!v)return;const d=u=>{var I;(I=g.current)==null||I.call(g,u)};return p=new l.Z(d),p.observe(v),()=>{if(p&&v){var u;p.unobserve(v),(u=p.disconnect)==null||u.call(p),p=null}}},[o,h])}},31136:function(x,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(53360);const r=(0,n.createContext)({})},37907:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(7829),r=e(31136);const c=(0,n.forwardRef)((o,f)=>{const Z=o,{svg:h,type:g,spin:v,rotate:p,className:d,style:u}=Z,I=Ce(Z,["svg","type","spin","rotate","className","style"]),{prefixCls:s="sqi"}=(0,n.useContext)(r.Z),a=(0,l.default)(`${s}-icon`,{[`${s}-icon-spin`]:!!v&&!!h},d),P=u||{};return Number.isSafeInteger(p)&&(P.transform=`rotate(${p}deg)`),n.createElement("span",G({role:"img",ref:f,"aria-label":g,className:a,style:P},I),h)});c.displayName="Icon";const i=c},46874:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"add",ref:f},o)));c.displayName="AddIcon";const i=c},1824:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"browse",ref:f},o)));c.displayName="BrowseIcon";const i=c},85569:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"browse-off",ref:f},o)));c.displayName="BrowseOffIcon";const i=c},23436:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"check-circle-filled",ref:f},o)));c.displayName="CheckCircleFilledIcon";const i=c},46608:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"chevron-down",ref:f},o)));c.displayName="ChevronDownIcon";const i=c},58360:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"close-circle-filled",ref:f},o)));c.displayName="CloseCircleFilledIcon";const i=c},27377:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"close",ref:f},o)));c.displayName="CloseIcon";const i=c},50397:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"info-circle-filled",ref:f},o)));c.displayName="InfoCircleFilledIcon";const i=c},60333:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"loading",ref:f},o)));c.displayName="LoadingIcon";const i=c},36106:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"search",ref:f},o)));c.displayName="SearchIcon";const i=c},65466:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"upload",ref:f},o)));c.displayName="UploadIcon";const i=c},21925:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"warn-circle-filled",ref:f},o)));c.displayName="WarnCircleFilledIcon";const i=c},5629:function(x,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return r.Z},BrowseIcon:function(){return i.Z},BrowseOffIcon:function(){return c.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return f.Z},CloseCircleFilledIcon:function(){return h.Z},CloseIcon:function(){return g.Z},IconContext:function(){return l.Z},InfoCircleFilledIcon:function(){return v.Z},LoadingIcon:function(){return p.Z},SearchIcon:function(){return d.Z},UploadIcon:function(){return u.Z},WarnCircleFilledIcon:function(){return I.Z},default:function(){return s}});var n=e(37907),l=e(31136),r=e(46874),c=e(85569),i=e(1824),o=e(23436),f=e(46608),h=e(58360),g=e(27377),v=e(50397),p=e(60333),d=e(36106),u=e(65466),I=e(21925);const s=n.Z},34028:function(x,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(x,t,e){"use strict";e.d(t,{D:function(){return n}});function n(l,r){let c=null;const i=function(){for(var o=arguments.length,f=new Array(o),h=0;h<o;h++)f[h]=arguments[h];c&&clearTimeout(c),c=setTimeout(()=>{l.apply(this,f),c=null},r)};return i.cancel=()=>{c&&(clearTimeout(c),c=null)},i}},80703:function(x,t,e){"use strict";e.d(t,{HD:function(){return i},Kn:function(){return o},Qr:function(){return f},hj:function(){return h},kJ:function(){return c},mf:function(){return l},o8:function(){return r}});const n=Object.prototype.toString;function l(g){return n.call(g)==="[object Function]"}function r(g){return g===void 0}function c(g){return n.call(g)==="[object Array]"}function i(g){return n.call(g)==="[object String]"}const o=g=>n.call(g)==="[object Object]",f=g=>{if(!o(g))return!0;for(const v in g)if(Object.prototype.hasOwnProperty.call(g,v))return!1;return!0},h=g=>n.call(g)==="[object Number]"&&g===g},12598:function(x,t,e){"use strict";e.d(t,{C:function(){return n}});function n(l,r){const c=Object.assign({},l);return Array.isArray(r)&&r.forEach(i=>{delete c[i]}),c}},6890:function(x,t,e){"use strict";e.d(t,{P:function(){return l}});var n=e(78831);function l(r,c){let i=null;const o=(0,n.D)(r,c),f=function(){for(var h=arguments.length,g=new Array(h),v=0;v<h;v++)g[v]=arguments[v];i===null?i=Date.now():Date.now()-i>=c&&(i=Date.now(),o.cancel()),o(...g)};return f.cancel=o.cancel,f}},92266:function(x,t,e){"use strict";e.d(t,{C:function(){return c},Z:function(){return i}});var n=e(53360),l=e(7829),r=e(62222);const c=(0,n.forwardRef)((o,f)=>{const y=o,{prefixCls:h,className:g,style:v,checked:p,disabled:d,defaultChecked:u=!1,type:I="checkbox",title:s,onChange:a,_getCheckedValue:P}=y,Z=Ce(y,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[A,q]=(0,r.R)(u,{value:p});(0,n.useEffect)(()=>{P==null||P(A)},[A]);const U=(0,l.default)(h,g,{[`${h}-checked`]:A,[`${h}-disabled`]:d}),T=S=>{d||("checked"in o||q(S.target.checked),a==null||a({target:ce(G({},o),{checked:S.target.checked}),event:S}))};return n.createElement("span",{className:U,title:s,style:v},n.createElement("input",ce(G({},Z),{className:`${h}-input`,ref:f,onChange:T,disabled:d,checked:A,type:I})),n.createElement("span",{className:`${h}-inner`}))});c.displayName="BaseCheckbox";const i=c},4814:function(x,t,e){"use strict";e.d(t,{sQ:function(){return i},t4:function(){return v},x1:function(){return f}});var n=e(37797),l=e(80703),r=e(53360),c=e(11607);const i=function(){for(var p=arguments.length,d=new Array(p),u=0;u<p;u++)d[u]=arguments[u];const I=d.filter(Boolean);return I.length<=1?I[0]:s=>{d.forEach(a=>{o(a,s)})}},o=(p,d)=>{(0,l.mf)(p)?p(d):(0,l.Kn)(p)&&"current"in p&&(p.current=d)},f=function(){for(var p=arguments.length,d=new Array(p),u=0;u<p;u++)d[u]=arguments[u];return(0,n.D)(()=>i(...d),d,(I,s)=>I.length!==s.length||I.every((a,P)=>a!==s[P]))},h=p=>{var d,u;if(!p)return!1;const I=parseInt(r.version);if(g(p)&&I>=19)return!0;const s=(0,c.isMemo)(p)?p.type.type:p.type;return!(typeof s=="function"&&!((d=s.prototype)!=null&&d.render)&&s.$$typeof!==c.ForwardRef||typeof p=="function"&&!((u=p.prototype)!=null&&u.render)&&p.$$typeof!==c.ForwardRef)};function g(p){return(0,r.isValidElement)(p)&&!(0,c.isFragment)(p)}const v=p=>g(p)&&h(p)},21299:function(x,t,e){"use strict";e.d(t,{q:function(){return r}});var n=e(53360),l=e(11607);function r(c){let i=[];return n.Children.toArray(c).forEach(o=>{o!=null&&(Array.isArray(o)?i=i.concat(r(o)):(0,n.isValidElement)(o)&&(0,l.isFragment)(o)&&o.props?i=i.concat(r(o.props.children)):i.push(o))}),i}},4274:function(x,t,e){"use strict";e.d(t,{b:function(){return A}});var n=e(27833),l=e(53360),r=e(7829),c=e(7657),i=e(23436),o=e(50397),f=e(58360),h=e(21925),g=e(27377),v=e(64508),p=e(80703),d=e(57577);const u=(0,l.forwardRef)((U,T)=>{const y=(0,l.useContext)(d.E),F=U,{children:S,name:X,prefixCls:Q}=F,K=Ce(F,["children","name","prefixCls"]),[N,z]=(0,v.Y)(K),W=(0,l.isValidElement)(S);(0,l.useImperativeHandle)(T,()=>({toggle:z}));const Y=`${Q||y.prefixCls}${X?`-${X}`:""}`,V=(0,r.default)([`${Y}-motion`],{[`${Y}-motion-${N.status}`]:N.status});return(0,p.mf)(S)?N.isMounted?S(ce(G({},N),{className:V,toggle:z})):null:W?N.isMounted?(0,l.cloneElement)(S,{className:(0,r.default)(S.props.className,V)}):null:S});u.displayName="CSSMotion";const I=u,s={type:"info",showIcon:!0},a={success:i.Z,info:o.Z,error:f.Z,warning:h.Z},P=(0,l.forwardRef)((U,T)=>{const y=(0,n.c)(38),{prefixCls:S,componentConfig:X}=(0,l.useContext)(d.E),{className:Q,style:K,title:N,description:z,type:W,closable:Y,showIcon:V,action:F,icon:J,onClose:C}=(0,c.S)(U,s,X==null?void 0:X.Alert),M=(0,l.useRef)(null);let m;y[0]!==J||y[1]!==W?(m=()=>(0,l.isValidElement)(J)?J:W?(0,l.createElement)(a[W]):null,y[0]=J,y[1]=W,y[2]=m):m=y[2];const D=m,L=`${S}-alert`,H=`${S}-alert-${W}`;let O;y[3]!==Q||y[4]!==L||y[5]!==H?(O=(0,r.default)(L,H,Q),y[3]=Q,y[4]=L,y[5]=H,y[6]=O):O=y[6];const j=O;let w;y[7]!==C?(w=se=>{var oe;(oe=M.current)==null||oe.toggle(),C==null||C(se)},y[7]=C,y[8]=w):w=y[8];const E=w;let B;y[9]!==S||y[10]!==D||y[11]!==V?(B=V&&l.createElement("div",{className:`${S}-alert-icon`},D()),y[9]=S,y[10]=D,y[11]=V,y[12]=B):B=y[12];const b=`${S}-alert-content`;let R;y[13]!==S||y[14]!==N?(R=!!N&&l.createElement("div",{className:`${S}-alert-title`},N),y[13]=S,y[14]=N,y[15]=R):R=y[15];const k=`${S}-alert-description`;let ne;y[16]!==z||y[17]!==k?(ne=l.createElement("div",{className:k},z),y[16]=z,y[17]=k,y[18]=ne):ne=y[18];let $;y[19]!==b||y[20]!==R||y[21]!==ne?($=l.createElement("div",{className:b},R,ne),y[19]=b,y[20]=R,y[21]=ne,y[22]=$):$=y[22];let _;y[23]!==F||y[24]!==S?(_=F&&l.createElement("div",{className:`${S}-alert-action`},F),y[23]=F,y[24]=S,y[25]=_):_=y[25];let ee;y[26]!==Y||y[27]!==E||y[28]!==S?(ee=Y&&l.createElement("button",{className:`${S}-alert-close`,onClick:E},l.createElement(g.Z,null)),y[26]=Y,y[27]=E,y[28]=S,y[29]=ee):ee=y[29];let te;return y[30]!==j||y[31]!==T||y[32]!==K||y[33]!==$||y[34]!==_||y[35]!==ee||y[36]!==B?(te=l.createElement(I,{ref:M,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},l.createElement("div",{role:"alert",className:j,style:K,ref:T},B,$,_,ee)),y[30]=j,y[31]=T,y[32]=K,y[33]=$,y[34]=_,y[35]=ee,y[36]=B,y[37]=te):te=y[37],te});P.displayName="Alert";const A=P,q=null},60884:function(x,t,e){"use strict";e.d(t,{z:function(){return g}});var n=e(53360),l=e(7829),r=e(60333),c=e(7657),i=e(57577);const o={type:"default",variant:"default",htmlType:"button"},f=(0,n.forwardRef)((p,d)=>{const{prefixCls:u,size:I="md",componentConfig:s}=(0,n.useContext)(i.E),C=(0,c.S)(p,o,s==null?void 0:s.Button),{children:P,type:Z,size:A=I,htmlType:q,status:U,loading:T,disabled:y,variant:S,icon:X,href:Q,target:K,onClick:N,anchorProps:z={}}=C,W=Ce(C,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),Y=T?n.createElement(r.Z,{spin:T}):X,V=Q?"link":Z,F=(0,l.default)(`${u}-btn`,`${u}-btn-${V}`,{[`${u}-btn-size-${A}`]:A,[`${u}-btn-status-${U}`]:!!U,[`${u}-btn-variant-${S}`]:S,[`${u}-btn-loading`]:T,[`${u}-btn-disabled`]:y}),J=M=>{if(T||y)return void M.preventDefault();N==null||N(M)};return Q?n.createElement("a",ce(G({},z),{href:Q,target:K,className:F,onClick:J,ref:d}),Y,n.createElement("span",null,P)):n.createElement("button",ce(G({},W),{type:q,className:F,onClick:J,ref:d}),Y,n.createElement("span",null,P))});f.displayName="Button";const g=f,v=null},67824:function(x,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),l=e(7829),r=e(7657),c=e(45844),i=e(80703),o=e(92266),f=e(4814),h=e(57577),g=e(81372);const v={defaultChecked:!1,indeterminate:!1},p=(0,n.forwardRef)((u,I)=>{const{prefixCls:s,componentConfig:a}=(0,n.useContext)(h.E),P=(0,n.useContext)(g.w),V=(0,r.S)(u,v,a==null?void 0:a.Checkbox),{children:Z,style:A,className:q,indeterminate:U}=V,T=Ce(V,["children","style","className","indeterminate"]),[y,S]=(0,n.useState)(!1),X="disabled"in T?T.disabled:P.disabled;let Q=(0,c.D)(T.value);const K=(0,n.useRef)(null);(0,n.useEffect)(()=>{var F;(F=P.registerValue)==null||F.call(P,T.value)},[]),(0,n.useEffect)(()=>{if(T.value!==Q){var F,J;(F=P.unregisterValue)==null||F.call(P,Q),(J=P.registerValue)==null||J.call(P,T.value),Q=T.value}return()=>{var C;return(C=P.unregisterValue)==null?void 0:C.call(P,T.value)}},[T.value]),(0,n.useEffect)(()=>{K.current&&(K.current.indeterminate=U)},[U]);const N=G({},T);(0,i.Qr)(P)||(N.onChange=function(){for(var F=arguments.length,J=new Array(F),C=0;C<F;C++)J[C]=arguments[C];var M,m;(M=T.onChange)==null||M.call(T,...J),(m=P.toggleOption)==null||m.call(P,T.value)},N.name=P.name,N.checked=P.value.includes(T.value));const z=(0,l.default)(`${s}-checkbox-wrapper`,{[`${s}-checkbox-wrapper-checked`]:N.checked,[`${s}-checkbox-wrapper-disabled`]:X},q),W=F=>{if((0,i.mf)(Z)){var J;F.preventDefault(),(J=K.current)==null||J.click()}},Y=()=>(0,i.o8)(Z)?null:(0,i.mf)(Z)?Z({checked:"checked"in N?!!N.checked:y}):n.createElement("span",{className:`${s}-checkbox-label`},Z);return n.createElement("label",{className:z,onClick:W},n.createElement(o.C,ce(G({},N),{type:"checkbox",ref:(0,f.sQ)(I,K),disabled:X,prefixCls:`${s}-checkbox`,className:(0,l.default)({[`${s}-checkbox-indeterminate`]:U}),style:ce(G({},A),{display:(0,i.mf)(Z)?"none":void 0}),_getCheckedValue:S})),Y())});p.displayName="Checkbox";const d=p},56104:function(x,t,e){"use strict";e.d(t,{Z:function(){return v}});var n=e(53360),l=e(7829),r=e(7657),c=e(80703),i=e(57577),o=e(81372),f=e(67824);const h={},g=(0,n.forwardRef)((p,d)=>{const{prefixCls:u,componentConfig:I}=(0,n.useContext)(i.E),s=(0,n.useId)(),M=(0,r.S)(p,h,I==null?void 0:I.CheckboxGroup),{defaultValue:a,children:P,options:Z,className:A,style:q,disabled:U,name:T=s,onChange:y,renderOption:S}=M,X=Ce(M,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[Q,K]=(0,n.useState)(X.value||a||[]),[N,z]=(0,n.useState)([]);(0,n.useEffect)(()=>{"value"in X&&K(X.value||[])},[X.value]);const W=(0,n.useCallback)(m=>{z(D=>[...D,m])},[]),Y=(0,n.useCallback)(m=>{z(D=>D.filter(L=>L!==m))},[]),V=(0,n.useMemo)(()=>Z==null?void 0:Z.map(m=>(0,c.HD)(m)||(0,c.hj)(m)?{label:m,value:m}:m),[Z]),F=(0,n.useCallback)(m=>{const D=[...Q],L=Q.indexOf(m);L===-1?D.push(m):D.splice(L,1),"value"in X||K(D);const H=D.filter(O=>N.includes(O));y==null||y(H)},[Q,N,X,y]);let J=P;if((0,c.kJ)(V)&&V.length>0){const m=(0,c.mf)(S);J=V.map(D=>{const L=Q.includes(D.value),H=m?()=>S(ce(G({},D),{checked:L})):D.label;return n.createElement(f.Z,{key:`checkbox-group-options-${D.value}`,className:D.className,style:D.style,disabled:"disabled"in D?D.disabled:U,value:D.value,checked:L,id:D.id,title:D.title,onChange:D.onChange},H)})}const C=(0,n.useMemo)(()=>({name:T,value:Q,disabled:U,toggleOption:F,registerValue:W,unregisterValue:Y}),[T,Q,U,F,W,Y]);return n.createElement("div",{className:(0,l.default)(`${u}-checkbox-group`,A),style:q,ref:d},n.createElement(o.w.Provider,{value:C},J))});g.displayName="CheckboxGroup";const v=g},81372:function(x,t,e){"use strict";e.d(t,{w:function(){return l}});var n=e(53360);const l=(0,n.createContext)({})},89946:function(x,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return f},CheckboxGroup:function(){return h},default:function(){return g}});var n=e(67824),l=e(56104),r=e(558),c=e.n(r),i={};for(var o in r)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(i[o]=function(v){return r[v]}.bind(0,o));e.d(t,i);const f=n.Z;f.Group=l.Z;const h=f.Group,g=f},558:function(){},57577:function(x,t,e){"use strict";e.d(t,{$:function(){return l},E:function(){return r}});var n=e(53360);const l={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(l)},83405:function(x,t,e){"use strict";e.d(t,{i:function(){return h}});var n=e(27833),l=e(53360),r=e(12598),c=e(7657),i=e(31136),o=e(57577);function f(g){const v=(0,n.c)(11),p=(0,c.S)(g,o.$),{iconPrefix:d,children:u}=p;let I;v[0]!==p?(I=(0,r.C)(p,["children","iconPrefix"]),v[0]=p,v[1]=I):I=v[1];const s=I,a=d?i.Z.Provider:l.Fragment;let P;v[2]!==d?(P={prefixCls:d},v[2]=d,v[3]=P):P=v[3];let Z;v[4]!==a||v[5]!==u||v[6]!==P?(Z=l.createElement(a,{value:P},u),v[4]=a,v[5]=u,v[6]=P,v[7]=Z):Z=v[7];let A;return v[8]!==s||v[9]!==Z?(A=l.createElement(o.E.Provider,{value:s},Z),v[8]=s,v[9]=Z,v[10]=A):A=v[10],A}f.displayName="ConfigProvider";const h=f},48380:function(x,t,e){"use strict";e.d(t,{i:function(){return h}});var n=e(53360),l=e(7829),r=e(7657),c=e(57577);const i={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((v,p)=>{const{prefixCls:d,componentConfig:u}=(0,n.useContext)(c.E),I=(0,r.S)(v,i,u==null?void 0:u.Divider),{direction:s,align:a,dashed:P,className:Z,children:A,text:q,style:U}=I,T=A||q,y=s!=="vertical"&&!!T,S=(0,l.default)(`${d}-divider`,{[`${d}-divider-${s}`]:s,[`${d}-divider-with-text`]:y,[`${d}-divider-with-text-${a}`]:y,[`${d}-divider-dashed`]:!!P,className:Z});return n.createElement("div",{className:S,style:U,ref:p},y&&n.createElement("span",{className:`${d}-divider-inner-text`},T))});o.displayName="Divider";const h=o,g=null},17599:function(x,t,e){"use strict";e.d(t,{J:function(){return Q},X:function(){return X}});var n=e(53360),l=e(7829),r=e(7657),c=e(80703),i=e(57577);const o=["xxl","xl","lg","md","sm","xs"],f={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=Object.keys(f),g=new Map;let v=-1,p={};const u={handlers:{},dispatch(K){return p=K,g.forEach(N=>N(p)),g.size>=1},subscribe(K){return g.size||this.register(),v+=1,g.set(v,K),K(p),v},unsubscribe(K){g.delete(K),g.size||this.unregister()},register(){h.forEach(K=>{const N=Y=>{let{matches:V}=Y;this.dispatch(ce(G({},p),{[K]:V}))},z=f[K],W=window.matchMedia(z);W.addListener(N),this.handlers[z]={mql:W,listener:N},N(W)})},unregister(){h.forEach(K=>{const N=f[K],z=this.handlers[N];z==null||z.mql.removeListener(z==null?void 0:z.listener)}),g.clear()}},s=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},P=(0,n.forwardRef)((K,N)=>{const{prefixCls:z,componentConfig:W}=(0,n.useContext)(i.E),$=(0,r.S)(K,a,W==null?void 0:W.Row),{align:Y,justify:V,gutter:F,className:J,wrap:C,children:M,style:m}=$,D=Ce($,["align","justify","gutter","className","wrap","children","style"]),[L,H]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const _=u.subscribe(ee=>{((0,c.Kn)(F)||(0,c.kJ)(F)&&((0,c.Kn)(F[0])||(0,c.Kn)(F[1])))&&H(ee)});return()=>u.unsubscribe(_)},[]);const O=j();function j(){const _=[void 0,void 0];return((0,c.kJ)(F)?F:[F,void 0]).forEach((te,se)=>{if((0,c.Kn)(te))for(let oe=0;oe<o.length;oe++){const ie=o[oe];if(L[ie]&&te[ie]!==void 0){_[se]=te[ie];break}}else _[se]=te}),_}const w=(0,l.default)(`${z}-row`,{[`${z}-row-nowrap`]:C===!1,[`${z}-row-align-${Y}`]:Y,[`${z}-row-justify-${V}`]:V},J),[E,B]=O,b=(0,n.useMemo)(()=>({gutter:[E,B],wrap:C}),[E,B,C]),R={},k=(0,c.hj)(E)&&E!==0,ne=(0,c.hj)(B)&&B!==0;if(k||ne){const _=-E/2,ee=-B/2;_&&(R.marginLeft=_,R.marginRight=_),ee&&(R.marginTop=ee,R.marginBottom=ee)}return n.createElement(s.Provider,{value:b},n.createElement("div",ce(G({},D),{ref:N,className:w,style:G(G({},m),R)}),M))});P.displayName="Row";const Z=P,A={offset:0};function q(K){return(0,c.hj)(K)?`${K} ${K} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(K)?`0 0 ${K}`:K}const U=["xs","sm","md","lg","xl","xxl"],T=(K,N)=>{let z={};return U.forEach(W=>{const Y=K[W];if(!Y)return;let V={};(0,c.hj)(Y)?V.span=Y:(0,c.Kn)(Y)&&(V=Y),z=ce(G({},z),{[`${N}-col-${W}-${V.span}`]:(0,c.hj)(V.span),[`${N}-col-${W}-order-${V.order}`]:V.order,[`${N}-col-${W}-offset-${V.offset}`]:V.offset})}),z},y=(0,n.forwardRef)((K,N)=>{const{componentConfig:z,prefixCls:W}=(0,n.useContext)(i.E),{gutter:Y}=(0,n.useContext)(s),$=(0,r.S)(K,A,z==null?void 0:z.Col),{span:V,offset:F,children:J,className:C,style:M,flex:m,order:D,xs:L,sm:H,md:O,lg:j,xl:w,xxl:E}=$,B=Ce($,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),b=T({xs:L,sm:H,md:O,lg:j,xl:w,xxl:E},W),R=(0,l.default)(`${W}-col`,{[`${W}-col-${V}`]:(0,c.hj)(V),[`${W}-col-offset-${F}`]:F,[`${W}-col-order-${D}`]:D},b,C),k={};if(Y){const _=Y[0]?Y[0]/2:0,ee=Y[1]?Y[1]/2:0;_&&(k.paddingLeft=_,k.paddingRight=_),ee&&(k.paddingTop=ee,k.paddingBottom=ee)}const ne={};return m&&(ne.flex=q(m)),n.createElement("div",ce(G({ref:N},B),{className:R,style:G(G(G({},M),ne),k)}),J)});y.displayName="Col";const S=y,X=Z,Q=S},45990:function(x,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return l.z},Col:function(){return f.J},ConfigProvider:function(){return i.i},Divider:function(){return o.i},Input:function(){return h.I},Row:function(){return f.X},Space:function(){return v.T}});var n=e(4274),l=e(60884),r=e(89946),d={};for(var c in r)["default","Alert","Button"].indexOf(c)<0&&(d[c]=function(u){return r[u]}.bind(0,c));e.d(t,d);var i=e(83405),o=e(48380),f=e(17599),h=e(38312),g=e(37663),d={};for(var c in g)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input"].indexOf(c)<0&&(d[c]=function(I){return g[I]}.bind(0,c));e.d(t,d);var v=e(92595),p=e(36112),d={};for(var c in p)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Radio","RadioButton","RadioGroup","Space"].indexOf(c)<0&&(d[c]=function(I){return p[I]}.bind(0,c));e.d(t,d)},38312:function(x,t,e){"use strict";e.d(t,{I:function(){return s}});var n=e(53360),l=e(7829),r=e(7657),c=e(62222),i=e(80703),o=e(58360),f=e(85569),h=e(1824),g=e(4814),v=e(57577);const p={type:"text",size:"md",align:"left",visibilityToggle:!0};function d(P,Z,A){let q;return q=P===null||(0,i.o8)(P)||(0,i.HD)(P)?P||"":String(P),(0,i.hj)(Z)&&!A?q.slice(0,Z):q}const u=(0,n.forwardRef)((P,Z)=>{const{prefixCls:A,componentConfig:q}=(0,n.useContext)(v.E),Re=(0,r.S)(P,p,q==null?void 0:q.Input),{size:U,status:T,align:y,disabled:S,allowClear:X,placeholder:Q,variant:K="outline",addonBefore:N,addonAfter:z,prefix:W,suffix:Y,value:V,defaultValue:F,type:J,className:C,style:M,readOnly:m,visibilityToggle:D,maxLength:L,tips:H,onFocus:O,onBlur:j,onChange:w}=Re,E=Ce(Re,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),B=(0,n.useRef)(null),[b,R]=(0,n.useState)(!1),k=re=>{S||m||(R(!0),O==null||O(re))},ne=re=>{S||m||(R(!1),j==null||j(re))},$=(0,i.hj)(L)?L:L==null?void 0:L.length,_=(0,i.hj)(L)?!1:L==null?void 0:L.errorOnly,ee=(0,i.hj)(L)?!0:(L==null?void 0:L.showLimit)!==!1,[te,se]=(0,c.R)(F,{value:V}),oe=d(te,$,_),ie=(0,i.hj)($)?oe.length>$:!1,Ie=re=>{const{value:De}=re.target;se(De),w==null||w(De,re)},me=()=>{var re;S||(re=B.current)==null||re.focus()},ue=(0,l.default)(`${A}-input`,{[`${A}-input-variant-${K}`]:K,[`${A}-input-size-${U}`]:U,[`${A}-input-disabled`]:S,[`${A}-input-align-${y}`]:y,[`${A}-input-status-${T}`]:T,[`${A}-input-focus`]:b,[`${A}-input-limit-length-error`]:ie},C),de=(0,l.default)(`${A}-input-real`),ve=X&&oe&&!S,ae=n.createElement(o.Z,null),le=re=>{re.stopPropagation(),se(""),w==null||w("",re)},fe=ve&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,l.default)(`${A}-input-suffix`,`${A}-input-clear`),onClick:le},ae),pe=(0,i.Kn)(D)&&!(0,i.o8)(D.visible),[xe,he]=(0,n.useState)(J);(0,n.useEffect)(()=>{he(pe?D.visible?"text":"password":J)},[J,pe,D==null?void 0:D.visible]);const ge=()=>{if(S)return;const re=xe==="password"?"text":"password";if(he(re),pe){var De;(De=D.onVisibleChange)==null||De.call(D,re==="text")}},ye=J==="password",Me=(0,n.useMemo)(()=>ye?(0,i.Kn)(D)&&(0,i.mf)(D.renderIcon)?D.renderIcon(xe==="text"):xe==="password"?n.createElement(f.Z,null):xe==="text"?n.createElement(h.Z,null):null:Y,[ye,xe,D,Y]),Le=(0,n.useMemo)(()=>function(re){let{children:De}=re;const Ke=N||z;let Oe=De;return Ke&&(Oe=n.createElement("div",{className:`${A}-input-group`},Oe)),H&&(Oe=n.createElement("div",{className:`${A}-input-group-extra`},Oe)),Oe},[N,z,H]),Ae=W&&n.createElement("span",{className:`${A}-input-prefix`},W),Ee=Me&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,l.default)(`${A}-input-suffix`,{[`${A}-input-suffix-password`]:ye}),onClick:ge,onMouseDown:re=>re.preventDefault(),onMouseUp:re=>re.preventDefault()},Me),Be=(0,i.hj)($)&&ee&&n.createElement("span",{className:`${A}-input-limit-length-text`},oe.length,"/",$),Pe=H&&n.createElement("div",{className:(0,l.default)(`${A}-input-tips`,{[`${A}-input-tips-status-${T}`]:T})},H),be=n.createElement(n.Fragment,null,n.createElement("span",{className:ue,style:M,onClick:me},Ae,n.createElement("input",ce(G({ref:(0,g.sQ)(Z,B)},E),{type:xe,value:oe,readOnly:m,className:de,placeholder:Q,disabled:S,onChange:Ie,onFocus:k,onBlur:ne})),fe,Ee,Be)),Te=N&&n.createElement("span",{className:(0,l.default)(`${A}-input-group-addon`)},N),Ne=z&&n.createElement("span",{className:(0,l.default)(`${A}-input-group-addon`)},z);return n.createElement(Le,null,Te,be,Ne,Pe)});u.displayName="Input";const s=u,a=null},74052:function(x,t,e){"use strict";e.d(t,{Z:function(){return p}});var n=e(53360),l=e(7829),r=e(7657),c=e(80703),i=e(92266),o=e(4814),f=e(57577),h=e(83595);const g={defaultChecked:!1},v=(0,n.forwardRef)((d,u)=>{const{prefixCls:I,componentConfig:s}=(0,n.useContext)(f.E),a=(0,n.useContext)(h.Z),F=(0,r.S)(d,g,s==null?void 0:s.Radio),{_IS_BUTTON_:P,value:Z,children:A,style:q}=F,U=Ce(F,["_IS_BUTTON_","value","children","style"]),T=J=>{var C,M;(C=U.onChange)==null||C.call(U,J),a==null||(M=a.onChange)==null||M.call(a,J)},y=G({},U);let S="md";if(!(0,c.Qr)(a)){y.name=a.name,y.onChange=T,y.checked=Z===a.value;var X;y.disabled=(X=y.disabled)!=null?X:a.disabled,S=a.size?a.size:S}const[Q,K]=(0,n.useState)(!1),N=P?`${I}-radio-button`:`${I}-radio`,z=(0,l.default)(`${N}-wrapper`,{[`${N}-wrapper-disabled`]:y.disabled,[`${N}-wrapper-checked`]:y.checked,[`${N}-wrapper-size-${S}`]:S,[`${N}-wrapper-filled`]:a.buttonVariant==="filled"}),W=()=>(0,c.o8)(A)?null:(0,c.mf)(A)?A({checked:"checked"in y?!!y.checked:Q}):n.createElement("span",{className:`${N}-label`},A),Y=(0,n.useRef)(null),V=J=>{if((0,c.mf)(A)){var C;J.preventDefault(),(C=Y.current)==null||C.click()}};return n.createElement("label",{className:z,onClick:V},n.createElement(i.Z,ce(G(G({},U),y),{ref:(0,o.sQ)(u,Y),value:Z,type:"radio",prefixCls:N,style:ce(G({},q),{display:(0,c.mf)(A)?"none":void 0}),disabled:y.disabled,_getCheckedValue:K})),W())});v.displayName="Radio";const p=v},89312:function(x,t,e){"use strict";e.d(t,{Z:function(){return o}});var n=e(27833),l=e.n(n),r=e(53360),c=e(74052);const i=(0,r.forwardRef)((f,h)=>{const g=(0,n.c)(3);let v;return g[0]!==f||g[1]!==h?(v=r.createElement(c.Z,ce(G({_IS_BUTTON_:!0},f),{ref:h})),g[0]=f,g[1]=h,g[2]=v):v=g[2],v});i.displayName="RadioButton";const o=i},59803:function(x,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),l=e(7829),r=e(7657),c=e(62222),i=e(80703),o=e(57577),f=e(83595),h=e(74052),g=e(89312);const v={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},p=(0,n.forwardRef)((u,I)=>{const{prefixCls:s,componentConfig:a}=(0,n.useContext)(o.E),P=(0,r.S)(u,v,a==null?void 0:a.RadioGroup),Z=(0,n.useId)(),{className:A,style:q,name:U=Z,value:T,defaultValue:y,children:S,disabled:X,size:Q,buttonVariant:K,renderOption:N,onChange:z,appearance:W,options:Y}=P,[V,F]=(0,c.R)(y,{value:T}),J=(0,n.useCallback)(D=>{const L=D.target.value;"value"in P||F(L),L!==V&&(z==null||z(D))},[V,z]);let C=S;const M=W==="button"?g.Z:h.Z;if((0,i.kJ)(Y)&&Y.length>0){const D=(0,i.mf)(N);C=Y.map(L=>{if((0,i.HD)(L)||(0,i.hj)(L)){const j=V===L,w=D?()=>N({label:L,value:L,checked:j}):L;return n.createElement(M,{key:L.toString(),disabled:X,value:L,checked:j},w)}const H=V===L.value,O=D?()=>N(ce(G({},L),{checked:H})):L.label;return n.createElement(M,{key:`radio-group-options-${L.value}`,className:L.className,style:L.style,disabled:L.disabled||X,value:L.value,checked:H,id:L.id,title:L.title,onChange:L.onChange},O)})}const m=(0,n.useMemo)(()=>({name:U,value:V,disabled:X,size:Q,buttonVariant:K,onChange:J}),[U,T,X,Q,K,J]);return n.createElement("div",{ref:I,className:(0,l.default)(`${s}-radio-group`,A),style:q},n.createElement(f.Z.Provider,{value:m},C))});p.displayName="RadioGroup";const d=p},83595:function(x,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(53360);const r=(0,n.createContext)({})},37663:function(x,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return h},RadioButton:function(){return v},RadioGroup:function(){return g},default:function(){return p}});var n=e(74052),l=e(89312),r=e(59803),c=e(63149),i=e.n(c),o={};for(var f in c)["default","Radio","RadioButton","RadioGroup"].indexOf(f)<0&&(o[f]=function(d){return c[d]}.bind(0,f));e.d(t,o);const h=n.Z;h.Group=r.Z,h.Button=l.Z;const g=h.Group,v=h.Button,p=h},63149:function(){},92595:function(x,t,e){"use strict";e.d(t,{T:function(){return p}});var n=e(53360),l=e(7829),r=e(80703),c=e(7657),i=e(21299),o=e(57577);const f={sm:8,md:16,lg:24},h={direction:"horizontal",align:"center",wrap:!1},g=(0,n.forwardRef)((u,I)=>{const{prefixCls:s,size:a="md",componentConfig:P}=(0,n.useContext)(o.E),V=(0,c.S)(u,h,P==null?void 0:P.Space),{className:A,children:q,size:U=a,direction:T="horizontal",align:y,split:S,wrap:X=!1}=V,Q=Ce(V,["className","children","size","direction","align","split","wrap"]),K=(0,i.q)(q),N=T==="horizontal"&&y===void 0?"center":y,z=(0,l.default)(`${s}-space`,`${s}-space-direction-${T}`,{[`${s}-space-align-${N}`]:N,[`${s}-space-wrap`]:X},A),W=(0,n.useCallback)(F=>{const J=(0,r.kJ)(U)?U:[U,U],[C,M]=J.map(m=>(0,r.HD)(m)?f[m]:m||0);return X?{marginRight:C,marginBottom:M}:T==="vertical"?{marginBottom:M}:{marginRight:F?void 0:C}},[U]),Y=K.map((F,J)=>{const C=J===K.length-1;return n.createElement(n.Fragment,{key:`space-item-${J}`},n.createElement("div",{className:"space-item",style:W(C)},F),!C&&S&&n.createElement("span",{className:"sqi-space-item-split"},S))});return n.createElement("div",ce(G({className:z},Q),{ref:I}),Y)});g.displayName="Space";const p=g,d=null},88539:function(x,t,e){"use strict";e.d(t,{Z:function(){return F}});var n=e(27833),l=e(53360),r=e(7657),c=e(60164),i=e(6890),o=e(8240),f=e(21299);function h(C){return C instanceof HTMLElement||C instanceof SVGElement}function g(C){return C&&typeof C=="object"&&h(C.nativeElement)?C.nativeElement:h(C)?C:null}function v(C){if(!(C&&(0,l.isValidElement)(C)))return null;if(parseInt(l.version)>=19){var m;return((m=C.props)==null?void 0:m.ref)||null}return C.ref}var p=e(4814);const d=(0,l.forwardRef)((C,M)=>{const m=(0,n.c)(14),{children:D,disabled:L,throttleMs:H,onResize:O}=C,j=H===void 0?100:H;let w;m[0]!==D?(w=(0,l.isValidElement)(D),m[0]=D,m[1]=w):w=m[1];const E=w,B=E?(0,f.q)(D):[];let b;m[2]!==D||m[3]!==E?(b=E?v(D):null,m[2]=D,m[3]=E,m[4]=b):b=m[4];const R=b,k=(0,l.useRef)(null),ne=(0,p.x1)(R,k);let $;m[5]===Symbol.for("react.memo_cache_sentinel")?($=()=>g(k.current),m[5]=$):$=m[5];const _=$;let ee;m[6]===Symbol.for("react.memo_cache_sentinel")?(ee=()=>_(),m[6]=ee):ee=m[6],(0,l.useImperativeHandle)(M,ee);let te;m[7]!==O||m[8]!==j?(te=O?(0,i.P)(O,j):void 0,m[7]=O,m[8]=j,m[9]=te):te=m[9];const se=te;(0,o.y)(k,se,!L);let oe;return m[10]!==D||m[11]!==E||m[12]!==ne?(oe=E?(0,l.cloneElement)(D,{ref:ne}):D,m[10]=D,m[11]=E,m[12]=ne,m[13]=oe):oe=m[13],oe});d.displayName="ResizeObserverComponent";const u=d;var I=e(86752),s=e(34028),a=e(80703);const P=(0,s.J)();function Z(C){return P?(0,a.HD)(C)?document.querySelector(C):(0,a.mf)(C)?C():C instanceof HTMLElement?C:document.body:null}const A=(0,l.forwardRef)((C,M)=>{const m=(0,n.c)(25),{getContainer:D,prefixCls:L,children:H,open:O,rootStyle:j}=C,w=O===void 0?!0:O,[E,B]=(0,l.useState)(null),[b,R]=(0,l.useState)(null),k=b||document.body;let ne,$;m[0]!==D?(ne=()=>{const de=Z(D);R(de||null)},$=[D],m[0]=D,m[1]=ne,m[2]=$):(ne=m[1],$=m[2]),(0,l.useEffect)(ne,$);let _;m[3]!==E||m[4]!==L||m[5]!==j?(_=()=>{if(!P||E)return null;const de=document.createElement("div");L&&(de.className=`${L}-portal-wrapper`),j&&Object.assign(de.style,j),de.setAttribute("data-portal","true"),B(de)},m[3]=E,m[4]=L,m[5]=j,m[6]=_):_=m[6];const ee=_;let te;m[7]!==ee||m[8]!==w?(te=()=>{P&&(w?ee():B(null))},m[7]=ee,m[8]=w,m[9]=te):te=m[9];let se;m[10]!==w?(se=[w],m[10]=w,m[11]=se):se=m[11],(0,c.L)(te,se);let oe,ie;m[12]!==E?(oe=()=>E,ie=[E],m[12]=E,m[13]=oe,m[14]=ie):(oe=m[13],ie=m[14]),(0,l.useImperativeHandle)(M,oe,ie);let Ie;m[15]!==E||m[16]!==k||m[17]!==w?(Ie=()=>{if(!P||!E)return;const de=()=>!E.parentNode&&k.appendChild(E),ve=()=>{var ae;return(ae=E.parentNode)==null?void 0:ae.removeChild(E)};return w?de():ve(),()=>{ve()}},m[15]=E,m[16]=k,m[17]=w,m[18]=Ie):Ie=m[18];let me;if(m[19]!==E||m[20]!==w?(me=[w,E],m[19]=E,m[20]=w,m[21]=me):me=m[21],(0,c.L)(Ie,me),!(w&&H))return null;let ue;return m[22]!==H||m[23]!==E?(ue=E?(0,I.createPortal)(H,E):null,m[22]=H,m[23]=E,m[24]=ue):ue=m[24],ue});A.displayName="Portal";const q=A;var U=e(57577);function T(C,M,m){const{top:D,left:L,width:H,height:O}=C.getBoundingClientRect(),j=D+m,w=L+M;return{width:H,height:O,top:j,bottom:j+O,left:w,right:w+H}}function y(C){if(!C||C.tagName==="HTML")return;const M=window.getComputedStyle(C),m=D=>["auto","scroll"].includes(D);return C.clientHeight<C.scrollHeight&&m(M.overflowX)||C.clientWidth<C.scrollWidth&&m(M.overflowY)?C:y(C.parentNode)}function S(C,M){return Math.round(Math.abs(C))>Math.round(Math.abs(M))?C:M}const X=(C,M)=>`translate(${C}px, ${M}px)`;function Q(C){if(!C)return[0,0];const M=window.getComputedStyle(C),m=M.transform||M.webkitTransform||"none";if(m==="none")return[0,0];if(m.match(/matrix\(([^)]+)\)/)){var D,L;const j=((L=m.match(/matrix\((.+)\)/))==null||(D=L[1])==null?void 0:D.split(",").map(Number))||[0,0];if(j.length===6)return[j[4],j[5]]}const[,H=0,O=0]=(m.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(j=>Number(j));return[H,O]}function K(C){const M=C.split("-"),m=M[0],D=M[1];let L;const H=m==="top"||m==="bottom",O=m==="left"||m==="right";return H&&(D==="start"&&(L="left"),D==="end"&&(L="right")),O&&(D==="start"&&(L="top"),D==="end"&&(L="bottom")),[m,L,H,O]}function N(C){return C?(0,a.Kn)(C)?[C.x||0,C.y||0]:[C||0,C||0]:[0,0]}const z={direction:"bottom",enableFlip:!0,enableShift:!0};function W(C,M){const{reference:m,popup:D,arrow:L}=C;if(!m||!D)return;const H=G(G({},z),M),O=D.parentNode,[j,w]=Q(O),E=window.pageYOffset,B=window.pageXOffset,b=T(m,B,E),R=T(D,B,E),k=b.width-R.width,ne=b.height-R.height;let $=b.left-R.left+j,_=b.top-R.top+w;const[ee,te,se,oe]=K(H.direction);let ie=ee;const Ie=te==="left"?0:te==="right"?k:k/2,me=k-Ie,ue=te==="top"?0:te==="bottom"?ne:ne/2,de=ne-ue;se&&($+=Ie,_+=ee==="top"?-R.height:b.height),oe&&($+=ee==="left"?-R.width:b.width,_+=ue);let ve=y(m),ae,le=0,fe=0;const[pe,xe]=N(H.offset),{height:he=0,width:ge=0}=L?T(L,B,E):{};for(se&&(_+=ie==="bottom"?xe:-xe),oe&&($+=ie==="right"?pe:-pe);ve;)ae=T(ve,B,E),Le(ae),ve=y(ve.parentNode);const{clientHeight:ye,clientWidth:Me}=document.documentElement;Le({top:E,bottom:E+ye,left:B,right:B+Me,height:ye,width:Me}),$-=le,_-=fe,O.style.transform=X($,_);function Le(Ae){const{top:Ee,bottom:Be,left:Pe,right:be,height:Te,width:Ne}=Ae;if(se){const Re=Math.round(b.top-Ee+b.height/2),re=Math.round(Te/2);H.enableFlip&&(b.top-(R.height+xe+he)<Ee&&Re<=re&&ie==="top"?(_+=R.height+b.height,ie="bottom"):b.bottom+R.height+xe+he>Te+Ee&&Re>=re&&ie==="bottom"&&(_-=R.height+b.height,ie="top")),H.enableShift&&(b.left+Ie<Pe&&(le=S(b.right-ge>Pe?b.left+Ie-Pe:-b.width+Ie+ge,le)),b.right-me>be&&(le=S(b.left+ge<be?b.right-me-be:b.width-me-ge,le)))}if(oe){const Re=Math.round(b.left-Pe+b.width/2),re=Math.round(Ne/2);H.enableFlip&&(b.left-(R.width+pe+ge)<Pe&&Re<re&&ie==="left"?($+=b.width+R.width,ie="right"):b.right+R.width+pe+ge>be&&Re>re&&ie==="right"&&($-=b.width+R.width,ie="left")),H.enableShift&&(b.top+ue<Ee&&(fe=S(b.bottom-he>Ee?b.top+ue-Ee:-b.height+ue+he,fe)),b.bottom-de>Be&&(fe=S(b.top+he<Be?b.bottom-de-Be:b.height-de-he,fe)))}}}const Y={direction:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:0},V=(0,l.forwardRef)((C,M)=>{const m=(0,n.c)(24),{prefixCls:D,componentConfig:L}=(0,l.useContext)(U.E),{children:H,popup:O,enableShift:j,enableFlip:w,zIndex:E,offset:B,direction:b,getContainer:R}=(0,r.S)(C,Y,L==null?void 0:L.Trigger);let k;m[0]!==H?(k=(0,l.isValidElement)(H),m[0]=H,m[1]=k):k=m[1];const ne=k,$=(0,l.useRef)(null),_=(0,l.useRef)(null);let ee;m[2]!==O?(ee=v(O),m[2]=O,m[3]=ee):ee=m[3];const te=ee,se=(0,l.useRef)(null),oe=(0,p.x1)(te,se);(0,l.useImperativeHandle)(M,J);const ie=(0,p.t4)(H),Ie=(0,p.t4)(O);let me;m[4]!==b||m[5]!==w||m[6]!==j||m[7]!==B?(me=le=>{var fe;le&&le.type!=="resize"&&!((fe=le.target)!=null&&fe.contains($.current))||W({reference:$.current,popup:se.current,arrow:_.current},{direction:b,enableFlip:w,enableShift:j,offset:B})},m[4]=b,m[5]=w,m[6]=j,m[7]=B,m[8]=me):me=m[8];const ue=me;let de;m[9]!==ue?(de=()=>(ue(),document.addEventListener("scroll",ue,{capture:!0,passive:!0}),window.addEventListener("resize",ue),()=>{document.removeEventListener("scroll",ue),window.removeEventListener("resize",ue)}),m[9]=ue,m[10]=de):de=m[10];let ve;m[11]!==b||m[12]!==w||m[13]!==j||m[14]!==B?(ve=[b,w,j,B],m[11]=b,m[12]=w,m[13]=j,m[14]=B,m[15]=ve):ve=m[15],(0,c.L)(de,ve);let ae;return m[16]!==H||m[17]!==R||m[18]!==ne||m[19]!==oe||m[20]!==O||m[21]!==D||m[22]!==E?(ae=ne?l.createElement(l.Fragment,null,l.createElement(u,{ref:$},H),O?l.createElement(q,{getContainer:R},l.createElement("div",{className:`${D}-trigger`,style:{position:"absolute",top:0,left:0,willChange:"transform",zIndex:E}},(0,l.cloneElement)(O,{ref:oe}))):null):null,m[16]=H,m[17]=R,m[18]=ne,m[19]=oe,m[20]=O,m[21]=D,m[22]=E,m[23]=ae):ae=m[23],ae});V.displayName="Trigger";const F=V;function J(){}},36112:function(x,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return f}});var n=e(88539),l=e(98479),r=e.n(l),c={};for(var i in l)["default","Trigger"].indexOf(i)<0&&(c[i]=function(h){return l[h]}.bind(0,i));e.d(t,c);const o=n.Z,f=o},98479:function(){},84176:function(x,t,e){var n=e(75863);function l(r,c){if(r==null)return{};var i=n(r,c),o,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(f=0;f<h.length;f++)o=h[f],!(c.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(i[o]=r[o])}return i}x.exports=l,x.exports.__esModule=!0,x.exports.default=x.exports},75863:function(x){function t(e,n){if(e==null)return{};var l={},r=Object.keys(e),c,i;for(i=0;i<r.length;i++)c=r[i],!(n.indexOf(c)>=0)&&(l[c]=e[c]);return l}x.exports=t,x.exports.__esModule=!0,x.exports.default=x.exports},7829:function(x,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return l}});function n(r){var c,i,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var f=r.length;for(c=0;c<f;c++)r[c]&&(i=n(r[c]))&&(o&&(o+=" "),o+=i)}else for(i in r)r[i]&&(o&&(o+=" "),o+=i);return o}function l(){for(var r,c,i=0,o="",f=arguments.length;i<f;i++)(r=arguments[i])&&(c=n(r))&&(o&&(o+=" "),o+=c);return o}t.default=l},64508:function(x,t,e){"use strict";e.d(t,{Y:function(){return c}});var n=e(53360),l=e(75601);const r=(i,o,f,h,g)=>{clearTimeout(h.current);const v=(0,l.y0)(i);o(v),f.current=v,g&&g({current:v})},c=({enter:i=!0,exit:o=!0,preEnter:f,preExit:h,timeout:g,initialEntered:v,mountOnEnter:p,unmountOnExit:d,onStateChange:u}={})=>{const[I,s]=(0,n.useState)(()=>(0,l.y0)(v?l.cn:(0,l.Ef)(p))),a=(0,n.useRef)(I),P=(0,n.useRef)(),[Z,A]=(0,l.fj)(g),q=(0,n.useCallback)(()=>{const T=(0,l.XZ)(a.current._s,d);T&&r(T,s,a,P,u)},[u,d]),U=(0,n.useCallback)(T=>{const y=X=>{switch(r(X,s,a,P,u),X){case l.d0:Z>=0&&(P.current=setTimeout(q,Z));break;case l.Ix:A>=0&&(P.current=setTimeout(q,A));break;case l.iL:case l.iU:P.current=(0,l.Y3)(y,X);break}},S=a.current.isEnter;typeof T!="boolean"&&(T=!S),T?!S&&y(i?f?l.iL:l.d0:l.cn):S&&y(o?h?l.iU:l.Ix:(0,l.Ef)(d))},[q,u,i,o,f,h,Z,A,d]);return[I,U,q]}},75601:function(x,t,e){"use strict";e.d(t,{Ef:function(){return v},Ix:function(){return i},XZ:function(){return p},Y3:function(){return u},cn:function(){return r},d0:function(){return l},fj:function(){return d},iL:function(){return n},iU:function(){return c},y0:function(){return g}});const n=0,l=1,r=2,c=3,i=4,o=5,f=6,h=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],g=I=>({_s:I,status:h[I],isEnter:I<c,isMounted:I!==f,isResolved:I===r||I>i}),v=I=>I?f:o,p=(I,s)=>{switch(I){case l:case n:return r;case i:case c:return v(s)}},d=I=>typeof I=="object"?[I.enter,I.exit]:[I,I],u=(I,s)=>setTimeout(()=>{isNaN(document.body.offsetTop)||I(s+1)},0)}}]);
}());