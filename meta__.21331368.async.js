!(function(){var sn=Object.defineProperty,ln=Object.defineProperties;var un=Object.getOwnPropertyDescriptors;var Ye=Object.getOwnPropertySymbols;var en=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable;var _e=(I,t,e)=>t in I?sn(I,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):I[t]=e,O=(I,t)=>{for(var e in t||(t={}))en.call(t,e)&&_e(I,e,t[e]);if(Ye)for(var e of Ye(t))nn.call(t,e)&&_e(I,e,t[e]);return I},ve=(I,t)=>ln(I,un(t));var Se=(I,t)=>{var e={};for(var n in I)en.call(I,n)&&t.indexOf(n)<0&&(e[n]=I[n]);if(I!=null&&Ye)for(var n of Ye(I))t.indexOf(n)<0&&nn.call(I,n)&&(e[n]=I[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{98042:function(I,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return Ie}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return c.D},useIsomorphicLayoutEffect:function(){return r.L},useMergeProps:function(){return a.S},useMergeState:function(){return C.R},usePrevious:function(){return y.D},useResizeObserverRect:function(){return E._}});var v={};e.r(v),e.d(v,{canUseDom:function(){return A.J},debounce:function(){return D.D},isArray:function(){return P.kJ},isEmptyObject:function(){return P.Qr},isFunction:function(){return P.mf},isNumber:function(){return P.hj},isObject:function(){return P.Kn},isString:function(){return P.HD},isUndefined:function(){return P.o8},omit:function(){return B.C},pick:function(){return j},throttle:function(){return $.P}});var s={};e.r(s),e.d(s,{default:function(){return S.Y},useTransition:function(){return S.Y},useTransitionMap:function(){return Z},useTransitionState:function(){return S.Y}});var p=e(90819),l=e.n(p),o=e(89933),m=e.n(o),x=e(53360),h=e.t(x,2),f=e(45990),d=e(58891),u=e(86752),i=e.t(u,2),c=e(37797),r=e(60164),a=e(7657),C=e(62222),y=e(45844),E=e(37828),A=e(34028),D=e(78831),P=e(80703),B=e(12598);function j(re,se){const fe={};return se.forEach(ee=>{ee in re&&(fe[ee]=re[ee])}),fe}var $=e(6890),X=e(9859),R=e(74889),M=e(7829),S=e(10735),b=e(90940);const z=(re,se,fe,ee,de,De)=>{clearTimeout(de);const U=(0,b.y0)(se),Ee=new Map(ee.current);Ee.set(re,U),fe(Ee),ee.current=Ee,De&&De({key:re,current:U})},Z=({allowMultiple:re,enter:se=!0,exit:fe=!0,preEnter:ee,preExit:de,timeout:De,initialEntered:U,mountOnEnter:Ee,unmountOnExit:Ne,onStateChange:ye}={})=>{const[ge,g]=(0,x.useState)(new Map),L=(0,x.useRef)(ge),T=(0,x.useRef)(new Map),[H,V]=(0,b.fj)(De),Q=(0,x.useCallback)((J,w)=>{const{initialEntered:k=U}=w||{},ne=k?b.cn:(0,b.Ef)(Ee);z(J,ne,g,L),T.current.set(J,{})},[U,Ee]),oe=(0,x.useCallback)(J=>{const w=new Map(L.current);return w.delete(J)?(g(w),L.current=w,T.current.delete(J),!0):!1},[]),ae=(0,x.useCallback)(J=>{const w=L.current.get(J);if(!w)return;const{timeoutId:k}=T.current.get(J),ne=(0,b.XZ)(w._s,Ne);ne&&z(J,ne,g,L,k,ye)},[ye,Ne]),W=(0,x.useCallback)((J,w)=>{const k=L.current.get(J);if(!k)return;const ne=T.current.get(J),xe=te=>{switch(z(J,te,g,L,ne.timeoutId,ye),te){case b.d0:H>=0&&(ne.timeoutId=setTimeout(()=>ae(J),H));break;case b.Ix:V>=0&&(ne.timeoutId=setTimeout(()=>ae(J),V));break;case b.iL:case b.iU:ne.timeoutId=(0,b.Y3)(xe,te);break}},he=k.isEnter;typeof w!="boolean"&&(w=!he),w?he||(xe(se?ee?b.iL:b.d0:b.cn),!re&&L.current.forEach((te,we)=>we!==J&&W(we,!1))):he&&xe(fe?de?b.iU:b.Ix:(0,b.Ef)(Ne))},[ye,ae,re,se,fe,ee,de,H,V,Ne]),me=(0,x.useCallback)(J=>{if(!(!re&&J!==!1))for(const w of L.current.keys())W(w,J)},[re,W]);return{stateMap:ge,toggle:W,toggleAll:me,endTransition:ae,setItem:Q,deleteItem:oe}};var K=e(42798),_=e(56144),G=e(29452),ce=e(86250),le=e(99677),F=e(81184),N=e.t(F,2),Ie={"sqi-web-src-common-demo-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,33178))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44085).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(54049).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":d,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":d,"react-dom":i,"@sqi-ui/hooks":n,"@sqi-ui/utils":v},renderOpts:{compile:function(){var re=m()(l()().mark(function fe(){var ee,de=arguments;return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,e.e(18).then(e.bind(e,73018));case 2:return U.abrupt("return",(ee=U.sent).default.apply(ee,de));case 3:case"end":return U.stop()}},fe)}));function se(){return re.apply(this,arguments)}return se}()}},"sqi-web-src-common-demo-css-motion-base":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,77741))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60448).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(17354).Z},"../CSSMotion.tsx":{type:"FILE",value:e(26245).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(92138).Z}},entry:"index.tsx"},context:{"./motion.css":X,"../CSSMotion.tsx":R,"../config-provider/context.ts":K,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":X,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":R,clsx:M,"react-transition-state":s,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":K},renderOpts:{compile:function(){var re=m()(l()().mark(function fe(){var ee,de=arguments;return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,e.e(18).then(e.bind(e,73018));case 2:return U.abrupt("return",(ee=U.sent).default.apply(ee,de));case 3:case"end":return U.stop()}},fe)}));function se(){return re.apply(this,arguments)}return se}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,98994))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91112).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(17354).Z},"../CSSMotion.tsx":{type:"FILE",value:e(26245).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(92138).Z}},entry:"index.tsx"},context:{"./motion.css":X,"../CSSMotion.tsx":R,"../config-provider/context.ts":K,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":X,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":R,clsx:M,"react-transition-state":s,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":K},renderOpts:{compile:function(){var re=m()(l()().mark(function fe(){var ee,de=arguments;return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,e.e(18).then(e.bind(e,73018));case 2:return U.abrupt("return",(ee=U.sent).default.apply(ee,de));case 3:case"end":return U.stop()}},fe)}));function se(){return re.apply(this,arguments)}return se}()}},"sqi-web-src-common-demo-css-motion-portal":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,242))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(6600).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(54049).Z},"../CSSMotion.tsx":{type:"FILE",value:e(26245).Z},"./motion.css":{type:"FILE",value:e(17354).Z},"react-dom":{type:"NPM",value:"19.1.1"},clsx:{type:"NPM",value:"2.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(92138).Z}},entry:"index.tsx"},context:{"../Portal.tsx":d,"../CSSMotion.tsx":R,"./motion.css":X,"../config-provider/context.ts":K,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":d,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":R,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":X,"react-dom":i,clsx:M,"@sqi-ui/hooks":n,"react-transition-state":s,"@sqi-ui/utils":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":K},renderOpts:{compile:function(){var re=m()(l()().mark(function fe(){var ee,de=arguments;return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,e.e(18).then(e.bind(e,73018));case 2:return U.abrupt("return",(ee=U.sent).default.apply(ee,de));case 3:case"end":return U.stop()}},fe)}));function se(){return re.apply(this,arguments)}return se}()}},"sqi-web-src-common-demo-resize-observer":{component:x.memo(x.lazy(function(){return e.e(433).then(e.bind(e,6682))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10853).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserverRect.tsx":{type:"FILE",value:e(74234).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/toArray.ts":{type:"FILE",value:e(26008).Z},"../_util/ref.ts":{type:"FILE",value:e(1850).Z},"../_util/dom.ts":{type:"FILE",value:e(50306).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserverRect.tsx":_,"../_util/toArray.ts":G,"../_util/ref.ts":ce,"../_util/dom.ts":le,react:h,"@sqi-ui/web":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserverRect.tsx":_,"@sqi-ui/utils":v,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":G,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":ce,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":le,"react-is":N},renderOpts:{compile:function(){var re=m()(l()().mark(function fe(){var ee,de=arguments;return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,e.e(18).then(e.bind(e,73018));case 2:return U.abrupt("return",(ee=U.sent).default.apply(ee,de));case 3:case"end":return U.stop()}},fe)}));function se(){return re.apply(this,arguments)}return se}()}}}},71953:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,22206))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94994).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,93e3))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73591).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41339))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40582).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},62048:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x=e(5629),h={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95248))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42760).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72975))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44571).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89682))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39844).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,53437))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71007).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26449))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12151).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},88034:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x=e(53761),h={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,84861))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29295).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,76595))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18809).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75063))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73667).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,78531))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(94955).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,48454))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47546).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(1492).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,79136))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16905).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(1492).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},51799:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,28596))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(72634).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,63530))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19085).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},53792:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90694))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(81156).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,14665))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(79151).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,43329))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93715).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},72010:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x=e(9616),h={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,31565))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98968).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,67703))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25387).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83784))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(63835).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95807))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(35585).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1643))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2688).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72835))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95633).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92121))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55946).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90823))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17213).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(19514).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},56845:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(5629),x=e(45990),h={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,45498))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25690).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m,"@sqi-ui/web":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11750))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80199).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m,"@sqi-ui/web":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,70793))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36758).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},33629:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x=e(5629),h={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83846))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77049).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,65906))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2404).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,48701))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86542).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,88800))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91623).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,46498))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49683).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29491))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(5943).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,84967))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(6661).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,68715))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51743).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,85030))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64581).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,23783))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54664).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},54904:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x={"sqi-web-src-popup-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,40128))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77110).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-trigger-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90824))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-trigger-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16227).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-placement":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95156))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-placement",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55201).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-shift":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,13268))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-shift",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(62882).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,4345))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91134).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29356))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67548).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-popup-demo-rect-observer":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,39295))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-rect-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(84553).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},64149:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x=e(3522),h={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,77390))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70114).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,72759))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19853).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,74783))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95293).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,85052))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98279).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,54525))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7201).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42666))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(61526).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(25471).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,17667))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33356).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(25471).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},19262:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,97715))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(98621).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,34586))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19314).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,67155))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33796).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,61588))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(35580).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,14941))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70391).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},47417:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x=e(5629),h={"sqi-web-src-switch-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11185))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17387).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,87173))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36322).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,58386))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55588).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}},"sqi-web-src-switch-demo-custom-icon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8005))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(97052).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"@sqi-ui/icons":x},renderOpts:{compile:function(){var f=l()(s()().mark(function u(){var i,c=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(18).then(e.bind(e,73018));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,c));case 3:case"end":return a.stop()}},u)}));function d(){return f.apply(this,arguments)}return d}()}}}},5310:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return x}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x={"sqi-web-src-tooltip-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,64145))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51272).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-theme":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,5018))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-theme",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52920).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-trigger-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11231))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-trigger-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51820).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-placement":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,41375))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-placement",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(530).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-shift":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,20810))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-shift",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82684).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33682))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80793).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}},"sqi-web-src-tooltip-demo-rect-observer":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,62937))})),asset:{type:"BLOCK",id:"sqi-web-src-tooltip-demo-rect-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57697).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":m},renderOpts:{compile:function(){var h=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(18).then(e.bind(e,73018));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},d)}));function f(){return h.apply(this,arguments)}return f}()}}}},82842:function(I,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return d}});var v=e(90819),s=e.n(v),p=e(89933),l=e.n(p),o=e(53360),m=e(45990),x=e(33051),h=e(45664),f=e(42294),d={"sqi-web-src-trigger-demo-popper":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,39033))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-popper",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21449).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(91875).Z},"./_wrapper.tsx":{type:"FILE",value:e(16158).Z}},entry:"index.tsx"},context:{"./demo.module.css":x,"./_wrapper.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h},renderOpts:{compile:function(){var u=l()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(18).then(e.bind(e,73018));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},c)}));function i(){return u.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-basic-trigger":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,46741))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-basic-trigger",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47696).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(61358).Z},"./_wrapper.tsx":{type:"FILE",value:e(16158).Z},"./demo.module.css":{type:"FILE",value:e(91875).Z}},entry:"index.tsx"},context:{"./motion.css":f,"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":f,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var u=l()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(18).then(e.bind(e,73018));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},c)}));function i(){return u.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-focus-outside-click":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,68015))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-focus-outside-click",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38474).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(16158).Z},"./demo.module.css":{type:"FILE",value:e(91875).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var u=l()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(18).then(e.bind(e,73018));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},c)}));function i(){return u.apply(this,arguments)}return i}()}},"sqi-web-src-trigger-demo-destroy-exit":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,24223))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-destroy-exit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49189).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(16158).Z},"./demo.module.css":{type:"FILE",value:e(91875).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":x,react:n||(n=e.t(o,2)),"@sqi-ui/web":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":x},renderOpts:{compile:function(){var u=l()(s()().mark(function c(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(18).then(e.bind(e,73018));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},c)}));function i(){return u.apply(this,arguments)}return i}()}}}},74889:function(I,t,e){"use strict";e.r(t);var n=e(73193),v=e.n(n),s=e(10154),p=e.n(s),l=e(45332),o=e.n(l),m=e(84176),x=e.n(m),h=e(53360),f=e(7829),d=e(10735),u=e(80703),i=e(42798),c=["children","name","prefixCls"],r=(0,h.forwardRef)(function(a,C){var y=(0,h.useContext)(i.ConfigContext),E=a.children,A=a.name,D=a.prefixCls,P=x()(a,c),B=(0,d.Y)(P),j=o()(B,2),$=j[0],X=j[1],R=(0,h.isValidElement)(E);(0,h.useImperativeHandle)(C,function(){return{toggle:X}});var M="".concat(D||y.prefixCls).concat(A?"-".concat(A):""),S=(0,f.default)(["".concat(M,"-motion")],p()({},"".concat(M,"-motion-").concat($.status),$.status));return(0,u.mf)(E)?$.isMounted?E(v()(v()({},$),{},{className:S,toggle:X})):null:R?$.isMounted?(0,h.cloneElement)(E,{className:(0,f.default)(E.props.className,S)}):null:E});r.displayName="CSSMotion",t.default=r},58891:function(I,t,e){"use strict";e.r(t);var n=e(45332),v=e.n(n),s=e(53360),p=e(86752),l=e(60164),o=e(34028),m=e(80703),x=(0,o.J)();function h(d){return x?(0,m.mf)(d)?d():document.body:null}var f=(0,s.forwardRef)(function(d,u){var i=d.getContainer,c=d.prefixCls,r=d.children,a=d.open,C=a===void 0?!0:a,y=d.rootStyle,E=(0,s.useState)(null),A=v()(E,2),D=A[0],P=A[1],B=(0,s.useState)(null),j=v()(B,2),$=j[0],X=j[1],R=$||document.body;(0,s.useEffect)(function(){var S=h(i);X(S||null)},[i]);var M=function(){if(!x||D)return null;var b=document.createElement("div");c&&(b.className="".concat(c,"-portal-wrapper")),y&&Object.assign(b.style,y),b.setAttribute("data-portal","true"),P(b)};return(0,l.L)(function(){x&&(C?M():P(null))},[C]),s.useImperativeHandle(u,function(){return D},[D]),(0,l.L)(function(){if(!(!x||!D)){var S=function(){return!D.parentNode&&R.appendChild(D)},b=function(){var Z;return(Z=D.parentNode)===null||Z===void 0?void 0:Z.removeChild(D)};return C?S():b(),function(){b()}}},[C,D]),C&&r&&D?(0,p.createPortal)(r,D):null});f.displayName="Portal",t.default=f},56144:function(I,t,e){"use strict";e.r(t);var n=e(45332),v=e.n(n),s=e(53360),p=e(6890),l=e(37828),o=e(29452),m=e(99677),x=e(86250),h=(0,s.forwardRef)(function(f,d){var u=f.children,i=f.disabled,c=f.throttleMs,r=c===void 0?100:c,a=f.onResize,C=(0,s.isValidElement)(u),y=u?(0,o.toArray)(u):[],E=u?(0,m.getReactNodeRef)(u):null,A=(0,s.useRef)(null),D=(0,s.useState)(null),P=v()(D,2),B=P[0],j=P[1],$=(0,x.useComposeRef)(E,A,function(R){j((0,m.getDOM)(R))});(0,s.useImperativeHandle)(d,function(){return(0,m.getRefDom)(A)});var X=a?(0,p.P)(a,r):void 0;return(0,l._)(B,X,!i),C?(0,s.cloneElement)(u,{ref:$}):u});h.displayName="ResizeObserverRect",t.default=h},99677:function(I,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return l},getReactNodeRef:function(){return m},getRefDom:function(){return o},isDOM:function(){return p}});var n=e(89957),v=e.n(n),s=e(53360);function p(x){return x instanceof HTMLElement||x instanceof SVGElement}function l(x){return x&&v()(x)==="object"&&p(x.currentElement)?x.currentElement:p(x)?x:null}function o(x){if(x)return x.current&&v()(x.current)==="object"&&"currentElement"in x.current?x.current.currentElement:x.current}function m(x){var h=x&&(0,s.isValidElement)(x);if(!h)return null;if(parseInt(s.version,10)>=19){var f;return((f=x.props)===null||f===void 0?void 0:f.ref)||null}return x.ref}},86250:function(I,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return l},fillRef:function(){return o},supportNodeRef:function(){return f},supportRef:function(){return x},useComposeRef:function(){return m}});var n=e(37797),v=e(80703),s=e(53360),p=e(11607),l=function(){for(var u=arguments.length,i=new Array(u),c=0;c<u;c++)i[c]=arguments[c];var r=i.filter(Boolean);return r.length<=1?r[0]:function(a){i.forEach(function(C){o(C,a)})}},o=function(u,i){(0,v.mf)(u)?u(i):(0,v.Kn)(u)&&"current"in u&&(u.current=i)},m=function(){for(var u=arguments.length,i=new Array(u),c=0;c<u;c++)i[c]=arguments[c];return(0,n.D)(function(){return l.apply(void 0,i)},i,function(r,a){return r.length!==a.length||r.every(function(C,y){return C!==a[y]})})},x=function(u){var i,c;if(!u)return!1;var r=parseInt(s.version,10);if(h(u)&&r>=19)return!0;var a=(0,p.isMemo)(u)?u.type.type:u.type;return!(typeof a=="function"&&!((i=a.prototype)!==null&&i!==void 0&&i.render)&&a.$$typeof!==p.ForwardRef||typeof u=="function"&&!((c=u.prototype)!==null&&c!==void 0&&c.render)&&u.$$typeof!==p.ForwardRef)};function h(d){return(0,s.isValidElement)(d)&&!(0,p.isFragment)(d)}var f=function(u){return h(u)&&x(u)}},29452:function(I,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return s}});var n=e(53360),v=e(11607);function s(p){var l=[];return n.Children.toArray(p).forEach(function(o){o!=null&&(Array.isArray(o)?l=l.concat(s(o)):(0,n.isValidElement)(o)&&(0,v.isFragment)(o)&&o.props?l=l.concat(s(o.props.children)):l.push(o))}),l}},53761:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),v=e(69787);function s(p){var l=p.item,o=p.checked,m={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,v.jsxs)("div",{style:m,children:[(0,v.jsx)("div",{style:x}),(0,v.jsx)("strong",{children:l}),(0,v.jsx)("div",{children:"this is a checkbox"})]})}},42798:function(I,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return s},defaultConfigProps:function(){return v}});var n=e(53360),v={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(v)},9616:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),v=e(69787);function s(p){var l=p.colorPalette,o=l===void 0?6:l,m=p.children,x=p.height;return(0,v.jsx)("div",{style:{height:x||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:m})}},3522:function(I,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),v=e(69787);function s(p){var l=p.item,o=p.checked,m={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},x={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,v.jsxs)("div",{style:m,children:[(0,v.jsx)("div",{style:x}),(0,v.jsx)("strong",{children:l}),(0,v.jsx)("div",{children:"this is a radio"})]})}},45664:function(I,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return p}});var n=e(53360),v=e(33051),s=e(69787),p=(0,n.forwardRef)(function(l,o){var m=l.size,x=l.backgroundColor,h=l.children;return(0,s.jsx)("div",{ref:o,className:v.default.box,style:{width:m+"px",height:m+"px",backgroundColor:x},children:h})});p.displayName="Component"},9859:function(I,t,e){"use strict";e.r(t)},33051:function(I,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai"}},42294:function(I,t,e){"use strict";e.r(t)},44170:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4E3B\u52A8\u8BBE\u7F6E\u76F8\u5173 css \u9690\u85CF\u7EC4\u4EF6",paraId:4},{value:"\u6B64\u5904\u7684 ",paraId:5,tocIndex:7},{value:"ResizeObserver",paraId:5,tocIndex:7},{value:" \u4EC5\u5173\u6CE8\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316",paraId:5,tocIndex:7}]},5427:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},43125:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"loadingIcon",paraId:3,tocIndex:6},{value:"loading \u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},984:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},57063:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},27348:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},35048:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},52791:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},72423:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u63CF\u8FF0",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"type",paraId:10,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:10,tocIndex:12},{value:"MDN",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"text",paraId:10,tocIndex:12},{value:"size",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:10,tocIndex:12},{value:"ConfigSize",paraId:10,tocIndex:12},{value:"md",paraId:10,tocIndex:12},{value:"status",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:10,tocIndex:12},{value:"success",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"warning",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"error",paraId:10,tocIndex:12},{value:"tips",paraId:10,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"allowClear",paraId:10,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"align",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"center",paraId:10,tocIndex:12},{value:" |",paraId:10,tocIndex:12},{value:"right",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"variant",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"borderless",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"underline",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"addonBefore",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"addonAfter",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"prefix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"suffix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"visibilityToggle",paraId:10,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"VisibilityToggle",paraId:11,tocIndex:12},{value:"maxLength",paraId:10,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:10,tocIndex:12},{value:"number",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"MaxLength",paraId:12,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:10,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:13,tocIndex:13},{value:"\u63CF\u8FF0",paraId:13,tocIndex:13},{value:"\u7C7B\u578B",paraId:13,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"visible",paraId:13,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:13,tocIndex:13},{value:"boolean",paraId:13,tocIndex:13},{value:"renderIcon",paraId:13,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:13,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:13,tocIndex:13},{value:"onVisibleChange",paraId:13,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:13,tocIndex:13},{value:"(visible: boolean) => void",paraId:13,tocIndex:13},{value:"\u5C5E\u6027",paraId:14,tocIndex:14},{value:"\u63CF\u8FF0",paraId:14,tocIndex:14},{value:"\u7C7B\u578B",paraId:14,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:14},{value:"length",paraId:14,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:14,tocIndex:14},{value:"number",paraId:14,tocIndex:14},{value:"showLimit",paraId:14,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14},{value:"true",paraId:14,tocIndex:14},{value:"errorOnly",paraId:14,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14}]},81487:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6838\u5FC3\u529F\u80FD\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Trigger",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u5E76\u7EE7\u627F\u5176\u5927\u90E8\u5206\u5C5E\u6027\uFF0C\u4F46\u662F\u4F1A\u5BF9 Trigger \u7684\u90E8\u5206\u9ED8\u8BA4\u503C\u8FDB\u884C\u8986\u76D6",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u5C11\u90E8\u5206\u6837\u5F0F\uFF0C\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\u7A0B\u5EA6\u8F83\u9AD8\u7684\u5F39\u51FA\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u8FDB\u4E00\u6B65\u6269\u5C55",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E ",paraId:2,tocIndex:3},{value:"placement",paraId:2,tocIndex:3},{value:" \u6307\u5B9A Popup \u5F39\u51FA\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"showArrow",paraId:2,tocIndex:3},{value:" \u6765\u9009\u62E9\u662F\u5426\u663E\u793A\u7BAD\u5934",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8FB9\u7F18\u68C0\u6D4B\u504F\u79FB\u4EE5\u53CA\u81EA\u52A8\u7FFB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6216\u8005\u60F3\u51CF\u5C11\u8BA1\u7B97\u5E26\u6765\u7684\u5F00\u9500\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:3,tocIndex:4},{value:"enableFlip=false",paraId:3,tocIndex:4},{value:" \u6216 ",paraId:3,tocIndex:4},{value:"enableShift=false",paraId:3,tocIndex:4},{value:" \u6765\u9009\u62E9\u6027\u5173\u95ED\u4E0D\u9700\u8981\u7684\u529F\u80FD",paraId:3,tocIndex:4},{value:"\u7981\u7528\u5F39\u51FA\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u5F39\u51FA\u5C42\u76F8\u5173\u7684\u884C\u4E3A",paraId:4,tocIndex:6},{value:"\u5F53\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u68C0\u6D4B\uFF0C\u5E76\u91CD\u65B0\u66F4\u65B0\u5F39\u51FA\u5C42\u7684\u4F4D\u7F6E",paraId:5,tocIndex:7},{value:"\u5C5E\u6027",paraId:6,tocIndex:9},{value:"\u63CF\u8FF0",paraId:6,tocIndex:9},{value:"\u7C7B\u578B",paraId:6,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:9},{value:"children",paraId:6,tocIndex:9},{value:"\u89E6\u53D1\u5143\u7D20",paraId:6,tocIndex:9},{value:"ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"content",paraId:6,tocIndex:9},{value:"Popup \u5185\u5BB9",paraId:6,tocIndex:9},{value:"ReactNode",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"showArrow",paraId:6,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A\u7BAD\u5934",paraId:6,tocIndex:9},{value:"boolean",paraId:6,tocIndex:9},{value:"true",paraId:6,tocIndex:9},{value:"destroyOnClose",paraId:6,tocIndex:9},{value:"\u9690\u85CF\u65F6\u662F\u5426\u9500\u6BC1",paraId:6,tocIndex:9},{value:"boolean",paraId:6,tocIndex:9},{value:"true",paraId:6,tocIndex:9},{value:"offset",paraId:6,tocIndex:9},{value:"\u5143\u7D20\u76F8\u5BF9\u4E8E\u89E6\u53D1\u5143\u7D20\u7684\u8DDD\u79BB",paraId:6,tocIndex:9},{value:"number",paraId:6,tocIndex:9},{value:"6",paraId:6,tocIndex:9},{value:"rootClassName",paraId:6,tocIndex:9},{value:"\u6839\u8282\u70B9 className",paraId:6,tocIndex:9},{value:"string",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"styles",paraId:6,tocIndex:9},{value:"style \u8BED\u6CD5\u7CD6",paraId:6,tocIndex:9},{value:"{ content?: CSSProperties; arrow?: CSSProperties;}",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"classNames",paraId:6,tocIndex:9},{value:"className \u8BED\u6CD5\u7CD6",paraId:6,tocIndex:9},{value:"{ content?: string; arrow?: string;}",paraId:6,tocIndex:9},{value:"-",paraId:6,tocIndex:9},{value:"\u4EE5\u4E0B\u5C5E\u6027\u7686\u7EE7\u627F\u81EA Trigger \u7EC4\u4EF6",paraId:7,tocIndex:9},{value:"\u5C5E\u6027",paraId:8,tocIndex:9},{value:"\u63CF\u8FF0",paraId:8,tocIndex:9},{value:"\u7C7B\u578B",paraId:8,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:9},{value:"direction",paraId:8,tocIndex:9},{value:"popper \u4F4D\u7F6E",paraId:8,tocIndex:9},{value:"TriggerPlacement",paraId:8,tocIndex:9},{value:"top",paraId:8,tocIndex:9},{value:"enableFlip",paraId:8,tocIndex:9},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"enableShift",paraId:8,tocIndex:9},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"zIndex",paraId:8,tocIndex:9},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"1",paraId:8,tocIndex:9},{value:"getContainer",paraId:8,tocIndex:9},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:8,tocIndex:9},{value:"() => HTMLElement",paraId:8,tocIndex:9},{value:"document.body",paraId:8,tocIndex:9},{value:"trigger",paraId:8,tocIndex:9},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:8,tocIndex:9},{value:"TriggerType",paraId:8,tocIndex:9},{value:"hover",paraId:8,tocIndex:9},{value:"disabled",paraId:8,tocIndex:9},{value:"\u7981\u7528\u884C\u4E3A",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"delay",paraId:8,tocIndex:9},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:8,tocIndex:9},{value:"number",paraId:8,tocIndex:9},{value:"100",paraId:8,tocIndex:9},{value:"outFocusToClose",paraId:8,tocIndex:9},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"true",paraId:8,tocIndex:9},{value:"defaultVisible",paraId:8,tocIndex:9},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"visible",paraId:8,tocIndex:9},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"onVisibleChange",paraId:8,tocIndex:9},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:8,tocIndex:9},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9}]},15224:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},31337:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u63CF\u8FF0",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"size",paraId:1,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:1,tocIndex:6},{value:"SizeType",paraId:2,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"[SizeType, SizeType]",paraId:1,tocIndex:6},{value:"direction",paraId:1,tocIndex:6},{value:"\u65B9\u5411",paraId:1,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:1,tocIndex:6},{value:"'horizontal'",paraId:1,tocIndex:6},{value:"align",paraId:1,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:1,tocIndex:6},{value:"wrap",paraId:1,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"false",paraId:1,tocIndex:6},{value:"split",paraId:1,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u63CF\u8FF0",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"SizeType",paraId:3,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:3,tocIndex:7},{value:"ConfigSize",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"undefined",paraId:3,tocIndex:7}]},51056:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"defaultChecked",paraId:0,tocIndex:5},{value:"\u975E\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"checked",paraId:0,tocIndex:5},{value:"\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"disabled",paraId:0,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"size",paraId:0,tocIndex:5},{value:"\u5C3A\u5BF8",paraId:0,tocIndex:5},{value:"sm",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"lg",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"label",paraId:0,tocIndex:5},{value:"\u6587\u672C",paraId:0,tocIndex:5},{value:"[checked?: ReactNode, unchecked?: ReactNode]",paraId:0,tocIndex:5},{value:"loading",paraId:0,tocIndex:5},{value:"loading \u72B6\u6001",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"loadingIcon",paraId:0,tocIndex:5},{value:"\u81EA\u5B9A\u4E49 loading \u56FE\u6807",paraId:0,tocIndex:5},{value:"ReactNode",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5},{value:"onClick",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1(\u7981\u7528\u72B6\u6001\u65E0\u6548)",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5}]},79670:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u8BBE\u7F6E ",paraId:0,tocIndex:4},{value:"placement",paraId:0,tocIndex:4},{value:" \u6307\u5B9A Popup \u5F39\u51FA\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",paraId:0,tocIndex:4},{value:"showArrow",paraId:0,tocIndex:4},{value:" \u6765\u9009\u62E9\u662F\u5426\u663E\u793A\u7BAD\u5934",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8FB9\u7F18\u68C0\u6D4B\u504F\u79FB\u4EE5\u53CA\u81EA\u52A8\u7FFB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6216\u8005\u60F3\u51CF\u5C11\u8BA1\u7B97\u5E26\u6765\u7684\u5F00\u9500\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:1,tocIndex:5},{value:"enableFlip=false",paraId:1,tocIndex:5},{value:" \u6216 ",paraId:1,tocIndex:5},{value:"enableShift=false",paraId:1,tocIndex:5},{value:" \u6765\u9009\u62E9\u6027\u5173\u95ED\u4E0D\u9700\u8981\u7684\u529F\u80FD",paraId:1,tocIndex:5},{value:"\u7981\u7528\u5F39\u51FA\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u5F39\u51FA\u5C42\u76F8\u5173\u7684\u884C\u4E3A",paraId:2,tocIndex:6},{value:"\u5F53\u76EE\u6807\u5143\u7D20\u5C3A\u5BF8\u53D8\u5316\u65F6\u4F1A\u81EA\u52A8\u68C0\u6D4B\uFF0C\u5E76\u91CD\u65B0\u66F4\u65B0\u5F39\u51FA\u5C42\u7684\u4F4D\u7F6E",paraId:3,tocIndex:7},{value:"\u5176\u4F59\u5C5E\u6027\u7686\u7EE7\u627F\u81EA Popup \u7EC4\u4EF6",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:9},{value:"\u63CF\u8FF0",paraId:5,tocIndex:9},{value:"\u7C7B\u578B",paraId:5,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:9},{value:"theme",paraId:5,tocIndex:9},{value:"\u4E3B\u9898",paraId:5,tocIndex:9},{value:"'default' | 'primary' | 'success' | 'danger' | 'warning' | 'light'",paraId:5,tocIndex:9},{value:"default",paraId:5,tocIndex:9}]},52412:function(I,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 Trigger \u7EC4\u4EF6\u3002\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u4E14\u4E0D\u643A\u5E26\u4EFB\u4F55\u6837\u5F0F\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u63A8\u8350\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u6765\u66FF\u4EE3 ",paraId:1,tocIndex:0},{value:"Trigger",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u517C\u5BB9\u5EA6\u66F4\u597D\u7684\u96C6\u6210\u5E76\u5BF9\u6837\u5F0F\u8FDB\u884C\u7F8E\u5316\u3002\u66F4\u5B8C\u6574\u7684\u4F7F\u7528\u793A\u4F8B\u8BF7\u67E5\u770B ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popper.js \u7684\u57FA\u7840\u529F\u80FD\uFF08\u903B\u8F91\u5B9E\u73B0\u5E76\u4E0D\u4F18\u96C5\uFF0C\u4E14\u8BF8\u591A\u60C5\u51B5\u672A\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:2,tocIndex:1},{value:"table th tr",paraId:2,tocIndex:1},{value:" \u4E0B\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0Ccss ",paraId:2,tocIndex:1},{value:"will-change transform",paraId:2,tocIndex:1},{value:" \u7B49\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF09",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u91C7\u53D6\u628A\u7BAD\u5934\u76F8\u5BF9\u4E8E popper \u5B9A\u4F4D\uFF0C\u8FDB\u884C\u5C0F\u8303\u56F4\u504F\u79FB\u53EF\u4EE5\u51CF\u5C11\u975E\u5E38\u591A\u903B\u8F91\u4EE3\u7801",paraId:3,tocIndex:1},{value:"\u540E\u7EED\u53EF\u80FD\u4F1A\u5BF9\u5B9A\u4F4D\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C\u6709\u80FD\u529B\u91CD\u5199\u7684\u8BDD\uFF0CI am very vegetable :)",paraId:4,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:5},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"top",paraId:6},{value:" \u548C ",paraId:6},{value:"bottom",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 y \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C",paraId:6},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"left",paraId:6},{value:" \u548C ",paraId:6},{value:"right",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 x \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C\u3002",paraId:6},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popper \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08\u4E5F\u4E0D\u662F\u8BEF\u5DEE\uFF0C\u800C\u662F\u6B64\u65F6 popper \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:7},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:8,tocIndex:2},{value:"transform",paraId:8,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:8,tocIndex:2},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53 popper \u5173\u95ED\u65F6\uFF0C\u76F8\u5173 dom \u4F1A\u88AB\u9690\u85CF\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",paraId:9,tocIndex:4},{value:"motion.unmountOnExit",paraId:9,tocIndex:4},{value:" \u4E3A true \u53EF\u4EE5\u5728\u5173\u95ED\u65F6\u9500\u6BC1 dom",paraId:9,tocIndex:4},{value:"\u5C5E\u6027",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:6},{value:"className",paraId:10,tocIndex:6},{value:"popper \u7684\u6839\u5143\u7D20 className",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"children",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u7684\u76EE\u6807\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"popper",paraId:10,tocIndex:6},{value:"\u60AC\u6D6E\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"arrow",paraId:10,tocIndex:6},{value:"\u7BAD\u5934\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"motion",paraId:10,tocIndex:6},{value:"\u52A8\u753B props \u7EE7\u627F\u81EA ",paraId:10,tocIndex:6},{value:"react-transition-state",paraId:10,tocIndex:6},{value:"Omit<CSSMotionProps, 'children'>",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"direction",paraId:10,tocIndex:6},{value:"popper \u4F4D\u7F6E",paraId:10,tocIndex:6},{value:"TriggerPlacement",paraId:10,tocIndex:6},{value:"bottom",paraId:10,tocIndex:6},{value:"enableFlip",paraId:10,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"enableShift",paraId:10,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"offset",paraId:10,tocIndex:6},{value:"popper \u504F\u79FB\u91CF",paraId:10,tocIndex:6},{value:"number | { x: number; y: number }",paraId:10,tocIndex:6},{value:"0",paraId:10,tocIndex:6},{value:"zIndex",paraId:10,tocIndex:6},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"1",paraId:10,tocIndex:6},{value:"getContainer",paraId:10,tocIndex:6},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:10,tocIndex:6},{value:"() => HTMLElement",paraId:10,tocIndex:6},{value:"document.body",paraId:10,tocIndex:6},{value:"trigger",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:10,tocIndex:6},{value:"TriggerType",paraId:10,tocIndex:6},{value:'"hover"',paraId:10,tocIndex:6},{value:"disabled",paraId:10,tocIndex:6},{value:"\u7981\u7528\u884C\u4E3A",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"delay",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"100",paraId:10,tocIndex:6},{value:"outFocusToClose",paraId:10,tocIndex:6},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"clickOutsideClose",paraId:10,tocIndex:6},{value:"\u70B9\u51FB\u5916\u90E8\u662F\u5426\u53EF\u5173\u95ED",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"defaultVisible",paraId:10,tocIndex:6},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"visible",paraId:10,tocIndex:6},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"onVisibleChange",paraId:10,tocIndex:6},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:10,tocIndex:6},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"\u5171 12 \u4E2A\u65B9\u4F4D",paraId:11,tocIndex:7},{value:"top",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"top-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"top-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left-end",paraId:12,tocIndex:7},{value:"\u5BF9\u5E94 eventListener \u7684\u4E8B\u4EF6\u540D\u79F0",paraId:13,tocIndex:8},{value:"hover",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"click",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"focus",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"context-menu",paraId:14,tocIndex:8}]},26245:function(I,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
   * @default 100
   */
  throttleMs?: number;
}

