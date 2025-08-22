!(function(){var sn=Object.defineProperty,ln=Object.defineProperties;var dn=Object.getOwnPropertyDescriptors;var Xe=Object.getOwnPropertySymbols;var nn=Object.prototype.hasOwnProperty,tn=Object.prototype.propertyIsEnumerable;var en=(I,t,e)=>t in I?sn(I,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):I[t]=e,O=(I,t)=>{for(var e in t||(t={}))nn.call(t,e)&&en(I,e,t[e]);if(Xe)for(var e of Xe(t))tn.call(t,e)&&en(I,e,t[e]);return I},ve=(I,t)=>ln(I,dn(t));var we=(I,t)=>{var e={};for(var n in I)nn.call(I,n)&&t.indexOf(n)<0&&(e[n]=I[n]);if(I!=null&&Xe)for(var n of Xe(I))t.indexOf(n)<0&&tn.call(I,n)&&(e[n]=I[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{24056:function(I,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return Ie}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return p.D},useIsomorphicLayoutEffect:function(){return r.L},useMergeProps:function(){return a.S},useMergeState:function(){return C.R},usePrevious:function(){return y.D},useResizeObserver:function(){return E.y}});var f={};e.r(f),e.d(f,{canUseDom:function(){return w.J},debounce:function(){return B.D},isArray:function(){return P.kJ},isEmptyObject:function(){return P.Qr},isFunction:function(){return P.mf},isNumber:function(){return P.hj},isObject:function(){return P.Kn},isString:function(){return P.HD},isUndefined:function(){return P.o8},omit:function(){return M.C},pick:function(){return F},throttle:function(){return z.P}});var s={};e.r(s),e.d(s,{default:function(){return T.Y},useTransition:function(){return T.Y},useTransitionMap:function(){return Z},useTransitionState:function(){return T.Y}});var c=e(90819),i=e.n(c),o=e(89933),m=e.n(o),x=e(53360),h=e.t(x,2),v=e(45990),u=e(4177),d=e(86752),l=e.t(d,2),p=e(37797),r=e(60164),a=e(7657),C=e(62222),y=e(45844),E=e(8240),w=e(34028),B=e(78831),P=e(80703),M=e(12598);function F(re,se){const me={};return se.forEach(ee=>{ee in re&&(me[ee]=re[ee])}),me}var z=e(6890),H=e(22532),R=e(75257),D=e(7829),T=e(64508),b=e(75601);const U=(re,se,me,ee,ue,De)=>{clearTimeout(ue);const K=(0,b.y0)(se),be=new Map(ee.current);be.set(re,K),me(be),ee.current=be,De&&De({key:re,current:K})},Z=({allowMultiple:re,enter:se=!0,exit:me=!0,preEnter:ee,preExit:ue,timeout:De,initialEntered:K,mountOnEnter:be,unmountOnExit:Ne,onStateChange:Pe}={})=>{const[Ce,g]=(0,x.useState)(new Map),S=(0,x.useRef)(Ce),A=(0,x.useRef)(new Map),[j,J]=(0,b.fj)(De),Q=(0,x.useCallback)((Y,L)=>{const{initialEntered:q=K}=L||{},ae=q?b.cn:(0,b.Ef)(be);U(Y,ae,g,S),A.current.set(Y,{})},[K,be]),ne=(0,x.useCallback)(Y=>{const L=new Map(S.current);return L.delete(Y)?(g(L),S.current=L,A.current.delete(Y),!0):!1},[]),te=(0,x.useCallback)(Y=>{const L=S.current.get(Y);if(!L)return;const{timeoutId:q}=A.current.get(Y),ae=(0,b.XZ)(L._s,Ne);ae&&U(Y,ae,g,S,q,Pe)},[Pe,Ne]),$=(0,x.useCallback)((Y,L)=>{const q=S.current.get(Y);if(!q)return;const ae=A.current.get(Y),ge=oe=>{switch(U(Y,oe,g,S,ae.timeoutId,Pe),oe){case b.d0:j>=0&&(ae.timeoutId=setTimeout(()=>te(Y),j));break;case b.Ix:J>=0&&(ae.timeoutId=setTimeout(()=>te(Y),J));break;case b.iL:case b.iU:ae.timeoutId=(0,b.Y3)(ge,oe);break}},xe=q.isEnter;typeof L!="boolean"&&(L=!xe),L?xe||(ge(se?ee?b.iL:b.d0:b.cn),!re&&S.current.forEach((oe,Se)=>Se!==Y&&$(Se,!1))):xe&&ge(me?ue?b.iU:b.Ix:(0,b.Ef)(Ne))},[Pe,te,re,se,me,ee,ue,j,J,Ne]),pe=(0,x.useCallback)(Y=>{if(!(!re&&Y!==!1))for(const L of S.current.keys())$(L,Y)},[re,$]);return{stateMap:Ce,toggle:$,toggleAll:pe,endTransition:te,setItem:Q,deleteItem:ne}};var W=e(53175),X=e(67324),V=e(71932),ce=e(31716),de=e(95154),G=e(81184),N=e.t(G,2),Ie={"sqi-web-src-common-demo-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,70902))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7316).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(49821).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":u,react:h,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":u,"react-dom":l,"@sqi-ui/hooks":n,"@sqi-ui/utils":f},renderOpts:{compile:function(){var re=m()(i()().mark(function me(){var ee,ue=arguments;return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(788).then(e.bind(e,28788));case 2:return K.abrupt("return",(ee=K.sent).default.apply(ee,ue));case 3:case"end":return K.stop()}},me)}));function se(){return re.apply(this,arguments)}return se}()}},"sqi-web-src-common-demo-css-motion-base":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,14097))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91738).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79379).Z},"../CSSMotion.tsx":{type:"FILE",value:e(58500).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(61569).Z}},entry:"index.tsx"},context:{"./motion.css":H,"../CSSMotion.tsx":R,"../config-provider/context.ts":W,react:h,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":H,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":R,clsx:D,"react-transition-state":s,"@sqi-ui/utils":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":W},renderOpts:{compile:function(){var re=m()(i()().mark(function me(){var ee,ue=arguments;return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(788).then(e.bind(e,28788));case 2:return K.abrupt("return",(ee=K.sent).default.apply(ee,ue));case 3:case"end":return K.stop()}},me)}));function se(){return re.apply(this,arguments)}return se}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,61086))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12984).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79379).Z},"../CSSMotion.tsx":{type:"FILE",value:e(58500).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(61569).Z}},entry:"index.tsx"},context:{"./motion.css":H,"../CSSMotion.tsx":R,"../config-provider/context.ts":W,react:h,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":H,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":R,clsx:D,"react-transition-state":s,"@sqi-ui/utils":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":W},renderOpts:{compile:function(){var re=m()(i()().mark(function me(){var ee,ue=arguments;return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(788).then(e.bind(e,28788));case 2:return K.abrupt("return",(ee=K.sent).default.apply(ee,ue));case 3:case"end":return K.stop()}},me)}));function se(){return re.apply(this,arguments)}return se}()}},"sqi-web-src-common-demo-css-motion-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,86328))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69563).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(49821).Z},"../CSSMotion.tsx":{type:"FILE",value:e(58500).Z},"./motion.css":{type:"FILE",value:e(79379).Z},"react-dom":{type:"NPM",value:"19.1.1"},clsx:{type:"NPM",value:"2.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(61569).Z}},entry:"index.tsx"},context:{"../Portal.tsx":u,"../CSSMotion.tsx":R,"./motion.css":H,"../config-provider/context.ts":W,react:h,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":R,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":H,"react-dom":l,clsx:D,"@sqi-ui/hooks":n,"react-transition-state":s,"@sqi-ui/utils":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":W},renderOpts:{compile:function(){var re=m()(i()().mark(function me(){var ee,ue=arguments;return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(788).then(e.bind(e,28788));case 2:return K.abrupt("return",(ee=K.sent).default.apply(ee,ue));case 3:case"end":return K.stop()}},me)}));function se(){return re.apply(this,arguments)}return se}()}},"sqi-web-src-common-demo-resize-observer":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,86543))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(81472).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(93201).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(39270).Z},"../_util/toArray.ts":{type:"FILE",value:e(89543).Z},"../_util/dom.ts":{type:"FILE",value:e(21780).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":X,"../_util/ref.ts":V,"../_util/toArray.ts":ce,"../_util/dom.ts":de,react:h,"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":X,"@sqi-ui/utils":f,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":V,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":ce,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":de,"react-is":N},renderOpts:{compile:function(){var re=m()(i()().mark(function me(){var ee,ue=arguments;return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(788).then(e.bind(e,28788));case 2:return K.abrupt("return",(ee=K.sent).default.apply(ee,ue));case 3:case"end":return K.stop()}},me)}));function se(){return re.apply(this,arguments)}return se}()}}}},71411:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18041))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(580).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,4865))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(97653).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,64045))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25934).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}}}},37952:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(5629),h={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,31477))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51053).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,49078))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67925).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89343))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77895).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83964))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27598).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,94563))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92163).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}}}},76575:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(84912),h={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,52020))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7854).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,27118))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(48118).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,71012))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51122).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,10981))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8030).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33721))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27482).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(21020).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,71758))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27234).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(21020).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}}}},97838:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,74466))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89081).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,87573))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71015).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}}}},95520:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83223))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23215).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,850))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20179).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92440))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66320).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}}}},20939:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(66351),h={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35984))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41599).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83896))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31142).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,4239))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32960).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,80481))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55735).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75583))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(50614).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90698))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(313).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98562))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60004).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,28939))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1728).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}}}},12289:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(5629),x=e(45990),h={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,43995))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25509).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m,"@sqi-ui/web":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8638))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(3601).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m,"@sqi-ui/web":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,91280))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56993).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}}}},17980:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(5629),h={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,65928))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39151).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95728))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56463).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,58133))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75770).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11240))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88661).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90563))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7378).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11918))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89161).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,40021))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96567).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83083))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93528).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1798))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33327).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95207))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88846).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}}}},81395:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-popup-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,66e3))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20746).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-popup-demo-trigger-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,85796))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-trigger-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39976).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-popup-demo-placement":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,69015))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-placement",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20035).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-popup-demo-shift":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29630))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-shift",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37417).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-popup-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26451))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56409).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-popup-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,21115))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8236).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-popup-demo-rect-observer":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,36137))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-rect-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(15063).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}}}},87:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(74944),h={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,81956))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47365).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73495))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29083).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1429))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59251).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73973))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13176).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89817))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66149).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,55371))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13906).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(59230).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30442))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59129).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(59230).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}}}},94223:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,13707))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(84432).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,61213))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80345).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,47010))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76174).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,6875))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74309).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,10120))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38648).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=i()(s()().mark(function u(){var d,l=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,l));case 3:case"end":return r.stop()}},u)}));function v(){return h.apply(this,arguments)}return v}()}}}},10205:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(5629),h={"sqi-web-src-switch-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,705))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(83650).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-switch-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18867))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43883).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-switch-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,78441))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20254).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}},"sqi-web-src-switch-demo-custom-icon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42812))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89251).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var v=i()(s()().mark(function d(){var l,p=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,p));case 3:case"end":return a.stop()}},d)}));function u(){return v.apply(this,arguments)}return u}()}}}},80957:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return u}});var f=e(90819),s=e.n(f),c=e(89933),i=e.n(c),o=e(53360),m=e(45990),x=e(43261),h=e(45513),v=e(52342),u={"sqi-web-src-trigger-demo-popper":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,14552))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-popper",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45423).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(37757).Z},"./_wrapper.tsx":{type:"FILE",value:e(30596).Z}},entry:"index.tsx"},context:{"./demo.module.css":x,"./_wrapper.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h},renderOpts:{compile:function(){var d=i()(s()().mark(function p(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(788).then(e.bind(e,28788));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},p)}));function l(){return d.apply(this,arguments)}return l}()}},"sqi-web-src-trigger-demo-basic-trigger":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,50069))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-basic-trigger",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64872).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(96809).Z},"./_wrapper.tsx":{type:"FILE",value:e(30596).Z},"./demo.module.css":{type:"FILE",value:e(37757).Z}},entry:"index.tsx"},context:{"./motion.css":v,"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var d=i()(s()().mark(function p(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(788).then(e.bind(e,28788));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},p)}));function l(){return d.apply(this,arguments)}return l}()}},"sqi-web-src-trigger-demo-focus-outside-click":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26906))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-focus-outside-click",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42146).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(30596).Z},"./demo.module.css":{type:"FILE",value:e(37757).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var d=i()(s()().mark(function p(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(788).then(e.bind(e,28788));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},p)}));function l(){return d.apply(this,arguments)}return l}()}},"sqi-web-src-trigger-demo-destroy-exit":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,97785))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-destroy-exit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76977).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(30596).Z},"./demo.module.css":{type:"FILE",value:e(37757).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var d=i()(s()().mark(function p(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(788).then(e.bind(e,28788));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},p)}));function l(){return d.apply(this,arguments)}return l}()}}}},75257:function(I,t,e){"use strict";e.r(t);var n=e(73193),f=e.n(n),s=e(10154),c=e.n(s),i=e(45332),o=e.n(i),m=e(84176),x=e.n(m),h=e(53360),v=e(7829),u=e(64508),d=e(80703),l=e(53175),p=["children","name","prefixCls"],r=(0,h.forwardRef)(function(a,C){var y=(0,h.useContext)(l.ConfigContext),E=a.children,w=a.name,B=a.prefixCls,P=x()(a,p),M=(0,u.Y)(P),F=o()(M,2),z=F[0],H=F[1],R=(0,h.isValidElement)(E);(0,h.useImperativeHandle)(C,function(){return{toggle:H}});var D="".concat(B||y.prefixCls).concat(w?"-".concat(w):""),T=(0,v.default)(["".concat(D,"-motion")],c()({},"".concat(D,"-motion-").concat(z.status),z.status));return(0,d.mf)(E)?z.isMounted?E(f()(f()({},z),{},{className:T,toggle:H})):null:R?z.isMounted?(0,h.cloneElement)(E,{className:(0,v.default)(E.props.className,T)}):null:E});r.displayName="CSSMotion",t.default=r},4177:function(I,t,e){"use strict";e.r(t);var n=e(45332),f=e.n(n),s=e(53360),c=e(86752),i=e(60164),o=e(34028),m=e(80703),x=(0,o.J)();function h(u){return x?(0,m.mf)(u)?u():document.body:null}var v=(0,s.forwardRef)(function(u,d){var l=u.getContainer,p=u.prefixCls,r=u.children,a=u.open,C=a===void 0?!0:a,y=u.rootStyle,E=(0,s.useState)(null),w=f()(E,2),B=w[0],P=w[1],M=(0,s.useState)(null),F=f()(M,2),z=F[0],H=F[1],R=z||document.body;(0,s.useEffect)(function(){var T=h(l);H(T||null)},[l]);var D=function(){if(!x||B)return null;var b=document.createElement("div");p&&(b.className="".concat(p,"-portal-wrapper")),y&&Object.assign(b.style,y),b.setAttribute("data-portal","true"),P(b)};return(0,i.L)(function(){x&&(C?D():P(null))},[C]),s.useImperativeHandle(d,function(){return B},[B]),(0,i.L)(function(){if(!(!x||!B)){var T=function(){return!B.parentNode&&R.appendChild(B)},b=function(){var Z;return(Z=B.parentNode)===null||Z===void 0?void 0:Z.removeChild(B)};return C?T():b(),function(){b()}}},[C,B]),C&&r&&B?(0,c.createPortal)(r,B):null});v.displayName="Portal",t.default=v},67324:function(I,t,e){"use strict";e.r(t);var n=e(53360),f=e(6890),s=e(8240),c=e(31716),i=e(95154),o=e(71932),m=(0,n.forwardRef)(function(x,h){var v=x.children,u=x.disabled,d=x.throttleMs,l=d===void 0?100:d,p=x.onResize,r=(0,n.isValidElement)(v),a=r?(0,c.toArray)(v):[],C=r?(0,i.getReactNodeRef)(v):null,y=(0,n.useRef)(null),E=(0,o.useComposeRef)(C,y),w=function(){return(0,i.getRefDom)(y)};(0,n.useImperativeHandle)(h,function(){return(0,i.getRefDom)(y)});var B=p?(0,f.P)(p,l):void 0;return(0,s.y)(w(),B,!u),r?(0,n.cloneElement)(v,{ref:E}):v});m.displayName="ResizeObserverComponent",t.default=m},95154:function(I,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return i},getReactNodeRef:function(){return m},getRefDom:function(){return o},isDOM:function(){return c}});var n=e(89957),f=e.n(n),s=e(53360);function c(x){return x instanceof HTMLElement||x instanceof SVGElement}function i(x){return x&&f()(x)==="object"&&c(x.nativeElement)?x.nativeElement:c(x)?x:null}function o(x){if(x)return x.current&&f()(x.current)==="object"&&"currentElement"in x.current?x.current.currentElement:x.current}function m(x){var h=x&&(0,s.isValidElement)(x);if(!h)return null;if(parseInt(s.version,10)>=19){var v;return((v=x.props)===null||v===void 0?void 0:v.ref)||null}return x.ref}},71932:function(I,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return i},fillRef:function(){return o},supportNodeRef:function(){return v},supportRef:function(){return x},useComposeRef:function(){return m}});var n=e(37797),f=e(80703),s=e(53360),c=e(11607),i=function(){for(var d=arguments.length,l=new Array(d),p=0;p<d;p++)l[p]=arguments[p];var r=l.filter(Boolean);return r.length<=1?r[0]:function(a){l.forEach(function(C){o(C,a)})}},o=function(d,l){(0,f.mf)(d)?d(l):(0,f.Kn)(d)&&"current"in d&&(d.current=l)},m=function(){for(var d=arguments.length,l=new Array(d),p=0;p<d;p++)l[p]=arguments[p];return(0,n.D)(function(){return i.apply(void 0,l)},l,function(r,a){return r.length!==a.length||r.every(function(C,y){return C!==a[y]})})},x=function(d){var l,p;if(!d)return!1;var r=parseInt(s.version,10);if(h(d)&&r>=19)return!0;var a=(0,c.isMemo)(d)?d.type.type:d.type;return!(typeof a=="function"&&!((l=a.prototype)!==null&&l!==void 0&&l.render)&&a.$$typeof!==c.ForwardRef||typeof d=="function"&&!((p=d.prototype)!==null&&p!==void 0&&p.render)&&d.$$typeof!==c.ForwardRef)};function h(u){return(0,s.isValidElement)(u)&&!(0,c.isFragment)(u)}var v=function(d){return h(d)&&x(d)}},31716:function(I,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return s}});var n=e(53360),f=e(11607);function s(c){var i=[];return n.Children.toArray(c).forEach(function(o){o!=null&&(Array.isArray(o)?i=i.concat(s(o)):(0,n.isValidElement)(o)&&(0,f.isFragment)(o)&&o.props?i=i.concat(s(o.props.children)):i.push(o))}),i}},84912:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),f=e(69787);function s(c){var i=c.item,o=c.checked,m={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,f.jsxs)("div",{style:m,children:[(0,f.jsx)("div",{style:x}),(0,f.jsx)("strong",{children:i}),(0,f.jsx)("div",{children:"this is a checkbox"})]})}},53175:function(I,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return s},defaultConfigProps:function(){return f}});var n=e(53360),f={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(f)},66351:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),f=e(69787);function s(c){var i=c.colorPalette,o=i===void 0?6:i,m=c.children,x=c.height;return(0,f.jsx)("div",{style:{height:x||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:m})}},74944:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),f=e(69787);function s(c){var i=c.item,o=c.checked,m={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,f.jsxs)("div",{style:m,children:[(0,f.jsx)("div",{style:x}),(0,f.jsx)("strong",{children:i}),(0,f.jsx)("div",{children:"this is a radio"})]})}},45513:function(I,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return c}});var n=e(53360),f=e(43261),s=e(69787),c=(0,n.forwardRef)(function(i,o){var m=i.size,x=i.backgroundColor,h=i.children;return(0,s.jsx)("div",{ref:o,className:f.default.box,style:{width:m+"px",height:m+"px",backgroundColor:x},children:h})});c.displayName="Component"},22532:function(I,t,e){"use strict";e.r(t)},43261:function(I,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai"}},52342:function(I,t,e){"use strict";e.r(t)},83141:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4E3B\u52A8\u8BBE\u7F6E\u76F8\u5173 css \u9690\u85CF\u7EC4\u4EF6",paraId:4},{value:"\u6B64\u5904\u7684 ",paraId:5,tocIndex:7},{value:"ResizeObserver",paraId:5,tocIndex:7},{value:" \u4EC5\u5173\u6CE8\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316",paraId:5,tocIndex:7}]},72133:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},57541:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},34349:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},79341:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},9344:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},49305:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},57197:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},5530:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u63CF\u8FF0",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"type",paraId:10,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:10,tocIndex:12},{value:"MDN",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"text",paraId:10,tocIndex:12},{value:"size",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:10,tocIndex:12},{value:"ConfigSize",paraId:10,tocIndex:12},{value:"md",paraId:10,tocIndex:12},{value:"status",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:10,tocIndex:12},{value:"success",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"warning",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"error",paraId:10,tocIndex:12},{value:"tips",paraId:10,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"allowClear",paraId:10,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"align",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"center",paraId:10,tocIndex:12},{value:" |",paraId:10,tocIndex:12},{value:"right",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"variant",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"borderless",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"underline",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"addonBefore",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"addonAfter",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"prefix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"suffix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"visibilityToggle",paraId:10,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"VisibilityToggle",paraId:11,tocIndex:12},{value:"maxLength",paraId:10,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:10,tocIndex:12},{value:"number",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"MaxLength",paraId:12,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:10,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:13,tocIndex:13},{value:"\u63CF\u8FF0",paraId:13,tocIndex:13},{value:"\u7C7B\u578B",paraId:13,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"visible",paraId:13,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:13,tocIndex:13},{value:"boolean",paraId:13,tocIndex:13},{value:"renderIcon",paraId:13,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:13,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:13,tocIndex:13},{value:"onVisibleChange",paraId:13,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:13,tocIndex:13},{value:"(visible: boolean) => void",paraId:13,tocIndex:13},{value:"\u5C5E\u6027",paraId:14,tocIndex:14},{value:"\u63CF\u8FF0",paraId:14,tocIndex:14},{value:"\u7C7B\u578B",paraId:14,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:14},{value:"length",paraId:14,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:14,tocIndex:14},{value:"number",paraId:14,tocIndex:14},{value:"showLimit",paraId:14,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14},{value:"true",paraId:14,tocIndex:14},{value:"errorOnly",paraId:14,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14}]},70726:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6838\u5FC3\u529F\u80FD\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Trigger",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u5E76\u7EE7\u627F\u5176\u5927\u90E8\u5206\u5C5E\u6027\uFF0C\u4F46\u662F\u4F1A\u5BF9 Trigger \u7684\u90E8\u5206\u9ED8\u8BA4\u503C\u8FDB\u884C\u8986\u76D6",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u5C11\u90E8\u5206\u6837\u5F0F\uFF0C\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\u7A0B\u5EA6\u8F83\u9AD8\u7684\u5F39\u51FA\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u8FDB\u4E00\u6B65\u6269\u5C55",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E ",paraId:2,tocIndex:3},{value:"placement",paraId:2,tocIndex:3},{value:" \u6307\u5B9A Popup \u5F39\u51FA\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"showArrow",paraId:2,tocIndex:3},{value:" \u6765\u9009\u62E9\u662F\u5426\u663E\u793A\u7BAD\u5934",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8FB9\u7F18\u68C0\u6D4B\u504F\u79FB\u4EE5\u53CA\u81EA\u52A8\u7FFB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6216\u8005\u60F3\u51CF\u5C11\u8BA1\u7B97\u5E26\u6765\u7684\u5F00\u9500\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:3,tocIndex:4},{value:"enableFlip=false",paraId:3,tocIndex:4},{value:" \u6216 ",paraId:3,tocIndex:4},{value:"enableShift=false",paraId:3,tocIndex:4},{value:" \u6765\u9009\u62E9\u6027\u5173\u95ED\u4E0D\u9700\u8981\u7684\u529F\u80FD",paraId:3,tocIndex:4},{value:"\u7981\u7528\u5F39\u51FA\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u5F39\u51FA\u5C42\u76F8\u5173\u7684\u884C\u4E3A",paraId:4,tocIndex:6},{value:"\u5F53\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u68C0\u6D4B\uFF0C\u5E76\u91CD\u65B0\u66F4\u65B0\u5F39\u51FA\u5C42\u7684\u4F4D\u7F6E",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:9},{value:"\u63CF\u8FF0",paraId:6,tocIndex:9},{value:"\u7C7B\u578B",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:9},{value:"children",paraId:6,tocIndex:9},{value:"\u89E6\u53D1\u5143\u7D20",paraId:6,tocIndex:9},{value:"ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"content",paraId:6,tocIndex:9},{value:"Popup \u5185\u5BB9",paraId:6,tocIndex:9},{value:"ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"showArrow",paraId:6,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A\u7BAD\u5934",paraId:6,tocIndex:9},{value:"boolean",paraId:6,tocIndex:9},{value:"true",paraId:6,tocIndex:9},{value:"destroyOnClose",paraId:6,tocIndex:9},{value:"\u9690\u85CF\u65F6\u662F\u5426\u9500\u6BC1",paraId:6,tocIndex:9},{value:"boolean",paraId:6,tocIndex:9},{value:"true",paraId:6,tocIndex:9},{value:"offset",paraId:6,tocIndex:9},{value:"\u5143\u7D20\u76F8\u5BF9\u4E8E\u89E6\u53D1\u5143\u7D20\u7684\u8DDD\u79BB",paraId:6,tocIndex:9},{value:"number",paraId:6,tocIndex:9},{value:"6",paraId:6,tocIndex:9},{value:"styles",paraId:6,tocIndex:9},{value:"style \u8BED\u6CD5\u7CD6",paraId:6,tocIndex:9},{value:"{ content?: CSSProperties; arrow?: CSSProperties;}",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"classNames",paraId:6,tocIndex:9},{value:"className \u8BED\u6CD5\u7CD6",paraId:6,tocIndex:9},{value:"{ content?: string; arrow?: string;}",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"\u4EE5\u4E0B\u5C5E\u6027\u7686\u7EE7\u627F\u81EA Trigger \u7EC4\u4EF6",paraId:7,tocIndex:9},{value:"\u5C5E\u6027",paraId:8,tocIndex:9},{value:"\u63CF\u8FF0",paraId:8,tocIndex:9},{value:"\u7C7B\u578B",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:9},{value:"direction",paraId:8,tocIndex:9},{value:"popper \u4F4D\u7F6E",paraId:8,tocIndex:9},{value:"TriggerPlacement",paraId:8,tocIndex:9},{value:"top",paraId:8,tocIndex:9},{value:"enableFlip",paraId:8,tocIndex:9},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"enableShift",paraId:8,tocIndex:9},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"zIndex",paraId:8,tocIndex:9},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"1",paraId:8,tocIndex:9},{value:"getContainer",paraId:8,tocIndex:9},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:8,tocIndex:9},{value:"() => HTMLElement",paraId:8,tocIndex:9},{value:"document.body",paraId:8,tocIndex:9},{value:"trigger",paraId:8,tocIndex:9},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:8,tocIndex:9},{value:"TriggerType",paraId:8,tocIndex:9},{value:"hover",paraId:8,tocIndex:9},{value:"disabled",paraId:8,tocIndex:9},{value:"\u7981\u7528\u884C\u4E3A",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"delay",paraId:8,tocIndex:9},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"100",paraId:8,tocIndex:9},{value:"outFocusToClose",paraId:8,tocIndex:9},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"defaultVisible",paraId:8,tocIndex:9},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"visible",paraId:8,tocIndex:9},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"onVisibleChange",paraId:8,tocIndex:9},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:8,tocIndex:9},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9}]},35450:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},44795:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u63CF\u8FF0",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"size",paraId:1,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:1,tocIndex:6},{value:"SizeType",paraId:2,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"[SizeType, SizeType]",paraId:1,tocIndex:6},{value:"direction",paraId:1,tocIndex:6},{value:"\u65B9\u5411",paraId:1,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:1,tocIndex:6},{value:"'horizontal'",paraId:1,tocIndex:6},{value:"align",paraId:1,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:1,tocIndex:6},{value:"wrap",paraId:1,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"false",paraId:1,tocIndex:6},{value:"split",paraId:1,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u63CF\u8FF0",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"SizeType",paraId:3,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:3,tocIndex:7},{value:"ConfigSize",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"undefined",paraId:3,tocIndex:7}]},8176:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"defaultChecked",paraId:0,tocIndex:5},{value:"\u975E\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"checked",paraId:0,tocIndex:5},{value:"\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"disabled",paraId:0,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"size",paraId:0,tocIndex:5},{value:"\u5C3A\u5BF8",paraId:0,tocIndex:5},{value:"sm",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"lg",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"label",paraId:0,tocIndex:5},{value:"\u6587\u672C",paraId:0,tocIndex:5},{value:"[checked?: ReactNode, unchecked?: ReactNode]",paraId:0,tocIndex:5},{value:"loading",paraId:0,tocIndex:5},{value:"loading \u72B6\u6001",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"loadingIcon",paraId:0,tocIndex:5},{value:"\u81EA\u5B9A\u4E49 loading \u56FE\u6807",paraId:0,tocIndex:5},{value:"ReactNode",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5},{value:"onClick",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1(\u7981\u7528\u72B6\u6001\u65E0\u6548)",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5}]},60977:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 Trigger \u7EC4\u4EF6\u3002\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u4E14\u4E0D\u643A\u5E26\u4EFB\u4F55\u6837\u5F0F\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u63A8\u8350\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u6765\u66FF\u4EE3 ",paraId:1,tocIndex:0},{value:"Trigger",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u517C\u5BB9\u5EA6\u66F4\u597D\u7684\u96C6\u6210\u5E76\u5BF9\u6837\u5F0F\u8FDB\u884C\u7F8E\u5316\u3002\u66F4\u5B8C\u6574\u7684\u4F7F\u7528\u793A\u4F8B\u8BF7\u67E5\u770B ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popper.js \u7684\u57FA\u7840\u529F\u80FD\uFF08\u903B\u8F91\u5B9E\u73B0\u5E76\u4E0D\u4F18\u96C5\uFF0C\u4E14\u8BF8\u591A\u60C5\u51B5\u672A\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:2,tocIndex:1},{value:"table th tr",paraId:2,tocIndex:1},{value:" \u4E0B\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0Ccss ",paraId:2,tocIndex:1},{value:"will-change transform",paraId:2,tocIndex:1},{value:" \u7B49\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF09",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u91C7\u53D6\u628A\u7BAD\u5934\u76F8\u5BF9\u4E8E popper \u5B9A\u4F4D\uFF0C\u8FDB\u884C\u5C0F\u8303\u56F4\u504F\u79FB\u53EF\u4EE5\u51CF\u5C11\u975E\u5E38\u591A\u903B\u8F91\u4EE3\u7801",paraId:3,tocIndex:1},{value:"\u540E\u7EED\u53EF\u80FD\u4F1A\u5BF9\u5B9A\u4F4D\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C\u6709\u80FD\u529B\u91CD\u5199\u7684\u8BDD\uFF0CI am very vegetable :)",paraId:4,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:5},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"top",paraId:6},{value:" \u548C ",paraId:6},{value:"bottom",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 y \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C",paraId:6},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"left",paraId:6},{value:" \u548C ",paraId:6},{value:"right",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 x \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C\u3002",paraId:6},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popper \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08\u4E5F\u4E0D\u662F\u8BEF\u5DEE\uFF0C\u800C\u662F\u6B64\u65F6 popper \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:7},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:8,tocIndex:2},{value:"transform",paraId:8,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:8,tocIndex:2},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53 popper \u5173\u95ED\u65F6\uFF0C\u76F8\u5173 dom \u4F1A\u88AB\u9690\u85CF\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",paraId:9,tocIndex:4},{value:"motion.unmountOnExit",paraId:9,tocIndex:4},{value:" \u4E3A true \u53EF\u4EE5\u5728\u5173\u95ED\u65F6\u9500\u6BC1 dom",paraId:9,tocIndex:4},{value:"\u5C5E\u6027",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:6},{value:"className",paraId:10,tocIndex:6},{value:"popper \u7684\u6839\u5143\u7D20 className",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"children",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u7684\u76EE\u6807\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"popper",paraId:10,tocIndex:6},{value:"\u60AC\u6D6E\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"arrow",paraId:10,tocIndex:6},{value:"\u7BAD\u5934\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"motion",paraId:10,tocIndex:6},{value:"\u52A8\u753B props \u7EE7\u627F\u81EA ",paraId:10,tocIndex:6},{value:"react-transition-state",paraId:10,tocIndex:6},{value:"Omit<CSSMotionProps, 'children'>",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"direction",paraId:10,tocIndex:6},{value:"popper \u4F4D\u7F6E",paraId:10,tocIndex:6},{value:"TriggerPlacement",paraId:10,tocIndex:6},{value:"bottom",paraId:10,tocIndex:6},{value:"enableFlip",paraId:10,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"enableShift",paraId:10,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"offset",paraId:10,tocIndex:6},{value:"popper \u504F\u79FB\u91CF",paraId:10,tocIndex:6},{value:"number | { x: number; y: number }",paraId:10,tocIndex:6},{value:"0",paraId:10,tocIndex:6},{value:"zIndex",paraId:10,tocIndex:6},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"1",paraId:10,tocIndex:6},{value:"getContainer",paraId:10,tocIndex:6},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:10,tocIndex:6},{value:"() => HTMLElement",paraId:10,tocIndex:6},{value:"document.body",paraId:10,tocIndex:6},{value:"trigger",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:10,tocIndex:6},{value:"TriggerType",paraId:10,tocIndex:6},{value:'"hover"',paraId:10,tocIndex:6},{value:"disabled",paraId:10,tocIndex:6},{value:"\u7981\u7528\u884C\u4E3A",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"delay",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"100",paraId:10,tocIndex:6},{value:"outFocusToClose",paraId:10,tocIndex:6},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"clickOutsideClose",paraId:10,tocIndex:6},{value:"\u70B9\u51FB\u5916\u90E8\u662F\u5426\u53EF\u5173\u95ED",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"defaultVisible",paraId:10,tocIndex:6},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"visible",paraId:10,tocIndex:6},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"onVisibleChange",paraId:10,tocIndex:6},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:10,tocIndex:6},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"\u5171 12 \u4E2A\u65B9\u4F4D",paraId:11,tocIndex:7},{value:"top",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"top-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"top-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left-end",paraId:12,tocIndex:7},{value:"\u5BF9\u5E94 eventListener \u7684\u4E8B\u4EF6\u540D\u79F0",paraId:13,tocIndex:8},{value:"hover",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"click",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"focus",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"context-menu",paraId:14,tocIndex:8}]},58500:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},49821:function(I,t){"use strict";t.Z=`import React, { forwardRef, useEffect, useState } from 'react';
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
`},93201:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef } from 'react';
import { throttle } from '@sqi-ui/utils';
import { useResizeObserver, type ObserverSizeInfo } from '@sqi-ui/hooks';
import { toArray } from '../_util/toArray';
import { getReactNodeRef, getRefDom } from '../_util/dom';
import { useComposeRef } from '../_util/ref';

