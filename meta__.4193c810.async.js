!(function(){var rn=Object.defineProperty,an=Object.defineProperties;var sn=Object.getOwnPropertyDescriptors;var He=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var Qe=(x,t,e)=>t in x?rn(x,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[t]=e,U=(x,t)=>{for(var e in t||(t={}))ke.call(t,e)&&Qe(x,e,t[e]);if(He)for(var e of He(t))qe.call(t,e)&&Qe(x,e,t[e]);return x},Ee=(x,t)=>an(x,sn(t));var Ke=(x,t)=>{var e={};for(var n in x)ke.call(x,n)&&t.indexOf(n)<0&&(e[n]=x[n]);if(x!=null&&He)for(var n of He(x))t.indexOf(n)<0&&qe.call(x,n)&&(e[n]=x[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{36419:function(x,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return Ce}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return I.D},useIsomorphicLayoutEffect:function(){return s.L},useMergeProps:function(){return r.S},useMergeState:function(){return R.R},usePrevious:function(){return E.D},useResizeObserver:function(){return w.y}});var c={};e.r(c),e.d(c,{canUseDom:function(){return C.J},debounce:function(){return B.D},isArray:function(){return S.kJ},isEmptyObject:function(){return S.Qr},isFunction:function(){return S.mf},isNumber:function(){return S.hj},isObject:function(){return S.Kn},isString:function(){return S.HD},isUndefined:function(){return S.o8},omit:function(){return K.C},pick:function(){return Y},throttle:function(){return J.P}});var a={};e.r(a),e.d(a,{default:function(){return z.Y},useTransition:function(){return z.Y},useTransitionMap:function(){return H},useTransitionState:function(){return z.Y}});var d=e(90819),i=e.n(d),o=e(89933),f=e.n(o),v=e(53360),h=e.t(v,2),p=e(45990),m=e(4177),l=e(86752),u=e.t(l,2),I=e(37797),s=e(60164),r=e(7657),R=e(62222),E=e(45844),w=e(8240),C=e(34028),B=e(78831),S=e(80703),K=e(12598);function Y(G,ue){const ce={};return ue.forEach(D=>{D in G&&(ce[D]=G[D])}),ce}var J=e(6890),oe=e(22532),A=e(75257),L=e(7829),z=e(64508),W=e(75601);const k=(G,ue,ce,D,T,q)=>{clearTimeout(T);const b=(0,W.y0)(ue),pe=new Map(D.current);pe.set(G,b),ce(pe),D.current=pe,q&&q({key:G,current:b})},H=({allowMultiple:G,enter:ue=!0,exit:ce=!0,preEnter:D,preExit:T,timeout:q,initialEntered:b,mountOnEnter:pe,unmountOnExit:ye,onStateChange:g}={})=>{const[$,y]=(0,v.useState)(new Map),_=(0,v.useRef)($),ae=(0,v.useRef)(new Map),[ie,de]=(0,W.fj)(q),ne=(0,v.useCallback)((N,ve)=>{const{initialEntered:Re=b}=ve||{},Q=Re?W.cn:(0,W.Ef)(pe);k(N,Q,y,_),ae.current.set(N,{})},[b,pe]),me=(0,v.useCallback)(N=>{const ve=new Map(_.current);return ve.delete(N)?(y(ve),_.current=ve,ae.current.delete(N),!0):!1},[]),te=(0,v.useCallback)(N=>{const ve=_.current.get(N);if(!ve)return;const{timeoutId:Re}=ae.current.get(N),Q=(0,W.XZ)(ve._s,ye);Q&&k(N,Q,y,_,Re,g)},[g,ye]),xe=(0,v.useCallback)((N,ve)=>{const Re=_.current.get(N);if(!Re)return;const Q=ae.current.get(N),fe=le=>{switch(k(N,le,y,_,Q.timeoutId,g),le){case W.d0:ie>=0&&(Q.timeoutId=setTimeout(()=>te(N),ie));break;case W.Ix:de>=0&&(Q.timeoutId=setTimeout(()=>te(N),de));break;case W.iL:case W.iU:Q.timeoutId=(0,W.Y3)(fe,le);break}},V=Re.isEnter;typeof ve!="boolean"&&(ve=!V),ve?V||(fe(ue?D?W.iL:W.d0:W.cn),!G&&_.current.forEach((le,se)=>se!==N&&xe(se,!1))):V&&fe(ce?T?W.iU:W.Ix:(0,W.Ef)(ye))},[g,te,G,ue,ce,D,T,ie,de,ye]),X=(0,v.useCallback)(N=>{if(!(!G&&N!==!1))for(const ve of _.current.keys())xe(ve,N)},[G,xe]);return{stateMap:$,toggle:xe,toggleAll:X,endTransition:te,setItem:ne,deleteItem:me}};var j=e(53175),re=e(67324),P=e(31716),O=e(71932),M=e(95154),Z=e(81184),F=e.t(Z,2),Ce={"sqi-web-src-common-demo-portal":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,99902))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49108).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":m,react:h,"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":m,"react-dom":u,"@sqi-ui/hooks":n,"@sqi-ui/utils":c},renderOpts:{compile:function(){var G=f()(i()().mark(function ce(){var D,T=arguments;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},ce)}));function ue(){return G.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-base":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,74587))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58072).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":oe,"../CSSMotion.tsx":A,"../config-provider/context.ts":j,react:h,"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":oe,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":A,clsx:L,"react-transition-state":a,"@sqi-ui/utils":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":j},renderOpts:{compile:function(){var G=f()(i()().mark(function ce(){var D,T=arguments;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},ce)}));function ue(){return G.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,85773))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":oe,"../CSSMotion.tsx":A,"../config-provider/context.ts":j,react:h,"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":oe,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":A,clsx:L,"react-transition-state":a,"@sqi-ui/utils":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":j},renderOpts:{compile:function(){var G=f()(i()().mark(function ce(){var D,T=arguments;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},ce)}));function ue(){return G.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-portal":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,6685))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1175).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},"./motion.css":{type:"FILE",value:e(79172).Z},"react-dom":{type:"NPM",value:"19.1.1"},clsx:{type:"NPM",value:"2.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"../Portal.tsx":m,"../CSSMotion.tsx":A,"./motion.css":oe,"../config-provider/context.ts":j,react:h,"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":A,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":oe,"react-dom":u,clsx:L,"@sqi-ui/hooks":n,"react-transition-state":a,"@sqi-ui/utils":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":j},renderOpts:{compile:function(){var G=f()(i()().mark(function ce(){var D,T=arguments;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},ce)}));function ue(){return G.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-resize-observer":{component:v.memo(v.lazy(function(){return e.e(433).then(e.bind(e,80023))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25094).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(87425).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/toArray.ts":{type:"FILE",value:e(17588).Z},"../_util/ref.ts":{type:"FILE",value:e(90458).Z},"../_util/dom.ts":{type:"FILE",value:e(48557).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":re,"../_util/toArray.ts":P,"../_util/ref.ts":O,"../_util/dom.ts":M,react:h,"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":re,"@sqi-ui/utils":c,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":P,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":O,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":M,"react-is":F},renderOpts:{compile:function(){var G=f()(i()().mark(function ce(){var D,T=arguments;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},ce)}));function ue(){return G.apply(this,arguments)}return ue}()}}}},13842:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return v}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73819))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95121).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,15202))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75458).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35563))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44633).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}}}},6677:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v=e(5629),h={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,16286))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98669))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41122).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,86011))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"@sqi-ui/icons":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18024))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42791).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,7792))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95453).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}}}},58718:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v=e(84912),h={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42303))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52648).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,24394))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10654).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,55519))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8780))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42331).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98868))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(302).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41499))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37544).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}}}},94435:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return v}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,40787))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71841).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30933))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77322).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}}}},29876:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return v}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35038))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54117).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,31503))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58549).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35680))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65325).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}}}},60061:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v=e(66351),h={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,69753))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9098).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,93817))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96507).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26989))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8872).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33271))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17153).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,32093))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95921).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29727))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78066).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30407))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82986).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,56682))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23972).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}}}},13438:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(5629),v=e(45990),h={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73043))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f,"@sqi-ui/web":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37317))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36848).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f,"@sqi-ui/web":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,28981))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66135).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}}}},73931:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v=e(5629),h={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,27878))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25623).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30525))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38082).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,99670))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8899).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,66666))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(90822).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,32910))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13589).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,77182))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56596).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,52035))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34941).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,96294))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80488).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"@sqi-ui/icons":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72326))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31475).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,20416))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37604).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}}}},95752:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v=e(74944),h={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75228))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71038).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1753))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31932).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,46052))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8910).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,99789))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32105).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37848))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75386))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2930).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,91859))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27389).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":v,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":v},renderOpts:{compile:function(){var p=i()(a()().mark(function l(){var u,I=arguments;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(70).then(e.bind(e,25070));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,I));case 3:case"end":return r.stop()}},l)}));function m(){return p.apply(this,arguments)}return m}()}}}},5237:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return v}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72626))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7420).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,19067))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39113).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1251))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74317).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,44842))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(24811).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,66545))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17474).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":f},renderOpts:{compile:function(){var h=i()(a()().mark(function m(){var l,u=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(70).then(e.bind(e,25070));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,u));case 3:case"end":return s.stop()}},m)}));function p(){return h.apply(this,arguments)}return p}()}}}},37666:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return m}});var c=e(90819),a=e.n(c),d=e(89933),i=e.n(d),o=e(53360),f=e(45990),v=e(45513),h=e(43261),p=e(52342),m={"sqi-web-src-trigger-demo-core":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,51031))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-core",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73739).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z},"./demo.module.css":{type:"FILE",value:e(91778).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":v,"./demo.module.css":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":h},renderOpts:{compile:function(){var l=i()(a()().mark(function I(){var s,r=arguments;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(70).then(e.bind(e,25070));case 2:return E.abrupt("return",(s=E.sent).default.apply(s,r));case 3:case"end":return E.stop()}},I)}));function u(){return l.apply(this,arguments)}return u}()}},"sqi-web-src-trigger-demo-motion":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42191))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-motion",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41010).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z},"./motion.css":{type:"FILE",value:e(96443).Z},"./demo.module.css":{type:"FILE",value:e(91778).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":v,"./motion.css":p,"./demo.module.css":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":h},renderOpts:{compile:function(){var l=i()(a()().mark(function I(){var s,r=arguments;return a()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(70).then(e.bind(e,25070));case 2:return E.abrupt("return",(s=E.sent).default.apply(s,r));case 3:case"end":return E.stop()}},I)}));function u(){return l.apply(this,arguments)}return u}()}}}},75257:function(x,t,e){"use strict";e.r(t);var n=e(73193),c=e.n(n),a=e(10154),d=e.n(a),i=e(45332),o=e.n(i),f=e(84176),v=e.n(f),h=e(53360),p=e(7829),m=e(64508),l=e(80703),u=e(53175),I=["children","name","prefixCls"],s=(0,h.forwardRef)(function(r,R){var E=(0,h.useContext)(u.ConfigContext),w=r.children,C=r.name,B=r.prefixCls,S=v()(r,I),K=(0,m.Y)(S),Y=o()(K,2),J=Y[0],oe=Y[1],A=(0,h.isValidElement)(w);(0,h.useImperativeHandle)(R,function(){return{toggle:oe}});var L="".concat(B||E.prefixCls).concat(C?"-".concat(C):""),z=(0,p.default)(["".concat(L,"-motion")],d()({},"".concat(L,"-motion-").concat(J.status),J.status));return(0,l.mf)(w)?J.isMounted?w(c()(c()({},J),{},{className:z,toggle:oe})):null:A?J.isMounted?(0,h.cloneElement)(w,{className:(0,p.default)(w.props.className,z)}):null:w});s.displayName="CSSMotion",t.default=s},4177:function(x,t,e){"use strict";e.r(t);var n=e(45332),c=e.n(n),a=e(53360),d=e(86752),i=e(60164),o=e(34028),f=e(80703),v=(0,o.J)();function h(m){return v?(0,f.HD)(m)?document.querySelector(m):(0,f.mf)(m)?m():m instanceof HTMLElement?m:document.body:null}var p=(0,a.forwardRef)(function(m,l){var u=m.getContainer,I=m.prefixCls,s=m.children,r=m.open,R=r===void 0?!0:r,E=m.rootStyle,w=(0,a.useState)(null),C=c()(w,2),B=C[0],S=C[1],K=(0,a.useState)(null),Y=c()(K,2),J=Y[0],oe=Y[1],A=J||document.body;(0,a.useEffect)(function(){var z=h(u);oe(z||null)},[u]);var L=function(){if(!v||B)return null;var W=document.createElement("div");I&&(W.className="".concat(I,"-portal-wrapper")),E&&Object.assign(W.style,E),W.setAttribute("data-portal","true"),S(W)};return(0,i.L)(function(){v&&(R?L():S(null))},[R]),(0,a.useImperativeHandle)(l,function(){return B},[B]),(0,i.L)(function(){if(!(!v||!B)){var z=function(){return!B.parentNode&&A.appendChild(B)},W=function(){var H;return(H=B.parentNode)===null||H===void 0?void 0:H.removeChild(B)};return R?z():W(),function(){W()}}},[R,B]),R&&s&&B?(0,d.createPortal)(s,B):null});p.displayName="Portal",t.default=p},67324:function(x,t,e){"use strict";e.r(t);var n=e(53360),c=e(6890),a=e(8240),d=e(31716),i=e(95154),o=e(71932),f=(0,n.forwardRef)(function(v,h){var p=v.children,m=v.disabled,l=v.throttleMs,u=l===void 0?100:l,I=v.onResize,s=(0,n.isValidElement)(p),r=s?(0,d.toArray)(p):[],R=s?(0,i.getReactNodeRef)(p):null,E=(0,n.useRef)(null),w=(0,o.useComposeRef)(R,E),C=function(){return(0,i.getRefDom)(E)};(0,n.useImperativeHandle)(h,function(){return C()});var B=I?(0,c.P)(I,u):void 0;return(0,a.y)(C(),B,!m),s?(0,n.cloneElement)(p,{ref:w}):p});f.displayName="ResizeObserverComponent",t.default=f},95154:function(x,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return i},getReactNodeRef:function(){return f},getRefDom:function(){return o},isDOM:function(){return d}});var n=e(89957),c=e.n(n),a=e(53360);function d(v){return v instanceof HTMLElement||v instanceof SVGElement}function i(v){return v&&c()(v)==="object"&&d(v.nativeElement)?v.nativeElement:d(v)?v:null}function o(v){if(v)return v.current&&c()(v.current)==="object"&&"currentElement"in v.current?v.current.currentElement:v.current}function f(v){var h=v&&(0,a.isValidElement)(v);if(!h)return null;if(parseInt(a.version)>=19){var p;return((p=v.props)===null||p===void 0?void 0:p.ref)||null}return v.ref}},71932:function(x,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return i},fillRef:function(){return o},supportNodeRef:function(){return p},supportRef:function(){return v},useComposeRef:function(){return f}});var n=e(37797),c=e(80703),a=e(53360),d=e(11607),i=function(){for(var l=arguments.length,u=new Array(l),I=0;I<l;I++)u[I]=arguments[I];var s=u.filter(Boolean);return s.length<=1?s[0]:function(r){u.forEach(function(R){o(R,r)})}},o=function(l,u){(0,c.mf)(l)?l(u):(0,c.Kn)(l)&&"current"in l&&(l.current=u)},f=function(){for(var l=arguments.length,u=new Array(l),I=0;I<l;I++)u[I]=arguments[I];return(0,n.D)(function(){return i.apply(void 0,u)},u,function(s,r){return s.length!==r.length||s.every(function(R,E){return R!==r[E]})})},v=function(l){var u,I;if(!l)return!1;var s=parseInt(a.version);if(h(l)&&s>=19)return!0;var r=(0,d.isMemo)(l)?l.type.type:l.type;return!(typeof r=="function"&&!((u=r.prototype)!==null&&u!==void 0&&u.render)&&r.$$typeof!==d.ForwardRef||typeof l=="function"&&!((I=l.prototype)!==null&&I!==void 0&&I.render)&&l.$$typeof!==d.ForwardRef)};function h(m){return(0,a.isValidElement)(m)&&!(0,d.isFragment)(m)}var p=function(l){return h(l)&&v(l)}},31716:function(x,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return a}});var n=e(53360),c=e(11607);function a(d){var i=[];return n.Children.toArray(d).forEach(function(o){o!=null&&(Array.isArray(o)?i=i.concat(a(o)):(0,n.isValidElement)(o)&&(0,c.isFragment)(o)&&o.props?i=i.concat(a(o.props.children)):i.push(o))}),i}},84912:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return a}});var n=e(53360),c=e(69787);function a(d){var i=d.item,o=d.checked,f={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},v={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,c.jsxs)("div",{style:f,children:[(0,c.jsx)("div",{style:v}),(0,c.jsx)("strong",{children:i}),(0,c.jsx)("div",{children:"this is a checkbox"})]})}},53175:function(x,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return a},defaultConfigProps:function(){return c}});var n=e(53360),c={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},a=(0,n.createContext)(c)},66351:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return a}});var n=e(53360),c=e(69787);function a(d){var i=d.colorPalette,o=i===void 0?6:i,f=d.children,v=d.height;return(0,c.jsx)("div",{style:{height:v||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:f})}},74944:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return a}});var n=e(53360),c=e(69787);function a(d){var i=d.item,o=d.checked,f={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},v={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,c.jsxs)("div",{style:f,children:[(0,c.jsx)("div",{style:v}),(0,c.jsx)("strong",{children:i}),(0,c.jsx)("div",{children:"this is a radio"})]})}},45513:function(x,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return d}});var n=e(53360),c=e(43261),a=e(69787),d=(0,n.forwardRef)(function(i,o){var f=i.size,v=i.backgroundColor,h=i.children;return(0,a.jsx)("div",{ref:o,className:c.default.box,style:{width:f+"px",height:f+"px",backgroundColor:v},children:h})});d.displayName="Component"},22532:function(x,t,e){"use strict";e.r(t)},43261:function(x,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai","sqi-demo-motion":"lyPu5JRah80EXpc61PWj","sqi-demo-motion-preEnter":"wq8WrD6Ji_cIyktNYUsJ","sqi-demo-motion-exiting":"yRmFPwtGXTMctvysu9rP","sqi-demo-motion-entered":"rmokT3yXIS0BKvSg921n","sqi-demo-motion-exited":"XDMMMhdu0RkwQBzK1_dJ"}},52342:function(x,t,e){"use strict";e.r(t)},34481:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 css \u9690\u85CF\u7EC4\u4EF6",paraId:4}]},97302:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},81955:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},15096:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},38427:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},68291:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactN`ode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},18070:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},50409:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},50310:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u8F93\u5165\u6846\u7EC4\u4EF6",paraId:10,tocIndex:11},{value:"InputProps",paraId:10,tocIndex:11},{value:"\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u63CF\u8FF0",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"type",paraId:11,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:11,tocIndex:12},{value:"MDN",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"text",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:11,tocIndex:12},{value:"ConfigSize",paraId:11,tocIndex:12},{value:"md",paraId:11,tocIndex:12},{value:"status",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:11,tocIndex:12},{value:"success",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"warning",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"error",paraId:11,tocIndex:12},{value:"tips",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"allowClear",paraId:11,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"align",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"center",paraId:11,tocIndex:12},{value:" |",paraId:11,tocIndex:12},{value:"right",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"variant",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"borderless",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"underline",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"addonBefore",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"addonAfter",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"prefix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"suffix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"visibilityToggle",paraId:11,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"VisibilityToggle",paraId:12,tocIndex:12},{value:"maxLength",paraId:11,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:11,tocIndex:12},{value:"number",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"MaxLength",paraId:13,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:11,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:14,tocIndex:13},{value:"\u63CF\u8FF0",paraId:14,tocIndex:13},{value:"\u7C7B\u578B",paraId:14,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:13},{value:"visible",paraId:14,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:14,tocIndex:13},{value:"boolean",paraId:14,tocIndex:13},{value:"renderIcon",paraId:14,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:14,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:14,tocIndex:13},{value:"onVisibleChange",paraId:14,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:14,tocIndex:13},{value:"(visible: boolean) => void",paraId:14,tocIndex:13},{value:"\u5C5E\u6027",paraId:15,tocIndex:14},{value:"\u63CF\u8FF0",paraId:15,tocIndex:14},{value:"\u7C7B\u578B",paraId:15,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:14},{value:"length",paraId:15,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:15,tocIndex:14},{value:"number",paraId:15,tocIndex:14},{value:"showLimit",paraId:15,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14},{value:"true",paraId:15,tocIndex:14},{value:"errorOnly",paraId:15,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14}]},65793:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},18328:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684 ",paraId:1,tocIndex:6},{value:"SpaceProps",paraId:1,tocIndex:6},{value:" \u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u4E3A Markdown \u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:2,tocIndex:6},{value:"\u63CF\u8FF0",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"size",paraId:2,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:2,tocIndex:6},{value:"SizeType",paraId:3,tocIndex:6},{value:" | ",paraId:2,tocIndex:6},{value:"[SizeType, SizeType]",paraId:2,tocIndex:6},{value:"direction",paraId:2,tocIndex:6},{value:"\u65B9\u5411",paraId:2,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:2,tocIndex:6},{value:"'horizontal'",paraId:2,tocIndex:6},{value:"align",paraId:2,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:2,tocIndex:6},{value:"wrap",paraId:2,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"split",paraId:2,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:2,tocIndex:6},{value:"ReactNode",paraId:2,tocIndex:6},{value:"\u5C5E\u6027",paraId:4,tocIndex:7},{value:"\u63CF\u8FF0",paraId:4,tocIndex:7},{value:"\u7C7B\u578B",paraId:4,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:7},{value:"SizeType",paraId:4,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:4,tocIndex:7},{value:"ConfigSize",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"number",paraId:4,tocIndex:7},{value:"|",paraId:4,tocIndex:7},{value:"undefined",paraId:4,tocIndex:7}]},8825:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 Popover \u7EC4\u4EF6\uFF08\u89C4\u5212\u4E2D\uFF09\u6765\u66FF\u4EE3 Trigger \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popperjs \u7684\u57FA\u7840\u529F\u80FD\uFF08\u903B\u8F91\u5B9E\u73B0\u5F88\u810F\uFF0C\u4E14\u5F88\u591A\u60C5\u51B5\u672A\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:2,tocIndex:1},{value:"table th tr",paraId:2,tocIndex:1},{value:" \u4E0B\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0Ccss ",paraId:2,tocIndex:1},{value:"will-change transform",paraId:2,tocIndex:1},{value:" \u7B49\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF09",paraId:2,tocIndex:1},{value:"\u540E\u7EED\u53EF\u80FD\u4F1A\u5BF9\u5B9A\u4F4D\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C\u6709\u80FD\u529B\u91CD\u5199\u7684\u8BDD\uFF0CI am very vegetable :)",paraId:3,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:4},{value:"\u5F53 ",paraId:5},{value:"direction",paraId:5},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:5},{value:"top",paraId:5},{value:" \u548C ",paraId:5},{value:"bottom",paraId:5},{value:" \u65F6\uFF0C",paraId:5},{value:"offset",paraId:5},{value:" ",paraId:5},{value:"\u4EC5 y \u8F74",paraId:5},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C",paraId:5},{value:"\u5F53 ",paraId:5},{value:"direction",paraId:5},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:5},{value:"left",paraId:5},{value:" \u548C ",paraId:5},{value:"right",paraId:5},{value:" \u65F6\uFF0C",paraId:5},{value:"offset",paraId:5},{value:" ",paraId:5},{value:"\u4EC5 x \u8F74",paraId:5},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C\u3002",paraId:5},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popper \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08\u4E5F\u4E0D\u662F\u8BEF\u5DEE\uFF0C\u800C\u662F\u6B64\u65F6 popper \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:6},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:7,tocIndex:2},{value:"transform",paraId:7,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:7,tocIndex:2}]},6321:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
import { getReactNodeRef, getRefDom } from '../_util/dom';
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
    return getRefDom(elementRef) as HTMLElement;
  };

  useImperativeHandle(ref, () => getDomElement());

  const throttleResize = onResize ? throttle(onResize, throttleMs) : undefined;

  useResizeObserver(getDomElement(), throttleResize, !disabled);

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

