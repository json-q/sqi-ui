!(function(){var sn=Object.defineProperty,ln=Object.defineProperties;var dn=Object.getOwnPropertyDescriptors;var He=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable;var qe=(x,t,e)=>t in x?sn(x,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[t]=e,K=(x,t)=>{for(var e in t||(t={}))_e.call(t,e)&&qe(x,e,t[e]);if(He)for(var e of He(t))en.call(t,e)&&qe(x,e,t[e]);return x},be=(x,t)=>ln(x,dn(t));var Ue=(x,t)=>{var e={};for(var n in x)_e.call(x,n)&&t.indexOf(n)<0&&(e[n]=x[n]);if(x!=null&&He)for(var n of He(x))t.indexOf(n)<0&&en.call(x,n)&&(e[n]=x[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{36419:function(x,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return ge}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return f.D},useIsomorphicLayoutEffect:function(){return i.L},useMergeProps:function(){return o.S},useMergeState:function(){return R.R},usePrevious:function(){return E.D},useResizeObserver:function(){return N.y}});var m={};e.r(m),e.d(m,{canUseDom:function(){return g.J},debounce:function(){return M.D},isArray:function(){return O.kJ},isEmptyObject:function(){return O.Qr},isFunction:function(){return O.mf},isNumber:function(){return O.hj},isObject:function(){return O.Kn},isString:function(){return O.HD},isUndefined:function(){return O.o8},omit:function(){return w.C},pick:function(){return Y},throttle:function(){return X.P}});var r={};e.r(r),e.d(r,{default:function(){return W.Y},useTransition:function(){return W.Y},useTransitionMap:function(){return F},useTransitionState:function(){return W.Y}});var p=e(90819),s=e.n(p),a=e(89933),v=e.n(a),I=e(53360),h=e.t(I,2),c=e(45990),u=e(4177),d=e(86752),l=e.t(d,2),f=e(37797),i=e(60164),o=e(7657),R=e(62222),E=e(45844),N=e(8240),g=e(34028),M=e(78831),O=e(80703),w=e(12598);function Y(V,ue){const pe={};return ue.forEach(D=>{D in V&&(pe[D]=V[D])}),pe}var X=e(6890),q=e(22532),A=e(75257),L=e(7829),W=e(64508),$=e(75601);const Q=(V,ue,pe,D,T,_)=>{clearTimeout(T);const b=(0,$.y0)(ue),ve=new Map(D.current);ve.set(V,b),pe(ve),D.current=ve,_&&_({key:V,current:b})},F=({allowMultiple:V,enter:ue=!0,exit:pe=!0,preEnter:D,preExit:T,timeout:_,initialEntered:b,mountOnEnter:ve,unmountOnExit:Ee,onStateChange:ee}={})=>{const[Ce,De]=(0,I.useState)(new Map),C=(0,I.useRef)(Ce),G=(0,I.useRef)(new Map),[y,ae]=(0,$.fj)(_),re=(0,I.useCallback)((Z,me)=>{const{initialEntered:J=b}=me||{},U=J?$.cn:(0,$.Ef)(ve);Q(Z,U,De,C),G.current.set(Z,{})},[b,ve]),de=(0,I.useCallback)(Z=>{const me=new Map(C.current);return me.delete(Z)?(De(me),C.current=me,G.current.delete(Z),!0):!1},[]),ce=(0,I.useCallback)(Z=>{const me=C.current.get(Z);if(!me)return;const{timeoutId:J}=G.current.get(Z),U=(0,$.XZ)(me._s,Ee);U&&Q(Z,U,De,C,J,ee)},[ee,Ee]),k=(0,I.useCallback)((Z,me)=>{const J=C.current.get(Z);if(!J)return;const U=G.current.get(Z),Re=oe=>{switch(Q(Z,oe,De,C,U.timeoutId,ee),oe){case $.d0:y>=0&&(U.timeoutId=setTimeout(()=>ce(Z),y));break;case $.Ix:ae>=0&&(U.timeoutId=setTimeout(()=>ce(Z),ae));break;case $.iL:case $.iU:U.timeoutId=(0,$.Y3)(Re,oe);break}},Me=J.isEnter;typeof me!="boolean"&&(me=!Me),me?Me||(Re(ue?D?$.iL:$.d0:$.cn),!V&&C.current.forEach((oe,xe)=>xe!==Z&&k(xe,!1))):Me&&Re(pe?T?$.iU:$.Ix:(0,$.Ef)(Ee))},[ee,ce,V,ue,pe,D,T,y,ae,Ee]),Ie=(0,I.useCallback)(Z=>{if(!(!V&&Z!==!1))for(const me of C.current.keys())k(me,Z)},[V,k]);return{stateMap:Ce,toggle:k,toggleAll:Ie,endTransition:ce,setItem:re,deleteItem:de}};var z=e(53175),te=e(67324),P=e(71932),S=e(31716),B=e(95154),j=e(81184),H=e.t(j,2),ge={"sqi-web-src-common-demo-portal":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,99902))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49108).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":u,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":u,"react-dom":l,"@sqi-ui/hooks":n,"@sqi-ui/utils":m},renderOpts:{compile:function(){var V=v()(s()().mark(function pe(){var D,T=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},pe)}));function ue(){return V.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-base":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,74587))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58072).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":q,"../CSSMotion.tsx":A,"../config-provider/context.ts":z,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":q,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":A,clsx:L,"react-transition-state":r,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":z},renderOpts:{compile:function(){var V=v()(s()().mark(function pe(){var D,T=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},pe)}));function ue(){return V.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,85773))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79172).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"./motion.css":q,"../CSSMotion.tsx":A,"../config-provider/context.ts":z,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":q,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":A,clsx:L,"react-transition-state":r,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":z},renderOpts:{compile:function(){var V=v()(s()().mark(function pe(){var D,T=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},pe)}));function ue(){return V.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-css-motion-portal":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,6685))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1175).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(16173).Z},"../CSSMotion.tsx":{type:"FILE",value:e(6321).Z},"./motion.css":{type:"FILE",value:e(79172).Z},clsx:{type:"NPM",value:"2.1.1"},"react-dom":{type:"NPM",value:"19.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(77613).Z}},entry:"index.tsx"},context:{"../Portal.tsx":u,"../CSSMotion.tsx":A,"./motion.css":q,"../config-provider/context.ts":z,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":u,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":A,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":q,clsx:L,"react-dom":l,"react-transition-state":r,"@sqi-ui/hooks":n,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":z},renderOpts:{compile:function(){var V=v()(s()().mark(function pe(){var D,T=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},pe)}));function ue(){return V.apply(this,arguments)}return ue}()}},"sqi-web-src-common-demo-resize-observer":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,80023))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25094).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(87425).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(90458).Z},"../_util/toArray.ts":{type:"FILE",value:e(17588).Z},"../_util/dom.ts":{type:"FILE",value:e(48557).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":te,"../_util/ref.ts":P,"../_util/toArray.ts":S,"../_util/dom.ts":B,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":te,"@sqi-ui/utils":m,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":P,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":S,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":B,"react-is":H},renderOpts:{compile:function(){var V=v()(s()().mark(function pe(){var D,T=arguments;return s()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,e.e(70).then(e.bind(e,25070));case 2:return b.abrupt("return",(D=b.sent).default.apply(D,T));case 3:case"end":return b.stop()}},pe)}));function ue(){return V.apply(this,arguments)}return ue}()}}}},13842:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I={"sqi-web-src-alert-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,73819))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95121).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-alert-demo-type":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,15202))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75458).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-alert-demo-action":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,35563))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44633).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}}}},6677:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-button-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,16286))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-button-demo-disabled":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,98669))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41122).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-button-demo-loading":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,86011))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-button-demo-variant":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,18024))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42791).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-button-demo-size":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,7792))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95453).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}}}},58718:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I=e(84912),h={"sqi-web-src-checkbox-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,42303))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(52648).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-control":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,24394))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(10654).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-group":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,55519))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93672).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,8780))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42331).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-custom-render":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,98868))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(302).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-checkbox-demo-options":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,41499))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37544).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(18359).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}}}},94435:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I={"sqi-web-src-config-provider-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,40787))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71841).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-config-provider-demo-nest":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,30933))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77322).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}}}},29876:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I={"sqi-web-src-divider-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,35038))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54117).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-divider-demo-with-text":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,31503))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58549).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-divider-demo-vertical":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,35680))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(65325).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}}}},60061:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I=e(66351),h={"sqi-web-src-grid-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,69753))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9098).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-gap":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,93817))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96507).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-flex":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,26989))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8872).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-justify":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,33271))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17153).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-align":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,32093))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95921).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-offset":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,29727))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(78066).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-order":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,30407))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(82986).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-grid-demo-responsive":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,56682))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23972).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(93720).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}}}},13438:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(5629),I=e(45990),h={"sqi-web-src-icon-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,73043))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64705).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/icons":v,"@sqi-ui/web":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-icon-demo-color":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,37317))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(36848).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/icons":v,"@sqi-ui/web":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-icon-demo-custom":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,28981))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66135).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/icons":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}}}},73931:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-input-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,27878))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25623).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-size":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,30525))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38082).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-variant":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,99670))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8899).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-align":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,66666))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(90822).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-status":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,32910))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13589).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-tips":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,77182))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56596).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-addon":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,52035))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34941).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-affix":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,96294))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80488).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-password":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,72326))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31475).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-input-demo-max-length":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,20416))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37604).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}}}},95752:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I=e(74944),h={"sqi-web-src-radio-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,75228))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71038).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-appearance":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,1753))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31932).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-disabled":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,46052))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8910).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-size":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,99789))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32105).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-vertical":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,37848))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75593).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-custom-render":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,75386))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(2930).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-radio-demo-options":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,91859))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27389).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(61963).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}}}},5237:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I={"sqi-web-src-space-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,72626))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7420).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-space-demo-direction-vertical":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,19067))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39113).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-space-demo-align":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,1251))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74317).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-space-demo-wrap":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,44842))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(24811).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-space-demo-split":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,66545))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(17474).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=s()(r()().mark(function u(){var d,l=arguments;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(70).then(e.bind(e,25070));case 2:return i.abrupt("return",(d=i.sent).default.apply(d,l));case 3:case"end":return i.stop()}},u)}));function c(){return h.apply(this,arguments)}return c}()}}}},26973:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-switch-demo-base":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,4275))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(53483).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-switch-demo-status":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,92394))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37147).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-switch-demo-size":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,75906))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(72727).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}},"sqi-web-src-switch-demo-custom-icon":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,54014))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(83852).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var c=s()(r()().mark(function d(){var l,f=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(70).then(e.bind(e,25070));case 2:return o.abrupt("return",(l=o.sent).default.apply(l,f));case 3:case"end":return o.stop()}},d)}));function u(){return c.apply(this,arguments)}return u}()}}}},37666:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return u}});var m=e(90819),r=e.n(m),p=e(89933),s=e.n(p),a=e(53360),v=e(45990),I=e(43261),h=e(45513),c=e(52342),u={"sqi-web-src-trigger-demo-popper":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,44554))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-popper",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29447).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(91778).Z},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z}},entry:"index.tsx"},context:{"./demo.module.css":I,"./_wrapper.tsx":h,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":I,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h},renderOpts:{compile:function(){var d=s()(r()().mark(function f(){var i,o=arguments;return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(70).then(e.bind(e,25070));case 2:return E.abrupt("return",(i=E.sent).default.apply(i,o));case 3:case"end":return E.stop()}},f)}));function l(){return d.apply(this,arguments)}return l}()}},"sqi-web-src-trigger-demo-basic-trigger":{component:a.memo(a.lazy(function(){return e.e(433).then(e.bind(e,32114))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-basic-trigger",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(54513).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(96443).Z},"./_wrapper.tsx":{type:"FILE",value:e(34167).Z},"./demo.module.css":{type:"FILE",value:e(91778).Z}},entry:"index.tsx"},context:{"./motion.css":c,"./_wrapper.tsx":h,"./demo.module.css":I,react:n||(n=e.t(a,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":I},renderOpts:{compile:function(){var d=s()(r()().mark(function f(){var i,o=arguments;return r()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(70).then(e.bind(e,25070));case 2:return E.abrupt("return",(i=E.sent).default.apply(i,o));case 3:case"end":return E.stop()}},f)}));function l(){return d.apply(this,arguments)}return l}()}}}},75257:function(x,t,e){"use strict";e.r(t);var n=e(73193),m=e.n(n),r=e(10154),p=e.n(r),s=e(45332),a=e.n(s),v=e(84176),I=e.n(v),h=e(53360),c=e(7829),u=e(64508),d=e(80703),l=e(53175),f=["children","name","prefixCls"],i=(0,h.forwardRef)(function(o,R){var E=(0,h.useContext)(l.ConfigContext),N=o.children,g=o.name,M=o.prefixCls,O=I()(o,f),w=(0,u.Y)(O),Y=a()(w,2),X=Y[0],q=Y[1],A=(0,h.isValidElement)(N);(0,h.useImperativeHandle)(R,function(){return{toggle:q}});var L="".concat(M||E.prefixCls).concat(g?"-".concat(g):""),W=(0,c.default)(["".concat(L,"-motion")],p()({},"".concat(L,"-motion-").concat(X.status),X.status));return(0,d.mf)(N)?X.isMounted?N(m()(m()({},X),{},{className:W,toggle:q})):null:A?X.isMounted?(0,h.cloneElement)(N,{className:(0,c.default)(N.props.className,W)}):null:N});i.displayName="CSSMotion",t.default=i},4177:function(x,t,e){"use strict";e.r(t);var n=e(45332),m=e.n(n),r=e(53360),p=e(86752),s=e(60164),a=e(34028),v=e(80703),I=(0,a.J)();function h(u){return I?(0,v.HD)(u)?document.querySelector(u):(0,v.mf)(u)?u():u instanceof HTMLElement?u:document.body:null}var c=(0,r.forwardRef)(function(u,d){var l=u.getContainer,f=u.prefixCls,i=u.children,o=u.open,R=o===void 0?!0:o,E=u.rootStyle,N=(0,r.useState)(null),g=m()(N,2),M=g[0],O=g[1],w=(0,r.useState)(null),Y=m()(w,2),X=Y[0],q=Y[1],A=X||document.body;(0,r.useEffect)(function(){var W=h(l);q(W||null)},[l]);var L=function(){if(!I||M)return null;var $=document.createElement("div");f&&($.className="".concat(f,"-portal-wrapper")),E&&Object.assign($.style,E),$.setAttribute("data-portal","true"),O($)};return(0,s.L)(function(){I&&(R?L():O(null))},[R]),r.useImperativeHandle(d,function(){return M},[M]),(0,s.L)(function(){if(!(!I||!M)){var W=function(){return!M.parentNode&&A.appendChild(M)},$=function(){var F;return(F=M.parentNode)===null||F===void 0?void 0:F.removeChild(M)};return R?W():$(),function(){$()}}},[R,M]),R&&i&&M?(0,p.createPortal)(i,M):null});c.displayName="Portal",t.default=c},67324:function(x,t,e){"use strict";e.r(t);var n=e(45332),m=e.n(n),r=e(53360),p=e(6890),s=e(8240),a=e(31716),v=e(95154),I=e(71932),h=(0,r.forwardRef)(function(c,u){var d=c.children,l=c.disabled,f=c.throttleMs,i=f===void 0?100:f,o=c.onResize,R=(0,r.isValidElement)(d),E=R?(0,a.toArray)(d):[],N=R?(0,v.getReactNodeRef)(d):null,g=(0,r.useRef)(null),M=(0,r.useState)(null),O=m()(M,2),w=O[0],Y=O[1],X=(0,r.useCallback)(function(W){g.current=W,Y(W)},[]),q=(0,I.useComposeRef)(N,X),A=function(){return(0,v.getRefDom)(g)};(0,r.useImperativeHandle)(u,function(){return w});var L=o?(0,p.P)(o,i):void 0;return(0,s.y)(A(),L,!l),console.log((0,v.getRefDom)(g)),R?(0,r.cloneElement)(d,{ref:q}):d});h.displayName="ResizeObserverComponent",t.default=h},95154:function(x,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return s},getReactNodeRef:function(){return v},getRefDom:function(){return a},isDOM:function(){return p}});var n=e(89957),m=e.n(n),r=e(53360);function p(I){return I instanceof HTMLElement||I instanceof SVGElement}function s(I){return I&&m()(I)==="object"&&p(I.nativeElement)?I.nativeElement:p(I)?I:null}function a(I){if(I)return I.current&&m()(I.current)==="object"&&"currentElement"in I.current?I.current.currentElement:I.current}function v(I){var h=I&&(0,r.isValidElement)(I);if(!h)return null;if(parseInt(r.version,10)>=19){var c;return((c=I.props)===null||c===void 0?void 0:c.ref)||null}return I.ref}},71932:function(x,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return s},fillRef:function(){return a},supportNodeRef:function(){return c},supportRef:function(){return I},useComposeRef:function(){return v}});var n=e(37797),m=e(80703),r=e(53360),p=e(11607),s=function(){for(var d=arguments.length,l=new Array(d),f=0;f<d;f++)l[f]=arguments[f];var i=l.filter(Boolean);return i.length<=1?i[0]:function(o){l.forEach(function(R){a(R,o)})}},a=function(d,l){(0,m.mf)(d)?d(l):(0,m.Kn)(d)&&"current"in d&&(d.current=l)},v=function(){for(var d=arguments.length,l=new Array(d),f=0;f<d;f++)l[f]=arguments[f];return(0,n.D)(function(){return s.apply(void 0,l)},l,function(i,o){return i.length!==o.length||i.every(function(R,E){return R!==o[E]})})},I=function(d){var l,f;if(!d)return!1;var i=parseInt(r.version,10);if(h(d)&&i>=19)return!0;var o=(0,p.isMemo)(d)?d.type.type:d.type;return!(typeof o=="function"&&!((l=o.prototype)!==null&&l!==void 0&&l.render)&&o.$$typeof!==p.ForwardRef||typeof d=="function"&&!((f=d.prototype)!==null&&f!==void 0&&f.render)&&d.$$typeof!==p.ForwardRef)};function h(u){return(0,r.isValidElement)(u)&&!(0,p.isFragment)(u)}var c=function(d){return h(d)&&I(d)}},31716:function(x,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return r}});var n=e(53360),m=e(11607);function r(p){var s=[];return n.Children.toArray(p).forEach(function(a){a!=null&&(Array.isArray(a)?s=s.concat(r(a)):(0,n.isValidElement)(a)&&(0,m.isFragment)(a)&&a.props?s=s.concat(r(a.props.children)):s.push(a))}),s}},84912:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),m=e(69787);function r(p){var s=p.item,a=p.checked,v={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(a?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:a?"var(--sqi-brand-color)":"",backgroundColor:a?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},I={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:a?1:0,transition:"all 0.3s"};return(0,m.jsxs)("div",{style:v,children:[(0,m.jsx)("div",{style:I}),(0,m.jsx)("strong",{children:s}),(0,m.jsx)("div",{children:"this is a checkbox"})]})}},53175:function(x,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return r},defaultConfigProps:function(){return m}});var n=e(53360),m={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(m)},66351:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),m=e(69787);function r(p){var s=p.colorPalette,a=s===void 0?6:s,v=p.children,I=p.height;return(0,m.jsx)("div",{style:{height:I||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(a,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:v})}},74944:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var n=e(53360),m=e(69787);function r(p){var s=p.item,a=p.checked,v={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(a?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:a?"var(--sqi-brand-color)":"",backgroundColor:a?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},I={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:a?1:0,transition:"all 0.3s"};return(0,m.jsxs)("div",{style:v,children:[(0,m.jsx)("div",{style:I}),(0,m.jsx)("strong",{children:s}),(0,m.jsx)("div",{children:"this is a radio"})]})}},45513:function(x,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return p}});var n=e(53360),m=e(43261),r=e(69787),p=(0,n.forwardRef)(function(s,a){var v=s.size,I=s.backgroundColor,h=s.children;return(0,r.jsx)("div",{ref:a,className:m.default.box,style:{width:v+"px",height:v+"px",backgroundColor:I},children:h})});p.displayName="Component"},22532:function(x,t,e){"use strict";e.r(t)},43261:function(x,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai","sqi-demo-motion":"lyPu5JRah80EXpc61PWj","sqi-demo-motion-preEnter":"wq8WrD6Ji_cIyktNYUsJ","sqi-demo-motion-exiting":"yRmFPwtGXTMctvysu9rP","sqi-demo-motion-entered":"rmokT3yXIS0BKvSg921n","sqi-demo-motion-exited":"XDMMMhdu0RkwQBzK1_dJ"}},52342:function(x,t,e){"use strict";e.r(t)},34481:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 css \u9690\u85CF\u7EC4\u4EF6",paraId:4}]},97302:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},81955:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},15096:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},38427:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},68291:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactN`ode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},18070:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},50409:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},50310:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u63CF\u8FF0",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"type",paraId:10,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:10,tocIndex:12},{value:"MDN",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"text",paraId:10,tocIndex:12},{value:"size",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:10,tocIndex:12},{value:"ConfigSize",paraId:10,tocIndex:12},{value:"md",paraId:10,tocIndex:12},{value:"status",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:10,tocIndex:12},{value:"success",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"warning",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"error",paraId:10,tocIndex:12},{value:"tips",paraId:10,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"allowClear",paraId:10,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"align",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"center",paraId:10,tocIndex:12},{value:" |",paraId:10,tocIndex:12},{value:"right",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"variant",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"borderless",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"underline",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"addonBefore",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"addonAfter",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"prefix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"suffix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"visibilityToggle",paraId:10,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"VisibilityToggle",paraId:11,tocIndex:12},{value:"maxLength",paraId:10,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:10,tocIndex:12},{value:"number",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"MaxLength",paraId:12,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:10,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:13,tocIndex:13},{value:"\u63CF\u8FF0",paraId:13,tocIndex:13},{value:"\u7C7B\u578B",paraId:13,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"visible",paraId:13,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:13,tocIndex:13},{value:"boolean",paraId:13,tocIndex:13},{value:"renderIcon",paraId:13,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:13,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:13,tocIndex:13},{value:"onVisibleChange",paraId:13,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:13,tocIndex:13},{value:"(visible: boolean) => void",paraId:13,tocIndex:13},{value:"\u5C5E\u6027",paraId:14,tocIndex:14},{value:"\u63CF\u8FF0",paraId:14,tocIndex:14},{value:"\u7C7B\u578B",paraId:14,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:14},{value:"length",paraId:14,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:14,tocIndex:14},{value:"number",paraId:14,tocIndex:14},{value:"showLimit",paraId:14,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14},{value:"true",paraId:14,tocIndex:14},{value:"errorOnly",paraId:14,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14}]},65793:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},18328:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u63CF\u8FF0",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"size",paraId:1,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:1,tocIndex:6},{value:"SizeType",paraId:2,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"[SizeType, SizeType]",paraId:1,tocIndex:6},{value:"direction",paraId:1,tocIndex:6},{value:"\u65B9\u5411",paraId:1,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:1,tocIndex:6},{value:"'horizontal'",paraId:1,tocIndex:6},{value:"align",paraId:1,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:1,tocIndex:6},{value:"wrap",paraId:1,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"false",paraId:1,tocIndex:6},{value:"split",paraId:1,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u63CF\u8FF0",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"SizeType",paraId:3,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:3,tocIndex:7},{value:"ConfigSize",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"undefined",paraId:3,tocIndex:7}]},70966:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"defaultChecked",paraId:0,tocIndex:5},{value:"\u975E\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"checked",paraId:0,tocIndex:5},{value:"\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"disabled",paraId:0,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"size",paraId:0,tocIndex:5},{value:"\u5C3A\u5BF8",paraId:0,tocIndex:5},{value:"sm",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"lg",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"label",paraId:0,tocIndex:5},{value:"\u6587\u672C",paraId:0,tocIndex:5},{value:"[checked?: ReactNode, unchecked?: ReactNode]",paraId:0,tocIndex:5},{value:"loading",paraId:0,tocIndex:5},{value:"loading \u72B6\u6001",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"loadingIcon",paraId:0,tocIndex:5},{value:"\u81EA\u5B9A\u4E49 loading \u56FE\u6807",paraId:0,tocIndex:5},{value:"ReactNode",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5},{value:"onClick",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1(\u7981\u7528\u72B6\u6001\u65E0\u6548)",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5}]},8825:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 Popover \u7EC4\u4EF6\uFF08\u89C4\u5212\u4E2D\uFF09\u6765\u66FF\u4EE3 Trigger \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popperjs \u7684\u57FA\u7840\u529F\u80FD\uFF08\u903B\u8F91\u5B9E\u73B0\u5E76\u4E0D\u4F18\u96C5\uFF0C\u4E14\u8BF8\u591A\u60C5\u51B5\u672A\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:2,tocIndex:1},{value:"table th tr",paraId:2,tocIndex:1},{value:" \u4E0B\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0Ccss ",paraId:2,tocIndex:1},{value:"will-change transform",paraId:2,tocIndex:1},{value:" \u7B49\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF09",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u91C7\u53D6\u628A\u7BAD\u5934\u76F8\u5BF9\u4E8E popper \u5B9A\u4F4D\uFF0C\u8FDB\u884C\u5C0F\u8303\u56F4\u504F\u79FB\u53EF\u4EE5\u51CF\u5C11\u975E\u5E38\u591A\u903B\u8F91\u4EE3\u7801",paraId:3,tocIndex:1},{value:"\u540E\u7EED\u53EF\u80FD\u4F1A\u5BF9\u5B9A\u4F4D\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C\u6709\u80FD\u529B\u91CD\u5199\u7684\u8BDD\uFF0CI am very vegetable :)",paraId:4,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:5},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"top",paraId:6},{value:" \u548C ",paraId:6},{value:"bottom",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 y \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C",paraId:6},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"left",paraId:6},{value:" \u548C ",paraId:6},{value:"right",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 x \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C\u3002",paraId:6},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popper \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08\u4E5F\u4E0D\u662F\u8BEF\u5DEE\uFF0C\u800C\u662F\u6B64\u65F6 popper \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:7},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:8,tocIndex:2},{value:"transform",paraId:8,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:8,tocIndex:2},{value:"\u5C5E\u6027",paraId:9,tocIndex:3},{value:"\u63CF\u8FF0",paraId:9,tocIndex:3},{value:"\u7C7B\u578B",paraId:9,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:3},{value:"children",paraId:9,tocIndex:3},{value:"\u89E6\u53D1\u7684\u76EE\u6807\u5143\u7D20",paraId:9,tocIndex:3},{value:"ReactElement",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"popper",paraId:9,tocIndex:3},{value:"\u60AC\u6D6E\u5143\u7D20",paraId:9,tocIndex:3},{value:"ReactElement",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"arrow",paraId:9,tocIndex:3},{value:"\u7BAD\u5934\u5143\u7D20",paraId:9,tocIndex:3},{value:"ReactElement",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"motion",paraId:9,tocIndex:3},{value:"\u52A8\u753B props \u7EE7\u627F\u81EA ",paraId:9,tocIndex:3},{value:"react-transition-state",paraId:9,tocIndex:3},{value:"Omit<CSSMotionProps, 'children'>",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"direction",paraId:9,tocIndex:3},{value:"popper \u4F4D\u7F6E",paraId:9,tocIndex:3},{value:"TriggerDirection",paraId:9,tocIndex:3},{value:"bottom",paraId:9,tocIndex:3},{value:"enableFlip",paraId:9,tocIndex:3},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"true",paraId:9,tocIndex:3},{value:"enableShift",paraId:9,tocIndex:3},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"true",paraId:9,tocIndex:3},{value:"offset",paraId:9,tocIndex:3},{value:"popper \u504F\u79FB\u91CF",paraId:9,tocIndex:3},{value:"number | { x: number; y: number }",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"zIndex",paraId:9,tocIndex:3},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:9,tocIndex:3},{value:"number",paraId:9,tocIndex:3},{value:"0",paraId:9,tocIndex:3},{value:"getContainer",paraId:9,tocIndex:3},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:9,tocIndex:3},{value:"string | HTMLElement | () => HTMLElement",paraId:9,tocIndex:3},{value:"document.body",paraId:9,tocIndex:3},{value:"trigger",paraId:9,tocIndex:3},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:9,tocIndex:3},{value:"TriggerType | TriggerType[]",paraId:9,tocIndex:3},{value:'"hover"',paraId:9,tocIndex:3},{value:"delay",paraId:9,tocIndex:3},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:9,tocIndex:3},{value:"number",paraId:9,tocIndex:3},{value:"100",paraId:9,tocIndex:3},{value:"clickOutsideClose",paraId:9,tocIndex:3},{value:"\u70B9\u51FB\u5916\u90E8\u662F\u5426\u53EF\u5173\u95ED",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"true",paraId:9,tocIndex:3},{value:"visible",paraId:9,tocIndex:3},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"onVisibleChange",paraId:9,tocIndex:3},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:9,tocIndex:3},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"disabled",paraId:9,tocIndex:3},{value:"\u7981\u7528\u884C\u4E3A",paraId:9,tocIndex:3},{value:"boolean",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"\u5171 12 \u4E2A\u65B9\u4F4D",paraId:10,tocIndex:4},{value:"top",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"right",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"bottom",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"left",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"top-start",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"top-end",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"right-start",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"right-end",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"bottom-start",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"bottom-end",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"left-start",paraId:11,tocIndex:4},{value:" | ",paraId:11,tocIndex:4},{value:"left-end",paraId:11,tocIndex:4},{value:"\u5BF9\u5E94 eventListener \u7684\u4E8B\u4EF6\u540D\u79F0",paraId:12,tocIndex:5},{value:"hover",paraId:13,tocIndex:5},{value:" | ",paraId:13,tocIndex:5},{value:"click",paraId:13,tocIndex:5},{value:" | ",paraId:13,tocIndex:5},{value:"focus",paraId:13,tocIndex:5},{value:" | ",paraId:13,tocIndex:5},{value:"mousedown",paraId:13,tocIndex:5},{value:" | ",paraId:13,tocIndex:5},{value:"context-menu",paraId:13,tocIndex:5}]},6321:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},16173:function(x,t){"use strict";t.Z=`import React, { forwardRef, useEffect, useState } from 'react';
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
`},87425:function(x,t){"use strict";t.Z=`import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
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

  const [element, setElement] = useState<HTMLElement | null>(null);

  const refCallback = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
    setElement(node);
  }, []);

  // \u5408\u5E76ref
  const mergedRef = useComposeRef(originRef, refCallback);

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

  useImperativeHandle(ref, () => element as HTMLElement);

  const throttleResize = onResize ? throttle(onResize, throttleMs) : undefined;

  useResizeObserver(getDomElement(), throttleResize, !disabled);

  console.log(getRefDom(elementRef));

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
  if (parseInt(version, 10) >= 19) {
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
        <Button key={index.toString()} type="primary">
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
  }, []);

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
`},27833:function(x,t,e){"use no memo";"use strict";var n=Object.create,m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,s=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,v=(P,S)=>{for(var B in S)m(P,B,{get:S[B],enumerable:!0})},I=(P,S,B,j)=>{if(S&&typeof S=="object"||typeof S=="function")for(let H of p(S))!a.call(P,H)&&H!==B&&m(P,H,{get:()=>S[H],enumerable:!(j=r(S,H))||j.enumerable});return P},h=(P,S,B)=>(B=P!=null?n(s(P)):{},I(S||!P||!P.__esModule?m(B,"default",{value:P,enumerable:!0}):B,P)),c=P=>I(m({},"__esModule",{value:!0}),P),u={};v(u,{$dispatcherGuard:()=>X,$makeReadOnly:()=>A,$reset:()=>q,$structuralCheck:()=>te,c:()=>g,clearRenderCounterRegistry:()=>W,renderCounterRegistry:()=>L,useRenderCounter:()=>F}),x.exports=c(u);var d=h(e(53360)),{useRef:l,useEffect:f,isValidElement:i}=d,o,R=(o=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)!=null?o:d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.memo_cache_sentinel"),N,g=typeof((N=d.__COMPILER_RUNTIME)==null?void 0:N.c)=="function"?d.__COMPILER_RUNTIME.c:function(S){return d.useMemo(()=>{const B=new Array(S);for(let j=0;j<S;j++)B[j]=E;return B[E]=!0,B},[])},M={};["readContext","useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","unstable_isNewReconciler","getCacheSignal","getCacheForType","useCacheRefresh"].forEach(P=>{M[P]=()=>{throw new Error(`[React] Unexpected React hook call (${P}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)}});var O=null;M.useMemoCache=P=>{if(O==null)throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");return O.useMemoCache(P)};function w(P){return R.ReactCurrentDispatcher.current=P,R.ReactCurrentDispatcher.current}var Y=[];function X(P){const S=R.ReactCurrentDispatcher.current;if(P===0){if(Y.push(S),Y.length===1&&(O=S),S===M)throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");w(M)}else if(P===1){const B=Y.pop();if(B==null)throw new Error("React Compiler internal error: unexpected null in guard stack");Y.length===0&&(O=null),w(B)}else if(P===2)Y.push(S),w(O);else if(P===3){const B=Y.pop();if(B==null)throw new Error("React Compiler internal error: unexpected null in guard stack");w(B)}else throw new Error("React Compiler internal error: unreachable block"+P)}function q(P){for(let S=0;S<P.length;S++)P[S]=E}function A(){throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")}var L=new Map;function W(){for(const P of L.values())P.forEach(S=>{S.count=0})}function $(P,S){let B=L.get(P);B==null&&(B=new Set,L.set(P,B)),B.add(S)}function Q(P,S){const B=L.get(P);B!=null&&B.delete(S)}function F(P){const S=l(null);S.current!=null&&(S.current.count+=1),f(()=>{if(S.current==null){const B={count:0};$(P,B),S.current=B}return()=>{S.current!==null&&Q(P,S.current)}})}var z=new Set;function te(P,S,B,j,H,ge){function V(D,T,_,b){const ve=`${j}:${ge} [${H}] ${B}${_} changed from ${D} to ${T} at depth ${b}`;z.has(ve)||(z.add(ve),console.error(ve))}const ue=2;function pe(D,T,_,b){if(!(b>ue)){if(D===T)return;if(typeof D!=typeof T)V(`type ${typeof D}`,`type ${typeof T}`,_,b);else if(typeof D=="object"){const ve=Array.isArray(D),Ee=Array.isArray(T);if(D===null&&T!==null)V("null",`type ${typeof T}`,_,b);else if(T===null)V(`type ${typeof D}`,"null",_,b);else if(D instanceof Map)if(!(T instanceof Map))V("Map instance","other value",_,b);else if(D.size!==T.size)V(`Map instance with size ${D.size}`,`Map instance with size ${T.size}`,_,b);else for(const[ee,Ce]of D)T.has(ee)?pe(Ce,T.get(ee),`${_}.get(${ee})`,b+1):V(`Map instance with key ${ee}`,`Map instance without key ${ee}`,_,b);else if(T instanceof Map)V("other value","Map instance",_,b);else if(D instanceof Set)if(!(T instanceof Set))V("Set instance","other value",_,b);else if(D.size!==T.size)V(`Set instance with size ${D.size}`,`Set instance with size ${T.size}`,_,b);else for(const ee of T)D.has(ee)||V(`Set instance without element ${ee}`,`Set instance with element ${ee}`,_,b);else if(T instanceof Set)V("other value","Set instance",_,b);else if(ve||Ee)if(ve!==Ee)V(`type ${ve?"array":"object"}`,`type ${Ee?"array":"object"}`,_,b);else if(D.length!==T.length)V(`array with length ${D.length}`,`array with length ${T.length}`,_,b);else for(let ee=0;ee<D.length;ee++)pe(D[ee],T[ee],`${_}[${ee}]`,b+1);else if(i(D)||i(T))i(D)!==i(T)?V(`type ${i(D)?"React element":"object"}`,`type ${i(T)?"React element":"object"}`,_,b):D.type!==T.type?V(`React element of type ${D.type}`,`React element of type ${T.type}`,_,b):pe(D.props,T.props,`[props of ${_}]`,b+1);else{for(const ee in T)ee in D||V(`object without key ${ee}`,`object with key ${ee}`,_,b);for(const ee in D)ee in T?pe(D[ee],T[ee],`${_}.${ee}`,b+1):V(`object with key ${ee}`,`object without key ${ee}`,_,b)}}else{if(typeof D=="function")return;isNaN(D)||isNaN(T)?isNaN(D)!==isNaN(T)&&V(`${isNaN(D)?"NaN":"non-NaN value"}`,`${isNaN(T)?"NaN":"non-NaN value"}`,_,b):D!==T&&V(D,T,_,b)}}}pe(P,S,"",0)}},11607:function(x,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler");Symbol.for("react.provider");var s=Symbol.for("react.consumer"),a=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),c=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),d=Symbol.for("react.view_transition"),l=Symbol.for("react.client.reference");function f(i){if(typeof i=="object"&&i!==null){var o=i.$$typeof;switch(o){case e:switch(i=i.type,i){case m:case p:case r:case I:case h:case d:return i;default:switch(i=i&&i.$$typeof,i){case a:case v:case u:case c:return i;case s:return i;default:return o}}case n:return o}}}t.ContextConsumer=s,t.ContextProvider=a,t.Element=e,t.ForwardRef=v,t.Fragment=m,t.Lazy=u,t.Memo=c,t.Portal=n,t.Profiler=p,t.StrictMode=r,t.Suspense=I,t.SuspenseList=h,t.isContextConsumer=function(i){return f(i)===s},t.isContextProvider=function(i){return f(i)===a},t.isElement=function(i){return typeof i=="object"&&i!==null&&i.$$typeof===e},t.isForwardRef=function(i){return f(i)===v},t.isFragment=function(i){return f(i)===m},t.isLazy=function(i){return f(i)===u},t.isMemo=function(i){return f(i)===c},t.isPortal=function(i){return f(i)===n},t.isProfiler=function(i){return f(i)===p},t.isStrictMode=function(i){return f(i)===r},t.isSuspense=function(i){return f(i)===I},t.isSuspenseList=function(i){return f(i)===h},t.isValidElementType=function(i){return typeof i=="string"||typeof i=="function"||i===m||i===p||i===r||i===I||i===h||typeof i=="object"&&i!==null&&(i.$$typeof===u||i.$$typeof===c||i.$$typeof===a||i.$$typeof===s||i.$$typeof===v||i.$$typeof===l||i.getModuleId!==void 0)},t.typeOf=f},81184:function(x,t,e){"use strict";x.exports=e(11607)},37797:function(x,t,e){"use strict";e.d(t,{D:function(){return m}});var n=e(53360);function m(r,p,s){const a=(0,n.useRef)({});return(!("value"in a.current)||s(a.current.condition,p))&&(a.current.value=r(),a.current.condition=p),a.current.value}},60164:function(x,t,e){"use strict";e.d(t,{L:function(){return p}});var n=e(53360),m=e(34028);const p=(0,m.J)()?n.useLayoutEffect:n.useEffect},7657:function(x,t,e){"use strict";e.d(t,{S:function(){return m}});var n=e(53360);function m(r){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return(0,n.useMemo)(()=>{const a=K(K({},p),s),v=K({},r);for(const I in a)v[I]===void 0&&(v[I]=a[I]);return v},[r,p,s])}},62222:function(x,t,e){"use strict";e.d(t,{R:function(){return p}});var n=e(53360),m=e(80703),r=e(45844);function p(s,a){const{defaultValue:v,value:I,onChange:h}=a||{},[c,u]=(0,n.useState)(()=>(0,m.o8)(I)?(0,m.o8)(v)?(0,m.mf)(s)?s():s:(0,m.mf)(v)?v():v:I),d=(0,r.D)(I),l=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(l.current){l.current=!1;return}(0,m.o8)(I)&&d.current!==I&&u(I)},[I]);const f=(0,m.o8)(I)?c:I,i=(0,n.useCallback)(o=>{const R=(0,m.mf)(o)?o(f):o;(0,m.o8)(I)&&u(R),!Object.is(R,f)&&(h==null||h(R))},[I,f,h]);return[f,i]}},45844:function(x,t,e){"use strict";e.d(t,{D:function(){return m}});var n=e(53360);function m(r){const p=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{p.current=r},[r]),p}},8240:function(x,t,e){"use strict";e.d(t,{y:function(){return s}});var n=e(53360),m=e(20759),r=e(34028),p=e(60164);function s(a,v){let I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const h=(0,n.useRef)(null);h.current=v,(0,p.L)(()=>{let c=null;if(!I||!(0,r.J)()||!a)return;const u=d=>{var l;(l=h.current)==null||l.call(h,d)};return c=new m.Z(u),c.observe(a),()=>{if(c&&a){var d;c.unobserve(a),(d=c.disconnect)==null||d.call(c),c=null}}},[a,I])}},31136:function(x,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(53360);const r=(0,n.createContext)({})},37907:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(7829),r=e(31136);const p=(0,n.forwardRef)((a,v)=>{const E=a,{svg:I,type:h,spin:c,rotate:u,className:d,style:l}=E,f=Ue(E,["svg","type","spin","rotate","className","style"]),{prefixCls:i="sqi"}=(0,n.useContext)(r.Z),o=(0,m.default)(`${i}-icon`,{[`${i}-icon-spin`]:!!c&&!!I},d),R=l||{};return Number.isSafeInteger(u)&&(R.transform=`rotate(${u}deg)`),n.createElement("span",K({role:"img",ref:v,"aria-label":h,className:o,style:R},f),I)});p.displayName="Icon";const s=p},46874:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"add",ref:v},a)));p.displayName="AddIcon";const s=p},1824:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"browse",ref:v},a)));p.displayName="BrowseIcon";const s=p},85569:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"browse-off",ref:v},a)));p.displayName="BrowseOffIcon";const s=p},23436:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"check-circle-filled",ref:v},a)));p.displayName="CheckCircleFilledIcon";const s=p},46608:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"chevron-down",ref:v},a)));p.displayName="ChevronDownIcon";const s=p},58360:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"close-circle-filled",ref:v},a)));p.displayName="CloseCircleFilledIcon";const s=p},27377:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"close",ref:v},a)));p.displayName="CloseIcon";const s=p},50397:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"info-circle-filled",ref:v},a)));p.displayName="InfoCircleFilledIcon";const s=p},60333:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"loading",ref:v},a)));p.displayName="LoadingIcon";const s=p},36106:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"search",ref:v},a)));p.displayName="SearchIcon";const s=p},65466:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"upload",ref:v},a)));p.displayName="UploadIcon";const s=p},21925:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360),m=e(37907);function r(a){return(0,n.createElement)("svg",K({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},a),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const p=(0,n.forwardRef)((a,v)=>(0,n.createElement)(m.Z,K({svg:(0,n.createElement)(r),type:"warn-circle-filled",ref:v},a)));p.displayName="WarnCircleFilledIcon";const s=p},5629:function(x,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return r.Z},BrowseIcon:function(){return s.Z},BrowseOffIcon:function(){return p.Z},CheckCircleFilledIcon:function(){return a.Z},ChevronDownIcon:function(){return v.Z},CloseCircleFilledIcon:function(){return I.Z},CloseIcon:function(){return h.Z},IconContext:function(){return m.Z},InfoCircleFilledIcon:function(){return c.Z},LoadingIcon:function(){return u.Z},SearchIcon:function(){return d.Z},UploadIcon:function(){return l.Z},WarnCircleFilledIcon:function(){return f.Z},default:function(){return i}});var n=e(37907),m=e(31136),r=e(46874),p=e(85569),s=e(1824),a=e(23436),v=e(46608),I=e(58360),h=e(27377),c=e(50397),u=e(60333),d=e(36106),l=e(65466),f=e(21925);const i=n.Z},34028:function(x,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(x,t,e){"use strict";e.d(t,{D:function(){return n}});function n(m,r){let p=null;const s=function(){for(var a=arguments.length,v=new Array(a),I=0;I<a;I++)v[I]=arguments[I];p&&clearTimeout(p),p=setTimeout(()=>{m.apply(this,v),p=null},r)};return s.cancel=()=>{p&&(clearTimeout(p),p=null)},s}},80703:function(x,t,e){"use strict";e.d(t,{HD:function(){return s},Kn:function(){return a},Qr:function(){return v},hj:function(){return I},kJ:function(){return p},mf:function(){return m},o8:function(){return r}});const n=Object.prototype.toString;function m(h){return n.call(h)==="[object Function]"}function r(h){return h===void 0}function p(h){return n.call(h)==="[object Array]"}function s(h){return n.call(h)==="[object String]"}const a=h=>n.call(h)==="[object Object]",v=h=>{if(!a(h))return!0;for(const c in h)if(Object.prototype.hasOwnProperty.call(h,c))return!1;return!0},I=h=>n.call(h)==="[object Number]"&&!Number.isNaN(h)},12598:function(x,t,e){"use strict";e.d(t,{C:function(){return n}});function n(m,r){const p=Object.assign({},m);return Array.isArray(r)&&r.forEach(s=>{delete p[s]}),p}},6890:function(x,t,e){"use strict";e.d(t,{P:function(){return m}});var n=e(78831);function m(r,p){let s=null;const a=(0,n.D)(r,p),v=function(){for(var I=arguments.length,h=new Array(I),c=0;c<I;c++)h[c]=arguments[c];s===null?s=Date.now():Date.now()-s>=p&&(s=Date.now(),a.cancel()),a(...h)};return v.cancel=a.cancel,v}},92266:function(x,t,e){"use strict";e.d(t,{C:function(){return p},Z:function(){return s}});var n=e(53360),m=e(7829),r=e(62222);const p=(0,n.forwardRef)((a,v)=>{const w=a,{prefixCls:I,className:h,style:c,checked:u,disabled:d,defaultChecked:l=!1,type:f="checkbox",title:i,onChange:o,_getCheckedValue:R}=w,E=Ue(w,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[N,g]=(0,r.R)(l,{value:u});(0,n.useEffect)(()=>{R==null||R(N)},[N]);const M=(0,m.default)(I,h,{[`${I}-checked`]:N,[`${I}-disabled`]:d}),O=Y=>{d||("checked"in a||g(Y.target.checked),o==null||o({target:be(K({},a),{checked:Y.target.checked}),event:Y}))};return n.createElement("span",{className:M,title:i,style:c},n.createElement("input",be(K({},E),{className:`${I}-input`,ref:v,onChange:O,disabled:d,checked:N,type:f})),n.createElement("span",{className:`${I}-inner`}))});p.displayName="BaseCheckbox";const s=p},40549:function(x,t,e){"use strict";e.d(t,{Z:function(){return v}});var n=e(53360),m=e(7829),r=e(64508),p=e(80703),s=e(57577);const a=(0,n.forwardRef)((I,h)=>{const c=(0,n.useContext)(s.E),g=I,{children:u,name:d,prefixCls:l}=g,f=Ue(g,["children","name","prefixCls"]),[i,o]=(0,r.Y)(f),R=(0,n.isValidElement)(u);(0,n.useImperativeHandle)(h,()=>({toggle:o}));const E=`${l||c.prefixCls}${d?`-${d}`:""}`,N=(0,m.default)([`${E}-motion`],{[`${E}-motion-${i.status}`]:i.status});return(0,p.mf)(u)?i.isMounted?u(be(K({},i),{className:N,toggle:o})):null:R?i.isMounted?(0,n.cloneElement)(u,{className:(0,m.default)(u.props.className,N)}):null:u});a.displayName="CSSMotion";const v=a},4814:function(x,t,e){"use strict";e.d(t,{sQ:function(){return s},t4:function(){return c},x1:function(){return v}});var n=e(37797),m=e(80703),r=e(53360),p=e(11607);const s=function(){for(var u=arguments.length,d=new Array(u),l=0;l<u;l++)d[l]=arguments[l];const f=d.filter(Boolean);return f.length<=1?f[0]:i=>{d.forEach(o=>{a(o,i)})}},a=(u,d)=>{(0,m.mf)(u)?u(d):(0,m.Kn)(u)&&"current"in u&&(u.current=d)},v=function(){for(var u=arguments.length,d=new Array(u),l=0;l<u;l++)d[l]=arguments[l];return(0,n.D)(()=>s(...d),d,(f,i)=>f.length!==i.length||f.every((o,R)=>o!==i[R]))},I=u=>{var d,l;if(!u)return!1;const f=parseInt(r.version,10);if(h(u)&&f>=19)return!0;const i=(0,p.isMemo)(u)?u.type.type:u.type;return!(typeof i=="function"&&!((d=i.prototype)!=null&&d.render)&&i.$$typeof!==p.ForwardRef||typeof u=="function"&&!((l=u.prototype)!=null&&l.render)&&u.$$typeof!==p.ForwardRef)};function h(u){return(0,r.isValidElement)(u)&&!(0,p.isFragment)(u)}const c=u=>h(u)&&I(u)},21299:function(x,t,e){"use strict";e.d(t,{q:function(){return r}});var n=e(53360),m=e(11607);function r(p){let s=[];return n.Children.toArray(p).forEach(a=>{a!=null&&(Array.isArray(a)?s=s.concat(r(a)):(0,n.isValidElement)(a)&&(0,m.isFragment)(a)&&a.props?s=s.concat(r(a.props.children)):s.push(a))}),s}},69203:function(x,t,e){"use strict";e.d(t,{b:function(){return o}});var n=e(27833),m=e(53360),r=e(7829),p=e(7657),s=e(23436),a=e(50397),v=e(58360),I=e(21925),h=e(27377),c=e(40549),u=e(57577);const d={type:"info",showIcon:!0},l={success:s.Z,info:a.Z,error:v.Z,warning:I.Z},f=(0,m.forwardRef)((E,N)=>{const g=(0,n.c)(38),{prefixCls:M,componentConfig:O}=(0,m.useContext)(u.E),{className:w,style:Y,title:X,description:q,type:A,closable:L,showIcon:W,action:$,icon:Q,onClose:F}=(0,p.S)(E,d,O==null?void 0:O.Alert),z=(0,m.useRef)(null);let te;g[0]!==Q||g[1]!==A?(te=()=>(0,m.isValidElement)(Q)?Q:A?(0,m.createElement)(l[A]):null,g[0]=Q,g[1]=A,g[2]=te):te=g[2];const P=te,S=`${M}-alert`,B=`${M}-alert-${A}`;let j;g[3]!==w||g[4]!==S||g[5]!==B?(j=(0,r.default)(S,B,w),g[3]=w,g[4]=S,g[5]=B,g[6]=j):j=g[6];const H=j;let ge;g[7]!==F?(ge=Ce=>{var De;(De=z.current)==null||De.toggle(),F==null||F(Ce)},g[7]=F,g[8]=ge):ge=g[8];const V=ge;let ue;g[9]!==M||g[10]!==P||g[11]!==W?(ue=W&&m.createElement("div",{className:`${M}-alert-icon`},P()),g[9]=M,g[10]=P,g[11]=W,g[12]=ue):ue=g[12];const pe=`${M}-alert-content`;let D;g[13]!==M||g[14]!==X?(D=!!X&&m.createElement("div",{className:`${M}-alert-title`},X),g[13]=M,g[14]=X,g[15]=D):D=g[15];const T=`${M}-alert-description`;let _;g[16]!==q||g[17]!==T?(_=m.createElement("div",{className:T},q),g[16]=q,g[17]=T,g[18]=_):_=g[18];let b;g[19]!==pe||g[20]!==D||g[21]!==_?(b=m.createElement("div",{className:pe},D,_),g[19]=pe,g[20]=D,g[21]=_,g[22]=b):b=g[22];let ve;g[23]!==$||g[24]!==M?(ve=$&&m.createElement("div",{className:`${M}-alert-action`},$),g[23]=$,g[24]=M,g[25]=ve):ve=g[25];let Ee;g[26]!==L||g[27]!==V||g[28]!==M?(Ee=L&&m.createElement("button",{type:"button",className:`${M}-alert-close`,onClick:V},m.createElement(h.Z,null)),g[26]=L,g[27]=V,g[28]=M,g[29]=Ee):Ee=g[29];let ee;return g[30]!==H||g[31]!==N||g[32]!==Y||g[33]!==b||g[34]!==ve||g[35]!==Ee||g[36]!==ue?(ee=m.createElement(c.Z,{ref:z,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},m.createElement("div",{role:"alert",className:H,style:Y,ref:N},ue,b,ve,Ee)),g[30]=H,g[31]=N,g[32]=Y,g[33]=b,g[34]=ve,g[35]=Ee,g[36]=ue,g[37]=ee):ee=g[37],ee});f.displayName="Alert";const o=f,R=null},60884:function(x,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(53360),m=e(7829),r=e(60333),p=e(7657),s=e(57577);const a={type:"default",variant:"default",htmlType:"button"},v=(0,n.forwardRef)((u,d)=>{const{prefixCls:l,size:f="md",componentConfig:i}=(0,n.useContext)(s.E),P=(0,p.S)(u,a,i==null?void 0:i.Button),{children:R,type:E,size:N=f,htmlType:g,status:M,loading:O,disabled:w,variant:Y,icon:X,href:q,target:A,onClick:L,anchorProps:W={}}=P,$=Ue(P,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),Q=O?n.createElement(r.Z,{spin:O}):X,F=q?"link":E,z=(0,m.default)(`${l}-btn`,`${l}-btn-${F}`,{[`${l}-btn-size-${N}`]:N,[`${l}-btn-status-${M}`]:!!M,[`${l}-btn-variant-${Y}`]:Y,[`${l}-btn-loading`]:O,[`${l}-btn-disabled`]:w}),te=S=>{if(O||w)return void S.preventDefault();L==null||L(S)};return q?n.createElement("a",be(K({},W),{href:q,target:A,className:z,onClick:te,ref:d}),Q,n.createElement("span",null,R)):n.createElement("button",be(K({},$),{type:g,className:z,onClick:te,ref:d}),Q,n.createElement("span",null,R))});v.displayName="Button";const h=v,c=null},67824:function(x,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),m=e(7829),r=e(7657),p=e(45844),s=e(80703),a=e(92266),v=e(4814),I=e(57577),h=e(81372);const c={defaultChecked:!1,indeterminate:!1},u=(0,n.forwardRef)((l,f)=>{const{prefixCls:i,componentConfig:o}=(0,n.useContext)(I.E),R=(0,n.useContext)(h.w),F=(0,r.S)(l,c,o==null?void 0:o.Checkbox),{children:E,style:N,className:g,indeterminate:M}=F,O=Ue(F,["children","style","className","indeterminate"]),[w,Y]=(0,n.useState)(!1),X="disabled"in O?O.disabled:R.disabled,q=(0,p.D)(O.value),A=(0,n.useRef)(null);(0,n.useEffect)(()=>{var z;(z=R.registerValue)==null||z.call(R,O.value)},[R,O.value]),(0,n.useEffect)(()=>{if(O.value!==q.current){var z,te;(z=R.unregisterValue)==null||z.call(R,q.current),(te=R.registerValue)==null||te.call(R,O.value)}return()=>{var P;return(P=R.unregisterValue)==null?void 0:P.call(R,O.value)}},[R,O.value]),(0,n.useEffect)(()=>{A.current&&(A.current.indeterminate=M)},[M]);const L=K({},O);(0,s.Qr)(R)||(L.onChange=function(){for(var z=arguments.length,te=new Array(z),P=0;P<z;P++)te[P]=arguments[P];var S,B;(S=O.onChange)==null||S.call(O,...te),(B=R.toggleOption)==null||B.call(R,O.value)},L.name=R.name,L.checked=R.value.includes(O.value));const W=(0,m.default)(`${i}-checkbox-wrapper`,{[`${i}-checkbox-wrapper-checked`]:L.checked,[`${i}-checkbox-wrapper-disabled`]:X},g),$=z=>{if((0,s.mf)(E)){var te;z.preventDefault(),(te=A.current)==null||te.click()}},Q=()=>(0,s.o8)(E)?null:(0,s.mf)(E)?E({checked:"checked"in L?!!L.checked:w}):n.createElement("span",{className:`${i}-checkbox-label`},E);return n.createElement("label",{className:W,onClick:$},n.createElement(a.C,be(K({},L),{type:"checkbox",ref:(0,v.sQ)(f,A),disabled:X,prefixCls:`${i}-checkbox`,className:(0,m.default)({[`${i}-checkbox-indeterminate`]:M}),style:be(K({},N),{display:(0,s.mf)(E)?"none":void 0}),_getCheckedValue:Y})),Q())});u.displayName="Checkbox";const d=u},56104:function(x,t,e){"use strict";e.d(t,{Z:function(){return c}});var n=e(53360),m=e(7829),r=e(7657),p=e(80703),s=e(57577),a=e(81372),v=e(67824);const I={},h=(0,n.forwardRef)((u,d)=>{const{prefixCls:l,componentConfig:f}=(0,n.useContext)(s.E),i=(0,n.useId)(),S=(0,r.S)(u,I,f==null?void 0:f.CheckboxGroup),{defaultValue:o,children:R,options:E,className:N,style:g,disabled:M,name:O=i,onChange:w,renderOption:Y}=S,X=Ue(S,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[q,A]=(0,n.useState)(X.value||o||[]),[L,W]=(0,n.useState)([]);(0,n.useEffect)(()=>{"value"in X&&A(X.value||[])},[X.value]);const $=(0,n.useCallback)(B=>{W(j=>[...j,B])},[]),Q=(0,n.useCallback)(B=>{W(j=>j.filter(H=>H!==B))},[]),F=(0,n.useMemo)(()=>E==null?void 0:E.map(B=>(0,p.HD)(B)||(0,p.hj)(B)?{label:B,value:B}:B),[E]),z=(0,n.useCallback)(B=>{const j=[...q],H=q.indexOf(B);H===-1?j.push(B):j.splice(H,1),"value"in X||A(j);const ge=j.filter(V=>L.includes(V));w==null||w(ge)},[q,L,X.value,w]);let te=R;if((0,p.kJ)(F)&&F.length>0){const B=(0,p.mf)(Y);te=F.map(j=>{const H=q.includes(j.value),ge=B?()=>Y(be(K({},j),{checked:H})):j.label;return n.createElement(v.Z,{key:`checkbox-group-options-${j.value}`,className:j.className,style:j.style,disabled:"disabled"in j?j.disabled:M,value:j.value,checked:H,id:j.id,title:j.title,onChange:j.onChange},ge)})}const P=(0,n.useMemo)(()=>({name:O,value:q,disabled:M,toggleOption:z,registerValue:$,unregisterValue:Q}),[O,q,M,z,$,Q]);return n.createElement("div",{className:(0,m.default)(`${l}-checkbox-group`,N),style:g,ref:d},n.createElement(a.w.Provider,{value:P},te))});h.displayName="CheckboxGroup";const c=h},81372:function(x,t,e){"use strict";e.d(t,{w:function(){return m}});var n=e(53360);const m=(0,n.createContext)({})},89946:function(x,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return v},CheckboxGroup:function(){return I},default:function(){return h}});var n=e(67824),m=e(56104),r=e(558),p=e.n(r),s={};for(var a in r)["default","Checkbox","CheckboxGroup"].indexOf(a)<0&&(s[a]=function(c){return r[c]}.bind(0,a));e.d(t,s);const v=n.Z;v.Group=m.Z;const I=v.Group,h=v},558:function(){},57577:function(x,t,e){"use strict";e.d(t,{$:function(){return m},E:function(){return r}});var n=e(53360);const m={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},r=(0,n.createContext)(m)},83405:function(x,t,e){"use strict";e.d(t,{i:function(){return I}});var n=e(27833),m=e(53360),r=e(12598),p=e(7657),s=e(31136),a=e(57577);function v(h){const c=(0,n.c)(11),u=(0,p.S)(h,a.$),{iconPrefix:d,children:l}=u;let f;c[0]!==u?(f=(0,r.C)(u,["children","iconPrefix"]),c[0]=u,c[1]=f):f=c[1];const i=f,o=d?s.Z.Provider:m.Fragment;let R;c[2]!==d?(R={prefixCls:d},c[2]=d,c[3]=R):R=c[3];let E;c[4]!==o||c[5]!==l||c[6]!==R?(E=m.createElement(o,{value:R},l),c[4]=o,c[5]=l,c[6]=R,c[7]=E):E=c[7];let N;return c[8]!==i||c[9]!==E?(N=m.createElement(a.E.Provider,{value:i},E),c[8]=i,c[9]=E,c[10]=N):N=c[10],N}v.displayName="ConfigProvider";const I=v},48380:function(x,t,e){"use strict";e.d(t,{i:function(){return I}});var n=e(53360),m=e(7829),r=e(7657),p=e(57577);const s={direction:"horizontal",align:"center"},a=(0,n.forwardRef)((c,u)=>{const{prefixCls:d,componentConfig:l}=(0,n.useContext)(p.E),f=(0,r.S)(c,s,l==null?void 0:l.Divider),{direction:i,align:o,dashed:R,className:E,children:N,text:g,style:M}=f,O=N||g,w=i!=="vertical"&&!!O,Y=(0,m.default)(`${d}-divider`,{[`${d}-divider-${i}`]:i,[`${d}-divider-with-text`]:w,[`${d}-divider-with-text-${o}`]:w,[`${d}-divider-dashed`]:!!R,className:E});return n.createElement("div",{className:Y,style:M,ref:u},w&&n.createElement("span",{className:`${d}-divider-inner-text`},O))});a.displayName="Divider";const I=a,h=null},17599:function(x,t,e){"use strict";e.d(t,{J:function(){return q},X:function(){return X}});var n=e(53360),m=e(7829),r=e(7657),p=e(80703),s=e(57577);const a=["xxl","xl","lg","md","sm","xs"],v={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},I=Object.keys(v),h=new Map;let c=-1,u={};const l={handlers:{},dispatch(A){return u=A,h.forEach(L=>{L(u)}),h.size>=1},subscribe(A){return h.size||this.register(),c+=1,h.set(c,A),A(u),c},unsubscribe(A){h.delete(A),h.size||this.unregister()},register(){I.forEach(A=>{const L=Q=>{let{matches:F}=Q;this.dispatch(be(K({},u),{[A]:F}))},W=v[A],$=window.matchMedia(W);$.addListener(L),this.handlers[W]={mql:$,listener:L},L($)})},unregister(){I.forEach(A=>{const L=v[A],W=this.handlers[L];W==null||W.mql.removeListener(W==null?void 0:W.listener)}),h.clear()}},i=(0,n.createContext)({}),o={gutter:0,align:"start",justify:"start",wrap:!0},R=(0,n.forwardRef)((A,L)=>{const{prefixCls:W,componentConfig:$}=(0,n.useContext)(s.E),ee=(0,r.S)(A,o,$==null?void 0:$.Row),{align:Q,justify:F,gutter:z,className:te,wrap:P,children:S,style:B}=ee,j=Ue(ee,["align","justify","gutter","className","wrap","children","style"]),[H,ge]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const Ce=l.subscribe(De=>{((0,p.Kn)(z)||(0,p.kJ)(z)&&((0,p.Kn)(z[0])||(0,p.Kn)(z[1])))&&ge(De)});return()=>l.unsubscribe(Ce)},[z]);const V=ue();function ue(){const Ce=[void 0,void 0];return((0,p.kJ)(z)?z:[z,void 0]).forEach((C,G)=>{if((0,p.Kn)(C))for(let y=0;y<a.length;y++){const ae=a[y];if(H[ae]&&C[ae]!==void 0){Ce[G]=C[ae];break}}else Ce[G]=C}),Ce}const pe=(0,m.default)(`${W}-row`,{[`${W}-row-nowrap`]:P===!1,[`${W}-row-align-${Q}`]:Q,[`${W}-row-justify-${F}`]:F},te),[D,T]=V,_=(0,n.useMemo)(()=>({gutter:[D,T],wrap:P}),[D,T,P]),b={},ve=(0,p.hj)(D)&&D!==0,Ee=(0,p.hj)(T)&&T!==0;if(ve||Ee){const Ce=-D/2,De=-T/2;Ce&&(b.marginLeft=Ce,b.marginRight=Ce),De&&(b.marginTop=De,b.marginBottom=De)}return n.createElement(i.Provider,{value:_},n.createElement("div",be(K({},j),{ref:L,className:pe,style:K(K({},B),b)}),S))});R.displayName="Row";const E=R,N={offset:0};function g(A){return(0,p.hj)(A)?`${A} ${A} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(A)?`0 0 ${A}`:A}const M=["xs","sm","md","lg","xl","xxl"],O=(A,L)=>{let W={};return M.forEach($=>{const Q=A[$];if(!Q)return;let F={};(0,p.hj)(Q)?F.span=Q:(0,p.Kn)(Q)&&(F=Q),W=be(K({},W),{[`${L}-col-${$}-${F.span}`]:(0,p.hj)(F.span),[`${L}-col-${$}-order-${F.order}`]:F.order,[`${L}-col-${$}-offset-${F.offset}`]:F.offset})}),W},w=(0,n.forwardRef)((A,L)=>{const{componentConfig:W,prefixCls:$}=(0,n.useContext)(s.E),{gutter:Q}=(0,n.useContext)(i),ee=(0,r.S)(A,N,W==null?void 0:W.Col),{span:F,offset:z,children:te,className:P,style:S,flex:B,order:j,xs:H,sm:ge,md:V,lg:ue,xl:pe,xxl:D}=ee,T=Ue(ee,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),_=O({xs:H,sm:ge,md:V,lg:ue,xl:pe,xxl:D},$),b=(0,m.default)(`${$}-col`,{[`${$}-col-${F}`]:(0,p.hj)(F),[`${$}-col-offset-${z}`]:z,[`${$}-col-order-${j}`]:j},_,P),ve={};if(Q){const Ce=Q[0]?Q[0]/2:0,De=Q[1]?Q[1]/2:0;Ce&&(ve.paddingLeft=Ce,ve.paddingRight=Ce),De&&(ve.paddingTop=De,ve.paddingBottom=De)}const Ee={};return B&&(Ee.flex=g(B)),n.createElement("div",be(K({ref:L},T),{className:b,style:K(K(K({},S),Ee),ve)}),te)});w.displayName="Col";const Y=w,X=E,q=Y},45990:function(x,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return m.z},Col:function(){return v.J},ConfigProvider:function(){return s.i},Divider:function(){return a.i},Input:function(){return I.I},Row:function(){return v.X},Space:function(){return c.T},Switch:function(){return u.r}});var n=e(69203),m=e(60884),r=e(89946),l={};for(var p in r)["default","Alert","Button"].indexOf(p)<0&&(l[p]=function(f){return r[f]}.bind(0,p));e.d(t,l);var s=e(83405),a=e(48380),v=e(17599),I=e(38312),h=e(37663),l={};for(var p in h)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input"].indexOf(p)<0&&(l[p]=function(i){return h[i]}.bind(0,p));e.d(t,l);var c=e(92595),u=e(9090),d=e(36112),l={};for(var p in d)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Radio","RadioButton","RadioGroup","Space","Switch"].indexOf(p)<0&&(l[p]=function(i){return d[i]}.bind(0,p));e.d(t,l)},38312:function(x,t,e){"use strict";e.d(t,{I:function(){return f}});var n=e(53360),m=e(7829),r=e(7657),p=e(62222),s=e(80703),a=e(58360),v=e(85569),I=e(1824),h=e(57577);const c={type:"text",size:"md",align:"left",visibilityToggle:!0};function u(o,R,E){let N;return N=o===null||(0,s.o8)(o)||(0,s.HD)(o)?o||"":String(o),(0,s.hj)(R)&&!E?N.slice(0,R):N}const d=(0,n.forwardRef)((o,R)=>{const{prefixCls:E,componentConfig:N}=(0,n.useContext)(h.E),Ke=(0,r.S)(o,c,N==null?void 0:N.Input),{size:g,status:M,align:O,disabled:w,allowClear:Y,placeholder:X,variant:q="outline",addonBefore:A,addonAfter:L,prefix:W,suffix:$,value:Q,defaultValue:F,type:z,className:te,style:P,readOnly:S,visibilityToggle:B,maxLength:j,tips:H,onFocus:ge,onBlur:V,onChange:ue}=Ke,pe=Ue(Ke,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),D=(0,n.useRef)(null),T=(0,n.useRef)(null);(0,n.useImperativeHandle)(R,()=>({currentElement:D.current,inputElement:T.current,focus:()=>{var le;return(le=T.current)==null?void 0:le.focus()},blur:()=>{var le;return(le=T.current)==null?void 0:le.blur()},select:()=>{var le;return(le=T.current)==null?void 0:le.select()}}));const[_,b]=(0,n.useState)(!1),ve=le=>{w||S||(b(!0),ge==null||ge(le))},Ee=le=>{w||S||(b(!1),V==null||V(le))},ee=(0,s.hj)(j)?j:j==null?void 0:j.length,Ce=(0,s.hj)(j)?!1:j==null?void 0:j.errorOnly,De=(0,s.hj)(j)?!0:(j==null?void 0:j.showLimit)!==!1,[C,G]=(0,p.R)(F,{value:Q}),y=u(C,ee,Ce),ae=(0,s.hj)(ee)?y.length>ee:!1,re=le=>{const{value:he}=le.target;G(he),ue==null||ue(he,le)},de=()=>{var le;w||(le=T.current)==null||le.focus()},ce=(0,m.default)(`${E}-input`,{[`${E}-input-variant-${q}`]:q,[`${E}-input-size-${g}`]:g,[`${E}-input-disabled`]:w,[`${E}-input-align-${O}`]:O,[`${E}-input-status-${M}`]:M,[`${E}-input-focus`]:_,[`${E}-input-limit-length-error`]:ae},te),k=(0,m.default)(`${E}-input-real`),Ie=Y&&y&&!w,Z=n.createElement(a.Z,null),me=le=>{le.stopPropagation(),G(""),ue==null||ue("",le)},J=Ie&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,m.default)(`${E}-input-suffix`,`${E}-input-clear`),onClick:me},Z),U=(0,s.Kn)(B)&&!(0,s.o8)(B.visible),[Re,Me]=(0,n.useState)(z),oe=(0,s.Kn)(B)?B.visible:B;(0,n.useEffect)(()=>{Me(U?oe?"text":"password":z)},[z,U,oe]);const xe=()=>{if(w)return;const le=Re==="password"?"text":"password";if(Me(le),U){var he;(he=B.onVisibleChange)==null||he.call(B,le==="text")}},ne=z==="password",ie=(0,n.useMemo)(()=>ne?(0,s.Kn)(B)&&(0,s.mf)(B.renderIcon)?B.renderIcon(Re==="text"):Re==="password"?n.createElement(v.Z,null):Re==="text"?n.createElement(I.Z,null):null:$,[ne,Re,B,$]),se=(0,n.useMemo)(()=>function(le){let{children:he}=le;const Be=A||L;let Le=he;return Be&&(Le=n.createElement("div",{ref:D,className:`${E}-input-group`},Le)),H&&(Le=n.createElement("div",{ref:D,className:`${E}-input-group-extra`},Le)),Le},[E,A,L,H]),we=W&&n.createElement("span",{className:`${E}-input-prefix`},W),ye=ie&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,m.default)(`${E}-input-suffix`,{[`${E}-input-suffix-password`]:ne}),onClick:xe,onMouseDown:le=>le.preventDefault(),onMouseUp:le=>le.preventDefault()},ie),Se=(0,s.hj)(ee)&&De&&n.createElement("span",{className:`${E}-input-limit-length-text`},y.length,"/",ee),$e=H&&n.createElement("div",{className:(0,m.default)(`${E}-input-tips`,{[`${E}-input-tips-status-${M}`]:M})},H),We=n.createElement("span",{role:"group",ref:A||L?void 0:D,className:ce,style:P,onClick:de},we,n.createElement("input",be(K({ref:T},pe),{type:Re,value:y,readOnly:S,className:k,placeholder:X,disabled:w,onChange:re,onFocus:ve,onBlur:Ee})),J,ye,Se),Oe=A&&n.createElement("span",{className:(0,m.default)(`${E}-input-group-addon`)},A),je=L&&n.createElement("span",{className:(0,m.default)(`${E}-input-group-addon`)},L);return n.createElement(se,null,Oe,We,je,$e)});d.displayName="Input";const f=d,i=null},74052:function(x,t,e){"use strict";e.d(t,{Z:function(){return u}});var n=e(53360),m=e(7829),r=e(7657),p=e(80703),s=e(92266),a=e(4814),v=e(57577),I=e(83595);const h={defaultChecked:!1},c=(0,n.forwardRef)((d,l)=>{const{prefixCls:f,componentConfig:i}=(0,n.useContext)(v.E),o=(0,n.useContext)(I.Z),z=(0,r.S)(d,h,i==null?void 0:i.Radio),{_IS_BUTTON_:R,value:E,children:N,style:g}=z,M=Ue(z,["_IS_BUTTON_","value","children","style"]),O=te=>{var P,S;(P=M.onChange)==null||P.call(M,te),o==null||(S=o.onChange)==null||S.call(o,te)},w=K({},M);let Y="md";if(!(0,p.Qr)(o)){w.name=o.name,w.onChange=O,w.checked=E===o.value;var X;w.disabled=(X=w.disabled)!=null?X:o.disabled,Y=o.size?o.size:Y}const[q,A]=(0,n.useState)(!1),L=R?`${f}-radio-button`:`${f}-radio`,W=(0,m.default)(`${L}-wrapper`,{[`${L}-wrapper-disabled`]:w.disabled,[`${L}-wrapper-checked`]:w.checked,[`${L}-wrapper-size-${Y}`]:Y,[`${L}-wrapper-filled`]:o.buttonVariant==="filled"}),$=()=>(0,p.o8)(N)?null:(0,p.mf)(N)?N({checked:"checked"in w?!!w.checked:q}):n.createElement("span",{className:`${L}-label`},N),Q=(0,n.useRef)(null),F=te=>{if((0,p.mf)(N)){var P;te.preventDefault(),(P=Q.current)==null||P.click()}};return n.createElement("label",{className:W,onClick:F},n.createElement(s.Z,be(K(K({},M),w),{ref:(0,a.sQ)(l,Q),value:E,type:"radio",prefixCls:L,style:be(K({},g),{display:(0,p.mf)(N)?"none":void 0}),disabled:w.disabled,_getCheckedValue:A})),$())});c.displayName="Radio";const u=c},89312:function(x,t,e){"use strict";e.d(t,{Z:function(){return a}});var n=e(27833),m=e.n(n),r=e(53360),p=e(74052);const s=(0,r.forwardRef)((v,I)=>{const h=(0,n.c)(3);let c;return h[0]!==v||h[1]!==I?(c=r.createElement(p.Z,be(K({_IS_BUTTON_:!0},v),{ref:I})),h[0]=v,h[1]=I,h[2]=c):c=h[2],c});s.displayName="RadioButton";const a=s},59803:function(x,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),m=e(7829),r=e(7657),p=e(62222),s=e(80703),a=e(57577),v=e(83595),I=e(74052),h=e(89312);const c={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},u=(0,n.forwardRef)((l,f)=>{const{prefixCls:i,componentConfig:o}=(0,n.useContext)(a.E),R=(0,r.S)(l,c,o==null?void 0:o.RadioGroup),E=(0,n.useId)(),{className:N,style:g,name:M=E,value:O,defaultValue:w,children:Y,disabled:X,size:q,buttonVariant:A,renderOption:L,onChange:W,appearance:$,options:Q}=R,[F,z]=(0,p.R)(w,{value:O}),te=(0,n.useCallback)(j=>{const H=j.target.value;"value"in R||z(H),H!==F&&(W==null||W(j))},[R.value,F,W]);let P=Y;const S=$==="button"?h.Z:I.Z;if((0,s.kJ)(Q)&&Q.length>0){const j=(0,s.mf)(L);P=Q.map(H=>{if((0,s.HD)(H)||(0,s.hj)(H)){const ue=F===H,pe=j?()=>L({label:H,value:H,checked:ue}):H;return n.createElement(S,{key:H.toString(),disabled:X,value:H,checked:ue},pe)}const ge=F===H.value,V=j?()=>L(be(K({},H),{checked:ge})):H.label;return n.createElement(S,{key:`radio-group-options-${H.value}`,className:H.className,style:H.style,disabled:H.disabled||X,value:H.value,checked:ge,id:H.id,title:H.title,onChange:H.onChange},V)})}const B=(0,n.useMemo)(()=>({name:M,value:F,disabled:X,size:q,buttonVariant:A,onChange:te}),[M,F,X,q,A,te]);return n.createElement("div",{ref:f,className:(0,m.default)(`${i}-radio-group`,N),style:g},n.createElement(v.Z.Provider,{value:B},P))});u.displayName="RadioGroup";const d=u},83595:function(x,t,e){"use strict";e.d(t,{Z:function(){return r}});var n=e(53360);const r=(0,n.createContext)({})},37663:function(x,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return I},RadioButton:function(){return c},RadioGroup:function(){return h},default:function(){return u}});var n=e(74052),m=e(89312),r=e(59803),p=e(63149),s=e.n(p),a={};for(var v in p)["default","Radio","RadioButton","RadioGroup"].indexOf(v)<0&&(a[v]=function(d){return p[d]}.bind(0,v));e.d(t,a);const I=n.Z;I.Group=r.Z,I.Button=m.Z;const h=I.Group,c=I.Button,u=I},63149:function(){},92595:function(x,t,e){"use strict";e.d(t,{T:function(){return u}});var n=e(53360),m=e(7829),r=e(80703),p=e(7657),s=e(21299),a=e(57577);const v={sm:8,md:16,lg:24},I={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((l,f)=>{const{prefixCls:i,size:o="md",componentConfig:R}=(0,n.useContext)(a.E),F=(0,p.S)(l,I,R==null?void 0:R.Space),{className:N,children:g,size:M=o,direction:O="horizontal",align:w,split:Y,wrap:X=!1}=F,q=Ue(F,["className","children","size","direction","align","split","wrap"]),A=(0,s.q)(g),L=O==="horizontal"&&w===void 0?"center":w,W=(0,m.default)(`${i}-space`,`${i}-space-direction-${O}`,{[`${i}-space-align-${L}`]:L,[`${i}-space-wrap`]:X},N),$=(0,n.useCallback)(z=>{const te=(0,r.kJ)(M)?M:[M,M],[P,S]=te.map(B=>(0,r.HD)(B)?v[B]:B||0);return X?{marginRight:P,marginBottom:S}:O==="vertical"?{marginBottom:S}:{marginRight:z?void 0:P}},[M,O,X]),Q=A.map((z,te)=>{const P=te===A.length-1;return n.createElement(n.Fragment,{key:`space-item-${te.toString()}`},n.createElement("div",{className:"space-item",style:$(P)},z),!P&&Y&&n.createElement("span",{className:"sqi-space-item-split"},Y))});return n.createElement("div",be(K({className:W},q),{ref:f}),Q)});h.displayName="Space";const u=h,d=null},9090:function(x,t,e){"use strict";e.d(t,{r:function(){return c}});var n=e(53360),m=e(7829),r=e(7657),p=e(62222),s=e(60333),a=e(57577);const v={label:[],loading:!1,disabled:!1},I=(0,n.forwardRef)((d,l)=>{const{prefixCls:f,size:i="md",componentConfig:o}=(0,n.useContext)(a.E),z=(0,r.S)(d,v,o==null?void 0:o.Switch),{checked:R,defaultChecked:E,className:N,disabled:g,size:M=i,label:O,loading:w,loadingIcon:Y,onChange:X,onClick:q}=z,A=Ue(z,["checked","defaultChecked","className","disabled","size","label","loading","loadingIcon","onChange","onClick"]),[L,W]=(0,p.R)(!1,{value:R,defaultValue:E});function $(te){if(g||w)return;const P=!L;W(P),X==null||X(P,te),q==null||q(P,te)}const Q=(0,m.default)(`${f}-switch`,{[`${f}-switch-checked`]:L,[`${f}-switch-disabled`]:g,[`${f}-switch-loading`]:w,[`${f}-switch-${M}`]:M},N),F=Y||n.createElement(s.Z,{spin:!0});return n.createElement("button",be(K({},A),{type:"button",role:"switch","aria-checked":L,ref:l,className:Q,disabled:g||w,onClick:$}),n.createElement("div",{className:`${f}-switch-handle`},w&&F),n.createElement("div",{className:`${f}-switch-content`},L?O[0]:O[1]))});I.displayName="Switch";const c=I,u=null},67171:function(x,t,e){"use strict";e.d(t,{Z:function(){return De}});var n=e(53360),m=e(7829),r=e(7657),p=e(62222),s=e(60164),a=e(6890),v=e(8240),I=e(21299);function h(C){return C instanceof HTMLElement||C instanceof SVGElement}function c(C){return C&&typeof C=="object"&&h(C.nativeElement)?C.nativeElement:h(C)?C:null}function u(C){if(C)return C.current&&typeof C.current=="object"&&"currentElement"in C.current?C.current.currentElement:C.current}function d(C){if(!(C&&(0,n.isValidElement)(C)))return null;if(parseInt(n.version,10)>=19){var y;return((y=C.props)==null?void 0:y.ref)||null}return C.ref}var l=e(4814);const f=(0,n.forwardRef)((C,G)=>{const{children:y,disabled:ae,throttleMs:re=100,onResize:de}=C,ce=(0,n.isValidElement)(y),k=ce?(0,I.q)(y):[],Ie=ce?d(y):null,Z=(0,n.useRef)(null),[me,J]=(0,n.useState)(null),U=(0,n.useCallback)(xe=>{Z.current=xe,J(xe)},[]),Re=(0,l.x1)(Ie,U),Me=()=>u(Z);(0,n.useImperativeHandle)(G,()=>me);const oe=de?(0,a.P)(de,re):void 0;return(0,v.y)(Me(),oe,!ae),console.log(u(Z)),ce?(0,n.cloneElement)(y,{ref:Re}):y});f.displayName="ResizeObserverComponent";const i=f;var o=e(27833),R=e(86752),E=e(34028),N=e(80703);const g=(0,E.J)();function M(C){return g?(0,N.HD)(C)?document.querySelector(C):(0,N.mf)(C)?C():C instanceof HTMLElement?C:document.body:null}const O=(0,n.forwardRef)((C,G)=>{const y=(0,o.c)(25),{getContainer:ae,prefixCls:re,children:de,open:ce,rootStyle:k}=C,Ie=ce===void 0?!0:ce,[Z,me]=(0,n.useState)(null),[J,U]=(0,n.useState)(null),Re=J||document.body;let Me,oe;y[0]!==ae?(Me=()=>{const Oe=M(ae);U(Oe||null)},oe=[ae],y[0]=ae,y[1]=Me,y[2]=oe):(Me=y[1],oe=y[2]),(0,n.useEffect)(Me,oe);let xe;y[3]!==Z||y[4]!==re||y[5]!==k?(xe=()=>{if(!g||Z)return null;const Oe=document.createElement("div");re&&(Oe.className=`${re}-portal-wrapper`),k&&Object.assign(Oe.style,k),Oe.setAttribute("data-portal","true"),me(Oe)},y[3]=Z,y[4]=re,y[5]=k,y[6]=xe):xe=y[6];const ne=xe;let ie;y[7]!==ne||y[8]!==Ie?(ie=()=>{g&&(Ie?ne():me(null))},y[7]=ne,y[8]=Ie,y[9]=ie):ie=y[9];let se;y[10]!==Ie?(se=[Ie],y[10]=Ie,y[11]=se):se=y[11],(0,s.L)(ie,se);let we,ye;y[12]!==Z?(we=()=>Z,ye=[Z],y[12]=Z,y[13]=we,y[14]=ye):(we=y[13],ye=y[14]),n.useImperativeHandle(G,we,ye);let Se;y[15]!==Z||y[16]!==Re||y[17]!==Ie?(Se=()=>{if(!g||!Z)return;const Oe=()=>!Z.parentNode&&Re.appendChild(Z),je=()=>{var Ke;return(Ke=Z.parentNode)==null?void 0:Ke.removeChild(Z)};return Ie?Oe():je(),()=>{je()}},y[15]=Z,y[16]=Re,y[17]=Ie,y[18]=Se):Se=y[18];let $e;if(y[19]!==Z||y[20]!==Ie?($e=[Ie,Z],y[19]=Z,y[20]=Ie,y[21]=$e):$e=y[21],(0,s.L)(Se,$e),!(Ie&&de))return null;let We;return y[22]!==de||y[23]!==Z?(We=Z?(0,R.createPortal)(de,Z):null,y[22]=de,y[23]=Z,y[24]=We):We=y[24],We});O.displayName="Portal";const w=O;var Y=e(40549),X=e(57577);const q="Escape",L=C=>{const{trigger:G,delay:y,disabled:ae,visible:re,clickOutsideClose:de,triggerEl:ce,onVisibleChange:k}=C,Ie=(0,n.useRef)(!1),Z=(0,n.useRef)(!1),me=(0,n.useRef)(null),J=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(ae)return;const oe=xe=>{var ne;!(ce==null||(ne=ce.contains)==null)&&ne.call(ce,xe.target)||Ie.current||re&&de&&(k==null||k(!1,{e:xe,trigger:"document"}))};return document.addEventListener("mousedown",oe),document.addEventListener("touchend",oe),()=>{document.removeEventListener("mousedown",oe),document.removeEventListener("touchend",oe)}},[ae,re,ce,de,k]);function U(oe){y?(clearTimeout(me.current),me.current=setTimeout(oe,y)):oe()}function Re(){return ae?{}:{onMouseEnter:oe=>{G==="hover"&&!Z.current&&(clearTimeout(me.current),k==null||k(!0,{e:oe,trigger:"hover"}))},onMouseLeave:oe=>{G==="hover"&&(Z.current=!0,clearTimeout(me.current),k==null||k(!1,{e:oe,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(J.current),Ie.current=!0,J.current=window.setTimeout(()=>{Ie.current=!1})},onTouchEnd:()=>{clearTimeout(J.current),Ie.current=!0,J.current=window.setTimeout(()=>{Ie.current=!1})}}}function Me(oe){return ae?{}:{onMouseDown:ne=>{var ie,se;G==="mousedown"&&U(()=>k==null?void 0:k(!re,{e:ne,trigger:"mousedown"})),(ie=(se=oe.props).onMouseDown)==null||ie.call(se,ne)},onClick:ne=>{var ie,se;G==="click"&&(ne.preventDefault(),ne.stopPropagation(),U(()=>k==null?void 0:k(!re,{e:ne,trigger:"click"}))),(ie=(se=oe.props).onClick)==null||ie.call(se,ne)},onTouchStart:ne=>{var ie,se;(G==="hover"||G==="mousedown")&&(Z.current=!1,U(()=>k==null?void 0:k(!0,{e:ne,trigger:"hover"}))),(ie=(se=oe.props).onTouchStart)==null||ie.call(se,ne)},onMouseEnter:ne=>{var ie,se;G==="hover"&&(Z.current=!1,U(()=>k==null?void 0:k(!0,{e:ne,trigger:"hover"}))),(ie=(se=oe.props).onMouseEnter)==null||ie.call(se,ne)},onMouseLeave:ne=>{var ie,se;G==="hover"&&(Z.current=!1,U(()=>k==null?void 0:k(!1,{e:ne,trigger:"hover"}))),(ie=(se=oe.props).onMouseLeave)==null||ie.call(se,ne)},onFocus:ne=>{var ie,se;G==="focus"&&U(()=>k==null?void 0:k(!0,{e:ne,trigger:"focus"})),(ie=(se=oe.props).onFocus)==null||ie.call(se,ne)},onBlur:ne=>{var ie,se;G==="focus"&&U(()=>k==null?void 0:k(!1,{e:ne,trigger:"blur"})),(ie=(se=oe.props).onBlur)==null||ie.call(se,ne)},onContextMenu:ne=>{var ie,se;G==="context-menu"&&(ne.preventDefault(),U(()=>k==null?void 0:k(!0,{e:ne,trigger:"context-menu"}))),(ie=(se=oe.props).onContextMenu)==null||ie.call(se,ne)},onKeyDown:ne=>{var ie,se;(ne==null?void 0:ne.key)===q&&U(()=>k==null?void 0:k(!1,{e:ne,trigger:"keydown-esc"})),(ie=(se=oe.props).onKeyDown)==null||ie.call(se,ne)}}}return{genPopupProps:Re,genTriggerProps:Me}};function W(C,G,y){const{top:ae,left:re,width:de,height:ce}=C.getBoundingClientRect(),k=ae+y,Ie=re+G;return{width:de,height:ce,top:k,bottom:k+ce,left:Ie,right:Ie+de}}function $(C,G,y){const ae=W(C,G,y),re=C.clientWidth,de=C.clientHeight,ce=ae.left+C.clientLeft,k=ae.top+C.clientTop;return{width:re,height:de,top:k,bottom:k+de,left:ce,right:ce+re}}function Q(C){if(!C||C.tagName==="HTML")return;const G=window.getComputedStyle(C),y=ae=>["auto","scroll"].includes(ae);return C.clientHeight<C.scrollHeight&&y(G.overflowX)||C.clientWidth<C.scrollWidth&&y(G.overflowY)?C:Q(C.parentNode)}function F(C,G){return Math.round(Math.abs(C))>Math.round(Math.abs(G))?C:G}const z=(C,G)=>`translate3d(${C}px, ${G}px, 0)`;function te(C){if(!C)return[0,0];const G=window.getComputedStyle(C),y=G.transform||G.webkitTransform||"none";if(y==="none")return[0,0];if(y.match(/matrix\(([^)]+)\)/)){var ae,re;const k=((re=y.match(/matrix\((.+)\)/))==null||(ae=re[1])==null?void 0:ae.split(",").map(Number))||[0,0];if(k.length===6)return[k[4],k[5]]}const[,de=0,ce=0]=(y.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(k=>Number(k));return[de,ce]}function P(C){const G=C.split("-"),y=G[0],ae=G[1];let re;const de=y==="top"||y==="bottom",ce=y==="left"||y==="right";return de&&(ae==="start"&&(re="left"),ae==="end"&&(re="right")),ce&&(ae==="start"&&(re="top"),ae==="end"&&(re="bottom")),[y,re,de,ce]}function S(C){return C?(0,N.Kn)(C)?[C.x||0,C.y||0]:[C||0,C||0]:[0,0]}const B={direction:"bottom",enableFlip:!0,enableShift:!0};function j(C,G){const{reference:y,popper:ae,arrow:re}=C;if(!y||!ae)return;const de=K(K({},B),G),ce=ae.parentNode,[k,Ie]=te(ce),Z=window.pageYOffset,me=window.pageXOffset,J=W(y,me,Z),U=W(ae,me,Z),Re=J.width-U.width,Me=J.height-U.height;let oe=J.left-U.left+k,xe=J.top-U.top+Ie;const[ne,ie,se,we]=P(de.direction);let ye=ne;const Se=ie==="left"?0:ie==="right"?Re:Re/2,$e=Re-Se,We=ie==="top"?0:ie==="bottom"?Me:Me/2,Oe=Me-We;se&&(oe+=Se,xe+=ne==="top"?-U.height:J.height),we&&(oe+=ne==="left"?-U.width:J.width,xe+=We);let je=Q(y);const[Ke,le]=S(de.offset),{height:he=0,width:Be=0}=re?W(re,me,Z):{};let Le=0,Ze=0;for(;je;){const Pe=$(je,me,Z);Fe(Pe),je=Q(je.parentNode)}const{clientHeight:Ye,clientWidth:Ge}=document.documentElement;Fe({top:Z,bottom:Z+Ye,left:me,right:me+Ge,height:Ye,width:Ge}),oe-=Le,xe-=Ze,Je(),se&&(xe+=ye==="bottom"?le:-le),we&&(oe+=ye==="right"?Ke:-Ke),ce.style.transform=z(oe,xe),ce.setAttribute("data-direction",ye);function Fe(Pe){const{top:fe,bottom:ze,left:Ne,right:Ve,height:ke,width:nn}=Pe;if(se){const Te=Math.round(J.top-fe+J.height/2),Ae=Math.round(ke/2);de.enableFlip&&tn(Te,Ae),de.enableShift&&on()}if(we){const Te=Math.round(J.left-Ne+J.width/2),Ae=Math.round(nn/2);de.enableFlip&&an(Te,Ae),de.enableShift&&rn()}function tn(Te,Ae){const Xe=J.top-(U.height+le+he)<fe,Qe=J.bottom+U.height+le+he>ke+fe;Xe&&Te<=Ae&&ye==="top"?(xe+=U.height+J.height,ye="bottom"):Qe&&Te>=Ae&&ye==="bottom"&&(xe-=U.height+J.height,ye="top")}function on(){if(J.left+Se<Ne){const Te=J.left+Se-Ne,Ae=J.right-Be>Ne?Te:-J.width+Se+Be;Le=F(Ae,Le)}if(J.right-$e>Ve){const Te=J.right-$e-Ve,Ae=J.left+Be<Ve?Te:J.width-$e-Be;Le=F(Ae,Le)}}function an(Te,Ae){const Xe=J.left-(U.width+Ke+Be)<Ne,Qe=J.right+U.width+Ke+Be>Ve;Xe&&Te<Ae&&ye==="left"?(oe+=J.width+U.width,ye="right"):Qe&&Te>Ae&&ye==="right"&&(oe-=J.width+U.width,ye="left")}function rn(){if(J.top+We<fe){const Te=J.top+We-fe,Ae=J.bottom-he>fe?Te:-J.height+We+he;Ze=F(Ae,Ze)}if(J.bottom-Oe>ze){const Te=J.bottom-Oe-ze,Ae=J.top+he<ze?Te:J.height-Oe-he;Ze=F(Ae,Ze)}}}function Je(){if(!re)return;se?xe+=ye==="bottom"?he:-he:we&&(oe+=ye==="right"?Be:-Be);const Pe=de.direction.split("-")[1]||"center",fe={x:0,y:0};if(se){fe.y=ye==="top"?U.height:-he;const ze=Math.abs(J.width-U.width)>Math.abs(Le),Ne=Le===0;Pe==="start"?Ne?fe.x=0:fe.x=Math.min(Math.max(0,Le),U.width-Be):Pe==="center"?Ne?fe.x=(U.width-Be)/2:ze?fe.x=(U.width-Be)/2+Le:fe.x=Math.max(0,Math.min(U.width-Be,(U.width-Be)/2+Le)):Pe==="end"&&(Ne?fe.x=U.width-Be:fe.x=Math.max(0,Math.min(U.width-Be,U.width-Be+Le)))}else if(we){fe.x=ye==="left"?U.width:-Be;const ze=Ze===0,Ne=Math.abs(J.height-U.height)>Math.abs(Ze);Pe==="start"?ze?fe.y=0:fe.y=Math.min(Math.max(0,Ze),U.height-he):Pe==="center"?ze?fe.y=(U.height-he)/2:Ne?fe.y=(U.height-he)/2+Ze:fe.y=Math.max(0,Math.min(U.height-he,(U.height-he)/2+Ze)):Pe==="end"&&(ze?fe.y=U.height-he:fe.y=Math.max(0,Math.min(U.height-he,U.height-he+Ze)))}re.style.transform=z(fe.x,fe.y)}}function H(C){let G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!C)return[];const y=pe(C);if(y===C.ownerDocument.body){const de=window.visualViewport?[window.visualViewport]:[],ce=V(y)?[y]:[];return[...G,window,...de,...ce]}const re=H(ge(y));return[...G,y,...re]}function ge(C){return D(C)==="html"?C:C.parentNode}function V(C){const{overflow:G,overflowX:y,overflowY:ae,display:re}=getComputedStyle(C);return/auto|scroll|overlay|hidden|clip/.test(G+ae+y)&&!["contents"].includes(re)}const ue=new Set(["html","body","#document"]);function pe(C){return ue.has(D(C))?C.ownerDocument.body:V(C)?C:pe(ge(C))}function D(C){return C?(C.nodeName||"").toLowerCase():null}function T(C){let G;return()=>(G||(G=new Promise(y=>{Promise.resolve().then(()=>{G=void 0,y(C())})})),G)}const _={direction:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:0,trigger:"hover",delay:100,clickOutsideClose:!0,disabled:!1},b={unmountOnExit:!0},ve={position:"absolute",top:0,left:0,bottom:"auto",right:"auto",margin:0,willChange:"transform"},Ee=K({},ve),ee=K({},ve),Ce=(0,n.forwardRef)((C,G)=>{const{prefixCls:y,componentConfig:ae}=(0,n.useContext)(X.E),{children:re,popper:de,enableShift:ce,motion:k={},enableFlip:Ie,offset:Z,direction:me,getContainer:J,zIndex:U,trigger:Re,delay:Me,disabled:oe,visible:xe,arrow:ne,clickOutsideClose:ie,onVisibleChange:se}=(0,r.S)(C,_,ae==null?void 0:ae.Trigger),we=(0,r.S)(b,k),ye=(0,n.isValidElement)(re),Se=(0,n.useRef)(null),$e=(0,n.useRef)(null),We=d(de),Oe=(0,n.useRef)(null),je=(0,l.x1)(We,Oe),Ke=(0,n.useRef)(null),[le,he]=(0,p.R)(xe,{onChange:se}),{genPopupProps:Be,genTriggerProps:Le}=L({clickOutsideClose:ie,delay:Me,disabled:oe,visible:le,onVisibleChange:he,trigger:Re,triggerEl:Se.current});(0,n.useImperativeHandle)(G,()=>{});const Ze=(0,l.t4)(re),Ye=(0,l.t4)(de),Ge=(0,n.useCallback)(Pe=>{var fe;Pe&&Pe.type!=="resize"&&!((fe=Pe.target)!=null&&fe.contains(Se.current))||setTimeout(()=>{j({reference:Se.current,popper:Oe.current,arrow:$e.current},{direction:me,enableFlip:Ie,enableShift:ce,offset:Z})})},[me,Ie,ce,Z]),Fe=T(()=>new Promise(Pe=>{Ge(),Pe(void 0)}));if((0,s.L)(()=>{if(le!==void 0){if(Fe(),le===!0){var Pe;(Pe=Ke.current)==null||Pe.toggle(!0)}else if(le===!1){var fe;(fe=Ke.current)==null||fe.toggle(!1)}}},[le]),(0,s.L)(()=>{Fe();const Pe=H(Se.current),fe=H(Oe.current),ze=[...Pe,...fe];return ze.forEach(Ne=>{Ne.addEventListener("scroll",Fe,{passive:!0})}),window.addEventListener("resize",Fe,{passive:!0}),()=>{ze.forEach(Ne=>{Ne.removeEventListener("scroll",Fe)}),window.removeEventListener("resize",Fe)}},[me,Ie,ce,Z,Oe.current,$e.current]),!ye)return;const Je=()=>de?n.createElement(Y.Z,K({ref:Ke},we),Pe=>{let{className:fe}=Pe;return n.createElement(w,{getContainer:J},n.createElement("div",be(K({},Be()),{className:(0,m.default)(`${y}-trigger`,fe),style:be(K({},Ee),{zIndex:U})}),ne?n.createElement("div",{className:`${y}-trigger-arrow`},(0,n.cloneElement)(ne,{ref:$e,style:K(be(K({},ee),{zIndex:U}),ne.props.style||{})})):null,(0,n.cloneElement)(de,{ref:je})))}):null;return n.createElement(n.Fragment,null,n.createElement(i,{ref:Se,onResize:()=>Fe()},(0,n.cloneElement)(re,K({},Le(re)))),Je())});Ce.displayName="Trigger";const De=Ce},36112:function(x,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return a},default:function(){return v}});var n=e(67171),m=e(98479),r=e.n(m),p={};for(var s in m)["default","Trigger"].indexOf(s)<0&&(p[s]=function(I){return m[I]}.bind(0,s));e.d(t,p);const a=n.Z,v=a},98479:function(){},84176:function(x,t,e){var n=e(75863);function m(r,p){if(r==null)return{};var s=n(r,p),a,v;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(r);for(v=0;v<I.length;v++)a=I[v],!(p.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(s[a]=r[a])}return s}x.exports=m,x.exports.__esModule=!0,x.exports.default=x.exports},75863:function(x){function t(e,n){if(e==null)return{};var m={},r=Object.keys(e),p,s;for(s=0;s<r.length;s++)p=r[s],!(n.indexOf(p)>=0)&&(m[p]=e[p]);return m}x.exports=t,x.exports.__esModule=!0,x.exports.default=x.exports},7829:function(x,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return m}});function n(r){var p,s,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var v=r.length;for(p=0;p<v;p++)r[p]&&(s=n(r[p]))&&(a&&(a+=" "),a+=s)}else for(s in r)r[s]&&(a&&(a+=" "),a+=s);return a}function m(){for(var r,p,s=0,a="",v=arguments.length;s<v;s++)(r=arguments[s])&&(p=n(r))&&(a&&(a+=" "),a+=p);return a}t.default=m},64508:function(x,t,e){"use strict";e.d(t,{Y:function(){return p}});var n=e(53360),m=e(75601);const r=(s,a,v,I,h)=>{clearTimeout(I.current);const c=(0,m.y0)(s);a(c),v.current=c,h&&h({current:c})},p=({enter:s=!0,exit:a=!0,preEnter:v,preExit:I,timeout:h,initialEntered:c,mountOnEnter:u,unmountOnExit:d,onStateChange:l}={})=>{const[f,i]=(0,n.useState)(()=>(0,m.y0)(c?m.cn:(0,m.Ef)(u))),o=(0,n.useRef)(f),R=(0,n.useRef)(),[E,N]=(0,m.fj)(h),g=(0,n.useCallback)(()=>{const O=(0,m.XZ)(o.current._s,d);O&&r(O,i,o,R,l)},[l,d]),M=(0,n.useCallback)(O=>{const w=X=>{switch(r(X,i,o,R,l),X){case m.d0:E>=0&&(R.current=setTimeout(g,E));break;case m.Ix:N>=0&&(R.current=setTimeout(g,N));break;case m.iL:case m.iU:R.current=(0,m.Y3)(w,X);break}},Y=o.current.isEnter;typeof O!="boolean"&&(O=!Y),O?!Y&&w(s?v?m.iL:m.d0:m.cn):Y&&w(a?I?m.iU:m.Ix:(0,m.Ef)(d))},[g,l,s,a,v,I,E,N,d]);return[f,M,g]}},75601:function(x,t,e){"use strict";e.d(t,{Ef:function(){return c},Ix:function(){return s},XZ:function(){return u},Y3:function(){return l},cn:function(){return r},d0:function(){return m},fj:function(){return d},iL:function(){return n},iU:function(){return p},y0:function(){return h}});const n=0,m=1,r=2,p=3,s=4,a=5,v=6,I=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=f=>({_s:f,status:I[f],isEnter:f<p,isMounted:f!==v,isResolved:f===r||f>s}),c=f=>f?v:a,u=(f,i)=>{switch(f){case m:case n:return r;case s:case p:return c(i)}},d=f=>typeof f=="object"?[f.enter,f.exit]:[f,f],l=(f,i)=>setTimeout(()=>{isNaN(document.body.offsetTop)||f(i+1)},0)}}]);
}());