export interface ResizeObserverProps {
  onResize?: (sizeInfo: ObserverSizeInfo, target: ResizeObserverEntry) => void;
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

  useImperativeHandle(ref, () => getRefDom(elementRef) as HTMLElement);

  const throttleResize = onResize ? throttle(onResize, throttleMs) : undefined;

  useResizeObserver(getDomElement(), throttleResize, !disabled);

  return isElement ? cloneElement(children as any, { ref: mergedRef }) : children;
});

ResizeObserverComponent.displayName = 'ResizeObserverComponent';

export default ResizeObserverComponent;
`},91738:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},69563:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},12984:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},79379:function(I,t){"use strict";t.Z=`.sqi-demo-motion {
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
`},7316:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},81472:function(I,t){"use strict";t.Z=`import React from 'react';
import { Checkbox } from '@sqi-ui/web';
import ResizeObserver, { type ResizeObserverProps } from '../ResizeObserver';

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

      <ResizeObserver onResize={onResize} disabled={disabled}>
        <textarea ref={textareaRef} placeholder="I'm a textarea!" />
      </ResizeObserver>
    </>
  );
}
`},21780:function(I,t){"use strict";t.Z=`import { isValidElement, version } from 'react';

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
  if (parseInt(version, 10) >= 19) {
    return (node.props as any)?.ref || null;
  }
  // @ts-expect-error \`element.ref\` is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return node.ref;
}
`},39270:function(I,t){"use strict";t.Z=`import { useCompareMemo } from '@sqi-ui/hooks';
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
`},89543:function(I,t){"use strict";t.Z=`import { Children, isValidElement, type ReactNode } from 'react';
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
`},25934:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},580:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},97653:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},51053:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},67925:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},77895:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},92163:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},27598:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},21020:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},7854:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},48118:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},27482:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},51122:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},8030:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},27234:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},61569:function(I,t){"use strict";t.Z=`import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sqi',
  iconPrefix: 'sqi',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
