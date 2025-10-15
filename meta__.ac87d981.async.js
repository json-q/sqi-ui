!(function(){var Cn=Object.defineProperty,En=Object.defineProperties;var Pn=Object.getOwnPropertyDescriptors;var on=Object.getOwnPropertySymbols;var ln=Object.prototype.hasOwnProperty,un=Object.prototype.propertyIsEnumerable;var sn=(I,t,e)=>t in I?Cn(I,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):I[t]=e,M=(I,t)=>{for(var e in t||(t={}))ln.call(t,e)&&sn(I,e,t[e]);if(on)for(var e of on(t))un.call(t,e)&&sn(I,e,t[e]);return I},ue=(I,t)=>En(I,Pn(t));var Be=(I,t)=>{var e={};for(var n in I)ln.call(I,n)&&t.indexOf(n)<0&&(e[n]=I[n]);if(I!=null&&on)for(var n of on(I))t.indexOf(n)<0&&un.call(I,n)&&(e[n]=I[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{43988:function(I,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return ge}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return c.D},useIsomorphicLayoutEffect:function(){return r.L},useMergeProps:function(){return a.S},useMergeState:function(){return C.R},usePrevious:function(){return g.D},useResizeObserverRect:function(){return E._}});var v={};e.r(v),e.d(v,{canUseDom:function(){return U.J},debounce:function(){return S.D},isArray:function(){return R.kJ},isEmptyObject:function(){return R.Qr},isFunction:function(){return R.mf},isNumber:function(){return R.hj},isObject:function(){return R.Kn},isString:function(){return R.HD},isUndefined:function(){return R.o8},omit:function(){return O.C},pick:function(){return X},throttle:function(){return j.P}});var s={};e.r(s),e.d(s,{default:function(){return A.Y},useTransition:function(){return A.Y},useTransitionMap:function(){return G},useTransitionState:function(){return A.Y}});var m=e(90819),u=e.n(m),o=e(89933),p=e.n(o),x=e(21077),h=e.t(x,2),f=e(45990),d=e(478),l=e(33393),i=e.t(l,2),c=e(37797),r=e(60164),a=e(7657),C=e(62222),g=e(45844),E=e(37828),U=e(34028),S=e(78831),R=e(80703),O=e(12598);function X(re,oe){const ce={};return oe.forEach(ne=>{ne in re&&(ce[ne]=re[ne])}),ce}var j=e(6890),k=e(10435),D=e(44184),w=e(7829),A=e(52291),T=e(87808);const Y=(re,oe,ce,ne,pe,ye)=>{clearTimeout(pe);const H=(0,T.y0)(oe),be=new Map(ne.current);be.set(re,H),ce(be),ne.current=be,ye&&ye({key:re,current:H})},G=({allowMultiple:re,enter:oe=!0,exit:ce=!0,preEnter:ne,preExit:pe,timeout:ye,initialEntered:H,mountOnEnter:be,unmountOnExit:Me,onStateChange:Ee}={})=>{const[xe,Pe]=(0,x.useState)(new Map),Ce=(0,x.useRef)(xe),Ne=(0,x.useRef)(new Map),[Se,De]=(0,T.fj)(ye),Ge=(0,x.useCallback)((fe,Re)=>{const{initialEntered:Te=H}=Re||{},Oe=Te?T.cn:(0,T.Ef)(be);Y(fe,Oe,Pe,Ce),Ne.current.set(fe,{})},[H,be]),He=(0,x.useCallback)(fe=>{const Re=new Map(Ce.current);return Re.delete(fe)?(Pe(Re),Ce.current=Re,Ne.current.delete(fe),!0):!1},[]),we=(0,x.useCallback)(fe=>{const Re=Ce.current.get(fe);if(!Re)return;const{timeoutId:Te}=Ne.current.get(fe),Oe=(0,T.XZ)(Re._s,Me);Oe&&Y(fe,Oe,Pe,Ce,Te,Ee)},[Ee,Me]),ze=(0,x.useCallback)((fe,Re)=>{const Te=Ce.current.get(fe);if(!Te)return;const Oe=Ne.current.get(fe),Ze=Ue=>{switch(Y(fe,Ue,Pe,Ce,Oe.timeoutId,Ee),Ue){case T.d0:Se>=0&&(Oe.timeoutId=setTimeout(()=>we(fe),Se));break;case T.Ix:De>=0&&(Oe.timeoutId=setTimeout(()=>we(fe),De));break;case T.iL:case T.iU:Oe.timeoutId=(0,T.Y3)(Ze,Ue);break}},Fe=Te.isEnter;typeof Re!="boolean"&&(Re=!Fe),Re?Fe||(Ze(oe?ne?T.iL:T.d0:T.cn),!re&&Ce.current.forEach((Ue,Ve)=>Ve!==fe&&ze(Ve,!1))):Fe&&Ze(ce?pe?T.iU:T.Ix:(0,T.Ef)(Me))},[Ee,we,re,oe,ce,ne,pe,Se,De,Me]),Ae=(0,x.useCallback)(fe=>{if(!(!re&&fe!==!1))for(const Re of Ce.current.keys())ze(Re,fe)},[re,ze]);return{stateMap:xe,toggle:ze,toggleAll:Ae,endTransition:we,setItem:Ge,deleteItem:He}};var K=e(38128),Q=e(27934),J=e(87949),ie=e(23482),te=e(97326),q=e(87829),z=e.t(q,2),ge={"sqi-web-src-common-demo-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,51131))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38083).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(55216).Z},"react-dom":{type:"NPM",value:"19.2.0"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":d,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":d,"react-dom":i,"@sqi-ui/hooks":n,"@sqi-ui/utils":v},renderOpts:{compile:function(){var re=p()(u()().mark(function ce(){var ne,pe=arguments;return u()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,e.e(86).then(e.bind(e,57086));case 2:return H.abrupt("return",(ne=H.sent).default.apply(ne,pe));case 3:case"end":return H.stop()}},ce)}));function oe(){return re.apply(this,arguments)}return oe}()}},"sqi-web-src-common-demo-css-motion-base":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,38111))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59594).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(73687).Z},"../CSSMotion.tsx":{type:"FILE",value:e(75437).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(8555).Z}},entry:"index.tsx"},context:{"./motion.css":k,"../CSSMotion.tsx":D,"../config-provider/context.ts":K,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":D,clsx:w,"react-transition-state":s,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":K},renderOpts:{compile:function(){var re=p()(u()().mark(function ce(){var ne,pe=arguments;return u()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,e.e(86).then(e.bind(e,57086));case 2:return H.abrupt("return",(ne=H.sent).default.apply(ne,pe));case 3:case"end":return H.stop()}},ce)}));function oe(){return re.apply(this,arguments)}return oe}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,39496))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39487).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../CSSMotion.tsx":{type:"FILE",value:e(75437).Z},"./motion.css":{type:"FILE",value:e(73687).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(8555).Z}},entry:"index.tsx"},context:{"../CSSMotion.tsx":D,"./motion.css":k,"../config-provider/context.ts":K,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":D,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,clsx:w,"react-transition-state":s,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":K},renderOpts:{compile:function(){var re=p()(u()().mark(function ce(){var ne,pe=arguments;return u()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,e.e(86).then(e.bind(e,57086));case 2:return H.abrupt("return",(ne=H.sent).default.apply(ne,pe));case 3:case"end":return H.stop()}},ce)}));function oe(){return re.apply(this,arguments)}return oe}()}},"sqi-web-src-common-demo-css-motion-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,69577))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(641).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(55216).Z},"../CSSMotion.tsx":{type:"FILE",value:e(75437).Z},"./motion.css":{type:"FILE",value:e(73687).Z},clsx:{type:"NPM",value:"2.1.1"},"react-dom":{type:"NPM",value:"19.2.0"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(8555).Z}},entry:"index.tsx"},context:{"../Portal.tsx":d,"../CSSMotion.tsx":D,"./motion.css":k,"../config-provider/context.ts":K,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":D,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,clsx:w,"react-dom":i,"react-transition-state":s,"@sqi-ui/hooks":n,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":K},renderOpts:{compile:function(){var re=p()(u()().mark(function ce(){var ne,pe=arguments;return u()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,e.e(86).then(e.bind(e,57086));case 2:return H.abrupt("return",(ne=H.sent).default.apply(ne,pe));case 3:case"end":return H.stop()}},ce)}));function oe(){return re.apply(this,arguments)}return oe}()}},"sqi-web-src-common-demo-resize-observer":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,2348))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(83224).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserverRect.tsx":{type:"FILE",value:e(88402).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(67400).Z},"../_util/toArray.ts":{type:"FILE",value:e(63744).Z},"../_util/dom.ts":{type:"FILE",value:e(55606).Z},"react-is":{type:"NPM",value:"19.2.0"}},entry:"index.tsx"},context:{"../ResizeObserverRect.tsx":Q,"../_util/ref.ts":J,"../_util/toArray.ts":ie,"../_util/dom.ts":te,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserverRect.tsx":Q,"@sqi-ui/utils":v,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":J,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":ie,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":te,"react-is":z},renderOpts:{compile:function(){var re=p()(u()().mark(function ce(){var ne,pe=arguments;return u()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,e.e(86).then(e.bind(e,57086));case 2:return H.abrupt("return",(ne=H.sent).default.apply(ne,pe));case 3:case"end":return H.stop()}},ce)}));function oe(){return re.apply(this,arguments)}return oe}()}}}},53746:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41333))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77069).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,69959))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19444).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,38761))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31963).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},15429:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x=e(5629),h={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,3210))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32962).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29056))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12365).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35070))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13903).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,71770))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33864).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,38422))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65126).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},68456:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x=e(55630),h={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,48364))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(24416).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,59825))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45529).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30883))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67440).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41878))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70121).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73859))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2523).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(39727).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8864))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5839).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(39727).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},72550:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,13462))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98490).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,48378))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47810).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},82839:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75189))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38208).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,82453))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94252).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,46745))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63219).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},56773:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x=e(14353),h={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,52957))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88650).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(98052).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,80899))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77843).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(98052).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,60483))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85124).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(98052).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,51420))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(50273).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(98052).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,3423))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(79684).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(98052).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11970))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23181).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,15111))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13278).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(98052).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,28593))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13088).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(98052).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},97748:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(5629),x=e(45990),h={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,5258))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39632).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":p,"@sqi-ui/web":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92669))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45566).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":p,"@sqi-ui/web":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,78090))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16910).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},85222:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x=e(5629),h={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95507))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77632).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,54789))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66992).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,91966))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47895).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,2432))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54985).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,97762))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65947).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,77518))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(4231).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,60079))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63575).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30728))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86063).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,82720))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43768).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,84308))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37253).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},53184:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x={"sqi-web-src-popup-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,68842))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89608).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-trigger-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,15011))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-trigger-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21046).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-placement":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29391))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-placement",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64089).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-shift":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,49246))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-shift",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70815).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,65115))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73345).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,2192))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(87233).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-rect-observer":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,50655))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-rect-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(11098).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-styles":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83754))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-styles",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(85521).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},10927:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x=e(59171),h={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,96262))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91811).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,22735))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82611).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,19129))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45269).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,15121))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41448).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,63357))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(6450).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,65411))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98970).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(6570).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8972))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17105).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(6570).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},1132:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,6604))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1135).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,64186))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55205).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,39532))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(53489).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18283))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20749).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33794))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(48218).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},45340:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x=e(5629),h={"sqi-web-src-switch-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30587))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65313).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18462))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93783).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,20223))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95772).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-custom-icon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,70254))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(26291).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},76029:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x=e(5629),h={"sqi-web-src-tag-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,47e3))})),asset:{type:"BLOCK",id:"sqi-web-src-tag-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(22019).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-tag-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92485))})),asset:{type:"BLOCK",id:"sqi-web-src-tag-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23138).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-tag-demo-edit":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90677))})),asset:{type:"BLOCK",id:"sqi-web-src-tag-demo-edit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76770).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-tag-demo-custom-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,40873))})),asset:{type:"BLOCK",id:"sqi-web-src-tag-demo-custom-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19998).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(86).then(e.bind(e,57086));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},59303:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x={"sqi-web-src-tooltip-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,97868))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(3025).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-theme":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,84245))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-theme",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(15215).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-trigger-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,44391))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-trigger-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74703).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-placement":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,76043))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-placement",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32134).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-shift":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98882))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-shift",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91095).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,37122))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(15909).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-rect-observer":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,38129))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-rect-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13498).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(86).then(e.bind(e,57086));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},44339:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return d}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(21077),p=e(45990),x=e(93148),h=e(3059),f=e(81498),d={"sqi-web-src-trigger-demo-popper":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,7396))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-popper",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(87729).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(58795).Z},"./_wrapper.tsx":{type:"FILE",value:e(44523).Z}},entry:"index.tsx"},context:{"./demo.module.css":x,"./_wrapper.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h},renderOpts:{compile:function(){var l=u()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(86).then(e.bind(e,57086));case 2:return g.abrupt("return",(r=g.sent).default.apply(r,a));case 3:case"end":return g.stop()}},c)}));function i(){return l.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-basic-trigger":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,10858))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-basic-trigger",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71791).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(33623).Z},"./_wrapper.tsx":{type:"FILE",value:e(44523).Z},"./demo.module.css":{type:"FILE",value:e(58795).Z}},entry:"index.tsx"},context:{"./motion.css":f,"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var l=u()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(86).then(e.bind(e,57086));case 2:return g.abrupt("return",(r=g.sent).default.apply(r,a));case 3:case"end":return g.stop()}},c)}));function i(){return l.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-focus-outside-click":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,81373))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-focus-outside-click",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(68172).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(44523).Z},"./demo.module.css":{type:"FILE",value:e(58795).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var l=u()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(86).then(e.bind(e,57086));case 2:return g.abrupt("return",(r=g.sent).default.apply(r,a));case 3:case"end":return g.stop()}},c)}));function i(){return l.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-destroy-exit":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,34778))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-destroy-exit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(35597).Z},react:{type:"NPM",value:"19.2.0"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(44523).Z},"./demo.module.css":{type:"FILE",value:e(58795).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var l=u()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(86).then(e.bind(e,57086));case 2:return g.abrupt("return",(r=g.sent).default.apply(r,a));case 3:case"end":return g.stop()}},c)}));function i(){return l.apply(this,arguments)}return i}()}}}},44184:function(I,t,e){"use strict";e.r(t);var n=e(73193),v=e.n(n),s=e(10154),m=e.n(s),u=e(45332),o=e.n(u),p=e(84176),x=e.n(p),h=e(21077),f=e(7829),d=e(52291),l=e(80703),i=e(38128),c=["children","name","prefixCls"],r=(0,h.forwardRef)(function(a,C){var g=(0,h.useContext)(i.ConfigContext),E=a.children,U=a.name,S=a.prefixCls,R=x()(a,c),O=(0,d.Y)(R),X=o()(O,2),j=X[0],k=X[1],D=(0,h.isValidElement)(E);(0,h.useImperativeHandle)(C,function(){return{toggle:k}});var w="".concat(S||g.prefixCls).concat(U?"-".concat(U):""),A=(0,f.default)(["".concat(w,"-motion")],m()({},"".concat(w,"-motion-").concat(j.status),j.status));return(0,l.mf)(E)?j.isMounted?E(v()(v()({},j),{},{className:A,toggle:k})):null:D?j.isMounted?(0,h.cloneElement)(E,{className:(0,f.default)(E.props.className,A)}):null:E});r.displayName="CSSMotion",t.default=r},478:function(I,t,e){"use strict";e.r(t);var n=e(45332),v=e.n(n),s=e(21077),m=e(33393),u=e(60164),o=e(34028),p=e(80703),x=(0,o.J)();function h(d){return x?(0,p.mf)(d)?d():document.body:null}var f=(0,s.forwardRef)(function(d,l){var i=d.getContainer,c=d.prefixCls,r=d.children,a=d.open,C=a===void 0?!0:a,g=d.rootStyle,E=(0,s.useState)(null),U=v()(E,2),S=U[0],R=U[1],O=(0,s.useState)(null),X=v()(O,2),j=X[0],k=X[1],D=j||document.body;(0,s.useEffect)(function(){var A=h(i);k(A||null)},[i]);var w=function(){if(!x||S)return null;var T=document.createElement("div");c&&(T.className="".concat(c,"-portal-wrapper")),g&&Object.assign(T.style,g),T.setAttribute("data-portal","true"),R(T)};return(0,u.L)(function(){x&&(C?w():R(null))},[C]),s.useImperativeHandle(l,function(){return S},[S]),(0,u.L)(function(){if(!(!x||!S)){var A=function(){return!S.parentNode&&D.appendChild(S)},T=function(){var G;return(G=S.parentNode)===null||G===void 0?void 0:G.removeChild(S)};return C?A():T(),function(){T()}}},[C,S]),C&&r&&S?(0,m.createPortal)(r,S):null});f.displayName="Portal",t.default=f},27934:function(I,t,e){"use strict";e.r(t);var n=e(45332),v=e.n(n),s=e(21077),m=e(6890),u=e(37828),o=e(23482),p=e(97326),x=e(87949),h=(0,s.forwardRef)(function(f,d){var l=f.children,i=f.disabled,c=f.throttleMs,r=c===void 0?0:c,a=f.onResize,C=(0,s.isValidElement)(l),g=l?(0,o.toArray)(l):[],E=l?(0,p.getReactNodeRef)(l):null,U=(0,s.useRef)(null),S=(0,s.useState)(null),R=v()(S,2),O=R[0],X=R[1],j=(0,x.useComposeRef)(E,U,function(D){X((0,p.getDOM)(D))});(0,s.useImperativeHandle)(d,function(){return(0,p.getRefDom)(U)});var k=a?(0,m.P)(a,r):void 0;return(0,u._)(O,k,!i),C?(0,s.cloneElement)(l,{ref:j}):l});h.displayName="ResizeObserverRect",t.default=h},97326:function(I,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return u},getReactNodeRef:function(){return p},getRefDom:function(){return o},isDOM:function(){return m}});var n=e(89957),v=e.n(n),s=e(21077);function m(x){return x instanceof HTMLElement||x instanceof SVGElement}function u(x){return x&&v()(x)==="object"&&m(x.currentElement)?x.currentElement:m(x)?x:null}function o(x){if(x)return x.current&&v()(x.current)==="object"&&"currentElement"in x.current?x.current.currentElement:x.current}function p(x){var h=x&&(0,s.isValidElement)(x);if(!h)return null;if(parseInt(s.version,10)>=19){var f;return((f=x.props)===null||f===void 0?void 0:f.ref)||null}return x.ref}},87949:function(I,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return u},fillRef:function(){return o},supportNodeRef:function(){return f},supportRef:function(){return x},useComposeRef:function(){return p}});var n=e(37797),v=e(80703),s=e(21077),m=e(98630),u=function(){for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];var r=i.filter(Boolean);return r.length<=1?r[0]:function(a){i.forEach(function(C){o(C,a)})}},o=function(l,i){(0,v.mf)(l)?l(i):(0,v.Kn)(l)&&"current"in l&&(l.current=i)},p=function(){for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(0,n.D)(function(){return u.apply(void 0,i)},i,function(r,a){return r.length!==a.length||r.every(function(C,g){return C!==a[g]})})},x=function(l){var i,c;if(!l)return!1;var r=parseInt(s.version,10);if(h(l)&&r>=19)return!0;var a=(0,m.isMemo)(l)?l.type.type:l.type;return!(typeof a=="function"&&!((i=a.prototype)!==null&&i!==void 0&&i.render)&&a.$$typeof!==m.ForwardRef||typeof l=="function"&&!((c=l.prototype)!==null&&c!==void 0&&c.render)&&l.$$typeof!==m.ForwardRef)};function h(d){return(0,s.isValidElement)(d)&&!(0,m.isFragment)(d)}var f=function(l){return h(l)&&x(l)}},23482:function(I,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return s}});var n=e(21077),v=e(98630);function s(m){var u=[];return n.Children.toArray(m).forEach(function(o){o!=null&&(Array.isArray(o)?u=u.concat(s(o)):(0,n.isValidElement)(o)&&(0,v.isFragment)(o)&&o.props?u=u.concat(s(o.props.children)):u.push(o))}),u}},55630:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(21077),v=e(59885);function s(m){var u=m.item,o=m.checked,p={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,v.jsxs)("div",{style:p,children:[(0,v.jsx)("div",{style:x}),(0,v.jsx)("strong",{children:u}),(0,v.jsx)("div",{children:"this is a checkbox"})]})}},38128:function(I,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return s},defaultConfigProps:function(){return v}});var n=e(21077),v={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(v)},14353:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(21077),v=e(59885);function s(m){var u=m.colorPalette,o=u===void 0?6:u,p=m.children,x=m.height;return(0,v.jsx)("div",{style:{height:x||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:p})}},59171:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(21077),v=e(59885);function s(m){var u=m.item,o=m.checked,p={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,v.jsxs)("div",{style:p,children:[(0,v.jsx)("div",{style:x}),(0,v.jsx)("strong",{children:u}),(0,v.jsx)("div",{children:"this is a radio"})]})}},3059:function(I,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return m}});var n=e(21077),v=e(93148),s=e(59885),m=(0,n.forwardRef)(function(u,o){var p=u.size,x=u.backgroundColor,h=u.children;return(0,s.jsx)("div",{ref:o,className:v.default.box,style:{width:p+"px",height:p+"px",backgroundColor:x},children:h})});m.displayName="Component"},10435:function(I,t,e){"use strict";e.r(t)},93148:function(I,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai"}},81498:function(I,t,e){"use strict";e.r(t)},78495:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4E3B\u52A8\u8BBE\u7F6E\u76F8\u5173 css \u9690\u85CF\u7EC4\u4EF6",paraId:4},{value:"\u6B64\u5904\u7684 ",paraId:5,tocIndex:7},{value:"ResizeObserver",paraId:5,tocIndex:7},{value:" \u4EC5\u5173\u6CE8\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316",paraId:5,tocIndex:7}]},29693:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},82707:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"loadingIcon",paraId:3,tocIndex:6},{value:"loading \u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},85388:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},71418:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},58865:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},9202:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},35970:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},97890:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u63CF\u8FF0",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"type",paraId:10,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:10,tocIndex:12},{value:"MDN",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"text",paraId:10,tocIndex:12},{value:"size",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:10,tocIndex:12},{value:"ConfigSize",paraId:10,tocIndex:12},{value:"md",paraId:10,tocIndex:12},{value:"status",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:10,tocIndex:12},{value:"success",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"warning",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"error",paraId:10,tocIndex:12},{value:"tips",paraId:10,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"allowClear",paraId:10,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"align",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"center",paraId:10,tocIndex:12},{value:" |",paraId:10,tocIndex:12},{value:"right",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"variant",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"borderless",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"underline",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"addonBefore",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"addonAfter",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"prefix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"suffix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"visibilityToggle",paraId:10,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"VisibilityToggle",paraId:11,tocIndex:12},{value:"maxLength",paraId:10,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:10,tocIndex:12},{value:"number",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"MaxLength",paraId:12,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:10,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:13,tocIndex:13},{value:"\u63CF\u8FF0",paraId:13,tocIndex:13},{value:"\u7C7B\u578B",paraId:13,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"visible",paraId:13,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:13,tocIndex:13},{value:"boolean",paraId:13,tocIndex:13},{value:"renderIcon",paraId:13,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:13,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:13,tocIndex:13},{value:"onVisibleChange",paraId:13,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:13,tocIndex:13},{value:"(visible: boolean) => void",paraId:13,tocIndex:13},{value:"\u5C5E\u6027",paraId:14,tocIndex:14},{value:"\u63CF\u8FF0",paraId:14,tocIndex:14},{value:"\u7C7B\u578B",paraId:14,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:14},{value:"length",paraId:14,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:14,tocIndex:14},{value:"number",paraId:14,tocIndex:14},{value:"showLimit",paraId:14,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14},{value:"true",paraId:14,tocIndex:14},{value:"errorOnly",paraId:14,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14}]},43343:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6838\u5FC3\u529F\u80FD\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Trigger",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u5E76\u7EE7\u627F\u5176\u5927\u90E8\u5206\u5C5E\u6027\uFF0C\u4F46\u662F\u4F1A\u5BF9 Trigger \u7684\u90E8\u5206\u9ED8\u8BA4\u503C\u8FDB\u884C\u8986\u76D6",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u5C11\u90E8\u5206\u6837\u5F0F\uFF0C\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\u7A0B\u5EA6\u8F83\u9AD8\u7684\u5F39\u51FA\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u8FDB\u4E00\u6B65\u6269\u5C55",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E ",paraId:2,tocIndex:3},{value:"placement",paraId:2,tocIndex:3},{value:" \u6307\u5B9A Popup \u5F39\u51FA\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"showArrow",paraId:2,tocIndex:3},{value:" \u6765\u9009\u62E9\u662F\u5426\u663E\u793A\u7BAD\u5934",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8FB9\u7F18\u68C0\u6D4B\u504F\u79FB\u4EE5\u53CA\u81EA\u52A8\u7FFB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6216\u8005\u60F3\u51CF\u5C11\u8BA1\u7B97\u5E26\u6765\u7684\u5F00\u9500\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:3,tocIndex:4},{value:"enableFlip=false",paraId:3,tocIndex:4},{value:" \u6216 ",paraId:3,tocIndex:4},{value:"enableShift=false",paraId:3,tocIndex:4},{value:" \u6765\u9009\u62E9\u6027\u5173\u95ED\u4E0D\u9700\u8981\u7684\u529F\u80FD",paraId:3,tocIndex:4},{value:"\u7981\u7528\u5F39\u51FA\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u5F39\u51FA\u5C42\u76F8\u5173\u7684\u884C\u4E3A",paraId:4,tocIndex:6},{value:"\u5F53\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u68C0\u6D4B\uFF0C\u5E76\u91CD\u65B0\u66F4\u65B0\u5F39\u51FA\u5C42\u7684\u4F4D\u7F6E",paraId:5,tocIndex:7},{value:"\u8BBE\u7F6E ",paraId:6,tocIndex:8},{value:"styles.content",paraId:6,tocIndex:8},{value:" \u6216\u8005 ",paraId:6,tocIndex:8},{value:"classNames.content",paraId:6,tocIndex:8},{value:" \u6765\u8BBE\u7F6E\u5185\u5BB9\u6837\u5F0F",paraId:6,tocIndex:8},{value:"\u5982\u679C\u9700\u8981\u8BBE\u7F6E\u4E0E\u89E6\u53D1\u5143\u7D20\u7B49\u5BBD\u7684\u5F39\u51FA\u5C42\u5BBD\u5EA6\uFF0C\u5219\u8BBE\u7F6E ",paraId:7,tocIndex:8},{value:"styles.content",paraId:7,tocIndex:8},{value:" \u4E3A ",paraId:7,tocIndex:8},{value:"{ width: 'var(--reference-width)' }",paraId:7,tocIndex:8},{value:" \u5373\u53EF\u3002",paraId:7,tocIndex:8},{value:"\u5C5E\u6027",paraId:8,tocIndex:10},{value:"\u63CF\u8FF0",paraId:8,tocIndex:10},{value:"\u7C7B\u578B",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"children",paraId:8,tocIndex:10},{value:"\u89E6\u53D1\u5143\u7D20",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"content",paraId:8,tocIndex:10},{value:"Popup \u5185\u5BB9",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"showArrow",paraId:8,tocIndex:10},{value:"\u662F\u5426\u5C55\u793A\u7BAD\u5934",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"true",paraId:8,tocIndex:10},{value:"destroyOnClose",paraId:8,tocIndex:10},{value:"\u9690\u85CF\u65F6\u662F\u5426\u9500\u6BC1",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"true",paraId:8,tocIndex:10},{value:"offset",paraId:8,tocIndex:10},{value:"\u5143\u7D20\u76F8\u5BF9\u4E8E\u89E6\u53D1\u5143\u7D20\u7684\u8DDD\u79BB",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"6",paraId:8,tocIndex:10},{value:"rootClassName",paraId:8,tocIndex:10},{value:"\u6839\u8282\u70B9 className",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"styles",paraId:8,tocIndex:10},{value:"style \u8BED\u6CD5\u7CD6",paraId:8,tocIndex:10},{value:"{ content?: CSSProperties; arrow?: CSSProperties;}",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"classNames",paraId:8,tocIndex:10},{value:"className \u8BED\u6CD5\u7CD6",paraId:8,tocIndex:10},{value:"{ content?: string; arrow?: string;}",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"\u4EE5\u4E0B\u5C5E\u6027\u7686\u7EE7\u627F\u81EA Trigger \u7EC4\u4EF6",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:10},{value:"\u63CF\u8FF0",paraId:10,tocIndex:10},{value:"\u7C7B\u578B",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"placement",paraId:10,tocIndex:10},{value:"popper \u4F4D\u7F6E",paraId:10,tocIndex:10},{value:"TriggerPlacement",paraId:10,tocIndex:10},{value:"top",paraId:10,tocIndex:10},{value:"enableFlip",paraId:10,tocIndex:10},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"true",paraId:10,tocIndex:10},{value:"enableShift",paraId:10,tocIndex:10},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"true",paraId:10,tocIndex:10},{value:"zIndex",paraId:10,tocIndex:10},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"1",paraId:10,tocIndex:10},{value:"getContainer",paraId:10,tocIndex:10},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:10,tocIndex:10},{value:"() => HTMLElement",paraId:10,tocIndex:10},{value:"document.body",paraId:10,tocIndex:10},{value:"trigger",paraId:10,tocIndex:10},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:10,tocIndex:10},{value:"TriggerType",paraId:10,tocIndex:10},{value:"hover",paraId:10,tocIndex:10},{value:"disabled",paraId:10,tocIndex:10},{value:"\u7981\u7528\u884C\u4E3A",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"delay",paraId:10,tocIndex:10},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"100",paraId:10,tocIndex:10},{value:"outFocusToClose",paraId:10,tocIndex:10},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"true",paraId:10,tocIndex:10},{value:"defaultVisible",paraId:10,tocIndex:10},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"visible",paraId:10,tocIndex:10},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"onVisibleChange",paraId:10,tocIndex:10},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:10,tocIndex:10},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10}]},67834:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},84787:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u63CF\u8FF0",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"size",paraId:1,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:1,tocIndex:6},{value:"SizeType",paraId:2,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"[SizeType, SizeType]",paraId:1,tocIndex:6},{value:"direction",paraId:1,tocIndex:6},{value:"\u65B9\u5411",paraId:1,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:1,tocIndex:6},{value:"'horizontal'",paraId:1,tocIndex:6},{value:"align",paraId:1,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:1,tocIndex:6},{value:"wrap",paraId:1,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"false",paraId:1,tocIndex:6},{value:"split",paraId:1,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u63CF\u8FF0",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"SizeType",paraId:3,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:3,tocIndex:7},{value:"ConfigSize",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"undefined",paraId:3,tocIndex:7}]},39897:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"defaultChecked",paraId:0,tocIndex:5},{value:"\u975E\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"checked",paraId:0,tocIndex:5},{value:"\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"disabled",paraId:0,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"size",paraId:0,tocIndex:5},{value:"\u5C3A\u5BF8",paraId:0,tocIndex:5},{value:"sm",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"lg",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"label",paraId:0,tocIndex:5},{value:"\u6587\u672C",paraId:0,tocIndex:5},{value:"[checked?: ReactNode, unchecked?: ReactNode]",paraId:0,tocIndex:5},{value:"loading",paraId:0,tocIndex:5},{value:"loading \u72B6\u6001",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"loadingIcon",paraId:0,tocIndex:5},{value:"\u81EA\u5B9A\u4E49 loading \u56FE\u6807",paraId:0,tocIndex:5},{value:"ReactNode",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5},{value:"onClick",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1(\u7981\u7528\u72B6\u6001\u65E0\u6548)",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5}]},44100:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[]},44115:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:4},{value:"placement",paraId:0,tocIndex:4},{value:" \u6307\u5B9A Popup \u5F39\u51FA\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",paraId:0,tocIndex:4},{value:"showArrow",paraId:0,tocIndex:4},{value:" \u6765\u9009\u62E9\u662F\u5426\u663E\u793A\u7BAD\u5934",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8FB9\u7F18\u68C0\u6D4B\u504F\u79FB\u4EE5\u53CA\u81EA\u52A8\u7FFB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6216\u8005\u60F3\u51CF\u5C11\u8BA1\u7B97\u5E26\u6765\u7684\u5F00\u9500\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:1,tocIndex:5},{value:"enableFlip=false",paraId:1,tocIndex:5},{value:" \u6216 ",paraId:1,tocIndex:5},{value:"enableShift=false",paraId:1,tocIndex:5},{value:" \u6765\u9009\u62E9\u6027\u5173\u95ED\u4E0D\u9700\u8981\u7684\u529F\u80FD",paraId:1,tocIndex:5},{value:"\u7981\u7528\u5F39\u51FA\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u5F39\u51FA\u5C42\u76F8\u5173\u7684\u884C\u4E3A",paraId:2,tocIndex:6},{value:"\u5F53\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u68C0\u6D4B\uFF0C\u5E76\u91CD\u65B0\u66F4\u65B0\u5F39\u51FA\u5C42\u7684\u4F4D\u7F6E",paraId:3,tocIndex:7},{value:"\u5176\u4F59\u5C5E\u6027\u7686\u7EE7\u627F\u81EA Popup \u7EC4\u4EF6",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:9},{value:"\u63CF\u8FF0",paraId:5,tocIndex:9},{value:"\u7C7B\u578B",paraId:5,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:9},{value:"theme",paraId:5,tocIndex:9},{value:"\u4E3B\u9898",paraId:5,tocIndex:9},{value:"'default' | 'primary' | 'success' | 'danger' | 'warning' | 'light'",paraId:5,tocIndex:9},{value:"default",paraId:5,tocIndex:9}]},49313:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 Trigger \u7EC4\u4EF6\u3002\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u4E14\u4E0D\u643A\u5E26\u4EFB\u4F55\u6837\u5F0F\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u63A8\u8350\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u6765\u66FF\u4EE3 ",paraId:1,tocIndex:0},{value:"Trigger",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u517C\u5BB9\u5EA6\u66F4\u597D\u7684\u96C6\u6210\u5E76\u5BF9\u6837\u5F0F\u8FDB\u884C\u7F8E\u5316\u3002\u66F4\u5B8C\u6574\u7684\u4F7F\u7528\u793A\u4F8B\u8BF7\u67E5\u770B ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popper.js \u6838\u5FC3\u529F\u80FD\u7684\u7EC4\u4EF6\uFF0C\u5982\u679C\u9700\u8981\u66F4\u591A\u9AD8\u5EA6\u5B9A\u5236\u5316\u7684\u9700\u6C42\uFF0C\u8BF7\u4F7F\u7528 ",paraId:2,tocIndex:1},{value:"floating-ui",paraId:2,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:3},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"offset",paraId:4},{value:" \u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u8BBE\u7F6E\u6210 ",paraId:4},{value:"number",paraId:4},{value:"\uFF0C\u5219\u4F1A\u6839\u636E\u4E3B\u8F74\u6240\u5728\u65B9\u5411\u81EA\u52A8\u504F\u79FB",paraId:4},{value:"\u4E3B\u8F74",paraId:4},{value:"\u6240\u5728\u7684\u8DDD\u79BB\uFF0C\u5982\u679C\u60F3\u8981\u540C\u65F6\u504F\u79FB\u4E3B\u8F74\u548C\u526F\u8F74\uFF0C\u8BF7\u4F7F\u7528 ",paraId:4},{value:"offset",paraId:4},{value:" \u5143\u7EC4 ",paraId:4},{value:"[number,number]",paraId:4},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:5,tocIndex:2},{value:"transform",paraId:5,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:5,tocIndex:2},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53 popper \u5173\u95ED\u65F6\uFF0C\u76F8\u5173 dom \u4F1A\u88AB\u9690\u85CF\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",paraId:6,tocIndex:4},{value:"motion.unmountOnExit",paraId:6,tocIndex:4},{value:" \u4E3A true \u53EF\u4EE5\u5728\u5173\u95ED\u65F6\u9500\u6BC1 dom",paraId:6,tocIndex:4},{value:"\u5C5E\u6027",paraId:7,tocIndex:6},{value:"\u63CF\u8FF0",paraId:7,tocIndex:6},{value:"\u7C7B\u578B",paraId:7,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:6},{value:"className",paraId:7,tocIndex:6},{value:"popper \u7684\u6839\u5143\u7D20 className",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"children",paraId:7,tocIndex:6},{value:"\u89E6\u53D1\u7684\u76EE\u6807\u5143\u7D20",paraId:7,tocIndex:6},{value:"ReactElement",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"popper",paraId:7,tocIndex:6},{value:"\u60AC\u6D6E\u5143\u7D20",paraId:7,tocIndex:6},{value:"ReactElement",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"arrow",paraId:7,tocIndex:6},{value:"\u7BAD\u5934\u5143\u7D20",paraId:7,tocIndex:6},{value:"ReactElement",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"motion",paraId:7,tocIndex:6},{value:"\u52A8\u753B props \u7EE7\u627F\u81EA ",paraId:7,tocIndex:6},{value:"react-transition-state",paraId:7,tocIndex:6},{value:"Omit<CSSMotionProps, 'children'>",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"placement",paraId:7,tocIndex:6},{value:"popper \u4F4D\u7F6E",paraId:7,tocIndex:6},{value:"TriggerPlacement",paraId:7,tocIndex:6},{value:"bottom",paraId:7,tocIndex:6},{value:"enableFlip",paraId:7,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"enableShift",paraId:7,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"offset",paraId:7,tocIndex:6},{value:"popper \u504F\u79FB\u91CF",paraId:7,tocIndex:6},{value:"number | [mainAxis: number, crossAxis: number]",paraId:7,tocIndex:6},{value:"0",paraId:7,tocIndex:6},{value:"zIndex",paraId:7,tocIndex:6},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:7,tocIndex:6},{value:"number",paraId:7,tocIndex:6},{value:"1",paraId:7,tocIndex:6},{value:"getContainer",paraId:7,tocIndex:6},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:7,tocIndex:6},{value:"() => HTMLElement",paraId:7,tocIndex:6},{value:"document.body",paraId:7,tocIndex:6},{value:"trigger",paraId:7,tocIndex:6},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:7,tocIndex:6},{value:"TriggerType",paraId:7,tocIndex:6},{value:'"hover"',paraId:7,tocIndex:6},{value:"disabled",paraId:7,tocIndex:6},{value:"\u7981\u7528\u884C\u4E3A",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"delay",paraId:7,tocIndex:6},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:7,tocIndex:6},{value:"number",paraId:7,tocIndex:6},{value:"100",paraId:7,tocIndex:6},{value:"outFocusToClose",paraId:7,tocIndex:6},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"clickOutsideClose",paraId:7,tocIndex:6},{value:"\u70B9\u51FB\u5916\u90E8\u662F\u5426\u53EF\u5173\u95ED",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"defaultVisible",paraId:7,tocIndex:6},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"visible",paraId:7,tocIndex:6},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"onVisibleChange",paraId:7,tocIndex:6},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:7,tocIndex:6},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"\u5171 12 \u4E2A\u65B9\u4F4D",paraId:8,tocIndex:7},{value:"top",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"right",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"bottom",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"left",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"top-start",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"top-end",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"right-start",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"right-end",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"bottom-start",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"bottom-end",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"left-start",paraId:9,tocIndex:7},{value:" | ",paraId:9,tocIndex:7},{value:"left-end",paraId:9,tocIndex:7},{value:"\u5BF9\u5E94 eventListener \u7684\u4E8B\u4EF6\u540D\u79F0",paraId:10,tocIndex:8},{value:"hover",paraId:11,tocIndex:8},{value:" | ",paraId:11,tocIndex:8},{value:"click",paraId:11,tocIndex:8},{value:" | ",paraId:11,tocIndex:8},{value:"focus",paraId:11,tocIndex:8},{value:" | ",paraId:11,tocIndex:8},{value:"context-menu",paraId:11,tocIndex:8}]},75437:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},55216:function(I,t){"use strict";t.Z=`import React, { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '@sqi-ui/hooks';
import { canUseDom, isFunction } from '@sqi-ui/utils';

export type PortalContainer = (() => HTMLElement | null) | null;

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
  if (isFunction(getContainer)) return getContainer();

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

  React.useImperativeHandle(ref, () => containerWrapper as HTMLDivElement, [containerWrapper]);

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
`},88402:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef, useState } from 'react';
import { throttle } from '@sqi-ui/utils';
import { useResizeObserverRect, type ObserverSizeInfo } from '@sqi-ui/hooks';
import { toArray } from '../_util/toArray';
import { getDOM, getReactNodeRef, getRefDom } from '../_util/dom';
import { useComposeRef } from '../_util/ref';

