!(function(){var sn=Object.defineProperty,ln=Object.defineProperties;var dn=Object.getOwnPropertyDescriptors;var Je=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable;var qe=(x,t,e)=>t in x?sn(x,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[t]=e,W=(x,t)=>{for(var e in t||(t={}))_e.call(t,e)&&qe(x,e,t[e]);if(Je)for(var e of Je(t))en.call(t,e)&&qe(x,e,t[e]);return x},be=(x,t)=>ln(x,dn(t));var Ke=(x,t)=>{var e={};for(var n in x)_e.call(x,n)&&t.indexOf(n)<0&&(e[n]=x[n]);if(x!=null&&Je)for(var n of Je(x))t.indexOf(n)<0&&en.call(x,n)&&(e[n]=x[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{36419:function(x,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return ye}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return f.D},useIsomorphicLayoutEffect:function(){return i.L},useMergeProps:function(){return o.S},useMergeState:function(){return P.R},usePrevious:function(){return E.D},useResizeObserver:function(){return N.y}});var m={};e.r(m),e.d(m,{canUseDom:function(){return g.J},debounce:function(){return D.D},isArray:function(){return L.kJ},isEmptyObject:function(){return L.Qr},isFunction:function(){return L.mf},isNumber:function(){return L.hj},isObject:function(){return L.Kn},isString:function(){return L.HD},isUndefined:function(){return L.o8},omit:function(){return w.C},pick:function(){return J},throttle:function(){return H.P}});var r={};e.r(r),e.d(r,{default:function(){return j.Y},useTransition:function(){return j.Y},useTransitionMap:function(){return Y},useTransitionState:function(){return j.Y}});var c=e(90819),s=e.n(c),a=e(89933),v=e.n(a),I=e(53360),h=e.t(I,2),u=e(45990),p=e(4177),d=e(86752),l=e.t(d,2),f=e(37797),i=e(60164),o=e(7657),P=e(62222),E=e(45844),N=e(8240),g=e(34028),D=e(78831),L=e(80703),w=e(12598);function J(V,ue){const ce={};return ue.forEach(M=>{M in V&&(ce[M]=V[M])}),ce}var H=e(6890),q=e(22532),S=e(75257),O=e(7829),j=e(64508),$=e(75601);const Q=(V,ue,ce,M,A,ee)=>{clearTimeout(A);const b=(0,$.y0)(ue),fe=new Map(M.current);fe.set(V,b),ce(fe),M.current=fe,ee&&ee({key:V,current:b})},Y=({allowMultiple:V,enter:ue=!0,exit:ce=!0,preEnter:M,preExit:A,timeout:ee,initialEntered:b,mountOnEnter:fe,unmountOnExit:Ee,onStateChange:k}={})=>{const[Re,C]=(0,I.useState)(new Map),U=(0,I.useRef)(Re),y=(0,I.useRef)(new Map),[te,oe]=(0,$.fj)(ee),me=(0,I.useCallback)((ie,K)=>{const{initialEntered:z=b}=K||{},he=z?$.cn:(0,$.Ef)(fe);Q(ie,he,C,U),y.current.set(ie,{})},[b,fe]),ve=(0,I.useCallback)(ie=>{const K=new Map(U.current);return K.delete(ie)?(C(K),U.current=K,y.current.delete(ie),!0):!1},[]),ne=(0,I.useCallback)(ie=>{const K=U.current.get(ie);if(!K)return;const{timeoutId:z}=y.current.get(ie),he=(0,$.XZ)(K._s,Ee);he&&Q(ie,he,C,U,z,k)},[k,Ee]),pe=(0,I.useCallback)((ie,K)=>{const z=U.current.get(ie);if(!z)return;const he=y.current.get(ie),Pe=xe=>{switch(Q(ie,xe,C,U,he.timeoutId,k),xe){case $.d0:te>=0&&(he.timeoutId=setTimeout(()=>ne(ie),te));break;case $.Ix:oe>=0&&(he.timeoutId=setTimeout(()=>ne(ie),oe));break;case $.iL:case $.iU:he.timeoutId=(0,$.Y3)(Pe,xe);break}},re=z.isEnter;typeof K!="boolean"&&(K=!re),K?re||(Pe(ue?M?$.iL:$.d0:$.cn),!V&&U.current.forEach((xe,X)=>X!==ie&&pe(X,!1))):re&&Pe(ce?A?$.iU:$.Ix:(0,$.Ef)(Ee))},[k,ne,V,ue,ce,M,A,te,oe,Ee]),ae=(0,I.useCallback)(ie=>{if(!(!V&&ie!==!1))for(const K of U.current.keys())pe(K,ie)},[V,pe]);return{stateMap:Re,toggle:pe,toggleAll:ae,endTransition:ne,setItem:me,deleteItem:ve}};var F=e(53175),_=e(67324),R=e(71932),T=e(31716),B=e(95154),Z=e(81184),G=e.t(Z,2),ye={"sqi-web-src-common-demo-portal":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,99902))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49108).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":p,react:h,"@sqi-ui/web":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":p,"react-dom":l,"@sqi-ui/hooks":n,"@sqi-ui/utils":m},renderOpts:{compile:function(){var V=v()(s()().mark(function ce(){var M,A=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(M=b.sent).default.apply(M,A));case 3:case"end":return b.stop()}},ce)}));function ue(){return V.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-base":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,74587))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58072).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":q,"../CSSMotion.tsx":S,"../config-provider/context.ts":F,react:h,"@sqi-ui/web":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":q,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":S,clsx:O,"react-transition-state":r,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":F},renderOpts:{compile:function(){var V=v()(s()().mark(function ce(){var M,A=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(M=b.sent).default.apply(M,A));case 3:case"end":return b.stop()}},ce)}));function ue(){return V.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,85773))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":q,"../CSSMotion.tsx":S,"../config-provider/context.ts":F,react:h,"@sqi-ui/web":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":q,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":S,clsx:O,"react-transition-state":r,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":F},renderOpts:{compile:function(){var V=v()(s()().mark(function ce(){var M,A=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(M=b.sent).default.apply(M,A));case 3:case"end":return b.stop()}},ce)}));function ue(){return V.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-portal":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,6685))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1175).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},"./motion.css":{type:"FILE",value:e(79172).Z},"react-dom":{type:"NPM",value:"19.1.1"},clsx:{type:"NPM",value:"2.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"../Portal.tsx":p,"../CSSMotion.tsx":S,"./motion.css":q,"../config-provider/context.ts":F,react:h,"@sqi-ui/web":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":S,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":q,"react-dom":l,clsx:O,"@sqi-ui/hooks":n,"react-transition-state":r,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":F},renderOpts:{compile:function(){var V=v()(s()().mark(function ce(){var M,A=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(M=b.sent).default.apply(M,A));case 3:case"end":return b.stop()}},ce)}));function ue(){return V.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-resize-observer":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,80023))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25094).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(87425).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(90458).Z},"../_util/toArray.ts":{type:"FILE",value:e(17588).Z},"../_util/dom.ts":{type:"FILE",value:e(48557).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":_,"../_util/ref.ts":R,"../_util/toArray.ts":T,"../_util/dom.ts":B,react:h,"@sqi-ui/web":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":_,"@sqi-ui/utils":m,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":R,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":T,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":B,"react-is":G},renderOpts:{compile:function(){var V=v()(s()().mark(function ce(){var M,A=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(M=b.sent).default.apply(M,A));case 3:case"end":return b.stop()}},ce)}));function ue(){return V.apply(this,arguments)}return ue}()}}}},13842:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I={"sqi-web-src-alert-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,73819))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95121).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-alert-demo-type":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,15202))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75458).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-alert-demo-action":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,35563))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44633).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}}}},6677:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-button-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,16286))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-disabled":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,98669))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41122).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-loading":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,86011))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-variant":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,18024))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42791).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-size":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,7792))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95453).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}}}},58718:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I=e(84912),h={"sqi-web-src-checkbox-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,42303))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52648).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-control":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,24394))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10654).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-group":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,55519))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,8780))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42331).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-custom-render":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,98868))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(302).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-options":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,41499))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37544).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}}}},94435:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I={"sqi-web-src-config-provider-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,40787))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71841).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-config-provider-demo-nest":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,30933))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77322).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}}}},29876:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I={"sqi-web-src-divider-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,35038))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54117).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-divider-demo-with-text":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,31503))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58549).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-divider-demo-vertical":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,35680))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65325).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}}}},60061:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I=e(66351),h={"sqi-web-src-grid-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,69753))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9098).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-gap":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,93817))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96507).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-flex":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,26989))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8872).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-justify":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,33271))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17153).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-align":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,32093))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95921).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-offset":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,29727))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78066).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-order":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,30407))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82986).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-responsive":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,56682))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23972).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}}}},13438:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(5629),I=e(45990),h={"sqi-web-src-icon-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,73043))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/icons":v,"@sqi-ui/web":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-icon-demo-color":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,37317))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36848).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/icons":v,"@sqi-ui/web":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-icon-demo-custom":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,28981))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66135).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/icons":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}}}},73931:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-input-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,27878))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25623).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-size":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,30525))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38082).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-variant":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,99670))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8899).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-align":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,66666))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(90822).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-status":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,32910))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13589).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-tips":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,77182))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56596).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-addon":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,52035))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34941).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-affix":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,96294))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80488).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-password":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,72326))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31475).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-max-length":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,20416))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37604).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}}}},95752:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I=e(74944),h={"sqi-web-src-radio-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,75228))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71038).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-appearance":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,1753))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31932).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-disabled":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,46052))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8910).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-size":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,99789))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32105).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-vertical":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,37848))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-custom-render":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,75386))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2930).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-options":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,91859))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27389).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}}}},5237:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I={"sqi-web-src-space-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,72626))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7420).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-space-demo-direction-vertical":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,19067))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39113).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-space-demo-align":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,1251))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74317).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-space-demo-wrap":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,44842))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(24811).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}},"sqi-web-src-space-demo-split":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,66545))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17474).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function p(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},p)}));function u(){return h.apply(this,arguments)}return u}()}}}},26973:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-switch-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,4275))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(53483).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-switch-demo-status":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,92394))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37147).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-switch-demo-size":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,75906))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(72727).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}},"sqi-web-src-switch-demo-custom-icon":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,54014))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(83852).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var u=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function p(){return u.apply(this,arguments)}return p}()}}}},37666:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return p}});var m=e(90819),r=e.n(m),c=e(89933),s=e.n(c),a=e(53360),v=e(45990),I=e(43261),h=e(45513),u=e(52342),p={"sqi-web-src-trigger-demo-popper":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,44554))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-popper",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29447).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(91778).Z},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z}},entry:"index.tsx"},context:{"./demo.module.css":I,"./_wrapper.tsx":h,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":I,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h},renderOpts:{compile:function(){var d=s()(r()().mark(function f(){var i,o=arguments;return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(70).then(e.bind(e,25070));case 2:return E.abrupt("return",(i=E.sent).default.apply(i,o));case 3:case"end":return E.stop()}},f)}));function l(){return d.apply(this,arguments)}return l}()}},"sqi-web-src-trigger-demo-basic-trigger":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,32114))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-basic-trigger",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54513).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(96443).Z},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z},"./demo.module.css":{type:"FILE",value:e(91778).Z}},entry:"index.tsx"},context:{"./motion.css":u,"./_wrapper.tsx":h,"./demo.module.css":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":I},renderOpts:{compile:function(){var d=s()(r()().mark(function f(){var i,o=arguments;return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(70).then(e.bind(e,25070));case 2:return E.abrupt("return",(i=E.sent).default.apply(i,o));case 3:case"end":return E.stop()}},f)}));function l(){return d.apply(this,arguments)}return l}()}}}},75257:function(x,t,e){"use strict";e.r(t);var n=e(73193),m=e.n(n),r=e(10154),c=e.n(r),s=e(45332),a=e.n(s),v=e(84176),I=e.n(v),h=e(53360),u=e(7829),p=e(64508),d=e(80703),l=e(53175),f=["children","name","prefixCls"],i=(0,h.forwardRef)(function(o,P){var E=(0,h.useContext)(l.ConfigContext),N=o.children,g=o.name,D=o.prefixCls,L=I()(o,f),w=(0,p.Y)(L),J=a()(w,2),H=J[0],q=J[1],S=(0,h.isValidElement)(N);(0,h.useImperativeHandle)(P,function(){return{toggle:q}});var O="".concat(D||E.prefixCls).concat(g?"-".concat(g):""),j=(0,u.default)(["".concat(O,"-motion")],c()({},"".concat(O,"-motion-").concat(H.status),H.status));return(0,d.mf)(N)?H.isMounted?N(m()(m()({},H),{},{className:j,toggle:q})):null:S?H.isMounted?(0,h.cloneElement)(N,{className:(0,u.default)(N.props.className,j)}):null:N});i.displayName="CSSMotion",t.default=i},4177:function(x,t,e){"use strict";e.r(t);var n=e(45332),m=e.n(n),r=e(53360),c=e(86752),s=e(60164),a=e(34028),v=e(80703),I=(0,a.J)();function h(p){return I?(0,v.HD)(p)?document.querySelector(p):(0,v.mf)(p)?p():p instanceof HTMLElement?p:document.body:null}var u=(0,r.forwardRef)(function(p,d){var l=p.getContainer,f=p.prefixCls,i=p.children,o=p.open,P=o===void 0?!0:o,E=p.rootStyle,N=(0,r.useState)(null),g=m()(N,2),D=g[0],L=g[1],w=(0,r.useState)(null),J=m()(w,2),H=J[0],q=J[1],S=H||document.body;(0,r.useEffect)(function(){var j=h(l);q(j||null)},[l]);var O=function(){if(!I||D)return null;var $=document.createElement("div");f&&($.className="".concat(f,"-portal-wrapper")),E&&Object.assign($.style,E),$.setAttribute("data-portal","true"),L($)};return(0,s.L)(function(){I&&(P?O():L(null))},[P]),(0,r.useImperativeHandle)(d,function(){return D},[D]),(0,s.L)(function(){if(!(!I||!D)){var j=function(){return!D.parentNode&&S.appendChild(D)},$=function(){var Y;return(Y=D.parentNode)===null||Y===void 0?void 0:Y.removeChild(D)};return P?j():$(),function(){$()}}},[P,D]),P&&i&&D?(0,c.createPortal)(i,D):null});u.displayName="Portal",t.default=u},67324:function(x,t,e){"use strict";e.r(t);var n=e(53360),m=e(6890),r=e(8240),c=e(31716),s=e(95154),a=e(71932),v=(0,n.forwardRef)(function(I,h){var u=I.children,p=I.disabled,d=I.throttleMs,l=d===void 0?100:d,f=I.onResize,i=(0,n.isValidElement)(u),o=i?(0,c.toArray)(u):[],P=i?(0,s.getReactNodeRef)(u):null,E=(0,n.useRef)(null),N=(0,a.useComposeRef)(P,E),g=function(){return(0,s.getRefDom)(E)};(0,n.useImperativeHandle)(h,function(){return g()});var D=f?(0,m.P)(f,l):void 0;return(0,r.y)(g(),D,!p),i?(0,n.cloneElement)(u,{ref:N}):u});v.displayName="ResizeObserverComponent",t.default=v},95154:function(x,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return s},getReactNodeRef:function(){return v},getRefDom:function(){return a},isDOM:function(){return c}});var n=e(89957),m=e.n(n),r=e(53360);function c(I){return I instanceof HTMLElement||I instanceof SVGElement}function s(I){return I&&m()(I)==="object"&&c(I.nativeElement)?I.nativeElement:c(I)?I:null}function a(I){if(I)return I.current&&m()(I.current)==="object"&&"currentElement"in I.current?I.current.currentElement:I.current}function v(I){var h=I&&(0,r.isValidElement)(I);if(!h)return null;if(parseInt(r.version)>=19){var u;return((u=I.props)===null||u===void 0?void 0:u.ref)||null}return I.ref}},71932:function(x,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return s},fillRef:function(){return a},supportNodeRef:function(){return u},supportRef:function(){return I},useComposeRef:function(){return v}});var n=e(37797),m=e(80703),r=e(53360),c=e(11607),s=function(){for(var d=arguments.length,l=new Array(d),f=0;f<d;f++)l[f]=arguments[f];var i=l.filter(Boolean);return i.length<=1?i[0]:function(o){l.forEach(function(P){a(P,o)})}},a=function(d,l){(0,m.mf)(d)?d(l):(0,m.Kn)(d)&&"current"in d&&(d.current=l)},v=function(){for(var d=arguments.length,l=new Array(d),f=0;f<d;f++)l[f]=arguments[f];return(0,n.D)(function(){return s.apply(void 0,l)},l,function(i,o){return i.length!==o.length||i.every(function(P,E){return P!==o[E]})})},I=function(d){var l,f;if(!d)return!1;var i=parseInt(r.version);if(h(d)&&i>=19)return!0;var o=(0,c.isMemo)(d)?d.type.type:d.type;return!(typeof o=="function"&&!((l=o.prototype)!==null&&l!==void 0&&l.render)&&o.$$typeof!==c.ForwardRef||typeof d=="function"&&!((f=d.prototype)!==null&&f!==void 0&&f.render)&&d.$$typeof!==c.ForwardRef)};function h(p){return(0,r.isValidElement)(p)&&!(0,c.isFragment)(p)}var u=function(d){return h(d)&&I(d)}},31716:function(x,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return r}});var n=e(53360),m=e(11607);function r(c){var s=[];return n.Children.toArray(c).forEach(function(a){a!=null&&(Array.isArray(a)?s=s.concat(r(a)):(0,n.isValidElement)(a)&&(0,m.isFragment)(a)&&a.props?s=s.concat(r(a.props.children)):s.push(a))}),s}},84912:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),m=e(69787);function r(c){var s=c.item,a=c.checked,v={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(a?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:a?"var(--sqi-brand-color)":"",backgroundColor:a?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},I={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:a?1:0,transition:"all 0.3s"};return(0,m.jsxs)("div",{style:v,children:[(0,m.jsx)("div",{style:I}),(0,m.jsx)("strong",{children:s}),(0,m.jsx)("div",{children:"this is a checkbox"})]})}},53175:function(x,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return r},defaultConfigProps:function(){return m}});var n=e(53360),m={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(m)},66351:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),m=e(69787);function r(c){var s=c.colorPalette,a=s===void 0?6:s,v=c.children,I=c.height;return(0,m.jsx)("div",{style:{height:I||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(a,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:v})}},74944:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),m=e(69787);function r(c){var s=c.item,a=c.checked,v={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(a?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:a?"var(--sqi-brand-color)":"",backgroundColor:a?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},I={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:a?1:0,transition:"all 0.3s"};return(0,m.jsxs)("div",{style:v,children:[(0,m.jsx)("div",{style:I}),(0,m.jsx)("strong",{children:s}),(0,m.jsx)("div",{children:"this is a radio"})]})}},45513:function(x,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return c}});var n=e(53360),m=e(43261),r=e(69787),c=(0,n.forwardRef)(function(s,a){var v=s.size,I=s.backgroundColor,h=s.children;return(0,r.jsx)("div",{ref:a,className:m.default.box,style:{width:v+"px",height:v+"px",backgroundColor:I},children:h})});c.displayName="Component"},22532:function(x,t,e){"use strict";e.r(t)},43261:function(x,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai","sqi-demo-motion":"lyPu5JRah80EXpc61PWj","sqi-demo-motion-preEnter":"wq8WrD6Ji_cIyktNYUsJ","sqi-demo-motion-exiting":"yRmFPwtGXTMctvysu9rP","sqi-demo-motion-entered":"rmokT3yXIS0BKvSg921n","sqi-demo-motion-exited":"XDMMMhdu0RkwQBzK1_dJ"}},52342:function(x,t,e){"use strict";e.r(t)},34481:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 css \u9690\u85CF\u7EC4\u4EF6",paraId:4}]},97302:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},81955:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},15096:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},38427:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},68291:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactN`ode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},18070:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},50409:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},50310:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u8F93\u5165\u6846\u7EC4\u4EF6",paraId:10,tocIndex:11},{value:"InputProps",paraId:10,tocIndex:11},{value:"\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:10,tocIndex:11},{value:"\u5C5E\u6027",paraId:11,tocIndex:12},{value:"\u63CF\u8FF0",paraId:11,tocIndex:12},{value:"\u7C7B\u578B",paraId:11,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:12},{value:"type",paraId:11,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:11,tocIndex:12},{value:"MDN",paraId:11,tocIndex:12},{value:"string",paraId:11,tocIndex:12},{value:"text",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:11,tocIndex:12},{value:"ConfigSize",paraId:11,tocIndex:12},{value:"md",paraId:11,tocIndex:12},{value:"status",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:11,tocIndex:12},{value:"success",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"warning",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"error",paraId:11,tocIndex:12},{value:"tips",paraId:11,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"disabled",paraId:11,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"allowClear",paraId:11,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"align",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"center",paraId:11,tocIndex:12},{value:" |",paraId:11,tocIndex:12},{value:"right",paraId:11,tocIndex:12},{value:"left",paraId:11,tocIndex:12},{value:"variant",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"borderless",paraId:11,tocIndex:12},{value:"|",paraId:11,tocIndex:12},{value:"underline",paraId:11,tocIndex:12},{value:"outline",paraId:11,tocIndex:12},{value:"addonBefore",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"addonAfter",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"prefix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"suffix",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"visibilityToggle",paraId:11,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"VisibilityToggle",paraId:12,tocIndex:12},{value:"maxLength",paraId:11,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:11,tocIndex:12},{value:"number",paraId:11,tocIndex:12},{value:"| ",paraId:11,tocIndex:12},{value:"MaxLength",paraId:13,tocIndex:12},{value:"onChange",paraId:11,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:11,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:11,tocIndex:12},{value:"\u5C5E\u6027",paraId:14,tocIndex:13},{value:"\u63CF\u8FF0",paraId:14,tocIndex:13},{value:"\u7C7B\u578B",paraId:14,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:13},{value:"visible",paraId:14,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:14,tocIndex:13},{value:"boolean",paraId:14,tocIndex:13},{value:"renderIcon",paraId:14,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:14,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:14,tocIndex:13},{value:"onVisibleChange",paraId:14,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:14,tocIndex:13},{value:"(visible: boolean) => void",paraId:14,tocIndex:13},{value:"\u5C5E\u6027",paraId:15,tocIndex:14},{value:"\u63CF\u8FF0",paraId:15,tocIndex:14},{value:"\u7C7B\u578B",paraId:15,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:14},{value:"length",paraId:15,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:15,tocIndex:14},{value:"number",paraId:15,tocIndex:14},{value:"showLimit",paraId:15,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14},{value:"true",paraId:15,tocIndex:14},{value:"errorOnly",paraId:15,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:15,tocIndex:14},{value:"boolean",paraId:15,tocIndex:14}]},65793:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},18328:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u63CF\u8FF0",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"size",paraId:1,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:1,tocIndex:6},{value:"SizeType",paraId:2,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"[SizeType, SizeType]",paraId:1,tocIndex:6},{value:"direction",paraId:1,tocIndex:6},{value:"\u65B9\u5411",paraId:1,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:1,tocIndex:6},{value:"'horizontal'",paraId:1,tocIndex:6},{value:"align",paraId:1,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:1,tocIndex:6},{value:"wrap",paraId:1,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"false",paraId:1,tocIndex:6},{value:"split",paraId:1,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u63CF\u8FF0",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"SizeType",paraId:3,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:3,tocIndex:7},{value:"ConfigSize",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"undefined",paraId:3,tocIndex:7}]},70966:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"defaultChecked",paraId:0,tocIndex:5},{value:"\u975E\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"checked",paraId:0,tocIndex:5},{value:"\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"disabled",paraId:0,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"size",paraId:0,tocIndex:5},{value:"\u5C3A\u5BF8",paraId:0,tocIndex:5},{value:"sm",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"lg",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"label",paraId:0,tocIndex:5},{value:"\u6587\u672C",paraId:0,tocIndex:5},{value:"[checked?: ReactNode, unchecked?: ReactNode]",paraId:0,tocIndex:5},{value:"loading",paraId:0,tocIndex:5},{value:"loading \u72B6\u6001",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"loadingIcon",paraId:0,tocIndex:5},{value:"\u81EA\u5B9A\u4E49 loading \u56FE\u6807",paraId:0,tocIndex:5},{value:"ReactNode",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5},{value:"onClick",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1(\u7981\u7528\u72B6\u6001\u65E0\u6548)",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5}]},8825:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 Popover \u7EC4\u4EF6\uFF08\u89C4\u5212\u4E2D\uFF09\u6765\u66FF\u4EE3 Trigger \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popperjs \u7684\u57FA\u7840\u529F\u80FD\uFF08\u903B\u8F91\u5B9E\u73B0\u5E76\u4E0D\u4F18\u96C5\uFF0C\u4E14\u8BF8\u591A\u60C5\u51B5\u672A\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:2,tocIndex:1},{value:"table th tr",paraId:2,tocIndex:1},{value:" \u4E0B\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0Ccss ",paraId:2,tocIndex:1},{value:"will-change transform",paraId:2,tocIndex:1},{value:" \u7B49\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF09",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u91C7\u53D6\u628A\u7BAD\u5934\u76F8\u5BF9\u4E8E popper \u5B9A\u4F4D\uFF0C\u8FDB\u884C\u5C0F\u8303\u56F4\u504F\u79FB\u53EF\u4EE5\u51CF\u5C11\u975E\u5E38\u591A\u903B\u8F91\u4EE3\u7801",paraId:3,tocIndex:1},{value:"\u540E\u7EED\u53EF\u80FD\u4F1A\u5BF9\u5B9A\u4F4D\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C\u6709\u80FD\u529B\u91CD\u5199\u7684\u8BDD\uFF0CI am very vegetable :)",paraId:4,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:5},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"top",paraId:6},{value:" \u548C ",paraId:6},{value:"bottom",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 y \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C",paraId:6},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"left",paraId:6},{value:" \u548C ",paraId:6},{value:"right",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 x \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C\u3002",paraId:6},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popper \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08\u4E5F\u4E0D\u662F\u8BEF\u5DEE\uFF0C\u800C\u662F\u6B64\u65F6 popper \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:7},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:8,tocIndex:2},{value:"transform",paraId:8,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:8,tocIndex:2},{value:"\u5C5E\u6027",paraId:9,tocIndex:3},{value:"\u63CF\u8FF0",paraId:9,tocIndex:3},{value:"\u7C7B\u578B",paraId:9,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:3},{value:"children",paraId:9,tocIndex:3},{value:"\u89E6\u53D1\u7684\u76EE\u6807\u5143\u7D20",paraId:9,tocIndex:3},{value:"ReactElement",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"popper",paraId:9,tocIndex:3},{value:"\u60AC\u6D6E\u5143\u7D20",paraId:9,tocIndex:3},{value:"ReactElement",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"arrow",paraId:9,tocIndex:3},{value:"\u7BAD\u5934\u5143\u7D20",paraId:9,tocIndex:3},{value:"ReactElement",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"motion",paraId:9,tocIndex:3},{value:"\u52A8\u753B props \u7EE7\u627F\u81EA ",paraId:9,tocIndex:3},{value:"react-transition-state",paraId:9,tocIndex:3},{value:"Omit<CSSMotionProps, 'children'>",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"direction",paraId:9,tocIndex:3},{value:"popper \u4F4D\u7F6E",paraId:9,tocIndex:3},{value:"TriggerDirection",paraId:9,tocIndex:3},{value:"bottom",paraId:9,tocIndex:3},{value:"enableFlip",paraId:9,tocIndex:3},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"true",paraId:9,tocIndex:3},{value:"enableShift",paraId:9,tocIndex:3},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"true",paraId:9,tocIndex:3},{value:"offset",paraId:9,tocIndex:3},{value:"popper \u504F\u79FB\u91CF",paraId:9,tocIndex:3},{value:"number | { x: number; y: number }",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"zIndex",paraId:9,tocIndex:3},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:9,tocIndex:3},{value:"number",paraId:9,tocIndex:3},{value:"0",paraId:9,tocIndex:3},{value:"getContainer",paraId:9,tocIndex:3},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:9,tocIndex:3},{value:"string | HTMLElement | () => HTMLElement",paraId:9,tocIndex:3},{value:"document.body",paraId:9,tocIndex:3},{value:"trigger",paraId:9,tocIndex:3},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:9,tocIndex:3},{value:"TriggerType | TriggerType[]",paraId:9,tocIndex:3},{value:'"hover"',paraId:9,tocIndex:3},{value:"delay",paraId:9,tocIndex:3},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:9,tocIndex:3},{value:"number",paraId:9,tocIndex:3},{value:"100",paraId:9,tocIndex:3},{value:"clickOutsideClose",paraId:9,tocIndex:3},{value:"\u70B9\u51FB\u5916\u90E8\u662F\u5426\u53EF\u5173\u95ED",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"true",paraId:9,tocIndex:3},{value:"visible",paraId:9,tocIndex:3},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"onVisibleChange",paraId:9,tocIndex:3},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:9,tocIndex:3},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"disabled",paraId:9,tocIndex:3},{value:"\u7981\u7528\u884C\u4E3A",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"\u5171 12 \u4E2A\u65B9\u4F4D",paraId:10,tocIndex:4},{value:"top",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"right",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"bottom",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"left",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"top-start",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"top-end",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"right-start",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"right-end",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"bottom-start",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"bottom-end",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"left-start",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"left-end",paraId:11,tocIndex:4},{value:"\u5BF9\u5E94 eventListener \u7684\u4E8B\u4EF6\u540D\u79F0",paraId:12,tocIndex:5},{value:"hover",paraId:13,tocIndex:5},{value:" | ",paraId:13,tocIndex:5},{value:"click",paraId:13,tocIndex:5},{value:" | ",paraId:13,tocIndex:5},{value:"focus",paraId:13,tocIndex:5},{value:" | ",paraId:13,tocIndex:5},{value:"mousedown",paraId:13,tocIndex:5},{value:" | ",paraId:13,tocIndex:5},{value:"context-menu",paraId:13,tocIndex:5}]},6321:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},53483:function(x,t){"use strict";t.Z=`import React from 'react';
import { Space, Switch } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <Switch />
      <Switch label={['\u5F00', '\u5173']} />
    </Space>
  );
}
`},83852:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},72727:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},37147:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},54513:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},29447:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},27833:function(x,t,e){"use no memo";"use strict";var n=Object.create,m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,s=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,v=(R,T)=>{for(var B in T)m(R,B,{get:T[B],enumerable:!0})},I=(R,T,B,Z)=>{if(T&&typeof T=="object"||typeof T=="function")for(let G of c(T))!a.call(R,G)&&G!==B&&m(R,G,{get:()=>T[G],enumerable:!(Z=r(T,G))||Z.enumerable});return R},h=(R,T,B)=>(B=R!=null?n(s(R)):{},I(T||!R||!R.__esModule?m(B,"default",{value:R,enumerable:!0}):B,R)),u=R=>I(m({},"__esModule",{value:!0}),R),p={};v(p,{$dispatcherGuard:()=>H,$makeReadOnly:()=>S,$reset:()=>q,$structuralCheck:()=>_,c:()=>g,clearRenderCounterRegistry:()=>j,renderCounterRegistry:()=>O,useRenderCounter:()=>Y}),x.exports=u(p);var d=h(e(53360)),{useRef:l,useEffect:f,isValidElement:i}=d,o,P=(o=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)!=null?o:d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.memo_cache_sentinel"),N,g=typeof((N=d.__COMPILER_RUNTIME)==null?void 0:N.c)=="function"?d.__COMPILER_RUNTIME.c:function(T){return d.useMemo(()=>{const B=new Array(T);for(let Z=0;Z<T;Z++)B[Z]=E;return B[E]=!0,B},[])},D={};["readContext","useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","unstable_isNewReconciler","getCacheSignal","getCacheForType","useCacheRefresh"].forEach(R=>{D[R]=()=>{throw new Error(`[React] Unexpected React hook call (${R}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)}});var L=null;D.useMemoCache=R=>{if(L==null)throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");return L.useMemoCache(R)};function w(R){return P.ReactCurrentDispatcher.current=R,P.ReactCurrentDispatcher.current}var J=[];function H(R){const T=P.ReactCurrentDispatcher.current;if(R===0){if(J.push(T),J.length===1&&(L=T),T===D)throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");w(D)}else if(R===1){const B=J.pop();if(B==null)throw new Error("React Compiler internal error: unexpected null in guard stack");J.length===0&&(L=null),w(B)}else if(R===2)J.push(T),w(L);else if(R===3){const B=J.pop();if(B==null)throw new Error("React Compiler internal error: unexpected null in guard stack");w(B)}else throw new Error("React Compiler internal error: unreachable block"+R)}function q(R){for(let T=0;T<R.length;T++)R[T]=E}function S(){throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")}var O=new Map;function j(){for(const R of O.values())R.forEach(T=>{T.count=0})}function $(R,T){let B=O.get(R);B==null&&(B=new Set,O.set(R,B)),B.add(T)}function Q(R,T){const B=O.get(R);B!=null&&B.delete(T)}function Y(R){const T=l(null);T.current!=null&&(T.current.count+=1),f(()=>{if(T.current==null){const B={count:0};$(R,B),T.current=B}return()=>{T.current!==null&&Q(R,T.current)}})}var F=new Set;function _(R,T,B,Z,G,ye){function V(M,A,ee,b){const fe=`${Z}:${ye} [${G}] ${B}${ee} changed from ${M} to ${A} at depth ${b}`;F.has(fe)||(F.add(fe),console.error(fe))}const ue=2;function ce(M,A,ee,b){if(!(b>ue)){if(M===A)return;if(typeof M!=typeof A)V(`type ${typeof M}`,`type ${typeof A}`,ee,b);else if(typeof M=="object"){const fe=Array.isArray(M),Ee=Array.isArray(A);if(M===null&&A!==null)V("null",`type ${typeof A}`,ee,b);else if(A===null)V(`type ${typeof M}`,"null",ee,b);else if(M instanceof Map)if(!(A instanceof Map))V("Map instance","other value",ee,b);else if(M.size!==A.size)V(`Map instance with size ${M.size}`,`Map instance with size ${A.size}`,ee,b);else for(const[k,Re]of M)A.has(k)?ce(Re,A.get(k),`${ee}.get(${k})`,b+1):V(`Map instance with key ${k}`,`Map instance without key ${k}`,ee,b);else if(A instanceof Map)V("other value","Map instance",ee,b);else if(M instanceof Set)if(!(A instanceof Set))V("Set instance","other value",ee,b);else if(M.size!==A.size)V(`Set instance with size ${M.size}`,`Set instance with size ${A.size}`,ee,b);else for(const k of A)M.has(k)||V(`Set instance without element ${k}`,`Set instance with element ${k}`,ee,b);else if(A instanceof Set)V("other value","Set instance",ee,b);else if(fe||Ee)if(fe!==Ee)V(`type ${fe?"array":"object"}`,`type ${Ee?"array":"object"}`,ee,b);else if(M.length!==A.length)V(`array with length ${M.length}`,`array with length ${A.length}`,ee,b);else for(let k=0;k<M.length;k++)ce(M[k],A[k],`${ee}[${k}]`,b+1);else if(i(M)||i(A))i(M)!==i(A)?V(`type ${i(M)?"React element":"object"}`,`type ${i(A)?"React element":"object"}`,ee,b):M.type!==A.type?V(`React element of type ${M.type}`,`React element of type ${A.type}`,ee,b):ce(M.props,A.props,`[props of ${ee}]`,b+1);else{for(const k in A)k in M||V(`object without key ${k}`,`object with key ${k}`,ee,b);for(const k in M)k in A?ce(M[k],A[k],`${ee}.${k}`,b+1):V(`object with key ${k}`,`object without key ${k}`,ee,b)}}else{if(typeof M=="function")return;isNaN(M)||isNaN(A)?isNaN(M)!==isNaN(A)&&V(`${isNaN(M)?"NaN":"non-NaN value"}`,`${isNaN(A)?"NaN":"non-NaN value"}`,ee,b):M!==A&&V(M,A,ee,b)}}}ce(R,T,"",0)}},11607:function(x,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler");Symbol.for("react.provider");var s=Symbol.for("react.consumer"),a=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.for("react.view_transition"),l=Symbol.for("react.client.reference");function f(i){if(typeof i=="object"&&i!==null){var o=i.$$typeof;switch(o){case e:switch(i=i.type,i){case m:case c:case r:case I:case h:case d:return i;default:switch(i=i&&i.$$typeof,i){case a:case v:case p:case u:return i;case s:return i;default:return o}}case n:return o}}}t.ContextConsumer=s,t.ContextProvider=a,t.Element=e,t.ForwardRef=v,t.Fragment=m,t.Lazy=p,t.Memo=u,t.Portal=n,t.Profiler=c,t.StrictMode=r,t.Suspense=I,t.SuspenseList=h,t.isContextConsumer=function(i){return f(i)===s},t.isContextProvider=function(i){return f(i)===a},t.isElement=function(i){return typeof i=="object"&&i!==null&&i.$$typeof===e},t.isForwardRef=function(i){return f(i)===v},t.isFragment=function(i){return f(i)===m},t.isLazy=function(i){return f(i)===p},t.isMemo=function(i){return f(i)===u},t.isPortal=function(i){return f(i)===n},t.isProfiler=function(i){return f(i)===c},t.isStrictMode=function(i){return f(i)===r},t.isSuspense=function(i){return f(i)===I},t.isSuspenseList=function(i){return f(i)===h},t.isValidElementType=function(i){return typeof i=="string"||typeof i=="function"||i===m||i===c||i===r||i===I||i===h||typeof i=="object"&&i!==null&&(i.$$typeof===p||i.$$typeof===u||i.$$typeof===a||i.$$typeof===s||i.$$typeof===v||i.$$typeof===l||i.getModuleId!==void 0)},t.typeOf=f},81184:function(x,t,e){"use strict";x.exports=e(11607)},37797:function(x,t,e){"use strict";e.d(t,{D:function(){return m}});var n=e(53360);function m(r,c,s){const a=(0,n.useRef)({});return(!("value"in a.current)||s(a.current.condition,c))&&(a.current.value=r(),a.current.condition=c),a.current.value}},60164:function(x,t,e){"use strict";e.d(t,{L:function(){return c}});var n=e(53360),m=e(34028);const c=(0,m.J)()?n.useLayoutEffect:n.useEffect},7657:function(x,t,e){"use strict";e.d(t,{S:function(){return m}});var n=e(53360);function m(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return(0,n.useMemo)(()=>{const a=W(W({},c),s),v=W({},r);for(const I in a)v[I]===void 0&&(v[I]=a[I]);return v},[r,c,s])}},62222:function(x,t,e){"use strict";e.d(t,{R:function(){return c}});var n=e(53360),m=e(80703),r=e(45844);function c(s,a){const{defaultValue:v,value:I,onChange:h}=a||{},[u,p]=(0,n.useState)(()=>(0,m.o8)(I)?(0,m.o8)(v)?(0,m.mf)(s)?s():s:(0,m.mf)(v)?v():v:I),d=(0,r.D)(I),l=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(l.current){l.current=!1;return}(0,m.o8)(I)&&d.current!==I&&p(I)},[I]);const f=(0,m.o8)(I)?u:I,i=(0,n.useCallback)(o=>{const P=(0,m.mf)(o)?o(f):o;(0,m.o8)(I)&&p(P),!Object.is(P,f)&&(h==null||h(P))},[u,f]);return[f,i]}},45844:function(x,t,e){"use strict";e.d(t,{D:function(){return m}});var n=e(53360);function m(r){const c=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{c.current=r},[r]),c}},8240:function(x,t,e){"use strict";e.d(t,{y:function(){return s}});var n=e(53360),m=e(20759),r=e(34028),c=e(60164);function s(a,v){let I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const h=(0,n.useRef)(null);h.current=v,(0,c.L)(()=>{let u=null;if(!I||!(0,r.J)()||!a)return;const p=d=>{var l;(l=h.current)==null||l.call(h,d)};return u=new m.Z(p),u.observe(a),()=>{if(u&&a){var d;u.unobserve(a),(d=u.disconnect)==null||d.call(u),u=null}}},[a,I])}},31136:function(x,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(53360);const r=(0,n.createContext)({})},37907:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(7829),r=e(31136);const c=(0,n.forwardRef)((a,v)=>{const E=a,{svg:I,type:h,spin:u,rotate:p,className:d,style:l}=E,f=Ke(E,["svg","type","spin","rotate","className","style"]),{prefixCls:i="sqi"}=(0,n.useContext)(r.Z),o=(0,m.default)(`${i}-icon`,{[`${i}-icon-spin`]:!!u&&!!I},d),P=l||{};return Number.isSafeInteger(p)&&(P.transform=`rotate(${p}deg)`),n.createElement("span",W({role:"img",ref:v,"aria-label":h,className:o,style:P},f),I)});c.displayName="Icon";const s=c},46874:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"add",ref:v},a)));c.displayName="AddIcon";const s=c},1824:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"browse",ref:v},a)));c.displayName="BrowseIcon";const s=c},85569:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"browse-off",ref:v},a)));c.displayName="BrowseOffIcon";const s=c},23436:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"check-circle-filled",ref:v},a)));c.displayName="CheckCircleFilledIcon";const s=c},46608:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"chevron-down",ref:v},a)));c.displayName="ChevronDownIcon";const s=c},58360:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"close-circle-filled",ref:v},a)));c.displayName="CloseCircleFilledIcon";const s=c},27377:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"close",ref:v},a)));c.displayName="CloseIcon";const s=c},50397:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"info-circle-filled",ref:v},a)));c.displayName="InfoCircleFilledIcon";const s=c},60333:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"loading",ref:v},a)));c.displayName="LoadingIcon";const s=c},36106:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"search",ref:v},a)));c.displayName="SearchIcon";const s=c},65466:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"upload",ref:v},a)));c.displayName="UploadIcon";const s=c},21925:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",W({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const c=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,W({svg:(0,n.createElement)(r),type:"warn-circle-filled",ref:v},a)));c.displayName="WarnCircleFilledIcon";const s=c},5629:function(x,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return r.Z},BrowseIcon:function(){return s.Z},BrowseOffIcon:function(){return c.Z},CheckCircleFilledIcon:function(){return a.Z},ChevronDownIcon:function(){return v.Z},CloseCircleFilledIcon:function(){return I.Z},CloseIcon:function(){return h.Z},IconContext:function(){return m.Z},InfoCircleFilledIcon:function(){return u.Z},LoadingIcon:function(){return p.Z},SearchIcon:function(){return d.Z},UploadIcon:function(){return l.Z},WarnCircleFilledIcon:function(){return f.Z},default:function(){return i}});var n=e(37907),m=e(31136),r=e(46874),c=e(85569),s=e(1824),a=e(23436),v=e(46608),I=e(58360),h=e(27377),u=e(50397),p=e(60333),d=e(36106),l=e(65466),f=e(21925);const i=n.Z},34028:function(x,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(x,t,e){"use strict";e.d(t,{D:function(){return n}});function n(m,r){let c=null;const s=function(){for(var a=arguments.length,v=new Array(a),I=0;I<a;I++)v[I]=arguments[I];c&&clearTimeout(c),c=setTimeout(()=>{m.apply(this,v),c=null},r)};return s.cancel=()=>{c&&(clearTimeout(c),c=null)},s}},80703:function(x,t,e){"use strict";e.d(t,{HD:function(){return s},Kn:function(){return a},Qr:function(){return v},hj:function(){return I},kJ:function(){return c},mf:function(){return m},o8:function(){return r}});const n=Object.prototype.toString;function m(h){return n.call(h)==="[object Function]"}function r(h){return h===void 0}function c(h){return n.call(h)==="[object Array]"}function s(h){return n.call(h)==="[object String]"}const a=h=>n.call(h)==="[object Object]",v=h=>{if(!a(h))return!0;for(const u in h)if(Object.prototype.hasOwnProperty.call(h,u))return!1;return!0},I=h=>n.call(h)==="[object Number]"&&h===h},12598:function(x,t,e){"use strict";e.d(t,{C:function(){return n}});function n(m,r){const c=Object.assign({},m);return Array.isArray(r)&&r.forEach(s=>{delete c[s]}),c}},6890:function(x,t,e){"use strict";e.d(t,{P:function(){return m}});var n=e(78831);function m(r,c){let s=null;const a=(0,n.D)(r,c),v=function(){for(var I=arguments.length,h=new Array(I),u=0;u<I;u++)h[u]=arguments[u];s===null?s=Date.now():Date.now()-s>=c&&(s=Date.now(),a.cancel()),a(...h)};return v.cancel=a.cancel,v}},92266:function(x,t,e){"use strict";e.d(t,{C:function(){return c},Z:function(){return s}});var n=e(53360),m=e(7829),r=e(62222);const c=(0,n.forwardRef)((a,v)=>{const w=a,{prefixCls:I,className:h,style:u,checked:p,disabled:d,defaultChecked:l=!1,type:f="checkbox",title:i,onChange:o,_getCheckedValue:P}=w,E=Ke(w,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[N,g]=(0,r.R)(l,{value:p});(0,n.useEffect)(()=>{P==null||P(N)},[N]);const D=(0,m.default)(I,h,{[`${I}-checked`]:N,[`${I}-disabled`]:d}),L=J=>{d||("checked"in a||g(J.target.checked),o==null||o({target:be(W({},a),{checked:J.target.checked}),event:J}))};return n.createElement("span",{className:D,title:i,style:u},n.createElement("input",be(W({},E),{className:`${I}-input`,ref:v,onChange:L,disabled:d,checked:N,type:f})),n.createElement("span",{className:`${I}-inner`}))});c.displayName="BaseCheckbox";const s=c},40549:function(x,t,e){"use strict";e.d(t,{Z:function(){return v}});var n=e(53360),m=e(7829),r=e(64508),c=e(80703),s=e(57577);const a=(0,n.forwardRef)((I,h)=>{const u=(0,n.useContext)(s.E),g=I,{children:p,name:d,prefixCls:l}=g,f=Ke(g,["children","name","prefixCls"]),[i,o]=(0,r.Y)(f),P=(0,n.isValidElement)(p);(0,n.useImperativeHandle)(h,()=>({toggle:o}));const E=`${l||u.prefixCls}${d?`-${d}`:""}`,N=(0,m.default)([`${E}-motion`],{[`${E}-motion-${i.status}`]:i.status});return(0,c.mf)(p)?i.isMounted?p(be(W({},i),{className:N,toggle:o})):null:P?i.isMounted?(0,n.cloneElement)(p,{className:(0,m.default)(p.props.className,N)}):null:p});a.displayName="CSSMotion";const v=a},4814:function(x,t,e){"use strict";e.d(t,{sQ:function(){return s},t4:function(){return u},x1:function(){return v}});var n=e(37797),m=e(80703),r=e(53360),c=e(11607);const s=function(){for(var p=arguments.length,d=new Array(p),l=0;l<p;l++)d[l]=arguments[l];const f=d.filter(Boolean);return f.length<=1?f[0]:i=>{d.forEach(o=>{a(o,i)})}},a=(p,d)=>{(0,m.mf)(p)?p(d):(0,m.Kn)(p)&&"current"in p&&(p.current=d)},v=function(){for(var p=arguments.length,d=new Array(p),l=0;l<p;l++)d[l]=arguments[l];return(0,n.D)(()=>s(...d),d,(f,i)=>f.length!==i.length||f.every((o,P)=>o!==i[P]))},I=p=>{var d,l;if(!p)return!1;const f=parseInt(r.version);if(h(p)&&f>=19)return!0;const i=(0,c.isMemo)(p)?p.type.type:p.type;return!(typeof i=="function"&&!((d=i.prototype)!=null&&d.render)&&i.$$typeof!==c.ForwardRef||typeof p=="function"&&!((l=p.prototype)!=null&&l.render)&&p.$$typeof!==c.ForwardRef)};function h(p){return(0,r.isValidElement)(p)&&!(0,c.isFragment)(p)}const u=p=>h(p)&&I(p)},21299:function(x,t,e){"use strict";e.d(t,{q:function(){return r}});var n=e(53360),m=e(11607);function r(c){let s=[];return n.Children.toArray(c).forEach(a=>{a!=null&&(Array.isArray(a)?s=s.concat(r(a)):(0,n.isValidElement)(a)&&(0,m.isFragment)(a)&&a.props?s=s.concat(r(a.props.children)):s.push(a))}),s}},69203:function(x,t,e){"use strict";e.d(t,{b:function(){return o}});var n=e(27833),m=e(53360),r=e(7829),c=e(7657),s=e(23436),a=e(50397),v=e(58360),I=e(21925),h=e(27377),u=e(40549),p=e(57577);const d={type:"info",showIcon:!0},l={success:s.Z,info:a.Z,error:v.Z,warning:I.Z},f=(0,m.forwardRef)((E,N)=>{const g=(0,n.c)(38),{prefixCls:D,componentConfig:L}=(0,m.useContext)(p.E),{className:w,style:J,title:H,description:q,type:S,closable:O,showIcon:j,action:$,icon:Q,onClose:Y}=(0,c.S)(E,d,L==null?void 0:L.Alert),F=(0,m.useRef)(null);let _;g[0]!==Q||g[1]!==S?(_=()=>(0,m.isValidElement)(Q)?Q:S?(0,m.createElement)(l[S]):null,g[0]=Q,g[1]=S,g[2]=_):_=g[2];const R=_,T=`${D}-alert`,B=`${D}-alert-${S}`;let Z;g[3]!==w||g[4]!==T||g[5]!==B?(Z=(0,r.default)(T,B,w),g[3]=w,g[4]=T,g[5]=B,g[6]=Z):Z=g[6];const G=Z;let ye;g[7]!==Y?(ye=Re=>{var C;(C=F.current)==null||C.toggle(),Y==null||Y(Re)},g[7]=Y,g[8]=ye):ye=g[8];const V=ye;let ue;g[9]!==D||g[10]!==R||g[11]!==j?(ue=j&&m.createElement("div",{className:`${D}-alert-icon`},R()),g[9]=D,g[10]=R,g[11]=j,g[12]=ue):ue=g[12];const ce=`${D}-alert-content`;let M;g[13]!==D||g[14]!==H?(M=!!H&&m.createElement("div",{className:`${D}-alert-title`},H),g[13]=D,g[14]=H,g[15]=M):M=g[15];const A=`${D}-alert-description`;let ee;g[16]!==q||g[17]!==A?(ee=m.createElement("div",{className:A},q),g[16]=q,g[17]=A,g[18]=ee):ee=g[18];let b;g[19]!==ce||g[20]!==M||g[21]!==ee?(b=m.createElement("div",{className:ce},M,ee),g[19]=ce,g[20]=M,g[21]=ee,g[22]=b):b=g[22];let fe;g[23]!==$||g[24]!==D?(fe=$&&m.createElement("div",{className:`${D}-alert-action`},$),g[23]=$,g[24]=D,g[25]=fe):fe=g[25];let Ee;g[26]!==O||g[27]!==V||g[28]!==D?(Ee=O&&m.createElement("button",{className:`${D}-alert-close`,onClick:V},m.createElement(h.Z,null)),g[26]=O,g[27]=V,g[28]=D,g[29]=Ee):Ee=g[29];let k;return g[30]!==G||g[31]!==N||g[32]!==J||g[33]!==b||g[34]!==fe||g[35]!==Ee||g[36]!==ue?(k=m.createElement(u.Z,{ref:F,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},m.createElement("div",{role:"alert",className:G,style:J,ref:N},ue,b,fe,Ee)),g[30]=G,g[31]=N,g[32]=J,g[33]=b,g[34]=fe,g[35]=Ee,g[36]=ue,g[37]=k):k=g[37],k});f.displayName="Alert";const o=f,P=null},60884:function(x,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(53360),m=e(7829),r=e(60333),c=e(7657),s=e(57577);const a={type:"default",variant:"default",htmlType:"button"},v=(0,n.forwardRef)((p,d)=>{const{prefixCls:l,size:f="md",componentConfig:i}=(0,n.useContext)(s.E),R=(0,c.S)(p,a,i==null?void 0:i.Button),{children:P,type:E,size:N=f,htmlType:g,status:D,loading:L,disabled:w,variant:J,icon:H,href:q,target:S,onClick:O,anchorProps:j={}}=R,$=Ke(R,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),Q=L?n.createElement(r.Z,{spin:L}):H,Y=q?"link":E,F=(0,m.default)(`${l}-btn`,`${l}-btn-${Y}`,{[`${l}-btn-size-${N}`]:N,[`${l}-btn-status-${D}`]:!!D,[`${l}-btn-variant-${J}`]:J,[`${l}-btn-loading`]:L,[`${l}-btn-disabled`]:w}),_=T=>{if(L||w)return void T.preventDefault();O==null||O(T)};return q?n.createElement("a",be(W({},j),{href:q,target:S,className:F,onClick:_,ref:d}),Q,n.createElement("span",null,P)):n.createElement("button",be(W({},$),{type:g,className:F,onClick:_,ref:d}),Q,n.createElement("span",null,P))});v.displayName="Button";const h=v,u=null},67824:function(x,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),m=e(7829),r=e(7657),c=e(45844),s=e(80703),a=e(92266),v=e(4814),I=e(57577),h=e(81372);const u={defaultChecked:!1,indeterminate:!1},p=(0,n.forwardRef)((l,f)=>{const{prefixCls:i,componentConfig:o}=(0,n.useContext)(I.E),P=(0,n.useContext)(h.w),Y=(0,r.S)(l,u,o==null?void 0:o.Checkbox),{children:E,style:N,className:g,indeterminate:D}=Y,L=Ke(Y,["children","style","className","indeterminate"]),[w,J]=(0,n.useState)(!1),H="disabled"in L?L.disabled:P.disabled,q=(0,c.D)(L.value),S=(0,n.useRef)(null);(0,n.useEffect)(()=>{var F;(F=P.registerValue)==null||F.call(P,L.value)},[]),(0,n.useEffect)(()=>{if(L.value!==q.current){var F,_;(F=P.unregisterValue)==null||F.call(P,q.current),(_=P.registerValue)==null||_.call(P,L.value)}return()=>{var R;return(R=P.unregisterValue)==null?void 0:R.call(P,L.value)}},[L.value]),(0,n.useEffect)(()=>{S.current&&(S.current.indeterminate=D)},[D]);const O=W({},L);(0,s.Qr)(P)||(O.onChange=function(){for(var F=arguments.length,_=new Array(F),R=0;R<F;R++)_[R]=arguments[R];var T,B;(T=L.onChange)==null||T.call(L,..._),(B=P.toggleOption)==null||B.call(P,L.value)},O.name=P.name,O.checked=P.value.includes(L.value));const j=(0,m.default)(`${i}-checkbox-wrapper`,{[`${i}-checkbox-wrapper-checked`]:O.checked,[`${i}-checkbox-wrapper-disabled`]:H},g),$=F=>{if((0,s.mf)(E)){var _;F.preventDefault(),(_=S.current)==null||_.click()}},Q=()=>(0,s.o8)(E)?null:(0,s.mf)(E)?E({checked:"checked"in O?!!O.checked:w}):n.createElement("span",{className:`${i}-checkbox-label`},E);return n.createElement("label",{className:j,onClick:$},n.createElement(a.C,be(W({},O),{type:"checkbox",ref:(0,v.sQ)(f,S),disabled:H,prefixCls:`${i}-checkbox`,className:(0,m.default)({[`${i}-checkbox-indeterminate`]:D}),style:be(W({},N),{display:(0,s.mf)(E)?"none":void 0}),_getCheckedValue:J})),Q())});p.displayName="Checkbox";const d=p},56104:function(x,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),m=e(7829),r=e(7657),c=e(80703),s=e(57577),a=e(81372),v=e(67824);const I={},h=(0,n.forwardRef)((p,d)=>{const{prefixCls:l,componentConfig:f}=(0,n.useContext)(s.E),i=(0,n.useId)(),T=(0,r.S)(p,I,f==null?void 0:f.CheckboxGroup),{defaultValue:o,children:P,options:E,className:N,style:g,disabled:D,name:L=i,onChange:w,renderOption:J}=T,H=Ke(T,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[q,S]=(0,n.useState)(H.value||o||[]),[O,j]=(0,n.useState)([]);(0,n.useEffect)(()=>{"value"in H&&S(H.value||[])},[H.value]);const $=(0,n.useCallback)(B=>{j(Z=>[...Z,B])},[]),Q=(0,n.useCallback)(B=>{j(Z=>Z.filter(G=>G!==B))},[]),Y=(0,n.useMemo)(()=>E==null?void 0:E.map(B=>(0,c.HD)(B)||(0,c.hj)(B)?{label:B,value:B}:B),[E]),F=(0,n.useCallback)(B=>{const Z=[...q],G=q.indexOf(B);G===-1?Z.push(B):Z.splice(G,1),"value"in H||S(Z);const ye=Z.filter(V=>O.includes(V));w==null||w(ye)},[q,O,H,w]);let _=P;if((0,c.kJ)(Y)&&Y.length>0){const B=(0,c.mf)(J);_=Y.map(Z=>{const G=q.includes(Z.value),ye=B?()=>J(be(W({},Z),{checked:G})):Z.label;return n.createElement(v.Z,{key:`checkbox-group-options-${Z.value}`,className:Z.className,style:Z.style,disabled:"disabled"in Z?Z.disabled:D,value:Z.value,checked:G,id:Z.id,title:Z.title,onChange:Z.onChange},ye)})}const R=(0,n.useMemo)(()=>({name:L,value:q,disabled:D,toggleOption:F,registerValue:$,unregisterValue:Q}),[L,q,D,F,$,Q]);return n.createElement("div",{className:(0,m.default)(`${l}-checkbox-group`,N),style:g,ref:d},n.createElement(a.w.Provider,{value:R},_))});h.displayName="CheckboxGroup";const u=h},81372:function(x,t,e){"use strict";e.d(t,{w:function(){return m}});var n=e(53360);const m=(0,n.createContext)({})},89946:function(x,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return v},CheckboxGroup:function(){return I},default:function(){return h}});var n=e(67824),m=e(56104),r=e(558),c=e.n(r),s={};for(var a in r)["default","Checkbox","CheckboxGroup"].indexOf(a)<0&&(s[a]=function(u){return r[u]}.bind(0,a));e.d(t,s);const v=n.Z;v.Group=m.Z;const I=v.Group,h=v},558:function(){},57577:function(x,t,e){"use strict";e.d(t,{$:function(){return m},E:function(){return r}});var n=e(53360);const m={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(m)},83405:function(x,t,e){"use strict";e.d(t,{i:function(){return I}});var n=e(27833),m=e(53360),r=e(12598),c=e(7657),s=e(31136),a=e(57577);function v(h){const u=(0,n.c)(11),p=(0,c.S)(h,a.$),{iconPrefix:d,children:l}=p;let f;u[0]!==p?(f=(0,r.C)(p,["children","iconPrefix"]),u[0]=p,u[1]=f):f=u[1];const i=f,o=d?s.Z.Provider:m.Fragment;let P;u[2]!==d?(P={prefixCls:d},u[2]=d,u[3]=P):P=u[3];let E;u[4]!==o||u[5]!==l||u[6]!==P?(E=m.createElement(o,{value:P},l),u[4]=o,u[5]=l,u[6]=P,u[7]=E):E=u[7];let N;return u[8]!==i||u[9]!==E?(N=m.createElement(a.E.Provider,{value:i},E),u[8]=i,u[9]=E,u[10]=N):N=u[10],N}v.displayName="ConfigProvider";const I=v},48380:function(x,t,e){"use strict";e.d(t,{i:function(){return I}});var n=e(53360),m=e(7829),r=e(7657),c=e(57577);const s={direction:"horizontal",align:"center"},a=(0,n.forwardRef)((u,p)=>{const{prefixCls:d,componentConfig:l}=(0,n.useContext)(c.E),f=(0,r.S)(u,s,l==null?void 0:l.Divider),{direction:i,align:o,dashed:P,className:E,children:N,text:g,style:D}=f,L=N||g,w=i!=="vertical"&&!!L,J=(0,m.default)(`${d}-divider`,{[`${d}-divider-${i}`]:i,[`${d}-divider-with-text`]:w,[`${d}-divider-with-text-${o}`]:w,[`${d}-divider-dashed`]:!!P,className:E});return n.createElement("div",{className:J,style:D,ref:p},w&&n.createElement("span",{className:`${d}-divider-inner-text`},L))});a.displayName="Divider";const I=a,h=null},17599:function(x,t,e){"use strict";e.d(t,{J:function(){return q},X:function(){return H}});var n=e(53360),m=e(7829),r=e(7657),c=e(80703),s=e(57577);const a=["xxl","xl","lg","md","sm","xs"],v={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},I=Object.keys(v),h=new Map;let u=-1,p={};const l={handlers:{},dispatch(S){return p=S,h.forEach(O=>O(p)),h.size>=1},subscribe(S){return h.size||this.register(),u+=1,h.set(u,S),S(p),u},unsubscribe(S){h.delete(S),h.size||this.unregister()},register(){I.forEach(S=>{const O=Q=>{let{matches:Y}=Q;this.dispatch(be(W({},p),{[S]:Y}))},j=v[S],$=window.matchMedia(j);$.addListener(O),this.handlers[j]={mql:$,listener:O},O($)})},unregister(){I.forEach(S=>{const O=v[S],j=this.handlers[O];j==null||j.mql.removeListener(j==null?void 0:j.listener)}),h.clear()}},i=(0,n.createContext)({}),o={gutter:0,align:"start",justify:"start",wrap:!0},P=(0,n.forwardRef)((S,O)=>{const{prefixCls:j,componentConfig:$}=(0,n.useContext)(s.E),k=(0,r.S)(S,o,$==null?void 0:$.Row),{align:Q,justify:Y,gutter:F,className:_,wrap:R,children:T,style:B}=k,Z=Ke(k,["align","justify","gutter","className","wrap","children","style"]),[G,ye]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const Re=l.subscribe(C=>{((0,c.Kn)(F)||(0,c.kJ)(F)&&((0,c.Kn)(F[0])||(0,c.Kn)(F[1])))&&ye(C)});return()=>l.unsubscribe(Re)},[]);const V=ue();function ue(){const Re=[void 0,void 0];return((0,c.kJ)(F)?F:[F,void 0]).forEach((U,y)=>{if((0,c.Kn)(U))for(let te=0;te<a.length;te++){const oe=a[te];if(G[oe]&&U[oe]!==void 0){Re[y]=U[oe];break}}else Re[y]=U}),Re}const ce=(0,m.default)(`${j}-row`,{[`${j}-row-nowrap`]:R===!1,[`${j}-row-align-${Q}`]:Q,[`${j}-row-justify-${Y}`]:Y},_),[M,A]=V,ee=(0,n.useMemo)(()=>({gutter:[M,A],wrap:R}),[M,A,R]),b={},fe=(0,c.hj)(M)&&M!==0,Ee=(0,c.hj)(A)&&A!==0;if(fe||Ee){const Re=-M/2,C=-A/2;Re&&(b.marginLeft=Re,b.marginRight=Re),C&&(b.marginTop=C,b.marginBottom=C)}return n.createElement(i.Provider,{value:ee},n.createElement("div",be(W({},Z),{ref:O,className:ce,style:W(W({},B),b)}),T))});P.displayName="Row";const E=P,N={offset:0};function g(S){return(0,c.hj)(S)?`${S} ${S} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(S)?`0 0 ${S}`:S}const D=["xs","sm","md","lg","xl","xxl"],L=(S,O)=>{let j={};return D.forEach($=>{const Q=S[$];if(!Q)return;let Y={};(0,c.hj)(Q)?Y.span=Q:(0,c.Kn)(Q)&&(Y=Q),j=be(W({},j),{[`${O}-col-${$}-${Y.span}`]:(0,c.hj)(Y.span),[`${O}-col-${$}-order-${Y.order}`]:Y.order,[`${O}-col-${$}-offset-${Y.offset}`]:Y.offset})}),j},w=(0,n.forwardRef)((S,O)=>{const{componentConfig:j,prefixCls:$}=(0,n.useContext)(s.E),{gutter:Q}=(0,n.useContext)(i),k=(0,r.S)(S,N,j==null?void 0:j.Col),{span:Y,offset:F,children:_,className:R,style:T,flex:B,order:Z,xs:G,sm:ye,md:V,lg:ue,xl:ce,xxl:M}=k,A=Ke(k,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),ee=L({xs:G,sm:ye,md:V,lg:ue,xl:ce,xxl:M},$),b=(0,m.default)(`${$}-col`,{[`${$}-col-${Y}`]:(0,c.hj)(Y),[`${$}-col-offset-${F}`]:F,[`${$}-col-order-${Z}`]:Z},ee,R),fe={};if(Q){const Re=Q[0]?Q[0]/2:0,C=Q[1]?Q[1]/2:0;Re&&(fe.paddingLeft=Re,fe.paddingRight=Re),C&&(fe.paddingTop=C,fe.paddingBottom=C)}const Ee={};return B&&(Ee.flex=g(B)),n.createElement("div",be(W({ref:O},A),{className:b,style:W(W(W({},T),Ee),fe)}),_)});w.displayName="Col";const J=w,H=E,q=J},45990:function(x,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return m.z},Col:function(){return v.J},ConfigProvider:function(){return s.i},Divider:function(){return a.i},Input:function(){return I.I},Row:function(){return v.X},Space:function(){return u.T},Switch:function(){return p.r}});var n=e(69203),m=e(60884),r=e(89946),l={};for(var c in r)["default","Alert","Button"].indexOf(c)<0&&(l[c]=function(f){return r[f]}.bind(0,c));e.d(t,l);var s=e(83405),a=e(48380),v=e(17599),I=e(38312),h=e(37663),l={};for(var c in h)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input"].indexOf(c)<0&&(l[c]=function(i){return h[i]}.bind(0,c));e.d(t,l);var u=e(92595),p=e(9090),d=e(36112),l={};for(var c in d)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Radio","RadioButton","RadioGroup","Space","Switch"].indexOf(c)<0&&(l[c]=function(i){return d[i]}.bind(0,c));e.d(t,l)},38312:function(x,t,e){"use strict";e.d(t,{I:function(){return f}});var n=e(53360),m=e(7829),r=e(7657),c=e(62222),s=e(80703),a=e(58360),v=e(85569),I=e(1824),h=e(57577);const u={type:"text",size:"md",align:"left",visibilityToggle:!0};function p(o,P,E){let N;return N=o===null||(0,s.o8)(o)||(0,s.HD)(o)?o||"":String(o),(0,s.hj)(P)&&!E?N.slice(0,P):N}const d=(0,n.forwardRef)((o,P)=>{const{prefixCls:E,componentConfig:N}=(0,n.useContext)(h.E),Ue=(0,r.S)(o,u,N==null?void 0:N.Input),{size:g,status:D,align:L,disabled:w,allowClear:J,placeholder:H,variant:q="outline",addonBefore:S,addonAfter:O,prefix:j,suffix:$,value:Q,defaultValue:Y,type:F,className:_,style:R,readOnly:T,visibilityToggle:B,maxLength:Z,tips:G,onFocus:ye,onBlur:V,onChange:ue}=Ue,ce=Ke(Ue,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),M=(0,n.useRef)(null),A=(0,n.useRef)(null);(0,n.useImperativeHandle)(P,()=>({currentElement:M.current,inputElement:A.current,focus:()=>{var de;return(de=A.current)==null?void 0:de.focus()},blur:()=>{var de;return(de=A.current)==null?void 0:de.blur()},select:()=>{var de;return(de=A.current)==null?void 0:de.select()}}));const[ee,b]=(0,n.useState)(!1),fe=de=>{w||T||(b(!0),ye==null||ye(de))},Ee=de=>{w||T||(b(!1),V==null||V(de))},k=(0,s.hj)(Z)?Z:Z==null?void 0:Z.length,Re=(0,s.hj)(Z)?!1:Z==null?void 0:Z.errorOnly,C=(0,s.hj)(Z)?!0:(Z==null?void 0:Z.showLimit)!==!1,[U,y]=(0,c.R)(Y,{value:Q}),te=p(U,k,Re),oe=(0,s.hj)(k)?te.length>k:!1,me=de=>{const{value:we}=de.target;y(we),ue==null||ue(we,de)},ve=()=>{var de;w||(de=A.current)==null||de.focus()},ne=(0,m.default)(`${E}-input`,{[`${E}-input-variant-${q}`]:q,[`${E}-input-size-${g}`]:g,[`${E}-input-disabled`]:w,[`${E}-input-align-${L}`]:L,[`${E}-input-status-${D}`]:D,[`${E}-input-focus`]:ee,[`${E}-input-limit-length-error`]:oe},_),pe=(0,m.default)(`${E}-input-real`),ae=J&&te&&!w,ie=n.createElement(a.Z,null),K=de=>{de.stopPropagation(),y(""),ue==null||ue("",de)},z=ae&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,m.default)(`${E}-input-suffix`,`${E}-input-clear`),onClick:K},ie),he=(0,s.Kn)(B)&&!(0,s.o8)(B.visible),[Pe,re]=(0,n.useState)(F);(0,n.useEffect)(()=>{re(he?B.visible?"text":"password":F)},[F,he,B==null?void 0:B.visible]);const xe=()=>{if(w)return;const de=Pe==="password"?"text":"password";if(re(de),he){var we;(we=B.onVisibleChange)==null||we.call(B,de==="text")}},X=F==="password",se=(0,n.useMemo)(()=>X?(0,s.Kn)(B)&&(0,s.mf)(B.renderIcon)?B.renderIcon(Pe==="text"):Pe==="password"?n.createElement(v.Z,null):Pe==="text"?n.createElement(I.Z,null):null:$,[X,Pe,B,$]),le=(0,n.useMemo)(()=>function(de){let{children:we}=de;const De=S||O;let Ce=we;return De&&(Ce=n.createElement("div",{ref:M,className:`${E}-input-group`},Ce)),G&&(Ce=n.createElement("div",{ref:M,className:`${E}-input-group-extra`},Ce)),Ce},[S,O,G]),Te=j&&n.createElement("span",{className:`${E}-input-prefix`},j),ge=se&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,m.default)(`${E}-input-suffix`,{[`${E}-input-suffix-password`]:X}),onClick:xe,onMouseDown:de=>de.preventDefault(),onMouseUp:de=>de.preventDefault()},se),Be=(0,s.hj)(k)&&C&&n.createElement("span",{className:`${E}-input-limit-length-text`},te.length,"/",k),Ae=G&&n.createElement("div",{className:(0,m.default)(`${E}-input-tips`,{[`${E}-input-tips-status-${D}`]:D})},G),Ne=n.createElement("span",{ref:S||O?void 0:M,className:ne,style:R,onClick:ve},Te,n.createElement("input",be(W({ref:A},ce),{type:Pe,value:te,readOnly:T,className:pe,placeholder:H,disabled:w,onChange:me,onFocus:fe,onBlur:Ee})),z,ge,Be),Me=S&&n.createElement("span",{className:(0,m.default)(`${E}-input-group-addon`)},S),je=O&&n.createElement("span",{className:(0,m.default)(`${E}-input-group-addon`)},O);return n.createElement(le,null,Me,Ne,je,Ae)});d.displayName="Input";const f=d,i=null},74052:function(x,t,e){"use strict";e.d(t,{Z:function(){return p}});var n=e(53360),m=e(7829),r=e(7657),c=e(80703),s=e(92266),a=e(4814),v=e(57577),I=e(83595);const h={defaultChecked:!1},u=(0,n.forwardRef)((d,l)=>{const{prefixCls:f,componentConfig:i}=(0,n.useContext)(v.E),o=(0,n.useContext)(I.Z),F=(0,r.S)(d,h,i==null?void 0:i.Radio),{_IS_BUTTON_:P,value:E,children:N,style:g}=F,D=Ke(F,["_IS_BUTTON_","value","children","style"]),L=_=>{var R,T;(R=D.onChange)==null||R.call(D,_),o==null||(T=o.onChange)==null||T.call(o,_)},w=W({},D);let J="md";if(!(0,c.Qr)(o)){w.name=o.name,w.onChange=L,w.checked=E===o.value;var H;w.disabled=(H=w.disabled)!=null?H:o.disabled,J=o.size?o.size:J}const[q,S]=(0,n.useState)(!1),O=P?`${f}-radio-button`:`${f}-radio`,j=(0,m.default)(`${O}-wrapper`,{[`${O}-wrapper-disabled`]:w.disabled,[`${O}-wrapper-checked`]:w.checked,[`${O}-wrapper-size-${J}`]:J,[`${O}-wrapper-filled`]:o.buttonVariant==="filled"}),$=()=>(0,c.o8)(N)?null:(0,c.mf)(N)?N({checked:"checked"in w?!!w.checked:q}):n.createElement("span",{className:`${O}-label`},N),Q=(0,n.useRef)(null),Y=_=>{if((0,c.mf)(N)){var R;_.preventDefault(),(R=Q.current)==null||R.click()}};return n.createElement("label",{className:j,onClick:Y},n.createElement(s.Z,be(W(W({},D),w),{ref:(0,a.sQ)(l,Q),value:E,type:"radio",prefixCls:O,style:be(W({},g),{display:(0,c.mf)(N)?"none":void 0}),disabled:w.disabled,_getCheckedValue:S})),$())});u.displayName="Radio";const p=u},89312:function(x,t,e){"use strict";e.d(t,{Z:function(){return a}});var n=e(27833),m=e.n(n),r=e(53360),c=e(74052);const s=(0,r.forwardRef)((v,I)=>{const h=(0,n.c)(3);let u;return h[0]!==v||h[1]!==I?(u=r.createElement(c.Z,be(W({_IS_BUTTON_:!0},v),{ref:I})),h[0]=v,h[1]=I,h[2]=u):u=h[2],u});s.displayName="RadioButton";const a=s},59803:function(x,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),m=e(7829),r=e(7657),c=e(62222),s=e(80703),a=e(57577),v=e(83595),I=e(74052),h=e(89312);const u={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},p=(0,n.forwardRef)((l,f)=>{const{prefixCls:i,componentConfig:o}=(0,n.useContext)(a.E),P=(0,r.S)(l,u,o==null?void 0:o.RadioGroup),E=(0,n.useId)(),{className:N,style:g,name:D=E,value:L,defaultValue:w,children:J,disabled:H,size:q,buttonVariant:S,renderOption:O,onChange:j,appearance:$,options:Q}=P,[Y,F]=(0,c.R)(w,{value:L}),_=(0,n.useCallback)(Z=>{const G=Z.target.value;"value"in P||F(G),G!==Y&&(j==null||j(Z))},[Y,j]);let R=J;const T=$==="button"?h.Z:I.Z;if((0,s.kJ)(Q)&&Q.length>0){const Z=(0,s.mf)(O);R=Q.map(G=>{if((0,s.HD)(G)||(0,s.hj)(G)){const ue=Y===G,ce=Z?()=>O({label:G,value:G,checked:ue}):G;return n.createElement(T,{key:G.toString(),disabled:H,value:G,checked:ue},ce)}const ye=Y===G.value,V=Z?()=>O(be(W({},G),{checked:ye})):G.label;return n.createElement(T,{key:`radio-group-options-${G.value}`,className:G.className,style:G.style,disabled:G.disabled||H,value:G.value,checked:ye,id:G.id,title:G.title,onChange:G.onChange},V)})}const B=(0,n.useMemo)(()=>({name:D,value:Y,disabled:H,size:q,buttonVariant:S,onChange:_}),[D,L,H,q,S,_]);return n.createElement("div",{ref:f,className:(0,m.default)(`${i}-radio-group`,N),style:g},n.createElement(v.Z.Provider,{value:B},R))});p.displayName="RadioGroup";const d=p},83595:function(x,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(53360);const r=(0,n.createContext)({})},37663:function(x,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return I},RadioButton:function(){return u},RadioGroup:function(){return h},default:function(){return p}});var n=e(74052),m=e(89312),r=e(59803),c=e(63149),s=e.n(c),a={};for(var v in c)["default","Radio","RadioButton","RadioGroup"].indexOf(v)<0&&(a[v]=function(d){return c[d]}.bind(0,v));e.d(t,a);const I=n.Z;I.Group=r.Z,I.Button=m.Z;const h=I.Group,u=I.Button,p=I},63149:function(){},92595:function(x,t,e){"use strict";e.d(t,{T:function(){return p}});var n=e(53360),m=e(7829),r=e(80703),c=e(7657),s=e(21299),a=e(57577);const v={sm:8,md:16,lg:24},I={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((l,f)=>{const{prefixCls:i,size:o="md",componentConfig:P}=(0,n.useContext)(a.E),Y=(0,c.S)(l,I,P==null?void 0:P.Space),{className:N,children:g,size:D=o,direction:L="horizontal",align:w,split:J,wrap:H=!1}=Y,q=Ke(Y,["className","children","size","direction","align","split","wrap"]),S=(0,s.q)(g),O=L==="horizontal"&&w===void 0?"center":w,j=(0,m.default)(`${i}-space`,`${i}-space-direction-${L}`,{[`${i}-space-align-${O}`]:O,[`${i}-space-wrap`]:H},N),$=(0,n.useCallback)(F=>{const _=(0,r.kJ)(D)?D:[D,D],[R,T]=_.map(B=>(0,r.HD)(B)?v[B]:B||0);return H?{marginRight:R,marginBottom:T}:L==="vertical"?{marginBottom:T}:{marginRight:F?void 0:R}},[D]),Q=S.map((F,_)=>{const R=_===S.length-1;return n.createElement(n.Fragment,{key:`space-item-${_}`},n.createElement("div",{className:"space-item",style:$(R)},F),!R&&J&&n.createElement("span",{className:"sqi-space-item-split"},J))});return n.createElement("div",be(W({className:j},q),{ref:f}),Q)});h.displayName="Space";const p=h,d=null},9090:function(x,t,e){"use strict";e.d(t,{r:function(){return u}});var n=e(53360),m=e(7829),r=e(7657),c=e(62222),s=e(60333),a=e(57577);const v={label:[],loading:!1,disabled:!1},I=(0,n.forwardRef)((d,l)=>{const{prefixCls:f,size:i="md",componentConfig:o}=(0,n.useContext)(a.E),F=(0,r.S)(d,v,o==null?void 0:o.Switch),{checked:P,defaultChecked:E,className:N,disabled:g,size:D=i,label:L,loading:w,loadingIcon:J,onChange:H,onClick:q}=F,S=Ke(F,["checked","defaultChecked","className","disabled","size","label","loading","loadingIcon","onChange","onClick"]),[O,j]=(0,c.R)(!1,{value:P,defaultValue:E});function $(_){if(g||w)return;const R=!O;j(R),H==null||H(R,_),q==null||q(R,_)}const Q=(0,m.default)(`${f}-switch`,{[`${f}-switch-checked`]:O,[`${f}-switch-disabled`]:g,[`${f}-switch-loading`]:w,[`${f}-switch-${D}`]:D},N),Y=J||n.createElement(s.Z,{spin:!0});return n.createElement("button",be(W({},S),{type:"button",role:"switch","aria-checked":O,ref:l,className:Q,disabled:g||w,onClick:$}),n.createElement("div",{className:`${f}-switch-handle`},w&&Y),n.createElement("div",{className:`${f}-switch-content`},O?L[0]:L[1]))});I.displayName="Switch";const u=I,p=null},67171:function(x,t,e){"use strict";e.d(t,{Z:function(){return Re}});var n=e(53360),m=e(7657),r=e(62222),c=e(60164),s=e(6890),a=e(8240),v=e(21299);function I(C){return C instanceof HTMLElement||C instanceof SVGElement}function h(C){return C&&typeof C=="object"&&I(C.nativeElement)?C.nativeElement:I(C)?C:null}function u(C){if(C)return C.current&&typeof C.current=="object"&&"currentElement"in C.current?C.current.currentElement:C.current}function p(C){if(!(C&&(0,n.isValidElement)(C)))return null;if(parseInt(n.version)>=19){var y;return((y=C.props)==null?void 0:y.ref)||null}return C.ref}var d=e(4814);const l=(0,n.forwardRef)((C,U)=>{const{children:y,disabled:te,throttleMs:oe=100,onResize:me}=C,ve=(0,n.isValidElement)(y),ne=ve?(0,v.q)(y):[],pe=ve?p(y):null,ae=(0,n.useRef)(null),ie=(0,d.x1)(pe,ae),K=()=>u(ae);(0,n.useImperativeHandle)(U,()=>K());const z=me?(0,s.P)(me,oe):void 0;return(0,a.y)(K(),z,!te),ve?(0,n.cloneElement)(y,{ref:ie}):y});l.displayName="ResizeObserverComponent";const f=l;var i=e(27833),o=e(86752),P=e(34028),E=e(80703);const N=(0,P.J)();function g(C){return N?(0,E.HD)(C)?document.querySelector(C):(0,E.mf)(C)?C():C instanceof HTMLElement?C:document.body:null}const D=(0,n.forwardRef)((C,U)=>{const y=(0,i.c)(25),{getContainer:te,prefixCls:oe,children:me,open:ve,rootStyle:ne}=C,pe=ve===void 0?!0:ve,[ae,ie]=(0,n.useState)(null),[K,z]=(0,n.useState)(null),he=K||document.body;let Pe,re;y[0]!==te?(Pe=()=>{const Me=g(te);z(Me||null)},re=[te],y[0]=te,y[1]=Pe,y[2]=re):(Pe=y[1],re=y[2]),(0,n.useEffect)(Pe,re);let xe;y[3]!==ae||y[4]!==oe||y[5]!==ne?(xe=()=>{if(!N||ae)return null;const Me=document.createElement("div");oe&&(Me.className=`${oe}-portal-wrapper`),ne&&Object.assign(Me.style,ne),Me.setAttribute("data-portal","true"),ie(Me)},y[3]=ae,y[4]=oe,y[5]=ne,y[6]=xe):xe=y[6];const X=xe;let se;y[7]!==X||y[8]!==pe?(se=()=>{N&&(pe?X():ie(null))},y[7]=X,y[8]=pe,y[9]=se):se=y[9];let le;y[10]!==pe?(le=[pe],y[10]=pe,y[11]=le):le=y[11],(0,c.L)(se,le);let Te,ge;y[12]!==ae?(Te=()=>ae,ge=[ae],y[12]=ae,y[13]=Te,y[14]=ge):(Te=y[13],ge=y[14]),(0,n.useImperativeHandle)(U,Te,ge);let Be;y[15]!==ae||y[16]!==he||y[17]!==pe?(Be=()=>{if(!N||!ae)return;const Me=()=>!ae.parentNode&&he.appendChild(ae),je=()=>{var Ue;return(Ue=ae.parentNode)==null?void 0:Ue.removeChild(ae)};return pe?Me():je(),()=>{je()}},y[15]=ae,y[16]=he,y[17]=pe,y[18]=Be):Be=y[18];let Ae;if(y[19]!==ae||y[20]!==pe?(Ae=[pe,ae],y[19]=ae,y[20]=pe,y[21]=Ae):Ae=y[21],(0,c.L)(Be,Ae),!(pe&&me))return null;let Ne;return y[22]!==me||y[23]!==ae?(Ne=ae?(0,o.createPortal)(me,ae):null,y[22]=me,y[23]=ae,y[24]=Ne):Ne=y[24],Ne});D.displayName="Portal";const L=D;var w=e(40549),J=e(57577);function H(C,U,y){const{top:te,left:oe,width:me,height:ve}=C.getBoundingClientRect(),ne=te+y,pe=oe+U;return{width:me,height:ve,top:ne,bottom:ne+ve,left:pe,right:pe+me}}function q(C){if(!C||C.tagName==="HTML")return;const U=window.getComputedStyle(C),y=te=>["auto","scroll"].includes(te);return C.clientHeight<C.scrollHeight&&y(U.overflowX)||C.clientWidth<C.scrollWidth&&y(U.overflowY)?C:q(C.parentNode)}function S(C,U){return Math.round(Math.abs(C))>Math.round(Math.abs(U))?C:U}const O=(C,U)=>`translate3d(${C}px, ${U}px, 0)`;function j(C){if(!C)return[0,0];const U=window.getComputedStyle(C),y=U.transform||U.webkitTransform||"none";if(y==="none")return[0,0];if(y.match(/matrix\(([^)]+)\)/)){var te,oe;const ne=((oe=y.match(/matrix\((.+)\)/))==null||(te=oe[1])==null?void 0:te.split(",").map(Number))||[0,0];if(ne.length===6)return[ne[4],ne[5]]}const[,me=0,ve=0]=(y.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(ne=>Number(ne));return[me,ve]}function $(C){const U=C.split("-"),y=U[0],te=U[1];let oe;const me=y==="top"||y==="bottom",ve=y==="left"||y==="right";return me&&(te==="start"&&(oe="left"),te==="end"&&(oe="right")),ve&&(te==="start"&&(oe="top"),te==="end"&&(oe="bottom")),[y,oe,me,ve]}function Q(C){return C?(0,E.Kn)(C)?[C.x||0,C.y||0]:[C||0,C||0]:[0,0]}const Y={direction:"bottom",enableFlip:!0,enableShift:!0};function F(C,U){const{reference:y,popper:te,arrow:oe}=C;if(!y||!te)return;const me=W(W({},Y),U),ve=te.parentNode,[ne,pe]=j(ve),ae=window.pageYOffset,ie=window.pageXOffset,K=H(y,ie,ae),z=H(te,ie,ae),he=K.width-z.width,Pe=K.height-z.height;let re=K.left-z.left+ne,xe=K.top-z.top+pe;const[X,se,le,Te]=$(me.direction);let ge=X;const Be=se==="left"?0:se==="right"?he:he/2,Ae=he-Be,Ne=se==="top"?0:se==="bottom"?Pe:Pe/2,Me=Pe-Ne;le&&(re+=Be,xe+=X==="top"?-z.height:K.height),Te&&(re+=X==="left"?-z.width:K.width,xe+=Ne);let je=q(y),Ue;const[de,we]=Q(me.offset),{height:De=0,width:Ce=0}=oe?H(oe,ie,ae):{};let Ze=0,ze=0;for(;je;)Ue=H(je,ie,ae),He(Ue),je=q(je.parentNode);const{clientHeight:Ve,clientWidth:Ge}=document.documentElement;He({top:ae,bottom:ae+Ve,left:ie,right:ie+Ge,height:Ve,width:Ge}),re-=Ze,xe-=ze,$e(),le&&(xe+=ge==="bottom"?we:-we),Te&&(re+=ge==="right"?de:-de),ve.style.transform=O(re,xe),ve.setAttribute("data-direction",ge);function He(Oe){const{top:Ie,bottom:We,left:Fe,right:Ye,height:ke,width:nn}=Oe;if(le){const Le=Math.round(K.top-Ie+K.height/2),Se=Math.round(ke/2);me.enableFlip&&tn(Le,Se),me.enableShift&&on()}if(Te){const Le=Math.round(K.left-Fe+K.width/2),Se=Math.round(nn/2);me.enableFlip&&an(Le,Se),me.enableShift&&rn()}function tn(Le,Se){const Xe=K.top-(z.height+we+De)<Ie,Qe=K.bottom+z.height+we+De>ke+Ie;Xe&&Le<=Se&&ge==="top"?(xe+=z.height+K.height,ge="bottom"):Qe&&Le>=Se&&ge==="bottom"&&(xe-=z.height+K.height,ge="top")}function on(){if(K.left+Be<Fe){const Le=K.left+Be-Fe,Se=K.right-Ce>Fe?Le:-K.width+Be+Ce;Ze=S(Se,Ze)}if(K.right-Ae>Ye){const Le=K.right-Ae-Ye,Se=K.left+Ce<Ye?Le:K.width-Ae-Ce;Ze=S(Se,Ze)}}function an(Le,Se){const Xe=K.left-(z.width+de+Ce)<Fe,Qe=K.right+z.width+de+Ce>Ye;Xe&&Le<Se&&ge==="left"?(re+=K.width+z.width,ge="right"):Qe&&Le>Se&&ge==="right"&&(re-=K.width+z.width,ge="left")}function rn(){if(K.top+Ne<Ie){const Le=K.top+Ne-Ie,Se=K.bottom-De>Ie?Le:-K.height+Ne+De;ze=S(Se,ze)}if(K.bottom-Me>We){const Le=K.bottom-Me-We,Se=K.top+De<We?Le:K.height-Me-De;ze=S(Se,ze)}}}function $e(){if(!oe)return;le?xe+=ge==="bottom"?De:-De:Te&&(re+=ge==="right"?Ce:-Ce);const Oe=me.direction.split("-")[1]||"center",Ie={x:0,y:0};if(le){Ie.y=ge==="top"?z.height:-De;const We=Math.abs(K.width-z.width)>Math.abs(Ze),Fe=Ze===0;Oe==="start"?Fe?Ie.x=0:Ie.x=Math.min(Math.max(0,Ze),z.width-Ce):Oe==="center"?Fe?Ie.x=(z.width-Ce)/2:We?Ie.x=(z.width-Ce)/2+Ze:Ie.x=Math.max(0,Math.min(z.width-Ce,(z.width-Ce)/2+Ze)):Oe==="end"&&(Fe?Ie.x=z.width-Ce:Ie.x=Math.max(0,Math.min(z.width-Ce,z.width-Ce+Ze)))}else if(Te){Ie.x=ge==="left"?z.width:-Ce;const We=ze===0,Fe=Math.abs(K.height-z.height)>Math.abs(ze);Oe==="start"?We?Ie.y=0:Ie.y=Math.min(Math.max(0,ze),z.height-De):Oe==="center"?We?Ie.y=(z.height-De)/2:Fe?Ie.y=(z.height-De)/2+ze:Ie.y=Math.max(0,Math.min(z.height-De,(z.height-De)/2+ze)):Oe==="end"&&(We?Ie.y=z.height-De:Ie.y=Math.max(0,Math.min(z.height-De,z.height-De+ze)))}oe.style.transform=O(Ie.x,Ie.y)}}function _(C){let U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!C)return[];const y=Z(C);if(y===C.ownerDocument.body){const me=window.visualViewport?[window.visualViewport]:[],ve=T(y)?[y]:[];return[...U,window,...me,...ve]}const oe=_(R(y));return[...U,y,...oe]}function R(C){return G(C)==="html"?C:C.parentNode}function T(C){const{overflow:U,overflowX:y,overflowY:te,display:oe}=getComputedStyle(C);return/auto|scroll|overlay|hidden|clip/.test(U+te+y)&&!["contents"].includes(oe)}const B=new Set(["html","body","#document"]);function Z(C){return B.has(G(C))?C.ownerDocument.body:T(C)?C:Z(R(C))}function G(C){return C?(C.nodeName||"").toLowerCase():null}const ye="Escape",ue=C=>{const{trigger:U,delay:y,disabled:te,visible:oe,clickOutsideClose:me,triggerEl:ve,onVisibleChange:ne}=C,pe=(0,n.useRef)(!1),ae=(0,n.useRef)(!1),ie=(0,n.useRef)(null),K=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(te)return;const re=xe=>{var X;!(ve==null||(X=ve.contains)==null)&&X.call(ve,xe.target)||pe.current||oe&&me&&(ne==null||ne(!1,{e:xe,trigger:"document"}))};return document.addEventListener("mousedown",re),document.addEventListener("touchend",re),()=>{document.removeEventListener("mousedown",re),document.removeEventListener("touchend",re)}},[te,oe,ve]);function z(re){y?(clearTimeout(ie.current),ie.current=setTimeout(re,y)):re()}function he(){return te?{}:{onMouseEnter:re=>{U==="hover"&&!ae.current&&(clearTimeout(ie.current),ne==null||ne(!0,{e:re,trigger:"hover"}))},onMouseLeave:re=>{U==="hover"&&(ae.current=!0,clearTimeout(ie.current),ne==null||ne(!1,{e:re,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(K.current),pe.current=!0,K.current=window.setTimeout(()=>{pe.current=!1})},onTouchEnd:()=>{clearTimeout(K.current),pe.current=!0,K.current=window.setTimeout(()=>{pe.current=!1})}}}function Pe(re){return te?{}:{onMouseDown:X=>{var se,le;U==="mousedown"&&z(()=>ne==null?void 0:ne(!oe,{e:X,trigger:"mousedown"})),(se=(le=re.props).onMouseDown)==null||se.call(le,X)},onClick:X=>{var se,le;U==="click"&&(X.preventDefault(),X.stopPropagation(),z(()=>ne==null?void 0:ne(!oe,{e:X,trigger:"click"}))),(se=(le=re.props).onClick)==null||se.call(le,X)},onTouchStart:X=>{var se,le;(U==="hover"||U==="mousedown")&&(ae.current=!1,z(()=>ne==null?void 0:ne(!0,{e:X,trigger:"hover"}))),(se=(le=re.props).onTouchStart)==null||se.call(le,X)},onMouseEnter:X=>{var se,le;U==="hover"&&(ae.current=!1,z(()=>ne==null?void 0:ne(!0,{e:X,trigger:"hover"}))),(se=(le=re.props).onMouseEnter)==null||se.call(le,X)},onMouseLeave:X=>{var se,le;U==="hover"&&(ae.current=!1,z(()=>ne==null?void 0:ne(!1,{e:X,trigger:"hover"}))),(se=(le=re.props).onMouseLeave)==null||se.call(le,X)},onFocus:X=>{var se,le;U==="focus"&&z(()=>ne==null?void 0:ne(!0,{e:X,trigger:"focus"})),(se=(le=re.props).onFocus)==null||se.call(le,X)},onBlur:X=>{var se,le;U==="focus"&&z(()=>ne==null?void 0:ne(!1,{e:X,trigger:"blur"})),(se=(le=re.props).onBlur)==null||se.call(le,X)},onContextMenu:X=>{var se,le;U==="context-menu"&&(X.preventDefault(),z(()=>ne==null?void 0:ne(!0,{e:X,trigger:"context-menu"}))),(se=(le=re.props).onContextMenu)==null||se.call(le,X)},onKeyDown:X=>{var se,le;(X==null?void 0:X.key)===ye&&z(()=>ne==null?void 0:ne(!1,{e:X,trigger:"keydown-esc"})),(se=(le=re.props).onKeyDown)==null||se.call(le,X)}}}return{genPopupProps:he,genTriggerProps:Pe}};var ce=e(7829);function M(C){let U;return()=>(U||(U=new Promise(y=>{Promise.resolve().then(()=>{U=void 0,y(C())})})),U)}const A={direction:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:0,trigger:"hover",delay:100,clickOutsideClose:!0,disabled:!1},ee={unmountOnExit:!0},b={position:"absolute",top:0,left:0,bottom:"auto",right:"auto",margin:0,willChange:"transform"},fe=W({},b),Ee=W({},b),k=(0,n.forwardRef)((C,U)=>{const{prefixCls:y,componentConfig:te}=(0,n.useContext)(J.E),{children:oe,popper:me,enableShift:ve,motion:ne={},enableFlip:pe,offset:ae,direction:ie,getContainer:K,zIndex:z,trigger:he,delay:Pe,disabled:re,visible:xe,arrow:X,clickOutsideClose:se,onVisibleChange:le}=(0,m.S)(C,A,te==null?void 0:te.Trigger),Te=(0,m.S)(ee,ne),ge=(0,n.isValidElement)(oe),Be=(0,n.useRef)(null),Ae=(0,n.useRef)(null),Ne=p(me),Me=(0,n.useRef)(null),je=(0,d.x1)(Ne,Me),Ue=(0,n.useRef)(null),[de,we]=(0,r.R)(xe,{onChange:le}),{genPopupProps:De,genTriggerProps:Ce}=ue({clickOutsideClose:se,delay:Pe,disabled:re,visible:de,onVisibleChange:we,trigger:he,triggerEl:Be.current});(0,n.useImperativeHandle)(U,()=>{});const Ze=(0,d.t4)(oe),ze=(0,d.t4)(me),Ve=(0,n.useCallback)($e=>{var Oe;$e&&$e.type!=="resize"&&!((Oe=$e.target)!=null&&Oe.contains(Be.current))||setTimeout(()=>{F({reference:Be.current,popper:Me.current,arrow:Ae.current},{direction:ie,enableFlip:pe,enableShift:ve,offset:ae})})},[ie,pe,ve,ae]),Ge=M(()=>new Promise($e=>{Ve(),$e(void 0)}));if((0,c.L)(()=>{if(de!==void 0){if(Ge(),de===!0){var $e;($e=Ue.current)==null||$e.toggle(!0)}else if(de===!1){var Oe;(Oe=Ue.current)==null||Oe.toggle(!1)}}},[de]),(0,c.L)(()=>{Ge();const $e=_(Be.current),Oe=_(Me.current),Ie=[...$e,...Oe];return Ie.forEach(We=>{We.addEventListener("scroll",Ge,{passive:!0})}),window.addEventListener("resize",Ge,{passive:!0}),()=>{Ie.forEach(We=>{We.removeEventListener("scroll",Ge)}),window.removeEventListener("resize",Ge)}},[ie,pe,ve,ae,Me.current,Ae.current]),!ge)return;const He=()=>me?n.createElement(w.Z,W({ref:Ue},Te),$e=>{let{className:Oe}=$e;return n.createElement(L,{getContainer:K},n.createElement("div",be(W({},De()),{className:(0,ce.default)(`${y}-trigger`,Oe),style:be(W({},fe),{zIndex:z})}),X?n.createElement("div",{className:`${y}-trigger-arrow`},(0,n.cloneElement)(X,{ref:Ae,style:W(be(W({},Ee),{zIndex:z}),X.props.style||{})})):null,(0,n.cloneElement)(me,{ref:je})))}):null;return n.createElement(n.Fragment,null,n.createElement(f,{ref:Be,onResize:()=>Ge()},(0,n.cloneElement)(oe,W({},Ce(oe)))),He())});k.displayName="Trigger";const Re=k},36112:function(x,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return a},default:function(){return v}});var n=e(67171),m=e(98479),r=e.n(m),c={};for(var s in m)["default","Trigger"].indexOf(s)<0&&(c[s]=function(I){return m[I]}.bind(0,s));e.d(t,c);const a=n.Z,v=a},98479:function(){},84176:function(x,t,e){var n=e(75863);function m(r,c){if(r==null)return{};var s=n(r,c),a,v;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(r);for(v=0;v<I.length;v++)a=I[v],!(c.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(s[a]=r[a])}return s}x.exports=m,x.exports.__esModule=!0,x.exports.default=x.exports},75863:function(x){function t(e,n){if(e==null)return{};var m={},r=Object.keys(e),c,s;for(s=0;s<r.length;s++)c=r[s],!(n.indexOf(c)>=0)&&(m[c]=e[c]);return m}x.exports=t,x.exports.__esModule=!0,x.exports.default=x.exports},7829:function(x,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return m}});function n(r){var c,s,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var v=r.length;for(c=0;c<v;c++)r[c]&&(s=n(r[c]))&&(a&&(a+=" "),a+=s)}else for(s in r)r[s]&&(a&&(a+=" "),a+=s);return a}function m(){for(var r,c,s=0,a="",v=arguments.length;s<v;s++)(r=arguments[s])&&(c=n(r))&&(a&&(a+=" "),a+=c);return a}t.default=m},64508:function(x,t,e){"use strict";e.d(t,{Y:function(){return c}});var n=e(53360),m=e(75601);const r=(s,a,v,I,h)=>{clearTimeout(I.current);const u=(0,m.y0)(s);a(u),v.current=u,h&&h({current:u})},c=({enter:s=!0,exit:a=!0,preEnter:v,preExit:I,timeout:h,initialEntered:u,mountOnEnter:p,unmountOnExit:d,onStateChange:l}={})=>{const[f,i]=(0,n.useState)(()=>(0,m.y0)(u?m.cn:(0,m.Ef)(p))),o=(0,n.useRef)(f),P=(0,n.useRef)(),[E,N]=(0,m.fj)(h),g=(0,n.useCallback)(()=>{const L=(0,m.XZ)(o.current._s,d);L&&r(L,i,o,P,l)},[l,d]),D=(0,n.useCallback)(L=>{const w=H=>{switch(r(H,i,o,P,l),H){case m.d0:E>=0&&(P.current=setTimeout(g,E));break;case m.Ix:N>=0&&(P.current=setTimeout(g,N));break;case m.iL:case m.iU:P.current=(0,m.Y3)(w,H);break}},J=o.current.isEnter;typeof L!="boolean"&&(L=!J),L?!J&&w(s?v?m.iL:m.d0:m.cn):J&&w(a?I?m.iU:m.Ix:(0,m.Ef)(d))},[g,l,s,a,v,I,E,N,d]);return[f,D,g]}},75601:function(x,t,e){"use strict";e.d(t,{Ef:function(){return u},Ix:function(){return s},XZ:function(){return p},Y3:function(){return l},cn:function(){return r},d0:function(){return m},fj:function(){return d},iL:function(){return n},iU:function(){return c},y0:function(){return h}});const n=0,m=1,r=2,c=3,s=4,a=5,v=6,I=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=f=>({_s:f,status:I[f],isEnter:f<c,isMounted:f!==v,isResolved:f===r||f>s}),u=f=>f?v:a,p=(f,i)=>{switch(f){case m:case n:return r;case s:case c:return u(i)}},d=f=>typeof f=="object"?[f.enter,f.exit]:[f,f],l=(f,i)=>setTimeout(()=>{isNaN(document.body.offsetTop)||f(i+1)},0)}}]);
}());