`},89081:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},71015:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},23215:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},66320:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},20179:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},50614:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},41599:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},34194:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},32960:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},31142:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},55735:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},313:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},60004:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},1728:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},25509:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},3601:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},56993:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},96567:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},93528:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},88661:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},39151:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},88846:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},33327:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},56463:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},7378:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},89161:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},75770:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},20746:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},8236:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},56409:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},20035:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},15063:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},37417:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},39976:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},59230:function(I,t){"use strict";t.Z=`import React from 'react';

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
`},29083:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},47365:function(I,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},13906:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},59251:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},59129:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},13176:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},66149:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},76174:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},84432:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},80345:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},38648:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},74309:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},83650:function(I,t){"use strict";t.Z=`import React from 'react';
import { Space, Switch } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <Switch />
      <Switch label={['\u5F00', '\u5173']} />
    </Space>
  );
}
`},89251:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},20254:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},43883:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},30596:function(I,t){"use strict";t.Z=`import React, { forwardRef } from 'react';
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
`},64872:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},37757:function(I,t){"use strict";t.Z=`.container {
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
`},76977:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},42146:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},96809:function(I,t){"use strict";t.Z=`.sqi-demo-trigger-motion {
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
`},45423:function(I,t){"use strict";t.Z=`import React from 'react';
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
`},11607:function(I,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler");Symbol.for("react.provider");var i=Symbol.for("react.consumer"),o=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),d=Symbol.for("react.view_transition"),l=Symbol.for("react.client.reference");function p(r){if(typeof r=="object"&&r!==null){var a=r.$$typeof;switch(a){case e:switch(r=r.type,r){case f:case c:case s:case x:case h:case d:return r;default:switch(r=r&&r.$$typeof,r){case o:case m:case u:case v:return r;case i:return r;default:return a}}case n:return a}}}t.ContextConsumer=i,t.ContextProvider=o,t.Element=e,t.ForwardRef=m,t.Fragment=f,t.Lazy=u,t.Memo=v,t.Portal=n,t.Profiler=c,t.StrictMode=s,t.Suspense=x,t.SuspenseList=h,t.isContextConsumer=function(r){return p(r)===i},t.isContextProvider=function(r){return p(r)===o},t.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===e},t.isForwardRef=function(r){return p(r)===m},t.isFragment=function(r){return p(r)===f},t.isLazy=function(r){return p(r)===u},t.isMemo=function(r){return p(r)===v},t.isPortal=function(r){return p(r)===n},t.isProfiler=function(r){return p(r)===c},t.isStrictMode=function(r){return p(r)===s},t.isSuspense=function(r){return p(r)===x},t.isSuspenseList=function(r){return p(r)===h},t.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===f||r===c||r===s||r===x||r===h||typeof r=="object"&&r!==null&&(r.$$typeof===u||r.$$typeof===v||r.$$typeof===o||r.$$typeof===i||r.$$typeof===m||r.$$typeof===l||r.getModuleId!==void 0)},t.typeOf=p},81184:function(I,t,e){"use strict";I.exports=e(11607)},37797:function(I,t,e){"use strict";e.d(t,{D:function(){return f}});var n=e(53360);function f(s,c,i){const o=(0,n.useRef)({});return(!("value"in o.current)||i(o.current.condition,c))&&(o.current.value=s(),o.current.condition=c),o.current.value}},60164:function(I,t,e){"use strict";e.d(t,{L:function(){return c}});var n=e(53360),f=e(34028);const c=(0,f.J)()?n.useLayoutEffect:n.useEffect},7657:function(I,t,e){"use strict";e.d(t,{S:function(){return f}});var n=e(53360);function f(s,c={},i={}){return(0,n.useMemo)(()=>{const o=O(O({},c),i),m=O({},s);for(const x in o)m[x]===void 0&&(m[x]=o[x]);return m},[s,c,i])}},62222:function(I,t,e){"use strict";e.d(t,{R:function(){return c}});var n=e(53360),f=e(80703),s=e(45844);function c(i,o){const{defaultValue:m,value:x,onChange:h}=o||{},[v,u]=(0,n.useState)(()=>(0,f.o8)(x)?(0,f.o8)(m)?(0,f.mf)(i)?i():i:(0,f.mf)(m)?m():m:x),d=(0,s.D)(x),l=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(l.current){l.current=!1;return}(0,f.o8)(x)&&d!==x&&u(x)},[x]);const p=(0,f.o8)(x)?v:x,r=(0,n.useCallback)(a=>{const C=(0,f.mf)(a)?a(p):a;(0,f.o8)(x)&&u(C),!Object.is(C,p)&&(h==null||h(C))},[x,p,h]);return[p,r]}},45844:function(I,t,e){"use strict";e.d(t,{D:function(){return f}});var n=e(53360);function f(s){const c=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{c.current=s},[s]),c.current}},8240:function(I,t,e){"use strict";e.d(t,{y:function(){return o}});var n=e(53360),f=e(20759),s=e(34028),c=e(60164);const i=window.ResizeObserver||f.Z;function o(m,x,h=!0){const v=(0,n.useRef)(null);v.current=x;const u=(0,n.useRef)({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1});(0,c.L)(()=>{let d=null;if(!h||!(0,s.J)()||!m)return;const l=p=>{var w;const r=p[0],{width:a,height:C}=r.contentRect,y=m.offsetWidth,E=m.offsetHeight;(u.current.width!==a||u.current.height!==C||u.current.offsetWidth!==y||u.current.offsetHeight!==E)&&(u.current={width:a,height:C,offsetWidth:y,offsetHeight:E},(w=v.current)==null||w.call(v,u.current,r))};return d=new i(l),d.observe(m),()=>{d&&m&&(d.unobserve(m),d.disconnect(),d=null)}},[m,h])}},31136:function(I,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360);const s=(0,n.createContext)({})},37907:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(7829),s=e(31136);const c=(0,n.forwardRef)((o,m)=>{const y=o,{svg:x,type:h,spin:v,rotate:u,className:d,style:l}=y,p=we(y,["svg","type","spin","rotate","className","style"]),{prefixCls:r="sqi"}=(0,n.useContext)(s.Z),a=(0,f.default)(`${r}-icon`,{[`${r}-icon-spin`]:!!v&&!!x},d),C=l||{};return Number.isSafeInteger(u)&&(C.transform=`rotate(${u}deg)`),n.createElement("span",O({role:"img",ref:m,"aria-label":h,className:a,style:C},p),x)});c.displayName="Icon";const i=c},46874:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"add",ref:m},o)));c.displayName="AddIcon";const i=c},1824:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"browse",ref:m},o)));c.displayName="BrowseIcon";const i=c},85569:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"browse-off",ref:m},o)));c.displayName="BrowseOffIcon";const i=c},23436:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"check-circle-filled",ref:m},o)));c.displayName="CheckCircleFilledIcon";const i=c},46608:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"chevron-down",ref:m},o)));c.displayName="ChevronDownIcon";const i=c},58360:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"close-circle-filled",ref:m},o)));c.displayName="CloseCircleFilledIcon";const i=c},27377:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"close",ref:m},o)));c.displayName="CloseIcon";const i=c},50397:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"info-circle-filled",ref:m},o)));c.displayName="InfoCircleFilledIcon";const i=c},60333:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"loading",ref:m},o)));c.displayName="LoadingIcon";const i=c},36106:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"search",ref:m},o)));c.displayName="SearchIcon";const i=c},65466:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"upload",ref:m},o)));c.displayName="UploadIcon";const i=c},21925:function(I,t,e){"use strict";e.d(t,{Z:function(){return i}});var n=e(53360),f=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((o,m)=>(0,n.createElement)(f.Z,O({svg:(0,n.createElement)(s),type:"warn-circle-filled",ref:m},o)));c.displayName="WarnCircleFilledIcon";const i=c},5629:function(I,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return s.Z},BrowseIcon:function(){return i.Z},BrowseOffIcon:function(){return c.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return m.Z},CloseCircleFilledIcon:function(){return x.Z},CloseIcon:function(){return h.Z},IconContext:function(){return f.Z},InfoCircleFilledIcon:function(){return v.Z},LoadingIcon:function(){return u.Z},SearchIcon:function(){return d.Z},UploadIcon:function(){return l.Z},WarnCircleFilledIcon:function(){return p.Z},default:function(){return r}});var n=e(37907),f=e(31136),s=e(46874),c=e(85569),i=e(1824),o=e(23436),m=e(46608),x=e(58360),h=e(27377),v=e(50397),u=e(60333),d=e(36106),l=e(65466),p=e(21925);const r=n.Z},34028:function(I,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(I,t,e){"use strict";e.d(t,{D:function(){return n}});function n(f,s){let c=null;const i=function(...o){c&&clearTimeout(c),c=setTimeout(()=>{f.apply(this,o),c=null},s)};return i.cancel=()=>{c&&(clearTimeout(c),c=null)},i}},80703:function(I,t,e){"use strict";e.d(t,{HD:function(){return i},Kn:function(){return o},Qr:function(){return m},hj:function(){return x},kJ:function(){return c},mf:function(){return f},o8:function(){return s}});const n=Object.prototype.toString;function f(h){return n.call(h)==="[object Function]"}function s(h){return h===void 0}function c(h){return n.call(h)==="[object Array]"}function i(h){return n.call(h)==="[object String]"}const o=h=>n.call(h)==="[object Object]",m=h=>{if(!o(h))return!0;for(const v in h)if(Object.prototype.hasOwnProperty.call(h,v))return!1;return!0},x=h=>n.call(h)==="[object Number]"&&!Number.isNaN(h)},12598:function(I,t,e){"use strict";e.d(t,{C:function(){return n}});function n(f,s){const c=Object.assign({},f);return Array.isArray(s)&&s.forEach(i=>{delete c[i]}),c}},6890:function(I,t,e){"use strict";e.d(t,{P:function(){return f}});var n=e(78831);function f(s,c){let i=null;const o=(0,n.D)(s,c),m=(...x)=>{i===null?i=Date.now():Date.now()-i>=c&&(i=Date.now(),o.cancel()),o(...x)};return m.cancel=o.cancel,m}},92266:function(I,t,e){"use strict";e.d(t,{C:function(){return c},Z:function(){return i}});var n=e(53360),f=e(7829),s=e(62222);const c=(0,n.forwardRef)((o,m)=>{const M=o,{prefixCls:x,className:h,style:v,checked:u,disabled:d,defaultChecked:l=!1,type:p="checkbox",title:r,onChange:a,_getCheckedValue:C}=M,y=we(M,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[E,w]=(0,s.R)(l,{value:u});(0,n.useEffect)(()=>{C==null||C(E)},[E]);const B=(0,f.default)(x,h,{[`${x}-checked`]:E,[`${x}-disabled`]:d}),P=F=>{d||("checked"in o||w(F.target.checked),a==null||a({target:ve(O({},o),{checked:F.target.checked}),event:F}))};return n.createElement("span",{className:B,title:r,style:v},n.createElement("input",ve(O({},y),{className:`${x}-input`,ref:m,onChange:P,disabled:d,checked:E,type:p})),n.createElement("span",{className:`${x}-inner`}))});c.displayName="BaseCheckbox";const i=c},40549:function(I,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(53360),f=e(7829),s=e(64508),c=e(80703),i=e(57577);const o=(0,n.forwardRef)((x,h)=>{const v=(0,n.useContext)(i.E),w=x,{children:u,name:d,prefixCls:l}=w,p=we(w,["children","name","prefixCls"]),[r,a]=(0,s.Y)(p),C=(0,n.isValidElement)(u);(0,n.useImperativeHandle)(h,()=>({toggle:a}));const y=`${l||v.prefixCls}${d?`-${d}`:""}`,E=(0,f.default)([`${y}-motion`],{[`${y}-motion-${r.status}`]:r.status});return(0,c.mf)(u)?r.isMounted?u(ve(O({},r),{className:E,toggle:a})):null:C?r.isMounted?(0,n.cloneElement)(u,{className:(0,f.default)(u.props.className,E)}):null:u});o.displayName="CSSMotion";const m=o},4814:function(I,t,e){"use strict";e.d(t,{sQ:function(){return i},t4:function(){return v},x1:function(){return m}});var n=e(37797),f=e(80703),s=e(53360),c=e(11607);const i=(...u)=>{const d=u.filter(Boolean);return d.length<=1?d[0]:l=>{u.forEach(p=>{o(p,l)})}},o=(u,d)=>{(0,f.mf)(u)?u(d):(0,f.Kn)(u)&&"current"in u&&(u.current=d)},m=(...u)=>(0,n.D)(()=>i(...u),u,(d,l)=>d.length!==l.length||d.every((p,r)=>p!==l[r])),x=u=>{var p,r;if(!u)return!1;const d=parseInt(s.version,10);if(h(u)&&d>=19)return!0;const l=(0,c.isMemo)(u)?u.type.type:u.type;return!(typeof l=="function"&&!((p=l.prototype)!=null&&p.render)&&l.$$typeof!==c.ForwardRef||typeof u=="function"&&!((r=u.prototype)!=null&&r.render)&&u.$$typeof!==c.ForwardRef)};function h(u){return(0,s.isValidElement)(u)&&!(0,c.isFragment)(u)}const v=u=>h(u)&&x(u)},21299:function(I,t,e){"use strict";e.d(t,{q:function(){return s}});var n=e(53360),f=e(11607);function s(c){let i=[];return n.Children.toArray(c).forEach(o=>{o!=null&&(Array.isArray(o)?i=i.concat(s(o)):(0,n.isValidElement)(o)&&(0,f.isFragment)(o)&&o.props?i=i.concat(s(o.props.children)):i.push(o))}),i}},69203:function(I,t,e){"use strict";e.d(t,{b:function(){return r}});var n=e(53360),f=e(7829),s=e(7657),c=e(23436),i=e(50397),o=e(58360),m=e(21925),x=e(27377),h=e(40549),v=e(57577);const u={type:"info",showIcon:!0},d={success:c.Z,info:i.Z,error:o.Z,warning:m.Z},l=(0,n.forwardRef)((C,y)=>{const{prefixCls:E,componentConfig:w}=(0,n.useContext)(v.E),{className:B,style:P,title:M,description:F,type:z,closable:H,showIcon:R,action:D,icon:T,onClose:b}=(0,s.S)(C,u,w==null?void 0:w.Alert),U=(0,n.useRef)(null),Z=()=>(0,n.isValidElement)(T)?T:z?(0,n.createElement)(d[z]):null,W=(0,f.default)(`${E}-alert`,`${E}-alert-${z}`,B),X=V=>{var ce;(ce=U.current)==null||ce.toggle(),b==null||b(V)};return n.createElement(h.Z,{ref:U,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},n.createElement("div",{role:"alert",className:W,style:P,ref:y},R&&n.createElement("div",{className:`${E}-alert-icon`},Z()),n.createElement("div",{className:`${E}-alert-content`},!!M&&n.createElement("div",{className:`${E}-alert-title`},M),n.createElement("div",{className:`${E}-alert-description`},F)),D&&n.createElement("div",{className:`${E}-alert-action`},D),H&&n.createElement("button",{type:"button",className:`${E}-alert-close`,onClick:X},n.createElement(x.Z,null))))});l.displayName="Alert";const r=l,a=null},60884:function(I,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(53360),f=e(7829),s=e(60333),c=e(7657),i=e(57577);const o={type:"default",variant:"default",htmlType:"button"},m=(0,n.forwardRef)((u,d)=>{const{prefixCls:l,size:p="md",componentConfig:r}=(0,n.useContext)(i.E),V=(0,c.S)(u,o,r==null?void 0:r.Button),{children:C,type:y,size:E=p,htmlType:w,status:B,loading:P,disabled:M,variant:F,icon:z,href:H,target:R,onClick:D,anchorProps:T={}}=V,b=we(V,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),U=P?n.createElement(s.Z,{spin:P}):z,Z=H?"link":y,W=(0,f.default)(`${l}-btn`,`${l}-btn-${Z}`,{[`${l}-btn-size-${E}`]:E,[`${l}-btn-status-${B}`]:!!B,[`${l}-btn-variant-${F}`]:F,[`${l}-btn-loading`]:P,[`${l}-btn-disabled`]:M}),X=ce=>{if(P||M)return void ce.preventDefault();D==null||D(ce)};return H?n.createElement("a",ve(O({},T),{href:H,target:R,className:W,onClick:X,ref:d}),U,n.createElement("span",null,C)):n.createElement("button",ve(O({},b),{type:w,className:W,onClick:X,ref:d}),U,n.createElement("span",null,C))});m.displayName="Button";const h=m,v=null},67824:function(I,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),f=e(7829),s=e(7657),c=e(45844),i=e(80703),o=e(92266),m=e(4814),x=e(57577),h=e(81372);const v={defaultChecked:!1,indeterminate:!1},u=(0,n.forwardRef)((l,p)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(x.E),C=(0,n.useContext)(h.w),Z=(0,s.S)(l,v,a==null?void 0:a.Checkbox),{children:y,style:E,className:w,indeterminate:B}=Z,P=we(Z,["children","style","className","indeterminate"]),[M,F]=(0,n.useState)(!1),z="disabled"in P?P.disabled:C.disabled,H=(0,c.D)(P.value),R=(0,n.useRef)(null);(0,n.useEffect)(()=>{var W;(W=C.registerValue)==null||W.call(C,P.value)},[C,P.value]),(0,n.useEffect)(()=>{var W,X;return P.value!==H&&((W=C.unregisterValue)==null||W.call(C,H),(X=C.registerValue)==null||X.call(C,P.value)),()=>{var V;return(V=C.unregisterValue)==null?void 0:V.call(C,P.value)}},[C,P.value]),(0,n.useEffect)(()=>{R.current&&(R.current.indeterminate=B)},[B]);const D=O({},P);(0,i.Qr)(C)||(D.onChange=(...W)=>{var X,V;(X=P.onChange)==null||X.call(P,...W),(V=C.toggleOption)==null||V.call(C,P.value)},D.name=C.name,D.checked=C.value.includes(P.value));const T=(0,f.default)(`${r}-checkbox-wrapper`,{[`${r}-checkbox-wrapper-checked`]:D.checked,[`${r}-checkbox-wrapper-disabled`]:z},w),b=W=>{var X;(0,i.mf)(y)&&(W.preventDefault(),(X=R.current)==null||X.click())},U=()=>(0,i.o8)(y)?null:(0,i.mf)(y)?y({checked:"checked"in D?!!D.checked:M}):n.createElement("span",{className:`${r}-checkbox-label`},y);return n.createElement("label",{className:T,onClick:b},n.createElement(o.C,ve(O({},D),{type:"checkbox",ref:(0,m.sQ)(p,R),disabled:z,prefixCls:`${r}-checkbox`,className:(0,f.default)({[`${r}-checkbox-indeterminate`]:B}),style:ve(O({},E),{display:(0,i.mf)(y)?"none":void 0}),_getCheckedValue:F})),U())});u.displayName="Checkbox";const d=u},56104:function(I,t,e){"use strict";e.d(t,{Z:function(){return v}});var n=e(53360),f=e(7829),s=e(7657),c=e(80703),i=e(57577),o=e(81372),m=e(67824);const x={},h=(0,n.forwardRef)((u,d)=>{const{prefixCls:l,componentConfig:p}=(0,n.useContext)(i.E),r=(0,n.useId)(),de=(0,s.S)(u,x,p==null?void 0:p.CheckboxGroup),{defaultValue:a,children:C,options:y,className:E,style:w,disabled:B,name:P=r,onChange:M,renderOption:F}=de,z=we(de,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[H,R]=(0,n.useState)(z.value||a||[]),[D,T]=(0,n.useState)([]),b=(0,n.useRef)([]);(0,n.useEffect)(()=>{b.current=D},[D]),(0,n.useEffect)(()=>{"value"in z&&R(z.value||[])},[z.value]);const U=(0,n.useCallback)(G=>{T(N=>[...N,G])},[]),Z=(0,n.useCallback)(G=>{T(N=>N.filter(Ie=>Ie!==G))},[]),W=(0,n.useMemo)(()=>y==null?void 0:y.map(G=>(0,c.HD)(G)||(0,c.hj)(G)?{label:G,value:G}:G),[y]),X=(0,n.useCallback)(G=>{const N=[...H],Ie=H.indexOf(G);Ie===-1?N.push(G):N.splice(Ie,1),"value"in z||R(N);const re=N.filter(se=>b.current.includes(se));M==null||M(re)},[H,M]);let V=C;if((0,c.kJ)(W)&&W.length>0){const G=(0,c.mf)(F);V=W.map(N=>{const Ie=H.includes(N.value),re=G?()=>F(ve(O({},N),{checked:Ie})):N.label;return n.createElement(m.Z,{key:`checkbox-group-options-${N.value}`,className:N.className,style:N.style,disabled:"disabled"in N?N.disabled:B,value:N.value,checked:Ie,id:N.id,title:N.title,onChange:N.onChange},re)})}const ce=(0,n.useMemo)(()=>({name:P,value:H,disabled:B,toggleOption:X,registerValue:U,unregisterValue:Z}),[P,H,B,X,U,Z]);return n.createElement("div",{className:(0,f.default)(`${l}-checkbox-group`,E),style:w,ref:d},n.createElement(o.w.Provider,{value:ce},V))});h.displayName="CheckboxGroup";const v=h},81372:function(I,t,e){"use strict";e.d(t,{w:function(){return f}});var n=e(53360);const f=(0,n.createContext)({})},89946:function(I,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return m},CheckboxGroup:function(){return x},default:function(){return h}});var n=e(67824),f=e(56104),s=e(558),c=e.n(s),i={};for(var o in s)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(i[o]=function(v){return s[v]}.bind(0,o));e.d(t,i);const m=n.Z;m.Group=f.Z;const x=m.Group,h=m},558:function(){},57577:function(I,t,e){"use strict";e.d(t,{$:function(){return f},E:function(){return s}});var n=e(53360);const f={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(f)},83405:function(I,t,e){"use strict";e.d(t,{i:function(){return m}});var n=e(53360),f=e(12598),s=e(7657),c=e(31136),i=e(57577);function o(x){const h=(0,s.S)(x,i.$),{iconPrefix:v,children:u}=h,d=(0,f.C)(h,["children","iconPrefix"]),l=v?c.Z.Provider:n.Fragment;return n.createElement(i.E.Provider,{value:d},n.createElement(l,{value:{prefixCls:v}},u))}o.displayName="ConfigProvider";const m=o},48380:function(I,t,e){"use strict";e.d(t,{i:function(){return x}});var n=e(53360),f=e(7829),s=e(7657),c=e(57577);const i={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((v,u)=>{const{prefixCls:d,componentConfig:l}=(0,n.useContext)(c.E),p=(0,s.S)(v,i,l==null?void 0:l.Divider),{direction:r,align:a,dashed:C,className:y,children:E,text:w,style:B}=p,P=E||w,M=r!=="vertical"&&!!P,F=(0,f.default)(`${d}-divider`,{[`${d}-divider-${r}`]:r,[`${d}-divider-with-text`]:M,[`${d}-divider-with-text-${a}`]:M,[`${d}-divider-dashed`]:!!C,className:y});return n.createElement("div",{className:F,style:B,ref:u},M&&n.createElement("span",{className:`${d}-divider-inner-text`},P))});o.displayName="Divider";const x=o,h=null},17599:function(I,t,e){"use strict";e.d(t,{J:function(){return H},X:function(){return z}});var n=e(53360),f=e(7829),s=e(7657),c=e(80703),i=e(57577);const o=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},x=Object.keys(m),h=new Map;let v=-1,u={};const l={handlers:{},dispatch(R){return u=R,h.forEach(D=>{D(u)}),h.size>=1},subscribe(R){return h.size||this.register(),v+=1,h.set(v,R),R(u),v},unsubscribe(R){h.delete(R),h.size||this.unregister()},register(){x.forEach(R=>{const D=({matches:U})=>{this.dispatch(ve(O({},u),{[R]:U}))},T=m[R],b=window.matchMedia(T);b.addListener(D),this.handlers[T]={mql:b,listener:D},D(b)})},unregister(){x.forEach(R=>{const D=m[R],T=this.handlers[D];T==null||T.mql.removeListener(T==null?void 0:T.listener)}),h.clear()}},r=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},C=(0,n.forwardRef)((R,D)=>{const{prefixCls:T,componentConfig:b}=(0,n.useContext)(i.E),Pe=(0,s.S)(R,a,b==null?void 0:b.Row),{align:U,justify:Z,gutter:W,className:X,wrap:V,children:ce,style:de}=Pe,G=we(Pe,["align","justify","gutter","className","wrap","children","style"]),[N,Ie]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const Ce=l.subscribe(g=>{((0,c.Kn)(W)||(0,c.kJ)(W)&&((0,c.Kn)(W[0])||(0,c.Kn)(W[1])))&&Ie(g)});return()=>l.unsubscribe(Ce)},[W]);const re=se();function se(){const Ce=[void 0,void 0];return((0,c.kJ)(W)?W:[W,void 0]).forEach((S,A)=>{if((0,c.Kn)(S))for(let j=0;j<o.length;j++){const J=o[j];if(N[J]&&S[J]!==void 0){Ce[A]=S[J];break}}else Ce[A]=S}),Ce}const me=(0,f.default)(`${T}-row`,{[`${T}-row-nowrap`]:V===!1,[`${T}-row-align-${U}`]:U,[`${T}-row-justify-${Z}`]:Z},X),[ee,ue]=re,De=(0,n.useMemo)(()=>({gutter:[ee,ue],wrap:V}),[ee,ue,V]),K={},be=(0,c.hj)(ee)&&ee!==0,Ne=(0,c.hj)(ue)&&ue!==0;if(be||Ne){const Ce=-ee/2,g=-ue/2;Ce&&(K.marginLeft=Ce,K.marginRight=Ce),g&&(K.marginTop=g,K.marginBottom=g)}return n.createElement(r.Provider,{value:De},n.createElement("div",ve(O({},G),{ref:D,className:me,style:O(O({},de),K)}),ce))});C.displayName="Row";const y=C,E={offset:0};function w(R){return(0,c.hj)(R)?`${R} ${R} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(R)?`0 0 ${R}`:R}const B=["xs","sm","md","lg","xl","xxl"],P=(R,D)=>{let T={};return B.forEach(b=>{const U=R[b];if(!U)return;let Z={};(0,c.hj)(U)?Z.span=U:(0,c.Kn)(U)&&(Z=U),T=ve(O({},T),{[`${D}-col-${b}-${Z.span}`]:(0,c.hj)(Z.span),[`${D}-col-${b}-order-${Z.order}`]:Z.order,[`${D}-col-${b}-offset-${Z.offset}`]:Z.offset})}),T},M=(0,n.forwardRef)((R,D)=>{const{componentConfig:T,prefixCls:b}=(0,n.useContext)(i.E),{gutter:U}=(0,n.useContext)(r),Pe=(0,s.S)(R,E,T==null?void 0:T.Col),{span:Z,offset:W,children:X,className:V,style:ce,flex:de,order:G,xs:N,sm:Ie,md:re,lg:se,xl:me,xxl:ee}=Pe,ue=we(Pe,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),De=P({xs:N,sm:Ie,md:re,lg:se,xl:me,xxl:ee},b),K=(0,f.default)(`${b}-col`,{[`${b}-col-${Z}`]:(0,c.hj)(Z),[`${b}-col-offset-${W}`]:W,[`${b}-col-order-${G}`]:G},De,V),be={};if(U){const Ce=U[0]?U[0]/2:0,g=U[1]?U[1]/2:0;Ce&&(be.paddingLeft=Ce,be.paddingRight=Ce),g&&(be.paddingTop=g,be.paddingBottom=g)}const Ne={};return de&&(Ne.flex=w(de)),n.createElement("div",ve(O({ref:D},ue),{className:K,style:O(O(O({},ce),Ne),be)}),X)});M.displayName="Col";const F=M,z=y,H=F},45990:function(I,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return f.z},Col:function(){return m.J},ConfigProvider:function(){return i.i},Divider:function(){return o.i},Input:function(){return x.I},Popup:function(){return h.G},Row:function(){return m.X},Space:function(){return u.T},Switch:function(){return d.r}});var n=e(69203),f=e(60884),s=e(89946),p={};for(var c in s)["default","Alert","Button"].indexOf(c)<0&&(p[c]=function(r){return s[r]}.bind(0,c));e.d(t,p);var i=e(83405),o=e(48380),m=e(17599),x=e(38312),h=e(58692),v=e(37663),p={};for(var c in v)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup"].indexOf(c)<0&&(p[c]=function(a){return v[a]}.bind(0,c));e.d(t,p);var u=e(92595),d=e(9090),l=e(36112),p={};for(var c in l)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup","Radio","RadioButton","RadioGroup","Space","Switch"].indexOf(c)<0&&(p[c]=function(a){return l[a]}.bind(0,c));e.d(t,p)},38312:function(I,t,e){"use strict";e.d(t,{I:function(){return p}});var n=e(53360),f=e(7829),s=e(7657),c=e(62222),i=e(80703),o=e(58360),m=e(85569),x=e(1824),h=e(57577);const v={type:"text",size:"md",align:"left",visibilityToggle:!0};function u(a,C,y){let E;return E=a===null||(0,i.o8)(a)||(0,i.HD)(a)?a||"":String(a),(0,i.hj)(C)&&!y?E.slice(0,C):E}const d=(0,n.forwardRef)((a,C)=>{const{prefixCls:y,componentConfig:E}=(0,n.useContext)(h.E),ze=(0,s.S)(a,v,E==null?void 0:E.Input),{size:w,status:B,align:P,disabled:M,allowClear:F,placeholder:z,variant:H="outline",addonBefore:R,addonAfter:D,prefix:T,suffix:b,value:U,defaultValue:Z,type:W,className:X,style:V,readOnly:ce,visibilityToggle:de,maxLength:G,tips:N,onFocus:Ie,onBlur:re,onChange:se}=ze,me=we(ze,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),ee=(0,n.useRef)(null),ue=(0,n.useRef)(null);(0,n.useImperativeHandle)(C,()=>({currentElement:ee.current,inputElement:ue.current,focus:()=>{var _;return(_=ue.current)==null?void 0:_.focus()},blur:()=>{var _;return(_=ue.current)==null?void 0:_.blur()},select:()=>{var _;return(_=ue.current)==null?void 0:_.select()}}));const[De,K]=(0,n.useState)(!1),be=_=>{M||ce||(K(!0),Ie==null||Ie(_))},Ne=_=>{M||ce||(K(!1),re==null||re(_))},Pe=(0,i.hj)(G)?G:G==null?void 0:G.length,Ce=(0,i.hj)(G)?!1:G==null?void 0:G.errorOnly,g=(0,i.hj)(G)?!0:(G==null?void 0:G.showLimit)!==!1,[S,A]=(0,c.R)(Z,{value:U}),j=u(S,Pe,Ce),J=(0,i.hj)(Pe)?j.length>Pe:!1,Q=_=>{const{value:he}=_.target;A(he),se==null||se(he,_)},ne=()=>{var _;M||(_=ue.current)==null||_.focus()},te=(0,f.default)(`${y}-input`,{[`${y}-input-variant-${H}`]:H,[`${y}-input-size-${w}`]:w,[`${y}-input-disabled`]:M,[`${y}-input-align-${P}`]:P,[`${y}-input-status-${B}`]:B,[`${y}-input-focus`]:De,[`${y}-input-limit-length-error`]:J},X),$=(0,f.default)(`${y}-input-real`),pe=F&&j&&!M,Y=n.createElement(o.Z,null),L=_=>{_.stopPropagation(),A(""),se==null||se("",_)},q=pe&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,f.default)(`${y}-input-suffix`,`${y}-input-clear`),onClick:L},Y),ae=(0,i.Kn)(de)&&!(0,i.o8)(de.visible),[ge,xe]=(0,n.useState)(W),oe=(0,i.Kn)(de)?de.visible:de;(0,n.useEffect)(()=>{xe(ae?oe?"text":"password":W)},[W,ae,oe]);const Se=()=>{var he;if(M)return;const _=ge==="password"?"text":"password";xe(_),ae&&((he=de.onVisibleChange)==null||he.call(de,_==="text"))},k=W==="password",ie=(0,n.useMemo)(()=>k?(0,i.Kn)(de)&&(0,i.mf)(de.renderIcon)?de.renderIcon(ge==="text"):ge==="password"?n.createElement(m.Z,null):ge==="text"?n.createElement(x.Z,null):null:b,[k,ge,de,b]),le=(0,n.useMemo)(()=>function({children:_}){const he=R||D;let Le=_;return he&&(Le=n.createElement("div",{ref:ee,className:`${y}-input-group`},Le)),N&&(Le=n.createElement("div",{ref:ee,className:`${y}-input-group-extra`},Le)),Le},[y,R,D,N]),Re=T&&n.createElement("span",{className:`${y}-input-prefix`},T),Ze=ie&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,f.default)(`${y}-input-suffix`,{[`${y}-input-suffix-password`]:k}),onClick:Se,onMouseDown:_=>_.preventDefault(),onMouseUp:_=>_.preventDefault()},ie),Fe=(0,i.hj)(Pe)&&g&&n.createElement("span",{className:`${y}-input-limit-length-text`},j.length,"/",Pe),Te=N&&n.createElement("div",{className:(0,f.default)(`${y}-input-tips`,{[`${y}-input-tips-status-${B}`]:B})},N),je=n.createElement("span",{role:"group",ref:R||D?void 0:ee,className:te,style:V,onClick:ne},Re,n.createElement("input",ve(O({ref:ue},me),{type:ge,value:j,readOnly:ce,className:$,placeholder:z,disabled:M,onChange:Q,onFocus:be,onBlur:Ne})),q,Ze,Fe),Ve=R&&n.createElement("span",{className:(0,f.default)(`${y}-input-group-addon`)},R),$e=D&&n.createElement("span",{className:(0,f.default)(`${y}-input-group-addon`)},D);return n.createElement(le,null,Ve,je,$e,Te)});d.displayName="Input";const p=d,r=null},58692:function(I,t,e){"use strict";e.d(t,{G:function(){return h}});var n=e(53360),f=e(7657),s=e(57577),c=e(36112),i=e(7829);const o={trigger:"hover",placement:"top",showArrow:!0,destroyOnClose:!0,offset:6},m=(0,n.forwardRef)((u,d)=>{const{prefixCls:l,componentConfig:p}=(0,n.useContext)(s.E),F=(0,f.S)(u,o,p==null?void 0:p.Popup),{children:r,content:a,destroyOnClose:C,showArrow:y,styles:E,classNames:w}=F,B=we(F,["children","content","destroyOnClose","showArrow","styles","classNames"]),P=(0,n.useRef)(null);if((0,n.useImperativeHandle)(d,()=>P.current),!r)return null;const M=(0,n.isValidElement)(r)?r:n.createElement("span",null,r);return n.createElement(c.default,ve(O({},B),{ref:P,className:`${l}-popup`,motion:{timeout:200,name:"popup",mountOnEnter:!0,preEnter:!0,unmountOnExit:C},popper:n.createElement("div",{style:E==null?void 0:E.content,className:(0,i.default)(`${l}-popup-content`,w==null?void 0:w.content)},a),arrow:y?n.createElement("div",{style:E==null?void 0:E.arrow,className:(0,i.default)(`${l}-popup-arrow`,w==null?void 0:w.arrow)}):void 0}),M)});m.displayName="Popup";const h=m,v=null},74052:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),f=e(7829),s=e(7657),c=e(80703),i=e(92266),o=e(4814),m=e(57577),x=e(83595);const h={defaultChecked:!1},v=(0,n.forwardRef)((d,l)=>{var W;const{prefixCls:p,componentConfig:r}=(0,n.useContext)(m.E),a=(0,n.useContext)(x.Z),Z=(0,s.S)(d,h,r==null?void 0:r.Radio),{_IS_BUTTON_:C,value:y,children:E,style:w}=Z,B=we(Z,["_IS_BUTTON_","value","children","style"]),P=X=>{var V,ce;(V=B.onChange)==null||V.call(B,X),(ce=a==null?void 0:a.onChange)==null||ce.call(a,X)},M=O({},B);let F="md";(0,c.Qr)(a)||(M.name=a.name,M.onChange=P,M.checked=y===a.value,M.disabled=(W=M.disabled)!=null?W:a.disabled,F=a.size?a.size:F);const[z,H]=(0,n.useState)(!1),R=C?`${p}-radio-button`:`${p}-radio`,D=(0,f.default)(`${R}-wrapper`,{[`${R}-wrapper-disabled`]:M.disabled,[`${R}-wrapper-checked`]:M.checked,[`${R}-wrapper-size-${F}`]:F,[`${R}-wrapper-filled`]:a.buttonVariant==="filled"}),T=()=>(0,c.o8)(E)?null:(0,c.mf)(E)?E({checked:"checked"in M?!!M.checked:z}):n.createElement("span",{className:`${R}-label`},E),b=(0,n.useRef)(null),U=X=>{var V;(0,c.mf)(E)&&(X.preventDefault(),(V=b.current)==null||V.click())};return n.createElement("label",{className:D,onClick:U},n.createElement(i.Z,ve(O(O({},B),M),{ref:(0,o.sQ)(l,b),value:y,type:"radio",prefixCls:R,style:ve(O({},w),{display:(0,c.mf)(E)?"none":void 0}),disabled:M.disabled,_getCheckedValue:H})),T())});v.displayName="Radio";const u=v},89312:function(I,t,e){"use strict";e.d(t,{Z:function(){return c}});var n=e(53360),f=e(74052);const s=(0,n.forwardRef)((i,o)=>n.createElement(f.Z,ve(O({_IS_BUTTON_:!0},i),{ref:o})));s.displayName="RadioButton";const c=s},59803:function(I,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),f=e(7829),s=e(7657),c=e(62222),i=e(80703),o=e(57577),m=e(83595),x=e(74052),h=e(89312);const v={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},u=(0,n.forwardRef)((l,p)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(o.E),C=(0,s.S)(l,v,a==null?void 0:a.RadioGroup),y=(0,n.useId)(),{className:E,style:w,name:B=y,value:P,defaultValue:M,children:F,disabled:z,size:H,buttonVariant:R,renderOption:D,onChange:T,appearance:b,options:U}=C,[Z,W]=(0,c.R)(M,{value:P}),X=(0,n.useCallback)(G=>{const N=G.target.value;"value"in C||W(N),N!==Z&&(T==null||T(G))},[C.value,Z,T]);let V=F;const ce=b==="button"?h.Z:x.Z;if((0,i.kJ)(U)&&U.length>0){const G=(0,i.mf)(D);V=U.map(N=>{if((0,i.HD)(N)||(0,i.hj)(N)){const se=Z===N,me=G?()=>D({label:N,value:N,checked:se}):N;return n.createElement(ce,{key:N.toString(),disabled:z,value:N,checked:se},me)}const Ie=Z===N.value,re=G?()=>D(ve(O({},N),{checked:Ie})):N.label;return n.createElement(ce,{key:`radio-group-options-${N.value}`,className:N.className,style:N.style,disabled:N.disabled||z,value:N.value,checked:Ie,id:N.id,title:N.title,onChange:N.onChange},re)})}const de=(0,n.useMemo)(()=>({name:B,value:Z,disabled:z,size:H,buttonVariant:R,onChange:X}),[B,Z,z,H,R,X]);return n.createElement("div",{ref:p,className:(0,f.default)(`${r}-radio-group`,E),style:w},n.createElement(m.Z.Provider,{value:de},V))});u.displayName="RadioGroup";const d=u},83595:function(I,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360);const s=(0,n.createContext)({})},37663:function(I,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return x},RadioButton:function(){return v},RadioGroup:function(){return h},default:function(){return u}});var n=e(74052),f=e(89312),s=e(59803),c=e(63149),i=e.n(c),o={};for(var m in c)["default","Radio","RadioButton","RadioGroup"].indexOf(m)<0&&(o[m]=function(d){return c[d]}.bind(0,m));e.d(t,o);const x=n.Z;x.Group=s.Z,x.Button=f.Z;const h=x.Group,v=x.Button,u=x},63149:function(){},92595:function(I,t,e){"use strict";e.d(t,{T:function(){return u}});var n=e(53360),f=e(7829),s=e(80703),c=e(7657),i=e(21299),o=e(57577);const m={sm:8,md:16,lg:24},x={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((l,p)=>{const{prefixCls:r,size:a="md",componentConfig:C}=(0,n.useContext)(o.E),Z=(0,c.S)(l,x,C==null?void 0:C.Space),{className:E,children:w,size:B=a,direction:P="horizontal",align:M,split:F,wrap:z=!1}=Z,H=we(Z,["className","children","size","direction","align","split","wrap"]),R=(0,i.q)(w),D=P==="horizontal"&&M===void 0?"center":M,T=(0,f.default)(`${r}-space`,`${r}-space-direction-${P}`,{[`${r}-space-align-${D}`]:D,[`${r}-space-wrap`]:z},E),b=(0,n.useCallback)(W=>{const X=(0,s.kJ)(B)?B:[B,B],[V,ce]=X.map(de=>(0,s.HD)(de)?m[de]:de||0);return z?{marginRight:V,marginBottom:ce}:P==="vertical"?{marginBottom:ce}:{marginRight:W?void 0:V}},[B,P,z]),U=R.map((W,X)=>{const V=X===R.length-1;return n.createElement(n.Fragment,{key:`space-item-${X.toString()}`},n.createElement("div",{className:"space-item",style:b(V)},W),!V&&F&&n.createElement("span",{className:"sqi-space-item-split"},F))});return n.createElement("div",ve(O({className:T},H),{ref:p}),U)});h.displayName="Space";const u=h,d=null},9090:function(I,t,e){"use strict";e.d(t,{r:function(){return v}});var n=e(53360),f=e(7829),s=e(7657),c=e(62222),i=e(60333),o=e(57577);const m={label:[],loading:!1,disabled:!1},x=(0,n.forwardRef)((d,l)=>{const{prefixCls:p,size:r="md",componentConfig:a}=(0,n.useContext)(o.E),W=(0,s.S)(d,m,a==null?void 0:a.Switch),{checked:C,defaultChecked:y,className:E,disabled:w,size:B=r,label:P,loading:M,loadingIcon:F,onChange:z,onClick:H}=W,R=we(W,["checked","defaultChecked","className","disabled","size","label","loading","loadingIcon","onChange","onClick"]),[D,T]=(0,c.R)(!1,{value:C,defaultValue:y});function b(X){if(w||M)return;const V=!D;T(V),z==null||z(V,X),H==null||H(V,X)}const U=(0,f.default)(`${p}-switch`,{[`${p}-switch-checked`]:D,[`${p}-switch-disabled`]:w,[`${p}-switch-loading`]:M,[`${p}-switch-${B}`]:B},E),Z=F||n.createElement(i.Z,{spin:!0});return n.createElement("button",ve(O({},R),{type:"button",role:"switch","aria-checked":D,ref:l,className:U,disabled:w||M,onClick:b}),n.createElement("div",{className:`${p}-switch-handle`},M&&Z),n.createElement("div",{className:`${p}-switch-content`},D?P[0]:P[1]))});x.displayName="Switch";const v=x,u=null},67171:function(I,t,e){"use strict";e.d(t,{Z:function(){return Ce}});var n=e(53360),f=e(7829),s=e(7657),c=e(62222),i=e(60164),o=e(6890),m=e(8240),x=e(21299);function h(g){return g instanceof HTMLElement||g instanceof SVGElement}function v(g){return g&&typeof g=="object"&&h(g.nativeElement)?g.nativeElement:h(g)?g:null}function u(g){if(g)return g.current&&typeof g.current=="object"&&"currentElement"in g.current?g.current.currentElement:g.current}function d(g){var A;return g&&(0,n.isValidElement)(g)?parseInt(n.version,10)>=19?((A=g.props)==null?void 0:A.ref)||null:g.ref:null}var l=e(4814);const p=(0,n.forwardRef)((g,S)=>{const{children:A,disabled:j,throttleMs:J=100,onResize:Q}=g,ne=(0,n.isValidElement)(A),te=ne?(0,x.q)(A):[],$=ne?d(A):null,pe=(0,n.useRef)(null),Y=(0,l.x1)($,pe),L=()=>u(pe);(0,n.useImperativeHandle)(S,()=>u(pe));const q=Q?(0,o.P)(Q,J):void 0;return(0,m.y)(L(),q,!j),ne?(0,n.cloneElement)(A,{ref:Y}):A});p.displayName="ResizeObserverComponent";const r=p;var a=e(86752),C=e(34028),y=e(80703);const E=(0,C.J)();function w(g){return E?(0,y.mf)(g)?g():document.body:null}const B=(0,n.forwardRef)((g,S)=>{const{getContainer:A,prefixCls:j,children:J,open:Q=!0,rootStyle:ne}=g,[te,$]=(0,n.useState)(null),[pe,Y]=(0,n.useState)(null),L=pe||document.body;(0,n.useEffect)(()=>{const ae=w(A);Y(ae||null)},[A]);const q=()=>{if(!E||te)return null;const ae=document.createElement("div");j&&(ae.className=`${j}-portal-wrapper`),ne&&Object.assign(ae.style,ne),ae.setAttribute("data-portal","true"),$(ae)};return(0,i.L)(()=>{E&&(Q?q():$(null))},[Q]),n.useImperativeHandle(S,()=>te,[te]),(0,i.L)(()=>{if(!E||!te)return;const ae=()=>!te.parentNode&&L.appendChild(te),ge=()=>{var xe;return(xe=te.parentNode)==null?void 0:xe.removeChild(te)};return Q?ae():ge(),()=>{ge()}},[Q,te]),Q&&J&&te?(0,a.createPortal)(J,te):null});B.displayName="Portal";const P=B;var M=e(40549),F=e(57577);const z="Escape",R=g=>{const{trigger:S,delay:A,disabled:j,visible:J,clickOutsideClose:Q,triggerEl:ne,outFocusToClose:te=!0,onVisibleChange:$}=g,pe=(0,n.useRef)(!1),Y=(0,n.useRef)(!1),L=(0,n.useRef)(null),q=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(j)return;const oe=Se=>{var k;(k=ne==null?void 0:ne.contains)!=null&&k.call(ne,Se.target)||pe.current||J&&Q&&($==null||$(!1,{e:Se,trigger:"document"}))};return document.addEventListener("mousedown",oe),document.addEventListener("touchend",oe),()=>{document.removeEventListener("mousedown",oe),document.removeEventListener("touchend",oe)}},[j,J,ne,Q,$]);function ae(oe){A?(clearTimeout(L.current),L.current=setTimeout(oe,A)):oe()}function ge(){return j?{}:{onMouseEnter:oe=>{S==="hover"&&!Y.current&&(clearTimeout(L.current),$==null||$(!0,{e:oe,trigger:"hover"}))},onMouseLeave:oe=>{S==="hover"&&(Y.current=!0,clearTimeout(L.current),$==null||$(!1,{e:oe,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(q.current),pe.current=!0,q.current=window.setTimeout(()=>{pe.current=!1})},onTouchEnd:()=>{clearTimeout(q.current),pe.current=!0,q.current=window.setTimeout(()=>{pe.current=!1})}}}function xe(oe){return j?{}:{onClick:k=>{var ie,le;S==="click"&&(k.preventDefault(),k.stopPropagation(),ae(()=>$==null?void 0:$(!J,{e:k,trigger:"click"}))),(le=(ie=oe.props).onClick)==null||le.call(ie,k)},onTouchStart:k=>{var ie,le;S==="hover"&&(Y.current=!1,ae(()=>$==null?void 0:$(!0,{e:k,trigger:"hover"}))),(le=(ie=oe.props).onTouchStart)==null||le.call(ie,k)},onMouseEnter:k=>{var ie,le;S==="hover"&&(Y.current=!1,ae(()=>$==null?void 0:$(!0,{e:k,trigger:"hover"}))),(le=(ie=oe.props).onMouseEnter)==null||le.call(ie,k)},onMouseLeave:k=>{var ie,le;S==="hover"&&(Y.current=!1,ae(()=>$==null?void 0:$(!1,{e:k,trigger:"hover"}))),(le=(ie=oe.props).onMouseLeave)==null||le.call(ie,k)},onFocus:k=>{var ie,le;S==="focus"&&ae(()=>$==null?void 0:$(!0,{e:k,trigger:"focus"})),(le=(ie=oe.props).onFocus)==null||le.call(ie,k)},onBlur:k=>{var ie,le;if(S==="focus"){if(pe.current&&!te)return;ae(()=>$==null?void 0:$(!1,{e:k,trigger:"blur"}))}(le=(ie=oe.props).onBlur)==null||le.call(ie,k)},onContextMenu:k=>{var ie,le;S==="context-menu"&&(k.preventDefault(),ae(()=>$==null?void 0:$(!0,{e:k,trigger:"context-menu"}))),(le=(ie=oe.props).onContextMenu)==null||le.call(ie,k)},onKeyDown:k=>{var ie,le;(k==null?void 0:k.key)===z&&ae(()=>$==null?void 0:$(!1,{e:k,trigger:"keydown-esc"})),(le=(ie=oe.props).onKeyDown)==null||le.call(ie,k)}}}return{genPopupProps:ge,genTriggerProps:xe}};function D(g,S,A){const{top:j,left:J,width:Q,height:ne}=g.getBoundingClientRect(),te=j+A,$=J+S;return{width:Q,height:ne,top:te,bottom:te+ne,left:$,right:$+Q}}function T(g,S,A){const j=D(g,S,A),J=g.clientWidth,Q=g.clientHeight,ne=j.left+g.clientLeft,te=j.top+g.clientTop;return{width:J,height:Q,top:te,bottom:te+Q,left:ne,right:ne+J}}function b(g){if(!g||g.tagName==="HTML")return;const S=window.getComputedStyle(g),A=j=>["auto","scroll"].includes(j);return g.clientHeight<g.scrollHeight&&A(S.overflowX)||g.clientWidth<g.scrollWidth&&A(S.overflowY)?g:b(g.parentNode)}function U(g,S){return Math.round(Math.abs(g))>Math.round(Math.abs(S))?g:S}const Z=(g,S)=>`translate3d(${g}px, ${S}px, 0)`;function W(g){var Q,ne;if(!g)return[0,0];const S=window.getComputedStyle(g),A=S.transform||S.webkitTransform||"none";if(A==="none")return[0,0];if(A.match(/matrix\(([^)]+)\)/)){const te=((ne=(Q=A.match(/matrix\((.+)\)/))==null?void 0:Q[1])==null?void 0:ne.split(",").map(Number))||[0,0];if(te.length===6)return[te[4],te[5]]}const[,j=0,J=0]=(A.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(te=>Number(te));return[j,J]}function X(g){const S=g.split("-"),A=S[0],j=S[1];let J;const Q=A==="top"||A==="bottom",ne=A==="left"||A==="right";return Q&&(j==="start"&&(J="left"),j==="end"&&(J="right")),ne&&(j==="start"&&(J="top"),j==="end"&&(J="bottom")),[A,J,Q,ne]}function V(g){return g?(0,y.Kn)(g)?[g.x||0,g.y||0]:[g||0,g||0]:[0,0]}const ce={placement:"bottom",enableFlip:!0,enableShift:!0};function de(g,S){const{reference:A,popper:j,arrow:J}=g;if(!A||!j)return;const Q=O(O({},ce),S),ne=j.parentNode,[te,$]=W(ne),pe=window.pageYOffset,Y=window.pageXOffset,L=D(A,Y,pe),q=D(j,Y,pe),ae=L.width-q.width,ge=L.height-q.height;let xe=L.left-q.left+te,oe=L.top-q.top+$;const[Se,k,ie,le]=X(Q.placement);let Re=Se;const Ze=k==="left"?0:k==="right"?ae:ae/2,Fe=ae-Ze,Te=k==="top"?0:k==="bottom"?ge:ge/2,je=ge-Te;ie&&(xe+=Ze,oe+=Se==="top"?-q.height:L.height),le&&(xe+=Se==="left"?-q.width:L.width,oe+=Te);let Ve=b(A);const[$e,ze]=V(Q.offset),{height:_=0,width:he=0}=J?D(J,Y,pe):{};let Le=0,Ue=0;for(;Ve;){const Ke=T(Ve,Y,pe);Ye(Ke),Ve=b(Ve.parentNode)}const{clientHeight:He,clientWidth:Je}=document.documentElement;Ye({top:pe,bottom:pe+He,left:Y,right:Y+Je,height:He,width:Je});const Qe=Q.placement.split("-")[1];ne.setAttribute("data-trigger-placement",`${Re}${Qe?`-${Qe}`:""}`),xe-=Le,oe-=Ue,Ge(),ie&&(oe+=Re==="bottom"?ze:-ze),le&&(xe+=Re==="right"?$e:-$e),ne.style.transform=Z(xe,oe);function Ye(Ke){const{top:ye,bottom:We,left:Ee,right:Ae,height:fe,width:Be}=Ke;if(ie){const Me=Math.round(L.top-ye+L.height/2),Oe=Math.round(fe/2);Q.enableFlip&&ke(Me,Oe),Q.enableShift&&on()}if(le){const Me=Math.round(L.left-Ee+L.width/2),Oe=Math.round(Be/2);Q.enableFlip&&an(Me,Oe),Q.enableShift&&rn()}function ke(Me,Oe){const qe=L.top-(q.height+ze+_)<ye,_e=L.bottom+q.height+ze+_>fe+ye;qe&&Me<=Oe&&Re==="top"?(oe+=q.height+L.height,Re="bottom"):_e&&Me>=Oe&&Re==="bottom"&&(oe-=q.height+L.height,Re="top")}function on(){if(L.left+Ze<Ee){const Me=L.left+Ze-Ee,Oe=L.right-he>Ee?Me:-L.width+Ze+he;Le=U(Oe,Le)}if(L.right-Fe>Ae){const Me=L.right-Fe-Ae,Oe=L.left+he<Ae?Me:L.width-Fe-he;Le=U(Oe,Le)}}function an(Me,Oe){const qe=L.left-(q.width+$e+he)<Ee,_e=L.right+q.width+$e+he>Ae;qe&&Me<Oe&&Re==="left"?(xe+=L.width+q.width,Re="right"):_e&&Me>Oe&&Re==="right"&&(xe-=L.width+q.width,Re="left")}function rn(){if(L.top+Te<ye){const Me=L.top+Te-ye,Oe=L.bottom-_>ye?Me:-L.height+Te+_;Ue=U(Oe,Ue)}if(L.bottom-je>We){const Me=L.bottom-je-We,Oe=L.top+_<We?Me:L.height-je-_;Ue=U(Oe,Ue)}}}function Ge(){if(!J)return;const{height:Ke,width:ye}=D(J,Y,pe);ie?oe+=Re==="bottom"?Ke:-Ke:le&&(xe+=Re==="right"?ye:-ye);const We=Q.placement.split("-")[1]||"center",Ee={x:0,y:0};if(ie){Ee.y=Re==="top"?q.height:-Ke;const Ae=q.width-ye,fe=0;if(We==="start")Ee.x=Math.max(fe,Math.min(Ae,Le));else if(We==="center"){const Be=(q.width-ye)/2;Ee.x=Math.max(fe,Math.min(Ae,Be+Le))}else if(We==="end"){const Be=q.width-ye;Ee.x=Math.max(fe,Math.min(Ae,Be+Le))}}else if(le){Ee.x=Re==="left"?q.width:-ye;const Ae=q.height-Ke,fe=0;if(We==="start")Ee.y=Math.max(fe,Math.min(Ae,Ue));else if(We==="center"){const Be=(q.height-Ke)/2;Ee.y=Math.max(fe,Math.min(Ae,Be+Ue))}else if(We==="end"){const Be=q.height-Ke;Ee.y=Math.max(fe,Math.min(Ae,Be+Ue))}}J.style.transform=Z(Ee.x,Ee.y)}}function G(g,S=[]){if(!g)return[];const A=se(g);if(A===g.ownerDocument.body){const Q=window.visualViewport?[window.visualViewport]:[],ne=Ie(A)?[A]:[];return[...S,window,...Q,...ne]}const J=G(N(A));return[...S,A,...J]}function N(g){return ee(g)==="html"?g:g==null?void 0:g.parentNode}function Ie(g){if(!g)return!1;const{overflow:S,overflowX:A,overflowY:j,display:J}=window.getComputedStyle(g);return/auto|scroll|overlay|hidden|clip/.test(S+j+A)&&!["contents"].includes(J)}const re=new Set(["html","body","#document"]);function se(g){return g?re.has(ee(g))?g.ownerDocument.body:me(g)&&Ie(g)?g:se(N(g)):document.body}function me(g){return g instanceof HTMLElement}function ee(g){return g?(g.nodeName||"").toLowerCase():null}function ue(g){let S;return()=>(S||(S=new Promise(A=>{Promise.resolve().then(()=>{S=void 0,A(g())})})),S)}const De={placement:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:1,trigger:"hover",delay:100,outFocusToClose:!0,clickOutsideClose:!0},K={position:"absolute",top:0,left:0,bottom:"auto",right:"auto",margin:0,willChange:"transform"},be=O({},K),Ne=O({},K),Pe=(0,n.forwardRef)((g,S)=>{const{prefixCls:A,componentConfig:j}=(0,n.useContext)(F.E),{className:J,children:Q,popper:ne,enableShift:te,motion:$={},enableFlip:pe,offset:Y,placement:L,getContainer:q,zIndex:ae,trigger:ge,delay:xe,outFocusToClose:oe,disabled:Se,defaultVisible:k,visible:ie,arrow:le,clickOutsideClose:Re,onVisibleChange:Ze}=(0,s.S)(g,De,j==null?void 0:j.Trigger),Fe=(0,n.isValidElement)(Q),Te=(0,n.useRef)(null),je=(0,n.useRef)(null),Ve=d(ne),$e=(0,n.useRef)(null),ze=(0,l.x1)(Ve,$e),_=(0,n.useRef)(null),[he,Le]=(0,c.R)(!1,{defaultValue:k,value:ie,onChange:Ze}),{genPopupProps:Ue,genTriggerProps:He}=R({clickOutsideClose:Re,delay:xe,disabled:Se,visible:he,onVisibleChange:Le,trigger:ge,triggerEl:Te.current,outFocusToClose:oe});(0,n.useImperativeHandle)(S,()=>Te.current);const Je=(0,l.t4)(Q),Qe=(0,l.t4)(ne),Ye=(0,n.useCallback)(fe=>{var Be;fe&&fe.type!=="resize"&&!((Be=fe.target)!=null&&Be.contains(Te.current))||de({reference:Te.current,popper:$e.current,arrow:je.current},{placement:L,enableFlip:pe,enableShift:te,offset:Y})},[L,pe,te,Y]),[Ge,Ke]=(0,n.useState)([]),ye=(0,n.useCallback)(ue(()=>new Promise(fe=>{Ye(),fe(void 0)})),[L,pe,te,Y]);(0,i.L)(()=>{const fe=G(Te.current),Be=G($e.current),ke=[...fe,...Be];Ke(ke)},[]);const We=()=>{Ge.forEach(fe=>{fe.addEventListener("scroll",ye,{passive:!0})}),window.addEventListener("resize",ye,{passive:!0})},Ee=()=>{Ge.forEach(fe=>{fe.removeEventListener("scroll",ye)}),window.removeEventListener("resize",ye)};if((0,i.L)(()=>{var fe,Be;he!==void 0&&(he===!0?((fe=_.current)==null||fe.toggle(!0),ye(),We()):he===!1&&((Be=_.current)==null||Be.toggle(!1),Ee()))},[he]),(0,i.L)(()=>{if(he)return ye(),Ee(),We(),()=>Ee()},[L,he,Ge,pe,te,Y]),!Fe)return;const Ae=()=>ne?n.createElement(M.Z,O({ref:_},$),({className:fe})=>n.createElement(P,{getContainer:q},n.createElement("div",ve(O({role:"tooltip"},Ue()),{className:(0,f.default)(`${A}-trigger`,fe,J),style:ve(O({},be),{zIndex:ae})}),le?n.createElement("div",{className:`${A}-trigger-arrow`,ref:je,style:ve(O({},Ne),{zIndex:ae})},le):null,(0,n.cloneElement)(ne,{ref:ze})))):null;return n.createElement(n.Fragment,null,n.createElement(r,{ref:Te,onResize:()=>ye()},(0,n.cloneElement)(Q,O({},He(Q)))),Ae())});Pe.displayName="Trigger";const Ce=Pe},36112:function(I,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return m}});var n=e(67171),f=e(98479),s=e.n(f),c={};for(var i in f)["default","Trigger"].indexOf(i)<0&&(c[i]=function(x){return f[x]}.bind(0,i));e.d(t,c);const o=n.Z,m=o},98479:function(){},84176:function(I,t,e){var n=e(75863);function f(s,c){if(s==null)return{};var i=n(s,c),o,m;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(s);for(m=0;m<x.length;m++)o=x[m],!(c.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(i[o]=s[o])}return i}I.exports=f,I.exports.__esModule=!0,I.exports.default=I.exports},75863:function(I){function t(e,n){if(e==null)return{};var f={},s=Object.keys(e),c,i;for(i=0;i<s.length;i++)c=s[i],!(n.indexOf(c)>=0)&&(f[c]=e[c]);return f}I.exports=t,I.exports.__esModule=!0,I.exports.default=I.exports},7829:function(I,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return f}});function n(s){var c,i,o="";if(typeof s=="string"||typeof s=="number")o+=s;else if(typeof s=="object")if(Array.isArray(s)){var m=s.length;for(c=0;c<m;c++)s[c]&&(i=n(s[c]))&&(o&&(o+=" "),o+=i)}else for(i in s)s[i]&&(o&&(o+=" "),o+=i);return o}function f(){for(var s,c,i=0,o="",m=arguments.length;i<m;i++)(s=arguments[i])&&(c=n(s))&&(o&&(o+=" "),o+=c);return o}t.default=f},64508:function(I,t,e){"use strict";e.d(t,{Y:function(){return c}});var n=e(53360),f=e(75601);const s=(i,o,m,x,h)=>{clearTimeout(x.current);const v=(0,f.y0)(i);o(v),m.current=v,h&&h({current:v})},c=({enter:i=!0,exit:o=!0,preEnter:m,preExit:x,timeout:h,initialEntered:v,mountOnEnter:u,unmountOnExit:d,onStateChange:l}={})=>{const[p,r]=(0,n.useState)(()=>(0,f.y0)(v?f.cn:(0,f.Ef)(u))),a=(0,n.useRef)(p),C=(0,n.useRef)(),[y,E]=(0,f.fj)(h),w=(0,n.useCallback)(()=>{const P=(0,f.XZ)(a.current._s,d);P&&s(P,r,a,C,l)},[l,d]),B=(0,n.useCallback)(P=>{const M=z=>{switch(s(z,r,a,C,l),z){case f.d0:y>=0&&(C.current=setTimeout(w,y));break;case f.Ix:E>=0&&(C.current=setTimeout(w,E));break;case f.iL:case f.iU:C.current=(0,f.Y3)(M,z);break}},F=a.current.isEnter;typeof P!="boolean"&&(P=!F),P?!F&&M(i?m?f.iL:f.d0:f.cn):F&&M(o?x?f.iU:f.Ix:(0,f.Ef)(d))},[w,l,i,o,m,x,y,E,d]);return[p,B,w]}},75601:function(I,t,e){"use strict";e.d(t,{Ef:function(){return v},Ix:function(){return i},XZ:function(){return u},Y3:function(){return l},cn:function(){return s},d0:function(){return f},fj:function(){return d},iL:function(){return n},iU:function(){return c},y0:function(){return h}});const n=0,f=1,s=2,c=3,i=4,o=5,m=6,x=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=p=>({_s:p,status:x[p],isEnter:p<c,isMounted:p!==m,isResolved:p===s||p>i}),v=p=>p?m:o,u=(p,r)=>{switch(p){case f:case n:return s;case i:case c:return v(r)}},d=p=>typeof p=="object"?[p.enter,p.exit]:[p,p],l=(p,r)=>setTimeout(()=>{isNaN(document.body.offsetTop)||p(r+1)},0)}}]);
}());