export interface ResizeObserverRectProps {
  onResize?: (sizeInfo: ObserverSizeInfo, target: ResizeObserverEntry) => void;
  children?: React.ReactElement;
  /**
   * @description \u662F\u5426\u7981\u7528 observer
   */
  disabled?: boolean;
  /**
   * @description \u8282\u6D41\u65F6\u95F4
   * @default 0
   */
  throttleMs?: number;
}

const ResizeObserverRect = forwardRef<HTMLElement, ResizeObserverRectProps>((props, ref) => {
  const { children, disabled, throttleMs = 0, onResize } = props;

  const isElement = isValidElement(children);
  const childNodes = children ? toArray(children) : [];
  const originRef = children ? getReactNodeRef<HTMLElement>(children!) : null;
  const elementRef = useRef<HTMLElement>(null);

  const [elementState, setElementState] = useState<HTMLElement | null>(null);

  const mergedRef = useComposeRef<HTMLElement>(originRef, elementRef, (node) => {
    // elementRef \u5728\u521D\u6B21\u6302\u8F7D\u65F6 useResizeObserverRect \u65E0\u6CD5\u83B7\u53D6\u5230\u503C\uFF0C\u4F7F\u7528 state
    setElementState(getDOM(node) as HTMLElement);
  });

  if (process.env.NODE_ENV !== 'production' && !isElement) {
    if (childNodes.length > 1) {
      console.error(
        '[@sqi-ui/web]: Find more than one child node with \`children\` in ResizeObserverRect. Please ensure only one child node',
      );
    } else if (childNodes.length === 0) {
      console.error('[@sqi-ui/web]: \`children\` of ResizeObserverRect is empty. Nothing is in observe.');
    } else {
      console.error('[@sqi-ui/web]: The \`children\` of ResizeObserverRect is invalid. Nothing is in observe.');
    }
  }

  useImperativeHandle(ref, () => getRefDom(elementRef) as HTMLElement);

  const throttleResize = onResize ? throttle(onResize, throttleMs) : undefined;

  useResizeObserverRect(elementState, throttleResize, !disabled);

  return isElement ? cloneElement(children as any, { ref: mergedRef }) : children;
});

