!(function(){var Ze=Object.defineProperty,we=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var Be=(v,t,e)=>t in v?Ze(v,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):v[t]=e,Z=(v,t)=>{for(var e in t||(t={}))Me.call(t,e)&&Be(v,e,t[e]);if(ye)for(var e of ye(t))Oe.call(t,e)&&Be(v,e,t[e]);return v},re=(v,t)=>we(v,ze(t));var ue=(v,t)=>{var e={};for(var n in v)Me.call(v,n)&&t.indexOf(n)<0&&(e[n]=v[n]);if(v!=null&&ye)for(var n of ye(v))t.indexOf(n)<0&&Oe.call(v,n)&&(e[n]=v[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{49163:function(v,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return ee}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return x.D},useIsomorphicLayoutEffect:function(){return s.L},useMergeProps:function(){return a.S},useMergeState:function(){return E.R},usePrevious:function(){return N.D},useResizeObserver:function(){return P.y}});var u={};e.r(u),e.d(u,{canUseDom:function(){return Y.J},debounce:function(){return z.D},isArray:function(){return b.kJ},isEmptyObject:function(){return b.Qr},isFunction:function(){return b.mf},isNumber:function(){return b.hj},isObject:function(){return b.Kn},isString:function(){return b.HD},isUndefined:function(){return b.o8},omit:function(){return g.C},pick:function(){return R},throttle:function(){return G.P}});var r={};e.r(r),e.d(r,{default:function(){return w.Y},useTransition:function(){return w.Y},useTransitionMap:function(){return H},useTransitionState:function(){return w.Y}});var p=e(90819),i=e.n(p),o=e(89933),l=e.n(o),f=e(55826),h=e.t(f,2),d=e(45990),I=e(34384),m=e(80700),c=e.t(m,2),x=e(37797),s=e(60164),a=e(7657),E=e(62222),N=e(45844),P=e(8240),Y=e(34028),z=e(78831),b=e(80703),g=e(12598);function R(W,Q){const X={};return Q.forEach(B=>{B in W&&(X[B]=W[B])}),X}var G=e(6890),V=e(89664),T=e(58281),D=e(59118),$=e(38358),F=e(7829),w=e(64508),O=e(75601);const U=(W,Q,X,B,S,J)=>{clearTimeout(S);const y=(0,O.y0)(Q),k=new Map(B.current);k.set(W,y),X(k),B.current=k,J&&J({key:W,current:y})},H=({allowMultiple:W,enter:Q=!0,exit:X=!0,preEnter:B,preExit:S,timeout:J,initialEntered:y,mountOnEnter:k,unmountOnExit:ne,onStateChange:j}={})=>{const[q,_]=(0,f.useState)(new Map),te=(0,f.useRef)(q),de=(0,f.useRef)(new Map),[ie,pe]=(0,O.fj)(J),Ee=(0,f.useCallback)((oe,se)=>{const{initialEntered:me=y}=se||{},le=me?O.cn:(0,O.Ef)(k);U(oe,le,_,te),de.current.set(oe,{})},[y,k]),Re=(0,f.useCallback)(oe=>{const se=new Map(te.current);return se.delete(oe)?(_(se),te.current=se,de.current.delete(oe),!0):!1},[]),Ie=(0,f.useCallback)(oe=>{const se=te.current.get(oe);if(!se)return;const{timeoutId:me}=de.current.get(oe),le=(0,O.XZ)(se._s,ne);le&&U(oe,le,_,te,me,j)},[j,ne]),xe=(0,f.useCallback)((oe,se)=>{const me=te.current.get(oe);if(!me)return;const le=de.current.get(oe),ce=he=>{switch(U(oe,he,_,te,le.timeoutId,j),he){case O.d0:ie>=0&&(le.timeoutId=setTimeout(()=>Ie(oe),ie));break;case O.Ix:pe>=0&&(le.timeoutId=setTimeout(()=>Ie(oe),pe));break;case O.iL:case O.iU:le.timeoutId=(0,O.Y3)(ce,he);break}},fe=me.isEnter;typeof se!="boolean"&&(se=!fe),se?fe||(ce(Q?B?O.iL:O.d0:O.cn),!W&&te.current.forEach((he,ge)=>ge!==oe&&xe(ge,!1))):fe&&ce(X?S?O.iU:O.Ix:(0,O.Ef)(ne))},[j,Ie,W,Q,X,B,S,ie,pe,ne]),Pe=(0,f.useCallback)(oe=>{if(!(!W&&oe!==!1))for(const se of te.current.keys())xe(se,oe)},[W,xe]);return{stateMap:q,toggle:xe,toggleAll:Pe,endTransition:Ie,setItem:Ee,deleteItem:Re}};var C=e(91223),M=e(84538),L=e(9788),A=e(13640),K=e.t(A,2),ee={"sqi-web-src-common-demo-portal":{component:f.memo(f.lazy(function(){return e.e(433).then(e.bind(e,1422))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71441).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(5658).Z},"react-dom":{type:"NPM",value:"19.1.0"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(56848).Z},"../_util/dom.ts":{type:"FILE",value:e(32480).Z}},entry:"index.tsx"},context:{"../Portal.tsx":I,"../_util/ref.ts":V,"../_util/dom.ts":T,react:h,"@sqi-ui/web":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":I,"react-dom":c,"@sqi-ui/hooks":n,"@sqi-ui/utils":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":V,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":T},renderOpts:{compile:function(){var W=l()(i()().mark(function X(){var B,S=arguments;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(706).then(e.bind(e,29706));case 2:return y.abrupt("return",(B=y.sent).default.apply(B,S));case 3:case"end":return y.stop()}},X)}));function Q(){return W.apply(this,arguments)}return Q}()}},"sqi-web-src-common-demo-css-motion-base":{component:f.memo(f.lazy(function(){return e.e(433).then(e.bind(e,95757))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86514).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(1056).Z},"../CSSMotion.tsx":{type:"FILE",value:e(99721).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(95084).Z}},entry:"index.tsx"},context:{"./motion.css":D,"../CSSMotion.tsx":$,"../config-provider/context.ts":C,react:h,"@sqi-ui/web":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":D,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":$,clsx:F,"react-transition-state":r,"@sqi-ui/utils":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":C},renderOpts:{compile:function(){var W=l()(i()().mark(function X(){var B,S=arguments;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(706).then(e.bind(e,29706));case 2:return y.abrupt("return",(B=y.sent).default.apply(B,S));case 3:case"end":return y.stop()}},X)}));function Q(){return W.apply(this,arguments)}return Q}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:f.memo(f.lazy(function(){return e.e(433).then(e.bind(e,22898))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9241).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(1056).Z},"../CSSMotion.tsx":{type:"FILE",value:e(99721).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(95084).Z}},entry:"index.tsx"},context:{"./motion.css":D,"../CSSMotion.tsx":$,"../config-provider/context.ts":C,react:h,"@sqi-ui/web":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":D,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":$,clsx:F,"react-transition-state":r,"@sqi-ui/utils":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":C},renderOpts:{compile:function(){var W=l()(i()().mark(function X(){var B,S=arguments;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(706).then(e.bind(e,29706));case 2:return y.abrupt("return",(B=y.sent).default.apply(B,S));case 3:case"end":return y.stop()}},X)}));function Q(){return W.apply(this,arguments)}return Q}()}},"sqi-web-src-common-demo-css-motion-portal":{component:f.memo(f.lazy(function(){return e.e(433).then(e.bind(e,11624))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56602).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(5658).Z},"../CSSMotion.tsx":{type:"FILE",value:e(99721).Z},"./motion.css":{type:"FILE",value:e(1056).Z},clsx:{type:"NPM",value:"2.1.1"},"react-dom":{type:"NPM",value:"19.1.0"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(95084).Z},"../_util/ref.ts":{type:"FILE",value:e(56848).Z},"../_util/dom.ts":{type:"FILE",value:e(32480).Z}},entry:"index.tsx"},context:{"../Portal.tsx":I,"../CSSMotion.tsx":$,"./motion.css":D,"../config-provider/context.ts":C,"../_util/ref.ts":V,"../_util/dom.ts":T,react:h,"@sqi-ui/web":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":I,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":$,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":D,clsx:F,"react-dom":c,"react-transition-state":r,"@sqi-ui/hooks":n,"@sqi-ui/utils":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":C,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":V,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":T},renderOpts:{compile:function(){var W=l()(i()().mark(function X(){var B,S=arguments;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(706).then(e.bind(e,29706));case 2:return y.abrupt("return",(B=y.sent).default.apply(B,S));case 3:case"end":return y.stop()}},X)}));function Q(){return W.apply(this,arguments)}return Q}()}},"sqi-web-src-common-demo-resize-observer":{component:f.memo(f.lazy(function(){return e.e(433).then(e.bind(e,1220))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94888).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(26018).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/toArray.ts":{type:"FILE",value:e(54776).Z},"../_util/ref.ts":{type:"FILE",value:e(56848).Z},"../_util/dom.ts":{type:"FILE",value:e(32480).Z},"react-is":{type:"NPM",value:"19.1.0"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":M,"../_util/toArray.ts":L,"../_util/ref.ts":V,"../_util/dom.ts":T,react:h,"@sqi-ui/web":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":M,"@sqi-ui/utils":u,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":L,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":V,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":T,"react-is":K},renderOpts:{compile:function(){var W=l()(i()().mark(function X(){var B,S=arguments;return i()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(706).then(e.bind(e,29706));case 2:return y.abrupt("return",(B=y.sent).default.apply(B,S));case 3:case"end":return y.stop()}},X)}));function Q(){return W.apply(this,arguments)}return Q}()}}}},24094:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return f}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30445))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57473).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89196))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33087).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,855))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(28398).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}}}},81917:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f=e(5629),h={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,67045))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33190).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75358))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21102).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,17668))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(83806).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"@sqi-ui/icons":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,84777))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74168).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,96980))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18569).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}}}},29003:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f=e(36514),h={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,81585))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75890).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,59821))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(14362).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,68574))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44732).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,22425))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32857).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,25722))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37839).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(15538).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,27298))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(22935).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(15538).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}}}},81778:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return f}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,76872))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51892).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,50015))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76313).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}}}},46159:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return f}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37028))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7154).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42135))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59999).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73118))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69344).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}}}},45888:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f=e(52419),h={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33757))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(84698).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8465))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96158).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,6914))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52869).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,76830))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43256).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92481))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38986).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,34737))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(26376).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,45472))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78484).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,34503))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73117).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}}}},31129:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(5629),f=e(45990),h={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,39213))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95130).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":l,"@sqi-ui/web":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,50096))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94191).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":l,"@sqi-ui/web":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,4791))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56416).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}}}},59154:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f=e(5629),h={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95033))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(61724).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90279))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12347).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,43))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56346).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,86198))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(87891).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,52481))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85007).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,57495))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69812).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,51333))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12316).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41573))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9168).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"@sqi-ui/icons":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26523))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93157).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,71658))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32274).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}}}},99394:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f=e(37227),h={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8054))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7195).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,7314))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86093).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,2460))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41280).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,36534))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12761).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92916))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(79489).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,43107))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(46851).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(48939).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,74691))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39654).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(48939).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":f,react:n||(n=e.t(o,2)),"@sqi-ui/web":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":f},renderOpts:{compile:function(){var d=i()(r()().mark(function m(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},m)}));function I(){return d.apply(this,arguments)}return I}()}}}},71706:function(v,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return f}});var u=e(90819),r=e.n(u),p=e(89933),i=e.n(p),o=e(55826),l=e(45990),f={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89775))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64749).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,38939))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9392).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89210))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44879).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,94185))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65723).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,15940))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75961).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":l},renderOpts:{compile:function(){var h=i()(r()().mark(function I(){var m,c=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(m=s.sent).default.apply(m,c));case 3:case"end":return s.stop()}},I)}));function d(){return h.apply(this,arguments)}return d}()}}}},90910:function(v,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return u}});var n=e(55826),u={}},38358:function(v,t,e){"use strict";e.r(t);var n=e(73193),u=e.n(n),r=e(10154),p=e.n(r),i=e(45332),o=e.n(i),l=e(84176),f=e.n(l),h=e(55826),d=e(7829),I=e(64508),m=e(80703),c=e(91223),x=["children","name","prefixCls"],s=(0,h.forwardRef)(function(a,E){var N=(0,h.useContext)(c.ConfigContext),P=a.children,Y=a.name,z=a.prefixCls,b=f()(a,x),g=(0,I.Y)(b),R=o()(g,2),G=R[0],V=R[1],T=(0,h.isValidElement)(P);(0,h.useImperativeHandle)(E,function(){return{toggle:V}});var D="".concat(z||N.prefixCls).concat(Y?"-".concat(Y):""),$=(0,d.default)(["".concat(D,"-motion")],p()({},"".concat(D,"-motion-").concat(G.status),G.status));return(0,m.mf)(P)?G.isMounted?P(u()(u()({},G),{},{className:$,toggle:V})):null:T?G.isMounted?(0,h.cloneElement)(P,{className:(0,d.default)(P.props.className,$)}):null:P});s.displayName="CSSMotion",t.default=s},34384:function(v,t,e){"use strict";e.r(t);var n=e(45332),u=e.n(n),r=e(55826),p=e(80700),i=e(60164),o=e(34028),l=e(80703),f=e(58281),h=e(89664),d=(0,o.J)();function I(c){return d?(0,l.HD)(c)?document.querySelector(c):(0,l.mf)(c)?c():c instanceof HTMLElement?c:document.body:null}var m=(0,r.forwardRef)(function(c,x){var s=c.getContainer,a=c.prefixCls,E=c.children,N=c.open,P=N===void 0?!0:N,Y=c.autoLockScroll,z=Y===void 0?!0:Y,b=(0,r.isValidElement)(E)?(0,f.getReactNodeRef)(E):null,g=(0,h.useComposeRef)(b,x),R=(0,r.useRef)(null),G=(0,r.useState)(!1),V=u()(G,2),T=V[0],D=V[1],$=P||T,F=function(){if(!d)return null;var U=document.createElement("div");return a&&(U.className="".concat(a,"-portal-wrapper")),U.setAttribute("data-portal","true"),U};(0,i.L)(function(){d&&P&&!R.current&&(R.current=F())},[P]),(0,i.L)(function(){z===!1?document.body.style.overflow="":z&&R.current&&(document.body.style.overflow="hidden")},[z]),(0,i.L)(function(){if(!(!d||!R.current)){var O=R.current,U=I(s)||document.body,H=function(){O.parentNode||(U.appendChild(O),D(!0))},C=function(){O.parentNode&&(O.parentNode.removeChild(O),z&&(document.body.style.overflow=""),D(!1))};return P?H():C(),function(){O.parentNode&&C()}}},[P,s]);var w=null;return $&&E&&((0,r.isValidElement)(E)?w=(0,r.cloneElement)(E,{ref:g}):w=E),R.current?(0,p.createPortal)(w,R.current):null});m.displayName="Portal",t.default=m},84538:function(v,t,e){"use strict";e.r(t);var n=e(55826),u=e(6890),r=e(8240),p=e(9788),i=e(58281),o=e(89664),l=(0,n.forwardRef)(function(f,h){var d=f.children,I=f.disabled,m=f.throttleMs,c=m===void 0?100:m,x=f.onResize,s=(0,n.isValidElement)(d),a=s?(0,p.toArray)(d):[],E=s?(0,i.getReactNodeRef)(d):null,N=(0,n.useRef)(null),P=(0,o.useComposeRef)(E,N),Y=function(){return(0,i.getDOM)(N.current)};(0,n.useImperativeHandle)(h,function(){return Y()});var z=x?(0,u.P)(x,c):void 0;return(0,r.y)(N,z,!I),s?(0,n.cloneElement)(d,{ref:P}):d});l.displayName="ResizeObserverComponent",t.default=l},58281:function(v,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return i},getReactNodeRef:function(){return o},isDOM:function(){return p}});var n=e(89957),u=e.n(n),r=e(55826);function p(l){return l instanceof HTMLElement||l instanceof SVGElement}function i(l){return l&&u()(l)==="object"&&p(l.nativeElement)?l.nativeElement:p(l)?l:null}function o(l){var f=l&&(0,r.isValidElement)(l);if(!f)return null;if(parseInt(r.version)>=19){var h;return((h=l.props)===null||h===void 0?void 0:h.ref)||null}return l.ref}},89664:function(v,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return r},fillRef:function(){return p},useComposeRef:function(){return i}});var n=e(37797),u=e(80703),r=function(){for(var l=arguments.length,f=new Array(l),h=0;h<l;h++)f[h]=arguments[h];var d=f.filter(Boolean);return d.length<=1?d[0]:function(I){f.forEach(function(m){p(m,I)})}},p=function(l,f){(0,u.mf)(l)?l(f):(0,u.Kn)(l)&&"current"in l&&(l.current=f)},i=function(){for(var l=arguments.length,f=new Array(l),h=0;h<l;h++)f[h]=arguments[h];return(0,n.D)(function(){return r.apply(void 0,f)},f,function(d,I){return d.length!==I.length||d.every(function(m,c){return m!==I[c]})})}},9788:function(v,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return r}});var n=e(55826),u=e(23098);function r(p){var i=[];return n.Children.toArray(p).forEach(function(o){o!=null&&(Array.isArray(o)?i=i.concat(r(o)):(0,n.isValidElement)(o)&&(0,u.isFragment)(o)&&o.props?i=i.concat(r(o.props.children)):i.push(o))}),i}},36514:function(v,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(55826),u=e(70813);function r(p){var i=p.item,o=p.checked,l={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},f={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,u.jsxs)("div",{style:l,children:[(0,u.jsx)("div",{style:f}),(0,u.jsx)("strong",{children:i}),(0,u.jsx)("div",{children:"this is a checkbox"})]})}},91223:function(v,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return r},defaultConfigProps:function(){return u}});var n=e(55826),u={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(u)},52419:function(v,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(55826),u=e(70813);function r(p){var i=p.colorPalette,o=i===void 0?6:i,l=p.children,f=p.height;return(0,u.jsx)("div",{style:{height:f||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:l})}},37227:function(v,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(55826),u=e(70813);function r(p){var i=p.item,o=p.checked,l={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},f={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,u.jsxs)("div",{style:l,children:[(0,u.jsx)("div",{style:f}),(0,u.jsx)("strong",{children:i}),(0,u.jsx)("div",{children:"this is a radio"})]})}},59118:function(v,t,e){"use strict";e.r(t)},98093:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 css \u9690\u85CF\u7EC4\u4EF6",paraId:4}]},30847:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},47974:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},30286:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},48859:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},15088:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactN`ode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},41904:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},6370:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},49969:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u8F93\u5165\u6846\u7EC4\u4EF6",paraId:10,tocIndex:11},{value:"InputProps",paraId:10,tocIndex:11},{value:"\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u63CF\u8FF0",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"type",paraId:11,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:11,tocIndex:12},{value:"MDN",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"text",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:11,tocIndex:12},{value:"ConfigSize",paraId:11,tocIndex:12},{value:"md",paraId:11,tocIndex:12},{value:"status",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:11,tocIndex:12},{value:"success",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"warning",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"error",paraId:11,tocIndex:12},{value:"tips",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"allowClear",paraId:11,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"align",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"center",paraId:11,tocIndex:12},{value:" |",paraId:11,tocIndex:12},{value:"right",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"variant",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"borderless",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"underline",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"addonBefore",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"addonAfter",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"prefix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"suffix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"visibilityToggle",paraId:11,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"VisibilityToggle",paraId:12,tocIndex:12},{value:"maxLength",paraId:11,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:11,tocIndex:12},{value:"number",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"MaxLength",paraId:13,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:11,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:14,tocIndex:13},{value:"\u63CF\u8FF0",paraId:14,tocIndex:13},{value:"\u7C7B\u578B",paraId:14,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:13},{value:"visible",paraId:14,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:14,tocIndex:13},{value:"boolean",paraId:14,tocIndex:13},{value:"renderIcon",paraId:14,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:14,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:14,tocIndex:13},{value:"onVisibleChange",paraId:14,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:14,tocIndex:13},{value:"(visible: boolean) => void",paraId:14,tocIndex:13},{value:"\u5C5E\u6027",paraId:15,tocIndex:14},{value:"\u63CF\u8FF0",paraId:15,tocIndex:14},{value:"\u7C7B\u578B",paraId:15,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:14},{value:"length",paraId:15,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:15,tocIndex:14},{value:"number",paraId:15,tocIndex:14},{value:"showLimit",paraId:15,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14},{value:"true",paraId:15,tocIndex:14},{value:"errorOnly",paraId:15,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14}]},13141:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},20150:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684 ",paraId:1,tocIndex:6},{value:"SpaceProps",paraId:1,tocIndex:6},{value:" \u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u4E3A Markdown \u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:2,tocIndex:6},{value:"\u63CF\u8FF0",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"size",paraId:2,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:2,tocIndex:6},{value:"SizeType",paraId:3,tocIndex:6},{value:" | ",paraId:2,tocIndex:6},{value:"[SizeType, SizeType]",paraId:2,tocIndex:6},{value:"direction",paraId:2,tocIndex:6},{value:"\u65B9\u5411",paraId:2,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:6},{value:"'horizontal'",paraId:2,tocIndex:6},{value:"align",paraId:2,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:2,tocIndex:6},{value:"wrap",paraId:2,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"split",paraId:2,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:2,tocIndex:6},{value:"ReactNode",paraId:2,tocIndex:6},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u63CF\u8FF0",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"SizeType",paraId:4,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:4,tocIndex:7},{value:"ConfigSize",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"number",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"undefined",paraId:4,tocIndex:7}]},7629:function(v,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[]},99721:function(v,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},5658:function(v,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, useRef, useState, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '@sqi-ui/hooks';
import { canUseDom, isFunction, isString } from '@sqi-ui/utils';
import { getReactNodeRef } from '../_util/dom';
import { useComposeRef } from '../_util/ref';

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
  autoLockScroll?: boolean;
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
  const { getContainer, prefixCls, children, open = true, autoLockScroll = true } = props;

  const childRef = isValidElement(children) ? getReactNodeRef(children) : null;
  const mergedRef = useComposeRef(childRef, ref);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const shouldRender = open || isMounted;

  const createContainerNode = () => {
    if (!isBrowser) return null;

    const node = document.createElement('div');
    if (prefixCls) {
      node.className = \`\${prefixCls}-portal-wrapper\`;
    }

    node.setAttribute('data-portal', 'true');
    return node;
  };

  useIsomorphicLayoutEffect(() => {
    if (isBrowser && open && !containerRef.current) {
      containerRef.current = createContainerNode();
    }
  }, [open]);

  useIsomorphicLayoutEffect(() => {
    // \u517C\u5BB9\u663E\u793A\u9690\u85CF\u65F6\uFF08\u975E\u9500\u6BC1\uFF09\u7684\u6EDA\u52A8\u6761\u72B6\u6001
    // Portal \u6682\u65F6\u6CA1\u505A cache \u8282\u70B9\uFF0C\u56E0\u6B64\u4F7F\u7528\u6B64\u65B9\u5F0F\u6765\u517C\u5BB9\u548C CSSMotion \u7684\u9690\u85CF\u4EA4\u4E92
    if (autoLockScroll === false) {
      document.body.style.overflow = '';
    } else if (autoLockScroll && containerRef.current) {
      document.body.style.overflow = 'hidden';
    }
  }, [autoLockScroll]);

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser || !containerRef.current) return;

    const node = containerRef.current;
    const parent = getAttachNode(getContainer) || document.body;

    const attachToParent = () => {
      if (!node.parentNode) {
        parent.appendChild(node);
        // if (autoLockScroll) document.body.style.overflow = 'hidden';
        setIsMounted(true);
      }
    };

    const detachFromParent = () => {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
        if (autoLockScroll) document.body.style.overflow = '';
        setIsMounted(false);
      }
    };

    if (open) attachToParent();
    else detachFromParent();

    return () => {
      if (node.parentNode) {
        detachFromParent();
      }
    };
  }, [open, getContainer]);

  let content: React.ReactNode = null;
  if (shouldRender && children) {
    if (isValidElement(children)) {
      content = cloneElement(children as any, { ref: mergedRef });
    } else {
      content = children;
      if (process.env.NODE_ENV !== 'production' && ref) {
        console.error('[@sqi-web/ui] Portal: a \`string\` children is not support ref');
      }
    }
  }

  return containerRef.current ? createPortal(content, containerRef.current) : null;
});

Portal.displayName = 'Portal';

export default Portal;
`},26018:function(v,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef } from 'react';
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
`},86514:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},56602:function(v,t){"use strict";t.Z=`import React from 'react';
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
        {({ className, status }) => {
          return (
            <Portal autoLockScroll={status !== 'exited' && status !== 'unmounted'}>
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
`},9241:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},1056:function(v,t){"use strict";t.Z=`.sqi-demo-motion {
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
`},71441:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},94888:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},32480:function(v,t){"use strict";t.Z=`import { isValidElement, version } from 'react';

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
`},56848:function(v,t){"use strict";t.Z=`import { useCompareMemo } from '@sqi-ui/hooks';
import { isFunction, isObject } from '@sqi-ui/utils';

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
`},54776:function(v,t){"use strict";t.Z=`import { Children, isValidElement, type ReactNode } from 'react';
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
`},28398:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},57473:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},33087:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},33190:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},21102:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},83806:function(v,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},18569:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},74168:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},15538:function(v,t){"use strict";t.Z=`import React from 'react';

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
`},75890:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},14362:function(v,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},37839:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},44732:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},32857:function(v,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},22935:function(v,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},95084:function(v,t){"use strict";t.Z=`import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sqi',
  iconPrefix: 'sqi',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
`},51892:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},76313:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},7154:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},69344:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},59999:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},38986:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},84698:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},50076:function(v,t){"use strict";t.Z=`import React from 'react';

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
`},52869:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},96158:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},43256:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},26376:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},78484:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},73117:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},95130:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},94191:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},56416:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},12316:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},9168:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},87891:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},61724:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},32274:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},93157:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},12347:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},85007:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},69812:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},56346:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},48939:function(v,t){"use strict";t.Z=`import React from 'react';

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
`},86093:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},7195:function(v,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},46851:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},41280:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},39654:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},12761:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},79489:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},44879:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},64749:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},9392:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},75961:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},65723:function(v,t){"use strict";t.Z=`import React from 'react';
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
`},27833:function(v,t,e){"use no memo";"use strict";var n=Object.create,u=Object.defineProperty,r=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,i=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,l=(C,M)=>{for(var L in M)u(C,L,{get:M[L],enumerable:!0})},f=(C,M,L,A)=>{if(M&&typeof M=="object"||typeof M=="function")for(let K of p(M))!o.call(C,K)&&K!==L&&u(C,K,{get:()=>M[K],enumerable:!(A=r(M,K))||A.enumerable});return C},h=(C,M,L)=>(L=C!=null?n(i(C)):{},f(M||!C||!C.__esModule?u(L,"default",{value:C,enumerable:!0}):L,C)),d=C=>f(u({},"__esModule",{value:!0}),C),I={};l(I,{$dispatcherGuard:()=>G,$makeReadOnly:()=>T,$reset:()=>V,$structuralCheck:()=>H,c:()=>Y,clearRenderCounterRegistry:()=>$,renderCounterRegistry:()=>D,useRenderCounter:()=>O}),v.exports=d(I);var m=h(e(55826)),{useRef:c,useEffect:x,isValidElement:s}=m,a,E=(a=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)!=null?a:m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.memo_cache_sentinel"),P,Y=typeof((P=m.__COMPILER_RUNTIME)==null?void 0:P.c)=="function"?m.__COMPILER_RUNTIME.c:function(M){return m.useMemo(()=>{const L=new Array(M);for(let A=0;A<M;A++)L[A]=N;return L[N]=!0,L},[])},z={};["readContext","useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","unstable_isNewReconciler","getCacheSignal","getCacheForType","useCacheRefresh"].forEach(C=>{z[C]=()=>{throw new Error(`[React] Unexpected React hook call (${C}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)}});var b=null;z.useMemoCache=C=>{if(b==null)throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");return b.useMemoCache(C)};function g(C){return E.ReactCurrentDispatcher.current=C,E.ReactCurrentDispatcher.current}var R=[];function G(C){const M=E.ReactCurrentDispatcher.current;if(C===0){if(R.push(M),R.length===1&&(b=M),M===z)throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");g(z)}else if(C===1){const L=R.pop();if(L==null)throw new Error("React Compiler internal error: unexpected null in guard stack");R.length===0&&(b=null),g(L)}else if(C===2)R.push(M),g(b);else if(C===3){const L=R.pop();if(L==null)throw new Error("React Compiler internal error: unexpected null in guard stack");g(L)}else throw new Error("React Compiler internal error: unreachable block"+C)}function V(C){for(let M=0;M<C.length;M++)C[M]=N}function T(){throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")}var D=new Map;function $(){for(const C of D.values())C.forEach(M=>{M.count=0})}function F(C,M){let L=D.get(C);L==null&&(L=new Set,D.set(C,L)),L.add(M)}function w(C,M){const L=D.get(C);L!=null&&L.delete(M)}function O(C){const M=c(null);M.current!=null&&(M.current.count+=1),x(()=>{if(M.current==null){const L={count:0};F(C,L),M.current=L}return()=>{M.current!==null&&w(C,M.current)}})}var U=new Set;function H(C,M,L,A,K,ee){function W(B,S,J,y){const k=`${A}:${ee} [${K}] ${L}${J} changed from ${B} to ${S} at depth ${y}`;U.has(k)||(U.add(k),console.error(k))}const Q=2;function X(B,S,J,y){if(!(y>Q)){if(B===S)return;if(typeof B!=typeof S)W(`type ${typeof B}`,`type ${typeof S}`,J,y);else if(typeof B=="object"){const k=Array.isArray(B),ne=Array.isArray(S);if(B===null&&S!==null)W("null",`type ${typeof S}`,J,y);else if(S===null)W(`type ${typeof B}`,"null",J,y);else if(B instanceof Map)if(!(S instanceof Map))W("Map instance","other value",J,y);else if(B.size!==S.size)W(`Map instance with size ${B.size}`,`Map instance with size ${S.size}`,J,y);else for(const[j,q]of B)S.has(j)?X(q,S.get(j),`${J}.get(${j})`,y+1):W(`Map instance with key ${j}`,`Map instance without key ${j}`,J,y);else if(S instanceof Map)W("other value","Map instance",J,y);else if(B instanceof Set)if(!(S instanceof Set))W("Set instance","other value",J,y);else if(B.size!==S.size)W(`Set instance with size ${B.size}`,`Set instance with size ${S.size}`,J,y);else for(const j of S)B.has(j)||W(`Set instance without element ${j}`,`Set instance with element ${j}`,J,y);else if(S instanceof Set)W("other value","Set instance",J,y);else if(k||ne)if(k!==ne)W(`type ${k?"array":"object"}`,`type ${ne?"array":"object"}`,J,y);else if(B.length!==S.length)W(`array with length ${B.length}`,`array with length ${S.length}`,J,y);else for(let j=0;j<B.length;j++)X(B[j],S[j],`${J}[${j}]`,y+1);else if(s(B)||s(S))s(B)!==s(S)?W(`type ${s(B)?"React element":"object"}`,`type ${s(S)?"React element":"object"}`,J,y):B.type!==S.type?W(`React element of type ${B.type}`,`React element of type ${S.type}`,J,y):X(B.props,S.props,`[props of ${J}]`,y+1);else{for(const j in S)j in B||W(`object without key ${j}`,`object with key ${j}`,J,y);for(const j in B)j in S?X(B[j],S[j],`${J}.${j}`,y+1):W(`object with key ${j}`,`object without key ${j}`,J,y)}}else{if(typeof B=="function")return;isNaN(B)||isNaN(S)?isNaN(B)!==isNaN(S)&&W(`${isNaN(B)?"NaN":"non-NaN value"}`,`${isNaN(S)?"NaN":"non-NaN value"}`,J,y):B!==S&&W(B,S,J,y)}}}X(C,M,"",0)}},23098:function(v,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler");Symbol.for("react.provider");var i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),m=Symbol.for("react.view_transition"),c=Symbol.for("react.client.reference");function x(s){if(typeof s=="object"&&s!==null){var a=s.$$typeof;switch(a){case e:switch(s=s.type,s){case u:case p:case r:case f:case h:case m:return s;default:switch(s=s&&s.$$typeof,s){case o:case l:case I:case d:return s;case i:return s;default:return a}}case n:return a}}}t.ContextConsumer=i,t.ContextProvider=o,t.Element=e,t.ForwardRef=l,t.Fragment=u,t.Lazy=I,t.Memo=d,t.Portal=n,t.Profiler=p,t.StrictMode=r,t.Suspense=f,t.SuspenseList=h,t.isContextConsumer=function(s){return x(s)===i},t.isContextProvider=function(s){return x(s)===o},t.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===e},t.isForwardRef=function(s){return x(s)===l},t.isFragment=function(s){return x(s)===u},t.isLazy=function(s){return x(s)===I},t.isMemo=function(s){return x(s)===d},t.isPortal=function(s){return x(s)===n},t.isProfiler=function(s){return x(s)===p},t.isStrictMode=function(s){return x(s)===r},t.isSuspense=function(s){return x(s)===f},t.isSuspenseList=function(s){return x(s)===h},t.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===u||s===p||s===r||s===f||s===h||typeof s=="object"&&s!==null&&(s.$$typeof===I||s.$$typeof===d||s.$$typeof===o||s.$$typeof===i||s.$$typeof===l||s.$$typeof===c||s.getModuleId!==void 0)},t.typeOf=x},13640:function(v,t,e){"use strict";v.exports=e(23098)},37797:function(v,t,e){"use strict";e.d(t,{D:function(){return u}});var n=e(55826);function u(r,p,i){const o=(0,n.useRef)({});return(!("value"in o.current)||i(o.current.condition,p))&&(o.current.value=r(),o.current.condition=p),o.current.value}},60164:function(v,t,e){"use strict";e.d(t,{L:function(){return p}});var n=e(55826),u=e(34028);const p=(0,u.J)()?n.useLayoutEffect:n.useEffect},7657:function(v,t,e){"use strict";e.d(t,{S:function(){return u}});var n=e(55826);function u(r){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return(0,n.useMemo)(()=>{const o=Z(Z({},p),i),l=Z({},r);for(const f in o)l[f]===void 0&&(l[f]=o[f]);return l},[r,p,i])}},62222:function(v,t,e){"use strict";e.d(t,{R:function(){return p}});var n=e(55826),u=e(80703),r=e(45844);function p(i,o){const{defaultValue:l,value:f,onChange:h}=o||{},[d,I]=(0,n.useState)(()=>(0,u.o8)(f)?(0,u.o8)(l)?(0,u.mf)(i)?i():i:(0,u.mf)(l)?l():l:f),m=(0,r.D)(f),c=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(c.current){c.current=!1;return}(0,u.o8)(f)&&m!==f&&I(f)},[f]);const x=(0,u.o8)(f)?d:f,s=(0,n.useCallback)(a=>{const E=(0,u.mf)(a)?a(x):a;(0,u.o8)(f)&&I(E),!Object.is(E,x)&&(h==null||h(E))},[d,x]);return[x,s]}},45844:function(v,t,e){"use strict";e.d(t,{D:function(){return u}});var n=e(55826);function u(r){const p=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{p.current=r},[r]),p.current}},8240:function(v,t,e){"use strict";e.d(t,{y:function(){return i}});var n=e(55826),u=e(20759),r=e(34028),p=e(60164);function i(o,l){let f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const h=(0,n.useRef)(null);h.current=l,(0,p.L)(()=>{const d=o.current;let I=null;if(!f||!(0,r.J)()||!d)return;const m=c=>{var x;(x=h.current)==null||x.call(h,c)};return I=new u.Z(m),I.observe(d),()=>{if(I&&d){var c;I.unobserve(d),(c=I.disconnect)==null||c.call(I),I=null}}},[o,f])}},31136:function(v,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(55826);const r=(0,n.createContext)({})},37907:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(7829),r=e(31136);const p=(0,n.forwardRef)((o,l)=>{const N=o,{svg:f,type:h,spin:d,rotate:I,className:m,style:c}=N,x=ue(N,["svg","type","spin","rotate","className","style"]),{prefixCls:s="sqi"}=(0,n.useContext)(r.Z),a=(0,u.default)(`${s}-icon`,{[`${s}-icon-spin`]:!!d&&!!f},m),E=c||{};return Number.isSafeInteger(I)&&(E.transform=`rotate(${I}deg)`),n.createElement("span",Z({role:"img",ref:l,"aria-label":h,className:a,style:E},x),f)});p.displayName="Icon";const i=p},46874:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"add",ref:l},o)));p.displayName="AddIcon";const i=p},1824:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"browse",ref:l},o)));p.displayName="BrowseIcon";const i=p},85569:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"browse-off",ref:l},o)));p.displayName="BrowseOffIcon";const i=p},23436:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"check-circle-filled",ref:l},o)));p.displayName="CheckCircleFilledIcon";const i=p},46608:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"chevron-down",ref:l},o)));p.displayName="ChevronDownIcon";const i=p},58360:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"close-circle-filled",ref:l},o)));p.displayName="CloseCircleFilledIcon";const i=p},27377:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"close",ref:l},o)));p.displayName="CloseIcon";const i=p},50397:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"info-circle-filled",ref:l},o)));p.displayName="InfoCircleFilledIcon";const i=p},60333:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"loading",ref:l},o)));p.displayName="LoadingIcon";const i=p},36106:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"search",ref:l},o)));p.displayName="SearchIcon";const i=p},65466:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"upload",ref:l},o)));p.displayName="UploadIcon";const i=p},21925:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),u=e(37907);function r(o){return(0,n.createElement)("svg",Z({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,l)=>(0,n.createElement)(u.Z,Z({svg:(0,n.createElement)(r),type:"warn-circle-filled",ref:l},o)));p.displayName="WarnCircleFilledIcon";const i=p},5629:function(v,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return r.Z},BrowseIcon:function(){return i.Z},BrowseOffIcon:function(){return p.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return l.Z},CloseCircleFilledIcon:function(){return f.Z},CloseIcon:function(){return h.Z},IconContext:function(){return u.Z},InfoCircleFilledIcon:function(){return d.Z},LoadingIcon:function(){return I.Z},SearchIcon:function(){return m.Z},UploadIcon:function(){return c.Z},WarnCircleFilledIcon:function(){return x.Z},default:function(){return s}});var n=e(37907),u=e(31136),r=e(46874),p=e(85569),i=e(1824),o=e(23436),l=e(46608),f=e(58360),h=e(27377),d=e(50397),I=e(60333),m=e(36106),c=e(65466),x=e(21925);const s=n.Z},34028:function(v,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(v,t,e){"use strict";e.d(t,{D:function(){return n}});function n(u,r){let p=null;const i=function(){for(var o=arguments.length,l=new Array(o),f=0;f<o;f++)l[f]=arguments[f];p&&clearTimeout(p),p=setTimeout(()=>{u.apply(this,l),p=null},r)};return i.cancel=()=>{p&&(clearTimeout(p),p=null)},i}},80703:function(v,t,e){"use strict";e.d(t,{HD:function(){return i},Kn:function(){return o},Qr:function(){return l},hj:function(){return f},kJ:function(){return p},mf:function(){return u},o8:function(){return r}});const n=Object.prototype.toString;function u(h){return n.call(h)==="[object Function]"}function r(h){return h===void 0}function p(h){return n.call(h)==="[object Array]"}function i(h){return n.call(h)==="[object String]"}const o=h=>n.call(h)==="[object Object]",l=h=>{if(!o(h))return!0;for(const d in h)if(Object.prototype.hasOwnProperty.call(h,d))return!1;return!0},f=h=>n.call(h)==="[object Number]"&&h===h},12598:function(v,t,e){"use strict";e.d(t,{C:function(){return n}});function n(u,r){const p=Object.assign({},u);return Array.isArray(r)&&r.forEach(i=>{delete p[i]}),p}},6890:function(v,t,e){"use strict";e.d(t,{P:function(){return u}});var n=e(78831);function u(r,p){let i=null;const o=(0,n.D)(r,p),l=function(){for(var f=arguments.length,h=new Array(f),d=0;d<f;d++)h[d]=arguments[d];i===null?i=Date.now():Date.now()-i>=p&&(i=Date.now(),o.cancel()),o(...h)};return l.cancel=o.cancel,l}},92266:function(v,t,e){"use strict";e.d(t,{C:function(){return p},Z:function(){return i}});var n=e(55826),u=e(7829),r=e(62222);const p=(0,n.forwardRef)((o,l)=>{const g=o,{prefixCls:f,className:h,style:d,checked:I,disabled:m,defaultChecked:c=!1,type:x="checkbox",title:s,onChange:a,_getCheckedValue:E}=g,N=ue(g,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[P,Y]=(0,r.R)(c,{value:I});(0,n.useEffect)(()=>{E==null||E(P)},[P]);const z=(0,u.default)(f,h,{[`${f}-checked`]:P,[`${f}-disabled`]:m}),b=R=>{m||("checked"in o||Y(R.target.checked),a==null||a({target:re(Z({},o),{checked:R.target.checked}),event:R}))};return n.createElement("span",{className:z,title:s,style:d},n.createElement("input",re(Z({},N),{className:`${f}-input`,ref:l,onChange:b,disabled:m,checked:P,type:x})),n.createElement("span",{className:`${f}-inner`}))});p.displayName="BaseCheckbox";const i=p},4814:function(v,t,e){"use strict";e.d(t,{sQ:function(){return u}});var n=e(80703);const u=function(){for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];const f=o.filter(Boolean);return f.length<=1?f[0]:h=>{o.forEach(d=>{r(d,h)})}},r=(i,o)=>{(0,n.mf)(i)?i(o):(0,n.Kn)(i)&&"current"in i&&(i.current=o)},p=function(){for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return useCompareMemo(()=>u(...o),o,(f,h)=>f.length!==h.length||f.every((d,I)=>d!==h[I]))}},4274:function(v,t,e){"use strict";e.d(t,{b:function(){return P}});var n=e(27833),u=e(55826),r=e(7829),p=e(7657),i=e(23436),o=e(50397),l=e(58360),f=e(21925),h=e(27377),d=e(64508),I=e(80703),m=e(57577);const c=(0,u.forwardRef)((z,b)=>{const g=(0,u.useContext)(m.E),U=z,{children:R,name:G,prefixCls:V}=U,T=ue(U,["children","name","prefixCls"]),[D,$]=(0,d.Y)(T),F=(0,u.isValidElement)(R);(0,u.useImperativeHandle)(b,()=>({toggle:$}));const w=`${V||g.prefixCls}${G?`-${G}`:""}`,O=(0,r.default)([`${w}-motion`],{[`${w}-motion-${D.status}`]:D.status});return(0,I.mf)(R)?D.isMounted?R(re(Z({},D),{className:O,toggle:$})):null:F?D.isMounted?(0,u.cloneElement)(R,{className:(0,r.default)(R.props.className,O)}):null:R});c.displayName="CSSMotion";const x=c,s={type:"info",showIcon:!0},a={success:i.Z,info:o.Z,error:l.Z,warning:f.Z},E=(0,u.forwardRef)((z,b)=>{const g=(0,n.c)(38),{prefixCls:R,componentConfig:G}=(0,u.useContext)(m.E),{className:V,style:T,title:D,description:$,type:F,closable:w,showIcon:O,action:U,icon:H,onClose:C}=(0,p.S)(z,s,G==null?void 0:G.Alert),M=(0,u.useRef)(null);let L;g[0]!==H||g[1]!==F?(L=()=>(0,u.isValidElement)(H)?H:F?(0,u.createElement)(a[F]):null,g[0]=H,g[1]=F,g[2]=L):L=g[2];const A=L,K=`${R}-alert`,ee=`${R}-alert-${F}`;let W;g[3]!==V||g[4]!==K||g[5]!==ee?(W=(0,r.default)(K,ee,V),g[3]=V,g[4]=K,g[5]=ee,g[6]=W):W=g[6];const Q=W;let X;g[7]!==C?(X=de=>{var ie;(ie=M.current)==null||ie.toggle(),C==null||C(de)},g[7]=C,g[8]=X):X=g[8];const B=X;let S;g[9]!==R||g[10]!==A||g[11]!==O?(S=O&&u.createElement("div",{className:`${R}-alert-icon`},A()),g[9]=R,g[10]=A,g[11]=O,g[12]=S):S=g[12];const J=`${R}-alert-content`;let y;g[13]!==R||g[14]!==D?(y=!!D&&u.createElement("div",{className:`${R}-alert-title`},D),g[13]=R,g[14]=D,g[15]=y):y=g[15];const k=`${R}-alert-description`;let ne;g[16]!==$||g[17]!==k?(ne=u.createElement("div",{className:k},$),g[16]=$,g[17]=k,g[18]=ne):ne=g[18];let j;g[19]!==J||g[20]!==y||g[21]!==ne?(j=u.createElement("div",{className:J},y,ne),g[19]=J,g[20]=y,g[21]=ne,g[22]=j):j=g[22];let q;g[23]!==U||g[24]!==R?(q=U&&u.createElement("div",{className:`${R}-alert-action`},U),g[23]=U,g[24]=R,g[25]=q):q=g[25];let _;g[26]!==w||g[27]!==B||g[28]!==R?(_=w&&u.createElement("button",{className:`${R}-alert-close`,onClick:B},u.createElement(h.Z,null)),g[26]=w,g[27]=B,g[28]=R,g[29]=_):_=g[29];let te;return g[30]!==Q||g[31]!==b||g[32]!==T||g[33]!==j||g[34]!==q||g[35]!==_||g[36]!==S?(te=u.createElement(x,{ref:M,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},u.createElement("div",{role:"alert",className:Q,style:T,ref:b},S,j,q,_)),g[30]=Q,g[31]=b,g[32]=T,g[33]=j,g[34]=q,g[35]=_,g[36]=S,g[37]=te):te=g[37],te});E.displayName="Alert";const P=E,Y=null},60884:function(v,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(55826),u=e(7829),r=e(60333),p=e(7657),i=e(57577);const o={type:"default",variant:"default",htmlType:"button"},l=(0,n.forwardRef)((I,m)=>{const{prefixCls:c,size:x="md",componentConfig:s}=(0,n.useContext)(i.E),C=(0,p.S)(I,o,s==null?void 0:s.Button),{children:E,type:N,size:P=x,htmlType:Y,status:z,loading:b,disabled:g,variant:R,icon:G,href:V,target:T,onClick:D,anchorProps:$={}}=C,F=ue(C,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),w=b?n.createElement(r.Z,{spin:b}):G,O=V?"link":N,U=(0,u.default)(`${c}-btn`,`${c}-btn-${O}`,{[`${c}-btn-size-${P}`]:P,[`${c}-btn-status-${z}`]:!!z,[`${c}-btn-variant-${R}`]:R,[`${c}-btn-loading`]:b,[`${c}-btn-disabled`]:g}),H=M=>{if(b||g)return void M.preventDefault();D==null||D(M)};return V?n.createElement("a",re(Z({},$),{href:V,target:T,className:U,onClick:H,ref:m}),w,n.createElement("span",null,E)):n.createElement("button",re(Z({},F),{type:Y,className:U,onClick:H,ref:m}),w,n.createElement("span",null,E))});l.displayName="Button";const h=l,d=null},67824:function(v,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(55826),u=e(7829),r=e(7657),p=e(45844),i=e(80703),o=e(92266),l=e(4814),f=e(57577),h=e(81372);const d={defaultChecked:!1,indeterminate:!1},I=(0,n.forwardRef)((c,x)=>{const{prefixCls:s,componentConfig:a}=(0,n.useContext)(f.E),E=(0,n.useContext)(h.w),O=(0,r.S)(c,d,a==null?void 0:a.Checkbox),{children:N,style:P,className:Y,indeterminate:z}=O,b=ue(O,["children","style","className","indeterminate"]),[g,R]=(0,n.useState)(!1),G="disabled"in b?b.disabled:E.disabled;let V=(0,p.D)(b.value);const T=(0,n.useRef)(null);(0,n.useEffect)(()=>{var U;(U=E.registerValue)==null||U.call(E,b.value)},[]),(0,n.useEffect)(()=>{if(b.value!==V){var U,H;(U=E.unregisterValue)==null||U.call(E,V),(H=E.registerValue)==null||H.call(E,b.value),V=b.value}return()=>{var C;return(C=E.unregisterValue)==null?void 0:C.call(E,b.value)}},[b.value]),(0,n.useEffect)(()=>{T.current&&(T.current.indeterminate=z)},[z]);const D=Z({},b);(0,i.Qr)(E)||(D.onChange=function(){for(var U=arguments.length,H=new Array(U),C=0;C<U;C++)H[C]=arguments[C];var M,L;(M=b.onChange)==null||M.call(b,...H),(L=E.toggleOption)==null||L.call(E,b.value)},D.name=E.name,D.checked=E.value.includes(b.value));const $=(0,u.default)(`${s}-checkbox-wrapper`,{[`${s}-checkbox-wrapper-checked`]:D.checked,[`${s}-checkbox-wrapper-disabled`]:G},Y),F=U=>{if((0,i.mf)(N)){var H;U.preventDefault(),(H=T.current)==null||H.click()}},w=()=>(0,i.o8)(N)?null:(0,i.mf)(N)?N({checked:"checked"in D?!!D.checked:g}):n.createElement("span",{className:`${s}-checkbox-label`},N);return n.createElement("label",{className:$,onClick:F},n.createElement(o.C,re(Z({},D),{type:"checkbox",ref:(0,l.sQ)(x,T),disabled:G,prefixCls:`${s}-checkbox`,className:(0,u.default)({[`${s}-checkbox-indeterminate`]:z}),style:re(Z({},P),{display:(0,i.mf)(N)?"none":void 0}),_getCheckedValue:R})),w())});I.displayName="Checkbox";const m=I},56104:function(v,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(55826),u=e(7829),r=e(7657),p=e(80703),i=e(57577),o=e(81372),l=e(67824);const f={},h=(0,n.forwardRef)((I,m)=>{const{prefixCls:c,componentConfig:x}=(0,n.useContext)(i.E),s=(0,n.useId)(),M=(0,r.S)(I,f,x==null?void 0:x.CheckboxGroup),{defaultValue:a,children:E,options:N,className:P,style:Y,disabled:z,name:b=s,onChange:g,renderOption:R}=M,G=ue(M,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[V,T]=(0,n.useState)(G.value||a||[]),[D,$]=(0,n.useState)([]);(0,n.useEffect)(()=>{"value"in G&&T(G.value||[])},[G.value]);const F=(0,n.useCallback)(L=>{$(A=>[...A,L])},[]),w=(0,n.useCallback)(L=>{$(A=>A.filter(K=>K!==L))},[]),O=(0,n.useMemo)(()=>N==null?void 0:N.map(L=>(0,p.HD)(L)||(0,p.hj)(L)?{label:L,value:L}:L),[N]),U=(0,n.useCallback)(L=>{const A=[...V],K=V.indexOf(L);K===-1?A.push(L):A.splice(K,1),"value"in G||T(A);const ee=A.filter(W=>D.includes(W));g==null||g(ee)},[V,D,G,g]);let H=E;if((0,p.kJ)(O)&&O.length>0){const L=(0,p.mf)(R);H=O.map(A=>{const K=V.includes(A.value),ee=L?()=>R(re(Z({},A),{checked:K})):A.label;return n.createElement(l.Z,{key:`checkbox-group-options-${A.value}`,className:A.className,style:A.style,disabled:"disabled"in A?A.disabled:z,value:A.value,checked:K,id:A.id,title:A.title,onChange:A.onChange},ee)})}const C=(0,n.useMemo)(()=>({name:b,value:V,disabled:z,toggleOption:U,registerValue:F,unregisterValue:w}),[b,V,z,U,F,w]);return n.createElement("div",{className:(0,u.default)(`${c}-checkbox-group`,P),style:Y,ref:m},n.createElement(o.w.Provider,{value:C},H))});h.displayName="CheckboxGroup";const d=h},81372:function(v,t,e){"use strict";e.d(t,{w:function(){return u}});var n=e(55826);const u=(0,n.createContext)({})},89946:function(v,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return l},CheckboxGroup:function(){return f},default:function(){return h}});var n=e(67824),u=e(56104),r=e(558),p=e.n(r),i={};for(var o in r)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(i[o]=function(d){return r[d]}.bind(0,o));e.d(t,i);const l=n.Z;l.Group=u.Z;const f=l.Group,h=l},558:function(){},57577:function(v,t,e){"use strict";e.d(t,{$:function(){return u},E:function(){return r}});var n=e(55826);const u={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(u)},83405:function(v,t,e){"use strict";e.d(t,{i:function(){return f}});var n=e(27833),u=e(55826),r=e(12598),p=e(7657),i=e(31136),o=e(57577);function l(h){const d=(0,n.c)(11),I=(0,p.S)(h,o.$),{iconPrefix:m,children:c}=I;let x;d[0]!==I?(x=(0,r.C)(I,["children","iconPrefix"]),d[0]=I,d[1]=x):x=d[1];const s=x,a=m?i.Z.Provider:u.Fragment;let E;d[2]!==m?(E={prefixCls:m},d[2]=m,d[3]=E):E=d[3];let N;d[4]!==a||d[5]!==c||d[6]!==E?(N=u.createElement(a,{value:E},c),d[4]=a,d[5]=c,d[6]=E,d[7]=N):N=d[7];let P;return d[8]!==s||d[9]!==N?(P=u.createElement(o.E.Provider,{value:s},N),d[8]=s,d[9]=N,d[10]=P):P=d[10],P}l.displayName="ConfigProvider";const f=l},48380:function(v,t,e){"use strict";e.d(t,{i:function(){return f}});var n=e(55826),u=e(7829),r=e(7657),p=e(57577);const i={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((d,I)=>{const{prefixCls:m,componentConfig:c}=(0,n.useContext)(p.E),x=(0,r.S)(d,i,c==null?void 0:c.Divider),{direction:s,align:a,dashed:E,className:N,children:P,text:Y,style:z}=x,b=P||Y,g=s!=="vertical"&&!!b,R=(0,u.default)(`${m}-divider`,{[`${m}-divider-${s}`]:s,[`${m}-divider-with-text`]:g,[`${m}-divider-with-text-${a}`]:g,[`${m}-divider-dashed`]:!!E,className:N});return n.createElement("div",{className:R,style:z,ref:I},g&&n.createElement("span",{className:`${m}-divider-inner-text`},b))});o.displayName="Divider";const f=o,h=null},17599:function(v,t,e){"use strict";e.d(t,{J:function(){return V},X:function(){return G}});var n=e(55826),u=e(7829),r=e(7657),p=e(80703),i=e(57577);const o=["xxl","xl","lg","md","sm","xs"],l={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},f=Object.keys(l),h=new Map;let d=-1,I={};const c={handlers:{},dispatch(T){return I=T,h.forEach(D=>D(I)),h.size>=1},subscribe(T){return h.size||this.register(),d+=1,h.set(d,T),T(I),d},unsubscribe(T){h.delete(T),h.size||this.unregister()},register(){f.forEach(T=>{const D=w=>{let{matches:O}=w;this.dispatch(re(Z({},I),{[T]:O}))},$=l[T],F=window.matchMedia($);F.addListener(D),this.handlers[$]={mql:F,listener:D},D(F)})},unregister(){f.forEach(T=>{const D=l[T],$=this.handlers[D];$==null||$.mql.removeListener($==null?void 0:$.listener)}),h.clear()}},s=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},E=(0,n.forwardRef)((T,D)=>{const{prefixCls:$,componentConfig:F}=(0,n.useContext)(i.E),j=(0,r.S)(T,a,F==null?void 0:F.Row),{align:w,justify:O,gutter:U,className:H,wrap:C,children:M,style:L}=j,A=ue(j,["align","justify","gutter","className","wrap","children","style"]),[K,ee]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const q=c.subscribe(_=>{((0,p.Kn)(U)||(0,p.kJ)(U)&&((0,p.Kn)(U[0])||(0,p.Kn)(U[1])))&&ee(_)});return()=>c.unsubscribe(q)},[]);const W=Q();function Q(){const q=[void 0,void 0];return((0,p.kJ)(U)?U:[U,void 0]).forEach((te,de)=>{if((0,p.Kn)(te))for(let ie=0;ie<o.length;ie++){const pe=o[ie];if(K[pe]&&te[pe]!==void 0){q[de]=te[pe];break}}else q[de]=te}),q}const X=(0,u.default)(`${$}-row`,{[`${$}-row-nowrap`]:C===!1,[`${$}-row-align-${w}`]:w,[`${$}-row-justify-${O}`]:O},H),[B,S]=W,J=(0,n.useMemo)(()=>({gutter:[B,S],wrap:C}),[B,S,C]),y={},k=(0,p.hj)(B)&&B!==0,ne=(0,p.hj)(S)&&S!==0;if(k||ne){const q=-B/2,_=-S/2;q&&(y.marginLeft=q,y.marginRight=q),_&&(y.marginTop=_,y.marginBottom=_)}return n.createElement(s.Provider,{value:J},n.createElement("div",re(Z({},A),{ref:D,className:X,style:Z(Z({},L),y)}),M))});E.displayName="Row";const N=E,P={offset:0};function Y(T){return(0,p.hj)(T)?`${T} ${T} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(T)?`0 0 ${T}`:T}const z=["xs","sm","md","lg","xl","xxl"],b=(T,D)=>{let $={};return z.forEach(F=>{const w=T[F];if(!w)return;let O={};(0,p.hj)(w)?O.span=w:(0,p.Kn)(w)&&(O=w),$=re(Z({},$),{[`${D}-col-${F}-${O.span}`]:(0,p.hj)(O.span),[`${D}-col-${F}-order-${O.order}`]:O.order,[`${D}-col-${F}-offset-${O.offset}`]:O.offset})}),$},g=(0,n.forwardRef)((T,D)=>{const{componentConfig:$,prefixCls:F}=(0,n.useContext)(i.E),{gutter:w}=(0,n.useContext)(s),j=(0,r.S)(T,P,$==null?void 0:$.Col),{span:O,offset:U,children:H,className:C,style:M,flex:L,order:A,xs:K,sm:ee,md:W,lg:Q,xl:X,xxl:B}=j,S=ue(j,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),J=b({xs:K,sm:ee,md:W,lg:Q,xl:X,xxl:B},F),y=(0,u.default)(`${F}-col`,{[`${F}-col-${O}`]:(0,p.hj)(O),[`${F}-col-offset-${U}`]:U,[`${F}-col-order-${A}`]:A},J,C),k={};if(w){const q=w[0]?w[0]/2:0,_=w[1]?w[1]/2:0;q&&(k.paddingLeft=q,k.paddingRight=q),_&&(k.paddingTop=_,k.paddingBottom=_)}const ne={};return L&&(ne.flex=Y(L)),n.createElement("div",re(Z({ref:D},S),{className:y,style:Z(Z(Z({},M),ne),k)}),H)});g.displayName="Col";const R=g,G=N,V=R},45990:function(v,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return u.z},Col:function(){return l.J},ConfigProvider:function(){return i.i},Divider:function(){return o.i},Input:function(){return f.I},Row:function(){return l.X},Space:function(){return d.T}});var n=e(4274),u=e(60884),r=e(89946),m={};for(var p in r)["default","Alert","Button"].indexOf(p)<0&&(m[p]=function(c){return r[c]}.bind(0,p));e.d(t,m);var i=e(83405),o=e(48380),l=e(17599),f=e(38312),h=e(37663),m={};for(var p in h)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input"].indexOf(p)<0&&(m[p]=function(x){return h[x]}.bind(0,p));e.d(t,m);var d=e(46417),I=e(36112),m={};for(var p in I)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Radio","RadioButton","RadioGroup","Space"].indexOf(p)<0&&(m[p]=function(x){return I[x]}.bind(0,p));e.d(t,m)},38312:function(v,t,e){"use strict";e.d(t,{I:function(){return s}});var n=e(55826),u=e(7829),r=e(7657),p=e(62222),i=e(80703),o=e(58360),l=e(85569),f=e(1824),h=e(4814),d=e(57577);const I={type:"text",size:"md",align:"left",visibilityToggle:!0};function m(E,N,P){let Y;return Y=E===null||(0,i.o8)(E)||(0,i.HD)(E)?E||"":String(E),(0,i.hj)(N)&&!P?Y.slice(0,N):Y}const c=(0,n.forwardRef)((E,N)=>{const{prefixCls:P,componentConfig:Y}=(0,n.useContext)(d.E),be=(0,r.S)(E,I,Y==null?void 0:Y.Input),{size:z,status:b,align:g,disabled:R,allowClear:G,placeholder:V,variant:T="outline",addonBefore:D,addonAfter:$,prefix:F,suffix:w,value:O,defaultValue:U,type:H,className:C,style:M,readOnly:L,visibilityToggle:A,maxLength:K,tips:ee,onFocus:W,onBlur:Q,onChange:X}=be,B=ue(be,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),S=(0,n.useRef)(null),[J,y]=(0,n.useState)(!1),k=ae=>{R||L||(y(!0),W==null||W(ae))},ne=ae=>{R||L||(y(!1),Q==null||Q(ae))},j=(0,i.hj)(K)?K:K==null?void 0:K.length,q=(0,i.hj)(K)?!1:K==null?void 0:K.errorOnly,_=(0,i.hj)(K)?!0:(K==null?void 0:K.showLimit)!==!1,[te,de]=(0,p.R)(U,{value:O}),ie=m(te,j,q),pe=(0,i.hj)(j)?ie.length>j:!1,Ee=ae=>{const{value:ve}=ae.target;de(ve),X==null||X(ve,ae)},Re=()=>{var ae;R||(ae=S.current)==null||ae.focus()},Ie=(0,u.default)(`${P}-input`,{[`${P}-input-variant-${T}`]:T,[`${P}-input-size-${z}`]:z,[`${P}-input-disabled`]:R,[`${P}-input-align-${g}`]:g,[`${P}-input-status-${b}`]:b,[`${P}-input-focus`]:J,[`${P}-input-limit-length-error`]:pe},C),xe=(0,u.default)(`${P}-input-real`),Pe=G&&ie&&!R,oe=n.createElement(o.Z,null),se=ae=>{ae.stopPropagation(),de(""),X==null||X("",ae)},me=Pe&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,u.default)(`${P}-input-suffix`,`${P}-input-clear`),onClick:se},oe),le=(0,i.Kn)(A)&&!(0,i.o8)(A.visible),[ce,fe]=(0,n.useState)(H);(0,n.useEffect)(()=>{fe(le?A.visible?"text":"password":H)},[H,le,A==null?void 0:A.visible]);const he=()=>{if(R)return;const ae=ce==="password"?"text":"password";if(fe(ae),le){var ve;(ve=A.onVisibleChange)==null||ve.call(A,ae==="text")}},ge=H==="password",De=(0,n.useMemo)(()=>ge?(0,i.Kn)(A)&&(0,i.mf)(A.renderIcon)?A.renderIcon(ce==="text"):ce==="password"?n.createElement(l.Z,null):ce==="text"?n.createElement(f.Z,null):null:w,[ge,ce,A,w]),Le=(0,n.useMemo)(()=>function(ae){let{children:ve}=ae;const We=D||$;let Ce=ve;return We&&(Ce=n.createElement("div",{className:`${P}-input-group`},Ce)),ee&&(Ce=n.createElement("div",{className:`${P}-input-group-extra`},Ce)),Ce},[D,$,ee]),Se=F&&n.createElement("span",{className:`${P}-input-prefix`},F),Te=De&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,u.default)(`${P}-input-suffix`,{[`${P}-input-suffix-password`]:ge}),onClick:he,onMouseDown:ae=>ae.preventDefault(),onMouseUp:ae=>ae.preventDefault()},De),Ae=(0,i.hj)(j)&&_&&n.createElement("span",{className:`${P}-input-limit-length-text`},ie.length,"/",j),Ne=ee&&n.createElement("div",{className:(0,u.default)(`${P}-input-tips`,{[`${P}-input-tips-status-${b}`]:b})},ee),$e=n.createElement(n.Fragment,null,n.createElement("span",{className:Ie,style:M,onClick:Re},Se,n.createElement("input",re(Z({ref:(0,h.sQ)(N,S)},B),{type:ce,value:ie,readOnly:L,className:xe,placeholder:V,disabled:R,onChange:Ee,onFocus:k,onBlur:ne})),me,Te,Ae)),Ke=D&&n.createElement("span",{className:(0,u.default)(`${P}-input-group-addon`)},D),Ue=$&&n.createElement("span",{className:(0,u.default)(`${P}-input-group-addon`)},$);return n.createElement(Le,null,Ke,$e,Ue,Ne)});c.displayName="Input";const s=c,a=null},74052:function(v,t,e){"use strict";e.d(t,{Z:function(){return I}});var n=e(55826),u=e(7829),r=e(7657),p=e(80703),i=e(92266),o=e(4814),l=e(57577),f=e(83595);const h={defaultChecked:!1},d=(0,n.forwardRef)((m,c)=>{const{prefixCls:x,componentConfig:s}=(0,n.useContext)(l.E),a=(0,n.useContext)(f.Z),U=(0,r.S)(m,h,s==null?void 0:s.Radio),{_IS_BUTTON_:E,value:N,children:P,style:Y}=U,z=ue(U,["_IS_BUTTON_","value","children","style"]),b=H=>{var C,M;(C=z.onChange)==null||C.call(z,H),a==null||(M=a.onChange)==null||M.call(a,H)},g=Z({},z);let R="md";if(!(0,p.Qr)(a)){g.name=a.name,g.onChange=b,g.checked=N===a.value;var G;g.disabled=(G=g.disabled)!=null?G:a.disabled,R=a.size?a.size:R}const[V,T]=(0,n.useState)(!1),D=E?`${x}-radio-button`:`${x}-radio`,$=(0,u.default)(`${D}-wrapper`,{[`${D}-wrapper-disabled`]:g.disabled,[`${D}-wrapper-checked`]:g.checked,[`${D}-wrapper-size-${R}`]:R,[`${D}-wrapper-filled`]:a.buttonVariant==="filled"}),F=()=>(0,p.o8)(P)?null:(0,p.mf)(P)?P({checked:"checked"in g?!!g.checked:V}):n.createElement("span",{className:`${D}-label`},P),w=(0,n.useRef)(null),O=H=>{if((0,p.mf)(P)){var C;H.preventDefault(),(C=w.current)==null||C.click()}};return n.createElement("label",{className:$,onClick:O},n.createElement(i.Z,re(Z(Z({},z),g),{ref:(0,o.sQ)(c,w),value:N,type:"radio",prefixCls:D,style:re(Z({},Y),{display:(0,p.mf)(P)?"none":void 0}),disabled:g.disabled,_getCheckedValue:T})),F())});d.displayName="Radio";const I=d},89312:function(v,t,e){"use strict";e.d(t,{Z:function(){return o}});var n=e(27833),u=e.n(n),r=e(55826),p=e(74052);const i=(0,r.forwardRef)((l,f)=>{const h=(0,n.c)(3);let d;return h[0]!==l||h[1]!==f?(d=r.createElement(p.Z,re(Z({_IS_BUTTON_:!0},l),{ref:f})),h[0]=l,h[1]=f,h[2]=d):d=h[2],d});i.displayName="RadioButton";const o=i},59803:function(v,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(55826),u=e(7829),r=e(7657),p=e(62222),i=e(80703),o=e(57577),l=e(83595),f=e(74052),h=e(89312);const d={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},I=(0,n.forwardRef)((c,x)=>{const{prefixCls:s,componentConfig:a}=(0,n.useContext)(o.E),E=(0,r.S)(c,d,a==null?void 0:a.RadioGroup),N=(0,n.useId)(),{className:P,style:Y,name:z=N,value:b,defaultValue:g,children:R,disabled:G,size:V,buttonVariant:T,renderOption:D,onChange:$,appearance:F,options:w}=E,[O,U]=(0,p.R)(g,{value:b}),H=(0,n.useCallback)(A=>{const K=A.target.value;"value"in E||U(K),K!==O&&($==null||$(A))},[O,$]);let C=R;const M=F==="button"?h.Z:f.Z;if((0,i.kJ)(w)&&w.length>0){const A=(0,i.mf)(D);C=w.map(K=>{if((0,i.HD)(K)||(0,i.hj)(K)){const Q=O===K,X=A?()=>D({label:K,value:K,checked:Q}):K;return n.createElement(M,{key:K.toString(),disabled:G,value:K,checked:Q},X)}const ee=O===K.value,W=A?()=>D(re(Z({},K),{checked:ee})):K.label;return n.createElement(M,{key:`radio-group-options-${K.value}`,className:K.className,style:K.style,disabled:K.disabled||G,value:K.value,checked:ee,id:K.id,title:K.title,onChange:K.onChange},W)})}const L=(0,n.useMemo)(()=>({name:z,value:O,disabled:G,size:V,buttonVariant:T,onChange:H}),[z,b,G,V,T,H]);return n.createElement("div",{ref:x,className:(0,u.default)(`${s}-radio-group`,P),style:Y},n.createElement(l.Z.Provider,{value:L},C))});I.displayName="RadioGroup";const m=I},83595:function(v,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(55826);const r=(0,n.createContext)({})},37663:function(v,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return f},RadioButton:function(){return d},RadioGroup:function(){return h},default:function(){return I}});var n=e(74052),u=e(89312),r=e(59803),p=e(63149),i=e.n(p),o={};for(var l in p)["default","Radio","RadioButton","RadioGroup"].indexOf(l)<0&&(o[l]=function(m){return p[m]}.bind(0,l));e.d(t,o);const f=n.Z;f.Group=r.Z,f.Button=u.Z;const h=f.Group,d=f.Button,I=f},63149:function(){},46417:function(v,t,e){"use strict";e.d(t,{T:function(){return m}});var n=e(55826),u=e(7829),r=e(80703),p=e(7657),i=e(23098);function o(x){let s=[];return n.Children.toArray(x).forEach(a=>{a!=null&&(Array.isArray(a)?s=s.concat(o(a)):(0,n.isValidElement)(a)&&(0,i.isFragment)(a)&&a.props?s=s.concat(o(a.props.children)):s.push(a))}),s}var l=e(57577);const f={sm:8,md:16,lg:24},h={direction:"horizontal",align:"center",wrap:!1},d=(0,n.forwardRef)((x,s)=>{const{prefixCls:a,size:E="md",componentConfig:N}=(0,n.useContext)(l.E),U=(0,p.S)(x,h,N==null?void 0:N.Space),{className:Y,children:z,size:b=E,direction:g="horizontal",align:R,split:G,wrap:V=!1}=U,T=ue(U,["className","children","size","direction","align","split","wrap"]),D=o(z),$=g==="horizontal"&&R===void 0?"center":R,F=(0,u.default)(`${a}-space`,`${a}-space-direction-${g}`,{[`${a}-space-align-${$}`]:$,[`${a}-space-wrap`]:V},Y),w=(0,n.useCallback)(H=>{const C=(0,r.kJ)(b)?b:[b,b],[M,L]=C.map(A=>(0,r.HD)(A)?f[A]:A||0);return V?{marginRight:M,marginBottom:L}:g==="vertical"?{marginBottom:L}:{marginRight:H?void 0:M}},[b]),O=D.map((H,C)=>{const M=C===D.length-1;return n.createElement(n.Fragment,{key:`space-item-${C}`},n.createElement("div",{className:"space-item",style:w(M)},H),!M&&G&&n.createElement("span",{className:"sqi-space-item-split"},G))});return n.createElement("div",re(Z({className:F},T),{ref:s}),O)});d.displayName="Space";const m=d,c=null},4536:function(v,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(27833),u=e.n(n),r=e(55826);const p=(0,r.forwardRef)(()=>{const o=(0,n.c)(1);let l;return o[0]===Symbol.for("react.memo_cache_sentinel")?(l=r.createElement(r.Fragment,null),o[0]=l):l=o[0],l});p.displayName="Trigger";const i=p},36112:function(v,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return l}});var n=e(4536),u=e(98479),r=e.n(u),p={};for(var i in u)["default","Trigger"].indexOf(i)<0&&(p[i]=function(f){return u[f]}.bind(0,i));e.d(t,p);const o=n.Z,l=o},98479:function(){},84176:function(v,t,e){var n=e(75863);function u(r,p){if(r==null)return{};var i=n(r,p),o,l;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(l=0;l<f.length;l++)o=f[l],!(p.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(i[o]=r[o])}return i}v.exports=u,v.exports.__esModule=!0,v.exports.default=v.exports},75863:function(v){function t(e,n){if(e==null)return{};var u={},r=Object.keys(e),p,i;for(i=0;i<r.length;i++)p=r[i],!(n.indexOf(p)>=0)&&(u[p]=e[p]);return u}v.exports=t,v.exports.__esModule=!0,v.exports.default=v.exports},7829:function(v,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return u}});function n(r){var p,i,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(p=0;p<l;p++)r[p]&&(i=n(r[p]))&&(o&&(o+=" "),o+=i)}else for(i in r)r[i]&&(o&&(o+=" "),o+=i);return o}function u(){for(var r,p,i=0,o="",l=arguments.length;i<l;i++)(r=arguments[i])&&(p=n(r))&&(o&&(o+=" "),o+=p);return o}t.default=u},64508:function(v,t,e){"use strict";e.d(t,{Y:function(){return p}});var n=e(55826),u=e(75601);const r=(i,o,l,f,h)=>{clearTimeout(f.current);const d=(0,u.y0)(i);o(d),l.current=d,h&&h({current:d})},p=({enter:i=!0,exit:o=!0,preEnter:l,preExit:f,timeout:h,initialEntered:d,mountOnEnter:I,unmountOnExit:m,onStateChange:c}={})=>{const[x,s]=(0,n.useState)(()=>(0,u.y0)(d?u.cn:(0,u.Ef)(I))),a=(0,n.useRef)(x),E=(0,n.useRef)(),[N,P]=(0,u.fj)(h),Y=(0,n.useCallback)(()=>{const b=(0,u.XZ)(a.current._s,m);b&&r(b,s,a,E,c)},[c,m]),z=(0,n.useCallback)(b=>{const g=G=>{switch(r(G,s,a,E,c),G){case u.d0:N>=0&&(E.current=setTimeout(Y,N));break;case u.Ix:P>=0&&(E.current=setTimeout(Y,P));break;case u.iL:case u.iU:E.current=(0,u.Y3)(g,G);break}},R=a.current.isEnter;typeof b!="boolean"&&(b=!R),b?!R&&g(i?l?u.iL:u.d0:u.cn):R&&g(o?f?u.iU:u.Ix:(0,u.Ef)(m))},[Y,c,i,o,l,f,N,P,m]);return[x,z,Y]}},75601:function(v,t,e){"use strict";e.d(t,{Ef:function(){return d},Ix:function(){return i},XZ:function(){return I},Y3:function(){return c},cn:function(){return r},d0:function(){return u},fj:function(){return m},iL:function(){return n},iU:function(){return p},y0:function(){return h}});const n=0,u=1,r=2,p=3,i=4,o=5,l=6,f=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=x=>({_s:x,status:f[x],isEnter:x<p,isMounted:x!==l,isResolved:x===r||x>i}),d=x=>x?l:o,I=(x,s)=>{switch(x){case u:case n:return r;case i:case p:return d(s)}},m=x=>typeof x=="object"?[x.enter,x.exit]:[x,x],c=(x,s)=>setTimeout(()=>{isNaN(document.body.offsetTop)||x(s+1)},0)}}]);
}());