/**
 * \u5E38\u89C4 ref \u900F\u7A7F\u83B7\u53D6\u771F\u5B9E dom
 * @param node
 * @returns
 */
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

/**
 * \u7279\u6B8A ref\uFF0C\u6BD4\u5982 forward \u591A\u4E2A ref
 * @param domRef
 * @returns
 */
export function getRefDom(node: React.RefObject<any>) {
  if (!node) return;

  if (node.current && typeof node.current === 'object' && 'currentElement' in node.current) {
    return node.current.currentElement;
  }
  return node.current;
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
`},96443:function(x,t){"use strict";t.Z=`.sqi-trigger-demo-motion {
  /* overflow: hidden; */
  transition: opacity 0.25s ease-in-out;
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
`},41010:function(x,t){"use strict";t.Z=`import React from 'react';
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
      motion={{ timeout: 250, name: 'trigger-demo', mountOnEnter: true, preEnter: true }}
      // arrow={<div style={{ width: 12, height: 12, backgroundColor: 'red' }}></div>}
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
`},27833:function(x,t,e){"use no memo";"use strict";var n=Object.create,c=Object.defineProperty,a=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,i=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,f=(P,O)=>{for(var M in O)c(P,M,{get:O[M],enumerable:!0})},v=(P,O,M,Z)=>{if(O&&typeof O=="object"||typeof O=="function")for(let F of d(O))!o.call(P,F)&&F!==M&&c(P,F,{get:()=>O[F],enumerable:!(Z=a(O,F))||Z.enumerable});return P},h=(P,O,M)=>(M=P!=null?n(i(P)):{},v(O||!P||!P.__esModule?c(M,"default",{value:P,enumerable:!0}):M,P)),p=P=>v(c({},"__esModule",{value:!0}),P),m={};f(m,{$dispatcherGuard:()=>J,$makeReadOnly:()=>A,$reset:()=>oe,$structuralCheck:()=>re,c:()=>C,clearRenderCounterRegistry:()=>z,renderCounterRegistry:()=>L,useRenderCounter:()=>H}),x.exports=p(m);var l=h(e(53360)),{useRef:u,useEffect:I,isValidElement:s}=l,r,R=(r=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)!=null?r:l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.memo_cache_sentinel"),w,C=typeof((w=l.__COMPILER_RUNTIME)==null?void 0:w.c)=="function"?l.__COMPILER_RUNTIME.c:function(O){return l.useMemo(()=>{const M=new Array(O);for(let Z=0;Z<O;Z++)M[Z]=E;return M[E]=!0,M},[])},B={};["readContext","useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","unstable_isNewReconciler","getCacheSignal","getCacheForType","useCacheRefresh"].forEach(P=>{B[P]=()=>{throw new Error(`[React] Unexpected React hook call (${P}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)}});var S=null;B.useMemoCache=P=>{if(S==null)throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");return S.useMemoCache(P)};function K(P){return R.ReactCurrentDispatcher.current=P,R.ReactCurrentDispatcher.current}var Y=[];function J(P){const O=R.ReactCurrentDispatcher.current;if(P===0){if(Y.push(O),Y.length===1&&(S=O),O===B)throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");K(B)}else if(P===1){const M=Y.pop();if(M==null)throw new Error("React Compiler internal error: unexpected null in guard stack");Y.length===0&&(S=null),K(M)}else if(P===2)Y.push(O),K(S);else if(P===3){const M=Y.pop();if(M==null)throw new Error("React Compiler internal error: unexpected null in guard stack");K(M)}else throw new Error("React Compiler internal error: unreachable block"+P)}function oe(P){for(let O=0;O<P.length;O++)P[O]=E}function A(){throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")}var L=new Map;function z(){for(const P of L.values())P.forEach(O=>{O.count=0})}function W(P,O){let M=L.get(P);M==null&&(M=new Set,L.set(P,M)),M.add(O)}function k(P,O){const M=L.get(P);M!=null&&M.delete(O)}function H(P){const O=u(null);O.current!=null&&(O.current.count+=1),I(()=>{if(O.current==null){const M={count:0};W(P,M),O.current=M}return()=>{O.current!==null&&k(P,O.current)}})}var j=new Set;function re(P,O,M,Z,F,Ce){function G(D,T,q,b){const pe=`${Z}:${Ce} [${F}] ${M}${q} changed from ${D} to ${T} at depth ${b}`;j.has(pe)||(j.add(pe),console.error(pe))}const ue=2;function ce(D,T,q,b){if(!(b>ue)){if(D===T)return;if(typeof D!=typeof T)G(`type ${typeof D}`,`type ${typeof T}`,q,b);else if(typeof D=="object"){const pe=Array.isArray(D),ye=Array.isArray(T);if(D===null&&T!==null)G("null",`type ${typeof T}`,q,b);else if(T===null)G(`type ${typeof D}`,"null",q,b);else if(D instanceof Map)if(!(T instanceof Map))G("Map instance","other value",q,b);else if(D.size!==T.size)G(`Map instance with size ${D.size}`,`Map instance with size ${T.size}`,q,b);else for(const[g,$]of D)T.has(g)?ce($,T.get(g),`${q}.get(${g})`,b+1):G(`Map instance with key ${g}`,`Map instance without key ${g}`,q,b);else if(T instanceof Map)G("other value","Map instance",q,b);else if(D instanceof Set)if(!(T instanceof Set))G("Set instance","other value",q,b);else if(D.size!==T.size)G(`Set instance with size ${D.size}`,`Set instance with size ${T.size}`,q,b);else for(const g of T)D.has(g)||G(`Set instance without element ${g}`,`Set instance with element ${g}`,q,b);else if(T instanceof Set)G("other value","Set instance",q,b);else if(pe||ye)if(pe!==ye)G(`type ${pe?"array":"object"}`,`type ${ye?"array":"object"}`,q,b);else if(D.length!==T.length)G(`array with length ${D.length}`,`array with length ${T.length}`,q,b);else for(let g=0;g<D.length;g++)ce(D[g],T[g],`${q}[${g}]`,b+1);else if(s(D)||s(T))s(D)!==s(T)?G(`type ${s(D)?"React element":"object"}`,`type ${s(T)?"React element":"object"}`,q,b):D.type!==T.type?G(`React element of type ${D.type}`,`React element of type ${T.type}`,q,b):ce(D.props,T.props,`[props of ${q}]`,b+1);else{for(const g in T)g in D||G(`object without key ${g}`,`object with key ${g}`,q,b);for(const g in D)g in T?ce(D[g],T[g],`${q}.${g}`,b+1):G(`object with key ${g}`,`object without key ${g}`,q,b)}}else{if(typeof D=="function")return;isNaN(D)||isNaN(T)?isNaN(D)!==isNaN(T)&&G(`${isNaN(D)?"NaN":"non-NaN value"}`,`${isNaN(T)?"NaN":"non-NaN value"}`,q,b):D!==T&&G(D,T,q,b)}}}ce(P,O,"",0)}},11607:function(x,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler");Symbol.for("react.provider");var i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),l=Symbol.for("react.view_transition"),u=Symbol.for("react.client.reference");function I(s){if(typeof s=="object"&&s!==null){var r=s.$$typeof;switch(r){case e:switch(s=s.type,s){case c:case d:case a:case v:case h:case l:return s;default:switch(s=s&&s.$$typeof,s){case o:case f:case m:case p:return s;case i:return s;default:return r}}case n:return r}}}t.ContextConsumer=i,t.ContextProvider=o,t.Element=e,t.ForwardRef=f,t.Fragment=c,t.Lazy=m,t.Memo=p,t.Portal=n,t.Profiler=d,t.StrictMode=a,t.Suspense=v,t.SuspenseList=h,t.isContextConsumer=function(s){return I(s)===i},t.isContextProvider=function(s){return I(s)===o},t.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===e},t.isForwardRef=function(s){return I(s)===f},t.isFragment=function(s){return I(s)===c},t.isLazy=function(s){return I(s)===m},t.isMemo=function(s){return I(s)===p},t.isPortal=function(s){return I(s)===n},t.isProfiler=function(s){return I(s)===d},t.isStrictMode=function(s){return I(s)===a},t.isSuspense=function(s){return I(s)===v},t.isSuspenseList=function(s){return I(s)===h},t.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===c||s===d||s===a||s===v||s===h||typeof s=="object"&&s!==null&&(s.$$typeof===m||s.$$typeof===p||s.$$typeof===o||s.$$typeof===i||s.$$typeof===f||s.$$typeof===u||s.getModuleId!==void 0)},t.typeOf=I},81184:function(x,t,e){"use strict";x.exports=e(11607)},37797:function(x,t,e){"use strict";e.d(t,{D:function(){return c}});var n=e(53360);function c(a,d,i){const o=(0,n.useRef)({});return(!("value"in o.current)||i(o.current.condition,d))&&(o.current.value=a(),o.current.condition=d),o.current.value}},60164:function(x,t,e){"use strict";e.d(t,{L:function(){return d}});var n=e(53360),c=e(34028);const d=(0,c.J)()?n.useLayoutEffect:n.useEffect},7657:function(x,t,e){"use strict";e.d(t,{S:function(){return c}});var n=e(53360);function c(a){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return(0,n.useMemo)(()=>{const o=U(U({},d),i),f=U({},a);for(const v in o)f[v]===void 0&&(f[v]=o[v]);return f},[a,d,i])}},62222:function(x,t,e){"use strict";e.d(t,{R:function(){return d}});var n=e(53360),c=e(80703),a=e(45844);function d(i,o){const{defaultValue:f,value:v,onChange:h}=o||{},[p,m]=(0,n.useState)(()=>(0,c.o8)(v)?(0,c.o8)(f)?(0,c.mf)(i)?i():i:(0,c.mf)(f)?f():f:v),l=(0,a.D)(v),u=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(u.current){u.current=!1;return}(0,c.o8)(v)&&l.current!==v&&m(v)},[v]);const I=(0,c.o8)(v)?p:v,s=(0,n.useCallback)(r=>{const R=(0,c.mf)(r)?r(I):r;(0,c.o8)(v)&&m(R),!Object.is(R,I)&&(h==null||h(R))},[p,I]);return[I,s]}},45844:function(x,t,e){"use strict";e.d(t,{D:function(){return c}});var n=e(53360);function c(a){const d=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{d.current=a},[a]),d}},8240:function(x,t,e){"use strict";e.d(t,{y:function(){return i}});var n=e(53360),c=e(20759),a=e(34028),d=e(60164);function i(o,f){let v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const h=(0,n.useRef)(null);h.current=f,(0,d.L)(()=>{let p=null;if(!v||!(0,a.J)()||!o)return;const m=l=>{var u;(u=h.current)==null||u.call(h,l)};return p=new c.Z(m),p.observe(o),()=>{if(p&&o){var l;p.unobserve(o),(l=p.disconnect)==null||l.call(p),p=null}}},[o,v])}},31136:function(x,t,e){"use strict";e.d(t,{Z:function(){return a}});var n=e(53360);const a=(0,n.createContext)({})},37907:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(7829),a=e(31136);const d=(0,n.forwardRef)((o,f)=>{const E=o,{svg:v,type:h,spin:p,rotate:m,className:l,style:u}=E,I=Ke(E,["svg","type","spin","rotate","className","style"]),{prefixCls:s="sqi"}=(0,n.useContext)(a.Z),r=(0,c.default)(`${s}-icon`,{[`${s}-icon-spin`]:!!p&&!!v},l),R=u||{};return Number.isSafeInteger(m)&&(R.transform=`rotate(${m}deg)`),n.createElement("span",U({role:"img",ref:f,"aria-label":h,className:r,style:R},I),v)});d.displayName="Icon";const i=d},46874:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"add",ref:f},o)));d.displayName="AddIcon";const i=d},1824:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"browse",ref:f},o)));d.displayName="BrowseIcon";const i=d},85569:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"browse-off",ref:f},o)));d.displayName="BrowseOffIcon";const i=d},23436:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"check-circle-filled",ref:f},o)));d.displayName="CheckCircleFilledIcon";const i=d},46608:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"chevron-down",ref:f},o)));d.displayName="ChevronDownIcon";const i=d},58360:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"close-circle-filled",ref:f},o)));d.displayName="CloseCircleFilledIcon";const i=d},27377:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"close",ref:f},o)));d.displayName="CloseIcon";const i=d},50397:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"info-circle-filled",ref:f},o)));d.displayName="InfoCircleFilledIcon";const i=d},60333:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"loading",ref:f},o)));d.displayName="LoadingIcon";const i=d},36106:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"search",ref:f},o)));d.displayName="SearchIcon";const i=d},65466:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"upload",ref:f},o)));d.displayName="UploadIcon";const i=d},21925:function(x,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),c=e(37907);function a(o){return(0,n.createElement)("svg",U({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const d=(0,n.forwardRef)((o,f)=>(0,n.createElement)(c.Z,U({svg:(0,n.createElement)(a),type:"warn-circle-filled",ref:f},o)));d.displayName="WarnCircleFilledIcon";const i=d},5629:function(x,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return a.Z},BrowseIcon:function(){return i.Z},BrowseOffIcon:function(){return d.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return f.Z},CloseCircleFilledIcon:function(){return v.Z},CloseIcon:function(){return h.Z},IconContext:function(){return c.Z},InfoCircleFilledIcon:function(){return p.Z},LoadingIcon:function(){return m.Z},SearchIcon:function(){return l.Z},UploadIcon:function(){return u.Z},WarnCircleFilledIcon:function(){return I.Z},default:function(){return s}});var n=e(37907),c=e(31136),a=e(46874),d=e(85569),i=e(1824),o=e(23436),f=e(46608),v=e(58360),h=e(27377),p=e(50397),m=e(60333),l=e(36106),u=e(65466),I=e(21925);const s=n.Z},34028:function(x,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(x,t,e){"use strict";e.d(t,{D:function(){return n}});function n(c,a){let d=null;const i=function(){for(var o=arguments.length,f=new Array(o),v=0;v<o;v++)f[v]=arguments[v];d&&clearTimeout(d),d=setTimeout(()=>{c.apply(this,f),d=null},a)};return i.cancel=()=>{d&&(clearTimeout(d),d=null)},i}},80703:function(x,t,e){"use strict";e.d(t,{HD:function(){return i},Kn:function(){return o},Qr:function(){return f},hj:function(){return v},kJ:function(){return d},mf:function(){return c},o8:function(){return a}});const n=Object.prototype.toString;function c(h){return n.call(h)==="[object Function]"}function a(h){return h===void 0}function d(h){return n.call(h)==="[object Array]"}function i(h){return n.call(h)==="[object String]"}const o=h=>n.call(h)==="[object Object]",f=h=>{if(!o(h))return!0;for(const p in h)if(Object.prototype.hasOwnProperty.call(h,p))return!1;return!0},v=h=>n.call(h)==="[object Number]"&&h===h},12598:function(x,t,e){"use strict";e.d(t,{C:function(){return n}});function n(c,a){const d=Object.assign({},c);return Array.isArray(a)&&a.forEach(i=>{delete d[i]}),d}},6890:function(x,t,e){"use strict";e.d(t,{P:function(){return c}});var n=e(78831);function c(a,d){let i=null;const o=(0,n.D)(a,d),f=function(){for(var v=arguments.length,h=new Array(v),p=0;p<v;p++)h[p]=arguments[p];i===null?i=Date.now():Date.now()-i>=d&&(i=Date.now(),o.cancel()),o(...h)};return f.cancel=o.cancel,f}},92266:function(x,t,e){"use strict";e.d(t,{C:function(){return d},Z:function(){return i}});var n=e(53360),c=e(7829),a=e(62222);const d=(0,n.forwardRef)((o,f)=>{const K=o,{prefixCls:v,className:h,style:p,checked:m,disabled:l,defaultChecked:u=!1,type:I="checkbox",title:s,onChange:r,_getCheckedValue:R}=K,E=Ke(K,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[w,C]=(0,a.R)(u,{value:m});(0,n.useEffect)(()=>{R==null||R(w)},[w]);const B=(0,c.default)(v,h,{[`${v}-checked`]:w,[`${v}-disabled`]:l}),S=Y=>{l||("checked"in o||C(Y.target.checked),r==null||r({target:Ee(U({},o),{checked:Y.target.checked}),event:Y}))};return n.createElement("span",{className:B,title:s,style:p},n.createElement("input",Ee(U({},E),{className:`${v}-input`,ref:f,onChange:S,disabled:l,checked:w,type:I})),n.createElement("span",{className:`${v}-inner`}))});d.displayName="BaseCheckbox";const i=d},40549:function(x,t,e){"use strict";e.d(t,{Z:function(){return f}});var n=e(53360),c=e(7829),a=e(64508),d=e(80703),i=e(57577);const o=(0,n.forwardRef)((v,h)=>{const p=(0,n.useContext)(i.E),C=v,{children:m,name:l,prefixCls:u}=C,I=Ke(C,["children","name","prefixCls"]),[s,r]=(0,a.Y)(I),R=(0,n.isValidElement)(m);(0,n.useImperativeHandle)(h,()=>({toggle:r}));const E=`${u||p.prefixCls}${l?`-${l}`:""}`,w=(0,c.default)([`${E}-motion`],{[`${E}-motion-${s.status}`]:s.status});return(0,d.mf)(m)?s.isMounted?m(Ee(U({},s),{className:w,toggle:r})):null:R?s.isMounted?(0,n.cloneElement)(m,{className:(0,c.default)(m.props.className,w)}):null:m});o.displayName="CSSMotion";const f=o},4814:function(x,t,e){"use strict";e.d(t,{sQ:function(){return i},t4:function(){return p},x1:function(){return f}});var n=e(37797),c=e(80703),a=e(53360),d=e(11607);const i=function(){for(var m=arguments.length,l=new Array(m),u=0;u<m;u++)l[u]=arguments[u];const I=l.filter(Boolean);return I.length<=1?I[0]:s=>{l.forEach(r=>{o(r,s)})}},o=(m,l)=>{(0,c.mf)(m)?m(l):(0,c.Kn)(m)&&"current"in m&&(m.current=l)},f=function(){for(var m=arguments.length,l=new Array(m),u=0;u<m;u++)l[u]=arguments[u];return(0,n.D)(()=>i(...l),l,(I,s)=>I.length!==s.length||I.every((r,R)=>r!==s[R]))},v=m=>{var l,u;if(!m)return!1;const I=parseInt(a.version);if(h(m)&&I>=19)return!0;const s=(0,d.isMemo)(m)?m.type.type:m.type;return!(typeof s=="function"&&!((l=s.prototype)!=null&&l.render)&&s.$$typeof!==d.ForwardRef||typeof m=="function"&&!((u=m.prototype)!=null&&u.render)&&m.$$typeof!==d.ForwardRef)};function h(m){return(0,a.isValidElement)(m)&&!(0,d.isFragment)(m)}const p=m=>h(m)&&v(m)},21299:function(x,t,e){"use strict";e.d(t,{q:function(){return a}});var n=e(53360),c=e(11607);function a(d){let i=[];return n.Children.toArray(d).forEach(o=>{o!=null&&(Array.isArray(o)?i=i.concat(a(o)):(0,n.isValidElement)(o)&&(0,c.isFragment)(o)&&o.props?i=i.concat(a(o.props.children)):i.push(o))}),i}},69203:function(x,t,e){"use strict";e.d(t,{b:function(){return r}});var n=e(27833),c=e(53360),a=e(7829),d=e(7657),i=e(23436),o=e(50397),f=e(58360),v=e(21925),h=e(27377),p=e(40549),m=e(57577);const l={type:"info",showIcon:!0},u={success:i.Z,info:o.Z,error:f.Z,warning:v.Z},I=(0,c.forwardRef)((E,w)=>{const C=(0,n.c)(38),{prefixCls:B,componentConfig:S}=(0,c.useContext)(m.E),{className:K,style:Y,title:J,description:oe,type:A,closable:L,showIcon:z,action:W,icon:k,onClose:H}=(0,d.S)(E,l,S==null?void 0:S.Alert),j=(0,c.useRef)(null);let re;C[0]!==k||C[1]!==A?(re=()=>(0,c.isValidElement)(k)?k:A?(0,c.createElement)(u[A]):null,C[0]=k,C[1]=A,C[2]=re):re=C[2];const P=re,O=`${B}-alert`,M=`${B}-alert-${A}`;let Z;C[3]!==K||C[4]!==O||C[5]!==M?(Z=(0,a.default)(O,M,K),C[3]=K,C[4]=O,C[5]=M,C[6]=Z):Z=C[6];const F=Z;let Ce;C[7]!==H?(Ce=$=>{var y;(y=j.current)==null||y.toggle(),H==null||H($)},C[7]=H,C[8]=Ce):Ce=C[8];const G=Ce;let ue;C[9]!==B||C[10]!==P||C[11]!==z?(ue=z&&c.createElement("div",{className:`${B}-alert-icon`},P()),C[9]=B,C[10]=P,C[11]=z,C[12]=ue):ue=C[12];const ce=`${B}-alert-content`;let D;C[13]!==B||C[14]!==J?(D=!!J&&c.createElement("div",{className:`${B}-alert-title`},J),C[13]=B,C[14]=J,C[15]=D):D=C[15];const T=`${B}-alert-description`;let q;C[16]!==oe||C[17]!==T?(q=c.createElement("div",{className:T},oe),C[16]=oe,C[17]=T,C[18]=q):q=C[18];let b;C[19]!==ce||C[20]!==D||C[21]!==q?(b=c.createElement("div",{className:ce},D,q),C[19]=ce,C[20]=D,C[21]=q,C[22]=b):b=C[22];let pe;C[23]!==W||C[24]!==B?(pe=W&&c.createElement("div",{className:`${B}-alert-action`},W),C[23]=W,C[24]=B,C[25]=pe):pe=C[25];let ye;C[26]!==L||C[27]!==G||C[28]!==B?(ye=L&&c.createElement("button",{className:`${B}-alert-close`,onClick:G},c.createElement(h.Z,null)),C[26]=L,C[27]=G,C[28]=B,C[29]=ye):ye=C[29];let g;return C[30]!==F||C[31]!==w||C[32]!==Y||C[33]!==b||C[34]!==pe||C[35]!==ye||C[36]!==ue?(g=c.createElement(p.Z,{ref:j,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},c.createElement("div",{role:"alert",className:F,style:Y,ref:w},ue,b,pe,ye)),C[30]=F,C[31]=w,C[32]=Y,C[33]=b,C[34]=pe,C[35]=ye,C[36]=ue,C[37]=g):g=C[37],g});I.displayName="Alert";const r=I,R=null},60884:function(x,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(53360),c=e(7829),a=e(60333),d=e(7657),i=e(57577);const o={type:"default",variant:"default",htmlType:"button"},f=(0,n.forwardRef)((m,l)=>{const{prefixCls:u,size:I="md",componentConfig:s}=(0,n.useContext)(i.E),P=(0,d.S)(m,o,s==null?void 0:s.Button),{children:R,type:E,size:w=I,htmlType:C,status:B,loading:S,disabled:K,variant:Y,icon:J,href:oe,target:A,onClick:L,anchorProps:z={}}=P,W=Ke(P,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),k=S?n.createElement(a.Z,{spin:S}):J,H=oe?"link":E,j=(0,c.default)(`${u}-btn`,`${u}-btn-${H}`,{[`${u}-btn-size-${w}`]:w,[`${u}-btn-status-${B}`]:!!B,[`${u}-btn-variant-${Y}`]:Y,[`${u}-btn-loading`]:S,[`${u}-btn-disabled`]:K}),re=O=>{if(S||K)return void O.preventDefault();L==null||L(O)};return oe?n.createElement("a",Ee(U({},z),{href:oe,target:A,className:j,onClick:re,ref:l}),k,n.createElement("span",null,R)):n.createElement("button",Ee(U({},W),{type:C,className:j,onClick:re,ref:l}),k,n.createElement("span",null,R))});f.displayName="Button";const h=f,p=null},67824:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),c=e(7829),a=e(7657),d=e(45844),i=e(80703),o=e(92266),f=e(4814),v=e(57577),h=e(81372);const p={defaultChecked:!1,indeterminate:!1},m=(0,n.forwardRef)((u,I)=>{const{prefixCls:s,componentConfig:r}=(0,n.useContext)(v.E),R=(0,n.useContext)(h.w),H=(0,a.S)(u,p,r==null?void 0:r.Checkbox),{children:E,style:w,className:C,indeterminate:B}=H,S=Ke(H,["children","style","className","indeterminate"]),[K,Y]=(0,n.useState)(!1),J="disabled"in S?S.disabled:R.disabled,oe=(0,d.D)(S.value),A=(0,n.useRef)(null);(0,n.useEffect)(()=>{var j;(j=R.registerValue)==null||j.call(R,S.value)},[]),(0,n.useEffect)(()=>{if(S.value!==oe.current){var j,re;(j=R.unregisterValue)==null||j.call(R,oe.current),(re=R.registerValue)==null||re.call(R,S.value)}return()=>{var P;return(P=R.unregisterValue)==null?void 0:P.call(R,S.value)}},[S.value]),(0,n.useEffect)(()=>{A.current&&(A.current.indeterminate=B)},[B]);const L=U({},S);(0,i.Qr)(R)||(L.onChange=function(){for(var j=arguments.length,re=new Array(j),P=0;P<j;P++)re[P]=arguments[P];var O,M;(O=S.onChange)==null||O.call(S,...re),(M=R.toggleOption)==null||M.call(R,S.value)},L.name=R.name,L.checked=R.value.includes(S.value));const z=(0,c.default)(`${s}-checkbox-wrapper`,{[`${s}-checkbox-wrapper-checked`]:L.checked,[`${s}-checkbox-wrapper-disabled`]:J},C),W=j=>{if((0,i.mf)(E)){var re;j.preventDefault(),(re=A.current)==null||re.click()}},k=()=>(0,i.o8)(E)?null:(0,i.mf)(E)?E({checked:"checked"in L?!!L.checked:K}):n.createElement("span",{className:`${s}-checkbox-label`},E);return n.createElement("label",{className:z,onClick:W},n.createElement(o.C,Ee(U({},L),{type:"checkbox",ref:(0,f.sQ)(I,A),disabled:J,prefixCls:`${s}-checkbox`,className:(0,c.default)({[`${s}-checkbox-indeterminate`]:B}),style:Ee(U({},w),{display:(0,i.mf)(E)?"none":void 0}),_getCheckedValue:Y})),k())});m.displayName="Checkbox";const l=m},56104:function(x,t,e){"use strict";e.d(t,{Z:function(){return p}});var n=e(53360),c=e(7829),a=e(7657),d=e(80703),i=e(57577),o=e(81372),f=e(67824);const v={},h=(0,n.forwardRef)((m,l)=>{const{prefixCls:u,componentConfig:I}=(0,n.useContext)(i.E),s=(0,n.useId)(),O=(0,a.S)(m,v,I==null?void 0:I.CheckboxGroup),{defaultValue:r,children:R,options:E,className:w,style:C,disabled:B,name:S=s,onChange:K,renderOption:Y}=O,J=Ke(O,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[oe,A]=(0,n.useState)(J.value||r||[]),[L,z]=(0,n.useState)([]);(0,n.useEffect)(()=>{"value"in J&&A(J.value||[])},[J.value]);const W=(0,n.useCallback)(M=>{z(Z=>[...Z,M])},[]),k=(0,n.useCallback)(M=>{z(Z=>Z.filter(F=>F!==M))},[]),H=(0,n.useMemo)(()=>E==null?void 0:E.map(M=>(0,d.HD)(M)||(0,d.hj)(M)?{label:M,value:M}:M),[E]),j=(0,n.useCallback)(M=>{const Z=[...oe],F=oe.indexOf(M);F===-1?Z.push(M):Z.splice(F,1),"value"in J||A(Z);const Ce=Z.filter(G=>L.includes(G));K==null||K(Ce)},[oe,L,J,K]);let re=R;if((0,d.kJ)(H)&&H.length>0){const M=(0,d.mf)(Y);re=H.map(Z=>{const F=oe.includes(Z.value),Ce=M?()=>Y(Ee(U({},Z),{checked:F})):Z.label;return n.createElement(f.Z,{key:`checkbox-group-options-${Z.value}`,className:Z.className,style:Z.style,disabled:"disabled"in Z?Z.disabled:B,value:Z.value,checked:F,id:Z.id,title:Z.title,onChange:Z.onChange},Ce)})}const P=(0,n.useMemo)(()=>({name:S,value:oe,disabled:B,toggleOption:j,registerValue:W,unregisterValue:k}),[S,oe,B,j,W,k]);return n.createElement("div",{className:(0,c.default)(`${u}-checkbox-group`,w),style:C,ref:l},n.createElement(o.w.Provider,{value:P},re))});h.displayName="CheckboxGroup";const p=h},81372:function(x,t,e){"use strict";e.d(t,{w:function(){return c}});var n=e(53360);const c=(0,n.createContext)({})},89946:function(x,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return f},CheckboxGroup:function(){return v},default:function(){return h}});var n=e(67824),c=e(56104),a=e(558),d=e.n(a),i={};for(var o in a)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(i[o]=function(p){return a[p]}.bind(0,o));e.d(t,i);const f=n.Z;f.Group=c.Z;const v=f.Group,h=f},558:function(){},57577:function(x,t,e){"use strict";e.d(t,{$:function(){return c},E:function(){return a}});var n=e(53360);const c={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},a=(0,n.createContext)(c)},83405:function(x,t,e){"use strict";e.d(t,{i:function(){return v}});var n=e(27833),c=e(53360),a=e(12598),d=e(7657),i=e(31136),o=e(57577);function f(h){const p=(0,n.c)(11),m=(0,d.S)(h,o.$),{iconPrefix:l,children:u}=m;let I;p[0]!==m?(I=(0,a.C)(m,["children","iconPrefix"]),p[0]=m,p[1]=I):I=p[1];const s=I,r=l?i.Z.Provider:c.Fragment;let R;p[2]!==l?(R={prefixCls:l},p[2]=l,p[3]=R):R=p[3];let E;p[4]!==r||p[5]!==u||p[6]!==R?(E=c.createElement(r,{value:R},u),p[4]=r,p[5]=u,p[6]=R,p[7]=E):E=p[7];let w;return p[8]!==s||p[9]!==E?(w=c.createElement(o.E.Provider,{value:s},E),p[8]=s,p[9]=E,p[10]=w):w=p[10],w}f.displayName="ConfigProvider";const v=f},48380:function(x,t,e){"use strict";e.d(t,{i:function(){return v}});var n=e(53360),c=e(7829),a=e(7657),d=e(57577);const i={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((p,m)=>{const{prefixCls:l,componentConfig:u}=(0,n.useContext)(d.E),I=(0,a.S)(p,i,u==null?void 0:u.Divider),{direction:s,align:r,dashed:R,className:E,children:w,text:C,style:B}=I,S=w||C,K=s!=="vertical"&&!!S,Y=(0,c.default)(`${l}-divider`,{[`${l}-divider-${s}`]:s,[`${l}-divider-with-text`]:K,[`${l}-divider-with-text-${r}`]:K,[`${l}-divider-dashed`]:!!R,className:E});return n.createElement("div",{className:Y,style:B,ref:m},K&&n.createElement("span",{className:`${l}-divider-inner-text`},S))});o.displayName="Divider";const v=o,h=null},17599:function(x,t,e){"use strict";e.d(t,{J:function(){return oe},X:function(){return J}});var n=e(53360),c=e(7829),a=e(7657),d=e(80703),i=e(57577);const o=["xxl","xl","lg","md","sm","xs"],f={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},v=Object.keys(f),h=new Map;let p=-1,m={};const u={handlers:{},dispatch(A){return m=A,h.forEach(L=>L(m)),h.size>=1},subscribe(A){return h.size||this.register(),p+=1,h.set(p,A),A(m),p},unsubscribe(A){h.delete(A),h.size||this.unregister()},register(){v.forEach(A=>{const L=k=>{let{matches:H}=k;this.dispatch(Ee(U({},m),{[A]:H}))},z=f[A],W=window.matchMedia(z);W.addListener(L),this.handlers[z]={mql:W,listener:L},L(W)})},unregister(){v.forEach(A=>{const L=f[A],z=this.handlers[L];z==null||z.mql.removeListener(z==null?void 0:z.listener)}),h.clear()}},s=(0,n.createContext)({}),r={gutter:0,align:"start",justify:"start",wrap:!0},R=(0,n.forwardRef)((A,L)=>{const{prefixCls:z,componentConfig:W}=(0,n.useContext)(i.E),g=(0,a.S)(A,r,W==null?void 0:W.Row),{align:k,justify:H,gutter:j,className:re,wrap:P,children:O,style:M}=g,Z=Ke(g,["align","justify","gutter","className","wrap","children","style"]),[F,Ce]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const $=u.subscribe(y=>{((0,d.Kn)(j)||(0,d.kJ)(j)&&((0,d.Kn)(j[0])||(0,d.Kn)(j[1])))&&Ce(y)});return()=>u.unsubscribe($)},[]);const G=ue();function ue(){const $=[void 0,void 0];return((0,d.kJ)(j)?j:[j,void 0]).forEach((_,ae)=>{if((0,d.Kn)(_))for(let ie=0;ie<o.length;ie++){const de=o[ie];if(F[de]&&_[de]!==void 0){$[ae]=_[de];break}}else $[ae]=_}),$}const ce=(0,c.default)(`${z}-row`,{[`${z}-row-nowrap`]:P===!1,[`${z}-row-align-${k}`]:k,[`${z}-row-justify-${H}`]:H},re),[D,T]=G,q=(0,n.useMemo)(()=>({gutter:[D,T],wrap:P}),[D,T,P]),b={},pe=(0,d.hj)(D)&&D!==0,ye=(0,d.hj)(T)&&T!==0;if(pe||ye){const $=-D/2,y=-T/2;$&&(b.marginLeft=$,b.marginRight=$),y&&(b.marginTop=y,b.marginBottom=y)}return n.createElement(s.Provider,{value:q},n.createElement("div",Ee(U({},Z),{ref:L,className:ce,style:U(U({},M),b)}),O))});R.displayName="Row";const E=R,w={offset:0};function C(A){return(0,d.hj)(A)?`${A} ${A} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(A)?`0 0 ${A}`:A}const B=["xs","sm","md","lg","xl","xxl"],S=(A,L)=>{let z={};return B.forEach(W=>{const k=A[W];if(!k)return;let H={};(0,d.hj)(k)?H.span=k:(0,d.Kn)(k)&&(H=k),z=Ee(U({},z),{[`${L}-col-${W}-${H.span}`]:(0,d.hj)(H.span),[`${L}-col-${W}-order-${H.order}`]:H.order,[`${L}-col-${W}-offset-${H.offset}`]:H.offset})}),z},K=(0,n.forwardRef)((A,L)=>{const{componentConfig:z,prefixCls:W}=(0,n.useContext)(i.E),{gutter:k}=(0,n.useContext)(s),g=(0,a.S)(A,w,z==null?void 0:z.Col),{span:H,offset:j,children:re,className:P,style:O,flex:M,order:Z,xs:F,sm:Ce,md:G,lg:ue,xl:ce,xxl:D}=g,T=Ke(g,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),q=S({xs:F,sm:Ce,md:G,lg:ue,xl:ce,xxl:D},W),b=(0,c.default)(`${W}-col`,{[`${W}-col-${H}`]:(0,d.hj)(H),[`${W}-col-offset-${j}`]:j,[`${W}-col-order-${Z}`]:Z},q,P),pe={};if(k){const $=k[0]?k[0]/2:0,y=k[1]?k[1]/2:0;$&&(pe.paddingLeft=$,pe.paddingRight=$),y&&(pe.paddingTop=y,pe.paddingBottom=y)}const ye={};return M&&(ye.flex=C(M)),n.createElement("div",Ee(U({ref:L},T),{className:b,style:U(U(U({},O),ye),pe)}),re)});K.displayName="Col";const Y=K,J=E,oe=Y},45990:function(x,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return c.z},Col:function(){return f.J},ConfigProvider:function(){return i.i},Divider:function(){return o.i},Input:function(){return v.I},Row:function(){return f.X},Space:function(){return p.T}});var n=e(69203),c=e(60884),a=e(89946),l={};for(var d in a)["default","Alert","Button"].indexOf(d)<0&&(l[d]=function(u){return a[u]}.bind(0,d));e.d(t,l);var i=e(83405),o=e(48380),f=e(17599),v=e(38312),h=e(37663),l={};for(var d in h)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input"].indexOf(d)<0&&(l[d]=function(I){return h[I]}.bind(0,d));e.d(t,l);var p=e(92595),m=e(36112),l={};for(var d in m)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Radio","RadioButton","RadioGroup","Space"].indexOf(d)<0&&(l[d]=function(I){return m[I]}.bind(0,d));e.d(t,l)},38312:function(x,t,e){"use strict";e.d(t,{I:function(){return I}});var n=e(53360),c=e(7829),a=e(7657),d=e(62222),i=e(80703),o=e(58360),f=e(85569),v=e(1824),h=e(57577);const p={type:"text",size:"md",align:"left",visibilityToggle:!0};function m(r,R,E){let w;return w=r===null||(0,i.o8)(r)||(0,i.HD)(r)?r||"":String(r),(0,i.hj)(R)&&!E?w.slice(0,R):w}const l=(0,n.forwardRef)((r,R)=>{const{prefixCls:E,componentConfig:w}=(0,n.useContext)(h.E),Ze=(0,a.S)(r,p,w==null?void 0:w.Input),{size:C,status:B,align:S,disabled:K,allowClear:Y,placeholder:J,variant:oe="outline",addonBefore:A,addonAfter:L,prefix:z,suffix:W,value:k,defaultValue:H,type:j,className:re,style:P,readOnly:O,visibilityToggle:M,maxLength:Z,tips:F,onFocus:Ce,onBlur:G,onChange:ue}=Ze,ce=Ke(Ze,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),D=(0,n.useRef)(null),T=(0,n.useRef)(null);(0,n.useImperativeHandle)(R,()=>({currentElement:D.current,inputElement:T.current,focus:()=>{var ee;return(ee=T.current)==null?void 0:ee.focus()},blur:()=>{var ee;return(ee=T.current)==null?void 0:ee.blur()},select:()=>{var ee;return(ee=T.current)==null?void 0:ee.select()}}));const[q,b]=(0,n.useState)(!1),pe=ee=>{K||O||(b(!0),Ce==null||Ce(ee))},ye=ee=>{K||O||(b(!1),G==null||G(ee))},g=(0,i.hj)(Z)?Z:Z==null?void 0:Z.length,$=(0,i.hj)(Z)?!1:Z==null?void 0:Z.errorOnly,y=(0,i.hj)(Z)?!0:(Z==null?void 0:Z.showLimit)!==!1,[_,ae]=(0,d.R)(H,{value:k}),ie=m(_,g,$),de=(0,i.hj)(g)?ie.length>g:!1,ne=ee=>{const{value:he}=ee.target;ae(he),ue==null||ue(he,ee)},me=()=>{var ee;K||(ee=T.current)==null||ee.focus()},te=(0,c.default)(`${E}-input`,{[`${E}-input-variant-${oe}`]:oe,[`${E}-input-size-${C}`]:C,[`${E}-input-disabled`]:K,[`${E}-input-align-${S}`]:S,[`${E}-input-status-${B}`]:B,[`${E}-input-focus`]:q,[`${E}-input-limit-length-error`]:de},re),xe=(0,c.default)(`${E}-input-real`),X=Y&&ie&&!K,N=n.createElement(o.Z,null),ve=ee=>{ee.stopPropagation(),ae(""),ue==null||ue("",ee)},Re=X&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,c.default)(`${E}-input-suffix`,`${E}-input-clear`),onClick:ve},N),Q=(0,i.Kn)(M)&&!(0,i.o8)(M.visible),[fe,V]=(0,n.useState)(j);(0,n.useEffect)(()=>{V(Q?M.visible?"text":"password":j)},[j,Q,M==null?void 0:M.visible]);const le=()=>{if(K)return;const ee=fe==="password"?"text":"password";if(V(ee),Q){var he;(he=M.onVisibleChange)==null||he.call(M,ee==="text")}},se=j==="password",Be=(0,n.useMemo)(()=>se?(0,i.Kn)(M)&&(0,i.mf)(M.renderIcon)?M.renderIcon(fe==="text"):fe==="password"?n.createElement(f.Z,null):fe==="text"?n.createElement(v.Z,null):null:W,[se,fe,M,W]),Ie=(0,n.useMemo)(()=>function(ee){let{children:he}=ee;const Se=A||L;let Pe=he;return Se&&(Pe=n.createElement("div",{ref:D,className:`${E}-input-group`},Pe)),F&&(Pe=n.createElement("div",{ref:D,className:`${E}-input-group-extra`},Pe)),Pe},[A,L,F]),Oe=z&&n.createElement("span",{className:`${E}-input-prefix`},z),we=Be&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,c.default)(`${E}-input-suffix`,{[`${E}-input-suffix-password`]:se}),onClick:le,onMouseDown:ee=>ee.preventDefault(),onMouseUp:ee=>ee.preventDefault()},Be),be=(0,i.hj)(g)&&y&&n.createElement("span",{className:`${E}-input-limit-length-text`},ie.length,"/",g),Le=F&&n.createElement("div",{className:(0,c.default)(`${E}-input-tips`,{[`${E}-input-tips-status-${B}`]:B})},F),Ae=n.createElement("span",{ref:A||L?void 0:D,className:te,style:P,onClick:me},Oe,n.createElement("input",Ee(U({ref:T},ce),{type:fe,value:ie,readOnly:O,className:xe,placeholder:J,disabled:K,onChange:ne,onFocus:pe,onBlur:ye})),Re,we,be),Ne=A&&n.createElement("span",{className:(0,c.default)(`${E}-input-group-addon`)},A),Fe=L&&n.createElement("span",{className:(0,c.default)(`${E}-input-group-addon`)},L);return n.createElement(Ie,null,Ne,Ae,Fe,Le)});l.displayName="Input";const I=l,s=null},74052:function(x,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(53360),c=e(7829),a=e(7657),d=e(80703),i=e(92266),o=e(4814),f=e(57577),v=e(83595);const h={defaultChecked:!1},p=(0,n.forwardRef)((l,u)=>{const{prefixCls:I,componentConfig:s}=(0,n.useContext)(f.E),r=(0,n.useContext)(v.Z),j=(0,a.S)(l,h,s==null?void 0:s.Radio),{_IS_BUTTON_:R,value:E,children:w,style:C}=j,B=Ke(j,["_IS_BUTTON_","value","children","style"]),S=re=>{var P,O;(P=B.onChange)==null||P.call(B,re),r==null||(O=r.onChange)==null||O.call(r,re)},K=U({},B);let Y="md";if(!(0,d.Qr)(r)){K.name=r.name,K.onChange=S,K.checked=E===r.value;var J;K.disabled=(J=K.disabled)!=null?J:r.disabled,Y=r.size?r.size:Y}const[oe,A]=(0,n.useState)(!1),L=R?`${I}-radio-button`:`${I}-radio`,z=(0,c.default)(`${L}-wrapper`,{[`${L}-wrapper-disabled`]:K.disabled,[`${L}-wrapper-checked`]:K.checked,[`${L}-wrapper-size-${Y}`]:Y,[`${L}-wrapper-filled`]:r.buttonVariant==="filled"}),W=()=>(0,d.o8)(w)?null:(0,d.mf)(w)?w({checked:"checked"in K?!!K.checked:oe}):n.createElement("span",{className:`${L}-label`},w),k=(0,n.useRef)(null),H=re=>{if((0,d.mf)(w)){var P;re.preventDefault(),(P=k.current)==null||P.click()}};return n.createElement("label",{className:z,onClick:H},n.createElement(i.Z,Ee(U(U({},B),K),{ref:(0,o.sQ)(u,k),value:E,type:"radio",prefixCls:L,style:Ee(U({},C),{display:(0,d.mf)(w)?"none":void 0}),disabled:K.disabled,_getCheckedValue:A})),W())});p.displayName="Radio";const m=p},89312:function(x,t,e){"use strict";e.d(t,{Z:function(){return o}});var n=e(27833),c=e.n(n),a=e(53360),d=e(74052);const i=(0,a.forwardRef)((f,v)=>{const h=(0,n.c)(3);let p;return h[0]!==f||h[1]!==v?(p=a.createElement(d.Z,Ee(U({_IS_BUTTON_:!0},f),{ref:v})),h[0]=f,h[1]=v,h[2]=p):p=h[2],p});i.displayName="RadioButton";const o=i},59803:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),c=e(7829),a=e(7657),d=e(62222),i=e(80703),o=e(57577),f=e(83595),v=e(74052),h=e(89312);const p={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},m=(0,n.forwardRef)((u,I)=>{const{prefixCls:s,componentConfig:r}=(0,n.useContext)(o.E),R=(0,a.S)(u,p,r==null?void 0:r.RadioGroup),E=(0,n.useId)(),{className:w,style:C,name:B=E,value:S,defaultValue:K,children:Y,disabled:J,size:oe,buttonVariant:A,renderOption:L,onChange:z,appearance:W,options:k}=R,[H,j]=(0,d.R)(K,{value:S}),re=(0,n.useCallback)(Z=>{const F=Z.target.value;"value"in R||j(F),F!==H&&(z==null||z(Z))},[H,z]);let P=Y;const O=W==="button"?h.Z:v.Z;if((0,i.kJ)(k)&&k.length>0){const Z=(0,i.mf)(L);P=k.map(F=>{if((0,i.HD)(F)||(0,i.hj)(F)){const ue=H===F,ce=Z?()=>L({label:F,value:F,checked:ue}):F;return n.createElement(O,{key:F.toString(),disabled:J,value:F,checked:ue},ce)}const Ce=H===F.value,G=Z?()=>L(Ee(U({},F),{checked:Ce})):F.label;return n.createElement(O,{key:`radio-group-options-${F.value}`,className:F.className,style:F.style,disabled:F.disabled||J,value:F.value,checked:Ce,id:F.id,title:F.title,onChange:F.onChange},G)})}const M=(0,n.useMemo)(()=>({name:B,value:H,disabled:J,size:oe,buttonVariant:A,onChange:re}),[B,S,J,oe,A,re]);return n.createElement("div",{ref:I,className:(0,c.default)(`${s}-radio-group`,w),style:C},n.createElement(f.Z.Provider,{value:M},P))});m.displayName="RadioGroup";const l=m},83595:function(x,t,e){"use strict";e.d(t,{Z:function(){return a}});var n=e(53360);const a=(0,n.createContext)({})},37663:function(x,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return v},RadioButton:function(){return p},RadioGroup:function(){return h},default:function(){return m}});var n=e(74052),c=e(89312),a=e(59803),d=e(63149),i=e.n(d),o={};for(var f in d)["default","Radio","RadioButton","RadioGroup"].indexOf(f)<0&&(o[f]=function(l){return d[l]}.bind(0,f));e.d(t,o);const v=n.Z;v.Group=a.Z,v.Button=c.Z;const h=v.Group,p=v.Button,m=v},63149:function(){},92595:function(x,t,e){"use strict";e.d(t,{T:function(){return m}});var n=e(53360),c=e(7829),a=e(80703),d=e(7657),i=e(21299),o=e(57577);const f={sm:8,md:16,lg:24},v={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((u,I)=>{const{prefixCls:s,size:r="md",componentConfig:R}=(0,n.useContext)(o.E),H=(0,d.S)(u,v,R==null?void 0:R.Space),{className:w,children:C,size:B=r,direction:S="horizontal",align:K,split:Y,wrap:J=!1}=H,oe=Ke(H,["className","children","size","direction","align","split","wrap"]),A=(0,i.q)(C),L=S==="horizontal"&&K===void 0?"center":K,z=(0,c.default)(`${s}-space`,`${s}-space-direction-${S}`,{[`${s}-space-align-${L}`]:L,[`${s}-space-wrap`]:J},w),W=(0,n.useCallback)(j=>{const re=(0,a.kJ)(B)?B:[B,B],[P,O]=re.map(M=>(0,a.HD)(M)?f[M]:M||0);return J?{marginRight:P,marginBottom:O}:S==="vertical"?{marginBottom:O}:{marginRight:j?void 0:P}},[B]),k=A.map((j,re)=>{const P=re===A.length-1;return n.createElement(n.Fragment,{key:`space-item-${re}`},n.createElement("div",{className:"space-item",style:W(P)},j),!P&&Y&&n.createElement("span",{className:"sqi-space-item-split"},Y))});return n.createElement("div",Ee(U({className:z},oe),{ref:I}),k)});h.displayName="Space";const m=h,l=null},67171:function(x,t,e){"use strict";e.d(t,{Z:function(){return ye}});var n=e(53360),c=e(7657),a=e(62222),d=e(60164),i=e(6890),o=e(8240),f=e(21299);function v(g){return g instanceof HTMLElement||g instanceof SVGElement}function h(g){return g&&typeof g=="object"&&v(g.nativeElement)?g.nativeElement:v(g)?g:null}function p(g){if(g)return g.current&&typeof g.current=="object"&&"currentElement"in g.current?g.current.currentElement:g.current}function m(g){if(!(g&&(0,n.isValidElement)(g)))return null;if(parseInt(n.version)>=19){var y;return((y=g.props)==null?void 0:y.ref)||null}return g.ref}var l=e(4814);const u=(0,n.forwardRef)((g,$)=>{const{children:y,disabled:_,throttleMs:ae=100,onResize:ie}=g,de=(0,n.isValidElement)(y),ne=de?(0,f.q)(y):[],me=de?m(y):null,te=(0,n.useRef)(null),xe=(0,l.x1)(me,te),X=()=>p(te);(0,n.useImperativeHandle)($,()=>X());const N=ie?(0,i.P)(ie,ae):void 0;return(0,o.y)(X(),N,!_),de?(0,n.cloneElement)(y,{ref:xe}):y});u.displayName="ResizeObserverComponent";const I=u;var s=e(27833),r=e(86752),R=e(34028),E=e(80703);const w=(0,R.J)();function C(g){return w?(0,E.HD)(g)?document.querySelector(g):(0,E.mf)(g)?g():g instanceof HTMLElement?g:document.body:null}const B=(0,n.forwardRef)((g,$)=>{const y=(0,s.c)(25),{getContainer:_,prefixCls:ae,children:ie,open:de,rootStyle:ne}=g,me=de===void 0?!0:de,[te,xe]=(0,n.useState)(null),[X,N]=(0,n.useState)(null),ve=X||document.body;let Re,Q;y[0]!==_?(Re=()=>{const Le=C(_);N(Le||null)},Q=[_],y[0]=_,y[1]=Re,y[2]=Q):(Re=y[1],Q=y[2]),(0,n.useEffect)(Re,Q);let fe;y[3]!==te||y[4]!==ae||y[5]!==ne?(fe=()=>{if(!w||te)return null;const Le=document.createElement("div");ae&&(Le.className=`${ae}-portal-wrapper`),ne&&Object.assign(Le.style,ne),Le.setAttribute("data-portal","true"),xe(Le)},y[3]=te,y[4]=ae,y[5]=ne,y[6]=fe):fe=y[6];const V=fe;let le;y[7]!==V||y[8]!==me?(le=()=>{w&&(me?V():xe(null))},y[7]=V,y[8]=me,y[9]=le):le=y[9];let se;y[10]!==me?(se=[me],y[10]=me,y[11]=se):se=y[11],(0,d.L)(le,se);let Be,Ie;y[12]!==te?(Be=()=>te,Ie=[te],y[12]=te,y[13]=Be,y[14]=Ie):(Be=y[13],Ie=y[14]),(0,n.useImperativeHandle)($,Be,Ie);let Oe;y[15]!==te||y[16]!==ve||y[17]!==me?(Oe=()=>{if(!w||!te)return;const Le=()=>!te.parentNode&&ve.appendChild(te),Ae=()=>{var Ne;return(Ne=te.parentNode)==null?void 0:Ne.removeChild(te)};return me?Le():Ae(),()=>{Ae()}},y[15]=te,y[16]=ve,y[17]=me,y[18]=Oe):Oe=y[18];let we;if(y[19]!==te||y[20]!==me?(we=[me,te],y[19]=te,y[20]=me,y[21]=we):we=y[21],(0,d.L)(Oe,we),!(me&&ie))return null;let be;return y[22]!==ie||y[23]!==te?(be=te?(0,r.createPortal)(ie,te):null,y[22]=ie,y[23]=te,y[24]=be):be=y[24],be});B.displayName="Portal";const S=B;var K=e(40549),Y=e(57577);function J(g,$,y){const{top:_,left:ae,width:ie,height:de}=g.getBoundingClientRect(),ne=_+y,me=ae+$;return{width:ie,height:de,top:ne,bottom:ne+de,left:me,right:me+ie}}function oe(g){if(!g||g.tagName==="HTML")return;const $=window.getComputedStyle(g),y=_=>["auto","scroll"].includes(_);return g.clientHeight<g.scrollHeight&&y($.overflowX)||g.clientWidth<g.scrollWidth&&y($.overflowY)?g:oe(g.parentNode)}function A(g,$){return Math.round(Math.abs(g))>Math.round(Math.abs($))?g:$}const L=(g,$)=>`translate3d(${g}px, ${$}px, 0)`;function z(g){if(!g)return[0,0];const $=window.getComputedStyle(g),y=$.transform||$.webkitTransform||"none";if(y==="none")return[0,0];if(y.match(/matrix\(([^)]+)\)/)){var _,ae;const ne=((ae=y.match(/matrix\((.+)\)/))==null||(_=ae[1])==null?void 0:_.split(",").map(Number))||[0,0];if(ne.length===6)return[ne[4],ne[5]]}const[,ie=0,de=0]=(y.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(ne=>Number(ne));return[ie,de]}function W(g){const $=g.split("-"),y=$[0],_=$[1];let ae;const ie=y==="top"||y==="bottom",de=y==="left"||y==="right";return ie&&(_==="start"&&(ae="left"),_==="end"&&(ae="right")),de&&(_==="start"&&(ae="top"),_==="end"&&(ae="bottom")),[y,ae,ie,de]}function k(g){return g?(0,E.Kn)(g)?[g.x||0,g.y||0]:[g||0,g||0]:[0,0]}const H={direction:"bottom",enableFlip:!0,enableShift:!0};function j(g,$){const{reference:y,popper:_,arrow:ae}=g;if(!y||!_)return;const ie=U(U({},H),$),de=_.parentNode,[ne,me]=z(de),te=window.pageYOffset,xe=window.pageXOffset,X=J(y,xe,te),N=J(_,xe,te),ve=X.width-N.width,Re=X.height-N.height;let Q=X.left-N.left+ne,fe=X.top-N.top+me;const[V,le,se,Be]=W(ie.direction);let Ie=V;const Oe=le==="left"?0:le==="right"?ve:ve/2,we=ve-Oe,be=le==="top"?0:le==="bottom"?Re:Re/2,Le=Re-be;se&&(Q+=Oe,fe+=V==="top"?-N.height:X.height),Be&&(Q+=V==="left"?-N.width:X.width,fe+=be);let Ae=oe(y),Ne;const[Fe,Ze]=k(ie.offset),{height:ee=0,width:he=0}=ae?J(ae,xe,te):{};let Se=0,Pe=0;for(;Ae;)Ne=J(Ae,xe,te),$e(Ne),Ae=oe(Ae.parentNode);const{clientHeight:ze,clientWidth:Te}=document.documentElement;$e({top:te,bottom:te+ze,left:xe,right:xe+Te,height:ze,width:Te}),Q-=Se,fe-=Pe,Ge(),se&&(fe+=Ie==="bottom"?Ze:-Ze),Be&&(Q+=Ie==="right"?Fe:-Fe),de.style.transform=L(Q,fe),de.setAttribute("data-direction",Ie);function $e(We){const{top:ge,bottom:je,left:Ue,right:Ve,height:Xe,width:_e}=We;if(se){const De=Math.round(X.top-ge+X.height/2),Me=Math.round(Xe/2);ie.enableFlip&&en(De,Me),ie.enableShift&&nn()}if(Be){const De=Math.round(X.left-Ue+X.width/2),Me=Math.round(_e/2);ie.enableFlip&&tn(De,Me),ie.enableShift&&on()}function en(De,Me){const Ye=X.top-(N.height+Ze+ee)<ge,Je=X.bottom+N.height+Ze+ee>Xe+ge;Ye&&De<=Me&&Ie==="top"?(fe+=N.height+X.height,Ie="bottom"):Je&&De>=Me&&Ie==="bottom"&&(fe-=N.height+X.height,Ie="top")}function nn(){if(X.left+Oe<Ue){const De=X.left+Oe-Ue,Me=X.right-he>Ue?De:-X.width+Oe+he;Se=A(Me,Se)}if(X.right-we>Ve){const De=X.right-we-Ve,Me=X.left+he<Ve?De:X.width-we-he;Se=A(Me,Se)}}function tn(De,Me){const Ye=X.left-(N.width+Fe+he)<Ue,Je=X.right+N.width+Fe+he>Ve;Ye&&De<Me&&Ie==="left"?(Q+=X.width+N.width,Ie="right"):Je&&De>Me&&Ie==="right"&&(Q-=X.width+N.width,Ie="left")}function on(){if(X.top+be<ge){const De=X.top+be-ge,Me=X.bottom-ee>ge?De:-X.height+be+ee;Pe=A(Me,Pe)}if(X.bottom-Le>je){const De=X.bottom-Le-je,Me=X.top+ee<je?De:X.height-Le-ee;Pe=A(Me,Pe)}}}function Ge(){if(!ae)return;se?fe+=Ie==="bottom"?ee:-ee:Be&&(Q+=Ie==="right"?he:-he);const We=ie.direction.split("-")[1]||"center",ge={x:0,y:0};if(se){ge.y=Ie==="top"?N.height:-ee;const je=Math.abs(X.width-N.width)>Math.abs(Se),Ue=Se===0;We==="start"?Ue?ge.x=0:ge.x=Math.min(Math.max(0,Se),N.width-he):We==="center"?Ue?ge.x=(N.width-he)/2:je?ge.x=(N.width-he)/2+Se:ge.x=Math.max(0,Math.min(N.width-he,(N.width-he)/2+Se)):We==="end"&&(Ue?ge.x=N.width-he:ge.x=Math.max(0,Math.min(N.width-he,N.width-he+Se)))}else if(Be){ge.x=Ie==="left"?N.width:-he;const je=Pe===0,Ue=Math.abs(X.height-N.height)>Math.abs(Pe);We==="start"?je?ge.y=0:ge.y=Math.min(Math.max(0,Pe),N.height-ee):We==="center"?je?ge.y=(N.height-ee)/2:Ue?ge.y=(N.height-ee)/2+Pe:ge.y=Math.max(0,Math.min(N.height-ee,(N.height-ee)/2+Pe)):We==="end"&&(je?ge.y=N.height-ee:ge.y=Math.max(0,Math.min(N.height-ee,N.height-ee+Pe)))}ae.style.transform=L(ge.x,ge.y)}}function re(g){let $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!g)return[];const y=Z(g);if(y===g.ownerDocument.body){const ie=window.visualViewport?[window.visualViewport]:[],de=O(y)?[y]:[];return[...$,window,...ie,...de]}const ae=re(P(y));return[...$,y,...ae]}function P(g){return F(g)==="html"?g:g.parentNode}function O(g){const{overflow:$,overflowX:y,overflowY:_,display:ae}=getComputedStyle(g);return/auto|scroll|overlay|hidden|clip/.test($+_+y)&&!["contents"].includes(ae)}const M=new Set(["html","body","#document"]);function Z(g){return M.has(F(g))?g.ownerDocument.body:O(g)?g:Z(P(g))}function F(g){return g?(g.nodeName||"").toLowerCase():null}const Ce="Escape",ue=g=>{const{trigger:$,delay:y,disabled:_,visible:ae,clickOutsideClose:ie,triggeEl:de,onVisibleChange:ne}=g,me=(0,n.useRef)(!1),te=(0,n.useRef)(!1),xe=(0,n.useRef)(null),X=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(_)return;const Q=fe=>{var V;!(de==null||(V=de.contains)==null)&&V.call(de,fe.target)||me.current||ae&&ie&&(ne==null||ne(!1,{e:fe,trigger:"document"}))};return document.addEventListener("mousedown",Q),document.addEventListener("touchend",Q),()=>{document.removeEventListener("mousedown",Q),document.removeEventListener("touchend",Q)}},[_,ae,de]);function N(Q){y?(clearTimeout(xe.current),xe.current=setTimeout(Q,y)):Q()}function ve(){return _?{}:{onMouseEnter:Q=>{$==="hover"&&!te.current&&(clearTimeout(xe.current),ne==null||ne(!0,{e:Q,trigger:"hover"}))},onMouseLeave:Q=>{$==="hover"&&(te.current=!0,clearTimeout(xe.current),ne==null||ne(!1,{e:Q,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(X.current),me.current=!0,X.current=window.setTimeout(()=>{me.current=!1})},onTouchEnd:()=>{clearTimeout(X.current),me.current=!0,X.current=window.setTimeout(()=>{me.current=!1})}}}function Re(Q){return _?{}:{onMouseDown:V=>{var le,se;$==="mousedown"&&N(()=>ne==null?void 0:ne(!ae,{e:V,trigger:"mousedown"})),(le=(se=Q.props).onMouseDown)==null||le.call(se,V)},onClick:V=>{var le,se;$==="click"&&(V.preventDefault(),V.stopPropagation(),N(()=>ne==null?void 0:ne(!ae,{e:V,trigger:"click"}))),(le=(se=Q.props).onClick)==null||le.call(se,V)},onTouchStart:V=>{var le,se;($==="hover"||$==="mousedown")&&(te.current=!1,N(()=>ne==null?void 0:ne(!0,{e:V,trigger:"hover"}))),(le=(se=Q.props).onTouchStart)==null||le.call(se,V)},onMouseEnter:V=>{var le,se;$==="hover"&&(te.current=!1,N(()=>ne==null?void 0:ne(!0,{e:V,trigger:"hover"}))),(le=(se=Q.props).onMouseEnter)==null||le.call(se,V)},onMouseLeave:V=>{var le,se;$==="hover"&&(te.current=!1,N(()=>ne==null?void 0:ne(!1,{e:V,trigger:"hover"}))),(le=(se=Q.props).onMouseLeave)==null||le.call(se,V)},onFocus:V=>{var le,se;$==="focus"&&N(()=>ne==null?void 0:ne(!0,{e:V,trigger:"focus"})),(le=(se=Q.props).onFocus)==null||le.call(se,V)},onBlur:V=>{var le,se;$==="focus"&&N(()=>ne==null?void 0:ne(!1,{e:V,trigger:"blur"})),(le=(se=Q.props).onBlur)==null||le.call(se,V)},onContextMenu:V=>{var le,se;$==="context-menu"&&(V.preventDefault(),N(()=>ne==null?void 0:ne(!0,{e:V,trigger:"context-menu"}))),(le=(se=Q.props).onContextMenu)==null||le.call(se,V)},onKeyDown:V=>{var le,se;(V==null?void 0:V.key)===Ce&&N(()=>ne==null?void 0:ne(!1,{e:V,trigger:"keydown-esc"})),(le=(se=Q.props).onKeyDown)==null||le.call(se,V)}}}return{genPopupProps:ve,genTriggerProps:Re}};var ce=e(7829);function D(g){let $;return()=>($||($=new Promise(y=>{Promise.resolve().then(()=>{$=void 0,y(g())})})),$)}const T={direction:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:0,trigger:"hover",delay:100,clickOutsideClose:!0,disabled:!1},q={position:"absolute",top:0,left:0,willChange:"transform"},b={position:"absolute",top:0,left:0,willChange:"transform"},pe=(0,n.forwardRef)((g,$)=>{const{prefixCls:y,componentConfig:_}=(0,n.useContext)(Y.E),{children:ae,popper:ie,enableShift:de,motion:ne={},enableFlip:me,offset:te,direction:xe,getContainer:X,zIndex:N,trigger:ve,delay:Re,disabled:Q,visible:fe,arrow:V,clickOutsideClose:le,onVisibleChange:se}=(0,c.S)(g,T,_==null?void 0:_.Trigger),Be=(0,n.isValidElement)(ae),Ie=(0,n.useRef)(null),Oe=(0,n.useRef)(null),we=m(ie),be=(0,n.useRef)(null),Le=(0,l.x1)(we,be),Ae=(0,n.useRef)(null),[Ne,Fe]=(0,a.R)(fe,{onChange:se}),{genPopupProps:Ze,genTriggerProps:ee}=ue({clickOutsideClose:le,delay:Re,disabled:Q,visible:Ne,onVisibleChange:Fe,trigger:ve,triggeEl:Ie.current});(0,n.useImperativeHandle)($,()=>{});const he=(0,l.t4)(ae),Se=(0,l.t4)(ie),Pe=(0,n.useCallback)(Te=>{var $e;Te&&Te.type!=="resize"&&!(($e=Te.target)!=null&&$e.contains(Ie.current))||setTimeout(()=>{j({reference:Ie.current,popper:be.current,arrow:Oe.current},{direction:xe,enableFlip:me,enableShift:de,offset:te})})},[xe,me,de,te]),ze=D(()=>new Promise(Te=>{Pe(),Te(void 0)}));return(0,d.L)(()=>{if(Ne!==void 0){if(Pe(),Ne===!0){var Te;(Te=Ae.current)==null||Te.toggle(!0)}else if(Ne===!1){var $e;($e=Ae.current)==null||$e.toggle(!1)}}},[Ne]),(0,d.L)(()=>{ze();const Te=re(Ie.current),$e=re(be.current),Ge=[...Te,...$e];return Ge.forEach(We=>{We.addEventListener("scroll",ze,{passive:!0})}),window.addEventListener("resize",ze,{passive:!0}),()=>{Ge.forEach(We=>{We.removeEventListener("scroll",ze)}),window.removeEventListener("resize",ze)}},[xe,me,de,te,be.current,Oe.current]),Be?n.createElement(n.Fragment,null,n.createElement(I,{ref:Ie,onResize:()=>ze()},(0,n.cloneElement)(ae,U({},ee(ae)))),ie?n.createElement(K.Z,Ee(U({ref:Ae},ne),{unmountOnExit:ne.unmountOnExit||!0}),Te=>{let{className:$e}=Te;return n.createElement(S,{getContainer:X},n.createElement("div",Ee(U({},Ze()),{className:(0,ce.default)(`${y}-trigger`,$e),style:Ee(U({},q),{zIndex:N})}),V?n.createElement("div",{className:`${y}-trigger-arrow`},(0,n.cloneElement)(V,{ref:Oe,style:U(U({},b),V.props.style||{})})):null,(0,n.cloneElement)(ie,{ref:Le})))}):null):null});pe.displayName="Trigger";const ye=pe},36112:function(x,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return f}});var n=e(67171),c=e(98479),a=e.n(c),d={};for(var i in c)["default","Trigger"].indexOf(i)<0&&(d[i]=function(v){return c[v]}.bind(0,i));e.d(t,d);const o=n.Z,f=o},98479:function(){},84176:function(x,t,e){var n=e(75863);function c(a,d){if(a==null)return{};var i=n(a,d),o,f;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(f=0;f<v.length;f++)o=v[f],!(d.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(a,o)&&(i[o]=a[o])}return i}x.exports=c,x.exports.__esModule=!0,x.exports.default=x.exports},75863:function(x){function t(e,n){if(e==null)return{};var c={},a=Object.keys(e),d,i;for(i=0;i<a.length;i++)d=a[i],!(n.indexOf(d)>=0)&&(c[d]=e[d]);return c}x.exports=t,x.exports.__esModule=!0,x.exports.default=x.exports},7829:function(x,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return c}});function n(a){var d,i,o="";if(typeof a=="string"||typeof a=="number")o+=a;else if(typeof a=="object")if(Array.isArray(a)){var f=a.length;for(d=0;d<f;d++)a[d]&&(i=n(a[d]))&&(o&&(o+=" "),o+=i)}else for(i in a)a[i]&&(o&&(o+=" "),o+=i);return o}function c(){for(var a,d,i=0,o="",f=arguments.length;i<f;i++)(a=arguments[i])&&(d=n(a))&&(o&&(o+=" "),o+=d);return o}t.default=c},64508:function(x,t,e){"use strict";e.d(t,{Y:function(){return d}});var n=e(53360),c=e(75601);const a=(i,o,f,v,h)=>{clearTimeout(v.current);const p=(0,c.y0)(i);o(p),f.current=p,h&&h({current:p})},d=({enter:i=!0,exit:o=!0,preEnter:f,preExit:v,timeout:h,initialEntered:p,mountOnEnter:m,unmountOnExit:l,onStateChange:u}={})=>{const[I,s]=(0,n.useState)(()=>(0,c.y0)(p?c.cn:(0,c.Ef)(m))),r=(0,n.useRef)(I),R=(0,n.useRef)(),[E,w]=(0,c.fj)(h),C=(0,n.useCallback)(()=>{const S=(0,c.XZ)(r.current._s,l);S&&a(S,s,r,R,u)},[u,l]),B=(0,n.useCallback)(S=>{const K=J=>{switch(a(J,s,r,R,u),J){case c.d0:E>=0&&(R.current=setTimeout(C,E));break;case c.Ix:w>=0&&(R.current=setTimeout(C,w));break;case c.iL:case c.iU:R.current=(0,c.Y3)(K,J);break}},Y=r.current.isEnter;typeof S!="boolean"&&(S=!Y),S?!Y&&K(i?f?c.iL:c.d0:c.cn):Y&&K(o?v?c.iU:c.Ix:(0,c.Ef)(l))},[C,u,i,o,f,v,E,w,l]);return[I,B,C]}},75601:function(x,t,e){"use strict";e.d(t,{Ef:function(){return p},Ix:function(){return i},XZ:function(){return m},Y3:function(){return u},cn:function(){return a},d0:function(){return c},fj:function(){return l},iL:function(){return n},iU:function(){return d},y0:function(){return h}});const n=0,c=1,a=2,d=3,i=4,o=5,f=6,v=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=I=>({_s:I,status:v[I],isEnter:I<d,isMounted:I!==f,isResolved:I===a||I>i}),p=I=>I?f:o,m=(I,s)=>{switch(I){case c:case n:return a;case i:case d:return p(s)}},l=I=>typeof I=="object"?[I.enter,I.exit]:[I,I],u=(I,s)=>setTimeout(()=>{isNaN(document.body.offsetTop)||I(s+1)},0)}}]);
}());