ResizeObserverRect.displayName = 'ResizeObserverRect';

export default ResizeObserverRect;
`},59594:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},641:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},39487:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},73687:function(I,t){"use strict";t.Z=`.sqi-demo-motion {
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
`},38083:function(I,t){"use strict";t.Z=`import React from 'react';
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

      <Portal open={open2} getContainer={() => btnRef.current}>
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
`},83224:function(I,t){"use strict";t.Z=`import React from 'react';
import { Checkbox } from '@sqi-ui/web';
import ResizeObserver, { type ResizeObserverProps } from '../ResizeObserverRect';

export default function App() {
  const [times, setTimes] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    console.log('Ref:', textareaRef.current);
  }, []);

  const onResize: ResizeObserverProps['onResize'] = (sizeInfo) => {
    const { width, height, offsetWidth, offsetHeight } = sizeInfo;

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

      <ResizeObserver ref={textareaRef} onResize={onResize} disabled={disabled}>
        <textarea placeholder="I'm a textarea!" />
      </ResizeObserver>
    </>
  );
}
`},55606:function(I,t){"use strict";t.Z=`import { isValidElement, version } from 'react';

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
  if (node && typeof node === 'object' && isDOM(node.currentElement)) {
    return node.currentElement;
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
  if (parseInt(version, 10) >= 19) {
    return (node.props as any)?.ref || null;
  }
  // @ts-expect-error \`element.ref\` is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return node.ref;
}
`},67400:function(I,t){"use strict";t.Z=`import { useCompareMemo } from '@sqi-ui/hooks';
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

  const ReactMajorVersion = parseInt(version, 10);

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
`},63744:function(I,t){"use strict";t.Z=`import { Children, isValidElement, type ReactNode } from 'react';
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
`},31963:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},77069:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},19444:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},32962:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},12365:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},13903:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},65126:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},33864:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},39727:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},24416:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},45529:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},2523:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},67440:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},70121:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},5839:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},8555:function(I,t){"use strict";t.Z=`import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sqi',
  iconPrefix: 'sqi',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
`},98490:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},47810:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},38208:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},63219:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},94252:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},79684:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},88650:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},98052:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},85124:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},77843:function(I,t){"use strict";t.Z=`import React from 'react';
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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40, xxl: 48 }}>
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
`},50273:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},23181:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},13278:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},13088:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},39632:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},45566:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},16910:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},63575:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},86063:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},54985:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},77632:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},37253:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},43768:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},66992:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},65947:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},4231:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},47895:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},89608:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Space>
      <Popup content="This is a basic popup">
        <Button type="primary">Hover me</Button>
      </Popup>

      <Popup defaultVisible content="This is a uncontrolled popup">
        <Button type="primary">Default open</Button>
      </Popup>

      <Popup visible={visible} content="This is a control popup. You must click button to close">
        <Button type="primary" onClick={() => setVisible(!visible)}>
          Click me
        </Button>
      </Popup>
    </Space>
  );
}
`},87233:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <Space>
      <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
        Disable Popup
      </Checkbox>

      <Popup disabled={disabled} content="This is a popup">
        <Button type="primary">Hover me</Button>
      </Popup>
    </Space>
  );
}
`},73345:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Input, Popup } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Popup
      content={
        <Popup
          trigger="click"
          placement="right"
          content={
            <Popup trigger="focus" outFocusToClose={false} placement="right" content={<h4>Three Popup</h4>}>
              <Input placeholder="Focus Me" />
            </Popup>
          }
        >
          <Button type="primary">Click Me</Button>
        </Popup>
      }
    >
      <Button type="primary">Hover Me</Button>
    </Popup>
  );
}
`},64089:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Popup } from '@sqi-ui/web';

const content = (
  <span>
    <p>Here is the text content</p>
    <p>Here is the text content</p>
  </span>
);

const styles: Record<string, React.CSSProperties> = {
  container: {
    margin: '0 auto',
    width: '500px',
    height: '260px',
    position: 'relative',
  },
  top: {
    position: 'absolute',
    top: '0',
    left: '42%',
  },
  topStart: {
    position: 'absolute',
    top: '0',
    left: '70px',
  },
  topEnd: {
    position: 'absolute',
    top: '0',
    right: '70px',
  },
  bottom: {
    position: 'absolute',
    bottom: '0',
    left: '42%',
  },
  bottomStart: {
    position: 'absolute',
    bottom: '0',
    left: '70px',
    width: '120px',
  },
  bottomEnd: {
    position: 'absolute',
    bottom: '0',
    right: '70px',
  },
  left: {
    position: 'absolute',
    left: '0',
    top: '42%',
  },
  leftStart: {
    position: 'absolute',
    left: '0',
    top: '50px',
  },
  leftEnd: {
    position: 'absolute',
    left: '0',
    bottom: '50px',
  },
  right: {
    position: 'absolute',
    right: '0',
    top: '42%',
  },
  rightStart: {
    position: 'absolute',
    right: '0',
    top: '50px',
  },
  rightEnd: {
    position: 'absolute',
    right: '0',
    bottom: '50px',
  },
};
export default function Demo() {
  const [showArrow, setShowArrow] = React.useState(true);
  return (
    <>
      <Checkbox checked={showArrow} onChange={(e) => setShowArrow(e.target.checked)}>
        Show arrow
      </Checkbox>
      <div style={styles.container}>
        <Popup showArrow={showArrow} placement="top-start" content={content}>
          <Button type="primary" style={styles.topStart}>
            top-start
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="top" content={content}>
          <Button type="primary" style={styles.top}>
            top
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="top-end" content={content}>
          <Button type="primary" style={styles.topEnd}>
            top-end
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="left-start" content={content}>
          <Button type="primary" style={styles.leftStart}>
            left-start
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="left" content={content}>
          <Button type="primary" style={styles.left}>
            left
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="left-end" content={content}>
          <Button type="primary" style={styles.leftEnd}>
            left-end
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="right-start" content={content}>
          <Button type="primary" style={styles.rightStart}>
            right-start
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="right" content={content}>
          <Button type="primary" style={styles.right}>
            right
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="right-end" content={content}>
          <Button type="primary" style={styles.rightEnd}>
            right-end
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="bottom-start" content={content}>
          <Button type="primary" style={styles.bottomStart}>
            bottom-start
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="bottom" content={content}>
          <Button type="primary" style={styles.bottom}>
            bottom
          </Button>
        </Popup>
        <Popup showArrow={showArrow} placement="bottom-end" content={content}>
          <Button type="primary" style={styles.bottomEnd}>
            bottom-end
          </Button>
        </Popup>
      </div>
    </>
  );
}
`},11098:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  const [hasLongTrigger, setHasLongTrigger] = React.useState(false);

  return (
    <Space>
      <Popup content="This is a basic popup">
        <Button onClick={() => setHasLongTrigger(!hasLongTrigger)} type="primary">
          Hover me {hasLongTrigger ? 'Show many trigger content' : ''}
        </Button>
      </Popup>
    </Space>
  );
}
`},70815:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Popup, Space } from '@sqi-ui/web';

const styles = {
  container: {
    margin: 'auto',
    height: '300px',
    width: '80%',
    maxWidth: '600px',
    overflow: 'auto',
    position: 'relative',
    borderRadius: '5px',
    boxShadow: 'inset 0 0 6px 0 var(--sqi-gray-color-8)',
    scrollbarWidth: 'thin',
  } satisfies React.CSSProperties,
  containerScroll: {
    width: '350%',
    height: '300%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } satisfies React.CSSProperties,
};

export default function Demo() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [flip, setFlip] = React.useState(true);
  const [shift, setShift] = React.useState(true);

  React.useLayoutEffect(() => {
    containerRef.current?.scrollTo(containerRef.current.clientWidth + 115, containerRef.current.clientHeight);
  }, []);

  return (
    <>
      <Space style={{ marginBottom: 8 }}>
        <Checkbox checked={flip} onChange={(e) => setFlip(e.target.checked)}>
          Enable Flip
        </Checkbox>
        <Checkbox checked={shift} onChange={(e) => setShift(e.target.checked)}>
          Enable Shift
        </Checkbox>
      </Space>

      <div ref={containerRef} style={styles.container}>
        <div style={styles.containerScroll}>
          <Popup
            enableFlip={flip}
            enableShift={shift}
            visible
            content="This is a popup, you can scroll to view"
            getContainer={() => containerRef.current}
          >
            <Button type="primary">Scroll the window</Button>
          </Popup>
        </div>
      </div>
    </>
  );
}
`},85521:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Popup, Space } from '@sqi-ui/web';

export default function App() {
  return (
    <Space>
      <Popup content="This is an equal-width content" styles={{ content: { width: 'var(--reference-width)' } }}>
        <Button type="primary">Hover me</Button>
      </Popup>

      <Popup
        trigger="click"
        content="This is an equal-width content"
        styles={{ content: { width: 'var(--reference-width)' } }}
      >
        <Button type="primary">Click Long Content</Button>
      </Popup>
    </Space>
  );
}
`},21046:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Input, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Space>
      <Popup content="This is a basic popup">
        <Button type="primary">Hover me</Button>
      </Popup>

      <Popup trigger="click" content="This is a hover popup">
        <Button type="primary">Click me</Button>
      </Popup>

      <Popup trigger="focus" content="This is a focus popup">
        <Input placeholder="Focus me" />
      </Popup>

      <Popup trigger="context-menu" content="This is a context menu popup">
        <Button type="primary">Right click me</Button>
      </Popup>
    </Space>
  );
}
`},6570:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},82611:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},91811:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},98970:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},45269:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},17105:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},41448:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},6450:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},53489:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},1135:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},55205:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},48218:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},20749:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space wrap>
      {Array.from({ length: 20 }).map((_, index) => (
        <Button key={index.toString()} type="primary">
          Item{index + 1}
        </Button>
      ))}
    </Space>
  );
}
`},65313:function(I,t){"use strict";t.Z=`import React from 'react';
import { Space, Switch } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <Switch />
      <Switch label={['\u5F00', '\u5173']} />
    </Space>
  );
}
`},26291:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space, Switch } from '@sqi-ui/web';
import { AddIcon } from '@sqi-ui/icons';

