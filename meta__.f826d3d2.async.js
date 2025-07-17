!(function(){var Ue=Object.defineProperty,Ze=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var $e=(x,t,e)=>t in x?Ue(x,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[t]=e,G=(x,t)=>{for(var e in t||(t={}))we.call(t,e)&&$e(x,e,t[e]);if(Te)for(var e of Te(t))We.call(t,e)&&$e(x,e,t[e]);return x},Ie=(x,t)=>Ze(x,ze(t));var ye=(x,t)=>{var e={};for(var n in x)we.call(x,n)&&t.indexOf(n)<0&&(e[n]=x[n]);if(x!=null&&Te)for(var n of Te(x))t.indexOf(n)<0&&We.call(x,n)&&(e[n]=x[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{49163:function(x,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return Y}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return I.D},useIsomorphicLayoutEffect:function(){return s.L},useMergeProps:function(){return a.S},useMergeState:function(){return b.R},usePrevious:function(){return U.D},useResizeObserver:function(){return S.y}});var l={};e.r(l),e.d(l,{canUseDom:function(){return q.J},debounce:function(){return V.D},isArray:function(){return T.kJ},isEmptyObject:function(){return T.Qr},isFunction:function(){return T.mf},isNumber:function(){return T.hj},isObject:function(){return T.Kn},isString:function(){return T.HD},isUndefined:function(){return T.o8},omit:function(){return y.C},pick:function(){return A},throttle:function(){return J.P}});var r={};e.r(r),e.d(r,{default:function(){return z.Y},useTransition:function(){return z.Y},useTransitionMap:function(){return H},useTransitionState:function(){return z.Y}});var p=e(90819),i=e.n(p),o=e(89933),f=e.n(o),h=e(55826),g=e.t(h,2),v=e(45990),m=e(34384),c=e(80700),d=e.t(c,2),I=e(37797),s=e(60164),a=e(7657),b=e(62222),U=e(45844),S=e(8240),q=e(34028),V=e(78831),T=e(80703),y=e(12598);function A(O,j){const F={};return j.forEach(R=>{R in O&&(F[R]=O[R])}),F}var J=e(6890),k=e(59118),N=e(38358),$=e(7829),z=e(64508),K=e(75601);const X=(O,j,F,R,M,B)=>{clearTimeout(M);const E=(0,K.y0)(j),W=new Map(R.current);W.set(O,E),F(W),R.current=W,B&&B({key:O,current:E})},H=({allowMultiple:O,enter:j=!0,exit:F=!0,preEnter:R,preExit:M,timeout:B,initialEntered:E,mountOnEnter:W,unmountOnExit:ne,onStateChange:w}={})=>{const[_,ee]=(0,h.useState)(new Map),te=(0,h.useRef)(_),ue=(0,h.useRef)(new Map),[ae,ie]=(0,K.fj)(B),ge=(0,h.useCallback)((oe,re)=>{const{initialEntered:ce=E}=re||{},de=ce?K.cn:(0,K.Ef)(W);X(oe,de,ee,te),ue.current.set(oe,{})},[E,W]),he=(0,h.useCallback)(oe=>{const re=new Map(te.current);return re.delete(oe)?(ee(re),te.current=re,ue.current.delete(oe),!0):!1},[]),le=(0,h.useCallback)(oe=>{const re=te.current.get(oe);if(!re)return;const{timeoutId:ce}=ue.current.get(oe),de=(0,K.XZ)(re._s,ne);de&&X(oe,de,ee,te,ce,w)},[w,ne]),me=(0,h.useCallback)((oe,re)=>{const ce=te.current.get(oe);if(!ce)return;const de=ue.current.get(oe),fe=pe=>{switch(X(oe,pe,ee,te,de.timeoutId,w),pe){case K.d0:ae>=0&&(de.timeoutId=setTimeout(()=>le(oe),ae));break;case K.Ix:ie>=0&&(de.timeoutId=setTimeout(()=>le(oe),ie));break;case K.iL:case K.iU:de.timeoutId=(0,K.Y3)(fe,pe);break}},ve=ce.isEnter;typeof re!="boolean"&&(re=!ve),re?ve||(fe(j?R?K.iL:K.d0:K.cn),!O&&te.current.forEach((pe,Ce)=>Ce!==oe&&me(Ce,!1))):ve&&fe(F?M?K.iU:K.Ix:(0,K.Ef)(ne))},[w,le,O,j,F,R,M,ae,ie,ne]),xe=(0,h.useCallback)(oe=>{if(!(!O&&oe!==!1))for(const re of te.current.keys())me(re,oe)},[O,me]);return{stateMap:_,toggle:me,toggleAll:xe,endTransition:le,setItem:ge,deleteItem:he}};var Z=e(91223),Q=e(84538),C=e(89664),D=e(58281),u=e(9788),P=e(13640),L=e.t(P,2),Y={"sqi-web-src-common-demo-portal":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,1422))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71441).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(5658).Z},"react-dom":{type:"NPM",value:"19.1.0"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":m,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":m,"react-dom":d,"@sqi-ui/hooks":n,"@sqi-ui/utils":l},renderOpts:{compile:function(){var O=f()(i()().mark(function F(){var R,M=arguments;return i()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(706).then(e.bind(e,29706));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,M));case 3:case"end":return E.stop()}},F)}));function j(){return O.apply(this,arguments)}return j}()}},"sqi-web-src-common-demo-css-motion-base":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,95757))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86514).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(1056).Z},"../CSSMotion.tsx":{type:"FILE",value:e(99721).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(95084).Z}},entry:"index.tsx"},context:{"./motion.css":k,"../CSSMotion.tsx":N,"../config-provider/context.ts":Z,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":N,clsx:$,"react-transition-state":r,"@sqi-ui/utils":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":Z},renderOpts:{compile:function(){var O=f()(i()().mark(function F(){var R,M=arguments;return i()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(706).then(e.bind(e,29706));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,M));case 3:case"end":return E.stop()}},F)}));function j(){return O.apply(this,arguments)}return j}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,22898))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9241).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(1056).Z},"../CSSMotion.tsx":{type:"FILE",value:e(99721).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(95084).Z}},entry:"index.tsx"},context:{"./motion.css":k,"../CSSMotion.tsx":N,"../config-provider/context.ts":Z,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":N,clsx:$,"react-transition-state":r,"@sqi-ui/utils":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":Z},renderOpts:{compile:function(){var O=f()(i()().mark(function F(){var R,M=arguments;return i()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(706).then(e.bind(e,29706));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,M));case 3:case"end":return E.stop()}},F)}));function j(){return O.apply(this,arguments)}return j}()}},"sqi-web-src-common-demo-css-motion-portal":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,11624))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56602).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(5658).Z},"../CSSMotion.tsx":{type:"FILE",value:e(99721).Z},"./motion.css":{type:"FILE",value:e(1056).Z},clsx:{type:"NPM",value:"2.1.1"},"react-dom":{type:"NPM",value:"19.1.0"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(95084).Z}},entry:"index.tsx"},context:{"../Portal.tsx":m,"../CSSMotion.tsx":N,"./motion.css":k,"../config-provider/context.ts":Z,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":N,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,clsx:$,"react-dom":d,"@sqi-ui/hooks":n,"react-transition-state":r,"@sqi-ui/utils":l,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":Z},renderOpts:{compile:function(){var O=f()(i()().mark(function F(){var R,M=arguments;return i()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(706).then(e.bind(e,29706));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,M));case 3:case"end":return E.stop()}},F)}));function j(){return O.apply(this,arguments)}return j}()}},"sqi-web-src-common-demo-resize-observer":{component:h.memo(h.lazy(function(){return e.e(433).then(e.bind(e,1220))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94888).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(26018).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(56848).Z},"../_util/dom.ts":{type:"FILE",value:e(32480).Z},"../_util/toArray.ts":{type:"FILE",value:e(54776).Z},"react-is":{type:"NPM",value:"19.1.0"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":Q,"../_util/ref.ts":C,"../_util/dom.ts":D,"../_util/toArray.ts":u,react:g,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":Q,"@sqi-ui/utils":l,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":C,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":D,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":u,"react-is":L},renderOpts:{compile:function(){var O=f()(i()().mark(function F(){var R,M=arguments;return i()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(706).then(e.bind(e,29706));case 2:return E.abrupt("return",(R=E.sent).default.apply(R,M));case 3:case"end":return E.stop()}},F)}));function j(){return O.apply(this,arguments)}return j}()}}}},24094:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30445))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57473).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89196))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33087).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,855))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(28398).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}}}},81917:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h=e(5629),g={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,67045))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33190).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75358))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21102).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,17668))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(83806).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"@sqi-ui/icons":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,84777))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74168).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,96980))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18569).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}}}},29003:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h=e(36514),g={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,81585))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75890).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,59821))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(14362).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,68574))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44732).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,22425))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32857).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,25722))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37839).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(15538).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,27298))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(22935).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(15538).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}}}},81778:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,76872))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51892).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,50015))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76313).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}}}},46159:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37028))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7154).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42135))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59999).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73118))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69344).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}}}},45888:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h=e(52419),g={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33757))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(84698).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8465))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96158).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,6914))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52869).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,76830))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43256).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92481))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38986).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,34737))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(26376).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,45472))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78484).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,34503))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73117).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(50076).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}}}},31129:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(5629),h=e(45990),g={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,39213))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95130).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f,"@sqi-ui/web":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,50096))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94191).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f,"@sqi-ui/web":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,4791))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56416).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}}}},59154:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h=e(5629),g={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95033))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(61724).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90279))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12347).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,43))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56346).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,86198))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(87891).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,52481))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85007).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,57495))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69812).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,51333))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12316).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41573))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9168).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"@sqi-ui/icons":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26523))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93157).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,71658))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32274).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}}}},99394:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return g}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h=e(37227),g={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8054))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7195).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,7314))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86093).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,2460))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41280).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,36534))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12761).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92916))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(79489).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,43107))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(46851).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(48939).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,74691))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39654).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(48939).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":h},renderOpts:{compile:function(){var v=i()(r()().mark(function c(){var d,I=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(706).then(e.bind(e,29706));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,I));case 3:case"end":return a.stop()}},c)}));function m(){return v.apply(this,arguments)}return m}()}}}},71706:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89775))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64749).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,38939))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9392).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89210))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44879).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,94185))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65723).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,15940))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75961).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var g=i()(r()().mark(function m(){var c,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(706).then(e.bind(e,29706));case 2:return s.abrupt("return",(c=s.sent).default.apply(c,d));case 3:case"end":return s.stop()}},m)}));function v(){return g.apply(this,arguments)}return v}()}}}},90910:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return v}});var l=e(90819),r=e.n(l),p=e(89933),i=e.n(p),o=e(55826),f=e(45990),h=e(73187),g=e(20038),v={"sqi-web-src-trigger-demo-core":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,2781))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-core",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31399).Z},react:{type:"NPM",value:"19.1.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(73565).Z},"./_wrapper.tsx":{type:"FILE",value:e(38813).Z}},entry:"index.tsx"},context:{"./demo.module.css":h,"./_wrapper.tsx":g,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":g},renderOpts:{compile:function(){var m=i()(r()().mark(function d(){var I,s=arguments;return r()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(706).then(e.bind(e,29706));case 2:return b.abrupt("return",(I=b.sent).default.apply(I,s));case 3:case"end":return b.stop()}},d)}));function c(){return m.apply(this,arguments)}return c}()}}}},38358:function(x,t,e){"use strict";e.r(t);var n=e(73193),l=e.n(n),r=e(10154),p=e.n(r),i=e(45332),o=e.n(i),f=e(84176),h=e.n(f),g=e(55826),v=e(7829),m=e(64508),c=e(80703),d=e(91223),I=["children","name","prefixCls"],s=(0,g.forwardRef)(function(a,b){var U=(0,g.useContext)(d.ConfigContext),S=a.children,q=a.name,V=a.prefixCls,T=h()(a,I),y=(0,m.Y)(T),A=o()(y,2),J=A[0],k=A[1],N=(0,g.isValidElement)(S);(0,g.useImperativeHandle)(b,function(){return{toggle:k}});var $="".concat(V||U.prefixCls).concat(q?"-".concat(q):""),z=(0,v.default)(["".concat($,"-motion")],p()({},"".concat($,"-motion-").concat(J.status),J.status));return(0,c.mf)(S)?J.isMounted?S(l()(l()({},J),{},{className:z,toggle:k})):null:N?J.isMounted?(0,g.cloneElement)(S,{className:(0,v.default)(S.props.className,z)}):null:S});s.displayName="CSSMotion",t.default=s},34384:function(x,t,e){"use strict";e.r(t);var n=e(45332),l=e.n(n),r=e(55826),p=e(80700),i=e(60164),o=e(34028),f=e(80703),h=(0,o.J)();function g(m){return h?(0,f.HD)(m)?document.querySelector(m):(0,f.mf)(m)?m():m instanceof HTMLElement?m:document.body:null}var v=(0,r.forwardRef)(function(m,c){var d=m.getContainer,I=m.prefixCls,s=m.children,a=m.open,b=a===void 0?!0:a,U=m.rootStyle,S=m.autoLockScroll,q=S===void 0?!0:S,V=(0,r.useState)(!1),T=l()(V,2),y=T[0],A=T[1],J=(0,r.useState)(null),k=l()(J,2),N=k[0],$=k[1],z=(0,r.useState)(function(){return g(d)}),K=l()(z,2),X=K[0],H=K[1],Z=X||document.body,Q=b||y;(0,r.useEffect)(function(){var D=g(d);H(D||null)},[d]);var C=function(){if(!h)return null;var u=document.createElement("div");return I&&(u.className="".concat(I,"-portal-wrapper")),U&&Object.assign(u.style,U),u.setAttribute("data-portal","true"),u};return(0,i.L)(function(){h&&(b?N||$(function(){return C()}):$(null))},[b]),(0,r.useImperativeHandle)(c,function(){return N},[N]),(0,i.L)(function(){q===!1?document.body.style.overflow="":q&&N&&(document.body.style.overflow="hidden")},[q,N]),(0,i.L)(function(){if(!(!h||!N)){var D=function(){N.parentNode||(Z.appendChild(N),A(!0))},u=function(){N.parentNode&&(N.parentNode.removeChild(N),q&&(document.body.style.overflow=""),A(!1))};return b?D():u(),function(){N.parentNode&&u()}}},[b,N]),Q&&s&&N?(0,p.createPortal)(s,N):null});v.displayName="Portal",t.default=v},84538:function(x,t,e){"use strict";e.r(t);var n=e(55826),l=e(6890),r=e(8240),p=e(9788),i=e(58281),o=e(89664),f=(0,n.forwardRef)(function(h,g){var v=h.children,m=h.disabled,c=h.throttleMs,d=c===void 0?100:c,I=h.onResize,s=(0,n.isValidElement)(v),a=s?(0,p.toArray)(v):[],b=s?(0,i.getReactNodeRef)(v):null,U=(0,n.useRef)(null),S=(0,o.useComposeRef)(b,U),q=function(){return(0,i.getDOM)(U.current)};(0,n.useImperativeHandle)(g,function(){return q()});var V=I?(0,l.P)(I,d):void 0;return(0,r.y)(U,V,!m),s?(0,n.cloneElement)(v,{ref:S}):v});f.displayName="ResizeObserverComponent",t.default=f},58281:function(x,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return i},getReactNodeRef:function(){return o},isDOM:function(){return p}});var n=e(89957),l=e.n(n),r=e(55826);function p(f){return f instanceof HTMLElement||f instanceof SVGElement}function i(f){return f&&l()(f)==="object"&&p(f.nativeElement)?f.nativeElement:p(f)?f:null}function o(f){var h=f&&(0,r.isValidElement)(f);if(!h)return null;if(parseInt(r.version)>=19){var g;return((g=f.props)===null||g===void 0?void 0:g.ref)||null}return f.ref}},89664:function(x,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return i},fillRef:function(){return o},supportNodeRef:function(){return v},supportRef:function(){return h},useComposeRef:function(){return f}});var n=e(37797),l=e(80703),r=e(55826),p=e(23098),i=function(){for(var c=arguments.length,d=new Array(c),I=0;I<c;I++)d[I]=arguments[I];var s=d.filter(Boolean);return s.length<=1?s[0]:function(a){d.forEach(function(b){o(b,a)})}},o=function(c,d){(0,l.mf)(c)?c(d):(0,l.Kn)(c)&&"current"in c&&(c.current=d)},f=function(){for(var c=arguments.length,d=new Array(c),I=0;I<c;I++)d[I]=arguments[I];return(0,n.D)(function(){return i.apply(void 0,d)},d,function(s,a){return s.length!==a.length||s.every(function(b,U){return b!==a[U]})})},h=function(c){var d,I;if(!c)return!1;var s=parseInt(r.version);if(g(c)&&s>=19)return!0;var a=(0,p.isMemo)(c)?c.type.type:c.type;return!(typeof a=="function"&&!((d=a.prototype)!==null&&d!==void 0&&d.render)&&a.$$typeof!==p.ForwardRef||typeof c=="function"&&!((I=c.prototype)!==null&&I!==void 0&&I.render)&&c.$$typeof!==p.ForwardRef)};function g(m){return(0,r.isValidElement)(m)&&!(0,p.isFragment)(m)}var v=function(c){return g(c)&&h(c)}},9788:function(x,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return r}});var n=e(55826),l=e(23098);function r(p){var i=[];return n.Children.toArray(p).forEach(function(o){o!=null&&(Array.isArray(o)?i=i.concat(r(o)):(0,n.isValidElement)(o)&&(0,l.isFragment)(o)&&o.props?i=i.concat(r(o.props.children)):i.push(o))}),i}},36514:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(55826),l=e(70813);function r(p){var i=p.item,o=p.checked,f={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},h={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,l.jsxs)("div",{style:f,children:[(0,l.jsx)("div",{style:h}),(0,l.jsx)("strong",{children:i}),(0,l.jsx)("div",{children:"this is a checkbox"})]})}},91223:function(x,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return r},defaultConfigProps:function(){return l}});var n=e(55826),l={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(l)},52419:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(55826),l=e(70813);function r(p){var i=p.colorPalette,o=i===void 0?6:i,f=p.children,h=p.height;return(0,l.jsx)("div",{style:{height:h||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:f})}},37227:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(55826),l=e(70813);function r(p){var i=p.item,o=p.checked,f={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},h={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,l.jsxs)("div",{style:f,children:[(0,l.jsx)("div",{style:h}),(0,l.jsx)("strong",{children:i}),(0,l.jsx)("div",{children:"this is a radio"})]})}},20038:function(x,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return p}});var n=e(55826),l=e(73187),r=e(70813),p=(0,n.forwardRef)(function(i,o){var f=i.size,h=i.backgroundColor,g=i.children;return(0,r.jsx)("div",{ref:o,className:l.default.box,style:{width:f+"px",height:f+"px",backgroundColor:h},children:g})});p.displayName="Component"},59118:function(x,t,e){"use strict";e.r(t)},73187:function(x,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai"}},98093:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 css \u9690\u85CF\u7EC4\u4EF6",paraId:4}]},30847:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},47974:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},30286:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},48859:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},15088:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactN`ode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},41904:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},6370:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},49969:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u8F93\u5165\u6846\u7EC4\u4EF6",paraId:10,tocIndex:11},{value:"InputProps",paraId:10,tocIndex:11},{value:"\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u63CF\u8FF0",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"type",paraId:11,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:11,tocIndex:12},{value:"MDN",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"text",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:11,tocIndex:12},{value:"ConfigSize",paraId:11,tocIndex:12},{value:"md",paraId:11,tocIndex:12},{value:"status",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:11,tocIndex:12},{value:"success",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"warning",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"error",paraId:11,tocIndex:12},{value:"tips",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"allowClear",paraId:11,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"align",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"center",paraId:11,tocIndex:12},{value:" |",paraId:11,tocIndex:12},{value:"right",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"variant",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"borderless",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"underline",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"addonBefore",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"addonAfter",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"prefix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"suffix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"visibilityToggle",paraId:11,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"VisibilityToggle",paraId:12,tocIndex:12},{value:"maxLength",paraId:11,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:11,tocIndex:12},{value:"number",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"MaxLength",paraId:13,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:11,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:14,tocIndex:13},{value:"\u63CF\u8FF0",paraId:14,tocIndex:13},{value:"\u7C7B\u578B",paraId:14,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:13},{value:"visible",paraId:14,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:14,tocIndex:13},{value:"boolean",paraId:14,tocIndex:13},{value:"renderIcon",paraId:14,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:14,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:14,tocIndex:13},{value:"onVisibleChange",paraId:14,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:14,tocIndex:13},{value:"(visible: boolean) => void",paraId:14,tocIndex:13},{value:"\u5C5E\u6027",paraId:15,tocIndex:14},{value:"\u63CF\u8FF0",paraId:15,tocIndex:14},{value:"\u7C7B\u578B",paraId:15,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:14},{value:"length",paraId:15,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:15,tocIndex:14},{value:"number",paraId:15,tocIndex:14},{value:"showLimit",paraId:15,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14},{value:"true",paraId:15,tocIndex:14},{value:"errorOnly",paraId:15,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14}]},13141:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},20150:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684 ",paraId:1,tocIndex:6},{value:"SpaceProps",paraId:1,tocIndex:6},{value:" \u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u4E3A Markdown \u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:2,tocIndex:6},{value:"\u63CF\u8FF0",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"size",paraId:2,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:2,tocIndex:6},{value:"SizeType",paraId:3,tocIndex:6},{value:" | ",paraId:2,tocIndex:6},{value:"[SizeType, SizeType]",paraId:2,tocIndex:6},{value:"direction",paraId:2,tocIndex:6},{value:"\u65B9\u5411",paraId:2,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:6},{value:"'horizontal'",paraId:2,tocIndex:6},{value:"align",paraId:2,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:2,tocIndex:6},{value:"wrap",paraId:2,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"split",paraId:2,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:2,tocIndex:6},{value:"ReactNode",paraId:2,tocIndex:6},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u63CF\u8FF0",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"SizeType",paraId:4,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:4,tocIndex:7},{value:"ConfigSize",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"number",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"undefined",paraId:4,tocIndex:7}]},7629:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0},{value:"\u5F53 ",paraId:1},{value:"direction",paraId:1},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:1},{value:"top",paraId:1},{value:" \u548C ",paraId:1},{value:"bottom",paraId:1},{value:" \u65F6\uFF0C",paraId:1},{value:"offset",paraId:1},{value:" \u4EC5\u652F\u6301 y \u8F74\u7684\u504F\u79FB",paraId:1},{value:"\u5F53 ",paraId:1},{value:"direction",paraId:1},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:1},{value:"left",paraId:1},{value:" \u548C ",paraId:1},{value:"right",paraId:1},{value:" \u65F6\uFF0C",paraId:1},{value:"offset",paraId:1},{value:" \u4EC5\u652F\u6301 x \u8F74\u7684\u504F\u79FB\u3002",paraId:1},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popup \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08popup \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:2}]},99721:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},5658:function(x,t){"use strict";t.Z=`import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react';
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
  autoLockScroll?: boolean;
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
  const { getContainer, prefixCls, children, open = true, rootStyle, autoLockScroll = true } = props;

  const [isMounted, setIsMounted] = useState(false);
  const [containerWrapper, setContainerWrapper] = useState<HTMLDivElement | null>(null);
  const [customizeParent, setCustomizeParent] = useState<HTMLElement | null>(() => getAttachNode(getContainer));
  const mergedParentNode = customizeParent || document.body;

  const shouldRender = open || isMounted;

  useEffect(() => {
    const newParentNode = getAttachNode(getContainer);
    setCustomizeParent(newParentNode || null);
  }, [getContainer]);

  const createContainerNode = () => {
    if (!isBrowser) return null;

    const node = document.createElement('div');
    if (prefixCls) {
      node.className = \`\${prefixCls}-portal-wrapper\`;
    }

    if (rootStyle) {
      Object.assign(node.style, rootStyle);
    }

    node.setAttribute('data-portal', 'true');
    return node;
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return;
    if (open) {
      if (!containerWrapper) setContainerWrapper(() => createContainerNode());
    } else {
      setContainerWrapper(null);
    }
  }, [open]);

  useImperativeHandle(ref, () => containerWrapper as HTMLDivElement, [containerWrapper]);

  useIsomorphicLayoutEffect(() => {
    // \u517C\u5BB9\u663E\u793A\u9690\u85CF\u65F6\uFF08\u975E\u9500\u6BC1\uFF09\u7684\u6EDA\u52A8\u6761\u72B6\u6001
    // Portal \u6682\u65F6\u6CA1\u505A cache \u8282\u70B9\uFF0C\u56E0\u6B64\u4F7F\u7528\u6B64\u65B9\u5F0F\u6765\u517C\u5BB9\u548C CSSMotion \u7684\u9690\u85CF\u4EA4\u4E92
    if (autoLockScroll === false) {
      document.body.style.overflow = '';
    } else if (autoLockScroll && containerWrapper) {
      document.body.style.overflow = 'hidden';
    }
  }, [autoLockScroll, containerWrapper]);

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser || !containerWrapper) return;

    const attachToParent = () => {
      if (!containerWrapper.parentNode) {
        mergedParentNode.appendChild(containerWrapper);
        // if (autoLockScroll) document.body.style.overflow = 'hidden';
        setIsMounted(true);
      }
    };

    const detachFromParent = () => {
      if (containerWrapper.parentNode) {
        containerWrapper.parentNode.removeChild(containerWrapper);
        if (autoLockScroll) document.body.style.overflow = '';
        setIsMounted(false);
      }
    };

    if (open) attachToParent();
    else detachFromParent();

    return () => {
      if (containerWrapper.parentNode) {
        detachFromParent();
      }
    };
  }, [open, containerWrapper]);

  if (!(shouldRender && children)) return null;

  return containerWrapper ? createPortal(children, containerWrapper) : null;
});

Portal.displayName = 'Portal';

export default Portal;
`},26018:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef } from 'react';
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
`},86514:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},56602:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},9241:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},1056:function(x,t){"use strict";t.Z=`.sqi-demo-motion {
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
`},71441:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},94888:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},32480:function(x,t){"use strict";t.Z=`import { isValidElement, version } from 'react';

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
`},56848:function(x,t){"use strict";t.Z=`import { useCompareMemo } from '@sqi-ui/hooks';
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
`},54776:function(x,t){"use strict";t.Z=`import { Children, isValidElement, type ReactNode } from 'react';
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
`},28398:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},57473:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},33087:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},33190:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},21102:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},83806:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},18569:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},74168:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},15538:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},75890:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},14362:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},37839:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},44732:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},32857:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},22935:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},95084:function(x,t){"use strict";t.Z=`import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sqi',
  iconPrefix: 'sqi',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
`},51892:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},76313:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},7154:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},69344:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},59999:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},38986:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},84698:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},50076:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},52869:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},96158:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},43256:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},26376:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},78484:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},73117:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},95130:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},94191:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},56416:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},12316:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},9168:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},87891:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},61724:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},32274:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},93157:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},12347:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},85007:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},69812:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},56346:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},48939:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},86093:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},7195:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},46851:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},41280:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},39654:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},12761:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},79489:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},44879:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},64749:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},9392:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},75961:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},65723:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},38813:function(x,t){"use strict";t.Z=`import React, { forwardRef } from 'react';
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
`},31399:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},73565:function(x,t){"use strict";t.Z=`.container {
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
`},27833:function(x,t,e){"use no memo";"use strict";var n=Object.create,l=Object.defineProperty,r=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,i=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,f=(C,D)=>{for(var u in D)l(C,u,{get:D[u],enumerable:!0})},h=(C,D,u,P)=>{if(D&&typeof D=="object"||typeof D=="function")for(let L of p(D))!o.call(C,L)&&L!==u&&l(C,L,{get:()=>D[L],enumerable:!(P=r(D,L))||P.enumerable});return C},g=(C,D,u)=>(u=C!=null?n(i(C)):{},h(D||!C||!C.__esModule?l(u,"default",{value:C,enumerable:!0}):u,C)),v=C=>h(l({},"__esModule",{value:!0}),C),m={};f(m,{$dispatcherGuard:()=>J,$makeReadOnly:()=>N,$reset:()=>k,$structuralCheck:()=>Q,c:()=>q,clearRenderCounterRegistry:()=>z,renderCounterRegistry:()=>$,useRenderCounter:()=>H}),x.exports=v(m);var c=g(e(55826)),{useRef:d,useEffect:I,isValidElement:s}=c,a,b=(a=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)!=null?a:c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.memo_cache_sentinel"),S,q=typeof((S=c.__COMPILER_RUNTIME)==null?void 0:S.c)=="function"?c.__COMPILER_RUNTIME.c:function(D){return c.useMemo(()=>{const u=new Array(D);for(let P=0;P<D;P++)u[P]=U;return u[U]=!0,u},[])},V={};["readContext","useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","unstable_isNewReconciler","getCacheSignal","getCacheForType","useCacheRefresh"].forEach(C=>{V[C]=()=>{throw new Error(`[React] Unexpected React hook call (${C}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)}});var T=null;V.useMemoCache=C=>{if(T==null)throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");return T.useMemoCache(C)};function y(C){return b.ReactCurrentDispatcher.current=C,b.ReactCurrentDispatcher.current}var A=[];function J(C){const D=b.ReactCurrentDispatcher.current;if(C===0){if(A.push(D),A.length===1&&(T=D),D===V)throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");y(V)}else if(C===1){const u=A.pop();if(u==null)throw new Error("React Compiler internal error: unexpected null in guard stack");A.length===0&&(T=null),y(u)}else if(C===2)A.push(D),y(T);else if(C===3){const u=A.pop();if(u==null)throw new Error("React Compiler internal error: unexpected null in guard stack");y(u)}else throw new Error("React Compiler internal error: unreachable block"+C)}function k(C){for(let D=0;D<C.length;D++)C[D]=U}function N(){throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")}var $=new Map;function z(){for(const C of $.values())C.forEach(D=>{D.count=0})}function K(C,D){let u=$.get(C);u==null&&(u=new Set,$.set(C,u)),u.add(D)}function X(C,D){const u=$.get(C);u!=null&&u.delete(D)}function H(C){const D=d(null);D.current!=null&&(D.current.count+=1),I(()=>{if(D.current==null){const u={count:0};K(C,u),D.current=u}return()=>{D.current!==null&&X(C,D.current)}})}var Z=new Set;function Q(C,D,u,P,L,Y){function O(R,M,B,E){const W=`${P}:${Y} [${L}] ${u}${B} changed from ${R} to ${M} at depth ${E}`;Z.has(W)||(Z.add(W),console.error(W))}const j=2;function F(R,M,B,E){if(!(E>j)){if(R===M)return;if(typeof R!=typeof M)O(`type ${typeof R}`,`type ${typeof M}`,B,E);else if(typeof R=="object"){const W=Array.isArray(R),ne=Array.isArray(M);if(R===null&&M!==null)O("null",`type ${typeof M}`,B,E);else if(M===null)O(`type ${typeof R}`,"null",B,E);else if(R instanceof Map)if(!(M instanceof Map))O("Map instance","other value",B,E);else if(R.size!==M.size)O(`Map instance with size ${R.size}`,`Map instance with size ${M.size}`,B,E);else for(const[w,_]of R)M.has(w)?F(_,M.get(w),`${B}.get(${w})`,E+1):O(`Map instance with key ${w}`,`Map instance without key ${w}`,B,E);else if(M instanceof Map)O("other value","Map instance",B,E);else if(R instanceof Set)if(!(M instanceof Set))O("Set instance","other value",B,E);else if(R.size!==M.size)O(`Set instance with size ${R.size}`,`Set instance with size ${M.size}`,B,E);else for(const w of M)R.has(w)||O(`Set instance without element ${w}`,`Set instance with element ${w}`,B,E);else if(M instanceof Set)O("other value","Set instance",B,E);else if(W||ne)if(W!==ne)O(`type ${W?"array":"object"}`,`type ${ne?"array":"object"}`,B,E);else if(R.length!==M.length)O(`array with length ${R.length}`,`array with length ${M.length}`,B,E);else for(let w=0;w<R.length;w++)F(R[w],M[w],`${B}[${w}]`,E+1);else if(s(R)||s(M))s(R)!==s(M)?O(`type ${s(R)?"React element":"object"}`,`type ${s(M)?"React element":"object"}`,B,E):R.type!==M.type?O(`React element of type ${R.type}`,`React element of type ${M.type}`,B,E):F(R.props,M.props,`[props of ${B}]`,E+1);else{for(const w in M)w in R||O(`object without key ${w}`,`object with key ${w}`,B,E);for(const w in R)w in M?F(R[w],M[w],`${B}.${w}`,E+1):O(`object with key ${w}`,`object without key ${w}`,B,E)}}else{if(typeof R=="function")return;isNaN(R)||isNaN(M)?isNaN(R)!==isNaN(M)&&O(`${isNaN(R)?"NaN":"non-NaN value"}`,`${isNaN(M)?"NaN":"non-NaN value"}`,B,E):R!==M&&O(R,M,B,E)}}}F(C,D,"",0)}},23098:function(x,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler");Symbol.for("react.provider");var i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),c=Symbol.for("react.view_transition"),d=Symbol.for("react.client.reference");function I(s){if(typeof s=="object"&&s!==null){var a=s.$$typeof;switch(a){case e:switch(s=s.type,s){case l:case p:case r:case h:case g:case c:return s;default:switch(s=s&&s.$$typeof,s){case o:case f:case m:case v:return s;case i:return s;default:return a}}case n:return a}}}t.ContextConsumer=i,t.ContextProvider=o,t.Element=e,t.ForwardRef=f,t.Fragment=l,t.Lazy=m,t.Memo=v,t.Portal=n,t.Profiler=p,t.StrictMode=r,t.Suspense=h,t.SuspenseList=g,t.isContextConsumer=function(s){return I(s)===i},t.isContextProvider=function(s){return I(s)===o},t.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===e},t.isForwardRef=function(s){return I(s)===f},t.isFragment=function(s){return I(s)===l},t.isLazy=function(s){return I(s)===m},t.isMemo=function(s){return I(s)===v},t.isPortal=function(s){return I(s)===n},t.isProfiler=function(s){return I(s)===p},t.isStrictMode=function(s){return I(s)===r},t.isSuspense=function(s){return I(s)===h},t.isSuspenseList=function(s){return I(s)===g},t.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===l||s===p||s===r||s===h||s===g||typeof s=="object"&&s!==null&&(s.$$typeof===m||s.$$typeof===v||s.$$typeof===o||s.$$typeof===i||s.$$typeof===f||s.$$typeof===d||s.getModuleId!==void 0)},t.typeOf=I},13640:function(x,t,e){"use strict";x.exports=e(23098)},37797:function(x,t,e){"use strict";e.d(t,{D:function(){return l}});var n=e(55826);function l(r,p,i){const o=(0,n.useRef)({});return(!("value"in o.current)||i(o.current.condition,p))&&(o.current.value=r(),o.current.condition=p),o.current.value}},60164:function(x,t,e){"use strict";e.d(t,{L:function(){return p}});var n=e(55826),l=e(34028);const p=(0,l.J)()?n.useLayoutEffect:n.useEffect},7657:function(x,t,e){"use strict";e.d(t,{S:function(){return l}});var n=e(55826);function l(r){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return(0,n.useMemo)(()=>{const o=G(G({},p),i),f=G({},r);for(const h in o)f[h]===void 0&&(f[h]=o[h]);return f},[r,p,i])}},62222:function(x,t,e){"use strict";e.d(t,{R:function(){return p}});var n=e(55826),l=e(80703),r=e(45844);function p(i,o){const{defaultValue:f,value:h,onChange:g}=o||{},[v,m]=(0,n.useState)(()=>(0,l.o8)(h)?(0,l.o8)(f)?(0,l.mf)(i)?i():i:(0,l.mf)(f)?f():f:h),c=(0,r.D)(h),d=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(d.current){d.current=!1;return}(0,l.o8)(h)&&c!==h&&m(h)},[h]);const I=(0,l.o8)(h)?v:h,s=(0,n.useCallback)(a=>{const b=(0,l.mf)(a)?a(I):a;(0,l.o8)(h)&&m(b),!Object.is(b,I)&&(g==null||g(b))},[v,I]);return[I,s]}},45844:function(x,t,e){"use strict";e.d(t,{D:function(){return l}});var n=e(55826);function l(r){const p=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{p.current=r},[r]),p.current}},8240:function(x,t,e){"use strict";e.d(t,{y:function(){return i}});var n=e(55826),l=e(20759),r=e(34028),p=e(60164);function i(o,f){let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const g=(0,n.useRef)(null);g.current=f,(0,p.L)(()=>{const v=o.current;let m=null;if(!h||!(0,r.J)()||!v)return;const c=d=>{var I;(I=g.current)==null||I.call(g,d)};return m=new l.Z(c),m.observe(v),()=>{if(m&&v){var d;m.unobserve(v),(d=m.disconnect)==null||d.call(m),m=null}}},[o,h])}},31136:function(x,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(55826);const r=(0,n.createContext)({})},37907:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(7829),r=e(31136);const p=(0,n.forwardRef)((o,f)=>{const U=o,{svg:h,type:g,spin:v,rotate:m,className:c,style:d}=U,I=ye(U,["svg","type","spin","rotate","className","style"]),{prefixCls:s="sqi"}=(0,n.useContext)(r.Z),a=(0,l.default)(`${s}-icon`,{[`${s}-icon-spin`]:!!v&&!!h},c),b=d||{};return Number.isSafeInteger(m)&&(b.transform=`rotate(${m}deg)`),n.createElement("span",G({role:"img",ref:f,"aria-label":g,className:a,style:b},I),h)});p.displayName="Icon";const i=p},46874:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"add",ref:f},o)));p.displayName="AddIcon";const i=p},1824:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"browse",ref:f},o)));p.displayName="BrowseIcon";const i=p},85569:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"browse-off",ref:f},o)));p.displayName="BrowseOffIcon";const i=p},23436:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"check-circle-filled",ref:f},o)));p.displayName="CheckCircleFilledIcon";const i=p},46608:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"chevron-down",ref:f},o)));p.displayName="ChevronDownIcon";const i=p},58360:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"close-circle-filled",ref:f},o)));p.displayName="CloseCircleFilledIcon";const i=p},27377:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"close",ref:f},o)));p.displayName="CloseIcon";const i=p},50397:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"info-circle-filled",ref:f},o)));p.displayName="InfoCircleFilledIcon";const i=p},60333:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"loading",ref:f},o)));p.displayName="LoadingIcon";const i=p},36106:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"search",ref:f},o)));p.displayName="SearchIcon";const i=p},65466:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"upload",ref:f},o)));p.displayName="UploadIcon";const i=p},21925:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(55826),l=e(37907);function r(o){return(0,n.createElement)("svg",G({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,f)=>(0,n.createElement)(l.Z,G({svg:(0,n.createElement)(r),type:"warn-circle-filled",ref:f},o)));p.displayName="WarnCircleFilledIcon";const i=p},5629:function(x,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return r.Z},BrowseIcon:function(){return i.Z},BrowseOffIcon:function(){return p.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return f.Z},CloseCircleFilledIcon:function(){return h.Z},CloseIcon:function(){return g.Z},IconContext:function(){return l.Z},InfoCircleFilledIcon:function(){return v.Z},LoadingIcon:function(){return m.Z},SearchIcon:function(){return c.Z},UploadIcon:function(){return d.Z},WarnCircleFilledIcon:function(){return I.Z},default:function(){return s}});var n=e(37907),l=e(31136),r=e(46874),p=e(85569),i=e(1824),o=e(23436),f=e(46608),h=e(58360),g=e(27377),v=e(50397),m=e(60333),c=e(36106),d=e(65466),I=e(21925);const s=n.Z},34028:function(x,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(x,t,e){"use strict";e.d(t,{D:function(){return n}});function n(l,r){let p=null;const i=function(){for(var o=arguments.length,f=new Array(o),h=0;h<o;h++)f[h]=arguments[h];p&&clearTimeout(p),p=setTimeout(()=>{l.apply(this,f),p=null},r)};return i.cancel=()=>{p&&(clearTimeout(p),p=null)},i}},80703:function(x,t,e){"use strict";e.d(t,{HD:function(){return i},Kn:function(){return o},Qr:function(){return f},hj:function(){return h},kJ:function(){return p},mf:function(){return l},o8:function(){return r}});const n=Object.prototype.toString;function l(g){return n.call(g)==="[object Function]"}function r(g){return g===void 0}function p(g){return n.call(g)==="[object Array]"}function i(g){return n.call(g)==="[object String]"}const o=g=>n.call(g)==="[object Object]",f=g=>{if(!o(g))return!0;for(const v in g)if(Object.prototype.hasOwnProperty.call(g,v))return!1;return!0},h=g=>n.call(g)==="[object Number]"&&g===g},12598:function(x,t,e){"use strict";e.d(t,{C:function(){return n}});function n(l,r){const p=Object.assign({},l);return Array.isArray(r)&&r.forEach(i=>{delete p[i]}),p}},6890:function(x,t,e){"use strict";e.d(t,{P:function(){return l}});var n=e(78831);function l(r,p){let i=null;const o=(0,n.D)(r,p),f=function(){for(var h=arguments.length,g=new Array(h),v=0;v<h;v++)g[v]=arguments[v];i===null?i=Date.now():Date.now()-i>=p&&(i=Date.now(),o.cancel()),o(...g)};return f.cancel=o.cancel,f}},92266:function(x,t,e){"use strict";e.d(t,{C:function(){return p},Z:function(){return i}});var n=e(55826),l=e(7829),r=e(62222);const p=(0,n.forwardRef)((o,f)=>{const y=o,{prefixCls:h,className:g,style:v,checked:m,disabled:c,defaultChecked:d=!1,type:I="checkbox",title:s,onChange:a,_getCheckedValue:b}=y,U=ye(y,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[S,q]=(0,r.R)(d,{value:m});(0,n.useEffect)(()=>{b==null||b(S)},[S]);const V=(0,l.default)(h,g,{[`${h}-checked`]:S,[`${h}-disabled`]:c}),T=A=>{c||("checked"in o||q(A.target.checked),a==null||a({target:Ie(G({},o),{checked:A.target.checked}),event:A}))};return n.createElement("span",{className:V,title:s,style:v},n.createElement("input",Ie(G({},U),{className:`${h}-input`,ref:f,onChange:T,disabled:c,checked:S,type:I})),n.createElement("span",{className:`${h}-inner`}))});p.displayName="BaseCheckbox";const i=p},4814:function(x,t,e){"use strict";e.d(t,{sQ:function(){return i},t4:function(){return v},x1:function(){return f}});var n=e(37797),l=e(80703),r=e(55826),p=e(23098);const i=function(){for(var m=arguments.length,c=new Array(m),d=0;d<m;d++)c[d]=arguments[d];const I=c.filter(Boolean);return I.length<=1?I[0]:s=>{c.forEach(a=>{o(a,s)})}},o=(m,c)=>{(0,l.mf)(m)?m(c):(0,l.Kn)(m)&&"current"in m&&(m.current=c)},f=function(){for(var m=arguments.length,c=new Array(m),d=0;d<m;d++)c[d]=arguments[d];return(0,n.D)(()=>i(...c),c,(I,s)=>I.length!==s.length||I.every((a,b)=>a!==s[b]))},h=m=>{var c,d;if(!m)return!1;const I=parseInt(r.version);if(g(m)&&I>=19)return!0;const s=(0,p.isMemo)(m)?m.type.type:m.type;return!(typeof s=="function"&&!((c=s.prototype)!=null&&c.render)&&s.$$typeof!==p.ForwardRef||typeof m=="function"&&!((d=m.prototype)!=null&&d.render)&&m.$$typeof!==p.ForwardRef)};function g(m){return(0,r.isValidElement)(m)&&!(0,p.isFragment)(m)}const v=m=>g(m)&&h(m)},21299:function(x,t,e){"use strict";e.d(t,{q:function(){return r}});var n=e(55826),l=e(23098);function r(p){let i=[];return n.Children.toArray(p).forEach(o=>{o!=null&&(Array.isArray(o)?i=i.concat(r(o)):(0,n.isValidElement)(o)&&(0,l.isFragment)(o)&&o.props?i=i.concat(r(o.props.children)):i.push(o))}),i}},4274:function(x,t,e){"use strict";e.d(t,{b:function(){return S}});var n=e(27833),l=e(55826),r=e(7829),p=e(7657),i=e(23436),o=e(50397),f=e(58360),h=e(21925),g=e(27377),v=e(64508),m=e(80703),c=e(57577);const d=(0,l.forwardRef)((V,T)=>{const y=(0,l.useContext)(c.E),Z=V,{children:A,name:J,prefixCls:k}=Z,N=ye(Z,["children","name","prefixCls"]),[$,z]=(0,v.Y)(N),K=(0,l.isValidElement)(A);(0,l.useImperativeHandle)(T,()=>({toggle:z}));const X=`${k||y.prefixCls}${J?`-${J}`:""}`,H=(0,r.default)([`${X}-motion`],{[`${X}-motion-${$.status}`]:$.status});return(0,m.mf)(A)?$.isMounted?A(Ie(G({},$),{className:H,toggle:z})):null:K?$.isMounted?(0,l.cloneElement)(A,{className:(0,r.default)(A.props.className,H)}):null:A});d.displayName="CSSMotion";const I=d,s={type:"info",showIcon:!0},a={success:i.Z,info:o.Z,error:f.Z,warning:h.Z},b=(0,l.forwardRef)((V,T)=>{const y=(0,n.c)(38),{prefixCls:A,componentConfig:J}=(0,l.useContext)(c.E),{className:k,style:N,title:$,description:z,type:K,closable:X,showIcon:H,action:Z,icon:Q,onClose:C}=(0,p.S)(V,s,J==null?void 0:J.Alert),D=(0,l.useRef)(null);let u;y[0]!==Q||y[1]!==K?(u=()=>(0,l.isValidElement)(Q)?Q:K?(0,l.createElement)(a[K]):null,y[0]=Q,y[1]=K,y[2]=u):u=y[2];const P=u,L=`${A}-alert`,Y=`${A}-alert-${K}`;let O;y[3]!==k||y[4]!==L||y[5]!==Y?(O=(0,r.default)(L,Y,k),y[3]=k,y[4]=L,y[5]=Y,y[6]=O):O=y[6];const j=O;let F;y[7]!==C?(F=ue=>{var ae;(ae=D.current)==null||ae.toggle(),C==null||C(ue)},y[7]=C,y[8]=F):F=y[8];const R=F;let M;y[9]!==A||y[10]!==P||y[11]!==H?(M=H&&l.createElement("div",{className:`${A}-alert-icon`},P()),y[9]=A,y[10]=P,y[11]=H,y[12]=M):M=y[12];const B=`${A}-alert-content`;let E;y[13]!==A||y[14]!==$?(E=!!$&&l.createElement("div",{className:`${A}-alert-title`},$),y[13]=A,y[14]=$,y[15]=E):E=y[15];const W=`${A}-alert-description`;let ne;y[16]!==z||y[17]!==W?(ne=l.createElement("div",{className:W},z),y[16]=z,y[17]=W,y[18]=ne):ne=y[18];let w;y[19]!==B||y[20]!==E||y[21]!==ne?(w=l.createElement("div",{className:B},E,ne),y[19]=B,y[20]=E,y[21]=ne,y[22]=w):w=y[22];let _;y[23]!==Z||y[24]!==A?(_=Z&&l.createElement("div",{className:`${A}-alert-action`},Z),y[23]=Z,y[24]=A,y[25]=_):_=y[25];let ee;y[26]!==X||y[27]!==R||y[28]!==A?(ee=X&&l.createElement("button",{className:`${A}-alert-close`,onClick:R},l.createElement(g.Z,null)),y[26]=X,y[27]=R,y[28]=A,y[29]=ee):ee=y[29];let te;return y[30]!==j||y[31]!==T||y[32]!==N||y[33]!==w||y[34]!==_||y[35]!==ee||y[36]!==M?(te=l.createElement(I,{ref:D,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},l.createElement("div",{role:"alert",className:j,style:N,ref:T},M,w,_,ee)),y[30]=j,y[31]=T,y[32]=N,y[33]=w,y[34]=_,y[35]=ee,y[36]=M,y[37]=te):te=y[37],te});b.displayName="Alert";const S=b,q=null},60884:function(x,t,e){"use strict";e.d(t,{z:function(){return g}});var n=e(55826),l=e(7829),r=e(60333),p=e(7657),i=e(57577);const o={type:"default",variant:"default",htmlType:"button"},f=(0,n.forwardRef)((m,c)=>{const{prefixCls:d,size:I="md",componentConfig:s}=(0,n.useContext)(i.E),C=(0,p.S)(m,o,s==null?void 0:s.Button),{children:b,type:U,size:S=I,htmlType:q,status:V,loading:T,disabled:y,variant:A,icon:J,href:k,target:N,onClick:$,anchorProps:z={}}=C,K=ye(C,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),X=T?n.createElement(r.Z,{spin:T}):J,H=k?"link":U,Z=(0,l.default)(`${d}-btn`,`${d}-btn-${H}`,{[`${d}-btn-size-${S}`]:S,[`${d}-btn-status-${V}`]:!!V,[`${d}-btn-variant-${A}`]:A,[`${d}-btn-loading`]:T,[`${d}-btn-disabled`]:y}),Q=D=>{if(T||y)return void D.preventDefault();$==null||$(D)};return k?n.createElement("a",Ie(G({},z),{href:k,target:N,className:Z,onClick:Q,ref:c}),X,n.createElement("span",null,b)):n.createElement("button",Ie(G({},K),{type:q,className:Z,onClick:Q,ref:c}),X,n.createElement("span",null,b))});f.displayName="Button";const g=f,v=null},67824:function(x,t,e){"use strict";e.d(t,{Z:function(){return c}});var n=e(55826),l=e(7829),r=e(7657),p=e(45844),i=e(80703),o=e(92266),f=e(4814),h=e(57577),g=e(81372);const v={defaultChecked:!1,indeterminate:!1},m=(0,n.forwardRef)((d,I)=>{const{prefixCls:s,componentConfig:a}=(0,n.useContext)(h.E),b=(0,n.useContext)(g.w),H=(0,r.S)(d,v,a==null?void 0:a.Checkbox),{children:U,style:S,className:q,indeterminate:V}=H,T=ye(H,["children","style","className","indeterminate"]),[y,A]=(0,n.useState)(!1),J="disabled"in T?T.disabled:b.disabled;let k=(0,p.D)(T.value);const N=(0,n.useRef)(null);(0,n.useEffect)(()=>{var Z;(Z=b.registerValue)==null||Z.call(b,T.value)},[]),(0,n.useEffect)(()=>{if(T.value!==k){var Z,Q;(Z=b.unregisterValue)==null||Z.call(b,k),(Q=b.registerValue)==null||Q.call(b,T.value),k=T.value}return()=>{var C;return(C=b.unregisterValue)==null?void 0:C.call(b,T.value)}},[T.value]),(0,n.useEffect)(()=>{N.current&&(N.current.indeterminate=V)},[V]);const $=G({},T);(0,i.Qr)(b)||($.onChange=function(){for(var Z=arguments.length,Q=new Array(Z),C=0;C<Z;C++)Q[C]=arguments[C];var D,u;(D=T.onChange)==null||D.call(T,...Q),(u=b.toggleOption)==null||u.call(b,T.value)},$.name=b.name,$.checked=b.value.includes(T.value));const z=(0,l.default)(`${s}-checkbox-wrapper`,{[`${s}-checkbox-wrapper-checked`]:$.checked,[`${s}-checkbox-wrapper-disabled`]:J},q),K=Z=>{if((0,i.mf)(U)){var Q;Z.preventDefault(),(Q=N.current)==null||Q.click()}},X=()=>(0,i.o8)(U)?null:(0,i.mf)(U)?U({checked:"checked"in $?!!$.checked:y}):n.createElement("span",{className:`${s}-checkbox-label`},U);return n.createElement("label",{className:z,onClick:K},n.createElement(o.C,Ie(G({},$),{type:"checkbox",ref:(0,f.sQ)(I,N),disabled:J,prefixCls:`${s}-checkbox`,className:(0,l.default)({[`${s}-checkbox-indeterminate`]:V}),style:Ie(G({},S),{display:(0,i.mf)(U)?"none":void 0}),_getCheckedValue:A})),X())});m.displayName="Checkbox";const c=m},56104:function(x,t,e){"use strict";e.d(t,{Z:function(){return v}});var n=e(55826),l=e(7829),r=e(7657),p=e(80703),i=e(57577),o=e(81372),f=e(67824);const h={},g=(0,n.forwardRef)((m,c)=>{const{prefixCls:d,componentConfig:I}=(0,n.useContext)(i.E),s=(0,n.useId)(),D=(0,r.S)(m,h,I==null?void 0:I.CheckboxGroup),{defaultValue:a,children:b,options:U,className:S,style:q,disabled:V,name:T=s,onChange:y,renderOption:A}=D,J=ye(D,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[k,N]=(0,n.useState)(J.value||a||[]),[$,z]=(0,n.useState)([]);(0,n.useEffect)(()=>{"value"in J&&N(J.value||[])},[J.value]);const K=(0,n.useCallback)(u=>{z(P=>[...P,u])},[]),X=(0,n.useCallback)(u=>{z(P=>P.filter(L=>L!==u))},[]),H=(0,n.useMemo)(()=>U==null?void 0:U.map(u=>(0,p.HD)(u)||(0,p.hj)(u)?{label:u,value:u}:u),[U]),Z=(0,n.useCallback)(u=>{const P=[...k],L=k.indexOf(u);L===-1?P.push(u):P.splice(L,1),"value"in J||N(P);const Y=P.filter(O=>$.includes(O));y==null||y(Y)},[k,$,J,y]);let Q=b;if((0,p.kJ)(H)&&H.length>0){const u=(0,p.mf)(A);Q=H.map(P=>{const L=k.includes(P.value),Y=u?()=>A(Ie(G({},P),{checked:L})):P.label;return n.createElement(f.Z,{key:`checkbox-group-options-${P.value}`,className:P.className,style:P.style,disabled:"disabled"in P?P.disabled:V,value:P.value,checked:L,id:P.id,title:P.title,onChange:P.onChange},Y)})}const C=(0,n.useMemo)(()=>({name:T,value:k,disabled:V,toggleOption:Z,registerValue:K,unregisterValue:X}),[T,k,V,Z,K,X]);return n.createElement("div",{className:(0,l.default)(`${d}-checkbox-group`,S),style:q,ref:c},n.createElement(o.w.Provider,{value:C},Q))});g.displayName="CheckboxGroup";const v=g},81372:function(x,t,e){"use strict";e.d(t,{w:function(){return l}});var n=e(55826);const l=(0,n.createContext)({})},89946:function(x,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return f},CheckboxGroup:function(){return h},default:function(){return g}});var n=e(67824),l=e(56104),r=e(558),p=e.n(r),i={};for(var o in r)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(i[o]=function(v){return r[v]}.bind(0,o));e.d(t,i);const f=n.Z;f.Group=l.Z;const h=f.Group,g=f},558:function(){},57577:function(x,t,e){"use strict";e.d(t,{$:function(){return l},E:function(){return r}});var n=e(55826);const l={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(l)},83405:function(x,t,e){"use strict";e.d(t,{i:function(){return h}});var n=e(27833),l=e(55826),r=e(12598),p=e(7657),i=e(31136),o=e(57577);function f(g){const v=(0,n.c)(11),m=(0,p.S)(g,o.$),{iconPrefix:c,children:d}=m;let I;v[0]!==m?(I=(0,r.C)(m,["children","iconPrefix"]),v[0]=m,v[1]=I):I=v[1];const s=I,a=c?i.Z.Provider:l.Fragment;let b;v[2]!==c?(b={prefixCls:c},v[2]=c,v[3]=b):b=v[3];let U;v[4]!==a||v[5]!==d||v[6]!==b?(U=l.createElement(a,{value:b},d),v[4]=a,v[5]=d,v[6]=b,v[7]=U):U=v[7];let S;return v[8]!==s||v[9]!==U?(S=l.createElement(o.E.Provider,{value:s},U),v[8]=s,v[9]=U,v[10]=S):S=v[10],S}f.displayName="ConfigProvider";const h=f},48380:function(x,t,e){"use strict";e.d(t,{i:function(){return h}});var n=e(55826),l=e(7829),r=e(7657),p=e(57577);const i={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((v,m)=>{const{prefixCls:c,componentConfig:d}=(0,n.useContext)(p.E),I=(0,r.S)(v,i,d==null?void 0:d.Divider),{direction:s,align:a,dashed:b,className:U,children:S,text:q,style:V}=I,T=S||q,y=s!=="vertical"&&!!T,A=(0,l.default)(`${c}-divider`,{[`${c}-divider-${s}`]:s,[`${c}-divider-with-text`]:y,[`${c}-divider-with-text-${a}`]:y,[`${c}-divider-dashed`]:!!b,className:U});return n.createElement("div",{className:A,style:V,ref:m},y&&n.createElement("span",{className:`${c}-divider-inner-text`},T))});o.displayName="Divider";const h=o,g=null},17599:function(x,t,e){"use strict";e.d(t,{J:function(){return k},X:function(){return J}});var n=e(55826),l=e(7829),r=e(7657),p=e(80703),i=e(57577);const o=["xxl","xl","lg","md","sm","xs"],f={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=Object.keys(f),g=new Map;let v=-1,m={};const d={handlers:{},dispatch(N){return m=N,g.forEach($=>$(m)),g.size>=1},subscribe(N){return g.size||this.register(),v+=1,g.set(v,N),N(m),v},unsubscribe(N){g.delete(N),g.size||this.unregister()},register(){h.forEach(N=>{const $=X=>{let{matches:H}=X;this.dispatch(Ie(G({},m),{[N]:H}))},z=f[N],K=window.matchMedia(z);K.addListener($),this.handlers[z]={mql:K,listener:$},$(K)})},unregister(){h.forEach(N=>{const $=f[N],z=this.handlers[$];z==null||z.mql.removeListener(z==null?void 0:z.listener)}),g.clear()}},s=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},b=(0,n.forwardRef)((N,$)=>{const{prefixCls:z,componentConfig:K}=(0,n.useContext)(i.E),w=(0,r.S)(N,a,K==null?void 0:K.Row),{align:X,justify:H,gutter:Z,className:Q,wrap:C,children:D,style:u}=w,P=ye(w,["align","justify","gutter","className","wrap","children","style"]),[L,Y]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const _=d.subscribe(ee=>{((0,p.Kn)(Z)||(0,p.kJ)(Z)&&((0,p.Kn)(Z[0])||(0,p.Kn)(Z[1])))&&Y(ee)});return()=>d.unsubscribe(_)},[]);const O=j();function j(){const _=[void 0,void 0];return((0,p.kJ)(Z)?Z:[Z,void 0]).forEach((te,ue)=>{if((0,p.Kn)(te))for(let ae=0;ae<o.length;ae++){const ie=o[ae];if(L[ie]&&te[ie]!==void 0){_[ue]=te[ie];break}}else _[ue]=te}),_}const F=(0,l.default)(`${z}-row`,{[`${z}-row-nowrap`]:C===!1,[`${z}-row-align-${X}`]:X,[`${z}-row-justify-${H}`]:H},Q),[R,M]=O,B=(0,n.useMemo)(()=>({gutter:[R,M],wrap:C}),[R,M,C]),E={},W=(0,p.hj)(R)&&R!==0,ne=(0,p.hj)(M)&&M!==0;if(W||ne){const _=-R/2,ee=-M/2;_&&(E.marginLeft=_,E.marginRight=_),ee&&(E.marginTop=ee,E.marginBottom=ee)}return n.createElement(s.Provider,{value:B},n.createElement("div",Ie(G({},P),{ref:$,className:F,style:G(G({},u),E)}),D))});b.displayName="Row";const U=b,S={offset:0};function q(N){return(0,p.hj)(N)?`${N} ${N} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(N)?`0 0 ${N}`:N}const V=["xs","sm","md","lg","xl","xxl"],T=(N,$)=>{let z={};return V.forEach(K=>{const X=N[K];if(!X)return;let H={};(0,p.hj)(X)?H.span=X:(0,p.Kn)(X)&&(H=X),z=Ie(G({},z),{[`${$}-col-${K}-${H.span}`]:(0,p.hj)(H.span),[`${$}-col-${K}-order-${H.order}`]:H.order,[`${$}-col-${K}-offset-${H.offset}`]:H.offset})}),z},y=(0,n.forwardRef)((N,$)=>{const{componentConfig:z,prefixCls:K}=(0,n.useContext)(i.E),{gutter:X}=(0,n.useContext)(s),w=(0,r.S)(N,S,z==null?void 0:z.Col),{span:H,offset:Z,children:Q,className:C,style:D,flex:u,order:P,xs:L,sm:Y,md:O,lg:j,xl:F,xxl:R}=w,M=ye(w,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),B=T({xs:L,sm:Y,md:O,lg:j,xl:F,xxl:R},K),E=(0,l.default)(`${K}-col`,{[`${K}-col-${H}`]:(0,p.hj)(H),[`${K}-col-offset-${Z}`]:Z,[`${K}-col-order-${P}`]:P},B,C),W={};if(X){const _=X[0]?X[0]/2:0,ee=X[1]?X[1]/2:0;_&&(W.paddingLeft=_,W.paddingRight=_),ee&&(W.paddingTop=ee,W.paddingBottom=ee)}const ne={};return u&&(ne.flex=q(u)),n.createElement("div",Ie(G({ref:$},M),{className:E,style:G(G(G({},D),ne),W)}),Q)});y.displayName="Col";const A=y,J=U,k=A},45990:function(x,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return l.z},Col:function(){return f.J},ConfigProvider:function(){return i.i},Divider:function(){return o.i},Input:function(){return h.I},Row:function(){return f.X},Space:function(){return v.T}});var n=e(4274),l=e(60884),r=e(89946),c={};for(var p in r)["default","Alert","Button"].indexOf(p)<0&&(c[p]=function(d){return r[d]}.bind(0,p));e.d(t,c);var i=e(83405),o=e(48380),f=e(17599),h=e(38312),g=e(37663),c={};for(var p in g)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input"].indexOf(p)<0&&(c[p]=function(I){return g[I]}.bind(0,p));e.d(t,c);var v=e(92595),m=e(36112),c={};for(var p in m)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Radio","RadioButton","RadioGroup","Space"].indexOf(p)<0&&(c[p]=function(I){return m[I]}.bind(0,p));e.d(t,c)},38312:function(x,t,e){"use strict";e.d(t,{I:function(){return s}});var n=e(55826),l=e(7829),r=e(7657),p=e(62222),i=e(80703),o=e(58360),f=e(85569),h=e(1824),g=e(4814),v=e(57577);const m={type:"text",size:"md",align:"left",visibilityToggle:!0};function c(b,U,S){let q;return q=b===null||(0,i.o8)(b)||(0,i.HD)(b)?b||"":String(b),(0,i.hj)(U)&&!S?q.slice(0,U):q}const d=(0,n.forwardRef)((b,U)=>{const{prefixCls:S,componentConfig:q}=(0,n.useContext)(v.E),Re=(0,r.S)(b,m,q==null?void 0:q.Input),{size:V,status:T,align:y,disabled:A,allowClear:J,placeholder:k,variant:N="outline",addonBefore:$,addonAfter:z,prefix:K,suffix:X,value:H,defaultValue:Z,type:Q,className:C,style:D,readOnly:u,visibilityToggle:P,maxLength:L,tips:Y,onFocus:O,onBlur:j,onChange:F}=Re,R=ye(Re,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),M=(0,n.useRef)(null),[B,E]=(0,n.useState)(!1),W=se=>{A||u||(E(!0),O==null||O(se))},ne=se=>{A||u||(E(!1),j==null||j(se))},w=(0,i.hj)(L)?L:L==null?void 0:L.length,_=(0,i.hj)(L)?!1:L==null?void 0:L.errorOnly,ee=(0,i.hj)(L)?!0:(L==null?void 0:L.showLimit)!==!1,[te,ue]=(0,p.R)(Z,{value:H}),ae=c(te,w,_),ie=(0,i.hj)(w)?ae.length>w:!1,ge=se=>{const{value:be}=se.target;ue(be),F==null||F(be,se)},he=()=>{var se;A||(se=M.current)==null||se.focus()},le=(0,l.default)(`${S}-input`,{[`${S}-input-variant-${N}`]:N,[`${S}-input-size-${V}`]:V,[`${S}-input-disabled`]:A,[`${S}-input-align-${y}`]:y,[`${S}-input-status-${T}`]:T,[`${S}-input-focus`]:B,[`${S}-input-limit-length-error`]:ie},C),me=(0,l.default)(`${S}-input-real`),xe=J&&ae&&!A,oe=n.createElement(o.Z,null),re=se=>{se.stopPropagation(),ue(""),F==null||F("",se)},ce=xe&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,l.default)(`${S}-input-suffix`,`${S}-input-clear`),onClick:re},oe),de=(0,i.Kn)(P)&&!(0,i.o8)(P.visible),[fe,ve]=(0,n.useState)(Q);(0,n.useEffect)(()=>{ve(de?P.visible?"text":"password":Q)},[Q,de,P==null?void 0:P.visible]);const pe=()=>{if(A)return;const se=fe==="password"?"text":"password";if(ve(se),de){var be;(be=P.onVisibleChange)==null||be.call(P,se==="text")}},Ce=Q==="password",Me=(0,n.useMemo)(()=>Ce?(0,i.Kn)(P)&&(0,i.mf)(P.renderIcon)?P.renderIcon(fe==="text"):fe==="password"?n.createElement(f.Z,null):fe==="text"?n.createElement(h.Z,null):null:X,[Ce,fe,P,X]),Le=(0,n.useMemo)(()=>function(se){let{children:be}=se;const Ke=$||z;let Oe=be;return Ke&&(Oe=n.createElement("div",{className:`${S}-input-group`},Oe)),Y&&(Oe=n.createElement("div",{className:`${S}-input-group-extra`},Oe)),Oe},[$,z,Y]),Ae=K&&n.createElement("span",{className:`${S}-input-prefix`},K),Ee=Me&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,l.default)(`${S}-input-suffix`,{[`${S}-input-suffix-password`]:Ce}),onClick:pe,onMouseDown:se=>se.preventDefault(),onMouseUp:se=>se.preventDefault()},Me),Be=(0,i.hj)(w)&&ee&&n.createElement("span",{className:`${S}-input-limit-length-text`},ae.length,"/",w),Pe=Y&&n.createElement("div",{className:(0,l.default)(`${S}-input-tips`,{[`${S}-input-tips-status-${T}`]:T})},Y),De=n.createElement(n.Fragment,null,n.createElement("span",{className:le,style:D,onClick:he},Ae,n.createElement("input",Ie(G({ref:(0,g.sQ)(U,M)},R),{type:fe,value:ae,readOnly:u,className:me,placeholder:k,disabled:A,onChange:ge,onFocus:W,onBlur:ne})),ce,Ee,Be)),Se=$&&n.createElement("span",{className:(0,l.default)(`${S}-input-group-addon`)},$),Ne=z&&n.createElement("span",{className:(0,l.default)(`${S}-input-group-addon`)},z);return n.createElement(Le,null,Se,De,Ne,Pe)});d.displayName="Input";const s=d,a=null},74052:function(x,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(55826),l=e(7829),r=e(7657),p=e(80703),i=e(92266),o=e(4814),f=e(57577),h=e(83595);const g={defaultChecked:!1},v=(0,n.forwardRef)((c,d)=>{const{prefixCls:I,componentConfig:s}=(0,n.useContext)(f.E),a=(0,n.useContext)(h.Z),Z=(0,r.S)(c,g,s==null?void 0:s.Radio),{_IS_BUTTON_:b,value:U,children:S,style:q}=Z,V=ye(Z,["_IS_BUTTON_","value","children","style"]),T=Q=>{var C,D;(C=V.onChange)==null||C.call(V,Q),a==null||(D=a.onChange)==null||D.call(a,Q)},y=G({},V);let A="md";if(!(0,p.Qr)(a)){y.name=a.name,y.onChange=T,y.checked=U===a.value;var J;y.disabled=(J=y.disabled)!=null?J:a.disabled,A=a.size?a.size:A}const[k,N]=(0,n.useState)(!1),$=b?`${I}-radio-button`:`${I}-radio`,z=(0,l.default)(`${$}-wrapper`,{[`${$}-wrapper-disabled`]:y.disabled,[`${$}-wrapper-checked`]:y.checked,[`${$}-wrapper-size-${A}`]:A,[`${$}-wrapper-filled`]:a.buttonVariant==="filled"}),K=()=>(0,p.o8)(S)?null:(0,p.mf)(S)?S({checked:"checked"in y?!!y.checked:k}):n.createElement("span",{className:`${$}-label`},S),X=(0,n.useRef)(null),H=Q=>{if((0,p.mf)(S)){var C;Q.preventDefault(),(C=X.current)==null||C.click()}};return n.createElement("label",{className:z,onClick:H},n.createElement(i.Z,Ie(G(G({},V),y),{ref:(0,o.sQ)(d,X),value:U,type:"radio",prefixCls:$,style:Ie(G({},q),{display:(0,p.mf)(S)?"none":void 0}),disabled:y.disabled,_getCheckedValue:N})),K())});v.displayName="Radio";const m=v},89312:function(x,t,e){"use strict";e.d(t,{Z:function(){return o}});var n=e(27833),l=e.n(n),r=e(55826),p=e(74052);const i=(0,r.forwardRef)((f,h)=>{const g=(0,n.c)(3);let v;return g[0]!==f||g[1]!==h?(v=r.createElement(p.Z,Ie(G({_IS_BUTTON_:!0},f),{ref:h})),g[0]=f,g[1]=h,g[2]=v):v=g[2],v});i.displayName="RadioButton";const o=i},59803:function(x,t,e){"use strict";e.d(t,{Z:function(){return c}});var n=e(55826),l=e(7829),r=e(7657),p=e(62222),i=e(80703),o=e(57577),f=e(83595),h=e(74052),g=e(89312);const v={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},m=(0,n.forwardRef)((d,I)=>{const{prefixCls:s,componentConfig:a}=(0,n.useContext)(o.E),b=(0,r.S)(d,v,a==null?void 0:a.RadioGroup),U=(0,n.useId)(),{className:S,style:q,name:V=U,value:T,defaultValue:y,children:A,disabled:J,size:k,buttonVariant:N,renderOption:$,onChange:z,appearance:K,options:X}=b,[H,Z]=(0,p.R)(y,{value:T}),Q=(0,n.useCallback)(P=>{const L=P.target.value;"value"in b||Z(L),L!==H&&(z==null||z(P))},[H,z]);let C=A;const D=K==="button"?g.Z:h.Z;if((0,i.kJ)(X)&&X.length>0){const P=(0,i.mf)($);C=X.map(L=>{if((0,i.HD)(L)||(0,i.hj)(L)){const j=H===L,F=P?()=>$({label:L,value:L,checked:j}):L;return n.createElement(D,{key:L.toString(),disabled:J,value:L,checked:j},F)}const Y=H===L.value,O=P?()=>$(Ie(G({},L),{checked:Y})):L.label;return n.createElement(D,{key:`radio-group-options-${L.value}`,className:L.className,style:L.style,disabled:L.disabled||J,value:L.value,checked:Y,id:L.id,title:L.title,onChange:L.onChange},O)})}const u=(0,n.useMemo)(()=>({name:V,value:H,disabled:J,size:k,buttonVariant:N,onChange:Q}),[V,T,J,k,N,Q]);return n.createElement("div",{ref:I,className:(0,l.default)(`${s}-radio-group`,S),style:q},n.createElement(f.Z.Provider,{value:u},C))});m.displayName="RadioGroup";const c=m},83595:function(x,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(55826);const r=(0,n.createContext)({})},37663:function(x,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return h},RadioButton:function(){return v},RadioGroup:function(){return g},default:function(){return m}});var n=e(74052),l=e(89312),r=e(59803),p=e(63149),i=e.n(p),o={};for(var f in p)["default","Radio","RadioButton","RadioGroup"].indexOf(f)<0&&(o[f]=function(c){return p[c]}.bind(0,f));e.d(t,o);const h=n.Z;h.Group=r.Z,h.Button=l.Z;const g=h.Group,v=h.Button,m=h},63149:function(){},92595:function(x,t,e){"use strict";e.d(t,{T:function(){return m}});var n=e(55826),l=e(7829),r=e(80703),p=e(7657),i=e(21299),o=e(57577);const f={sm:8,md:16,lg:24},h={direction:"horizontal",align:"center",wrap:!1},g=(0,n.forwardRef)((d,I)=>{const{prefixCls:s,size:a="md",componentConfig:b}=(0,n.useContext)(o.E),H=(0,p.S)(d,h,b==null?void 0:b.Space),{className:S,children:q,size:V=a,direction:T="horizontal",align:y,split:A,wrap:J=!1}=H,k=ye(H,["className","children","size","direction","align","split","wrap"]),N=(0,i.q)(q),$=T==="horizontal"&&y===void 0?"center":y,z=(0,l.default)(`${s}-space`,`${s}-space-direction-${T}`,{[`${s}-space-align-${$}`]:$,[`${s}-space-wrap`]:J},S),K=(0,n.useCallback)(Z=>{const Q=(0,r.kJ)(V)?V:[V,V],[C,D]=Q.map(u=>(0,r.HD)(u)?f[u]:u||0);return J?{marginRight:C,marginBottom:D}:T==="vertical"?{marginBottom:D}:{marginRight:Z?void 0:C}},[V]),X=N.map((Z,Q)=>{const C=Q===N.length-1;return n.createElement(n.Fragment,{key:`space-item-${Q}`},n.createElement("div",{className:"space-item",style:K(C)},Z),!C&&A&&n.createElement("span",{className:"sqi-space-item-split"},A))});return n.createElement("div",Ie(G({className:z},k),{ref:I}),X)});g.displayName="Space";const m=g,c=null},88539:function(x,t,e){"use strict";e.d(t,{Z:function(){return Z}});var n=e(27833),l=e(55826),r=e(7657),p=e(60164),i=e(6890),o=e(8240),f=e(21299);function h(C){return C instanceof HTMLElement||C instanceof SVGElement}function g(C){return C&&typeof C=="object"&&h(C.nativeElement)?C.nativeElement:h(C)?C:null}function v(C){if(!(C&&(0,l.isValidElement)(C)))return null;if(parseInt(l.version)>=19){var u;return((u=C.props)==null?void 0:u.ref)||null}return C.ref}var m=e(4814);const c=(0,l.forwardRef)((C,D)=>{const u=(0,n.c)(14),{children:P,disabled:L,throttleMs:Y,onResize:O}=C,j=Y===void 0?100:Y;let F;u[0]!==P?(F=(0,l.isValidElement)(P),u[0]=P,u[1]=F):F=u[1];const R=F,M=R?(0,f.q)(P):[];let B;u[2]!==P||u[3]!==R?(B=R?v(P):null,u[2]=P,u[3]=R,u[4]=B):B=u[4];const E=B,W=(0,l.useRef)(null),ne=(0,m.x1)(E,W);let w;u[5]===Symbol.for("react.memo_cache_sentinel")?(w=()=>g(W.current),u[5]=w):w=u[5];const _=w;let ee;u[6]===Symbol.for("react.memo_cache_sentinel")?(ee=()=>_(),u[6]=ee):ee=u[6],(0,l.useImperativeHandle)(D,ee);let te;u[7]!==O||u[8]!==j?(te=O?(0,i.P)(O,j):void 0,u[7]=O,u[8]=j,u[9]=te):te=u[9];const ue=te;(0,o.y)(W,ue,!L);let ae;return u[10]!==P||u[11]!==R||u[12]!==ne?(ae=R?(0,l.cloneElement)(P,{ref:ne}):P,u[10]=P,u[11]=R,u[12]=ne,u[13]=ae):ae=u[13],ae});c.displayName="ResizeObserverComponent";const d=c;var I=e(80700),s=e(34028),a=e(80703);const b=(0,s.J)();function U(C){return b?(0,a.HD)(C)?document.querySelector(C):(0,a.mf)(C)?C():C instanceof HTMLElement?C:document.body:null}const S=(0,l.forwardRef)((C,D)=>{const u=(0,n.c)(32),{getContainer:P,prefixCls:L,children:Y,open:O,rootStyle:j,autoLockScroll:F}=C,R=O===void 0?!0:O,M=F===void 0?!0:F,[B,E]=(0,l.useState)(!1),[W,ne]=(0,l.useState)(null);let w;u[0]!==P?(w=()=>U(P),u[0]=P,u[1]=w):w=u[1];const[_,ee]=(0,l.useState)(w),te=_||document.body,ue=R||B;let ae,ie;u[2]!==P?(ae=()=>{const pe=U(P);ee(pe||null)},ie=[P],u[2]=P,u[3]=ae,u[4]=ie):(ae=u[3],ie=u[4]),(0,l.useEffect)(ae,ie);let ge;u[5]!==L||u[6]!==j?(ge=()=>{if(!b)return null;const pe=document.createElement("div");return L&&(pe.className=`${L}-portal-wrapper`),j&&Object.assign(pe.style,j),pe.setAttribute("data-portal","true"),pe},u[5]=L,u[6]=j,u[7]=ge):ge=u[7];const he=ge;let le;u[8]!==W||u[9]!==he||u[10]!==R?(le=()=>{b&&(R?W||ne(()=>he()):ne(null))},u[8]=W,u[9]=he,u[10]=R,u[11]=le):le=u[11];let me;u[12]!==R?(me=[R],u[12]=R,u[13]=me):me=u[13],(0,p.L)(le,me);let xe,oe;u[14]!==W?(xe=()=>W,oe=[W],u[14]=W,u[15]=xe,u[16]=oe):(xe=u[15],oe=u[16]),(0,l.useImperativeHandle)(D,xe,oe);let re,ce;u[17]!==M||u[18]!==W?(re=()=>{M===!1?document.body.style.overflow="":M&&W&&(document.body.style.overflow="hidden")},ce=[M,W],u[17]=M,u[18]=W,u[19]=re,u[20]=ce):(re=u[19],ce=u[20]),(0,p.L)(re,ce);let de;u[21]!==M||u[22]!==W||u[23]!==te||u[24]!==R?(de=()=>{if(!b||!W)return;const pe=()=>{W.parentNode||(te.appendChild(W),E(!0))},Ce=()=>{W.parentNode&&(W.parentNode.removeChild(W),M&&(document.body.style.overflow=""),E(!1))};return R?pe():Ce(),()=>{W.parentNode&&Ce()}},u[21]=M,u[22]=W,u[23]=te,u[24]=R,u[25]=de):de=u[25];let fe;if(u[26]!==W||u[27]!==R?(fe=[R,W],u[26]=W,u[27]=R,u[28]=fe):fe=u[28],(0,p.L)(de,fe),!(ue&&Y))return null;let ve;return u[29]!==Y||u[30]!==W?(ve=W?(0,I.createPortal)(Y,W):null,u[29]=Y,u[30]=W,u[31]=ve):ve=u[31],ve});S.displayName="Portal";const q=S;var V=e(57577);function T(C,D,u){const{top:P,left:L,width:Y,height:O}=C.getBoundingClientRect(),j=P+u,F=L+D;return{width:Y,height:O,top:j,bottom:j+O,left:F,right:F+Y}}function y(C){if(!C||C.tagName==="HTML")return;const D=window.getComputedStyle(C),u=P=>["auto","scroll"].includes(P);return C.clientHeight<C.scrollHeight&&u(D.overflowX)||C.clientWidth<C.scrollWidth&&u(D.overflowY)?C:y(C.parentNode)}function A(C,D){return Math.round(Math.abs(C))>Math.round(Math.abs(D))?C:D}const J=(C,D)=>`translate(${C}px, ${D}px)`;function k(C){if(!C)return[0,0];const D=window.getComputedStyle(C),u=D.transform||D.webkitTransform||"none";if(u==="none")return[0,0];if(u.match(/matrix\(([^)]+)\)/)){var P,L;const j=((L=u.match(/matrix\((.+)\)/))==null||(P=L[1])==null?void 0:P.split(",").map(Number))||[0,0];if(j.length===6)return[j[4],j[5]]}const[,Y=0,O=0]=(u.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(j=>Number(j));return[Y,O]}function N(C){const D=C.split("-"),u=D[0],P=D[1];let L;const Y=u==="top"||u==="bottom",O=u==="left"||u==="right";return Y&&(P==="start"&&(L="left"),P==="end"&&(L="right")),O&&(P==="start"&&(L="top"),P==="end"&&(L="bottom")),[u,L,Y,O]}function $(C){return C?(0,a.Kn)(C)?[C.x||0,C.y||0]:[C||0,C||0]:[0,0]}const z={direction:"bottom",enableFlip:!0,enableShift:!0};function K(C,D){const{reference:u,popup:P,arrow:L}=C;if(!u||!P)return;const Y=G(G({},z),D),O=P.parentNode,[j,F]=k(O),R=window.pageYOffset,M=window.pageXOffset,B=T(u,M,R),E=T(P,M,R),W=B.width-E.width,ne=B.height-E.height;let w=B.left-E.left+j,_=B.top-E.top+F;const[ee,te,ue,ae]=N(Y.direction);let ie=ee;const ge=te==="left"?0:te==="right"?W:W/2,he=W-ge,le=te==="top"?0:te==="bottom"?ne:ne/2,me=ne-le;ue&&(w+=ge,_+=ee==="top"?-E.height:B.height),ae&&(w+=ee==="left"?-E.width:B.width,_+=le);let xe=y(u),oe,re=0,ce=0;const[de,fe]=$(Y.offset),{height:ve=0,width:pe=0}=L?T(L,M,R):{};for(ue&&(_+=ie==="bottom"?fe:-fe),ae&&(w+=ie==="right"?de:-de);xe;)oe=T(xe,M,R),Le(oe),xe=y(xe.parentNode);const{clientHeight:Ce,clientWidth:Me}=document.documentElement;Le({top:R,bottom:R+Ce,left:M,right:M+Me,height:Ce,width:Me}),w-=re,_-=ce,O.style.transform=J(w,_);function Le(Ae){const{top:Ee,bottom:Be,left:Pe,right:De,height:Se,width:Ne}=Ae;if(ue){const Re=Math.round(B.top-Ee+B.height/2),se=Math.round(Se/2);Y.enableFlip&&(B.top-(E.height+fe+ve)<Ee&&Re<=se&&ie==="top"?(_+=E.height+B.height,ie="bottom"):B.bottom+E.height+fe+ve>Se+Ee&&Re>=se&&ie==="bottom"&&(_-=E.height+B.height,ie="top")),Y.enableShift&&(B.left+ge<Pe&&(re=A(B.right-pe>Pe?B.left+ge-Pe:-B.width+ge+pe,re)),B.right-he>De&&(re=A(B.left+pe<De?B.right-he-De:B.width-he-pe,re)))}if(ae){const Re=Math.round(B.left-Pe+B.width/2),se=Math.round(Ne/2);Y.enableFlip&&(B.left-(E.width+de+pe)<Pe&&Re<se&&ie==="left"?(w+=B.width+E.width,ie="right"):B.right+E.width+de+pe>De&&Re>se&&ie==="right"&&(w-=B.width+E.width,ie="left")),Y.enableShift&&(B.top+le<Ee&&(ce=A(B.bottom-ve>Ee?B.top+le-Ee:-B.height+le+ve,ce)),B.bottom-me>Be&&(ce=A(B.top+ve<Be?B.bottom-me-Be:B.height-me-ve,ce)))}}}const X={direction:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:0},H=(0,l.forwardRef)((C,D)=>{const u=(0,n.c)(24),{prefixCls:P,componentConfig:L}=(0,l.useContext)(V.E),{children:Y,popup:O,enableShift:j,enableFlip:F,zIndex:R,offset:M,direction:B,getContainer:E}=(0,r.S)(C,X,L==null?void 0:L.Trigger);let W;u[0]!==Y?(W=(0,l.isValidElement)(Y),u[0]=Y,u[1]=W):W=u[1];const ne=W,w=(0,l.useRef)(null),_=(0,l.useRef)(null);let ee;u[2]!==O?(ee=v(O),u[2]=O,u[3]=ee):ee=u[3];const te=ee,ue=(0,l.useRef)(null),ae=(0,m.x1)(te,ue);(0,l.useImperativeHandle)(D,Q);const ie=(0,m.t4)(Y),ge=(0,m.t4)(O);let he;u[4]!==B||u[5]!==F||u[6]!==j||u[7]!==M?(he=re=>{var ce;re&&re.type!=="resize"&&!((ce=re.target)!=null&&ce.contains(w.current))||K({reference:w.current,popup:ue.current,arrow:_.current},{direction:B,enableFlip:F,enableShift:j,offset:M})},u[4]=B,u[5]=F,u[6]=j,u[7]=M,u[8]=he):he=u[8];const le=he;let me;u[9]!==le?(me=()=>(le(),document.addEventListener("scroll",le,{capture:!0,passive:!0}),window.addEventListener("resize",le),()=>{document.removeEventListener("scroll",le),window.removeEventListener("resize",le)}),u[9]=le,u[10]=me):me=u[10];let xe;u[11]!==B||u[12]!==F||u[13]!==j||u[14]!==M?(xe=[B,F,j,M],u[11]=B,u[12]=F,u[13]=j,u[14]=M,u[15]=xe):xe=u[15],(0,p.L)(me,xe);let oe;return u[16]!==Y||u[17]!==E||u[18]!==ne||u[19]!==ae||u[20]!==O||u[21]!==P||u[22]!==R?(oe=ne?l.createElement(l.Fragment,null,l.createElement(d,{ref:w},Y),O?l.createElement(q,{getContainer:E,autoLockScroll:!1},l.createElement("div",{className:`${P}-trigger`,style:{position:"absolute",top:0,left:0,willChange:"transform",zIndex:R}},(0,l.cloneElement)(O,{ref:ae}))):null):null,u[16]=Y,u[17]=E,u[18]=ne,u[19]=ae,u[20]=O,u[21]=P,u[22]=R,u[23]=oe):oe=u[23],oe});H.displayName="Trigger";const Z=H;function Q(){}},36112:function(x,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return f}});var n=e(88539),l=e(98479),r=e.n(l),p={};for(var i in l)["default","Trigger"].indexOf(i)<0&&(p[i]=function(h){return l[h]}.bind(0,i));e.d(t,p);const o=n.Z,f=o},98479:function(){},84176:function(x,t,e){var n=e(75863);function l(r,p){if(r==null)return{};var i=n(r,p),o,f;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(f=0;f<h.length;f++)o=h[f],!(p.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(i[o]=r[o])}return i}x.exports=l,x.exports.__esModule=!0,x.exports.default=x.exports},75863:function(x){function t(e,n){if(e==null)return{};var l={},r=Object.keys(e),p,i;for(i=0;i<r.length;i++)p=r[i],!(n.indexOf(p)>=0)&&(l[p]=e[p]);return l}x.exports=t,x.exports.__esModule=!0,x.exports.default=x.exports},7829:function(x,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return l}});function n(r){var p,i,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var f=r.length;for(p=0;p<f;p++)r[p]&&(i=n(r[p]))&&(o&&(o+=" "),o+=i)}else for(i in r)r[i]&&(o&&(o+=" "),o+=i);return o}function l(){for(var r,p,i=0,o="",f=arguments.length;i<f;i++)(r=arguments[i])&&(p=n(r))&&(o&&(o+=" "),o+=p);return o}t.default=l},64508:function(x,t,e){"use strict";e.d(t,{Y:function(){return p}});var n=e(55826),l=e(75601);const r=(i,o,f,h,g)=>{clearTimeout(h.current);const v=(0,l.y0)(i);o(v),f.current=v,g&&g({current:v})},p=({enter:i=!0,exit:o=!0,preEnter:f,preExit:h,timeout:g,initialEntered:v,mountOnEnter:m,unmountOnExit:c,onStateChange:d}={})=>{const[I,s]=(0,n.useState)(()=>(0,l.y0)(v?l.cn:(0,l.Ef)(m))),a=(0,n.useRef)(I),b=(0,n.useRef)(),[U,S]=(0,l.fj)(g),q=(0,n.useCallback)(()=>{const T=(0,l.XZ)(a.current._s,c);T&&r(T,s,a,b,d)},[d,c]),V=(0,n.useCallback)(T=>{const y=J=>{switch(r(J,s,a,b,d),J){case l.d0:U>=0&&(b.current=setTimeout(q,U));break;case l.Ix:S>=0&&(b.current=setTimeout(q,S));break;case l.iL:case l.iU:b.current=(0,l.Y3)(y,J);break}},A=a.current.isEnter;typeof T!="boolean"&&(T=!A),T?!A&&y(i?f?l.iL:l.d0:l.cn):A&&y(o?h?l.iU:l.Ix:(0,l.Ef)(c))},[q,d,i,o,f,h,U,S,c]);return[I,V,q]}},75601:function(x,t,e){"use strict";e.d(t,{Ef:function(){return v},Ix:function(){return i},XZ:function(){return m},Y3:function(){return d},cn:function(){return r},d0:function(){return l},fj:function(){return c},iL:function(){return n},iU:function(){return p},y0:function(){return g}});const n=0,l=1,r=2,p=3,i=4,o=5,f=6,h=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],g=I=>({_s:I,status:h[I],isEnter:I<p,isMounted:I!==f,isResolved:I===r||I>i}),v=I=>I?f:o,m=(I,s)=>{switch(I){case l:case n:return r;case i:case p:return v(s)}},c=I=>typeof I=="object"?[I.enter,I.exit]:[I,I],d=(I,s)=>setTimeout(()=>{isNaN(document.body.offsetTop)||I(s+1)},0)}}]);
}());