const ResizeObserverRect = forwardRef<HTMLElement, ResizeObserverRectProps>((props, ref) => {
  const { children, disabled, throttleMs = 100, onResize } = props;

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
`},11607:function(I,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),o=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),u=Symbol.for("react.view_transition"),i=Symbol.for("react.client.reference");function c(r){if(typeof r=="object"&&r!==null){var a=r.$$typeof;switch(a){case e:switch(r=r.type,r){case v:case p:case s:case x:case h:case u:return r;default:switch(r=r&&r.$$typeof,r){case o:case m:case d:case f:return r;case l:return r;default:return a}}case n:return a}}}t.ContextConsumer=l,t.ContextProvider=o,t.Element=e,t.ForwardRef=m,t.Fragment=v,t.Lazy=d,t.Memo=f,t.Portal=n,t.Profiler=p,t.StrictMode=s,t.Suspense=x,t.SuspenseList=h,t.isContextConsumer=function(r){return c(r)===l},t.isContextProvider=function(r){return c(r)===o},t.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===e},t.isForwardRef=function(r){return c(r)===m},t.isFragment=function(r){return c(r)===v},t.isLazy=function(r){return c(r)===d},t.isMemo=function(r){return c(r)===f},t.isPortal=function(r){return c(r)===n},t.isProfiler=function(r){return c(r)===p},t.isStrictMode=function(r){return c(r)===s},t.isSuspense=function(r){return c(r)===x},t.isSuspenseList=function(r){return c(r)===h},t.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===v||r===p||r===s||r===x||r===h||typeof r=="object"&&r!==null&&(r.$$typeof===d||r.$$typeof===f||r.$$typeof===o||r.$$typeof===l||r.$$typeof===m||r.$$typeof===i||r.getModuleId!==void 0)},t.typeOf=c},81184:function(I,t,e){"use strict";I.exports=e(11607)},37797:function(I,t,e){"use strict";e.d(t,{D:function(){return v}});var n=e(53360);function v(s,p,l){const o=(0,n.useRef)({});return(!("value"in o.current)||l(o.current.condition,p))&&(o.current.value=s(),o.current.condition=p),o.current.value}},60164:function(I,t,e){"use strict";e.d(t,{L:function(){return p}});var n=e(53360),v=e(34028);const p=(0,v.J)()?n.useLayoutEffect:n.useEffect},7657:function(I,t,e){"use strict";e.d(t,{S:function(){return v}});var n=e(53360);function v(s,p={},l={}){return(0,n.useMemo)(()=>{const o=O(O({},p),l),m=O({},s);for(const x in o)m[x]===void 0&&(m[x]=o[x]);return m},[s,p,l])}},62222:function(I,t,e){"use strict";e.d(t,{R:function(){return p}});var n=e(53360),v=e(80703),s=e(45844);function p(l,o){const{defaultValue:m,value:x,onChange:h}=o||{},[f,d]=(0,n.useState)(()=>(0,v.o8)(x)?(0,v.o8)(m)?(0,v.mf)(l)?l():l:(0,v.mf)(m)?m():m:x),u=(0,s.D)(x),i=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(i.current){i.current=!1;return}(0,v.o8)(x)&&u!==x&&d(x)},[x]);const c=(0,v.o8)(x)?f:x,r=(0,n.useCallback)(a=>{const C=(0,v.mf)(a)?a(c):a;(0,v.o8)(x)&&d(C),!Object.is(C,c)&&(h==null||h(C))},[x,c,h]);return[c,r]}},45844:function(I,t,e){"use strict";e.d(t,{D:function(){return v}});var n=e(53360);function v(s){const p=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{p.current=s},[s]),p.current}},37828:function(I,t,e){"use strict";e.d(t,{_:function(){return o}});var n=e(53360),v=e(20759),s=e(34028),p=e(60164);const l=window.ResizeObserver||v.Z;function o(m,x,h=!0){const f=(0,n.useRef)(null);f.current=x;const d=(0,n.useRef)({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1});(0,p.L)(()=>{let u=null;if(!h||!(0,s.J)()||!m)return;const i=c=>{var A;const r=c[0],{width:a,height:C}=r.contentRect,y=m.offsetWidth,E=m.offsetHeight;(d.current.width!==a||d.current.height!==C||d.current.offsetWidth!==y||d.current.offsetHeight!==E)&&(d.current={width:a,height:C,offsetWidth:y,offsetHeight:E},(A=f.current)==null||A.call(f,d.current,r))};return u=new l(i),u.observe(m),()=>{u&&m&&(u.unobserve(m),u.disconnect(),u=null)}},[m,h])}},31136:function(I,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360);const s=(0,n.createContext)({})},37907:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(7829),s=e(31136);const p=(0,n.forwardRef)((o,m)=>{const y=o,{svg:x,type:h,spin:f,rotate:d,className:u,style:i}=y,c=Se(y,["svg","type","spin","rotate","className","style"]),{prefixCls:r="sqi"}=(0,n.useContext)(s.Z),a=(0,v.default)(`${r}-icon`,{[`${r}-icon-spin`]:!!f&&!!x},u),C=i||{};return Number.isSafeInteger(d)&&(C.transform=`rotate(${d}deg)`),n.createElement("span",O({role:"img",ref:m,"aria-label":h,className:a,style:C},c),x)});p.displayName="Icon";const l=p},46874:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"add",ref:m},o)));p.displayName="AddIcon";const l=p},1824:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"browse",ref:m},o)));p.displayName="BrowseIcon";const l=p},85569:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"browse-off",ref:m},o)));p.displayName="BrowseOffIcon";const l=p},23436:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"check-circle-filled",ref:m},o)));p.displayName="CheckCircleFilledIcon";const l=p},46608:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"chevron-down",ref:m},o)));p.displayName="ChevronDownIcon";const l=p},58360:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"close-circle-filled",ref:m},o)));p.displayName="CloseCircleFilledIcon";const l=p},27377:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"close",ref:m},o)));p.displayName="CloseIcon";const l=p},50397:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"info-circle-filled",ref:m},o)));p.displayName="InfoCircleFilledIcon";const l=p},60333:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"loading",ref:m},o)));p.displayName="LoadingIcon";const l=p},36106:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"search",ref:m},o)));p.displayName="SearchIcon";const l=p},65466:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"upload",ref:m},o)));p.displayName="UploadIcon";const l=p},21925:function(I,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),v=e(37907);function s(o){return(0,n.createElement)("svg",O({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((o,m)=>(0,n.createElement)(v.Z,O({svg:(0,n.createElement)(s),type:"warn-circle-filled",ref:m},o)));p.displayName="WarnCircleFilledIcon";const l=p},5629:function(I,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return s.Z},BrowseIcon:function(){return l.Z},BrowseOffIcon:function(){return p.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return m.Z},CloseCircleFilledIcon:function(){return x.Z},CloseIcon:function(){return h.Z},IconContext:function(){return v.Z},InfoCircleFilledIcon:function(){return f.Z},LoadingIcon:function(){return d.Z},SearchIcon:function(){return u.Z},UploadIcon:function(){return i.Z},WarnCircleFilledIcon:function(){return c.Z},default:function(){return r}});var n=e(37907),v=e(31136),s=e(46874),p=e(85569),l=e(1824),o=e(23436),m=e(46608),x=e(58360),h=e(27377),f=e(50397),d=e(60333),u=e(36106),i=e(65466),c=e(21925);const r=n.Z},34028:function(I,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(I,t,e){"use strict";e.d(t,{D:function(){return n}});function n(v,s){let p=null;const l=function(...o){p&&clearTimeout(p),p=setTimeout(()=>{v.apply(this,o),p=null},s)};return l.cancel=()=>{p&&(clearTimeout(p),p=null)},l}},80703:function(I,t,e){"use strict";e.d(t,{HD:function(){return l},Kn:function(){return o},Qr:function(){return m},hj:function(){return x},kJ:function(){return p},mf:function(){return v},o8:function(){return s}});const n=Object.prototype.toString;function v(h){return n.call(h)==="[object Function]"}function s(h){return h===void 0}function p(h){return n.call(h)==="[object Array]"}function l(h){return n.call(h)==="[object String]"}const o=h=>n.call(h)==="[object Object]",m=h=>{if(!o(h))return!0;for(const f in h)if(Object.prototype.hasOwnProperty.call(h,f))return!1;return!0},x=h=>n.call(h)==="[object Number]"&&!Number.isNaN(h)},12598:function(I,t,e){"use strict";e.d(t,{C:function(){return n}});function n(v,s){const p=Object.assign({},v);return Array.isArray(s)&&s.forEach(l=>{delete p[l]}),p}},6890:function(I,t,e){"use strict";e.d(t,{P:function(){return v}});var n=e(78831);function v(s,p){let l=null;const o=(0,n.D)(s,p),m=(...x)=>{l===null?l=Date.now():Date.now()-l>=p&&(l=Date.now(),o.cancel()),o(...x)};return m.cancel=o.cancel,m}},92266:function(I,t,e){"use strict";e.d(t,{C:function(){return p},Z:function(){return l}});var n=e(53360),v=e(7829),s=e(62222);const p=(0,n.forwardRef)((o,m)=>{const B=o,{prefixCls:x,className:h,style:f,checked:d,disabled:u,defaultChecked:i=!1,type:c="checkbox",title:r,onChange:a,_getCheckedValue:C}=B,y=Se(B,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[E,A]=(0,s.R)(i,{value:d});(0,n.useEffect)(()=>{C==null||C(E)},[E]);const D=(0,v.default)(x,h,{[`${x}-checked`]:E,[`${x}-disabled`]:u}),P=j=>{u||("checked"in o||A(j.target.checked),a==null||a({target:ve(O({},o),{checked:j.target.checked}),event:j}))};return n.createElement("span",{className:D,title:r,style:f},n.createElement("input",ve(O({},y),{className:`${x}-input`,ref:m,onChange:P,disabled:u,checked:E,type:c})),n.createElement("span",{className:`${x}-inner`}))});p.displayName="BaseCheckbox";const l=p},40549:function(I,t,e){"use strict";e.d(t,{Z:function(){return m}});var n=e(53360),v=e(7829),s=e(10735),p=e(80703),l=e(57577);const o=(0,n.forwardRef)((x,h)=>{const f=(0,n.useContext)(l.E),A=x,{children:d,name:u,prefixCls:i}=A,c=Se(A,["children","name","prefixCls"]),[r,a]=(0,s.Y)(c),C=(0,n.isValidElement)(d);(0,n.useImperativeHandle)(h,()=>({toggle:a}));const y=`${i||f.prefixCls}${u?`-${u}`:""}`,E=(0,v.default)([`${y}-motion`],{[`${y}-motion-${r.status}`]:r.status});return(0,p.mf)(d)?r.isMounted?d(ve(O({},r),{className:E,toggle:a})):null:C?r.isMounted?(0,n.cloneElement)(d,{className:(0,v.default)(d.props.className,E)}):null:d});o.displayName="CSSMotion";const m=o},4814:function(I,t,e){"use strict";e.d(t,{sQ:function(){return l},t4:function(){return f},x1:function(){return m}});var n=e(37797),v=e(80703),s=e(53360),p=e(11607);const l=(...d)=>{const u=d.filter(Boolean);return u.length<=1?u[0]:i=>{d.forEach(c=>{o(c,i)})}},o=(d,u)=>{(0,v.mf)(d)?d(u):(0,v.Kn)(d)&&"current"in d&&(d.current=u)},m=(...d)=>(0,n.D)(()=>l(...d),d,(u,i)=>u.length!==i.length||u.every((c,r)=>c!==i[r])),x=d=>{var c,r;if(!d)return!1;const u=parseInt(s.version,10);if(h(d)&&u>=19)return!0;const i=(0,p.isMemo)(d)?d.type.type:d.type;return!(typeof i=="function"&&!((c=i.prototype)!=null&&c.render)&&i.$$typeof!==p.ForwardRef||typeof d=="function"&&!((r=d.prototype)!=null&&r.render)&&d.$$typeof!==p.ForwardRef)};function h(d){return(0,s.isValidElement)(d)&&!(0,p.isFragment)(d)}const f=d=>h(d)&&x(d)},21299:function(I,t,e){"use strict";e.d(t,{q:function(){return s}});var n=e(53360),v=e(11607);function s(p){let l=[];return n.Children.toArray(p).forEach(o=>{o!=null&&(Array.isArray(o)?l=l.concat(s(o)):(0,n.isValidElement)(o)&&(0,v.isFragment)(o)&&o.props?l=l.concat(s(o.props.children)):l.push(o))}),l}},69203:function(I,t,e){"use strict";e.d(t,{b:function(){return r}});var n=e(53360),v=e(7829),s=e(7657),p=e(23436),l=e(50397),o=e(58360),m=e(21925),x=e(27377),h=e(40549),f=e(57577);const d={type:"info",showIcon:!0},u={success:p.Z,info:l.Z,error:o.Z,warning:m.Z},i=(0,n.forwardRef)((C,y)=>{const{prefixCls:E,componentConfig:A}=(0,n.useContext)(f.E),{className:D,style:P,title:B,description:j,type:$,closable:X,showIcon:R,action:M,icon:S,onClose:b}=(0,s.S)(C,d,A==null?void 0:A.Alert),z=(0,n.useRef)(null),Z=()=>(0,n.isValidElement)(S)?S:$?(0,n.createElement)(u[$]):null,K=(0,v.default)(`${E}-alert`,`${E}-alert-${$}`,D),_=G=>{var ce;(ce=z.current)==null||ce.toggle(),b==null||b(G)};return n.createElement(h.Z,{ref:z,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},n.createElement("div",{role:"alert",className:K,style:P,ref:y},R&&n.createElement("div",{className:`${E}-alert-icon`},Z()),n.createElement("div",{className:`${E}-alert-content`},!!B&&n.createElement("div",{className:`${E}-alert-title`},B),n.createElement("div",{className:`${E}-alert-description`},j)),M&&n.createElement("div",{className:`${E}-alert-action`},M),X&&n.createElement("button",{type:"button",className:`${E}-alert-close`,onClick:_},n.createElement(x.Z,null))))});i.displayName="Alert";const r=i,a=null},60884:function(I,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(53360),v=e(7829),s=e(60333),p=e(7657),l=e(57577);const o={type:"default",variant:"default",htmlType:"button"},m=(0,n.forwardRef)((d,u)=>{const{prefixCls:i,size:c="md",componentConfig:r}=(0,n.useContext)(l.E),le=(0,p.S)(d,o,r==null?void 0:r.Button),{children:C,type:y,size:E=c,htmlType:A,status:D,loading:P,disabled:B,variant:j,icon:$,loadingIcon:X,href:R,target:M,onClick:S,anchorProps:b={}}=le,z=Se(le,["children","type","size","htmlType","status","loading","disabled","variant","icon","loadingIcon","href","target","onClick","anchorProps"]),Z=X||n.createElement(s.Z,{spin:P}),K=P?Z:$,_=R?"link":y,G=(0,v.default)(`${i}-btn`,`${i}-btn-${_}`,{[`${i}-btn-size-${E}`]:E,[`${i}-btn-status-${D}`]:!!D,[`${i}-btn-variant-${j}`]:j,[`${i}-btn-loading`]:P,[`${i}-btn-disabled`]:B}),ce=F=>{if(P||B)return void F.preventDefault();S==null||S(F)};return R?n.createElement("a",ve(O({},b),{href:R,target:M,className:(0,v.default)(G,b.className),onClick:ce,ref:u}),K,n.createElement("span",null,C)):n.createElement("button",ve(O({},z),{type:A,className:G,onClick:ce,ref:u}),K,n.createElement("span",null,C))});m.displayName="Button";const h=m,f=null},67824:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(7829),s=e(7657),p=e(45844),l=e(80703),o=e(92266),m=e(4814),x=e(57577),h=e(81372);const f={defaultChecked:!1,indeterminate:!1},d=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(x.E),C=(0,n.useContext)(h.w),Z=(0,s.S)(i,f,a==null?void 0:a.Checkbox),{children:y,style:E,className:A,indeterminate:D}=Z,P=Se(Z,["children","style","className","indeterminate"]),[B,j]=(0,n.useState)(!1),$="disabled"in P?P.disabled:C.disabled,X=(0,p.D)(P.value),R=(0,n.useRef)(null);(0,n.useEffect)(()=>{var K;(K=C.registerValue)==null||K.call(C,P.value)},[C,P.value]),(0,n.useEffect)(()=>{var K,_;return P.value!==X&&((K=C.unregisterValue)==null||K.call(C,X),(_=C.registerValue)==null||_.call(C,P.value)),()=>{var G;return(G=C.unregisterValue)==null?void 0:G.call(C,P.value)}},[C,P.value]),(0,n.useEffect)(()=>{R.current&&(R.current.indeterminate=D)},[D]);const M=O({},P);(0,l.Qr)(C)||(M.onChange=(...K)=>{var _,G;(_=P.onChange)==null||_.call(P,...K),(G=C.toggleOption)==null||G.call(C,P.value)},M.name=C.name,M.checked=C.value.includes(P.value));const S=(0,v.default)(`${r}-checkbox-wrapper`,{[`${r}-checkbox-wrapper-checked`]:M.checked,[`${r}-checkbox-wrapper-disabled`]:$},A),b=K=>{var _;(0,l.mf)(y)&&(K.preventDefault(),(_=R.current)==null||_.click())},z=()=>(0,l.o8)(y)?null:(0,l.mf)(y)?y({checked:"checked"in M?!!M.checked:B}):n.createElement("span",{className:`${r}-checkbox-label`},y);return n.createElement("label",{className:S,onClick:b},n.createElement(o.C,ve(O({},M),{type:"checkbox",ref:(0,m.sQ)(c,R),disabled:$,prefixCls:`${r}-checkbox`,className:(0,v.default)({[`${r}-checkbox-indeterminate`]:D}),style:ve(O({},E),{display:(0,l.mf)(y)?"none":void 0}),_getCheckedValue:j})),z())});d.displayName="Checkbox";const u=d},56104:function(I,t,e){"use strict";e.d(t,{Z:function(){return f}});var n=e(53360),v=e(7829),s=e(7657),p=e(80703),l=e(57577),o=e(81372),m=e(67824);const x={},h=(0,n.forwardRef)((d,u)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(l.E),r=(0,n.useId)(),le=(0,s.S)(d,x,c==null?void 0:c.CheckboxGroup),{defaultValue:a,children:C,options:y,className:E,style:A,disabled:D,name:P=r,onChange:B,renderOption:j}=le,$=Se(le,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[X,R]=(0,n.useState)($.value||a||[]),[M,S]=(0,n.useState)([]),b=(0,n.useRef)([]);(0,n.useEffect)(()=>{b.current=M},[M]),(0,n.useEffect)(()=>{"value"in $&&R($.value||[])},[$.value]);const z=(0,n.useCallback)(F=>{S(N=>[...N,F])},[]),Z=(0,n.useCallback)(F=>{S(N=>N.filter(Ie=>Ie!==F))},[]),K=(0,n.useMemo)(()=>y==null?void 0:y.map(F=>(0,p.HD)(F)||(0,p.hj)(F)?{label:F,value:F}:F),[y]),_=(0,n.useCallback)(F=>{const N=[...X],Ie=X.indexOf(F);Ie===-1?N.push(F):N.splice(Ie,1),"value"in $||R(N);const re=N.filter(se=>b.current.includes(se));B==null||B(re)},[X,B]);let G=C;if((0,p.kJ)(K)&&K.length>0){const F=(0,p.mf)(j);G=K.map(N=>{const Ie=X.includes(N.value),re=F?()=>j(ve(O({},N),{checked:Ie})):N.label;return n.createElement(m.Z,{key:`checkbox-group-options-${N.value}`,className:N.className,style:N.style,disabled:"disabled"in N?N.disabled:D,value:N.value,checked:Ie,id:N.id,title:N.title,onChange:N.onChange},re)})}const ce=(0,n.useMemo)(()=>({name:P,value:X,disabled:D,toggleOption:_,registerValue:z,unregisterValue:Z}),[P,X,D,_,z,Z]);return n.createElement("div",{className:(0,v.default)(`${i}-checkbox-group`,E),style:A,ref:u},n.createElement(o.w.Provider,{value:ce},G))});h.displayName="CheckboxGroup";const f=h},81372:function(I,t,e){"use strict";e.d(t,{w:function(){return v}});var n=e(53360);const v=(0,n.createContext)({})},89946:function(I,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return m},CheckboxGroup:function(){return x},default:function(){return h}});var n=e(67824),v=e(56104),s=e(558),p=e.n(s),l={};for(var o in s)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(l[o]=function(f){return s[f]}.bind(0,o));e.d(t,l);const m=n.Z;m.Group=v.Z;const x=m.Group,h=m},558:function(){},57577:function(I,t,e){"use strict";e.d(t,{$:function(){return v},E:function(){return s}});var n=e(53360);const v={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(v)},83405:function(I,t,e){"use strict";e.d(t,{i:function(){return m}});var n=e(53360),v=e(12598),s=e(7657),p=e(31136),l=e(57577);function o(x){const h=(0,s.S)(x,l.$),{iconPrefix:f,children:d}=h,u=(0,v.C)(h,["children"]),i=f?p.Z.Provider:n.Fragment;return n.createElement(l.E.Provider,{value:u},n.createElement(i,{value:{prefixCls:f}},d))}o.displayName="ConfigProvider";const m=o},48380:function(I,t,e){"use strict";e.d(t,{i:function(){return x}});var n=e(53360),v=e(7829),s=e(7657),p=e(57577);const l={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((f,d)=>{const{prefixCls:u,componentConfig:i}=(0,n.useContext)(p.E),{direction:c,align:r,dashed:a,className:C,children:y,text:E,style:A}=(0,s.S)(f,l,i==null?void 0:i.Divider),D=y||E,P=c!=="vertical"&&!!D,B=(0,v.default)(`${u}-divider`,{[`${u}-divider-${c}`]:c,[`${u}-divider-with-text`]:P,[`${u}-divider-with-text-${r}`]:P,[`${u}-divider-dashed`]:!!a},C);return n.createElement("div",{className:B,style:A,ref:d},P&&n.createElement("span",{className:`${u}-divider-inner-text`},D))});o.displayName="Divider";const x=o,h=null},17599:function(I,t,e){"use strict";e.d(t,{J:function(){return X},X:function(){return $}});var n=e(53360),v=e(7829),s=e(7657),p=e(80703),l=e(57577);const o=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},x=Object.keys(m),h=new Map;let f=-1,d={};const i={handlers:{},dispatch(R){return d=R,h.forEach(M=>{M(d)}),h.size>=1},subscribe(R){return h.size||this.register(),f+=1,h.set(f,R),R(d),f},unsubscribe(R){h.delete(R),h.size||this.unregister()},register(){x.forEach(R=>{const M=({matches:z})=>{this.dispatch(ve(O({},d),{[R]:z}))},S=m[R],b=window.matchMedia(S);b.addListener(M),this.handlers[S]={mql:b,listener:M},M(b)})},unregister(){x.forEach(R=>{const M=m[R],S=this.handlers[M];S==null||S.mql.removeListener(S==null?void 0:S.listener)}),h.clear()}},r=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},C=(0,n.forwardRef)((R,M)=>{const{prefixCls:S,componentConfig:b}=(0,n.useContext)(l.E),ye=(0,s.S)(R,a,b==null?void 0:b.Row),{align:z,justify:Z,gutter:K,className:_,wrap:G,children:ce,style:le}=ye,F=Se(ye,["align","justify","gutter","className","wrap","children","style"]),[N,Ie]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const ge=i.subscribe(g=>{((0,p.Kn)(K)||(0,p.kJ)(K)&&((0,p.Kn)(K[0])||(0,p.Kn)(K[1])))&&Ie(g)});return()=>i.unsubscribe(ge)},[K]);const re=se();function se(){const ge=[void 0,void 0];return((0,p.kJ)(K)?K:[K,void 0]).forEach((L,T)=>{if((0,p.Kn)(L))for(let H=0;H<o.length;H++){const V=o[H];if(N[V]&&L[V]!==void 0){ge[T]=L[V];break}}else ge[T]=L}),ge}const fe=(0,v.default)(`${S}-row`,{[`${S}-row-nowrap`]:G===!1,[`${S}-row-align-${z}`]:z,[`${S}-row-justify-${Z}`]:Z},_),[ee,de]=re,De=(0,n.useMemo)(()=>({gutter:[ee,de],wrap:G}),[ee,de,G]),U={},Ee=(0,p.hj)(ee)&&ee!==0,Ne=(0,p.hj)(de)&&de!==0;if(Ee||Ne){const ge=-ee/2,g=-de/2;ge&&(U.marginLeft=ge,U.marginRight=ge),g&&(U.marginTop=g,U.marginBottom=g)}return n.createElement(r.Provider,{value:De},n.createElement("div",ve(O({},F),{ref:M,className:fe,style:O(O({},le),U)}),ce))});C.displayName="Row";const y=C,E={offset:0};function A(R){return(0,p.hj)(R)?`${R} ${R} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(R)?`0 0 ${R}`:R}const D=["xs","sm","md","lg","xl","xxl"],P=(R,M)=>{let S={};return D.forEach(b=>{const z=R[b];if(!z)return;let Z={};(0,p.hj)(z)?Z.span=z:(0,p.Kn)(z)&&(Z=z),S=ve(O({},S),{[`${M}-col-${b}-${Z.span}`]:(0,p.hj)(Z.span),[`${M}-col-${b}-order-${Z.order}`]:Z.order,[`${M}-col-${b}-offset-${Z.offset}`]:Z.offset})}),S},B=(0,n.forwardRef)((R,M)=>{const{componentConfig:S,prefixCls:b}=(0,n.useContext)(l.E),{gutter:z}=(0,n.useContext)(r),ye=(0,s.S)(R,E,S==null?void 0:S.Col),{span:Z,offset:K,children:_,className:G,style:ce,flex:le,order:F,xs:N,sm:Ie,md:re,lg:se,xl:fe,xxl:ee}=ye,de=Se(ye,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),De=P({xs:N,sm:Ie,md:re,lg:se,xl:fe,xxl:ee},b),U=(0,v.default)(`${b}-col`,{[`${b}-col-${Z}`]:(0,p.hj)(Z),[`${b}-col-offset-${K}`]:K,[`${b}-col-order-${F}`]:F},De,G),Ee={};if(z){const ge=z[0]?z[0]/2:0,g=z[1]?z[1]/2:0;ge&&(Ee.paddingLeft=ge,Ee.paddingRight=ge),g&&(Ee.paddingTop=g,Ee.paddingBottom=g)}const Ne={};return le&&(Ne.flex=A(le)),n.createElement("div",ve(O({ref:M},de),{className:U,style:O(O(O({},ce),Ne),Ee)}),_)});B.displayName="Col";const j=B,$=y,X=j},45990:function(I,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return v.z},Col:function(){return m.J},ConfigProvider:function(){return l.i},Divider:function(){return o.i},Input:function(){return x.I},Popup:function(){return h.G},Row:function(){return m.X},Space:function(){return d.T},Switch:function(){return u.r},Tooltip:function(){return i.u}});var n=e(69203),v=e(60884),s=e(89946),r={};for(var p in s)["default","Alert","Button"].indexOf(p)<0&&(r[p]=function(a){return s[a]}.bind(0,p));e.d(t,r);var l=e(83405),o=e(48380),m=e(17599),x=e(38312),h=e(58692),f=e(37663),r={};for(var p in f)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup"].indexOf(p)<0&&(r[p]=function(C){return f[C]}.bind(0,p));e.d(t,r);var d=e(92595),u=e(9090),i=e(34442),c=e(36112),r={};for(var p in c)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup","Radio","RadioButton","RadioGroup","Space","Switch","Tooltip"].indexOf(p)<0&&(r[p]=function(C){return c[C]}.bind(0,p));e.d(t,r)},38312:function(I,t,e){"use strict";e.d(t,{I:function(){return c}});var n=e(53360),v=e(7829),s=e(7657),p=e(62222),l=e(80703),o=e(58360),m=e(85569),x=e(1824),h=e(57577);const f={type:"text",size:"md",align:"left",visibilityToggle:!0};function d(a,C,y){let E;return E=a===null||(0,l.o8)(a)||(0,l.HD)(a)?a||"":String(a),(0,l.hj)(C)&&!y?E.slice(0,C):E}const u=(0,n.forwardRef)((a,C)=>{const{prefixCls:y,componentConfig:E}=(0,n.useContext)(h.E),We=(0,s.S)(a,f,E==null?void 0:E.Input),{size:A,status:D,align:P,disabled:B,allowClear:j,placeholder:$,variant:X="outline",addonBefore:R,addonAfter:M,prefix:S,suffix:b,value:z,defaultValue:Z,type:K,className:_,style:G,readOnly:ce,visibilityToggle:le,maxLength:F,tips:N,onFocus:Ie,onBlur:re,onChange:se}=We,fe=Se(We,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),ee=(0,n.useRef)(null),de=(0,n.useRef)(null);(0,n.useImperativeHandle)(C,()=>({currentElement:ee.current,inputElement:de.current,focus:()=>{var Y;return(Y=de.current)==null?void 0:Y.focus()},blur:()=>{var Y;return(Y=de.current)==null?void 0:Y.blur()},select:()=>{var Y;return(Y=de.current)==null?void 0:Y.select()}}));const[De,U]=(0,n.useState)(!1),Ee=Y=>{B||ce||(U(!0),Ie==null||Ie(Y))},Ne=Y=>{B||ce||(U(!1),re==null||re(Y))},ye=(0,l.hj)(F)?F:F==null?void 0:F.length,ge=(0,l.hj)(F)?!1:F==null?void 0:F.errorOnly,g=(0,l.hj)(F)?!0:(F==null?void 0:F.showLimit)!==!1,[L,T]=(0,p.R)(Z,{value:z}),H=d(L,ye,ge),V=(0,l.hj)(ye)?H.length>ye:!1,Q=Y=>{const{value:Oe}=Y.target;T(Oe),se==null||se(Oe,Y)},oe=()=>{var Y;B||(Y=de.current)==null||Y.focus()},ae=(0,v.default)(`${y}-input`,{[`${y}-input-variant-${X}`]:X,[`${y}-input-size-${A}`]:A,[`${y}-input-disabled`]:B,[`${y}-input-align-${P}`]:P,[`${y}-input-status-${D}`]:D,[`${y}-input-focus`]:De,[`${y}-input-limit-length-error`]:V},_),W=(0,v.default)(`${y}-input-real`),me=j&&H&&!B,J=n.createElement(o.Z,null),w=Y=>{Y.stopPropagation(),T(""),se==null||se("",Y)},k=me&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,v.default)(`${y}-input-suffix`,`${y}-input-clear`),onClick:w},J),ne=(0,l.Kn)(le)&&!(0,l.o8)(le.visible),[xe,he]=(0,n.useState)(K),te=(0,l.Kn)(le)?le.visible:le;(0,n.useEffect)(()=>{he(ne?te?"text":"password":K)},[K,ne,te]);const we=()=>{var Oe;if(B)return;const Y=xe==="password"?"text":"password";he(Y),ne&&((Oe=le.onVisibleChange)==null||Oe.call(le,Y==="text"))},q=K==="password",ie=(0,n.useMemo)(()=>q?(0,l.Kn)(le)&&(0,l.mf)(le.renderIcon)?le.renderIcon(xe==="text"):xe==="password"?n.createElement(m.Z,null):xe==="text"?n.createElement(x.Z,null):null:b,[q,xe,le,b]),ue=(0,n.useMemo)(()=>function({children:Y}){const Oe=R||M;let Le=Y;return Oe&&(Le=n.createElement("div",{ref:ee,className:`${y}-input-group`},Le)),N&&(Le=n.createElement("div",{ref:ee,className:`${y}-input-group-extra`},Le)),Le},[y,R,M,N]),Ce=S&&n.createElement("span",{className:`${y}-input-prefix`},S),Ue=ie&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,v.default)(`${y}-input-suffix`,{[`${y}-input-suffix-password`]:q}),onClick:we,onMouseDown:Y=>Y.preventDefault(),onMouseUp:Y=>Y.preventDefault()},ie),Ke=(0,l.hj)(ye)&&g&&n.createElement("span",{className:`${y}-input-limit-length-text`},H.length,"/",ye),Ze=N&&n.createElement("div",{className:(0,v.default)(`${y}-input-tips`,{[`${y}-input-tips-status-${D}`]:D})},N),Ve=n.createElement("div",{role:"group",ref:R||M?void 0:ee,className:ae,style:G,onClick:oe},Ce,n.createElement("input",ve(O({ref:de},fe),{type:xe,value:H,readOnly:ce,className:W,placeholder:$,disabled:B,onChange:Q,onFocus:Ee,onBlur:Ne})),k,Ue,Ke),ze=R&&n.createElement("span",{className:(0,v.default)(`${y}-input-group-addon`)},R),je=M&&n.createElement("span",{className:(0,v.default)(`${y}-input-group-addon`)},M);return n.createElement(ue,null,ze,Ve,je,Ze)});u.displayName="Input";const c=u,r=null},58692:function(I,t,e){"use strict";e.d(t,{G:function(){return h},Z:function(){return f}});var n=e(53360),v=e(7829),s=e(7657),p=e(36112),l=e(57577);const o={trigger:"hover",placement:"top",showArrow:!0,destroyOnClose:!0,offset:6},m=(0,n.forwardRef)((d,u)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(l.E),$=(0,s.S)(d,o,c==null?void 0:c.Popup),{children:r,content:a,destroyOnClose:C,showArrow:y,styles:E,classNames:A,rootClassName:D}=$,P=Se($,["children","content","destroyOnClose","showArrow","styles","classNames","rootClassName"]),B=(0,n.useRef)(null);if((0,n.useImperativeHandle)(u,()=>B.current),!r)return null;const j=(0,n.isValidElement)(r)?r:n.createElement("span",null,r);return n.createElement(p.default,ve(O({},P),{ref:B,className:(0,v.default)(`${i}-popup`,D),motion:{timeout:200,name:"popup",mountOnEnter:!0,preEnter:!0,unmountOnExit:C},popper:n.createElement("div",{style:E==null?void 0:E.content,className:(0,v.default)(`${i}-popup-content`,A==null?void 0:A.content)},a),arrow:y?n.createElement("div",{style:E==null?void 0:E.arrow,className:(0,v.default)(`${i}-popup-arrow`,A==null?void 0:A.arrow)}):void 0}),j)});m.displayName="Popup";const h=m,f=h},74052:function(I,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),v=e(7829),s=e(7657),p=e(80703),l=e(92266),o=e(4814),m=e(57577),x=e(83595);const h={defaultChecked:!1},f=(0,n.forwardRef)((u,i)=>{var K;const{prefixCls:c,componentConfig:r}=(0,n.useContext)(m.E),a=(0,n.useContext)(x.Z),Z=(0,s.S)(u,h,r==null?void 0:r.Radio),{_IS_BUTTON_:C,value:y,children:E,style:A}=Z,D=Se(Z,["_IS_BUTTON_","value","children","style"]),P=_=>{var G,ce;(G=D.onChange)==null||G.call(D,_),(ce=a==null?void 0:a.onChange)==null||ce.call(a,_)},B=O({},D);let j="md";(0,p.Qr)(a)||(B.name=a.name,B.onChange=P,B.checked=y===a.value,B.disabled=(K=B.disabled)!=null?K:a.disabled,j=a.size?a.size:j);const[$,X]=(0,n.useState)(!1),R=C?`${c}-radio-button`:`${c}-radio`,M=(0,v.default)(`${R}-wrapper`,{[`${R}-wrapper-disabled`]:B.disabled,[`${R}-wrapper-checked`]:B.checked,[`${R}-wrapper-size-${j}`]:j,[`${R}-wrapper-filled`]:a.buttonVariant==="filled"}),S=()=>(0,p.o8)(E)?null:(0,p.mf)(E)?E({checked:"checked"in B?!!B.checked:$}):n.createElement("span",{className:`${R}-label`},E),b=(0,n.useRef)(null),z=_=>{var G;(0,p.mf)(E)&&(_.preventDefault(),(G=b.current)==null||G.click())};return n.createElement("label",{className:M,onClick:z},n.createElement(l.Z,ve(O(O({},D),B),{ref:(0,o.sQ)(i,b),value:y,type:"radio",prefixCls:R,style:ve(O({},A),{display:(0,p.mf)(E)?"none":void 0}),disabled:B.disabled,_getCheckedValue:X})),S())});f.displayName="Radio";const d=f},89312:function(I,t,e){"use strict";e.d(t,{Z:function(){return p}});var n=e(53360),v=e(74052);const s=(0,n.forwardRef)((l,o)=>n.createElement(v.Z,ve(O({_IS_BUTTON_:!0},l),{ref:o})));s.displayName="RadioButton";const p=s},59803:function(I,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),v=e(7829),s=e(7657),p=e(62222),l=e(80703),o=e(57577),m=e(83595),x=e(74052),h=e(89312);const f={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},d=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(o.E),C=(0,s.S)(i,f,a==null?void 0:a.RadioGroup),y=(0,n.useId)(),{className:E,style:A,name:D=y,value:P,defaultValue:B,children:j,disabled:$,size:X,buttonVariant:R,renderOption:M,onChange:S,appearance:b,options:z}=C,[Z,K]=(0,p.R)(B,{value:P}),_=(0,n.useCallback)(F=>{const N=F.target.value;"value"in C||K(N),N!==Z&&(S==null||S(F))},[C.value,Z,S]);let G=j;const ce=b==="button"?h.Z:x.Z;if((0,l.kJ)(z)&&z.length>0){const F=(0,l.mf)(M);G=z.map(N=>{if((0,l.HD)(N)||(0,l.hj)(N)){const se=Z===N,fe=F?()=>M({label:N,value:N,checked:se}):N;return n.createElement(ce,{key:N.toString(),disabled:$,value:N,checked:se},fe)}const Ie=Z===N.value,re=F?()=>M(ve(O({},N),{checked:Ie})):N.label;return n.createElement(ce,{key:`radio-group-options-${N.value}`,className:N.className,style:N.style,disabled:N.disabled||$,value:N.value,checked:Ie,id:N.id,title:N.title,onChange:N.onChange},re)})}const le=(0,n.useMemo)(()=>({name:D,value:Z,disabled:$,size:X,buttonVariant:R,onChange:_}),[D,Z,$,X,R,_]);return n.createElement("div",{ref:c,className:(0,v.default)(`${r}-radio-group`,E),style:A},n.createElement(m.Z.Provider,{value:le},G))});d.displayName="RadioGroup";const u=d},83595:function(I,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360);const s=(0,n.createContext)({})},37663:function(I,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return x},RadioButton:function(){return f},RadioGroup:function(){return h},default:function(){return d}});var n=e(74052),v=e(89312),s=e(59803),p=e(63149),l=e.n(p),o={};for(var m in p)["default","Radio","RadioButton","RadioGroup"].indexOf(m)<0&&(o[m]=function(u){return p[u]}.bind(0,m));e.d(t,o);const x=n.Z;x.Group=s.Z,x.Button=v.Z;const h=x.Group,f=x.Button,d=x},63149:function(){},92595:function(I,t,e){"use strict";e.d(t,{T:function(){return d}});var n=e(53360),v=e(7829),s=e(80703),p=e(7657),l=e(21299),o=e(57577);const m={sm:8,md:16,lg:24},x={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((i,c)=>{const{prefixCls:r,size:a="md",componentConfig:C}=(0,n.useContext)(o.E),Z=(0,p.S)(i,x,C==null?void 0:C.Space),{className:E,children:A,size:D=a,direction:P="horizontal",align:B,split:j,wrap:$=!1}=Z,X=Se(Z,["className","children","size","direction","align","split","wrap"]),R=(0,l.q)(A),M=P==="horizontal"&&B===void 0?"center":B,S=(0,v.default)(`${r}-space`,`${r}-space-direction-${P}`,{[`${r}-space-align-${M}`]:M,[`${r}-space-wrap`]:$},E),b=(0,n.useCallback)(K=>{const _=(0,s.kJ)(D)?D:[D,D],[G,ce]=_.map(le=>(0,s.HD)(le)?m[le]:le||0);return $?{marginRight:G,marginBottom:ce}:P==="vertical"?{marginBottom:ce}:{marginRight:K?void 0:G}},[D,P,$]),z=R.map((K,_)=>{const G=_===R.length-1;return n.createElement(n.Fragment,{key:`space-item-${_.toString()}`},n.createElement("div",{className:"space-item",style:b(G)},K),!G&&j&&n.createElement("span",{className:"sqi-space-item-split"},j))});return n.createElement("div",ve(O({className:S},X),{ref:c}),z)});h.displayName="Space";const d=h,u=null},9090:function(I,t,e){"use strict";e.d(t,{r:function(){return f}});var n=e(53360),v=e(7829),s=e(7657),p=e(62222),l=e(60333),o=e(57577);const m={label:[],loading:!1,disabled:!1},x=(0,n.forwardRef)((u,i)=>{const{prefixCls:c,size:r="md",componentConfig:a}=(0,n.useContext)(o.E),K=(0,s.S)(u,m,a==null?void 0:a.Switch),{checked:C,defaultChecked:y,className:E,disabled:A,size:D=r,label:P,loading:B,loadingIcon:j,onChange:$,onClick:X}=K,R=Se(K,["checked","defaultChecked","className","disabled","size","label","loading","loadingIcon","onChange","onClick"]),[M,S]=(0,p.R)(!1,{value:C,defaultValue:y});function b(_){if(A||B)return;const G=!M;S(G),$==null||$(G,_),X==null||X(G,_)}const z=(0,v.default)(`${c}-switch`,{[`${c}-switch-checked`]:M,[`${c}-switch-disabled`]:A,[`${c}-switch-loading`]:B,[`${c}-switch-${D}`]:D},E),Z=j||n.createElement(l.Z,{spin:!0});return n.createElement("button",ve(O({},R),{type:"button",role:"switch","aria-checked":M,ref:i,className:z,disabled:A||B,onClick:b}),n.createElement("div",{className:`${c}-switch-handle`},B&&Z),n.createElement("div",{className:`${c}-switch-content`},M?P[0]:P[1]))});x.displayName="Switch";const f=x,d=null},34442:function(I,t,e){"use strict";e.d(t,{u:function(){return h}});var n=e(53360),v=e(58692),s=e(57577),p=e(7657),l=e(7829);const o={theme:"default",trigger:"hover",placement:"top",showArrow:!0,destroyOnClose:!0,offset:6},m=(0,n.forwardRef)((d,u)=>{const{prefixCls:i,componentConfig:c}=(0,n.useContext)(s.E),E=(0,p.S)(d,o,c==null?void 0:c.Tooltip),{classNames:r,rootClassName:a,theme:C}=E,y=Se(E,["classNames","rootClassName","theme"]);return n.createElement(v.Z,ve(O({rootClassName:(0,l.default)(`${i}-tooltip`,{[`${i}-tooltip-${C}`]:C},a),classNames:{arrow:(0,l.default)(r==null?void 0:r.arrow,`${i}-tooltip-arrow`),content:(0,l.default)(r==null?void 0:r.content,`${i}-tooltip-content`)}},y),{ref:u}))});m.displayName="Tooltip";const h=m,f=null},15656:function(I,t,e){"use strict";e.d(t,{Z:function(){return ge}});var n=e(53360),v=e(7829),s=e(7657),p=e(62222),l=e(60164),o=e(6890),m=e(37828),x=e(21299);function h(g){return g instanceof HTMLElement||g instanceof SVGElement}function f(g){return g&&typeof g=="object"&&h(g.currentElement)?g.currentElement:h(g)?g:null}function d(g){if(g)return g.current&&typeof g.current=="object"&&"currentElement"in g.current?g.current.currentElement:g.current}function u(g){var T;return g&&(0,n.isValidElement)(g)?parseInt(n.version,10)>=19?((T=g.props)==null?void 0:T.ref)||null:g.ref:null}var i=e(4814);const c=(0,n.forwardRef)((g,L)=>{const{children:T,disabled:H,throttleMs:V=100,onResize:Q}=g,oe=(0,n.isValidElement)(T),ae=T?(0,x.q)(T):[],W=T?u(T):null,me=(0,n.useRef)(null),[J,w]=(0,n.useState)(null),k=(0,i.x1)(W,me,xe=>{w(f(xe))});(0,n.useImperativeHandle)(L,()=>d(me));const ne=Q?(0,o.P)(Q,V):void 0;return(0,m._)(J,ne,!H),oe?(0,n.cloneElement)(T,{ref:k}):T});c.displayName="ResizeObserverRect";const r=c;var a=e(86752),C=e(34028),y=e(80703);const E=(0,C.J)();function A(g){return E?(0,y.mf)(g)?g():document.body:null}const D=(0,n.forwardRef)((g,L)=>{const{getContainer:T,prefixCls:H,children:V,open:Q=!0,rootStyle:oe}=g,[ae,W]=(0,n.useState)(null),[me,J]=(0,n.useState)(null),w=me||document.body;(0,n.useEffect)(()=>{const ne=A(T);J(ne||null)},[T]);const k=()=>{if(!E||ae)return null;const ne=document.createElement("div");H&&(ne.className=`${H}-portal-wrapper`),oe&&Object.assign(ne.style,oe),ne.setAttribute("data-portal","true"),W(ne)};return(0,l.L)(()=>{E&&(Q?k():W(null))},[Q]),n.useImperativeHandle(L,()=>ae,[ae]),(0,l.L)(()=>{if(!E||!ae)return;const ne=()=>!ae.parentNode&&w.appendChild(ae),xe=()=>{var he;return(he=ae.parentNode)==null?void 0:he.removeChild(ae)};return Q?ne():xe(),()=>{xe()}},[Q,ae]),Q&&V&&ae?(0,a.createPortal)(V,ae):null});D.displayName="Portal";const P=D;var B=e(40549),j=e(57577);const $="Escape",R=g=>{const{trigger:L,delay:T,disabled:H,visible:V,clickOutsideClose:Q,triggerEl:oe,outFocusToClose:ae=!0,onVisibleChange:W}=g,me=(0,n.useRef)(!1),J=(0,n.useRef)(!1),w=(0,n.useRef)(null),k=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(H)return;const te=we=>{var q;(q=oe==null?void 0:oe.contains)!=null&&q.call(oe,we.target)||me.current||V&&Q&&(W==null||W(!1,{e:we,trigger:"document"}))};return document.addEventListener("mousedown",te),document.addEventListener("touchend",te),()=>{document.removeEventListener("mousedown",te),document.removeEventListener("touchend",te)}},[H,V,oe,Q,W]);function ne(te){T?(clearTimeout(w.current),w.current=setTimeout(te,T)):te()}function xe(){return H?{}:{onMouseEnter:te=>{L==="hover"&&!J.current&&(clearTimeout(w.current),W==null||W(!0,{e:te,trigger:"hover"}))},onMouseLeave:te=>{L==="hover"&&(J.current=!0,clearTimeout(w.current),W==null||W(!1,{e:te,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(k.current),me.current=!0,k.current=window.setTimeout(()=>{me.current=!1})},onTouchEnd:()=>{clearTimeout(k.current),me.current=!0,k.current=window.setTimeout(()=>{me.current=!1})}}}function he(te){return H?{}:{onClick:q=>{var ie,ue;L==="click"&&(q.preventDefault(),q.stopPropagation(),ne(()=>W==null?void 0:W(!V,{e:q,trigger:"click"}))),(ue=(ie=te.props).onClick)==null||ue.call(ie,q)},onTouchStart:q=>{var ie,ue;L==="hover"&&(J.current=!1,ne(()=>W==null?void 0:W(!0,{e:q,trigger:"hover"}))),(ue=(ie=te.props).onTouchStart)==null||ue.call(ie,q)},onMouseEnter:q=>{var ie,ue;L==="hover"&&(J.current=!1,ne(()=>W==null?void 0:W(!0,{e:q,trigger:"hover"}))),(ue=(ie=te.props).onMouseEnter)==null||ue.call(ie,q)},onMouseLeave:q=>{var ie,ue;L==="hover"&&(J.current=!1,ne(()=>W==null?void 0:W(!1,{e:q,trigger:"hover"}))),(ue=(ie=te.props).onMouseLeave)==null||ue.call(ie,q)},onFocus:q=>{var ie,ue;L==="focus"&&ne(()=>W==null?void 0:W(!0,{e:q,trigger:"focus"})),(ue=(ie=te.props).onFocus)==null||ue.call(ie,q)},onBlur:q=>{var ie,ue;if(L==="focus"){if(me.current&&!ae)return;ne(()=>W==null?void 0:W(!1,{e:q,trigger:"blur"}))}(ue=(ie=te.props).onBlur)==null||ue.call(ie,q)},onContextMenu:q=>{var ie,ue;L==="context-menu"&&(q.preventDefault(),ne(()=>W==null?void 0:W(!0,{e:q,trigger:"context-menu"}))),(ue=(ie=te.props).onContextMenu)==null||ue.call(ie,q)},onKeyDown:q=>{var ie,ue;(q==null?void 0:q.key)===$&&ne(()=>W==null?void 0:W(!1,{e:q,trigger:"keydown-esc"})),(ue=(ie=te.props).onKeyDown)==null||ue.call(ie,q)}}}return{genPopupProps:xe,genTriggerProps:he}};function M(g,L,T){const{top:H,left:V,width:Q,height:oe}=g.getBoundingClientRect(),ae=H+T,W=V+L;return{width:Q,height:oe,top:ae,bottom:ae+oe,left:W,right:W+Q}}function S(g,L,T){const H=M(g,L,T),V=g.clientWidth,Q=g.clientHeight,oe=H.left+g.clientLeft,ae=H.top+g.clientTop;return{width:V,height:Q,top:ae,bottom:ae+Q,left:oe,right:oe+V}}function b(g){if(!g||g.tagName==="HTML")return;const L=window.getComputedStyle(g),T=H=>["auto","scroll"].includes(H);return g.clientHeight<g.scrollHeight&&T(L.overflowX)||g.clientWidth<g.scrollWidth&&T(L.overflowY)?g:b(g.parentNode)}function z(g,L){return Math.round(Math.abs(g))>Math.round(Math.abs(L))?g:L}const Z=(g,L)=>`translate3d(${g}px, ${L}px, 0)`;function K(g){var Q,oe;if(!g)return[0,0];const L=window.getComputedStyle(g),T=L.transform||L.webkitTransform||"none";if(T==="none")return[0,0];if(T.match(/matrix\(([^)]+)\)/)){const ae=((oe=(Q=T.match(/matrix\((.+)\)/))==null?void 0:Q[1])==null?void 0:oe.split(",").map(Number))||[0,0];if(ae.length===6)return[ae[4],ae[5]]}const[,H=0,V=0]=(T.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(ae=>Number(ae));return[H,V]}function _(g){const L=g.split("-"),T=L[0],H=L[1];let V;const Q=T==="top"||T==="bottom",oe=T==="left"||T==="right";return Q&&(H==="start"&&(V="left"),H==="end"&&(V="right")),oe&&(H==="start"&&(V="top"),H==="end"&&(V="bottom")),[T,V,Q,oe]}function G(g){return g?(0,y.Kn)(g)?[g.x||0,g.y||0]:[g||0,g||0]:[0,0]}const ce={placement:"bottom",enableFlip:!0,enableShift:!0};function le(g,L){const{reference:T,popper:H,arrow:V}=g;if(!T||!H)return;const Q=O(O({},ce),L),oe=H.parentNode,[ae,W]=K(oe),me=window.pageYOffset,J=window.pageXOffset,w=M(T,J,me),k=M(H,J,me),ne=w.width-k.width,xe=w.height-k.height;let he=w.left-k.left+ae,te=w.top-k.top+W;const[we,q,ie,ue]=_(Q.placement);let Ce=we;const Ue=q==="left"?0:q==="right"?ne:ne/2,Ke=ne-Ue,Ze=q==="top"?0:q==="bottom"?xe:xe/2,Ve=xe-Ze;ie&&(he+=Ue,te+=we==="top"?-k.height:w.height),ue&&(he+=we==="left"?-k.width:w.width,te+=Ze);let ze=b(T);const[je,We]=G(Q.offset),{height:Y=0,width:Oe=0}=V?M(V,J,me):{};let Le=0,Fe=0;for(;ze;){const Pe=S(ze,J,me);Ge(Pe),ze=b(ze.parentNode)}const{clientHeight:Xe,clientWidth:Je}=document.documentElement;Ge({top:me,bottom:me+Xe,left:J,right:J+Je,height:Xe,width:Je});const He=Q.placement.split("-")[1];oe.setAttribute("data-trigger-placement",`${Ce}${He?`-${He}`:""}`),he-=Le,te-=Fe,Qe(),ie&&(te+=Ce==="bottom"?We:-We),ue&&(he+=Ce==="right"?je:-je),oe.style.transform=Z(he,te);function Ge(Pe){const{top:Te,bottom:Ae,left:Re,right:pe,height:be,width:$e}=Pe;if(ie){const Be=Math.round(w.top-Te+w.height/2),Me=Math.round(be/2);Q.enableFlip&&tn(Be,Me),Q.enableShift&&on()}if(ue){const Be=Math.round(w.left-Re+w.width/2),Me=Math.round($e/2);Q.enableFlip&&an(Be,Me),Q.enableShift&&rn()}function tn(Be,Me){const ke=w.top-(k.height+We+Y)<Te,qe=w.bottom+k.height+We+Y>be+Te;ke&&Be<=Me&&Ce==="top"?(te+=k.height+w.height,Ce="bottom"):qe&&Be>=Me&&Ce==="bottom"&&(te-=k.height+w.height,Ce="top")}function on(){if(w.left+Ue<Re){const Be=w.left+Ue-Re,Me=w.right-Oe>Re?Be:-w.width+Ue+Oe;Le=z(Me,Le)}if(w.right-Ke>pe){const Be=w.right-Ke-pe,Me=w.left+Oe<pe?Be:w.width-Ke-Oe;Le=z(Me,Le)}}function an(Be,Me){const ke=w.left-(k.width+je+Oe)<Re,qe=w.right+k.width+je+Oe>pe;ke&&Be<Me&&Ce==="left"?(he+=w.width+k.width,Ce="right"):qe&&Be>Me&&Ce==="right"&&(he-=w.width+k.width,Ce="left")}function rn(){if(w.top+Ze<Te){const Be=w.top+Ze-Te,Me=w.bottom-Y>Te?Be:-w.height+Ze+Y;Fe=z(Me,Fe)}if(w.bottom-Ve>Ae){const Be=w.bottom-Ve-Ae,Me=w.top+Y<Ae?Be:w.height-Ve-Y;Fe=z(Me,Fe)}}}function Qe(){if(!V)return;const{height:Pe,width:Te}=M(V,J,me);ie?te+=Ce==="bottom"?Pe:-Pe:ue&&(he+=Ce==="right"?Te:-Te);const Ae=Q.placement.split("-")[1]||"center",Re={x:0,y:0};if(ie){Re.y=Ce==="top"?k.height:-Pe;const pe=k.width-Te,be=0;if(Ae==="start")Re.x=Math.max(be,Math.min(pe,Le));else if(Ae==="center"){const $e=(k.width-Te)/2;Re.x=Math.max(be,Math.min(pe,$e+Le))}else if(Ae==="end"){const $e=k.width-Te;Re.x=Math.max(be,Math.min(pe,$e+Le))}}else if(ue){Re.x=Ce==="left"?k.width:-Te;const pe=k.height-Pe,be=0;if(Ae==="start")Re.y=Math.max(be,Math.min(pe,Fe));else if(Ae==="center"){const $e=(k.height-Pe)/2;Re.y=Math.max(be,Math.min(pe,$e+Fe))}else if(Ae==="end"){const $e=k.height-Pe;Re.y=Math.max(be,Math.min(pe,$e+Fe))}}V.style.transform=Z(Re.x,Re.y)}}function F(g,L=[]){if(!g)return[];const T=se(g);if(T===g.ownerDocument.body){const Q=window.visualViewport?[window.visualViewport]:[],oe=Ie(T)?[T]:[];return[...L,window,...Q,...oe]}const V=F(N(T));return[...L,T,...V]}function N(g){return ee(g)==="html"?g:g==null?void 0:g.parentNode}function Ie(g){if(!g)return!1;const{overflow:L,overflowX:T,overflowY:H,display:V}=window.getComputedStyle(g);return/auto|scroll|overlay|hidden|clip/.test(L+H+T)&&!["contents"].includes(V)}const re=new Set(["html","body","#document"]);function se(g){return g?re.has(ee(g))?g.ownerDocument.body:fe(g)&&Ie(g)?g:se(N(g)):document.body}function fe(g){return g instanceof HTMLElement}function ee(g){return g?(g.nodeName||"").toLowerCase():null}function de(g){let L;return()=>(L||(L=new Promise(T=>{Promise.resolve().then(()=>{L=void 0,T(g())})})),L)}const De={placement:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:1,trigger:"hover",delay:100,outFocusToClose:!0,clickOutsideClose:!0},U={position:"absolute",top:0,left:0,bottom:"auto",right:"auto",margin:0,willChange:"transform"},Ee=O({},U),Ne=O({},U),ye=(0,n.forwardRef)((g,L)=>{const{componentConfig:T}=(0,n.useContext)(j.E),{className:H,children:V,popper:Q,enableShift:oe,motion:ae={},enableFlip:W,offset:me,placement:J,getContainer:w,zIndex:k,trigger:ne,delay:xe,outFocusToClose:he,disabled:te,defaultVisible:we,visible:q,arrow:ie,clickOutsideClose:ue,onVisibleChange:Ce}=(0,s.S)(g,De,T==null?void 0:T.Trigger),Ue=(0,n.isValidElement)(V),Ke=(0,n.useRef)(null),Ze=(0,n.useRef)(null),Ve=u(Q),ze=(0,n.useRef)(null),je=(0,i.x1)(Ve,ze),We=(0,n.useRef)(null),[Y,Oe]=(0,p.R)(!1,{defaultValue:we,value:q,onChange:Ce}),{genPopupProps:Le,genTriggerProps:Fe}=R({clickOutsideClose:ue,delay:xe,disabled:te,visible:Y,onVisibleChange:Oe,trigger:ne,triggerEl:Ke.current,outFocusToClose:he});(0,n.useImperativeHandle)(L,()=>Ke.current);const Xe=(0,i.t4)(V),Je=(0,i.t4)(Q),He=(0,n.useCallback)(pe=>{var be;pe&&pe.type!=="resize"&&!((be=pe.target)!=null&&be.contains(Ke.current))||le({reference:Ke.current,popper:ze.current,arrow:Ze.current},{placement:J,enableFlip:W,enableShift:oe,offset:me})},[J,W,oe,me]),[Ge,Qe]=(0,n.useState)([]),Pe=(0,n.useCallback)(de(()=>new Promise(pe=>{He(),pe(void 0)})),[J,W,oe,me]);(0,l.L)(()=>{const pe=F(Ke.current),be=F(ze.current),$e=[...pe,...be];Qe($e)},[]);const Te=()=>{Ge.forEach(pe=>{pe.addEventListener("scroll",Pe,{passive:!0})}),window.addEventListener("resize",Pe,{passive:!0})},Ae=()=>{Ge.forEach(pe=>{pe.removeEventListener("scroll",Pe)}),window.removeEventListener("resize",Pe)};if((0,l.L)(()=>{var pe,be;Y!==void 0&&(Y===!0?((pe=We.current)==null||pe.toggle(!0),Pe(),Te()):Y===!1&&((be=We.current)==null||be.toggle(!1),Ae()))},[Y]),(0,l.L)(()=>{if(Y)return Pe(),Ae(),Te(),()=>Ae()},[J,Y,Ge,W,oe,me]),!Ue)return;const Re=()=>Q?n.createElement(B.Z,O({ref:We},ae),({className:pe})=>n.createElement(P,{getContainer:w},n.createElement("div",ve(O({role:"tooltip"},Le()),{className:(0,v.default)(pe,H),style:ve(O({},Ee),{zIndex:k})}),ie?n.createElement("div",{ref:Ze,style:ve(O({},Ne),{zIndex:k})},ie):null,(0,n.cloneElement)(Q,{ref:je})))):null;return n.createElement(n.Fragment,null,n.createElement(r,{ref:Ke,onResize:()=>Pe()},(0,n.cloneElement)(V,O({},Fe(V)))),Re())});ye.displayName="Trigger";const ge=ye},36112:function(I,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return m}});var n=e(15656),v=e(98479),s=e.n(v),p={};for(var l in v)["default","Trigger"].indexOf(l)<0&&(p[l]=function(x){return v[x]}.bind(0,l));e.d(t,p);const o=n.Z,m=o},98479:function(){},84176:function(I,t,e){var n=e(75863);function v(s,p){if(s==null)return{};var l=n(s,p),o,m;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(s);for(m=0;m<x.length;m++)o=x[m],!(p.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(l[o]=s[o])}return l}I.exports=v,I.exports.__esModule=!0,I.exports.default=I.exports},75863:function(I){function t(e,n){if(e==null)return{};var v={},s=Object.keys(e),p,l;for(l=0;l<s.length;l++)p=s[l],!(n.indexOf(p)>=0)&&(v[p]=e[p]);return v}I.exports=t,I.exports.__esModule=!0,I.exports.default=I.exports},7829:function(I,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return v}});function n(s){var p,l,o="";if(typeof s=="string"||typeof s=="number")o+=s;else if(typeof s=="object")if(Array.isArray(s)){var m=s.length;for(p=0;p<m;p++)s[p]&&(l=n(s[p]))&&(o&&(o+=" "),o+=l)}else for(l in s)s[l]&&(o&&(o+=" "),o+=l);return o}function v(){for(var s,p,l=0,o="",m=arguments.length;l<m;l++)(s=arguments[l])&&(p=n(s))&&(o&&(o+=" "),o+=p);return o}t.default=v},10735:function(I,t,e){"use strict";e.d(t,{Y:function(){return p}});var n=e(53360),v=e(90940);const s=(l,o,m,x,h)=>{clearTimeout(x.current);const f=(0,v.y0)(l);o(f),m.current=f,h&&h({current:f})},p=({enter:l=!0,exit:o=!0,preEnter:m,preExit:x,timeout:h,initialEntered:f,mountOnEnter:d,unmountOnExit:u,onStateChange:i}={})=>{const[c,r]=(0,n.useState)(()=>(0,v.y0)(f?v.cn:(0,v.Ef)(d))),a=(0,n.useRef)(c),C=(0,n.useRef)(),[y,E]=(0,v.fj)(h),A=(0,n.useCallback)(()=>{const P=(0,v.XZ)(a.current._s,u);P&&s(P,r,a,C,i)},[i,u]),D=(0,n.useCallback)(P=>{const B=$=>{switch(s($,r,a,C,i),$){case v.d0:y>=0&&(C.current=setTimeout(A,y));break;case v.Ix:E>=0&&(C.current=setTimeout(A,E));break;case v.iL:case v.iU:C.current=(0,v.Y3)(B,$);break}},j=a.current.isEnter;typeof P!="boolean"&&(P=!j),P?!j&&B(l?m?v.iL:v.d0:v.cn):j&&B(o?x?v.iU:v.Ix:(0,v.Ef)(u))},[A,i,l,o,m,x,y,E,u]);return[c,D,A]}},90940:function(I,t,e){"use strict";e.d(t,{Ef:function(){return f},Ix:function(){return l},XZ:function(){return d},Y3:function(){return i},cn:function(){return s},d0:function(){return v},fj:function(){return u},iL:function(){return n},iU:function(){return p},y0:function(){return h}});const n=0,v=1,s=2,p=3,l=4,o=5,m=6,x=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=c=>({_s:c,status:x[c],isEnter:c<p,isMounted:c!==m,isResolved:c===s||c>l}),f=c=>c?m:o,d=(c,r)=>{switch(c){case v:case n:return s;case l:case p:return f(r)}},u=c=>typeof c=="object"?[c.enter,c.exit]:[c,c],i=(c,r)=>setTimeout(()=>{isNaN(document.body.offsetTop)||c(r+1)},0)}}]);
}());