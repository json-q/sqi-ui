!(function(){var sn=Object.defineProperty,ln=Object.defineProperties;var un=Object.getOwnPropertyDescriptors;var Qe=Object.getOwnPropertySymbols;var en=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable;var _e=(I,t,e)=>t in I?sn(I,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):I[t]=e,O=(I,t)=>{for(var e in t||(t={}))en.call(t,e)&&_e(I,e,t[e]);if(Qe)for(var e of Qe(t))nn.call(t,e)&&_e(I,e,t[e]);return I},ve=(I,t)=>ln(I,un(t));var we=(I,t)=>{var e={};for(var n in I)en.call(I,n)&&t.indexOf(n)<0&&(e[n]=I[n]);if(I!=null&&Qe)for(var n of Qe(I))t.indexOf(n)<0&&nn.call(I,n)&&(e[n]=I[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{98042:function(I,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return he}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return c.D},useIsomorphicLayoutEffect:function(){return r.L},useMergeProps:function(){return a.S},useMergeState:function(){return C.R},usePrevious:function(){return g.D},useResizeObserverRect:function(){return E._}});var v={};e.r(v),e.d(v,{canUseDom:function(){return N.J},debounce:function(){return B.D},isArray:function(){return P.kJ},isEmptyObject:function(){return P.Qr},isFunction:function(){return P.mf},isNumber:function(){return P.hj},isObject:function(){return P.Kn},isString:function(){return P.HD},isUndefined:function(){return P.o8},omit:function(){return D.C},pick:function(){return j},throttle:function(){return U.P}});var s={};e.r(s),e.d(s,{default:function(){return L.Y},useTransition:function(){return L.Y},useTransitionMap:function(){return F},useTransitionState:function(){return L.Y}});var m=e(90819),u=e.n(m),o=e(89933),p=e.n(o),x=e(53360),h=e.t(x,2),f=e(45990),d=e(58891),l=e(86752),i=e.t(l,2),c=e(37797),r=e(60164),a=e(7657),C=e(62222),g=e(45844),E=e(37828),N=e(34028),B=e(78831),P=e(80703),D=e(12598);function j(se,de){const ce={};return de.forEach(q=>{q in se&&(ce[q]=se[q])}),ce}var U=e(6890),H=e(9859),b=e(74889),M=e(7829),L=e(10735),R=e(90940);const z=(se,de,ce,q,me,Ee)=>{clearTimeout(me);const Z=(0,R.y0)(de),Re=new Map(q.current);Re.set(se,Z),ce(Re),q.current=Re,Ee&&Ee({key:se,current:Z})},F=({allowMultiple:se,enter:de=!0,exit:ce=!0,preEnter:q,preExit:me,timeout:Ee,initialEntered:Z,mountOnEnter:Re,unmountOnExit:Le,onStateChange:ye}={})=>{const[xe,y]=(0,x.useState)(new Map),S=(0,x.useRef)(xe),A=(0,x.useRef)(new Map),[_,X]=(0,R.fj)(Ee),k=(0,x.useCallback)((Q,T)=>{const{initialEntered:J=Z}=T||{},re=J?R.cn:(0,R.Ef)(Re);z(Q,re,y,S),A.current.set(Q,{})},[Z,Re]),ee=(0,x.useCallback)(Q=>{const T=new Map(S.current);return T.delete(Q)?(y(T),S.current=T,A.current.delete(Q),!0):!1},[]),ne=(0,x.useCallback)(Q=>{const T=S.current.get(Q);if(!T)return;const{timeoutId:J}=A.current.get(Q),re=(0,R.XZ)(T._s,Le);re&&z(Q,re,y,S,J,ye)},[ye,Le]),$=(0,x.useCallback)((Q,T)=>{const J=S.current.get(Q);if(!J)return;const re=A.current.get(Q),Pe=oe=>{switch(z(Q,oe,y,S,re.timeoutId,ye),oe){case R.d0:_>=0&&(re.timeoutId=setTimeout(()=>ne(Q),_));break;case R.Ix:X>=0&&(re.timeoutId=setTimeout(()=>ne(Q),X));break;case R.iL:case R.iU:re.timeoutId=(0,R.Y3)(Pe,oe);break}},ge=J.isEnter;typeof T!="boolean"&&(T=!ge),T?ge||(Pe(de?q?R.iL:R.d0:R.cn),!se&&S.current.forEach((oe,Ae)=>Ae!==Q&&$(Ae,!1))):ge&&Pe(ce?me?R.iU:R.Ix:(0,R.Ef)(Le))},[ye,ne,se,de,ce,q,me,_,X,Le]),fe=(0,x.useCallback)(Q=>{if(!(!se&&Q!==!1))for(const T of S.current.keys())$(T,Q)},[se,$]);return{stateMap:xe,toggle:$,toggleAll:fe,endTransition:ne,setItem:k,deleteItem:ee}};var w=e(42798),V=e(56144),G=e(86250),ie=e(29452),ae=e(99677),Y=e(81184),K=e.t(Y,2),he={"sqi-web-src-common-demo-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,33178))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44085).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(54049).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":d,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":d,"react-dom":i,"@sqi-ui/hooks":n,"@sqi-ui/utils":v},renderOpts:{compile:function(){var se=p()(u()().mark(function ce(){var q,me=arguments;return u()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,e.e(18).then(e.bind(e,73018));case 2:return Z.abrupt("return",(q=Z.sent).default.apply(q,me));case 3:case"end":return Z.stop()}},ce)}));function de(){return se.apply(this,arguments)}return de}()}},"sqi-web-src-common-demo-css-motion-base":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,77741))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60448).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(17354).Z},"../CSSMotion.tsx":{type:"FILE",value:e(26245).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(92138).Z}},entry:"index.tsx"},context:{"./motion.css":H,"../CSSMotion.tsx":b,"../config-provider/context.ts":w,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":H,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":b,clsx:M,"react-transition-state":s,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":w},renderOpts:{compile:function(){var se=p()(u()().mark(function ce(){var q,me=arguments;return u()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,e.e(18).then(e.bind(e,73018));case 2:return Z.abrupt("return",(q=Z.sent).default.apply(q,me));case 3:case"end":return Z.stop()}},ce)}));function de(){return se.apply(this,arguments)}return de}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,98994))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91112).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(17354).Z},"../CSSMotion.tsx":{type:"FILE",value:e(26245).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(92138).Z}},entry:"index.tsx"},context:{"./motion.css":H,"../CSSMotion.tsx":b,"../config-provider/context.ts":w,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":H,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":b,clsx:M,"react-transition-state":s,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":w},renderOpts:{compile:function(){var se=p()(u()().mark(function ce(){var q,me=arguments;return u()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,e.e(18).then(e.bind(e,73018));case 2:return Z.abrupt("return",(q=Z.sent).default.apply(q,me));case 3:case"end":return Z.stop()}},ce)}));function de(){return se.apply(this,arguments)}return de}()}},"sqi-web-src-common-demo-css-motion-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,242))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(6600).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(54049).Z},"../CSSMotion.tsx":{type:"FILE",value:e(26245).Z},"./motion.css":{type:"FILE",value:e(17354).Z},clsx:{type:"NPM",value:"2.1.1"},"react-dom":{type:"NPM",value:"19.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(92138).Z}},entry:"index.tsx"},context:{"../Portal.tsx":d,"../CSSMotion.tsx":b,"./motion.css":H,"../config-provider/context.ts":w,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":b,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":H,clsx:M,"react-dom":i,"react-transition-state":s,"@sqi-ui/hooks":n,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":w},renderOpts:{compile:function(){var se=p()(u()().mark(function ce(){var q,me=arguments;return u()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,e.e(18).then(e.bind(e,73018));case 2:return Z.abrupt("return",(q=Z.sent).default.apply(q,me));case 3:case"end":return Z.stop()}},ce)}));function de(){return se.apply(this,arguments)}return de}()}},"sqi-web-src-common-demo-resize-observer":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,6682))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10853).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserverRect.tsx":{type:"FILE",value:e(74234).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(1850).Z},"../_util/toArray.ts":{type:"FILE",value:e(26008).Z},"../_util/dom.ts":{type:"FILE",value:e(50306).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserverRect.tsx":V,"../_util/ref.ts":G,"../_util/toArray.ts":ie,"../_util/dom.ts":ae,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserverRect.tsx":V,"@sqi-ui/utils":v,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":G,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":ie,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":ae,"react-is":K},renderOpts:{compile:function(){var se=p()(u()().mark(function ce(){var q,me=arguments;return u()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,e.e(18).then(e.bind(e,73018));case 2:return Z.abrupt("return",(q=Z.sent).default.apply(q,me));case 3:case"end":return Z.stop()}},ce)}));function de(){return se.apply(this,arguments)}return de}()}}}},71953:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,22206))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94994).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,93e3))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73591).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41339))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40582).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},62048:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x=e(5629),h={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95248))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42760).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72975))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44571).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89682))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39844).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,53437))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71007).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26449))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12151).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},88034:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x=e(53761),h={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,84861))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29295).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,76595))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18809).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75063))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73667).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,78531))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94955).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,48454))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47546).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(1492).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,79136))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16905).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(1492).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},51799:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,28596))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(72634).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,63530))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19085).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},53792:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90694))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(81156).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,14665))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(79151).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,43329))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93715).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},72010:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x=e(9616),h={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,31565))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98968).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,67703))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25387).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83784))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63835).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95807))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(35585).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1643))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2688).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72835))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95633).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92121))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55946).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90823))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17213).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},56845:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(5629),x=e(45990),h={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,45498))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25690).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":p,"@sqi-ui/web":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11750))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80199).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":p,"@sqi-ui/web":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,70793))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36758).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},33629:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x=e(5629),h={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83846))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77049).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,65906))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2404).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,48701))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86542).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,88800))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91623).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,46498))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49683).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29491))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5943).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,84967))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(6661).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,68715))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51743).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,85030))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64581).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,23783))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54664).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},54904:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x={"sqi-web-src-popup-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,40128))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77110).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-trigger-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90824))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-trigger-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16227).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-placement":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95156))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-placement",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55201).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-shift":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,13268))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-shift",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(62882).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,4345))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91134).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29356))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67548).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-rect-observer":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,39295))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-rect-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(84553).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-styles":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,3798))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-styles",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52601).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},64149:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x=e(3522),h={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,77390))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70114).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72759))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19853).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,74783))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95293).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,85052))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98279).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,54525))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7201).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42666))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(61526).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(25471).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,17667))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33356).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(25471).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},19262:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,97715))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98621).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,34586))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19314).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,67155))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33796).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,61588))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(35580).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,14941))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70391).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},47417:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x=e(5629),h={"sqi-web-src-switch-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11185))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17387).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,87173))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36322).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,58386))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55588).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-custom-icon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8005))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(97052).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},59341:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x=e(5629),h={"sqi-web-src-tag-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,10508))})),asset:{type:"BLOCK",id:"sqi-web-src-tag-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40006).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-tag-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,82259))})),asset:{type:"BLOCK",id:"sqi-web-src-tag-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(24209).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-tag-demo-edit":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,86365))})),asset:{type:"BLOCK",id:"sqi-web-src-tag-demo-edit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(30025).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-tag-demo-custom-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11793))})),asset:{type:"BLOCK",id:"sqi-web-src-tag-demo-custom-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92917).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var f=u()(s()().mark(function l(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},l)}));function d(){return f.apply(this,arguments)}return d}()}}}},5310:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x={"sqi-web-src-tooltip-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,64145))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51272).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-theme":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,5018))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-theme",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52920).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-trigger-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11231))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-trigger-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51820).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-placement":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41375))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-placement",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(530).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-shift":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,20810))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-shift",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82684).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33682))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80793).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-rect-observer":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,62937))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-rect-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57697).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":p},renderOpts:{compile:function(){var h=u()(s()().mark(function d(){var l,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},82842:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return d}});var v=e(90819),s=e.n(v),m=e(89933),u=e.n(m),o=e(53360),p=e(45990),x=e(33051),h=e(45664),f=e(42294),d={"sqi-web-src-trigger-demo-popper":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,39033))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-popper",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21449).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(91875).Z},"./_wrapper.tsx":{type:"FILE",value:e(16158).Z}},entry:"index.tsx"},context:{"./demo.module.css":x,"./_wrapper.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h},renderOpts:{compile:function(){var l=u()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(18).then(e.bind(e,73018));case 2:return g.abrupt("return",(r=g.sent).default.apply(r,a));case 3:case"end":return g.stop()}},c)}));function i(){return l.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-basic-trigger":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,46741))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-basic-trigger",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47696).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(61358).Z},"./_wrapper.tsx":{type:"FILE",value:e(16158).Z},"./demo.module.css":{type:"FILE",value:e(91875).Z}},entry:"index.tsx"},context:{"./motion.css":f,"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var l=u()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(18).then(e.bind(e,73018));case 2:return g.abrupt("return",(r=g.sent).default.apply(r,a));case 3:case"end":return g.stop()}},c)}));function i(){return l.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-focus-outside-click":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,68015))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-focus-outside-click",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38474).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(16158).Z},"./demo.module.css":{type:"FILE",value:e(91875).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var l=u()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(18).then(e.bind(e,73018));case 2:return g.abrupt("return",(r=g.sent).default.apply(r,a));case 3:case"end":return g.stop()}},c)}));function i(){return l.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-destroy-exit":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,24223))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-destroy-exit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49189).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(16158).Z},"./demo.module.css":{type:"FILE",value:e(91875).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var l=u()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.e(18).then(e.bind(e,73018));case 2:return g.abrupt("return",(r=g.sent).default.apply(r,a));case 3:case"end":return g.stop()}},c)}));function i(){return l.apply(this,arguments)}return i}()}}}},74889:function(I,t,e){"use strict";e.r(t);var n=e(73193),v=e.n(n),s=e(10154),m=e.n(s),u=e(45332),o=e.n(u),p=e(84176),x=e.n(p),h=e(53360),f=e(7829),d=e(10735),l=e(80703),i=e(42798),c=["children","name","prefixCls"],r=(0,h.forwardRef)(function(a,C){var g=(0,h.useContext)(i.ConfigContext),E=a.children,N=a.name,B=a.prefixCls,P=x()(a,c),D=(0,d.Y)(P),j=o()(D,2),U=j[0],H=j[1],b=(0,h.isValidElement)(E);(0,h.useImperativeHandle)(C,function(){return{toggle:H}});var M="".concat(B||g.prefixCls).concat(N?"-".concat(N):""),L=(0,f.default)(["".concat(M,"-motion")],m()({},"".concat(M,"-motion-").concat(U.status),U.status));return(0,l.mf)(E)?U.isMounted?E(v()(v()({},U),{},{className:L,toggle:H})):null:b?U.isMounted?(0,h.cloneElement)(E,{className:(0,f.default)(E.props.className,L)}):null:E});r.displayName="CSSMotion",t.default=r},58891:function(I,t,e){"use strict";e.r(t);var n=e(45332),v=e.n(n),s=e(53360),m=e(86752),u=e(60164),o=e(34028),p=e(80703),x=(0,o.J)();function h(d){return x?(0,p.mf)(d)?d():document.body:null}var f=(0,s.forwardRef)(function(d,l){var i=d.getContainer,c=d.prefixCls,r=d.children,a=d.open,C=a===void 0?!0:a,g=d.rootStyle,E=(0,s.useState)(null),N=v()(E,2),B=N[0],P=N[1],D=(0,s.useState)(null),j=v()(D,2),U=j[0],H=j[1],b=U||document.body;(0,s.useEffect)(function(){var L=h(i);H(L||null)},[i]);var M=function(){if(!x||B)return null;var R=document.createElement("div");c&&(R.className="".concat(c,"-portal-wrapper")),g&&Object.assign(R.style,g),R.setAttribute("data-portal","true"),P(R)};return(0,u.L)(function(){x&&(C?M():P(null))},[C]),s.useImperativeHandle(l,function(){return B},[B]),(0,u.L)(function(){if(!(!x||!B)){var L=function(){return!B.parentNode&&b.appendChild(B)},R=function(){var F;return(F=B.parentNode)===null||F===void 0?void 0:F.removeChild(B)};return C?L():R(),function(){R()}}},[C,B]),C&&r&&B?(0,m.createPortal)(r,B):null});f.displayName="Portal",t.default=f},56144:function(I,t,e){"use strict";e.r(t);var n=e(45332),v=e.n(n),s=e(53360),m=e(6890),u=e(37828),o=e(29452),p=e(99677),x=e(86250),h=(0,s.forwardRef)(function(f,d){var l=f.children,i=f.disabled,c=f.throttleMs,r=c===void 0?0:c,a=f.onResize,C=(0,s.isValidElement)(l),g=l?(0,o.toArray)(l):[],E=l?(0,p.getReactNodeRef)(l):null,N=(0,s.useRef)(null),B=(0,s.useState)(null),P=v()(B,2),D=P[0],j=P[1],U=(0,x.useComposeRef)(E,N,function(b){j((0,p.getDOM)(b))});(0,s.useImperativeHandle)(d,function(){return(0,p.getRefDom)(N)});var H=a?(0,m.P)(a,r):void 0;return(0,u._)(D,H,!i),C?(0,s.cloneElement)(l,{ref:U}):l});h.displayName="ResizeObserverRect",t.default=h},99677:function(I,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return u},getReactNodeRef:function(){return p},getRefDom:function(){return o},isDOM:function(){return m}});var n=e(89957),v=e.n(n),s=e(53360);function m(x){return x instanceof HTMLElement||x instanceof SVGElement}function u(x){return x&&v()(x)==="object"&&m(x.currentElement)?x.currentElement:m(x)?x:null}function o(x){if(x)return x.current&&v()(x.current)==="object"&&"currentElement"in x.current?x.current.currentElement:x.current}function p(x){var h=x&&(0,s.isValidElement)(x);if(!h)return null;if(parseInt(s.version,10)>=19){var f;return((f=x.props)===null||f===void 0?void 0:f.ref)||null}return x.ref}},86250:function(I,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return u},fillRef:function(){return o},supportNodeRef:function(){return f},supportRef:function(){return x},useComposeRef:function(){return p}});var n=e(37797),v=e(80703),s=e(53360),m=e(11607),u=function(){for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];var r=i.filter(Boolean);return r.length<=1?r[0]:function(a){i.forEach(function(C){o(C,a)})}},o=function(l,i){(0,v.mf)(l)?l(i):(0,v.Kn)(l)&&"current"in l&&(l.current=i)},p=function(){for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(0,n.D)(function(){return u.apply(void 0,i)},i,function(r,a){return r.length!==a.length||r.every(function(C,g){return C!==a[g]})})},x=function(l){var i,c;if(!l)return!1;var r=parseInt(s.version,10);if(h(l)&&r>=19)return!0;var a=(0,m.isMemo)(l)?l.type.type:l.type;return!(typeof a=="function"&&!((i=a.prototype)!==null&&i!==void 0&&i.render)&&a.$$typeof!==m.ForwardRef||typeof l=="function"&&!((c=l.prototype)!==null&&c!==void 0&&c.render)&&l.$$typeof!==m.ForwardRef)};function h(d){return(0,s.isValidElement)(d)&&!(0,m.isFragment)(d)}var f=function(l){return h(l)&&x(l)}},29452:function(I,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return s}});var n=e(53360),v=e(11607);function s(m){var u=[];return n.Children.toArray(m).forEach(function(o){o!=null&&(Array.isArray(o)?u=u.concat(s(o)):(0,n.isValidElement)(o)&&(0,v.isFragment)(o)&&o.props?u=u.concat(s(o.props.children)):u.push(o))}),u}},53761:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),v=e(69787);function s(m){var u=m.item,o=m.checked,p={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,v.jsxs)("div",{style:p,children:[(0,v.jsx)("div",{style:x}),(0,v.jsx)("strong",{children:u}),(0,v.jsx)("div",{children:"this is a checkbox"})]})}},42798:function(I,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return s},defaultConfigProps:function(){return v}});var n=e(53360),v={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(v)},9616:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),v=e(69787);function s(m){var u=m.colorPalette,o=u===void 0?6:u,p=m.children,x=m.height;return(0,v.jsx)("div",{style:{height:x||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:p})}},3522:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),v=e(69787);function s(m){var u=m.item,o=m.checked,p={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,v.jsxs)("div",{style:p,children:[(0,v.jsx)("div",{style:x}),(0,v.jsx)("strong",{children:u}),(0,v.jsx)("div",{children:"this is a radio"})]})}},45664:function(I,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return m}});var n=e(53360),v=e(33051),s=e(69787),m=(0,n.forwardRef)(function(u,o){var p=u.size,x=u.backgroundColor,h=u.children;return(0,s.jsx)("div",{ref:o,className:v.default.box,style:{width:p+"px",height:p+"px",backgroundColor:x},children:h})});m.displayName="Component"},9859:function(I,t,e){"use strict";e.r(t)},33051:function(I,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai"}},42294:function(I,t,e){"use strict";e.r(t)},44170:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4E3B\u52A8\u8BBE\u7F6E\u76F8\u5173 css \u9690\u85CF\u7EC4\u4EF6",paraId:4},{value:"\u6B64\u5904\u7684 ",paraId:5,tocIndex:7},{value:"ResizeObserver",paraId:5,tocIndex:7},{value:" \u4EC5\u5173\u6CE8\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316",paraId:5,tocIndex:7}]},5427:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},43125:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"loadingIcon",paraId:3,tocIndex:6},{value:"loading \u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},984:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},57063:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},27348:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},35048:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},52791:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},72423:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u63CF\u8FF0",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"type",paraId:10,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:10,tocIndex:12},{value:"MDN",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"text",paraId:10,tocIndex:12},{value:"size",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:10,tocIndex:12},{value:"ConfigSize",paraId:10,tocIndex:12},{value:"md",paraId:10,tocIndex:12},{value:"status",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:10,tocIndex:12},{value:"success",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"warning",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"error",paraId:10,tocIndex:12},{value:"tips",paraId:10,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"allowClear",paraId:10,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"align",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"center",paraId:10,tocIndex:12},{value:" |",paraId:10,tocIndex:12},{value:"right",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"variant",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"borderless",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"underline",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"addonBefore",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"addonAfter",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"prefix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"suffix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"visibilityToggle",paraId:10,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"VisibilityToggle",paraId:11,tocIndex:12},{value:"maxLength",paraId:10,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:10,tocIndex:12},{value:"number",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"MaxLength",paraId:12,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:10,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:13,tocIndex:13},{value:"\u63CF\u8FF0",paraId:13,tocIndex:13},{value:"\u7C7B\u578B",paraId:13,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"visible",paraId:13,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:13,tocIndex:13},{value:"boolean",paraId:13,tocIndex:13},{value:"renderIcon",paraId:13,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:13,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:13,tocIndex:13},{value:"onVisibleChange",paraId:13,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:13,tocIndex:13},{value:"(visible: boolean) => void",paraId:13,tocIndex:13},{value:"\u5C5E\u6027",paraId:14,tocIndex:14},{value:"\u63CF\u8FF0",paraId:14,tocIndex:14},{value:"\u7C7B\u578B",paraId:14,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:14},{value:"length",paraId:14,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:14,tocIndex:14},{value:"number",paraId:14,tocIndex:14},{value:"showLimit",paraId:14,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14},{value:"true",paraId:14,tocIndex:14},{value:"errorOnly",paraId:14,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14}]},81487:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6838\u5FC3\u529F\u80FD\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Trigger",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u5E76\u7EE7\u627F\u5176\u5927\u90E8\u5206\u5C5E\u6027\uFF0C\u4F46\u662F\u4F1A\u5BF9 Trigger \u7684\u90E8\u5206\u9ED8\u8BA4\u503C\u8FDB\u884C\u8986\u76D6",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u5C11\u90E8\u5206\u6837\u5F0F\uFF0C\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\u7A0B\u5EA6\u8F83\u9AD8\u7684\u5F39\u51FA\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u8FDB\u4E00\u6B65\u6269\u5C55",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E ",paraId:2,tocIndex:3},{value:"placement",paraId:2,tocIndex:3},{value:" \u6307\u5B9A Popup \u5F39\u51FA\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"showArrow",paraId:2,tocIndex:3},{value:" \u6765\u9009\u62E9\u662F\u5426\u663E\u793A\u7BAD\u5934",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8FB9\u7F18\u68C0\u6D4B\u504F\u79FB\u4EE5\u53CA\u81EA\u52A8\u7FFB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6216\u8005\u60F3\u51CF\u5C11\u8BA1\u7B97\u5E26\u6765\u7684\u5F00\u9500\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:3,tocIndex:4},{value:"enableFlip=false",paraId:3,tocIndex:4},{value:" \u6216 ",paraId:3,tocIndex:4},{value:"enableShift=false",paraId:3,tocIndex:4},{value:" \u6765\u9009\u62E9\u6027\u5173\u95ED\u4E0D\u9700\u8981\u7684\u529F\u80FD",paraId:3,tocIndex:4},{value:"\u7981\u7528\u5F39\u51FA\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u5F39\u51FA\u5C42\u76F8\u5173\u7684\u884C\u4E3A",paraId:4,tocIndex:6},{value:"\u5F53\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u68C0\u6D4B\uFF0C\u5E76\u91CD\u65B0\u66F4\u65B0\u5F39\u51FA\u5C42\u7684\u4F4D\u7F6E",paraId:5,tocIndex:7},{value:"\u8BBE\u7F6E ",paraId:6,tocIndex:8},{value:"styles.content",paraId:6,tocIndex:8},{value:" \u6216\u8005 ",paraId:6,tocIndex:8},{value:"classNames.content",paraId:6,tocIndex:8},{value:" \u6765\u8BBE\u7F6E\u5185\u5BB9\u6837\u5F0F",paraId:6,tocIndex:8},{value:"\u5982\u679C\u9700\u8981\u8BBE\u7F6E\u4E0E\u89E6\u53D1\u5143\u7D20\u7B49\u5BBD\u7684\u5F39\u51FA\u5C42\u5BBD\u5EA6\uFF0C\u5219\u8BBE\u7F6E ",paraId:7,tocIndex:8},{value:"styles.content",paraId:7,tocIndex:8},{value:" \u4E3A ",paraId:7,tocIndex:8},{value:"{ width: 'var(--reference-x)' }",paraId:7,tocIndex:8},{value:" \u5373\u53EF\u3002",paraId:7,tocIndex:8},{value:"\u5C5E\u6027",paraId:8,tocIndex:10},{value:"\u63CF\u8FF0",paraId:8,tocIndex:10},{value:"\u7C7B\u578B",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"children",paraId:8,tocIndex:10},{value:"\u89E6\u53D1\u5143\u7D20",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"content",paraId:8,tocIndex:10},{value:"Popup \u5185\u5BB9",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"showArrow",paraId:8,tocIndex:10},{value:"\u662F\u5426\u5C55\u793A\u7BAD\u5934",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"true",paraId:8,tocIndex:10},{value:"destroyOnClose",paraId:8,tocIndex:10},{value:"\u9690\u85CF\u65F6\u662F\u5426\u9500\u6BC1",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"true",paraId:8,tocIndex:10},{value:"offset",paraId:8,tocIndex:10},{value:"\u5143\u7D20\u76F8\u5BF9\u4E8E\u89E6\u53D1\u5143\u7D20\u7684\u8DDD\u79BB",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"6",paraId:8,tocIndex:10},{value:"rootClassName",paraId:8,tocIndex:10},{value:"\u6839\u8282\u70B9 className",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"styles",paraId:8,tocIndex:10},{value:"style \u8BED\u6CD5\u7CD6",paraId:8,tocIndex:10},{value:"{ content?: CSSProperties; arrow?: CSSProperties;}",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"classNames",paraId:8,tocIndex:10},{value:"className \u8BED\u6CD5\u7CD6",paraId:8,tocIndex:10},{value:"{ content?: string; arrow?: string;}",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"\u4EE5\u4E0B\u5C5E\u6027\u7686\u7EE7\u627F\u81EA Trigger \u7EC4\u4EF6",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:10},{value:"\u63CF\u8FF0",paraId:10,tocIndex:10},{value:"\u7C7B\u578B",paraId:10,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:10},{value:"direction",paraId:10,tocIndex:10},{value:"popper \u4F4D\u7F6E",paraId:10,tocIndex:10},{value:"TriggerPlacement",paraId:10,tocIndex:10},{value:"top",paraId:10,tocIndex:10},{value:"enableFlip",paraId:10,tocIndex:10},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"true",paraId:10,tocIndex:10},{value:"enableShift",paraId:10,tocIndex:10},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"true",paraId:10,tocIndex:10},{value:"zIndex",paraId:10,tocIndex:10},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"1",paraId:10,tocIndex:10},{value:"getContainer",paraId:10,tocIndex:10},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:10,tocIndex:10},{value:"() => HTMLElement",paraId:10,tocIndex:10},{value:"document.body",paraId:10,tocIndex:10},{value:"trigger",paraId:10,tocIndex:10},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:10,tocIndex:10},{value:"TriggerType",paraId:10,tocIndex:10},{value:"hover",paraId:10,tocIndex:10},{value:"disabled",paraId:10,tocIndex:10},{value:"\u7981\u7528\u884C\u4E3A",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"delay",paraId:10,tocIndex:10},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"100",paraId:10,tocIndex:10},{value:"outFocusToClose",paraId:10,tocIndex:10},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"true",paraId:10,tocIndex:10},{value:"defaultVisible",paraId:10,tocIndex:10},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"visible",paraId:10,tocIndex:10},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"onVisibleChange",paraId:10,tocIndex:10},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:10,tocIndex:10},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10}]},15224:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},31337:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u63CF\u8FF0",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"size",paraId:1,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:1,tocIndex:6},{value:"SizeType",paraId:2,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"[SizeType, SizeType]",paraId:1,tocIndex:6},{value:"direction",paraId:1,tocIndex:6},{value:"\u65B9\u5411",paraId:1,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:1,tocIndex:6},{value:"'horizontal'",paraId:1,tocIndex:6},{value:"align",paraId:1,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:1,tocIndex:6},{value:"wrap",paraId:1,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"false",paraId:1,tocIndex:6},{value:"split",paraId:1,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u63CF\u8FF0",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"SizeType",paraId:3,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:3,tocIndex:7},{value:"ConfigSize",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"undefined",paraId:3,tocIndex:7}]},51056:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"defaultChecked",paraId:0,tocIndex:5},{value:"\u975E\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"checked",paraId:0,tocIndex:5},{value:"\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"disabled",paraId:0,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"size",paraId:0,tocIndex:5},{value:"\u5C3A\u5BF8",paraId:0,tocIndex:5},{value:"sm",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"lg",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"label",paraId:0,tocIndex:5},{value:"\u6587\u672C",paraId:0,tocIndex:5},{value:"[checked?: ReactNode, unchecked?: ReactNode]",paraId:0,tocIndex:5},{value:"loading",paraId:0,tocIndex:5},{value:"loading \u72B6\u6001",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"loadingIcon",paraId:0,tocIndex:5},{value:"\u81EA\u5B9A\u4E49 loading \u56FE\u6807",paraId:0,tocIndex:5},{value:"ReactNode",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5},{value:"onClick",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1(\u7981\u7528\u72B6\u6001\u65E0\u6548)",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5}]},4665:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[]},79670:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:4},{value:"placement",paraId:0,tocIndex:4},{value:" \u6307\u5B9A Popup \u5F39\u51FA\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",paraId:0,tocIndex:4},{value:"showArrow",paraId:0,tocIndex:4},{value:" \u6765\u9009\u62E9\u662F\u5426\u663E\u793A\u7BAD\u5934",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8FB9\u7F18\u68C0\u6D4B\u504F\u79FB\u4EE5\u53CA\u81EA\u52A8\u7FFB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6216\u8005\u60F3\u51CF\u5C11\u8BA1\u7B97\u5E26\u6765\u7684\u5F00\u9500\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:1,tocIndex:5},{value:"enableFlip=false",paraId:1,tocIndex:5},{value:" \u6216 ",paraId:1,tocIndex:5},{value:"enableShift=false",paraId:1,tocIndex:5},{value:" \u6765\u9009\u62E9\u6027\u5173\u95ED\u4E0D\u9700\u8981\u7684\u529F\u80FD",paraId:1,tocIndex:5},{value:"\u7981\u7528\u5F39\u51FA\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u5F39\u51FA\u5C42\u76F8\u5173\u7684\u884C\u4E3A",paraId:2,tocIndex:6},{value:"\u5F53\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u68C0\u6D4B\uFF0C\u5E76\u91CD\u65B0\u66F4\u65B0\u5F39\u51FA\u5C42\u7684\u4F4D\u7F6E",paraId:3,tocIndex:7},{value:"\u5176\u4F59\u5C5E\u6027\u7686\u7EE7\u627F\u81EA Popup \u7EC4\u4EF6",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:9},{value:"\u63CF\u8FF0",paraId:5,tocIndex:9},{value:"\u7C7B\u578B",paraId:5,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:9},{value:"theme",paraId:5,tocIndex:9},{value:"\u4E3B\u9898",paraId:5,tocIndex:9},{value:"'default' | 'primary' | 'success' | 'danger' | 'warning' | 'light'",paraId:5,tocIndex:9},{value:"default",paraId:5,tocIndex:9}]},52412:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 Trigger \u7EC4\u4EF6\u3002\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u4E14\u4E0D\u643A\u5E26\u4EFB\u4F55\u6837\u5F0F\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u63A8\u8350\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u6765\u66FF\u4EE3 ",paraId:1,tocIndex:0},{value:"Trigger",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u517C\u5BB9\u5EA6\u66F4\u597D\u7684\u96C6\u6210\u5E76\u5BF9\u6837\u5F0F\u8FDB\u884C\u7F8E\u5316\u3002\u66F4\u5B8C\u6574\u7684\u4F7F\u7528\u793A\u4F8B\u8BF7\u67E5\u770B ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popper.js \u7684\u57FA\u7840\u529F\u80FD\uFF08\u903B\u8F91\u5B9E\u73B0\u5E76\u4E0D\u4F18\u96C5\uFF0C\u4E14\u8BF8\u591A\u60C5\u51B5\u672A\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:2,tocIndex:1},{value:"table th tr",paraId:2,tocIndex:1},{value:" \u4E0B\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0Ccss ",paraId:2,tocIndex:1},{value:"will-change transform",paraId:2,tocIndex:1},{value:" \u7B49\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF09",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u91C7\u53D6\u628A\u7BAD\u5934\u76F8\u5BF9\u4E8E popper \u5B9A\u4F4D\uFF0C\u8FDB\u884C\u5C0F\u8303\u56F4\u504F\u79FB\u53EF\u4EE5\u51CF\u5C11\u975E\u5E38\u591A\u903B\u8F91\u4EE3\u7801",paraId:3,tocIndex:1},{value:"\u540E\u7EED\u53EF\u80FD\u4F1A\u5BF9\u5B9A\u4F4D\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C\u6709\u80FD\u529B\u91CD\u5199\u7684\u8BDD\uFF0CI am very vegetable :)",paraId:4,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:5},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"top",paraId:6},{value:" \u548C ",paraId:6},{value:"bottom",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 y \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C",paraId:6},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"left",paraId:6},{value:" \u548C ",paraId:6},{value:"right",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 x \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C\u3002",paraId:6},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popper \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08\u4E5F\u4E0D\u662F\u8BEF\u5DEE\uFF0C\u800C\u662F\u6B64\u65F6 popper \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:7},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:8,tocIndex:2},{value:"transform",paraId:8,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:8,tocIndex:2},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53 popper \u5173\u95ED\u65F6\uFF0C\u76F8\u5173 dom \u4F1A\u88AB\u9690\u85CF\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",paraId:9,tocIndex:4},{value:"motion.unmountOnExit",paraId:9,tocIndex:4},{value:" \u4E3A true \u53EF\u4EE5\u5728\u5173\u95ED\u65F6\u9500\u6BC1 dom",paraId:9,tocIndex:4},{value:"\u5C5E\u6027",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:6},{value:"className",paraId:10,tocIndex:6},{value:"popper \u7684\u6839\u5143\u7D20 className",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"children",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u7684\u76EE\u6807\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"popper",paraId:10,tocIndex:6},{value:"\u60AC\u6D6E\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"arrow",paraId:10,tocIndex:6},{value:"\u7BAD\u5934\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"motion",paraId:10,tocIndex:6},{value:"\u52A8\u753B props \u7EE7\u627F\u81EA ",paraId:10,tocIndex:6},{value:"react-transition-state",paraId:10,tocIndex:6},{value:"Omit<CSSMotionProps, 'children'>",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"direction",paraId:10,tocIndex:6},{value:"popper \u4F4D\u7F6E",paraId:10,tocIndex:6},{value:"TriggerPlacement",paraId:10,tocIndex:6},{value:"bottom",paraId:10,tocIndex:6},{value:"enableFlip",paraId:10,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"enableShift",paraId:10,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"offset",paraId:10,tocIndex:6},{value:"popper \u504F\u79FB\u91CF",paraId:10,tocIndex:6},{value:"number | { x: number; y: number }",paraId:10,tocIndex:6},{value:"0",paraId:10,tocIndex:6},{value:"zIndex",paraId:10,tocIndex:6},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"1",paraId:10,tocIndex:6},{value:"getContainer",paraId:10,tocIndex:6},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:10,tocIndex:6},{value:"() => HTMLElement",paraId:10,tocIndex:6},{value:"document.body",paraId:10,tocIndex:6},{value:"trigger",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:10,tocIndex:6},{value:"TriggerType",paraId:10,tocIndex:6},{value:'"hover"',paraId:10,tocIndex:6},{value:"disabled",paraId:10,tocIndex:6},{value:"\u7981\u7528\u884C\u4E3A",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"delay",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"100",paraId:10,tocIndex:6},{value:"outFocusToClose",paraId:10,tocIndex:6},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"clickOutsideClose",paraId:10,tocIndex:6},{value:"\u70B9\u51FB\u5916\u90E8\u662F\u5426\u53EF\u5173\u95ED",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"defaultVisible",paraId:10,tocIndex:6},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"visible",paraId:10,tocIndex:6},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"onVisibleChange",paraId:10,tocIndex:6},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:10,tocIndex:6},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"\u5171 12 \u4E2A\u65B9\u4F4D",paraId:11,tocIndex:7},{value:"top",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"top-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"top-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left-end",paraId:12,tocIndex:7},{value:"\u5BF9\u5E94 eventListener \u7684\u4E8B\u4EF6\u540D\u79F0",paraId:13,tocIndex:8},{value:"hover",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"click",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"focus",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"context-menu",paraId:14,tocIndex:8}]},26245:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},54049:function(I,t){"use strict";t.Z=`import React, { forwardRef, useEffect, useState } from 'react';
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
`},74234:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef, useState } from 'react';
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
`},60448:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},6600:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},91112:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},17354:function(I,t){"use strict";t.Z=`.sqi-demo-motion {
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
`},44085:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},10853:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},50306:function(I,t){"use strict";t.Z=`import { isValidElement, version } from 'react';

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
`},1850:function(I,t){"use strict";t.Z=`import { useCompareMemo } from '@sqi-ui/hooks';
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
`},26008:function(I,t){"use strict";t.Z=`import { Children, isValidElement, type ReactNode } from 'react';
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
`},40582:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},94994:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},73591:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},42760:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},44571:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},39844:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},12151:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},71007:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},1492:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},29295:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},18809:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},47546:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},73667:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},94955:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},16905:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},92138:function(I,t){"use strict";t.Z=`import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sqi',
  iconPrefix: 'sqi',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
`},72634:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},19085:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},81156:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},93715:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},79151:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},2688:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},98968:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},19514:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},63835:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},25387:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},35585:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},95633:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},55946:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},17213:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},25690:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},80199:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},36758:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},6661:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},51743:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},91623:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},77049:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},54664:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},64581:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},2404:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},49683:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},5943:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},86542:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},77110:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},67548:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},91134:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},55201:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},84553:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},62882:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},52601:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Popup, Space } from '@sqi-ui/web';

export default function App() {
  return (
    <Space>
      <Popup content="This is an equal-width content" styles={{ content: { width: 'var(--reference-x)' } }}>
        <Button type="primary">Hover me</Button>
      </Popup>

      <Popup
        trigger="click"
        content="This is an equal-width content"
        styles={{ content: { width: 'var(--reference-x)' } }}
      >
        <Button type="primary">Click Long Content</Button>
      </Popup>
    </Space>
  );
}
`},16227:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},25471:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},19853:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},70114:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},61526:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},95293:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},33356:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},98279:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},7201:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},33796:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},98621:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},19314:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},70391:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},35580:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},17387:function(I,t){"use strict";t.Z=`import React from 'react';
import { Space, Switch } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <Switch />
      <Switch label={['\u5F00', '\u5173']} />
    </Space>
  );
}
`},97052:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},55588:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},36322:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},40006:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},92917:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},30025:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},24209:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},51272:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},80793:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},530:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},57697:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},82684:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},52920:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},51820:function(I,t){"use strict";t.Z=`import React from 'react';
import { Button, Input, Tooltip, Space } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Space>
      <Tooltip content="This is a basic popup">
        <Button type="primary">Hover me</Button>
      </Tooltip>

      <Tooltip trigger="click" content="This is a hover popup">
        <Button type="primary">Click me</Button>
      </Tooltip>

      <Tooltip trigger="focus" content="This is a focus popup">
        <Input placeholder="Focus me" />
      </Tooltip>

      <Tooltip trigger="context-menu" content="This is a context menu popup">
        <Button type="primary">Right click me</Button>
      </Tooltip>
    </Space>
  );
}
`},16158:function(I,t){"use strict";t.Z=`import React, { forwardRef } from 'react';
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
`},47696:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},91875:function(I,t){"use strict";t.Z=`.container {
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
`},49189:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},38474:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},61358:function(I,t){"use strict";t.Z=`.sqi-demo-trigger-motion {
  transition: opacity 0.25s ease-in-out;
}

.sqi-demo-trigger-motion.sqi-demo-trigger-motion-preEnter,
.sqi-demo-trigger-motion.sqi-demo-trigger-motion-exiting {
  opacity: 0;
}

.sqi-demo-trigger-motion.sqi-demo-trigger-motion-entered {
  opacity: 1;
}

.sqi-demo-trigger-motion.sqi-demo-trigger-motion-exited {
  display: none;
}
`},21449:function(I,t){"use strict";t.Z=`import React from 'react';
import { Trigger, Radio, Divider, Space, Input, Checkbox } from '@sqi-ui/web';
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
  const [offsetX, setOffsetX] = React.useState<string>();
  const [offsetY, setOffsetY] = React.useState<string>();
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
            offset={{ x: Number(offsetX), y: Number(offsetY) }}
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
      <Space>
        <Input
          prefix="offsetX"
          value={offsetX}
          onChange={setOffsetX}
          disabled={placement.startsWith('top') || placement.startsWith('bottom')}
        />
        <Input
          prefix="offsetY"
          value={offsetY}
          onChange={setOffsetY}
          disabled={placement.startsWith('left') || placement.startsWith('right')}
        />
      </Space>
    </>
  );
}
`},11607:function(I,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler");Symbol.for("react.provider");var u=Symbol.for("react.consumer"),o=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),l=Symbol.for("react.view_transition"),i=Symbol.for("react.client.reference");function c(r){if(typeof r=="object"&&r!==null){var a=r.$$typeof;switch(a){case e:switch(r=r.type,r){case v:case m:case s:case x:case h:case l:return r;default:switch(r=r&&r.$$typeof,r){case o:case p:case d:case f:return r;case u:return r;default:return a}}case n:return a}}}t.ContextConsumer=u,t.ContextProvider=o,t.Element=e,t.ForwardRef=p,t.Fragment=v,t.Lazy=d,t.Memo=f,t.Portal=n,t.Profiler=m,t.StrictMode=s,t.Suspense=x,t.SuspenseList=h,t.isContextConsumer=function(r){return c(r)===u},t.isContextProvider=function(r){return c(r)===o},t.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===e},t.isForwardRef=function(r){return c(r)===p},t.isFragment=function(r){return c(r)===v},t.isLazy=function(r){return c(r)===d},t.isMemo=function(r){return c(r)===f},t.isPortal=function(r){return c(r)===n},t.isProfiler=function(r){return c(r)===m},t.isStrictMode=function(r){return c(r)===s},t.isSuspense=function(r){return c(r)===x},t.isSuspenseList=function(r){return c(r)===h},t.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===v||r===m||r===s||r===x||r===h||typeof r=="object"&&r!==null&&(r.$$typeof===d||r.$$typeof===f||r.$$typeof===o||r.$$typeof===u||r.$$typeof===p||r.$$typeof===i||r.getModuleId!==void 0)},t.typeOf=c},81184:function(I,t,e){"use strict";I.exports=e(11607)},37797:function(I,t,e){"use strict";e.d(t,{D:function(){return v}});var n=e(53360);function v(s,m,u){const o=(0,n.useRef)({});return(!("value"in o.current)||u(o.current.condition,m))&&(o.current.value=s(),o.current.condition=m),o.current.value}},60164:function(I,t,e){"use strict";e.d(t,{L:function(){return m}});var n=e(53360),v=e(34028);const m=(0,v.J)()?n.useLayoutEffect:n.useEffect},7657:function(I,t,e){"use strict";e.d(t,{S:function(){return v}});var n=e(53360);function v(s,m={},u={}){return(0,n.useMemo)(()=>{const o=O(O({},m),u),p=O({},s);for(const x in o)p[x]===void 0&&(p[x]=o[x]);return p},[s,m,u])}},62222:function(I,t,e){"use strict";e.d(t,{R:function(){return m}});var n=e(53360),v=e(80703),s=e(45844);function m(u,o){const{defaultValue:p,value:x,onChange:h}=o||{},[f,d]=(0,n.useState)(()=>(0,v.o8)(x)?(0,v.o8)(p)?(0,v.mf)(u)?u():u:(0,v.mf)(p)?p():p:x),l=(0,s.D)(x),i=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(i.current){i.current=!1;return}(0,v.o8)(x)&&l!==x&&d(x)},[x]);const c=(0,v.o8)(x)?f:x,r=(0,n.useCallback)(a=>{const C=(0,v.mf)(a)?a(c):a;(0,v.o8)(x)&&d(C),!Object.is(C,c)&&(h==null||h(C))},[x,c,h]);return[c,r]}},45844:function(I,t,e){"use strict";e.d(t,{D:function(){return v}});var n=e(53360);function v(s){const m=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{m.current=s},[s]),m.current}},37828:function(I,t,e){"use strict";e.d(t,{_:function(){return o}});var n=e(53360),v=e(20759),s=e(34028),m=e(60164);const u=window.ResizeObserver||v.Z;function o(p,x,h=!0){const f=(0,n.useRef)(null);f.current=x;const d=(0,n.useRef)({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1});(0,m.L)(()=>{let l=null;if(!h||!(0,s.J)()||!p)return;const i=c=>{var N;const r=c[0],{width:a,height:C}=r.contentRect,g=p.offsetWidth,E=p.offsetHeight;(d.current.width!==a||d.current.height!==C||d.current.offsetWidth!==g||d.current.offsetHeight!==E)&&(d.current={width:a,height:C,offsetWidth:g,offsetHeight:E},(N=f.current)==null||N.call(f,d.current,r))};return l=new u(i),l.observe(p),()=>{l&&p&&(l.unobserve(p),l.disconnect(),l=null)}},[p,h])}},31136:function(I,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360);const s=(0,n.createContext)({})},37907:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(7829),s=e(31136);const m=(0,n.forwardRef)((o,p)=>{const g=o,{svg:x,type:h,spin:f,rotate:d,className:l,style:i}=g,c=we(g,["svg","type","spin","rotate","className","style"]),{prefixCls:r="sqi"}=(0,n.useContext)(s.Z),a=(0,v.default)(`${r}-icon`,{[`${r}-icon-spin`]:!!f&&!!x},l),C=i||{};return Number.isSafeInteger(d)&&(C.transform=`rotate(${d}deg)`),n.createElement("span",O({role:"img",ref:p,"aria-label":h,className:a,style:C},c),x)});m.displayName="Icon";const u=m},46874:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"add",ref:p},o)));m.displayName="AddIcon";const u=m},1824:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"browse",ref:p},o)));m.displayName="BrowseIcon";const u=m},85569:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"browse-off",ref:p},o)));m.displayName="BrowseOffIcon";const u=m},23436:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"check-circle-filled",ref:p},o)));m.displayName="CheckCircleFilledIcon";const u=m},46608:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"chevron-down",ref:p},o)));m.displayName="ChevronDownIcon";const u=m},58360:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"close-circle-filled",ref:p},o)));m.displayName="CloseCircleFilledIcon";const u=m},27377:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"close",ref:p},o)));m.displayName="CloseIcon";const u=m},50397:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"info-circle-filled",ref:p},o)));m.displayName="InfoCircleFilledIcon";const u=m},60333:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"loading",ref:p},o)));m.displayName="LoadingIcon";const u=m},36106:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"search",ref:p},o)));m.displayName="SearchIcon";const u=m},65466:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"upload",ref:p},o)));m.displayName="UploadIcon";const u=m},21925:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const m=(0,n.forwardRef)((o,p)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"warn-circle-filled",ref:p},o)));m.displayName="WarnCircleFilledIcon";const u=m},5629:function(I,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return s.Z},BrowseIcon:function(){return u.Z},BrowseOffIcon:function(){return m.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return p.Z},CloseCircleFilledIcon:function(){return x.Z},CloseIcon:function(){return h.Z},IconContext:function(){return v.Z},InfoCircleFilledIcon:function(){return f.Z},LoadingIcon:function(){return d.Z},SearchIcon:function(){return l.Z},UploadIcon:function(){return i.Z},WarnCircleFilledIcon:function(){return c.Z},default:function(){return r}});var n=e(37907),v=e(31136),s=e(46874),m=e(85569),u=e(1824),o=e(23436),p=e(46608),x=e(58360),h=e(27377),f=e(50397),d=e(60333),l=e(36106),i=e(65466),c=e(21925);const r=n.Z},34028:function(I,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(I,t,e){"use strict";e.d(t,{D:function(){return n}});function n(v,s){let m=null;const u=function(...o){m&&clearTimeout(m),m=setTimeout(()=>{v.apply(this,o),m=null},s)};return u.cancel=()=>{m&&(clearTimeout(m),m=null)},u}},80703:function(I,t,e){"use strict";e.d(t,{HD:function(){return u},Kn:function(){return o},Qr:function(){return p},hj:function(){return x},kJ:function(){return m},mf:function(){return v},o8:function(){return s}});const n=Object.prototype.toString;function v(h){return n.call(h)==="[object Function]"}function s(h){return h===void 0}function m(h){return n.call(h)==="[object Array]"}function u(h){return n.call(h)==="[object String]"}const o=h=>n.call(h)==="[object Object]",p=h=>{if(!o(h))return!0;for(const f in h)if(Object.prototype.hasOwnProperty.call(h,f))return!1;return!0},x=h=>n.call(h)==="[object Number]"&&!Number.isNaN(h)},12598:function(I,t,e){"use strict";e.d(t,{C:function(){return n}});function n(v,s){const m=Object.assign({},v);return Array.isArray(s)&&s.forEach(u=>{delete m[u]}),m}},6890:function(I,t,e){"use strict";e.d(t,{P:function(){return v}});var n=e(78831);function v(s,m){let u=null;const o=(0,n.D)(s,m),p=(...x)=>{u===null?u=Date.now():Date.now()-u>=m&&(u=Date.now(),o.cancel()),o(...x)};return p.cancel=o.cancel,p}},92266:function(I,t,e){"use strict";e.d(t,{C:function(){return m},Z:function(){return u}});var n=e(53360),v=e(7829),s=e(62222);const m=(0,n.forwardRef)((o,p)=>{const D=o,{prefixCls:x,className:h,style:f,checked:d,disabled:l,defaultChecked:i=!1,type:c="checkbox",title:r,onChange:a,_getCheckedValue:C}=D,g=we(D,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[E,N]=(0,s.R)(i,{value:d});(0,n.useEffect)(()=>{C==null||C(E)},[E]);const B=(0,v.default)(x,h,{[`${x}-checked`]:E,[`${x}-disabled`]:l}),P=j=>{l||("checked"in o||N(j.target.checked),a==null||a({target:ve(O({},o),{checked:j.target.checked}),event:j}))};return n.createElement("span",{className:B,title:r,style:f},n.createElement("input",ve(O({},g),{className:`${x}-input`,ref:p,onChange:P,disabled:l,checked:E,type:c})),n.createElement("span",{className:`${x}-inner`}))});m.displayName="BaseCheckbox";const u=m},40549:function(I,t,e){"use strict";e.d(t,{Z:function(){return p}});var n=e(53360),v=e(7829),s=e(10735),m=e(80703),u=e(57577);const o=(0,n.forwardRef)((x,h)=>{const f=(0,n.useContext)(u.E),N=x,{children:d,name:l,prefixCls:i}=N,c=we(N,["children","name","prefixCls"]),[r,a]=(0,s.Y)(c),C=(0,n.isValidElement)(d);(0,n.useImperativeHandle)(h,()=>({toggle:a}));const g=`${i||f.prefixCls}${l?`-${l}`:""}`,E=(0,v.default)([`${g}-motion`],{[`${g}-motion-${r.status}`]:r.status});return(0,m.mf)(d)?r.isMounted?d(ve(O({},r),{className:E,toggle:a})):null:C?r.isMounted?(0,n.cloneElement)(d,{className:(0,v.default)(d.props.className,E)}):null:d});o.displayName="CSSMotion";const p=o},4814:function(I,t,e){"use strict";e.d(t,{sQ:function(){return u},t4:function(){return f},x1:function(){return p}});var n=e(37797),v=e(80703),s=e(53360),m=e(11607);const u=(...d)=>{const l=d.filter(Boolean);return l.length<=1?l[0]:i=>{d.forEach(c=>{o(c,i)})}},o=(d,l)=>{(0,v.mf)(d)?d(l):(0,v.Kn)(d)&&"current"in d&&(d.current=l)},p=(...d)=>(0,n.D)(()=>u(...d),d,(l,i)=>l.length!==i.length||l.every((c,r)=>c!==i[r])),x=d=>{var c,r;if(!d)return!1;const l=parseInt(s.version,10);if(h(d)&&l>=19)return!0;const i=(0,m.isMemo)(d)?d.type.type:d.type;return!(typeof i=="function"&&!((c=i.prototype)!=null&&c.render)&&i.$$typeof!==m.ForwardRef||typeof d=="function"&&!((r=d.prototype)!=null&&r.render)&&d.$$typeof!==m.ForwardRef)};function h(d){return(0,s.isValidElement)(d)&&!(0,m.isFragment)(d)}const f=d=>h(d)&&x(d)},21299:function(I,t,e){"use strict";e.d(t,{q:function(){return s}});var n=e(53360),v=e(11607);function s(m){let u=[];return n.Children.toArray(m).forEach(o=>{o!=null&&(Array.isArray(o)?u=u.concat(s(o)):(0,n.isValidElement)(o)&&(0,v.isFragment)(o)&&o.props?u=u.concat(s(o.props.children)):u.push(o))}),u}},69203:function(I,t,e){"use strict";e.d(t,{b:function(){return r}});var n=e(53360),v=e(7829),s=e(7657),m=e(23436),u=e(50397),o=e(58360),p=e(21925),x=e(27377),h=e(40549),f=e(57577);const d={type:"info",showIcon:!0},l={success:m.Z,info:u.Z,error:o.Z,warning:p.Z},i=(0,n.forwardRef)((C,g)=>{const{prefixCls:E,componentConfig:N}=(0,n.useContext)(f.E),{className:B,style:P,title:D,description:j,type:U,closable:H,showIcon:b,action:M,icon:L,onClose:R}=(0,s.S)(C,d,N==null?void 0:N.Alert),z=(0,n.useRef)(null),F=()=>(0,n.isValidElement)(L)?L:U?(0,n.createElement)(l[U]):null,w=(0,v.default)(`${E}-alert`,`${E}-alert-${U}`,B),V=G=>{var ie;(ie=z.current)==null||ie.toggle(),R==null||R(G)};return n.createElement(h.Z,{ref:z,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},n.createElement("div",{role:"alert",className:w,style:P,ref:g},b&&n.createElement("div",{className:`${E}-alert-icon`},F()),n.createElement("div",{className:`${E}-alert-content`},!!D&&n.createElement("div",{className:`${E}-alert-title`},D),n.createElement("div",{className:`${E}-alert-description`},j)),M&&n.createElement("div",{className:`${E}-alert-action`},M),H&&n.createElement("button",{type:"button",className:`${E}-alert-close`,onClick:V},n.createElement(x.Z,null))))});i.displayName="Alert";const r=i,a=null},60884:function(I,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(53360),v=e(7829),s=e(60333),m=e(7657),u=e(57577);const o={type:"default",variant:"default",htmlType:"button"},p=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,size:c="md",componentConfig:r}=(0,n.useContext)(u.E),ae=(0,m.S)(d,o,r==null?void 0:r.Button),{children:C,type:g,size:E=c,htmlType:N,status:B,loading:P,disabled:D,variant:j,icon:U,loadingIcon:H,href:b,target:M,onClick:L,anchorProps:R={}}=ae,z=we(ae,["children","type","size","htmlType","status","loading","disabled","variant","icon","loadingIcon","href","target","onClick","anchorProps"]),F=H||n.createElement(s.Z,{spin:P}),w=P?F:U,V=b?"link":g,G=(0,v.default)(`${i}-btn`,`${i}-btn-${V}`,{[`${i}-btn-size-${E}`]:E,[`${i}-btn-status-${B}`]:!!B,[`${i}-btn-variant-${j}`]:j,[`${i}-btn-loading`]:P,[`${i}-btn-disabled`]:D}),ie=Y=>{if(P||D)return void Y.preventDefault();L==null||L(Y)};return b?n.createElement("a",ve(O({},R),{href:b,target:M,className:(0,v.default)(G,R.className),onClick:ie,ref:l}),w,n.createElement("span",null,C)):n.createElement("button",ve(O({},z),{type:N,className:G,onClick:ie,ref:l}),w,n.createElement("span",null,C))});p.displayName="Button";const h=p,f=null},67824:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(7829),s=e(7657),m=e(45844),u=e(80703),o=e(92266),p=e(4814),x=e(57577),h=e(81372);const f={defaultChecked:!1,indeterminate:!1},d=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(x.E),C=(0,n.useContext)(h.w),F=(0,s.S)(i,f,a==null?void 0:a.Checkbox),{children:g,style:E,className:N,indeterminate:B}=F,P=we(F,["children","style","className","indeterminate"]),[D,j]=(0,n.useState)(!1),U="disabled"in P?P.disabled:C.disabled,H=(0,m.D)(P.value),b=(0,n.useRef)(null);(0,n.useEffect)(()=>{var w;(w=C.registerValue)==null||w.call(C,P.value)},[C,P.value]),(0,n.useEffect)(()=>{var w,V;return P.value!==H&&((w=C.unregisterValue)==null||w.call(C,H),(V=C.registerValue)==null||V.call(C,P.value)),()=>{var G;return(G=C.unregisterValue)==null?void 0:G.call(C,P.value)}},[C,P.value]),(0,n.useEffect)(()=>{b.current&&(b.current.indeterminate=B)},[B]);const M=O({},P);(0,u.Qr)(C)||(M.onChange=(...w)=>{var V,G;(V=P.onChange)==null||V.call(P,...w),(G=C.toggleOption)==null||G.call(C,P.value)},M.name=C.name,M.checked=C.value.includes(P.value));const L=(0,v.default)(`${r}-checkbox-wrapper`,{[`${r}-checkbox-wrapper-checked`]:M.checked,[`${r}-checkbox-wrapper-disabled`]:U},N),R=w=>{var V;(0,u.mf)(g)&&(w.preventDefault(),(V=b.current)==null||V.click())},z=()=>(0,u.o8)(g)?null:(0,u.mf)(g)?g({checked:"checked"in M?!!M.checked:D}):n.createElement("span",{className:`${r}-checkbox-label`},g);return n.createElement("label",{className:L,onClick:R},n.createElement(o.C,ve(O({},M),{type:"checkbox",ref:(0,p.sQ)(c,b),disabled:U,prefixCls:`${r}-checkbox`,className:(0,v.default)({[`${r}-checkbox-indeterminate`]:B}),style:ve(O({},E),{display:(0,u.mf)(g)?"none":void 0}),_getCheckedValue:j})),z())});d.displayName="Checkbox";const l=d},56104:function(I,t,e){"use strict";e.d(t,{Z:function(){return f}});var n=e(53360),v=e(7829),s=e(7657),m=e(80703),u=e(57577),o=e(81372),p=e(67824);const x={},h=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(u.E),r=(0,n.useId)(),ae=(0,s.S)(d,x,c==null?void 0:c.CheckboxGroup),{defaultValue:a,children:C,options:g,className:E,style:N,disabled:B,name:P=r,onChange:D,renderOption:j}=ae,U=we(ae,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[H,b]=(0,n.useState)(U.value||a||[]),[M,L]=(0,n.useState)([]),R=(0,n.useRef)([]);(0,n.useEffect)(()=>{R.current=M},[M]),(0,n.useEffect)(()=>{"value"in U&&b(U.value||[])},[U.value]);const z=(0,n.useCallback)(Y=>{L(K=>[...K,Y])},[]),F=(0,n.useCallback)(Y=>{L(K=>K.filter(he=>he!==Y))},[]),w=(0,n.useMemo)(()=>g==null?void 0:g.map(Y=>(0,m.HD)(Y)||(0,m.hj)(Y)?{label:Y,value:Y}:Y),[g]),V=(0,n.useCallback)(Y=>{const K=[...H],he=H.indexOf(Y);he===-1?K.push(Y):K.splice(he,1),"value"in U||b(K);const se=K.filter(de=>R.current.includes(de));D==null||D(se)},[H,D]);let G=C;if((0,m.kJ)(w)&&w.length>0){const Y=(0,m.mf)(j);G=w.map(K=>{const he=H.includes(K.value),se=Y?()=>j(ve(O({},K),{checked:he})):K.label;return n.createElement(p.Z,{key:`checkbox-group-options-${K.value}`,className:K.className,style:K.style,disabled:"disabled"in K?K.disabled:B,value:K.value,checked:he,id:K.id,title:K.title,onChange:K.onChange},se)})}const ie=(0,n.useMemo)(()=>({name:P,value:H,disabled:B,toggleOption:V,registerValue:z,unregisterValue:F}),[P,H,B,V,z,F]);return n.createElement("div",{className:(0,v.default)(`${i}-checkbox-group`,E),style:N,ref:l},n.createElement(o.w.Provider,{value:ie},G))});h.displayName="CheckboxGroup";const f=h},81372:function(I,t,e){"use strict";e.d(t,{w:function(){return v}});var n=e(53360);const v=(0,n.createContext)({})},89946:function(I,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return p},CheckboxGroup:function(){return x},default:function(){return h}});var n=e(67824),v=e(56104),s=e(558),m=e.n(s),u={};for(var o in s)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(u[o]=function(f){return s[f]}.bind(0,o));e.d(t,u);const p=n.Z;p.Group=v.Z;const x=p.Group,h=p},558:function(){},57577:function(I,t,e){"use strict";e.d(t,{$:function(){return v},E:function(){return s}});var n=e(53360);const v={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(v)},83405:function(I,t,e){"use strict";e.d(t,{i:function(){return p}});var n=e(53360),v=e(12598),s=e(7657),m=e(31136),u=e(57577);function o(x){const h=(0,s.S)(x,u.$),{iconPrefix:f,children:d}=h,l=(0,v.C)(h,["children"]),i=f?m.Z.Provider:n.Fragment;return n.createElement(u.E.Provider,{value:l},n.createElement(i,{value:{prefixCls:f}},d))}o.displayName="ConfigProvider";const p=o},48380:function(I,t,e){"use strict";e.d(t,{i:function(){return x}});var n=e(53360),v=e(7829),s=e(7657),m=e(57577);const u={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((f,d)=>{const{prefixCls:l,componentConfig:i}=(0,n.useContext)(m.E),{direction:c,align:r,dashed:a,className:C,children:g,text:E,style:N}=(0,s.S)(f,u,i==null?void 0:i.Divider),B=g||E,P=c!=="vertical"&&!!B,D=(0,v.default)(`${l}-divider`,{[`${l}-divider-${c}`]:c,[`${l}-divider-with-text`]:P,[`${l}-divider-with-text-${r}`]:P,[`${l}-divider-dashed`]:!!a},C);return n.createElement("div",{className:D,style:N,ref:d},P&&n.createElement("span",{className:`${l}-divider-inner-text`},B))});o.displayName="Divider";const x=o,h=null},17599:function(I,t,e){"use strict";e.d(t,{J:function(){return H},X:function(){return U}});var n=e(53360),v=e(7829),s=e(7657),m=e(80703),u=e(57577);const o=["xxl","xl","lg","md","sm","xs"],p={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},x=Object.keys(p),h=new Map;let f=-1,d={};const i={handlers:{},dispatch(b){return d=b,h.forEach(M=>{M(d)}),h.size>=1},subscribe(b){return h.size||this.register(),f+=1,h.set(f,b),b(d),f},unsubscribe(b){h.delete(b),h.size||this.unregister()},register(){x.forEach(b=>{const M=({matches:z})=>{this.dispatch(ve(O({},d),{[b]:z}))},L=p[b],R=window.matchMedia(L);R.addListener(M),this.handlers[L]={mql:R,listener:M},M(R)})},unregister(){x.forEach(b=>{const M=p[b],L=this.handlers[M];L==null||L.mql.removeListener(L==null?void 0:L.listener)}),h.clear()}},r=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},C=(0,n.forwardRef)((b,M)=>{const{prefixCls:L,componentConfig:R}=(0,n.useContext)(u.E),ye=(0,s.S)(b,a,R==null?void 0:R.Row),{align:z,justify:F,gutter:w,className:V,wrap:G,children:ie,style:ae}=ye,Y=we(ye,["align","justify","gutter","className","wrap","children","style"]),[K,he]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const xe=i.subscribe(y=>{((0,m.Kn)(w)||(0,m.kJ)(w)&&((0,m.Kn)(w[0])||(0,m.Kn)(w[1])))&&he(y)});return()=>i.unsubscribe(xe)},[w]);const se=de();function de(){const xe=[void 0,void 0];return((0,m.kJ)(w)?w:[w,void 0]).forEach((S,A)=>{if((0,m.Kn)(S))for(let _=0;_<o.length;_++){const X=o[_];if(K[X]&&S[X]!==void 0){xe[A]=S[X];break}}else xe[A]=S}),xe}const ce=(0,v.default)(`${L}-row`,{[`${L}-row-nowrap`]:G===!1,[`${L}-row-align-${z}`]:z,[`${L}-row-justify-${F}`]:F},V),[q,me]=se,Ee=(0,n.useMemo)(()=>({gutter:[q,me],wrap:G}),[q,me,G]),Z={},Re=(0,m.hj)(q)&&q!==0,Le=(0,m.hj)(me)&&me!==0;if(Re||Le){const xe=-q/2,y=-me/2;xe&&(Z.marginLeft=xe,Z.marginRight=xe),y&&(Z.marginTop=y,Z.marginBottom=y)}return n.createElement(r.Provider,{value:Ee},n.createElement("div",ve(O({},Y),{ref:M,className:ce,style:O(O({},ae),Z)}),ie))});C.displayName="Row";const g=C,E={offset:0};function N(b){return(0,m.hj)(b)?`${b} ${b} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(b)?`0 0 ${b}`:b}const B=["xs","sm","md","lg","xl","xxl"],P=(b,M)=>{let L={};return B.forEach(R=>{const z=b[R];if(!z)return;let F={};(0,m.hj)(z)?F.span=z:(0,m.Kn)(z)&&(F=z),L=ve(O({},L),{[`${M}-col-${R}-${F.span}`]:(0,m.hj)(F.span),[`${M}-col-${R}-order-${F.order}`]:F.order,[`${M}-col-${R}-offset-${F.offset}`]:F.offset})}),L},D=(0,n.forwardRef)((b,M)=>{const{componentConfig:L,prefixCls:R}=(0,n.useContext)(u.E),{gutter:z}=(0,n.useContext)(r),ye=(0,s.S)(b,E,L==null?void 0:L.Col),{span:F,offset:w,children:V,className:G,style:ie,flex:ae,order:Y,xs:K,sm:he,md:se,lg:de,xl:ce,xxl:q}=ye,me=we(ye,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),Ee=P({xs:K,sm:he,md:se,lg:de,xl:ce,xxl:q},R),Z=(0,v.default)(`${R}-col`,{[`${R}-col-${F}`]:(0,m.hj)(F),[`${R}-col-offset-${w}`]:w,[`${R}-col-order-${Y}`]:Y},Ee,G),Re={};if(z){const xe=z[0]?z[0]/2:0,y=z[1]?z[1]/2:0;xe&&(Re.paddingLeft=xe,Re.paddingRight=xe),y&&(Re.paddingTop=y,Re.paddingBottom=y)}const Le={};return ae&&(Le.flex=N(ae)),n.createElement("div",ve(O({ref:M},me),{className:Z,style:O(O(O({},ie),Le),Re)}),V)});D.displayName="Col";const j=D,U=g,H=j},45990:function(I,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return v.z},Col:function(){return p.J},ConfigProvider:function(){return u.i},Divider:function(){return o.i},Input:function(){return x.I},Popup:function(){return h.G},Row:function(){return p.X},Space:function(){return d.T},Switch:function(){return l.r},Tag:function(){return i.V},Tooltip:function(){return c.u}});var n=e(69203),v=e(60884),s=e(89946),a={};for(var m in s)["default","Alert","Button"].indexOf(m)<0&&(a[m]=function(C){return s[C]}.bind(0,m));e.d(t,a);var u=e(83405),o=e(48380),p=e(17599),x=e(38312),h=e(58692),f=e(37663),a={};for(var m in f)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup"].indexOf(m)<0&&(a[m]=function(g){return f[g]}.bind(0,m));e.d(t,a);var d=e(92595),l=e(9090),i=e(74597),c=e(34442),r=e(36112),a={};for(var m in r)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup","Radio","RadioButton","RadioGroup","Space","Switch","Tag","Tooltip"].indexOf(m)<0&&(a[m]=function(g){return r[g]}.bind(0,m));e.d(t,a)},38312:function(I,t,e){"use strict";e.d(t,{I:function(){return c}});var n=e(53360),v=e(7829),s=e(7657),m=e(62222),u=e(80703),o=e(58360),p=e(85569),x=e(1824),h=e(57577);const f={type:"text",size:"md",align:"left",visibilityToggle:!0};function d(a,C,g){let E;return E=a===null||(0,u.o8)(a)||(0,u.HD)(a)?a||"":String(a),(0,u.hj)(C)&&!g?E.slice(0,C):E}const l=(0,n.forwardRef)((a,C)=>{const{prefixCls:g,componentConfig:E}=(0,n.useContext)(h.E),Ye=(0,s.S)(a,f,E==null?void 0:E.Input),{size:N,status:B,align:P,disabled:D,allowClear:j,placeholder:U,variant:H="outline",addonBefore:b,addonAfter:M,prefix:L,suffix:R,value:z,defaultValue:F,type:w,className:V,style:G,readOnly:ie,visibilityToggle:ae,maxLength:Y,tips:K,composing:he,onKeyDown:se,onFocus:de,onBlur:ce,onChange:q,onEnter:me,onCompositionStart:Ee,onCompositionEnd:Z}=Ye,Re=we(Ye,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","composing","onKeyDown","onFocus","onBlur","onChange","onEnter","onCompositionStart","onCompositionEnd"]),Le=(0,n.useRef)(null),ye=(0,n.useRef)(null),xe=(0,n.useRef)(!1);(0,n.useImperativeHandle)(C,()=>({currentElement:Le.current,inputElement:ye.current,focus:()=>{var W;return(W=ye.current)==null?void 0:W.focus()},blur:()=>{var W;return(W=ye.current)==null?void 0:W.blur()},select:()=>{var W;return(W=ye.current)==null?void 0:W.select()}}));const[y,S]=(0,n.useState)(!1),A=W=>{D||ie||(S(!0),de==null||de(W))},_=W=>{D||ie||(S(!1),ce==null||ce(W))},X=W=>{W.key==="Enter"&&(me==null||me(W)),se==null||se(W)},k=W=>{he&&(xe.current=!0),Ee==null||Ee(W)},ee=W=>{xe.current&&(xe.current=!1,Pe(W)),Z==null||Z(W)},ne=(0,u.hj)(Y)?Y:Y==null?void 0:Y.length,$=(0,u.hj)(Y)?!1:Y==null?void 0:Y.errorOnly,fe=(0,u.hj)(Y)?!0:(Y==null?void 0:Y.showLimit)!==!1,[Q,T]=(0,m.R)(F,{value:z}),J=d(Q,ne,$),re=(0,u.hj)(ne)?J.length>ne:!1,Pe=W=>{const Ie=W.currentTarget.value;T(Ie),xe.current||(q==null||q(Ie,W))},ge=()=>{var W;D||(W=ye.current)==null||W.focus()},oe=(0,v.default)(`${g}-input`,{[`${g}-input-variant-${H}`]:H,[`${g}-input-size-${N}`]:N,[`${g}-input-disabled`]:D,[`${g}-input-align-${P}`]:P,[`${g}-input-status-${B}`]:B,[`${g}-input-focus`]:y,[`${g}-input-limit-length-error`]:re},V),Ae=(0,v.default)(`${g}-input-real`),te=j&&J&&!D,le=n.createElement(o.Z,null),ue=W=>{W.stopPropagation(),T(""),q==null||q("",W)},be=te&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,v.default)(`${g}-input-suffix`,`${g}-input-clear`),onClick:ue},le),Ne=(0,u.Kn)(ae)&&!(0,u.o8)(ae.visible),[Me,Ke]=(0,n.useState)(w),Ve=(0,u.Kn)(ae)?ae.visible:ae;(0,n.useEffect)(()=>{Ke(Ne?Ve?"text":"password":w)},[w,Ne,Ve]);const Fe=()=>{var Ie;if(D)return;const W=Me==="password"?"text":"password";Ke(W),Ne&&((Ie=ae.onVisibleChange)==null||Ie.call(ae,W==="text"))},je=w==="password",Ze=(0,n.useMemo)(()=>je?(0,u.Kn)(ae)&&(0,u.mf)(ae.renderIcon)?ae.renderIcon(Me==="text"):Me==="password"?n.createElement(p.Z,null):Me==="text"?n.createElement(x.Z,null):null:R,[je,Me,ae,R]),Se=(0,n.useMemo)(()=>function({children:W}){const Ie=b||M;let Ce=W;return Ie&&(Ce=n.createElement("div",{ref:Le,className:`${g}-input-group`},Ce)),K&&(Ce=n.createElement("div",{ref:Le,className:`${g}-input-group-extra`},Ce)),Ce},[g,b,M,K]),We=L&&n.createElement("span",{className:`${g}-input-prefix`},L),$e=Ze&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,v.default)(`${g}-input-suffix`,{[`${g}-input-suffix-password`]:je}),onClick:Fe,onMouseDown:W=>W.preventDefault(),onMouseUp:W=>W.preventDefault()},Ze),Ue=(0,u.hj)(ne)&&fe&&n.createElement("span",{className:`${g}-input-limit-length-text`},J.length,"/",ne),Xe=K&&n.createElement("div",{className:(0,v.default)(`${g}-input-tips`,{[`${g}-input-tips-status-${B}`]:B})},K),Je=n.createElement("div",{role:"group",ref:b||M?void 0:Le,className:oe,style:G,onClick:ge},We,n.createElement("input",ve(O({ref:ye},Re),{type:Me,value:J,readOnly:ie,className:Ae,placeholder:U,disabled:D,onChange:Pe,onFocus:A,onBlur:_,onKeyDown:X,onCompositionStart:k,onCompositionEnd:ee})),be,$e,Ue),He=b&&n.createElement("span",{className:(0,v.default)(`${g}-input-group-addon`)},b),Ge=M&&n.createElement("span",{className:(0,v.default)(`${g}-input-group-addon`)},M);return n.createElement(Se,null,He,Je,Ge,Xe)});l.displayName="Input";const c=l,r=null},58692:function(I,t,e){"use strict";e.d(t,{G:function(){return h},Z:function(){return f}});var n=e(53360),v=e(7829),s=e(7657),m=e(36112),u=e(57577);const o={trigger:"hover",placement:"top",showArrow:!0,destroyOnClose:!0,offset:6},p=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(u.E),b=(0,s.S)(d,o,c==null?void 0:c.Popup),{children:r,content:a,destroyOnClose:C,showArrow:g,styles:E,classNames:N,rootClassName:B}=b,P=we(b,["children","content","destroyOnClose","showArrow","styles","classNames","rootClassName"]),D=(0,n.useRef)(null);if((0,n.useImperativeHandle)(l,()=>D.current),!r)return null;const j=(0,n.isValidElement)(r)?r:n.createElement("span",null,r),U=()=>n.createElement("div",{style:E==null?void 0:E.content,className:(0,v.default)(`${i}-popup-content`,N==null?void 0:N.content)},a),H=()=>{if(g)return n.createElement("div",{style:E==null?void 0:E.arrow,className:(0,v.default)(`${i}-popup-arrow`,N==null?void 0:N.arrow)})};return n.createElement(m.default,ve(O({},P),{ref:D,className:(0,v.default)(`${i}-popup`,B),motion:{timeout:200,name:"popup",mountOnEnter:!0,preEnter:!0,unmountOnExit:C},popper:U(),arrow:H()}),j)});p.displayName="Popup";const h=p,f=h},74052:function(I,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),v=e(7829),s=e(7657),m=e(80703),u=e(92266),o=e(4814),p=e(57577),x=e(83595);const h={defaultChecked:!1},f=(0,n.forwardRef)((l,i)=>{var w;const{prefixCls:c,componentConfig:r}=(0,n.useContext)(p.E),a=(0,n.useContext)(x.Z),F=(0,s.S)(l,h,r==null?void 0:r.Radio),{_IS_BUTTON_:C,value:g,children:E,style:N}=F,B=we(F,["_IS_BUTTON_","value","children","style"]),P=V=>{var G,ie;(G=B.onChange)==null||G.call(B,V),(ie=a==null?void 0:a.onChange)==null||ie.call(a,V)},D=O({},B);let j="md";(0,m.Qr)(a)||(D.name=a.name,D.onChange=P,D.checked=g===a.value,D.disabled=(w=D.disabled)!=null?w:a.disabled,j=a.size?a.size:j);const[U,H]=(0,n.useState)(!1),b=C?`${c}-radio-button`:`${c}-radio`,M=(0,v.default)(`${b}-wrapper`,{[`${b}-wrapper-disabled`]:D.disabled,[`${b}-wrapper-checked`]:D.checked,[`${b}-wrapper-size-${j}`]:j,[`${b}-wrapper-filled`]:a.buttonVariant==="filled"}),L=()=>(0,m.o8)(E)?null:(0,m.mf)(E)?E({checked:"checked"in D?!!D.checked:U}):n.createElement("span",{className:`${b}-label`},E),R=(0,n.useRef)(null),z=V=>{var G;(0,m.mf)(E)&&(V.preventDefault(),(G=R.current)==null||G.click())};return n.createElement("label",{className:M,onClick:z},n.createElement(u.Z,ve(O(O({},B),D),{ref:(0,o.sQ)(i,R),value:g,type:"radio",prefixCls:b,style:ve(O({},N),{display:(0,m.mf)(E)?"none":void 0}),disabled:D.disabled,_getCheckedValue:H})),L())});f.displayName="Radio";const d=f},89312:function(I,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(53360),v=e(74052);const s=(0,n.forwardRef)((u,o)=>n.createElement(v.Z,ve(O({_IS_BUTTON_:!0},u),{ref:o})));s.displayName="RadioButton";const m=s},59803:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(7829),s=e(7657),m=e(62222),u=e(80703),o=e(57577),p=e(83595),x=e(74052),h=e(89312);const f={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},d=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(o.E),C=(0,s.S)(i,f,a==null?void 0:a.RadioGroup),g=(0,n.useId)(),{className:E,style:N,name:B=g,value:P,defaultValue:D,children:j,disabled:U,size:H,buttonVariant:b,renderOption:M,onChange:L,appearance:R,options:z}=C,[F,w]=(0,m.R)(D,{value:P}),V=(0,n.useCallback)(Y=>{const K=Y.target.value;"value"in C||w(K),K!==F&&(L==null||L(Y))},[C.value,F,L]);let G=j;const ie=R==="button"?h.Z:x.Z;if((0,u.kJ)(z)&&z.length>0){const Y=(0,u.mf)(M);G=z.map(K=>{if((0,u.HD)(K)||(0,u.hj)(K)){const de=F===K,ce=Y?()=>M({label:K,value:K,checked:de}):K;return n.createElement(ie,{key:K.toString(),disabled:U,value:K,checked:de},ce)}const he=F===K.value,se=Y?()=>M(ve(O({},K),{checked:he})):K.label;return n.createElement(ie,{key:`radio-group-options-${K.value}`,className:K.className,style:K.style,disabled:K.disabled||U,value:K.value,checked:he,id:K.id,title:K.title,onChange:K.onChange},se)})}const ae=(0,n.useMemo)(()=>({name:B,value:F,disabled:U,size:H,buttonVariant:b,onChange:V}),[B,F,U,H,b,V]);return n.createElement("div",{ref:c,className:(0,v.default)(`${r}-radio-group`,E),style:N},n.createElement(p.Z.Provider,{value:ae},G))});d.displayName="RadioGroup";const l=d},83595:function(I,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360);const s=(0,n.createContext)({})},37663:function(I,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return x},RadioButton:function(){return f},RadioGroup:function(){return h},default:function(){return d}});var n=e(74052),v=e(89312),s=e(59803),m=e(63149),u=e.n(m),o={};for(var p in m)["default","Radio","RadioButton","RadioGroup"].indexOf(p)<0&&(o[p]=function(l){return m[l]}.bind(0,p));e.d(t,o);const x=n.Z;x.Group=s.Z,x.Button=v.Z;const h=x.Group,f=x.Button,d=x},63149:function(){},92595:function(I,t,e){"use strict";e.d(t,{T:function(){return d}});var n=e(53360),v=e(7829),s=e(80703),m=e(7657),u=e(21299),o=e(57577);const p={sm:8,md:16,lg:24},x={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,size:a="md",componentConfig:C}=(0,n.useContext)(o.E),F=(0,m.S)(i,x,C==null?void 0:C.Space),{className:E,children:N,size:B=a,direction:P="horizontal",align:D,split:j,wrap:U=!1}=F,H=we(F,["className","children","size","direction","align","split","wrap"]),b=(0,u.q)(N),M=P==="horizontal"&&D===void 0?"center":D,L=(0,v.default)(`${r}-space`,`${r}-space-direction-${P}`,{[`${r}-space-align-${M}`]:M,[`${r}-space-wrap`]:U},E),R=(0,n.useCallback)(w=>{const V=(0,s.kJ)(B)?B:[B,B],[G,ie]=V.map(ae=>(0,s.HD)(ae)?p[ae]:ae||0);return U?{marginRight:G,marginBottom:ie}:P==="vertical"?{marginBottom:ie}:{marginRight:w?void 0:G}},[B,P,U]),z=b.map((w,V)=>{const G=V===b.length-1,ie=(w==null?void 0:w.key)||`space-item-${V.toString()}`;return n.createElement(n.Fragment,{key:ie},n.createElement("div",{className:"space-item",style:R(G)},w),!G&&j&&n.createElement("span",{className:"sqi-space-item-split"},j))});return n.createElement("div",ve(O({className:L},H),{ref:c}),z)});h.displayName="Space";const d=h,l=null},9090:function(I,t,e){"use strict";e.d(t,{r:function(){return f}});var n=e(53360),v=e(7829),s=e(7657),m=e(62222),u=e(60333),o=e(57577);const p={label:[],loading:!1,disabled:!1},x=(0,n.forwardRef)((l,i)=>{const{prefixCls:c,size:r="md",componentConfig:a}=(0,n.useContext)(o.E),w=(0,s.S)(l,p,a==null?void 0:a.Switch),{checked:C,defaultChecked:g,className:E,disabled:N,size:B=r,label:P,loading:D,loadingIcon:j,onChange:U,onClick:H}=w,b=we(w,["checked","defaultChecked","className","disabled","size","label","loading","loadingIcon","onChange","onClick"]),[M,L]=(0,m.R)(!1,{value:C,defaultValue:g});function R(V){if(N||D)return;const G=!M;L(G),U==null||U(G,V),H==null||H(G,V)}const z=(0,v.default)(`${c}-switch`,{[`${c}-switch-checked`]:M,[`${c}-switch-disabled`]:N,[`${c}-switch-loading`]:D,[`${c}-switch-${B}`]:B},E),F=j||n.createElement(u.Z,{spin:!0});return n.createElement("button",ve(O({},b),{type:"button",role:"switch","aria-checked":M,ref:i,className:z,disabled:N||D,onClick:R}),n.createElement("div",{className:`${c}-switch-handle`},D&&F),n.createElement("div",{className:`${c}-switch-content`},M?P[0]:P[1]))});x.displayName="Switch";const f=x,d=null},74597:function(I,t,e){"use strict";e.d(t,{V:function(){return h}});var n=e(53360),v=e(7829),s=e(7657),m=e(27377),u=e(57577);const o={},p=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,size:c="md",componentConfig:r}=(0,n.useContext)(u.E),w=(0,s.S)(d,o,r==null?void 0:r.Tag),{children:a,className:C,size:g=c,title:E,bordered:N,icon:B,closable:P,onClose:D,color:j,style:U,onClick:H}=w,b=we(w,["children","className","size","title","bordered","icon","closable","onClose","color","style","onClick"]),[M,L]=(0,n.useState)(!0),R=(0,v.default)(`${i}-tag`,{[`${i}-tag-size-${g}`]:g,[`${i}-tag-has-color`]:j,[`${i}-tag-bordered`]:N},C),z=V=>{V.stopPropagation(),D==null||D(V),!V.defaultPrevented&&L(!1)},F=()=>{if(!P)return null;const V=`${i}-tag-close-icon`;return(0,n.isValidElement)(P)?(0,n.cloneElement)(P,{className:V,onClick:G=>{var ie,ae;(ae=(ie=P.props).onClick)==null||ae.call(ie,G),G.defaultPrevented||z(G)}}):n.createElement(m.Z,{onClick:z,className:V})};return M===!1?null:n.createElement("span",ve(O({},b),{ref:l,title:E,className:R,style:ve(O({},U),{backgroundColor:j}),onClick:H,role:"button",tabIndex:0,"aria-label":"close"}),B,a,F())});p.displayName="Tag";const h=p,f=null},34442:function(I,t,e){"use strict";e.d(t,{u:function(){return h}});var n=e(53360),v=e(7829),s=e(7657),m=e(57577),u=e(58692);const o={theme:"default",trigger:"hover",placement:"top",showArrow:!0,destroyOnClose:!0,offset:6},p=(0,n.forwardRef)((d,l)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(m.E),E=(0,s.S)(d,o,c==null?void 0:c.Tooltip),{classNames:r,rootClassName:a,theme:C}=E,g=we(E,["classNames","rootClassName","theme"]);return n.createElement(u.Z,ve(O({rootClassName:(0,v.default)(`${i}-tooltip`,{[`${i}-tooltip-${C}`]:C},a),classNames:{arrow:(0,v.default)(r==null?void 0:r.arrow,`${i}-tooltip-arrow`),content:(0,v.default)(r==null?void 0:r.content,`${i}-tooltip-content`)}},g),{ref:l}))});p.displayName="Tooltip";const h=p,f=null},15656:function(I,t,e){"use strict";e.d(t,{Z:function(){return xe}});var n=e(53360),v=e(7829),s=e(7657),m=e(62222),u=e(60164),o=e(6890),p=e(37828),x=e(21299);function h(y){return y instanceof HTMLElement||y instanceof SVGElement}function f(y){return y&&typeof y=="object"&&h(y.currentElement)?y.currentElement:h(y)?y:null}function d(y){if(y)return y.current&&typeof y.current=="object"&&"currentElement"in y.current?y.current.currentElement:y.current}function l(y){var A;return y&&(0,n.isValidElement)(y)?parseInt(n.version,10)>=19?((A=y.props)==null?void 0:A.ref)||null:y.ref:null}var i=e(4814);const c=(0,n.forwardRef)((y,S)=>{const{children:A,disabled:_,throttleMs:X=0,onResize:k}=y,ee=(0,n.isValidElement)(A),ne=A?(0,x.q)(A):[],$=A?l(A):null,fe=(0,n.useRef)(null),[Q,T]=(0,n.useState)(null),J=(0,i.x1)($,fe,Pe=>{T(f(Pe))});(0,n.useImperativeHandle)(S,()=>d(fe));const re=k?(0,o.P)(k,X):void 0;return(0,p._)(Q,re,!_),ee?(0,n.cloneElement)(A,{ref:J}):A});c.displayName="ResizeObserverRect";const r=c;var a=e(86752),C=e(34028),g=e(80703);const E=(0,C.J)();function N(y){return E?(0,g.mf)(y)?y():document.body:null}const B=(0,n.forwardRef)((y,S)=>{const{getContainer:A,prefixCls:_,children:X,open:k=!0,rootStyle:ee}=y,[ne,$]=(0,n.useState)(null),[fe,Q]=(0,n.useState)(null),T=fe||document.body;(0,n.useEffect)(()=>{const re=N(A);Q(re||null)},[A]);const J=()=>{if(!E||ne)return null;const re=document.createElement("div");_&&(re.className=`${_}-portal-wrapper`),ee&&Object.assign(re.style,ee),re.setAttribute("data-portal","true"),$(re)};return(0,u.L)(()=>{E&&(k?J():$(null))},[k]),n.useImperativeHandle(S,()=>ne,[ne]),(0,u.L)(()=>{if(!E||!ne)return;const re=()=>!ne.parentNode&&T.appendChild(ne),Pe=()=>{var ge;return(ge=ne.parentNode)==null?void 0:ge.removeChild(ne)};return k?re():Pe(),()=>{Pe()}},[k,ne]),k&&X&&ne?(0,a.createPortal)(X,ne):null});B.displayName="Portal";const P=B;var D=e(40549),j=e(57577);const U="Escape",b=y=>{const{trigger:S,delay:A,disabled:_,visible:X,clickOutsideClose:k,triggerEl:ee,outFocusToClose:ne=!0,onVisibleChange:$}=y,fe=(0,n.useRef)(!1),Q=(0,n.useRef)(!1),T=(0,n.useRef)(null),J=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(_)return;const oe=Ae=>{var te;(te=ee==null?void 0:ee.contains)!=null&&te.call(ee,Ae.target)||fe.current||X&&k&&($==null||$(!1,{e:Ae,trigger:"document"}))};return document.addEventListener("mousedown",oe),document.addEventListener("touchend",oe),()=>{document.removeEventListener("mousedown",oe),document.removeEventListener("touchend",oe)}},[_,X,ee,k,$]);function re(oe){A?(clearTimeout(T.current),T.current=setTimeout(oe,A)):oe()}function Pe(){return _?{}:{onMouseEnter:oe=>{S==="hover"&&!Q.current&&(clearTimeout(T.current),$==null||$(!0,{e:oe,trigger:"hover"}))},onMouseLeave:oe=>{S==="hover"&&(Q.current=!0,clearTimeout(T.current),$==null||$(!1,{e:oe,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(J.current),fe.current=!0,J.current=window.setTimeout(()=>{fe.current=!1})},onTouchEnd:()=>{clearTimeout(J.current),fe.current=!0,J.current=window.setTimeout(()=>{fe.current=!1})}}}function ge(oe){return _?{}:{onClick:te=>{var le,ue;S==="click"&&(te.preventDefault(),te.stopPropagation(),re(()=>$==null?void 0:$(!X,{e:te,trigger:"click"}))),(ue=(le=oe.props).onClick)==null||ue.call(le,te)},onTouchStart:te=>{var le,ue;S==="hover"&&(Q.current=!1,re(()=>$==null?void 0:$(!0,{e:te,trigger:"hover"}))),(ue=(le=oe.props).onTouchStart)==null||ue.call(le,te)},onMouseEnter:te=>{var le,ue;S==="hover"&&(Q.current=!1,re(()=>$==null?void 0:$(!0,{e:te,trigger:"hover"}))),(ue=(le=oe.props).onMouseEnter)==null||ue.call(le,te)},onMouseLeave:te=>{var le,ue;S==="hover"&&(Q.current=!1,re(()=>$==null?void 0:$(!1,{e:te,trigger:"hover"}))),(ue=(le=oe.props).onMouseLeave)==null||ue.call(le,te)},onFocus:te=>{var le,ue;S==="focus"&&re(()=>$==null?void 0:$(!0,{e:te,trigger:"focus"})),(ue=(le=oe.props).onFocus)==null||ue.call(le,te)},onBlur:te=>{var le,ue;if(S==="focus"){if(fe.current&&!ne)return;re(()=>$==null?void 0:$(!1,{e:te,trigger:"blur"}))}(ue=(le=oe.props).onBlur)==null||ue.call(le,te)},onContextMenu:te=>{var le,ue;S==="context-menu"&&(te.preventDefault(),re(()=>$==null?void 0:$(!0,{e:te,trigger:"context-menu"}))),(ue=(le=oe.props).onContextMenu)==null||ue.call(le,te)},onKeyDown:te=>{var le,ue;(te==null?void 0:te.key)===U&&re(()=>$==null?void 0:$(!1,{e:te,trigger:"keydown-esc"})),(ue=(le=oe.props).onKeyDown)==null||ue.call(le,te)}}}return{genPopupProps:Pe,genTriggerProps:ge}};function M(y,S,A){const{top:_,left:X,width:k,height:ee}=y.getBoundingClientRect(),ne=_+A,$=X+S;return{width:k,height:ee,top:ne,bottom:ne+ee,left:$,right:$+k}}function L(y,S,A){const _=M(y,S,A),X=y.clientWidth,k=y.clientHeight,ee=_.left+y.clientLeft,ne=_.top+y.clientTop;return{width:X,height:k,top:ne,bottom:ne+k,left:ee,right:ee+X}}function R(y){if(!y||y.tagName==="HTML")return;const S=window.getComputedStyle(y),A=_=>["auto","scroll"].includes(_);return y.clientHeight<y.scrollHeight&&A(S.overflowX)||y.clientWidth<y.scrollWidth&&A(S.overflowY)?y:R(y.parentNode)}function z(y,S){return Math.round(Math.abs(y))>Math.round(Math.abs(S))?y:S}const F=(y,S)=>`translate3d(${y}px, ${S}px, 0)`;function w(y){var k,ee;if(!y)return[0,0];const S=window.getComputedStyle(y),A=S.transform||S.webkitTransform||"none";if(A==="none")return[0,0];if(A.match(/matrix\(([^)]+)\)/)){const ne=((ee=(k=A.match(/matrix\((.+)\)/))==null?void 0:k[1])==null?void 0:ee.split(",").map(Number))||[0,0];if(ne.length===6)return[ne[4],ne[5]]}const[,_=0,X=0]=(A.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(ne=>Number(ne));return[_,X]}function V(y){const S=y.split("-"),A=S[0],_=S[1];let X;const k=A==="top"||A==="bottom",ee=A==="left"||A==="right";return k&&(_==="start"&&(X="left"),_==="end"&&(X="right")),ee&&(_==="start"&&(X="top"),_==="end"&&(X="bottom")),[A,X,k,ee]}function G(y){return y?(0,g.Kn)(y)?[y.x||0,y.y||0]:[y||0,y||0]:[0,0]}const ie={placement:"bottom",enableFlip:!0,enableShift:!0};function ae(y,S){const{reference:A,popper:_,arrow:X}=y;if(!A||!_)return;const k=O(O({},ie),S),ee=_.parentNode,[ne,$]=w(ee),fe=window.pageYOffset,Q=window.pageXOffset,T=M(A,Q,fe);ee.style.setProperty("--reference-x",`${T.width}px`),ee.style.setProperty("--reference-y",`${T.height}px`);const J=M(_,Q,fe),re=T.width-J.width,Pe=T.height-J.height;let ge=T.left-J.left+ne,oe=T.top-J.top+$;const[Ae,te,le,ue]=V(k.placement);let be=Ae;const Ne=te==="left"?0:te==="right"?re:re/2,Me=re-Ne,Ke=te==="top"?0:te==="bottom"?Pe:Pe/2,Ve=Pe-Ke;le&&(ge+=Ne,oe+=Ae==="top"?-J.height:T.height),ue&&(ge+=Ae==="left"?-J.width:T.width,oe+=Ke);let Fe=R(A);const[je,Ze]=G(k.offset),{height:Se=0,width:We=0}=X?M(X,Q,fe):{};ee.style.setProperty("--arrow-x",`${We}px`),ee.style.setProperty("--arrow-y",`${We}px`);let $e=0,Ue=0;for(;Fe;){const W=L(Fe,Q,fe);Ge(W),Fe=R(Fe.parentNode)}const{clientHeight:Xe,clientWidth:Je}=document.documentElement;Ge({top:fe,bottom:fe+Xe,left:Q,right:Q+Je,height:Xe,width:Je});const He=k.placement.split("-")[1];ee.setAttribute("data-trigger-placement",`${be}${He?`-${He}`:""}`),ge-=$e,oe-=Ue,Ye(),le&&(oe+=be==="bottom"?Ze:-Ze),ue&&(ge+=be==="right"?je:-je),ee.style.transform=F(ge,oe);function Ge(W){const{top:Ie,bottom:Ce,left:De,right:pe,height:Be,width:ze}=W;if(le){const Oe=Math.round(T.top-Ie+T.height/2),Te=Math.round(Be/2);k.enableFlip&&tn(Oe,Te),k.enableShift&&on()}if(ue){const Oe=Math.round(T.left-De+T.width/2),Te=Math.round(ze/2);k.enableFlip&&an(Oe,Te),k.enableShift&&rn()}function tn(Oe,Te){const ke=T.top-(J.height+Ze+Se)<Ie,qe=T.bottom+J.height+Ze+Se>Be+Ie;ke&&Oe<=Te&&be==="top"?(oe+=J.height+T.height,be="bottom"):qe&&Oe>=Te&&be==="bottom"&&(oe-=J.height+T.height,be="top")}function on(){if(T.left+Ne<De){const Oe=T.left+Ne-De,Te=T.right-We>De?Oe:-T.width+Ne+We;$e=z(Te,$e)}if(T.right-Me>pe){const Oe=T.right-Me-pe,Te=T.left+We<pe?Oe:T.width-Me-We;$e=z(Te,$e)}}function an(Oe,Te){const ke=T.left-(J.width+je+We)<De,qe=T.right+J.width+je+We>pe;ke&&Oe<Te&&be==="left"?(ge+=T.width+J.width,be="right"):qe&&Oe>Te&&be==="right"&&(ge-=T.width+J.width,be="left")}function rn(){if(T.top+Ke<Ie){const Oe=T.top+Ke-Ie,Te=T.bottom-Se>Ie?Oe:-T.height+Ke+Se;Ue=z(Te,Ue)}if(T.bottom-Ve>Ce){const Oe=T.bottom-Ve-Ce,Te=T.top+Se<Ce?Oe:T.height-Ve-Se;Ue=z(Te,Ue)}}}function Ye(){if(!X)return;const{height:W,width:Ie}=M(X,Q,fe);le?oe+=be==="bottom"?W:-W:ue&&(ge+=be==="right"?Ie:-Ie);const Ce=k.placement.split("-")[1]||"center",De={x:0,y:0};if(le){De.y=be==="top"?J.height:-W;const pe=J.width-Ie,Be=0;if(Ce==="start")De.x=Math.max(Be,Math.min(pe,$e));else if(Ce==="center"){const ze=(J.width-Ie)/2;De.x=Math.max(Be,Math.min(pe,ze+$e))}else if(Ce==="end"){const ze=J.width-Ie;De.x=Math.max(Be,Math.min(pe,ze+$e))}}else if(ue){De.x=be==="left"?J.width:-Ie;const pe=J.height-W,Be=0;if(Ce==="start")De.y=Math.max(Be,Math.min(pe,Ue));else if(Ce==="center"){const ze=(J.height-W)/2;De.y=Math.max(Be,Math.min(pe,ze+Ue))}else if(Ce==="end"){const ze=J.height-W;De.y=Math.max(Be,Math.min(pe,ze+Ue))}}X.style.transform=F(De.x,De.y)}}function Y(y,S=[]){if(!y)return[];const A=de(y);if(A===y.ownerDocument.body){const k=window.visualViewport?[window.visualViewport]:[],ee=he(A)?[A]:[];return[...S,window,...k,...ee]}const X=Y(K(A));return[...S,A,...X]}function K(y){return q(y)==="html"?y:y==null?void 0:y.parentNode}function he(y){if(!y)return!1;const{overflow:S,overflowX:A,overflowY:_,display:X}=window.getComputedStyle(y);return/auto|scroll|overlay|hidden|clip/.test(S+_+A)&&!["contents"].includes(X)}const se=new Set(["html","body","#document"]);function de(y){return y?se.has(q(y))?y.ownerDocument.body:ce(y)&&he(y)?y:de(K(y)):document.body}function ce(y){return y instanceof HTMLElement}function q(y){return y?(y.nodeName||"").toLowerCase():null}function me(y){let S;return()=>(S||(S=new Promise(A=>{Promise.resolve().then(()=>{S=void 0,A(y())})})),S)}const Ee={placement:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:1,trigger:"hover",delay:100,outFocusToClose:!0,clickOutsideClose:!0},Z={position:"absolute",top:0,left:0,bottom:"auto",right:"auto",margin:0,willChange:"transform"},Re=O({},Z),Le=O({},Z),ye=(0,n.forwardRef)((y,S)=>{const{componentConfig:A}=(0,n.useContext)(j.E),{className:_,children:X,popper:k,enableShift:ee,motion:ne={},enableFlip:$,offset:fe,placement:Q,getContainer:T,zIndex:J,trigger:re,delay:Pe,outFocusToClose:ge,disabled:oe,defaultVisible:Ae,visible:te,arrow:le,clickOutsideClose:ue,onVisibleChange:be}=(0,s.S)(y,Ee,A==null?void 0:A.Trigger),Ne=(0,n.isValidElement)(X),Me=(0,n.useRef)(null),Ke=(0,n.useRef)(null),Ve=l(k),Fe=(0,n.useRef)(null),je=(0,i.x1)(Ve,Fe),Ze=(0,n.useRef)(null),[Se,We]=(0,m.R)(!1,{defaultValue:Ae,value:te,onChange:be}),{genPopupProps:$e,genTriggerProps:Ue}=b({clickOutsideClose:ue,delay:Pe,disabled:oe,visible:Se,onVisibleChange:We,trigger:re,triggerEl:Me.current,outFocusToClose:ge});(0,n.useImperativeHandle)(S,()=>Me.current);const Xe=(0,i.t4)(X),Je=(0,i.t4)(k),He=(0,n.useCallback)(pe=>{var Be;pe&&pe.type!=="resize"&&!((Be=pe.target)!=null&&Be.contains(Me.current))||ae({reference:Me.current,popper:Fe.current,arrow:Ke.current},{placement:Q,enableFlip:$,enableShift:ee,offset:fe})},[Q,$,ee,fe]),[Ge,Ye]=(0,n.useState)([]),W=(0,n.useCallback)(me(()=>new Promise(pe=>{He(),pe(void 0)})),[Q,$,ee,fe]);(0,u.L)(()=>{const pe=Y(Me.current),Be=Y(Fe.current),ze=[...pe,...Be];Ye(ze)},[]);const Ie=()=>{Ge.forEach(pe=>{pe.addEventListener("scroll",W,{passive:!0})}),window.addEventListener("resize",W,{passive:!0})},Ce=()=>{Ge.forEach(pe=>{pe.removeEventListener("scroll",W)}),window.removeEventListener("resize",W)};if((0,u.L)(()=>{var pe,Be;Se!==void 0&&(Se===!0?((pe=Ze.current)==null||pe.toggle(!0),W(),Ie()):Se===!1&&((Be=Ze.current)==null||Be.toggle(!1),Ce()))},[Se]),(0,u.L)(()=>{if(Se)return W(),Ce(),Ie(),()=>Ce()},[Q,Se,Ge,$,ee,fe]),!Ne)return;const De=()=>k?n.createElement(D.Z,O({ref:Ze},ne),({className:pe})=>n.createElement(P,{getContainer:T},n.createElement("div",ve(O({role:"tooltip"},$e()),{className:(0,v.default)(pe,_),style:ve(O({},Re),{zIndex:J})}),le?n.createElement("div",{ref:Ke,style:ve(O({},Le),{zIndex:J})},le):null,(0,n.cloneElement)(k,{ref:je})))):null;return n.createElement(n.Fragment,null,n.createElement(r,{ref:Me,onResize:W},(0,n.cloneElement)(X,O({},Ue(X)))),De())});ye.displayName="Trigger";const xe=ye},36112:function(I,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return p}});var n=e(15656),v=e(98479),s=e.n(v),m={};for(var u in v)["default","Trigger"].indexOf(u)<0&&(m[u]=function(x){return v[x]}.bind(0,u));e.d(t,m);const o=n.Z,p=o},98479:function(){},84176:function(I,t,e){var n=e(75863);function v(s,m){if(s==null)return{};var u=n(s,m),o,p;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(s);for(p=0;p<x.length;p++)o=x[p],!(m.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(u[o]=s[o])}return u}I.exports=v,I.exports.__esModule=!0,I.exports.default=I.exports},75863:function(I){function t(e,n){if(e==null)return{};var v={},s=Object.keys(e),m,u;for(u=0;u<s.length;u++)m=s[u],!(n.indexOf(m)>=0)&&(v[m]=e[m]);return v}I.exports=t,I.exports.__esModule=!0,I.exports.default=I.exports},7829:function(I,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return v}});function n(s){var m,u,o="";if(typeof s=="string"||typeof s=="number")o+=s;else if(typeof s=="object")if(Array.isArray(s)){var p=s.length;for(m=0;m<p;m++)s[m]&&(u=n(s[m]))&&(o&&(o+=" "),o+=u)}else for(u in s)s[u]&&(o&&(o+=" "),o+=u);return o}function v(){for(var s,m,u=0,o="",p=arguments.length;u<p;u++)(s=arguments[u])&&(m=n(s))&&(o&&(o+=" "),o+=m);return o}t.default=v},10735:function(I,t,e){"use strict";e.d(t,{Y:function(){return m}});var n=e(53360),v=e(90940);const s=(u,o,p,x,h)=>{clearTimeout(x.current);const f=(0,v.y0)(u);o(f),p.current=f,h&&h({current:f})},m=({enter:u=!0,exit:o=!0,preEnter:p,preExit:x,timeout:h,initialEntered:f,mountOnEnter:d,unmountOnExit:l,onStateChange:i}={})=>{const[c,r]=(0,n.useState)(()=>(0,v.y0)(f?v.cn:(0,v.Ef)(d))),a=(0,n.useRef)(c),C=(0,n.useRef)(),[g,E]=(0,v.fj)(h),N=(0,n.useCallback)(()=>{const P=(0,v.XZ)(a.current._s,l);P&&s(P,r,a,C,i)},[i,l]),B=(0,n.useCallback)(P=>{const D=U=>{switch(s(U,r,a,C,i),U){case v.d0:g>=0&&(C.current=setTimeout(N,g));break;case v.Ix:E>=0&&(C.current=setTimeout(N,E));break;case v.iL:case v.iU:C.current=(0,v.Y3)(D,U);break}},j=a.current.isEnter;typeof P!="boolean"&&(P=!j),P?!j&&D(u?p?v.iL:v.d0:v.cn):j&&D(o?x?v.iU:v.Ix:(0,v.Ef)(l))},[N,i,u,o,p,x,g,E,l]);return[c,B,N]}},90940:function(I,t,e){"use strict";e.d(t,{Ef:function(){return f},Ix:function(){return u},XZ:function(){return d},Y3:function(){return i},cn:function(){return s},d0:function(){return v},fj:function(){return l},iL:function(){return n},iU:function(){return m},y0:function(){return h}});const n=0,v=1,s=2,m=3,u=4,o=5,p=6,x=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=c=>({_s:c,status:x[c],isEnter:c<m,isMounted:c!==p,isResolved:c===s||c>u}),f=c=>c?p:o,d=(c,r)=>{switch(c){case v:case n:return s;case u:case m:return f(r)}},l=c=>typeof c=="object"?[c.enter,c.exit]:[c,c],i=(c,r)=>setTimeout(()=>{isNaN(document.body.offsetTop)||c(r+1)},0)}}]);
}());