export default function Demo() {
  const [loading, setLoading] = React.useState(true);

  return (
    <Space>
      <Switch loadingIcon={<AddIcon spin />} loading={loading} />

      <Button type="primary" onClick={() => setLoading(!loading)}>
        Toggle loading
      </Button>
    </Space>
  );
}
`},95772:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space, Switch } from '@sqi-ui/web';
import { CheckCircleFilledIcon, CloseCircleFilledIcon } from '@sqi-ui/icons';

export default function Demo() {
  const [loading, setLoading] = React.useState(false);

  return (
    <Space>
      <Switch size="sm" loading={loading} label={['\u5F00', '\u5173']} />
      <Switch size="md" loading={loading} label={['\u5F00', '\u5173']} />
      <Switch size="lg" loading={loading} label={['\u5F00', '\u5173']} />

      <Switch
        size="sm"
        loading={loading}
        label={[<CheckCircleFilledIcon key="1" />, <CloseCircleFilledIcon key="2" />]}
      />
      <Switch
        size="md"
        loading={loading}
        label={[<CheckCircleFilledIcon key="1" />, <CloseCircleFilledIcon key="2" />]}
      />
      <Switch
        size="lg"
        loading={loading}
        label={[<CheckCircleFilledIcon key="1" />, <CloseCircleFilledIcon key="2" />]}
      />

      <Button type="primary" onClick={() => setLoading(!loading)}>
        Toggle loading
      </Button>
    </Space>
  );
}
`},93783:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Divider, Space, Switch } from '@sqi-ui/web';

export default function Demo() {
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <Space>
        <Switch disabled={disabled} />
        <Switch defaultChecked disabled={disabled} />
        <Button type="primary" onClick={() => setDisabled(!disabled)}>
          Toggle Disabled
        </Button>
      </Space>

      <Divider />

      <Space>
        <Switch loading={loading} />
        <Switch defaultChecked loading={loading} />
        <Button type="primary" onClick={() => setLoading(!loading)}>
          Toggle Loading
        </Button>
      </Space>
    </>
  );
}
`},22019:function(I,t){"use strict";t.Z=`import React from 'react';
import { Space, Tag } from '@sqi-ui/web';
import { CheckCircleFilledIcon, CloseCircleFilledIcon } from '@sqi-ui/icons';

export default function Demo() {
  const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };

  return (
    <Space size="lg">
      <Tag>default</Tag>
      <Tag bordered>bordered</Tag>
      <Tag icon={<CheckCircleFilledIcon />}>with icon</Tag>
      <Tag closable>closeable</Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
      <Tag closable={<CloseCircleFilledIcon />}>custom close icon</Tag>
    </Space>
  );
}
`},19998:function(I,t){"use strict";t.Z=`import React from 'react';
import { Space, Tag } from '@sqi-ui/web';

const COLORS_CUSTOM = [
  '#f53f3f',
  '#7816ff',
  '#00b42a',
  '#165dff',
  '#ff7d00',
  '#eb0aa4',
  '#7bc616',
  '#86909c',
  '#b71de8',
  '#0fc6c2',
  '#ffb400',
  '#168cff',
  '#ff5722',
];

export default function Demo() {
  return (
    <Space size="lg" wrap>
      {COLORS_CUSTOM.map((color, i) => (
        <Tag key={i.toString()} closable color={color}>
          {color}
        </Tag>
      ))}
    </Space>
  );
}
`},76770:function(I,t){"use strict";t.Z=`import React from 'react';
import { Tag, Input, Space } from '@sqi-ui/web';
import { AddIcon } from '@sqi-ui/icons';

export default function Demo() {
  const [tags, setTags] = React.useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [showInput, setShowInput] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  function addTag() {
    if (inputValue) {
      tags.push(inputValue);
      setTags(tags);
      setInputValue('');
    }

    setShowInput(false);
  }

  function removeTag(removeTag: string) {
    const newTags = tags.filter((tag) => tag !== removeTag);
    setTags(newTags);
  }

  return (
    <Space size={20}>
      {tags.map((tag, index) => {
        return (
          <Tag key={tag} closable={index !== 0} onClose={() => removeTag(tag)}>
            {tag}
          </Tag>
        );
      })}
      {showInput ? (
        <Input
          autoFocus
          size="sm"
          value={inputValue}
          style={{ width: 84 }}
          onBlur={addTag}
          onChange={setInputValue}
          onEnter={addTag}
        />
      ) : (
        <Tag icon={<AddIcon />} className="add-tag" tabIndex={0} onClick={() => setShowInput(true)}>
          Add Tag
        </Tag>
      )}
    </Space>
  );
}
`},23138:function(I,t){"use strict";t.Z=`import React from 'react';
import { Space, Tag } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space size="lg">
      <Tag size="sm">Small</Tag>
      <Tag>Default</Tag>
      <Tag size="lg">Large</Tag>
    </Space>
  );
}
`},3025:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Space>
      <Tooltip content="This is a basic tooltip">
        <Button type="primary">Hover me</Button>
      </Tooltip>

      <Tooltip defaultVisible content="This is a uncontrolled tooltip">
        <Button type="primary">Default open</Button>
      </Tooltip>

      <Tooltip visible={visible} content="This is a control tooltip. You must click button to close">
        <Button type="primary" onClick={() => setVisible(!visible)}>
          Click me
        </Button>
      </Tooltip>
    </Space>
  );
}
`},15909:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <Space>
      <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
        Disable Tooltip
      </Checkbox>

      <Tooltip disabled={disabled} content="This is a tooltip">
        <Button type="primary">Hover me</Button>
      </Tooltip>
    </Space>
  );
}
`},32134:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Tooltip } from '@sqi-ui/web';

const content = 'This is a tooltip';

const styles: Record<string, React.CSSProperties> = {
  container: {
    margin: '0 auto',
    width: '500px',
    height: '260px',
    position: 'relative',
  },
  top: {
    position: 'absolute',
    top: '0',
    left: '42%',
  },
  topStart: {
    position: 'absolute',
    top: '0',
    left: '70px',
  },
  topEnd: {
    position: 'absolute',
    top: '0',
    right: '70px',
  },
  bottom: {
    position: 'absolute',
    bottom: '0',
    left: '42%',
  },
  bottomStart: {
    position: 'absolute',
    bottom: '0',
    left: '70px',
    width: '120px',
  },
  bottomEnd: {
    position: 'absolute',
    bottom: '0',
    right: '70px',
  },
  left: {
    position: 'absolute',
    left: '0',
    top: '42%',
  },
  leftStart: {
    position: 'absolute',
    left: '0',
    top: '50px',
  },
  leftEnd: {
    position: 'absolute',
    left: '0',
    bottom: '50px',
  },
  right: {
    position: 'absolute',
    right: '0',
    top: '42%',
  },
  rightStart: {
    position: 'absolute',
    right: '0',
    top: '50px',
  },
  rightEnd: {
    position: 'absolute',
    right: '0',
    bottom: '50px',
  },
};
export default function Demo() {
  const [showArrow, setShowArrow] = React.useState(true);
  return (
    <>
      <Checkbox checked={showArrow} onChange={(e) => setShowArrow(e.target.checked)}>
        Show arrow
      </Checkbox>
      <div style={styles.container}>
        <Tooltip showArrow={showArrow} placement="top-start" content={content}>
          <Button variant="outline" style={styles.topStart}>
            top-start
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="top" content={content}>
          <Button variant="outline" style={styles.top}>
            top
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="top-end" content={content}>
          <Button variant="outline" style={styles.topEnd}>
            top-end
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="left-start" content={content}>
          <Button variant="outline" style={styles.leftStart}>
            left-start
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="left" content={content}>
          <Button variant="outline" style={styles.left}>
            left
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="left-end" content={content}>
          <Button variant="outline" style={styles.leftEnd}>
            left-end
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="right-start" content={content}>
          <Button variant="outline" style={styles.rightStart}>
            right-start
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="right" content={content}>
          <Button variant="outline" style={styles.right}>
            right
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="right-end" content={content}>
          <Button variant="outline" style={styles.rightEnd}>
            right-end
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="bottom-start" content={content}>
          <Button variant="outline" style={styles.bottomStart}>
            bottom-start
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="bottom" content={content}>
          <Button variant="outline" style={styles.bottom}>
            bottom
          </Button>
        </Tooltip>
        <Tooltip showArrow={showArrow} placement="bottom-end" content={content}>
          <Button variant="outline" style={styles.bottomEnd}>
            bottom-end
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
`},13498:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  const [hasLongTrigger, setHasLongTrigger] = React.useState(false);

  return (
    <Space>
      <Tooltip content="This is a basic tooltip">
        <Button onClick={() => setHasLongTrigger(!hasLongTrigger)} type="primary">
          Hover me {hasLongTrigger ? 'Show many trigger content' : ''}
        </Button>
      </Tooltip>
    </Space>
  );
}
`},91095:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Tooltip, Space } from '@sqi-ui/web';

const styles = {
  container: {
    margin: 'auto',
    height: '300px',
    width: '80%',
    maxWidth: '600px',
    overflow: 'auto',
    position: 'relative',
    borderRadius: '5px',
    boxShadow: 'inset 0 0 6px 0 var(--sqi-gray-color-8)',
    scrollbarWidth: 'thin',
  } satisfies React.CSSProperties,
  containerScroll: {
    width: '350%',
    height: '300%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } satisfies React.CSSProperties,
};

export default function Demo() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [flip, setFlip] = React.useState(true);
  const [shift, setShift] = React.useState(true);

  React.useLayoutEffect(() => {
    containerRef.current?.scrollTo(containerRef.current.clientWidth + 115, containerRef.current.clientHeight);
  }, []);

  return (
    <>
      <Space style={{ marginBottom: 8 }}>
        <Checkbox checked={flip} onChange={(e) => setFlip(e.target.checked)}>
          Enable Flip
        </Checkbox>
        <Checkbox checked={shift} onChange={(e) => setShift(e.target.checked)}>
          Enable Shift
        </Checkbox>
      </Space>

      <div ref={containerRef} style={styles.container}>
        <div style={styles.containerScroll}>
          <Tooltip
            enableFlip={flip}
            enableShift={shift}
            visible
            content="This is a tooltip, you can scroll to view"
            getContainer={() => containerRef.current}
          >
            <Button type="primary">Scroll the window</Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
`},15215:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Space>
      <Tooltip content="this is a default tooltip">
        <Button type="default">default</Button>
      </Tooltip>
      <Tooltip content="this is a primary tooltip" theme="primary">
        <Button type="primary" status="primary">
          Primary
        </Button>
      </Tooltip>
      <Tooltip content="this is a success tooltip" theme="success">
        <Button type="primary" status="success">
          Success
        </Button>
      </Tooltip>
      <Tooltip content="this is a danger tooltip" theme="danger">
        <Button type="primary" status="danger">
          Danger
        </Button>
      </Tooltip>
      <Tooltip content="this is a warning tooltip" theme="warning">
        <Button type="primary" status="warning">
          Warning
        </Button>
      </Tooltip>
      <Tooltip content="this is a light tooltip" theme="light">
        <Button variant="outline">Light</Button>
      </Tooltip>
    </Space>
  );
}
`},74703:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Input, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Space>
      <Tooltip content="This is a hover tooltip">
        <Button type="primary">Hover me</Button>
      </Tooltip>

      <Tooltip trigger="click" content="This is a click tooltip">
        <Button type="primary">Click me</Button>
      </Tooltip>

      <Tooltip trigger="focus" content="This is a focus tooltip">
        <Input placeholder="Focus me" />
      </Tooltip>

      <Tooltip trigger="context-menu" content="This is a context menu tooltip">
        <Button type="primary">Right click me</Button>
      </Tooltip>
    </Space>
  );
}
`},44523:function(I,t){"use strict";t.Z=`import React, { forwardRef } from 'react';
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
`},71791:function(I,t){"use strict";t.Z=`import React from 'react';
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
      motion={{ timeout: 250, name: 'demo-trigger', mountOnEnter: true, preEnter: true }}
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
`},58795:function(I,t){"use strict";t.Z=`.container {
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
`},35597:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Space, Trigger, type TriggerProps } from '@sqi-ui/web';
import { Component } from './_wrapper';

const motionProps: TriggerProps['motion'] = {
  timeout: 250,
  name: 'demo-trigger',
  mountOnEnter: true,
  preEnter: true,
};

export default function Demo() {
  return (
    <Space>
      <Trigger
        motion={motionProps}
        popper={
          <Component size={110} backgroundColor="var(--sqi-bg-color-container)">
            Undestroy Popper
          </Component>
        }
      >
        <Button type="primary">Undestroy</Button>
      </Trigger>

      <Trigger
        motion={{ ...motionProps, unmountOnExit: true }}
        popper={
          <Component size={110} backgroundColor="var(--sqi-bg-color-container)">
            Destroy Popper
          </Component>
        }
      >
        <Button type="primary">Destroy</Button>
      </Trigger>
    </Space>
  );
}
`},68172:function(I,t){"use strict";t.Z=`import React from 'react';
import { Input, Space, Trigger, type TriggerProps } from '@sqi-ui/web';
import { Component } from './_wrapper';

const triggerProps: TriggerProps = {
  trigger: 'focus',
  motion: {
    timeout: 250,
    name: 'demo-trigger',
    mountOnEnter: true,
    preEnter: true,
  },
};

export default function Demo() {
  return (
    <Space>
      <Trigger
        {...triggerProps}
        popper={
          <Component size={110} backgroundColor="var(--sqi-bg-color-container)">
            Popper Element
          </Component>
        }
      >
        <Input placeholder="Focus me" />
      </Trigger>

      <Trigger
        {...triggerProps}
        outFocusToClose={false}
        popper={
          <Component size={110} backgroundColor="var(--sqi-bg-color-container)">
            Click me won't close
          </Component>
        }
      >
        <Input placeholder="Focus me" />
      </Trigger>
    </Space>
  );
}
`},33623:function(I,t){"use strict";t.Z=`.sqi-demo-trigger-motion {
  transition:
    transform 150ms ease-in-out,
    opacity 150ms ease-in-out;
}

.sqi-demo-trigger-motion.sqi-demo-trigger-motion-preEnter,
.sqi-demo-trigger-motion.sqi-demo-trigger-motion-exiting {
  opacity: 0;
  transform: scale(0.8);
}

.sqi-demo-trigger-motion.sqi-demo-trigger-motion-exited {
  display: none;
}
`},87729:function(I,t){"use strict";t.Z=`import React from 'react';
import { Trigger, Radio, Divider, Input, Checkbox } from '@sqi-ui/web';
import type { RadioChangeEvent, TriggerPlacement, CheckboxValue } from '@sqi-ui/web';
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
  const [placement, setPlacement] = React.useState<TriggerPlacement>('bottom');
  const [detectEdge, setDetectEdge] = React.useState<string[]>(['flip', 'shift']);
  const [offset, setOffset] = React.useState<string>();
  const [showArrow, setShowArrow] = React.useState(true);

  React.useLayoutEffect(() => {
    containerRef.current?.scrollTo(containerRef.current.clientWidth + 115, containerRef.current.clientHeight);
  }, []);

  function changeDirection(e: RadioChangeEvent) {
    setPlacement(e.target.value as TriggerPlacement);
  }

  function changeDetectEdge(value: CheckboxValue[]) {
    setDetectEdge(value as string[]);
  }

  return (
    <>
      <div ref={containerRef} className={styles.container}>
        <div className={styles['container-scroll']}>
          <Trigger
            visible
            enableFlip={detectEdge.includes('flip')}
            enableShift={detectEdge.includes('shift')}
            offset={offset ? Number(offset) : undefined}
            placement={placement}
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
      <Radio.Group value={placement} onChange={changeDirection} options={positions} style={{ marginBottom: 10 }} />

      <Divider style={{ margin: '8px 0' }} text="Detect Edge" align="left" />
      <Checkbox.Group value={detectEdge} onChange={changeDetectEdge} options={['flip', 'shift']} />

      <Divider style={{ margin: '8px 0' }} text="Arrow" align="left" />
      <Checkbox checked={showArrow} onChange={(e) => setShowArrow(e.target.checked)}>
        Enable Arrow
      </Checkbox>

      <Divider style={{ margin: '8px 0' }} text="Offset" align="left" />
      <Input prefix="offsetValue" value={offset} onChange={setOffset} placeholder="Please enter offset value" />
    </>
  );
}
`},98630:function(I,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),o=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),l=Symbol.for("react.view_transition"),i=Symbol.for("react.client.reference");function c(r){if(typeof r=="object"&&r!==null){var a=r.$$typeof;switch(a){case e:switch(r=r.type,r){case v:case m:case s:case x:case h:case l:return r;default:switch(r=r&&r.$$typeof,r){case o:case p:case d:case f:return r;case u:return r;default:return a}}case n:return a}}}t.ContextConsumer=u,t.ContextProvider=o,t.Element=e,t.ForwardRef=p,t.Fragment=v,t.Lazy=d,t.Memo=f,t.Portal=n,t.Profiler=m,t.StrictMode=s,t.Suspense=x,t.SuspenseList=h,t.isContextConsumer=function(r){return c(r)===u},t.isContextProvider=function(r){return c(r)===o},t.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===e},t.isForwardRef=function(r){return c(r)===p},t.isFragment=function(r){return c(r)===v},t.isLazy=function(r){return c(r)===d},t.isMemo=function(r){return c(r)===f},t.isPortal=function(r){return c(r)===n},t.isProfiler=function(r){return c(r)===m},t.isStrictMode=function(r){return c(r)===s},t.isSuspense=function(r){return c(r)===x},t.isSuspenseList=function(r){return c(r)===h},t.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===v||r===m||r===s||r===x||r===h||typeof r=="object"&&r!==null&&(r.$$typeof===d||r.$$typeof===f||r.$$typeof===o||r.$$typeof===u||r.$$typeof===p||r.$$typeof===i||r.getModuleId!==void 0)},t.typeOf=c},87829:function(I,t,e){"use strict";I.exports=e(98630)},37797:function(I,t,e){"use strict";e.d(t,{D:function(){return v}});var n=e(21077);function v(s,m,u){const o=(0,n.useRef)({});return(!("value"in o.current)||u(o.current.condition,m))&&(o.current.value=s(),o.current.condition=m),o.current.value}},60164:function(I,t,e){"use strict";e.d(t,{L:function(){return m}});var n=e(21077),v=e(34028);const m=(0,v.J)()?n.useLayoutEffect:n.useEffect},7657:function(I,t,e){"use strict";e.d(t,{S:function(){return v}});var n=e(21077);function v(s,m={},u={}){return(0,n.useMemo)(()=>{const o=M(M({},m),u),p=M({},s);for(const x in o)p[x]===void 0&&(p[x]=o[x]);return p},[s,m,u])}},62222:function(I,t,e){"use strict";e.d(t,{R:function(){return m}});var n=e(21077),v=e(80703),s=e(45844);function m(u,o){const{defaultValue:p,value:x,onChange:h}=o||{},[f,d]=(0,n.useState)(()=>(0,v.o8)(x)?(0,v.o8)(p)?(0,v.mf)(u)?u():u:(0,v.mf)(p)?p():p:x),l=(0,s.D)(x),i=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(i.current){i.current=!1;return}(0,v.o8)(x)&&l!==x&&d(x)},[x]);const c=(0,v.o8)(x)?f:x,r=(0,n.useCallback)(a=>{const C=(0,v.mf)(a)?a(c):a;(0,v.o8)(x)&&d(C),!Object.is(C,c)&&(h==null||h(C))},[x,c,h]);return[c,r]}},45844:function(I,t,e){"use strict";e.d(t,{D:function(){return v}});var n=e(21077);function v(s){const m=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{m.current=s},[s]),m.current}},37828:function(I,t,e){"use strict";e.d(t,{_:function(){return o}});var n=e(21077),v=e(20759),s=e(34028),m=e(60164);const u=window.ResizeObserver||v.Z;function o(p,x,h=!0){const f=(0,n.useRef)(null);f.current=x;const d=(0,n.useRef)({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1});(0,m.L)(()=>{let l=null;if(!h||!(0,s.J)()||!p)return;const i=c=>{var U;const r=c[0],{width:a,height:C}=r.contentRect,g=p.offsetWidth,E=p.offsetHeight;(d.current.width!==a||d.current.height!==C||d.current.offsetWidth!==g||d.current.offsetHeight!==E)&&(d.current={width:a,height:C,offsetWidth:g,offsetHeight:E},(U=f.current)==null||U.call(f,d.current,r))};return l=new u(i),l.observe(p),()=>{l&&p&&(l.unobserve(p),l.disconnect(),l=null)}},[p,h])}},31136:function(I,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(21077);const s=(0,n.createContext)({})},37907:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(7829),s=e(31136);const m=(0,n.forwardRef)((o,p)=>{const g=o,{svg:x,type:h,spin:f,rotate:d,className:l,style:i}=g,c=Be(g,["svg","type","spin","rotate","className","style"]),{prefixCls:r="sqi"}=(0,n.useContext)(s.Z),a=(0,v.default)(`${r}-icon`,{[`${r}-icon-spin`]:!!f&&!!x},l),C=i||{};return Number.isSafeInteger(d)&&(C.transform=`rotate(${d}deg)`),n.createElement("span",M({role:"img",ref:p,"aria-label":h,className:a,style:C},c),x)});m.displayName="Icon";const u=m},46874:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"add",ref:p},o)));m.displayName="AddIcon";const u=m},1824:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"browse",ref:p},o)));m.displayName="BrowseIcon";const u=m},85569:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"browse-off",ref:p},o)));m.displayName="BrowseOffIcon";const u=m},23436:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"check-circle-filled",ref:p},o)));m.displayName="CheckCircleFilledIcon";const u=m},46608:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"chevron-down",ref:p},o)));m.displayName="ChevronDownIcon";const u=m},58360:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"close-circle-filled",ref:p},o)));m.displayName="CloseCircleFilledIcon";const u=m},27377:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"close",ref:p},o)));m.displayName="CloseIcon";const u=m},50397:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"info-circle-filled",ref:p},o)));m.displayName="InfoCircleFilledIcon";const u=m},60333:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"loading",ref:p},o)));m.displayName="LoadingIcon";const u=m},36106:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"search",ref:p},o)));m.displayName="SearchIcon";const u=m},65466:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"upload",ref:p},o)));m.displayName="UploadIcon";const u=m},21925:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(21077),v=e(37907);function s(o){return(0,n.createElement)("svg",M({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,M({svg:(0,n.createElement)(s),type:"warn-circle-filled",ref:p},o)));m.displayName="WarnCircleFilledIcon";const u=m},5629:function(I,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return s.Z},BrowseIcon:function(){return u.Z},BrowseOffIcon:function(){return m.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return p.Z},CloseCircleFilledIcon:function(){return x.Z},CloseIcon:function(){return h.Z},IconContext:function(){return v.Z},InfoCircleFilledIcon:function(){return f.Z},LoadingIcon:function(){return d.Z},SearchIcon:function(){return l.Z},UploadIcon:function(){return i.Z},WarnCircleFilledIcon:function(){return c.Z},default:function(){return r}});var n=e(37907),v=e(31136),s=e(46874),m=e(85569),u=e(1824),o=e(23436),p=e(46608),x=e(58360),h=e(27377),f=e(50397),d=e(60333),l=e(36106),i=e(65466),c=e(21925);const r=n.Z},34028:function(I,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(I,t,e){"use strict";e.d(t,{D:function(){return n}});function n(v,s){let m=null;const u=function(...o){m&&clearTimeout(m),m=setTimeout(()=>{v.apply(this,o),m=null},s)};return u.cancel=()=>{m&&(clearTimeout(m),m=null)},u}},80703:function(I,t,e){"use strict";e.d(t,{HD:function(){return u},Kn:function(){return o},Qr:function(){return p},hj:function(){return x},kJ:function(){return m},mf:function(){return v},o8:function(){return s}});const n=Object.prototype.toString;function v(h){return n.call(h)==="[object Function]"}function s(h){return h===void 0}function m(h){return n.call(h)==="[object Array]"}function u(h){return n.call(h)==="[object String]"}const o=h=>n.call(h)==="[object Object]",p=h=>{if(!o(h))return!0;for(const f in h)if(Object.prototype.hasOwnProperty.call(h,f))return!1;return!0},x=h=>n.call(h)==="[object Number]"&&!Number.isNaN(h)},12598:function(I,t,e){"use strict";e.d(t,{C:function(){return n}});function n(v,s){const m=Object.assign({},v);return Array.isArray(s)&&s.forEach(u=>{delete m[u]}),m}},6890:function(I,t,e){"use strict";e.d(t,{P:function(){return v}});var n=e(78831);function v(s,m){let u=null;const o=(0,n.D)(s,m),p=(...x)=>{u===null?u=Date.now():Date.now()-u>=m&&(u=Date.now(),o.cancel()),o(...x)};return p.cancel=o.cancel,p}},92266:function(I,t,e){"use strict";e.d(t,{C:function(){return m},Z:function(){return u}});var n=e(21077),v=e(7829),s=e(62222);const m=(0,n.forwardRef)((o,p)=>{const O=o,{prefixCls:x,className:h,style:f,checked:d,disabled:l,defaultChecked:i=!1,type:c="checkbox",title:r,onChange:a,_getCheckedValue:C}=O,g=Be(O,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[E,U]=(0,s.R)(i,{value:d});(0,n.useEffect)(()=>{C==null||C(E)},[E]);const S=(0,v.default)(x,h,{[`${x}-checked`]:E,[`${x}-disabled`]:l}),R=X=>{l||("checked"in o||U(X.target.checked),a==null||a({target:ue(M({},o),{checked:X.target.checked}),event:X}))};return n.createElement("span",{className:S,title:r,style:f},n.createElement("input",ue(M({},g),{className:`${x}-input`,ref:p,onChange:R,disabled:l,checked:E,type:c})),n.createElement("span",{className:`${x}-inner`}))});m.displayName="BaseCheckbox";const u=m},40549:function(I,t,e){"use strict";e.d(t,{Z:function(){return p}});var n=e(21077),v=e(7829),s=e(52291),m=e(80703),u=e(57577);const o=(0,n.forwardRef)((x,h)=>{const f=(0,n.useContext)(u.E),U=x,{children:d,name:l,prefixCls:i}=U,c=Be(U,["children","name","prefixCls"]),[r,a]=(0,s.Y)(c),C=(0,n.isValidElement)(d);(0,n.useImperativeHandle)(h,()=>({toggle:a}));const g=`${i||f.prefixCls}${l?`-${l}`:""}`,E=(0,v.default)([`${g}-motion`],{[`${g}-motion-${r.status}`]:r.status});return(0,m.mf)(d)?r.isMounted?d(ue(M({},r),{className:E,toggle:a})):null:C?r.isMounted?(0,n.cloneElement)(d,{className:(0,v.default)(d.props.className,E)}):null:d});o.displayName="CSSMotion";const p=o},4814:function(I,t,e){"use strict";e.d(t,{sQ:function(){return u},t4:function(){return f},x1:function(){return p}});var n=e(37797),v=e(80703),s=e(21077),m=e(98630);const u=(...d)=>{const l=d.filter(Boolean);return l.length<=1?l[0]:i=>{d.forEach(c=>{o(c,i)})}},o=(d,l)=>{(0,v.mf)(d)?d(l):(0,v.Kn)(d)&&"current"in d&&(d.current=l)},p=(...d)=>(0,n.D)(()=>u(...d),d,(l,i)=>l.length!==i.length||l.every((c,r)=>c!==i[r])),x=d=>{var c,r;if(!d)return!1;const l=parseInt(s.version,10);if(h(d)&&l>=19)return!0;const i=(0,m.isMemo)(d)?d.type.type:d.type;return!(typeof i=="function"&&!((c=i.prototype)!=null&&c.render)&&i.$$typeof!==m.ForwardRef||typeof d=="function"&&!((r=d.prototype)!=null&&r.render)&&d.$$typeof!==m.ForwardRef)};function h(d){return(0,s.isValidElement)(d)&&!(0,m.isFragment)(d)}const f=d=>h(d)&&x(d)},21299:function(I,t,e){"use strict";e.d(t,{q:function(){return s}});var n=e(21077),v=e(98630);function s(m){let u=[];return n.Children.toArray(m).forEach(o=>{o!=null&&(Array.isArray(o)?u=u.concat(s(o)):(0,n.isValidElement)(o)&&(0,v.isFragment)(o)&&o.props?u=u.concat(s(o.props.children)):u.push(o))}),u}},69203:function(I,t,e){"use strict";e.d(t,{b:function(){return r}});var n=e(21077),v=e(7829),s=e(7657),m=e(23436),u=e(50397),o=e(58360),p=e(21925),x=e(27377),h=e(40549),f=e(57577);const d={type:"info",showIcon:!0},l={success:m.Z,info:u.Z,error:o.Z,warning:p.Z},i=(0,n.forwardRef)((C,g)=>{const{prefixCls:E,componentConfig:U}=(0,n.useContext)(f.E),{className:S,style:R,title:O,description:X,type:j,closable:k,showIcon:D,action:w,icon:A,onClose:T}=(0,s.S)(C,d,U==null?void 0:U.Alert),Y=(0,n.useRef)(null),G=()=>(0,n.isValidElement)(A)?A:j?(0,n.createElement)(l[j]):null,K=(0,v.default)(`${E}-alert`,`${E}-alert-${j}`,S),Q=J=>{var ie;(ie=Y.current)==null||ie.toggle(),T==null||T(J)};return n.createElement(h.Z,{ref:Y,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},n.createElement("div",{role:"alert",className:K,style:R,ref:g},D&&n.createElement("div",{className:`${E}-alert-icon`},G()),n.createElement("div",{className:`${E}-alert-content`},!!O&&n.createElement("div",{className:`${E}-alert-title`},O),n.createElement("div",{className:`${E}-alert-description`},X)),w&&n.createElement("div",{className:`${E}-alert-action`},w),k&&n.createElement("button",{type:"button",className:`${E}-alert-close`,onClick:Q},n.createElement(x.Z,null))))});i.displayName="Alert";const r=i,a=null},60884:function(I,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(21077),v=e(7829),s=e(60333),m=e(7657),u=e(57577);const o={type:"default",variant:"default",htmlType:"button"},p=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,size:c="md",componentConfig:r}=(0,n.useContext)(u.E),te=(0,m.S)(d,o,r==null?void 0:r.Button),{children:C,type:g,size:E=c,htmlType:U,status:S,loading:R,disabled:O,variant:X,icon:j,loadingIcon:k,href:D,target:w,onClick:A,anchorProps:T={}}=te,Y=Be(te,["children","type","size","htmlType","status","loading","disabled","variant","icon","loadingIcon","href","target","onClick","anchorProps"]),G=k||n.createElement(s.Z,{spin:R}),K=R?G:j,Q=D?"link":g,J=(0,v.default)(`${i}-btn`,`${i}-btn-${Q}`,{[`${i}-btn-size-${E}`]:E,[`${i}-btn-status-${S}`]:!!S,[`${i}-btn-variant-${X}`]:X,[`${i}-btn-loading`]:R,[`${i}-btn-disabled`]:O}),ie=q=>{if(R||O)return void q.preventDefault();A==null||A(q)};return D?n.createElement("a",ue(M({},T),{href:D,target:w,className:(0,v.default)(J,T.className),onClick:ie,ref:l}),K,n.createElement("span",null,C)):n.createElement("button",ue(M({},Y),{type:U,className:J,onClick:ie,ref:l}),K,n.createElement("span",null,C))});p.displayName="Button";const h=p,f=null},67824:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(21077),v=e(7829),s=e(7657),m=e(45844),u=e(80703),o=e(92266),p=e(4814),x=e(57577),h=e(81372);const f={defaultChecked:!1,indeterminate:!1},d=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(x.E),C=(0,n.useContext)(h.w),G=(0,s.S)(i,f,a==null?void 0:a.Checkbox),{children:g,style:E,className:U,indeterminate:S}=G,R=Be(G,["children","style","className","indeterminate"]),[O,X]=(0,n.useState)(!1),j="disabled"in R?R.disabled:C.disabled,k=(0,m.D)(R.value),D=(0,n.useRef)(null);(0,n.useEffect)(()=>{var K;(K=C.registerValue)==null||K.call(C,R.value)},[C,R.value]),(0,n.useEffect)(()=>{var K,Q;return R.value!==k&&((K=C.unregisterValue)==null||K.call(C,k),(Q=C.registerValue)==null||Q.call(C,R.value)),()=>{var J;return(J=C.unregisterValue)==null?void 0:J.call(C,R.value)}},[C,R.value]),(0,n.useEffect)(()=>{D.current&&(D.current.indeterminate=S)},[S]);const w=M({},R);(0,u.Qr)(C)||(w.onChange=(...K)=>{var Q,J;(Q=R.onChange)==null||Q.call(R,...K),(J=C.toggleOption)==null||J.call(C,R.value)},w.name=C.name,w.checked=C.value.includes(R.value));const A=(0,v.default)(`${r}-checkbox-wrapper`,{[`${r}-checkbox-wrapper-checked`]:w.checked,[`${r}-checkbox-wrapper-disabled`]:j},U),T=K=>{var Q;(0,u.mf)(g)&&(K.preventDefault(),(Q=D.current)==null||Q.click())},Y=()=>(0,u.o8)(g)?null:(0,u.mf)(g)?g({checked:"checked"in w?!!w.checked:O}):n.createElement("span",{className:`${r}-checkbox-label`},g);return n.createElement("label",{className:A,onClick:T},n.createElement(o.C,ue(M({},w),{type:"checkbox",ref:(0,p.sQ)(c,D),disabled:j,prefixCls:`${r}-checkbox`,className:(0,v.default)({[`${r}-checkbox-indeterminate`]:S}),style:ue(M({},E),{display:(0,u.mf)(g)?"none":void 0}),_getCheckedValue:X})),Y())});d.displayName="Checkbox";const l=d},56104:function(I,t,e){"use strict";e.d(t,{Z:function(){return f}});var n=e(21077),v=e(7829),s=e(7657),m=e(80703),u=e(57577),o=e(81372),p=e(67824);const x={},h=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(u.E),r=(0,n.useId)(),te=(0,s.S)(d,x,c==null?void 0:c.CheckboxGroup),{defaultValue:a,children:C,options:g,className:E,style:U,disabled:S,name:R=r,onChange:O,renderOption:X}=te,j=Be(te,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[k,D]=(0,n.useState)(j.value||a||[]),[w,A]=(0,n.useState)([]),T=(0,n.useRef)([]);(0,n.useEffect)(()=>{T.current=w},[w]),(0,n.useEffect)(()=>{"value"in j&&D(j.value||[])},[j.value]);const Y=(0,n.useCallback)(q=>{A(z=>[...z,q])},[]),G=(0,n.useCallback)(q=>{A(z=>z.filter(ge=>ge!==q))},[]),K=(0,n.useMemo)(()=>g==null?void 0:g.map(q=>(0,m.HD)(q)||(0,m.hj)(q)?{label:q,value:q}:q),[g]),Q=(0,n.useCallback)(q=>{const z=[...k],ge=k.indexOf(q);ge===-1?z.push(q):z.splice(ge,1),"value"in j||D(z);const re=z.filter(oe=>T.current.includes(oe));O==null||O(re)},[k,O]);let J=C;if((0,m.kJ)(K)&&K.length>0){const q=(0,m.mf)(X);J=K.map(z=>{const ge=k.includes(z.value),re=q?()=>X(ue(M({},z),{checked:ge})):z.label;return n.createElement(p.Z,{key:`checkbox-group-options-${z.value}`,className:z.className,style:z.style,disabled:"disabled"in z?z.disabled:S,value:z.value,checked:ge,id:z.id,title:z.title,onChange:z.onChange},re)})}const ie=(0,n.useMemo)(()=>({name:R,value:k,disabled:S,toggleOption:Q,registerValue:Y,unregisterValue:G}),[R,k,S,Q,Y,G]);return n.createElement("div",{className:(0,v.default)(`${i}-checkbox-group`,E),style:U,ref:l},n.createElement(o.w.Provider,{value:ie},J))});h.displayName="CheckboxGroup";const f=h},81372:function(I,t,e){"use strict";e.d(t,{w:function(){return v}});var n=e(21077);const v=(0,n.createContext)({})},89946:function(I,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return p},CheckboxGroup:function(){return x},default:function(){return h}});var n=e(67824),v=e(56104),s=e(558),m=e.n(s),u={};for(var o in s)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(u[o]=function(f){return s[f]}.bind(0,o));e.d(t,u);const p=n.Z;p.Group=v.Z;const x=p.Group,h=p},558:function(){},57577:function(I,t,e){"use strict";e.d(t,{$:function(){return v},E:function(){return s}});var n=e(21077);const v={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(v)},83405:function(I,t,e){"use strict";e.d(t,{i:function(){return p}});var n=e(21077),v=e(12598),s=e(7657),m=e(31136),u=e(57577);function o(x){const h=(0,s.S)(x,u.$),{iconPrefix:f,children:d}=h,l=(0,v.C)(h,["children"]),i=f?m.Z.Provider:n.Fragment;return n.createElement(u.E.Provider,{value:l},n.createElement(i,{value:{prefixCls:f}},d))}o.displayName="ConfigProvider";const p=o},48380:function(I,t,e){"use strict";e.d(t,{i:function(){return x}});var n=e(21077),v=e(7829),s=e(7657),m=e(57577);const u={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((f,d)=>{const{prefixCls:l,componentConfig:i}=(0,n.useContext)(m.E),{direction:c,align:r,dashed:a,className:C,children:g,text:E,style:U}=(0,s.S)(f,u,i==null?void 0:i.Divider),S=g||E,R=c!=="vertical"&&!!S,O=(0,v.default)(`${l}-divider`,{[`${l}-divider-${c}`]:c,[`${l}-divider-with-text`]:R,[`${l}-divider-with-text-${r}`]:R,[`${l}-divider-dashed`]:!!a},C);return n.createElement("div",{className:O,style:U,ref:d},R&&n.createElement("span",{className:`${l}-divider-inner-text`},S))});o.displayName="Divider";const x=o,h=null},17599:function(I,t,e){"use strict";e.d(t,{J:function(){return k},X:function(){return j}});var n=e(21077),v=e(7829),s=e(7657),m=e(80703),u=e(57577);const o=["xxl","xl","lg","md","sm","xs"],p={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},x=Object.keys(p),h=new Map;let f=-1,d={};const i={handlers:{},dispatch(D){return d=D,h.forEach(w=>{w(d)}),h.size>=1},subscribe(D){return h.size||this.register(),f+=1,h.set(f,D),D(d),f},unsubscribe(D){h.delete(D),h.size||this.unregister()},register(){x.forEach(D=>{const w=({matches:Y})=>{this.dispatch(ue(M({},d),{[D]:Y}))},A=p[D],T=window.matchMedia(A);T.addListener(w),this.handlers[A]={mql:T,listener:w},w(T)})},unregister(){x.forEach(D=>{const w=p[D],A=this.handlers[w];A==null||A.mql.removeListener(A==null?void 0:A.listener)}),h.clear()}},r=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},C=(0,n.forwardRef)((D,w)=>{const{prefixCls:A,componentConfig:T}=(0,n.useContext)(u.E),Ee=(0,s.S)(D,a,T==null?void 0:T.Row),{align:Y,justify:G,gutter:K,className:Q,wrap:J,children:ie,style:te}=Ee,q=Be(Ee,["align","justify","gutter","className","wrap","children","style"]),[z,ge]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const xe=i.subscribe(Pe=>{((0,m.Kn)(K)||(0,m.kJ)(K)&&((0,m.Kn)(K[0])||(0,m.Kn)(K[1])))&&ge(Pe)});return()=>i.unsubscribe(xe)},[K]);const re=oe();function oe(){const xe=[void 0,void 0];return((0,m.kJ)(K)?K:[K,void 0]).forEach((Ce,Ne)=>{if((0,m.Kn)(Ce))for(let Se=0;Se<o.length;Se++){const De=o[Se];if(z[De]&&Ce[De]!==void 0){xe[Ne]=Ce[De];break}}else xe[Ne]=Ce}),xe}const ce=(0,v.default)(`${A}-row`,{[`${A}-row-nowrap`]:J===!1,[`${A}-row-align-${Y}`]:Y,[`${A}-row-justify-${G}`]:G},Q),[ne,pe]=re,ye=(0,n.useMemo)(()=>({gutter:[ne,pe],wrap:J}),[ne,pe,J]),H={},be=(0,m.hj)(ne)&&ne!==0,Me=(0,m.hj)(pe)&&pe!==0;if(be||Me){const xe=-ne/2,Pe=-pe/2;xe&&(H.marginLeft=xe,H.marginRight=xe),Pe&&(H.marginTop=Pe,H.marginBottom=Pe)}return n.createElement(r.Provider,{value:ye},n.createElement("div",ue(M({},q),{ref:w,className:ce,style:M(M({},te),H)}),ie))});C.displayName="Row";const g=C,E={offset:0};function U(D){return(0,m.hj)(D)?`${D} ${D} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(D)?`0 0 ${D}`:D}const S=["xs","sm","md","lg","xl","xxl"],R=(D,w)=>{let A={};return S.forEach(T=>{const Y=D[T];if(!Y)return;let G={};(0,m.hj)(Y)?G.span=Y:(0,m.Kn)(Y)&&(G=Y),A=ue(M({},A),{[`${w}-col-${T}-${G.span}`]:(0,m.hj)(G.span),[`${w}-col-${T}-order-${G.order}`]:G.order,[`${w}-col-${T}-offset-${G.offset}`]:G.offset})}),A},O=(0,n.forwardRef)((D,w)=>{const{componentConfig:A,prefixCls:T}=(0,n.useContext)(u.E),{gutter:Y}=(0,n.useContext)(r),Ee=(0,s.S)(D,E,A==null?void 0:A.Col),{span:G,offset:K,children:Q,className:J,style:ie,flex:te,order:q,xs:z,sm:ge,md:re,lg:oe,xl:ce,xxl:ne}=Ee,pe=Be(Ee,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),ye=R({xs:z,sm:ge,md:re,lg:oe,xl:ce,xxl:ne},T),H=(0,v.default)(`${T}-col`,{[`${T}-col-${G}`]:(0,m.hj)(G),[`${T}-col-offset-${K}`]:K,[`${T}-col-order-${q}`]:q},ye,J),be={};if(Y){const xe=Y[0]?Y[0]/2:0,Pe=Y[1]?Y[1]/2:0;xe&&(be.paddingLeft=xe,be.paddingRight=xe),Pe&&(be.paddingTop=Pe,be.paddingBottom=Pe)}const Me={};return te&&(Me.flex=U(te)),n.createElement("div",ue(M({ref:w},pe),{className:H,style:M(M(M({},ie),Me),be)}),Q)});O.displayName="Col";const X=O,j=g,k=X},45990:function(I,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return v.z},Col:function(){return p.J},ConfigProvider:function(){return u.i},Divider:function(){return o.i},Input:function(){return x.I},Popup:function(){return h.G},Row:function(){return p.X},Space:function(){return d.T},Switch:function(){return l.r},Tag:function(){return i.V},Tooltip:function(){return c.u}});var n=e(69203),v=e(60884),s=e(89946),a={};for(var m in s)["default","Alert","Button"].indexOf(m)<0&&(a[m]=function(C){return s[C]}.bind(0,m));e.d(t,a);var u=e(83405),o=e(48380),p=e(17599),x=e(38312),h=e(58692),f=e(37663),a={};for(var m in f)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup"].indexOf(m)<0&&(a[m]=function(g){return f[g]}.bind(0,m));e.d(t,a);var d=e(92595),l=e(9090),i=e(74597),c=e(34442),r=e(36112),a={};for(var m in r)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup","Radio","RadioButton","RadioGroup","Space","Switch","Tag","Tooltip"].indexOf(m)<0&&(a[m]=function(g){return r[g]}.bind(0,m));e.d(t,a)},38312:function(I,t,e){"use strict";e.d(t,{I:function(){return c}});var n=e(21077),v=e(7829),s=e(7657),m=e(62222),u=e(80703),o=e(58360),p=e(85569),x=e(1824),h=e(57577);const f={type:"text",size:"md",align:"left",visibilityToggle:!0};function d(a,C,g){let E;return E=a===null||(0,u.o8)(a)||(0,u.HD)(a)?a||"":String(a),(0,u.hj)(C)&&!g?E.slice(0,C):E}const l=(0,n.forwardRef)((a,C)=>{const{prefixCls:g,componentConfig:E}=(0,n.useContext)(h.E),he=(0,s.S)(a,f,E==null?void 0:E.Input),{size:U,status:S,align:R,disabled:O,allowClear:X,placeholder:j,variant:k="outline",addonBefore:D,addonAfter:w,prefix:A,suffix:T,value:Y,defaultValue:G,type:K,className:Q,style:J,readOnly:ie,visibilityToggle:te,maxLength:q,tips:z,composing:ge,onKeyDown:re,onFocus:oe,onBlur:ce,onChange:ne,onEnter:pe,onCompositionStart:ye,onCompositionEnd:H}=he,be=Be(he,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","composing","onKeyDown","onFocus","onBlur","onChange","onEnter","onCompositionStart","onCompositionEnd"]),Me=(0,n.useRef)(null),Ee=(0,n.useRef)(null),xe=(0,n.useRef)(!1);(0,n.useImperativeHandle)(C,()=>({currentElement:Me.current,inputElement:Ee.current,focus:()=>{var B;return(B=Ee.current)==null?void 0:B.focus()},blur:()=>{var B;return(B=Ee.current)==null?void 0:B.blur()},select:()=>{var B;return(B=Ee.current)==null?void 0:B.select()}}));const[Pe,Ce]=(0,n.useState)(!1),Ne=B=>{O||ie||(Ce(!0),oe==null||oe(B))},Se=B=>{O||ie||(Ce(!1),ce==null||ce(B))},De=B=>{B.key==="Enter"&&(pe==null||pe(B)),re==null||re(B)},Ge=B=>{ge&&(xe.current=!0),ye==null||ye(B)},He=B=>{xe.current&&(xe.current=!1,Ze(B)),H==null||H(B)},we=(0,u.hj)(q)?q:q==null?void 0:q.length,ze=(0,u.hj)(q)?!1:q==null?void 0:q.errorOnly,Ae=(0,u.hj)(q)?!0:(q==null?void 0:q.showLimit)!==!1,[fe,Re]=(0,m.R)(G,{value:Y}),Te=d(fe,we,ze),Oe=(0,u.hj)(we)?Te.length>we:!1,Ze=B=>{const ee=B.currentTarget.value;Re(ee),xe.current||(ne==null||ne(ee,B))},Fe=()=>{var B;O||(B=Ee.current)==null||B.focus()},Ue=(0,v.default)(`${g}-input`,{[`${g}-input-variant-${k}`]:k,[`${g}-input-size-${U}`]:U,[`${g}-input-disabled`]:O,[`${g}-input-align-${R}`]:R,[`${g}-input-status-${S}`]:S,[`${g}-input-focus`]:Pe,[`${g}-input-limit-length-error`]:Oe},Q),Ve=(0,v.default)(`${g}-input-real`),Qe=X&&Te&&!O,ke=n.createElement(o.Z,null),y=B=>{B.stopPropagation(),Re(""),ne==null||ne("",B)},b=Qe&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,v.default)(`${g}-input-suffix`,`${g}-input-clear`),onClick:y},ke),P=(0,u.Kn)(te)&&!(0,u.o8)(te.visible),[N,V]=(0,n.useState)(K),Z=(0,u.Kn)(te)?te.visible:te;(0,n.useEffect)(()=>{V(P?Z?"text":"password":K)},[K,P,Z]);const $=()=>{var ee;if(O)return;const B=N==="password"?"text":"password";V(B),P&&((ee=te.onVisibleChange)==null||ee.call(te,B==="text"))},W=K==="password",L=(0,n.useMemo)(()=>W?(0,u.Kn)(te)&&(0,u.mf)(te.renderIcon)?te.renderIcon(N==="text"):N==="password"?n.createElement(p.Z,null):N==="text"?n.createElement(x.Z,null):null:T,[W,N,te,T]),F=(0,n.useMemo)(()=>function({children:B}){const ee=D||w;let se=B;return ee&&(se=n.createElement("div",{ref:Me,className:`${g}-input-group`},se)),z&&(se=n.createElement("div",{ref:Me,className:`${g}-input-group-extra`},se)),se},[g,D,w,z]),_=A&&n.createElement("span",{className:`${g}-input-prefix`},A),me=L&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,v.default)(`${g}-input-suffix`,{[`${g}-input-suffix-password`]:W}),onClick:$,onMouseDown:B=>B.preventDefault(),onMouseUp:B=>B.preventDefault()},L),de=(0,u.hj)(we)&&Ae&&n.createElement("span",{className:`${g}-input-limit-length-text`},Te.length,"/",we),ae=z&&n.createElement("div",{className:(0,v.default)(`${g}-input-tips`,{[`${g}-input-tips-status-${S}`]:S})},z),ve=n.createElement("div",{role:"group",ref:D||w?void 0:Me,className:Ue,style:J,onClick:Fe},_,n.createElement("input",ue(M({ref:Ee},be),{type:N,value:Te,readOnly:ie,className:Ve,placeholder:j,disabled:O,onChange:Ze,onFocus:Ne,onBlur:Se,onKeyDown:De,onCompositionStart:Ge,onCompositionEnd:He})),b,me,de),Ie=D&&n.createElement("span",{className:(0,v.default)(`${g}-input-group-addon`)},D),le=w&&n.createElement("span",{className:(0,v.default)(`${g}-input-group-addon`)},w);return n.createElement(F,null,Ie,ve,le,ae)});l.displayName="Input";const c=l,r=null},58692:function(I,t,e){"use strict";e.d(t,{G:function(){return h},Z:function(){return f}});var n=e(21077),v=e(7829),s=e(7657),m=e(36112),u=e(57577);const o={trigger:"hover",placement:"top",showArrow:!0,destroyOnClose:!0,offset:6},p=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(u.E),D=(0,s.S)(d,o,c==null?void 0:c.Popup),{children:r,content:a,destroyOnClose:C,showArrow:g,styles:E,classNames:U,rootClassName:S}=D,R=Be(D,["children","content","destroyOnClose","showArrow","styles","classNames","rootClassName"]),O=(0,n.useRef)(null);if((0,n.useImperativeHandle)(l,()=>O.current),!r)return null;const X=(0,n.isValidElement)(r)?r:n.createElement("span",null,r),j=()=>n.createElement("div",{style:E==null?void 0:E.content,className:(0,v.default)(`${i}-popup-content`,U==null?void 0:U.content)},a),k=()=>{if(g)return n.createElement("div",{style:E==null?void 0:E.arrow,className:(0,v.default)(`${i}-popup-arrow`,U==null?void 0:U.arrow)})};return n.createElement(m.default,ue(M({},R),{ref:O,className:(0,v.default)(`${i}-popup`,S),motion:{timeout:200,name:"popup",mountOnEnter:!0,preEnter:!0,unmountOnExit:C},popper:j(),arrow:k()}),X)});p.displayName="Popup";const h=p,f=h},74052:function(I,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(21077),v=e(7829),s=e(7657),m=e(80703),u=e(92266),o=e(4814),p=e(57577),x=e(83595);const h={defaultChecked:!1},f=(0,n.forwardRef)((l,i)=>{var K;const{prefixCls:c,componentConfig:r}=(0,n.useContext)(p.E),a=(0,n.useContext)(x.Z),G=(0,s.S)(l,h,r==null?void 0:r.Radio),{_IS_BUTTON_:C,value:g,children:E,style:U}=G,S=Be(G,["_IS_BUTTON_","value","children","style"]),R=Q=>{var J,ie;(J=S.onChange)==null||J.call(S,Q),(ie=a==null?void 0:a.onChange)==null||ie.call(a,Q)},O=M({},S);let X="md";(0,m.Qr)(a)||(O.name=a.name,O.onChange=R,O.checked=g===a.value,O.disabled=(K=O.disabled)!=null?K:a.disabled,X=a.size?a.size:X);const[j,k]=(0,n.useState)(!1),D=C?`${c}-radio-button`:`${c}-radio`,w=(0,v.default)(`${D}-wrapper`,{[`${D}-wrapper-disabled`]:O.disabled,[`${D}-wrapper-checked`]:O.checked,[`${D}-wrapper-size-${X}`]:X,[`${D}-wrapper-filled`]:a.buttonVariant==="filled"}),A=()=>(0,m.o8)(E)?null:(0,m.mf)(E)?E({checked:"checked"in O?!!O.checked:j}):n.createElement("span",{className:`${D}-label`},E),T=(0,n.useRef)(null),Y=Q=>{var J;(0,m.mf)(E)&&(Q.preventDefault(),(J=T.current)==null||J.click())};return n.createElement("label",{className:w,onClick:Y},n.createElement(u.Z,ue(M(M({},S),O),{ref:(0,o.sQ)(i,T),value:g,type:"radio",prefixCls:D,style:ue(M({},U),{display:(0,m.mf)(E)?"none":void 0}),disabled:O.disabled,_getCheckedValue:k})),A())});f.displayName="Radio";const d=f},89312:function(I,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(21077),v=e(74052);const s=(0,n.forwardRef)((u,o)=>n.createElement(v.Z,ue(M({_IS_BUTTON_:!0},u),{ref:o})));s.displayName="RadioButton";const m=s},59803:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(21077),v=e(7829),s=e(7657),m=e(62222),u=e(80703),o=e(57577),p=e(83595),x=e(74052),h=e(89312);const f={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},d=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(o.E),C=(0,s.S)(i,f,a==null?void 0:a.RadioGroup),g=(0,n.useId)(),{className:E,style:U,name:S=g,value:R,defaultValue:O,children:X,disabled:j,size:k,buttonVariant:D,renderOption:w,onChange:A,appearance:T,options:Y}=C,[G,K]=(0,m.R)(O,{value:R}),Q=(0,n.useCallback)(q=>{const z=q.target.value;"value"in C||K(z),z!==G&&(A==null||A(q))},[C.value,G,A]);let J=X;const ie=T==="button"?h.Z:x.Z;if((0,u.kJ)(Y)&&Y.length>0){const q=(0,u.mf)(w);J=Y.map(z=>{if((0,u.HD)(z)||(0,u.hj)(z)){const oe=G===z,ce=q?()=>w({label:z,value:z,checked:oe}):z;return n.createElement(ie,{key:z.toString(),disabled:j,value:z,checked:oe},ce)}const ge=G===z.value,re=q?()=>w(ue(M({},z),{checked:ge})):z.label;return n.createElement(ie,{key:`radio-group-options-${z.value}`,className:z.className,style:z.style,disabled:z.disabled||j,value:z.value,checked:ge,id:z.id,title:z.title,onChange:z.onChange},re)})}const te=(0,n.useMemo)(()=>({name:S,value:G,disabled:j,size:k,buttonVariant:D,onChange:Q}),[S,G,j,k,D,Q]);return n.createElement("div",{ref:c,className:(0,v.default)(`${r}-radio-group`,E),style:U},n.createElement(p.Z.Provider,{value:te},J))});d.displayName="RadioGroup";const l=d},83595:function(I,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(21077);const s=(0,n.createContext)({})},37663:function(I,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return x},RadioButton:function(){return f},RadioGroup:function(){return h},default:function(){return d}});var n=e(74052),v=e(89312),s=e(59803),m=e(63149),u=e.n(m),o={};for(var p in m)["default","Radio","RadioButton","RadioGroup"].indexOf(p)<0&&(o[p]=function(l){return m[l]}.bind(0,p));e.d(t,o);const x=n.Z;x.Group=s.Z,x.Button=v.Z;const h=x.Group,f=x.Button,d=x},63149:function(){},92595:function(I,t,e){"use strict";e.d(t,{T:function(){return d}});var n=e(21077),v=e(7829),s=e(80703),m=e(7657),u=e(21299),o=e(57577);const p={sm:8,md:16,lg:24},x={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,size:a="md",componentConfig:C}=(0,n.useContext)(o.E),G=(0,m.S)(i,x,C==null?void 0:C.Space),{className:E,children:U,size:S=a,direction:R="horizontal",align:O,split:X,wrap:j=!1}=G,k=Be(G,["className","children","size","direction","align","split","wrap"]),D=(0,u.q)(U),w=R==="horizontal"&&O===void 0?"center":O,A=(0,v.default)(`${r}-space`,`${r}-space-direction-${R}`,{[`${r}-space-align-${w}`]:w,[`${r}-space-wrap`]:j},E),T=(0,n.useCallback)(K=>{const Q=(0,s.kJ)(S)?S:[S,S],[J,ie]=Q.map(te=>(0,s.HD)(te)?p[te]:te||0);return j?{marginRight:J,marginBottom:ie}:R==="vertical"?{marginBottom:ie}:{marginRight:K?void 0:J}},[S,R,j]),Y=D.map((K,Q)=>{const J=Q===D.length-1,ie=(K==null?void 0:K.key)||`space-item-${Q.toString()}`;return n.createElement(n.Fragment,{key:ie},n.createElement("div",{className:"space-item",style:T(J)},K),!J&&X&&n.createElement("span",{className:"sqi-space-item-split"},X))});return n.createElement("div",ue(M({className:A},k),{ref:c}),Y)});h.displayName="Space";const d=h,l=null},9090:function(I,t,e){"use strict";e.d(t,{r:function(){return f}});var n=e(21077),v=e(7829),s=e(7657),m=e(62222),u=e(60333),o=e(57577);const p={label:[],loading:!1,disabled:!1},x=(0,n.forwardRef)((l,i)=>{const{prefixCls:c,size:r="md",componentConfig:a}=(0,n.useContext)(o.E),K=(0,s.S)(l,p,a==null?void 0:a.Switch),{checked:C,defaultChecked:g,className:E,disabled:U,size:S=r,label:R,loading:O,loadingIcon:X,onChange:j,onClick:k}=K,D=Be(K,["checked","defaultChecked","className","disabled","size","label","loading","loadingIcon","onChange","onClick"]),[w,A]=(0,m.R)(!1,{value:C,defaultValue:g});function T(Q){if(U||O)return;const J=!w;A(J),j==null||j(J,Q),k==null||k(J,Q)}const Y=(0,v.default)(`${c}-switch`,{[`${c}-switch-checked`]:w,[`${c}-switch-disabled`]:U,[`${c}-switch-loading`]:O,[`${c}-switch-${S}`]:S},E),G=X||n.createElement(u.Z,{spin:!0});return n.createElement("button",ue(M({},D),{type:"button",role:"switch","aria-checked":w,ref:i,className:Y,disabled:U||O,onClick:T}),n.createElement("div",{className:`${c}-switch-handle`},O&&G),n.createElement("div",{className:`${c}-switch-content`},w?R[0]:R[1]))});x.displayName="Switch";const f=x,d=null},74597:function(I,t,e){"use strict";e.d(t,{V:function(){return h}});var n=e(21077),v=e(7829),s=e(7657),m=e(27377),u=e(57577);const o={},p=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,size:c="md",componentConfig:r}=(0,n.useContext)(u.E),K=(0,s.S)(d,o,r==null?void 0:r.Tag),{children:a,className:C,size:g=c,title:E,bordered:U,icon:S,closable:R,onClose:O,color:X,style:j,onClick:k}=K,D=Be(K,["children","className","size","title","bordered","icon","closable","onClose","color","style","onClick"]),[w,A]=(0,n.useState)(!0),T=(0,v.default)(`${i}-tag`,{[`${i}-tag-size-${g}`]:g,[`${i}-tag-has-color`]:X,[`${i}-tag-bordered`]:U},C),Y=Q=>{Q.stopPropagation(),O==null||O(Q),!Q.defaultPrevented&&A(!1)},G=()=>{if(!R)return null;const Q=`${i}-tag-close-icon`;return(0,n.isValidElement)(R)?(0,n.cloneElement)(R,{className:Q,onClick:J=>{var ie,te;(te=(ie=R.props).onClick)==null||te.call(ie,J),J.defaultPrevented||Y(J)}}):n.createElement(m.Z,{onClick:Y,className:Q})};return w===!1?null:n.createElement("span",ue(M({},D),{ref:l,title:E,className:T,style:ue(M({},j),{backgroundColor:X}),onClick:k,role:"button",tabIndex:0,"aria-label":"close"}),S,a,G())});p.displayName="Tag";const h=p,f=null},34442:function(I,t,e){"use strict";e.d(t,{u:function(){return h}});var n=e(21077),v=e(7829),s=e(7657),m=e(57577),u=e(58692);const o={theme:"default",trigger:"hover",placement:"top",showArrow:!0,destroyOnClose:!0,offset:6},p=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(m.E),E=(0,s.S)(d,o,c==null?void 0:c.Tooltip),{classNames:r,rootClassName:a,theme:C}=E,g=Be(E,["classNames","rootClassName","theme"]);return n.createElement(u.Z,ue(M({rootClassName:(0,v.default)(`${i}-tooltip`,{[`${i}-tooltip-${C}`]:C},a),classNames:{arrow:(0,v.default)(r==null?void 0:r.arrow,`${i}-tooltip-arrow`),content:(0,v.default)(r==null?void 0:r.content,`${i}-tooltip-content`)}},g),{ref:l}))});p.displayName="Tooltip";const h=p,f=null},54056:function(I,t,e){"use strict";var Qe,ke;e.d(t,{Z:function(){return Ve}});var n=e(21077),v=e(7829),s=e(7657),m=e(62222),u=e(60164),o=e(6890),p=e(37828),x=e(21299);function h(y){return y instanceof HTMLElement||y instanceof SVGElement}function f(y){return y&&typeof y=="object"&&h(y.currentElement)?y.currentElement:h(y)?y:null}function d(y){if(y)return y.current&&typeof y.current=="object"&&"currentElement"in y.current?y.current.currentElement:y.current}function l(y){var P;return y&&(0,n.isValidElement)(y)?parseInt(n.version,10)>=19?((P=y.props)==null?void 0:P.ref)||null:y.ref:null}var i=e(4814);const c=(0,n.forwardRef)((y,b)=>{const{children:P,disabled:N,throttleMs:V=0,onResize:Z}=y,$=(0,n.isValidElement)(P),W=P?(0,x.q)(P):[],L=P?l(P):null,F=(0,n.useRef)(null),[_,me]=(0,n.useState)(null),de=(0,i.x1)(L,F,ve=>{me(f(ve))});(0,n.useImperativeHandle)(b,()=>d(F));const ae=Z?(0,o.P)(Z,V):void 0;return(0,p._)(_,ae,!N),$?(0,n.cloneElement)(P,{ref:de}):P});c.displayName="ResizeObserverRect";const r=c;var a=e(33393),C=e(34028),g=e(80703);const E=(0,C.J)();function U(y){return E?(0,g.mf)(y)?y():document.body:null}const S=(0,n.forwardRef)((y,b)=>{const{getContainer:P,prefixCls:N,children:V,open:Z=!0,rootStyle:$}=y,[W,L]=(0,n.useState)(null),[F,_]=(0,n.useState)(null),me=F||document.body;(0,n.useEffect)(()=>{const ae=U(P);_(ae||null)},[P]);const de=()=>{if(!E||W)return null;const ae=document.createElement("div");N&&(ae.className=`${N}-portal-wrapper`),$&&Object.assign(ae.style,$),ae.setAttribute("data-portal","true"),L(ae)};return(0,u.L)(()=>{E&&(Z?de():L(null))},[Z]),n.useImperativeHandle(b,()=>W,[W]),(0,u.L)(()=>{if(!E||!W)return;const ae=()=>!W.parentNode&&me.appendChild(W),ve=()=>{var Ie;return(Ie=W.parentNode)==null?void 0:Ie.removeChild(W)};return Z?ae():ve(),()=>{ve()}},[Z,W]),Z&&V&&W?(0,a.createPortal)(V,W):null});S.displayName="Portal";const R=S;var O=e(40549),X=e(57577);const j="Escape",D=y=>{const{trigger:b,delay:P,disabled:N,visible:V,clickOutsideClose:Z,triggerEl:$,outFocusToClose:W=!0,onVisibleChange:L}=y,F=(0,n.useRef)(!1),_=(0,n.useRef)(!1),me=(0,n.useRef)(null),de=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(N)return;const le=he=>{var B;(B=$==null?void 0:$.contains)!=null&&B.call($,he.target)||F.current||V&&Z&&(L==null||L(!1,{e:he,trigger:"document"}))};return document.addEventListener("mousedown",le),document.addEventListener("touchend",le),()=>{document.removeEventListener("mousedown",le),document.removeEventListener("touchend",le)}},[N,V,$,Z,L]);function ae(le){P?(clearTimeout(me.current),me.current=setTimeout(le,P)):le()}function ve(){return N?{}:{onMouseEnter:le=>{b==="hover"&&!_.current&&(clearTimeout(me.current),L==null||L(!0,{e:le,trigger:"hover"}))},onMouseLeave:le=>{b==="hover"&&(_.current=!0,clearTimeout(me.current),L==null||L(!1,{e:le,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(de.current),F.current=!0,de.current=window.setTimeout(()=>{F.current=!1})},onTouchEnd:()=>{clearTimeout(de.current),F.current=!0,de.current=window.setTimeout(()=>{F.current=!1})}}}function Ie(le){return N?{}:{onClick:B=>{var ee,se;b==="click"&&(B.preventDefault(),B.stopPropagation(),ae(()=>L==null?void 0:L(!V,{e:B,trigger:"click"}))),(se=(ee=le.props).onClick)==null||se.call(ee,B)},onTouchStart:B=>{var ee,se;b==="hover"&&(_.current=!1,ae(()=>L==null?void 0:L(!0,{e:B,trigger:"hover"}))),(se=(ee=le.props).onTouchStart)==null||se.call(ee,B)},onMouseEnter:B=>{var ee,se;b==="hover"&&(_.current=!1,ae(()=>L==null?void 0:L(!0,{e:B,trigger:"hover"}))),(se=(ee=le.props).onMouseEnter)==null||se.call(ee,B)},onMouseLeave:B=>{var ee,se;b==="hover"&&(_.current=!1,ae(()=>L==null?void 0:L(!1,{e:B,trigger:"hover"}))),(se=(ee=le.props).onMouseLeave)==null||se.call(ee,B)},onFocus:B=>{var ee,se;b==="focus"&&ae(()=>L==null?void 0:L(!0,{e:B,trigger:"focus"})),(se=(ee=le.props).onFocus)==null||se.call(ee,B)},onBlur:B=>{var ee,se;if(b==="focus"){if(F.current&&!W)return;ae(()=>L==null?void 0:L(!1,{e:B,trigger:"blur"}))}(se=(ee=le.props).onBlur)==null||se.call(ee,B)},onContextMenu:B=>{var ee,se;b==="context-menu"&&(B.preventDefault(),ae(()=>L==null?void 0:L(!0,{e:B,trigger:"context-menu"}))),(se=(ee=le.props).onContextMenu)==null||se.call(ee,B)},onKeyDown:B=>{var ee,se;(B==null?void 0:B.key)===j&&ae(()=>L==null?void 0:L(!1,{e:B,trigger:"keydown-esc"})),(se=(ee=le.props).onKeyDown)==null||se.call(ee,B)}}}return{genPopupProps:ve,genTriggerProps:Ie}};function w(y,b){const{reference:P,popper:N}=y,[V,Z="center"]=b.split("-"),W=V==="top"||V==="bottom"?"x":"y",L=W==="x"?"width":"height",F=P.x+P.width/2-N.width/2,_=P.y+P.height/2-N.height/2,me=P[L]/2-N[L]/2;let de;switch(V){case"top":de={x:F,y:P.y-N.height};break;case"bottom":de={x:F,y:P.y+P.height};break;case"right":de={x:P.x+P.width,y:_};break;case"left":de={x:P.x-N.width,y:_};break;default:de={x:P.x,y:P.y}}switch(Z){case"start":de[W]-=me;break;case"end":de[W]+=me;break;default:break}return de}const A={width:0,height:0,x:0,y:0,top:0,right:0,bottom:0,left:0},T={top:"bottom",right:"left",bottom:"top",left:"right"};function Y(y){const b=y.getBoundingClientRect();let P=1,N=1;y instanceof HTMLElement&&(P=y.offsetWidth>0&&Math.round(b.width)/y.offsetWidth||1,N=y.offsetHeight>0&&Math.round(b.height)/y.offsetHeight||1);const V=b.left/P,Z=b.top/N,$=b.width/P,W=b.height/N;return{width:$,height:W,top:Z,right:V+$,bottom:Z+W,left:V,x:V,y:Z}}function G(y){const{x:b,y:P,width:N,height:V}=y;return{width:N,height:V,top:P,left:b,right:b+N,bottom:P+V,x:b,y:P}}function K(y){const b=Q(y);return G({width:Math.max(0,b.right-b.left),height:Math.max(0,b.bottom-b.top),x:b.left,y:b.top})}function Q(y){var P,N,V,Z;const b=M({},A);if(y instanceof Window){const $=y.visualViewport;b.width=(P=$==null?void 0:$.width)!=null?P:y.document.documentElement.clientWidth,b.height=(N=$==null?void 0:$.height)!=null?N:y.document.documentElement.clientHeight,b.x=(V=$==null?void 0:$.offsetLeft)!=null?V:0,b.y=(Z=$==null?void 0:$.offsetTop)!=null?Z:0}else{const $=Y(y),W=$.top+y.clientTop,L=$.left+y.clientLeft;b.width=y.clientWidth,b.height=y.clientHeight,b.x=L,b.y=W}return G(b)}function J(y){return y&&y.ownerDocument.defaultView||window}function ie(y){const{overflow:b,overflowX:P,overflowY:N,display:V}=J(y).getComputedStyle(y);return/auto|scroll|overlay|hidden|clip/.test(b+N+P)&&!["contents"].includes(V)}function te(y){if(!y)return[];const b=[];let P=y.parentElement;for(;P;)ie(P)&&b.push(P),P=P.parentElement;return b}function q(y={}){const b=[...te(y.reference),...te(y.popper),y.popper&&J(y.popper)].filter(Boolean);return[...new Set(b)]}function z(y){return te(y)[0]||J(y)}function ge(y,b){return{reference:Y(y),popper:Y(b)}}function re(y,b,P={}){if(!y||!b)throw new Error("`reference` or `popper` is missing");const{placement:N="bottom",middleware:V=[]}=P;let Z=ge(y,b);const $=K(z(y)),W=V.filter(Boolean);let{x:L,y:F}=w(Z,N),_=N,me={},de=0;for(let ae=0;ae<W.length;ae++){const{name:ve,fn:Ie}=W[ae],{x:le,y:he,data:B,reset:ee}=Ie({x:L,y:F,initialPlacement:N,placement:_,middlewareData:me,rects:Z,elements:{reference:y,popper:b},boundaryRect:$});L=le!=null?le:L,F=he!=null?he:F,me=ue(M({},me),{[ve]:M(M({},me[ve]),B)}),ee&&de<10&&(de++,typeof ee=="object"&&(ee.placement&&(_=ee.placement),ee.rects&&(Z=ee.rects===!0?ge(y,b):ee.rects),{x:L,y:F}=w(Z,_)),ae=-1)}return{x:L,y:F,placement:_,middlewareData:me,rects:Z}}function oe(y){return y.split("-")}function ce(y){const[b,P]=oe(y),N=T[b];return P?`${N}-${P}`:N}const pe=()=>({name:"shift",options:{},fn:y=>{const{placement:b,rects:P,x:N,y:V,boundaryRect:Z}=y,{popper:$}=P,W=G({height:$.height,width:$.width,x:N,y:V}),[L]=oe(b);let F=0,_=0;switch(L){case"top":case"bottom":W.left<Z.left?F=Z.left-W.left:W.right>Z.right&&(F=Z.right-W.right);break;case"left":case"right":W.top<Z.top?_=Z.top-W.top:W.bottom>Z.bottom&&(_=Z.bottom-W.bottom);break}return F!==0||_!==0?{x:N+F,y:V+_,data:{offsetX:F,offsetY:_}}:{}}}),ye=(y,b,P)=>Math.min(Math.max(y,b),P),be=y=>({name:"arrow",options:y,fn:b=>{const{placement:P,rects:N,x:V,y:Z}=b,{reference:$,popper:W}=N,{element:L}=y;if(!L)return{};const F=Y(L),[_,me="center"]=oe(P),de=_==="top"||_==="bottom",ae=de?"x":"y",ve=de?"width":"height",Ie={x:V,y:Z};de?Ie.y=_==="top"?Ie.y-F.height:Ie.y+F.height:Ie.x=_==="left"?Ie.x-F.width:Ie.x+F.width;const le={x:$.x+$.width/2-Ie.x,y:$.y+$.height/2-Ie.y};let he={x:0,y:0};switch(_){case"top":he={x:le.x-F.width/2,y:W.height};break;case"bottom":he={x:le.x-F.width/2,y:-F.height};break;case"left":he={x:W.width,y:le.y-F.height/2};break;case"right":he={x:-F.width,y:le.y-F.height/2};break}const B=0,ee=W[ve]-F[ve];if(he[ae]=ye(he[ae],B,ee),me!=="center"){const se=$[ae]-(de?Ie.x:Ie.y),qe=se+$[ve],_e=0,Ye=W[ve];let Ke;Ke=me==="start"?ye(se,_e,Math.min(qe-F[ve],Ye-F[ve])):ye(qe-F[ve],Math.max(se,_e),Ye-F[ve]),he[ae]=Ke}return ue(M({},Ie),{data:{x:he.x,y:he.y,rect:F}})}}),Ee=(y={})=>({name:"offset",options:y,fn:b=>{const{placement:P,x:N,y:V}=b,{offset:Z=0}=y;if(Z===0)return{};if(typeof Z=="number"){const[$]=oe(P);let W=0,L=0;switch($){case"top":L=-Z;break;case"bottom":L=Z;break;case"left":W=-Z;break;case"right":W=Z;break}return{x:N+W,y:V+L,data:{offsetX:W,offsetY:L}}}if(Array.isArray(Z)){const[$,W]=Z,[L]=oe(P);let F=0,_=0;switch(L){case"top":_=-$;break;case"bottom":_=$;break;case"left":F=-$;break;case"right":F=$;break}switch(L){case"top":case"bottom":F+=W;break;case"left":case"right":_+=W;break}return{x:N+F,y:V+_,data:{offsetX:F,offsetY:_}}}return{}}}),Pe=(y={})=>({name:"flip",options:y,fn:b=>{const{placement:P,rects:N,x:V,y:Z,boundaryRect:$}=b,{boundary:W}=y,[L]=oe(P),F=W?K(W):$,{popper:_}=N,me=G({height:_.height,width:_.width,x:V,y:Z});if(!Ce(L,{boundary:F,popper:me}))return{};const ae=ce(P),[ve]=oe(ae);return Ce(ve,{boundary:F,popper:me})?{}:{reset:{rects:!0,placement:ae}}}});function Ce(y,b){const{popper:P,boundary:N}=b;let V=!1;switch(y){case"top":V=P.top<N.top;break;case"bottom":V=P.bottom>N.bottom;break;case"left":V=P.left<N.left;break;case"right":V=P.right>N.right;break}return V}function Ne(y){const{listenBoundary:b,scroll:P=!0,resize:N=!0,update:V,elements:Z}=y,$=b?[...b]:q(Z);return V&&($.forEach(W=>{P&&W.addEventListener("scroll",V,{passive:!0})}),N&&parent.addEventListener("resize",V)),()=>{V&&($.forEach(W=>{P&&W.removeEventListener("scroll",V)}),N&&parent.removeEventListener("resize",V))}}const Se="undefined",De=typeof window!==Se?window:{},Ge=typeof performance!==Se?performance:Date,He=()=>Ge.now(),we="cancelAnimationFrame";let Ae=(Qe=De["requestAnimationFrame"])==null?void 0:Qe.bind(De),fe=(ke=De[we])==null?void 0:ke.bind(De);if((!Ae||!fe)&&(["webkit","ms","moz","o"].some(y=>(Ae=De[`${y}RequestAnimationFrame`],fe=De[`${y}CancelAnimationFrame`]||De[`${y}CancelRequestAnimationFrame`],!!Ae&&!!fe)),!Ae||!fe)){let y=0;Ae=b=>{const P=He(),N=Math.max(y+1e3/60,P);return setTimeout(()=>{y=N,b(y)},N-P)},fe=b=>clearTimeout(b)}const Te={placement:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:1,trigger:"hover",delay:100,outFocusToClose:!0,clickOutsideClose:!0},Oe={position:"fixed",top:0,left:0,bottom:"auto",right:"auto",margin:0},Ze=ue(M({},Oe),{willChange:"transform"}),Fe=ue(M({},Oe),{willChange:"top,left"}),Ue=(0,n.forwardRef)((y,b)=>{const{componentConfig:P,prefixCls:N}=(0,n.useContext)(X.E),{className:V,children:Z,popper:$,enableShift:W,motion:L={},enableFlip:F,offset:_,placement:me,getContainer:de,zIndex:ae,trigger:ve,delay:Ie,outFocusToClose:le,disabled:he,defaultVisible:B,visible:ee,arrow:se,clickOutsideClose:qe,onVisibleChange:_e}=(0,s.S)(y,Te,P==null?void 0:P.Trigger),Ye=(0,n.isValidElement)(Z),[Ke,dn]=(0,n.useState)(null),[$e,cn]=(0,n.useState)(null),[Je,pn]=(0,n.useState)(null),mn=l($),rn=(0,n.useRef)(null),fn=(0,i.x1)(mn,rn),an=(0,n.useRef)(null),We=(0,n.useRef)(null),[Xe,vn]=(0,m.R)(!1,{defaultValue:B,value:ee,onChange:_e}),{genPopupProps:In,genTriggerProps:xn}=D({clickOutsideClose:qe,delay:Ie,disabled:he,visible:Xe,onVisibleChange:vn,trigger:ve,triggerEl:Ke,outFocusToClose:le});(0,n.useImperativeHandle)(b,()=>({reference:Ke,popper:rn.current,rootPopper:$e}));const bn=(0,i.t4)(Z),Rn=(0,i.t4)($),je=(0,n.useCallback)(()=>{if(!Ke||!$e)return;const{middlewareData:Le,x:nn,y:tn,placement:gn,rects:yn}=re(Ke,$e,{placement:me,middleware:[W?pe():void 0,be({element:Je}),Ee({offset:_}),F?Pe():void 0]});$e.style.transform=`translate(${nn}px, ${tn}px)`,$e.setAttribute("data-trigger-placement",gn),$e.style.setProperty("--reference-width",`${yn.reference.width}px`),Je&&(Je.style.top=`${Le.arrow.y}px`,Je.style.left=`${Le.arrow.x}px`)},[me,Ke,$e,Je,F,W,_]),en=(0,n.useCallback)(()=>{var Le;(Le=We.current)==null||Le.call(We),Ke&&$e&&(We.current=Ne({update:()=>Ae(je),elements:{reference:Ke,popper:$e}}))},[je,Ke,$e]);if((0,u.L)(()=>(je(),en(),()=>{var Le;return(Le=We.current)==null?void 0:Le.call(We)}),[je,en]),(0,u.L)(()=>{var Le,nn,tn;Xe!==void 0&&(Xe===!0?((Le=an.current)==null||Le.toggle(!0),Ae(()=>{je(),en()})):Xe===!1&&((nn=an.current)==null||nn.toggle(!1),(tn=We.current)==null||tn.call(We)))},[Xe,je,en]),!Ye)return;const hn=()=>$?(0,n.createElement)(O.Z,M({ref:an},L),({className:Le})=>(0,n.createElement)(R,{getContainer:de},(0,n.createElement)("div",ue(M({},In()),{ref:cn,className:`${N}-trigger`,style:ue(M({},Ze),{zIndex:ae})}),(0,n.createElement)("div",{role:"tooltip",className:(0,v.default)(Le,V)},se?(0,n.createElement)("div",{ref:pn,style:ue(M({},Fe),{zIndex:ae})},se):null,(0,n.cloneElement)($,{ref:fn}))))):null;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r,{ref:dn,onResize:()=>Ae(je)},(0,n.cloneElement)(Z,M({},xn(Z)))),hn())});Ue.displayName="Trigger";const Ve=Ue},36112:function(I,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return p}});var n=e(54056),v=e(98479),s=e.n(v),m={};for(var u in v)["default","Trigger"].indexOf(u)<0&&(m[u]=function(x){return v[x]}.bind(0,u));e.d(t,m);const o=n.Z,p=o},98479:function(){},84176:function(I,t,e){var n=e(75863);function v(s,m){if(s==null)return{};var u=n(s,m),o,p;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(s);for(p=0;p<x.length;p++)o=x[p],!(m.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(u[o]=s[o])}return u}I.exports=v,I.exports.__esModule=!0,I.exports.default=I.exports},75863:function(I){function t(e,n){if(e==null)return{};var v={},s=Object.keys(e),m,u;for(u=0;u<s.length;u++)m=s[u],!(n.indexOf(m)>=0)&&(v[m]=e[m]);return v}I.exports=t,I.exports.__esModule=!0,I.exports.default=I.exports},7829:function(I,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return v}});function n(s){var m,u,o="";if(typeof s=="string"||typeof s=="number")o+=s;else if(typeof s=="object")if(Array.isArray(s)){var p=s.length;for(m=0;m<p;m++)s[m]&&(u=n(s[m]))&&(o&&(o+=" "),o+=u)}else for(u in s)s[u]&&(o&&(o+=" "),o+=u);return o}function v(){for(var s,m,u=0,o="",p=arguments.length;u<p;u++)(s=arguments[u])&&(m=n(s))&&(o&&(o+=" "),o+=m);return o}t.default=v},52291:function(I,t,e){"use strict";e.d(t,{Y:function(){return m}});var n=e(21077),v=e(87808);const s=(u,o,p,x,h)=>{clearTimeout(x.current);const f=(0,v.y0)(u);o(f),p.current=f,h&&h({current:f})},m=({enter:u=!0,exit:o=!0,preEnter:p,preExit:x,timeout:h,initialEntered:f,mountOnEnter:d,unmountOnExit:l,onStateChange:i}={})=>{const[c,r]=(0,n.useState)(()=>(0,v.y0)(f?v.cn:(0,v.Ef)(d))),a=(0,n.useRef)(c),C=(0,n.useRef)(),[g,E]=(0,v.fj)(h),U=(0,n.useCallback)(()=>{const R=(0,v.XZ)(a.current._s,l);R&&s(R,r,a,C,i)},[i,l]),S=(0,n.useCallback)(R=>{const O=j=>{switch(s(j,r,a,C,i),j){case v.d0:g>=0&&(C.current=setTimeout(U,g));break;case v.Ix:E>=0&&(C.current=setTimeout(U,E));break;case v.iL:case v.iU:C.current=(0,v.Y3)(O,j);break}},X=a.current.isEnter;typeof R!="boolean"&&(R=!X),R?!X&&O(u?p?v.iL:v.d0:v.cn):X&&O(o?x?v.iU:v.Ix:(0,v.Ef)(l))},[U,i,u,o,p,x,g,E,l]);return[c,S,U]}},87808:function(I,t,e){"use strict";e.d(t,{Ef:function(){return f},Ix:function(){return u},XZ:function(){return d},Y3:function(){return i},cn:function(){return s},d0:function(){return v},fj:function(){return l},iL:function(){return n},iU:function(){return m},y0:function(){return h}});const n=0,v=1,s=2,m=3,u=4,o=5,p=6,x=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=c=>({_s:c,status:x[c],isEnter:c<m,isMounted:c!==p,isResolved:c===s||c>u}),f=c=>c?p:o,d=(c,r)=>{switch(c){case v:case n:return s;case u:case m:return f(r)}},l=c=>typeof c=="object"?[c.enter,c.exit]:[c,c],i=(c,r)=>setTimeout(()=>{isNaN(document.body.offsetTop)||c(r+1)},0)}}]);
}());