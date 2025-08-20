!(function(){var ln=Object.defineProperty,un=Object.defineProperties;var dn=Object.getOwnPropertyDescriptors;var Je=Object.getOwnPropertySymbols;var tn=Object.prototype.hasOwnProperty,on=Object.prototype.propertyIsEnumerable;var nn=(x,t,e)=>t in x?ln(x,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[t]=e,j=(x,t)=>{for(var e in t||(t={}))tn.call(t,e)&&nn(x,e,t[e]);if(Je)for(var e of Je(t))on.call(t,e)&&nn(x,e,t[e]);return x},Pe=(x,t)=>un(x,dn(t));var Ze=(x,t)=>{var e={};for(var n in x)tn.call(x,n)&&t.indexOf(n)<0&&(e[n]=x[n]);if(x!=null&&Je)for(var n of Je(x))t.indexOf(n)<0&&on.call(x,n)&&(e[n]=x[n]);return e};(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[390],{24056:function(x,t,e){"use strict";e.r(t),e.d(t,{demos:function(){return xe}});var n={};e.r(n),e.d(n,{useCompareMemo:function(){return i.D},useIsomorphicLayoutEffect:function(){return r.L},useMergeProps:function(){return a.S},useMergeState:function(){return P.R},usePrevious:function(){return y.D},useResizeObserver:function(){return O.y}});var m={};e.r(m),e.d(m,{canUseDom:function(){return g.J},debounce:function(){return b.D},isArray:function(){return M.kJ},isEmptyObject:function(){return M.Qr},isFunction:function(){return M.mf},isNumber:function(){return M.hj},isObject:function(){return M.Kn},isString:function(){return M.HD},isUndefined:function(){return M.o8},omit:function(){return T.C},pick:function(){return Z},throttle:function(){return J.P}});var s={};e.r(s),e.d(s,{default:function(){return W.Y},useTransition:function(){return W.Y},useTransitionMap:function(){return F},useTransitionState:function(){return W.Y}});var f=e(90819),l=e.n(f),o=e(89933),v=e.n(o),I=e(53360),h=e.t(I,2),c=e(45990),p=e(4177),d=e(86752),u=e.t(d,2),i=e(37797),r=e(60164),a=e(7657),P=e(62222),y=e(45844),O=e(8240),g=e(34028),b=e(78831),M=e(80703),T=e(12598);function Z(G,ae){const ce={};return ae.forEach(B=>{B in G&&(ce[B]=G[B])}),ce}var J=e(6890),k=e(22532),w=e(75257),L=e(7829),W=e(64508),A=e(75601);const V=(G,ae,ce,B,$,q)=>{clearTimeout($);const D=(0,A.y0)(ae),fe=new Map(B.current);fe.set(G,D),ce(fe),B.current=fe,q&&q({key:G,current:D})},F=({allowMultiple:G,enter:ae=!0,exit:ce=!0,preEnter:B,preExit:$,timeout:q,initialEntered:D,mountOnEnter:fe,unmountOnExit:Ce,onStateChange:_}={})=>{const[ge,Re]=(0,I.useState)(new Map),C=(0,I.useRef)(ge),Y=(0,I.useRef)(new Map),[E,te]=(0,A.fj)(q),ie=(0,I.useCallback)((U,ue)=>{const{initialEntered:X=D}=ue||{},ne=X?A.cn:(0,A.Ef)(fe);V(U,ne,Re,C),Y.current.set(U,{})},[D,fe]),re=(0,I.useCallback)(U=>{const ue=new Map(C.current);return ue.delete(U)?(Re(ue),C.current=ue,Y.current.delete(U),!0):!1},[]),le=(0,I.useCallback)(U=>{const ue=C.current.get(U);if(!ue)return;const{timeoutId:X}=Y.current.get(U),ne=(0,A.XZ)(ue._s,Ce);ne&&V(U,ne,Re,C,X,_)},[_,Ce]),ve=(0,I.useCallback)((U,ue)=>{const X=C.current.get(U);if(!X)return;const ne=Y.current.get(U),Ie=ye=>{switch(V(U,ye,Re,C,ne.timeoutId,_),ye){case A.d0:E>=0&&(ne.timeoutId=setTimeout(()=>le(U),E));break;case A.Ix:te>=0&&(ne.timeoutId=setTimeout(()=>le(U),te));break;case A.iL:case A.iU:ne.timeoutId=(0,A.Y3)(Ie,ye);break}},De=X.isEnter;typeof ue!="boolean"&&(ue=!De),ue?De||(Ie(ae?B?A.iL:A.d0:A.cn),!G&&C.current.forEach((ye,se)=>se!==U&&ve(se,!1))):De&&Ie(ce?$?A.iU:A.Ix:(0,A.Ef)(Ce))},[_,le,G,ae,ce,B,$,E,te,Ce]),ee=(0,I.useCallback)(U=>{if(!(!G&&U!==!1))for(const ue of C.current.keys())ve(ue,U)},[G,ve]);return{stateMap:ge,toggle:ve,toggleAll:ee,endTransition:le,setItem:ie,deleteItem:re}};var z=e(53175),Q=e(67324),R=e(71932),S=e(31716),N=e(95154),H=e(81184),K=e.t(H,2),xe={"sqi-web-src-common-demo-portal":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,70902))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7316).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(49821).Z},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"../Portal.tsx":p,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":p,"react-dom":u,"@sqi-ui/hooks":n,"@sqi-ui/utils":m},renderOpts:{compile:function(){var G=v()(l()().mark(function ce(){var B,$=arguments;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,e.e(788).then(e.bind(e,28788));case 2:return D.abrupt("return",(B=D.sent).default.apply(B,$));case 3:case"end":return D.stop()}},ce)}));function ae(){return G.apply(this,arguments)}return ae}()}},"sqi-web-src-common-demo-css-motion-base":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,14097))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91738).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(79379).Z},"../CSSMotion.tsx":{type:"FILE",value:e(58500).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(61569).Z}},entry:"index.tsx"},context:{"./motion.css":k,"../CSSMotion.tsx":w,"../config-provider/context.ts":z,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":w,clsx:L,"react-transition-state":s,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":z},renderOpts:{compile:function(){var G=v()(l()().mark(function ce(){var B,$=arguments;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,e.e(788).then(e.bind(e,28788));case 2:return D.abrupt("return",(B=D.sent).default.apply(B,$));case 3:case"end":return D.stop()}},ce)}));function ae(){return G.apply(this,arguments)}return ae}()}},"sqi-web-src-common-demo-css-motion-toggle":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,61086))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-toggle",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(12984).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../CSSMotion.tsx":{type:"FILE",value:e(58500).Z},"./motion.css":{type:"FILE",value:e(79379).Z},clsx:{type:"NPM",value:"2.1.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(61569).Z}},entry:"index.tsx"},context:{"../CSSMotion.tsx":w,"./motion.css":k,"../config-provider/context.ts":z,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":w,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,clsx:L,"react-transition-state":s,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":z},renderOpts:{compile:function(){var G=v()(l()().mark(function ce(){var B,$=arguments;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,e.e(788).then(e.bind(e,28788));case 2:return D.abrupt("return",(B=D.sent).default.apply(B,$));case 3:case"end":return D.stop()}},ce)}));function ae(){return G.apply(this,arguments)}return ae}()}},"sqi-web-src-common-demo-css-motion-portal":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,86328))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-css-motion-portal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69563).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../Portal.tsx":{type:"FILE",value:e(49821).Z},"../CSSMotion.tsx":{type:"FILE",value:e(58500).Z},"./motion.css":{type:"FILE",value:e(79379).Z},clsx:{type:"NPM",value:"2.1.1"},"react-dom":{type:"NPM",value:"19.1.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"react-transition-state":{type:"NPM",value:"2.3.1"},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"../config-provider/context.ts":{type:"FILE",value:e(61569).Z}},entry:"index.tsx"},context:{"../Portal.tsx":p,"../CSSMotion.tsx":w,"./motion.css":k,"../config-provider/context.ts":z,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/Portal.tsx":p,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/CSSMotion.tsx":w,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/demos/motion.css":k,clsx:L,"react-dom":u,"@sqi-ui/hooks":n,"react-transition-state":s,"@sqi-ui/utils":m,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/config-provider/context.ts":z},renderOpts:{compile:function(){var G=v()(l()().mark(function ce(){var B,$=arguments;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,e.e(788).then(e.bind(e,28788));case 2:return D.abrupt("return",(B=D.sent).default.apply(B,$));case 3:case"end":return D.stop()}},ce)}));function ae(){return G.apply(this,arguments)}return ae}()}},"sqi-web-src-common-demo-resize-observer":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,86543))})),asset:{type:"BLOCK",id:"sqi-web-src-common-demo-resize-observer",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(81472).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"../ResizeObserver.tsx":{type:"FILE",value:e(93201).Z},"@sqi-ui/utils":{type:"NPM",value:"0.0.1"},"@sqi-ui/hooks":{type:"NPM",value:"0.0.1"},"../_util/ref.ts":{type:"FILE",value:e(39270).Z},"../_util/toArray.ts":{type:"FILE",value:e(89543).Z},"../_util/dom.ts":{type:"FILE",value:e(21780).Z},"react-is":{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{"../ResizeObserver.tsx":Q,"../_util/ref.ts":R,"../_util/toArray.ts":S,"../_util/dom.ts":N,react:h,"@sqi-ui/web":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_common/ResizeObserver.tsx":Q,"@sqi-ui/utils":m,"@sqi-ui/hooks":n,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/ref.ts":R,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/toArray.ts":S,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/_util/dom.ts":N,"react-is":K},renderOpts:{compile:function(){var G=v()(l()().mark(function ce(){var B,$=arguments;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,e.e(788).then(e.bind(e,28788));case 2:return D.abrupt("return",(B=D.sent).default.apply(B,$));case 3:case"end":return D.stop()}},ce)}));function ae(){return G.apply(this,arguments)}return ae}()}}}},71411:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I={"sqi-web-src-alert-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18041))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(580).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-alert-demo-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,4865))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(97653).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-alert-demo-action":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,64045))})),asset:{type:"BLOCK",id:"sqi-web-src-alert-demo-action",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25934).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}}}},37952:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-button-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,31477))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51053).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,49078))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(67925).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-loading":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89343))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-loading",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77895).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83964))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27598).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-button-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,94563))})),asset:{type:"BLOCK",id:"sqi-web-src-button-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(92163).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}}}},76575:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I=e(84912),h={"sqi-web-src-checkbox-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,52020))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7854).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-control":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,27118))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-control",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(48118).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-group":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,71012))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-group",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(51122).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-indeterminate":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,10981))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-indeterminate",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8030).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,33721))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27482).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(21020).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-checkbox-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,71758))})),asset:{type:"BLOCK",id:"sqi-web-src-checkbox-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(27234).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(21020).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/checkbox/demos/_card-block.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}}}},97838:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I={"sqi-web-src-config-provider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,74466))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89081).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-config-provider-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,87573))})),asset:{type:"BLOCK",id:"sqi-web-src-config-provider-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(71015).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}}}},95520:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I={"sqi-web-src-divider-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83223))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23215).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-divider-demo-with-text":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,850))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-with-text",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20179).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-divider-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,92440))})),asset:{type:"BLOCK",id:"sqi-web-src-divider-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66320).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}}}},20939:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I=e(66351),h={"sqi-web-src-grid-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,35984))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(41599).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-gap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83896))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-gap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31142).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-flex":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,4239))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-flex",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32960).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-justify":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,80481))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-justify",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(55735).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,75583))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(50614).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-offset":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90698))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-offset",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(313).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-order":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,98562))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-order",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60004).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-grid-demo-responsive":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,28939))})),asset:{type:"BLOCK",id:"sqi-web-src-grid-demo-responsive",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1728).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./box-demo.tsx":{type:"FILE",value:e(34194).Z}},entry:"index.tsx"},context:{"./box-demo.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/grid/demos/box-demo.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}}}},12289:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(5629),I=e(45990),h={"sqi-web-src-icon-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,43995))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(25509).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":v,"@sqi-ui/web":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-icon-demo-color":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,8638))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-color",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(3601).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":v,"@sqi-ui/web":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-icon-demo-custom":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,91280))})),asset:{type:"BLOCK",id:"sqi-web-src-icon-demo-custom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56993).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/icons":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}}}},17980:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-input-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,65928))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39151).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95728))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56463).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-variant":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,58133))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-variant",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(75770).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11240))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88661).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,90563))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7378).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-tips":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,11918))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-tips",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89161).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-addon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,40021))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-addon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96567).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-affix":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,83083))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-affix",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93528).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-password":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1798))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-password",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(33327).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-input-demo-max-length":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,95207))})),asset:{type:"BLOCK",id:"sqi-web-src-input-demo-max-length",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88846).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}}}},81395:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I={"sqi-web-src-popup-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,66e3))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20746).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-popup-demo-trigger-type":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,85796))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-trigger-type",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39976).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-popup-demo-direction":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,82243))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-direction",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76406).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-popup-demo-shift":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,29630))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-shift",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37417).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-popup-demo-nest":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26451))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-nest",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(56409).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-popup-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,21115))})),asset:{type:"BLOCK",id:"sqi-web-src-popup-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8236).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}}}},87:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I=e(74944),h={"sqi-web-src-radio-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,81956))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(47365).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-appearance":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73495))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-appearance",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29083).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-disabled":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,1429))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-disabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59251).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,73973))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13176).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,89817))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66149).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-custom-render":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,55371))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-custom-render",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(13906).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(59230).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-radio-demo-options":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,30442))})),asset:{type:"BLOCK",id:"sqi-web-src-radio-demo-options",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59129).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_card-block.tsx":{type:"FILE",value:e(59230).Z}},entry:"index.tsx"},context:{"./_card-block.tsx":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/radio/demos/_card-block.tsx":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}}}},94223:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return I}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I={"sqi-web-src-space-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,13707))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(84432).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-space-demo-direction-vertical":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,61213))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-direction-vertical",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(80345).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-space-demo-align":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,47010))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-align",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76174).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-space-demo-wrap":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,6875))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-wrap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(74309).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}},"sqi-web-src-space-demo-split":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,10120))})),asset:{type:"BLOCK",id:"sqi-web-src-space-demo-split",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38648).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var h=l()(s()().mark(function p(){var d,u=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(788).then(e.bind(e,28788));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,u));case 3:case"end":return r.stop()}},p)}));function c(){return h.apply(this,arguments)}return c}()}}}},10205:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return h}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I=e(5629),h={"sqi-web-src-switch-demo-base":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,705))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-base",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(83650).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-switch-demo-status":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,18867))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-status",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(43883).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-switch-demo-size":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,78441))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-size",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(20254).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}},"sqi-web-src-switch-demo-custom-icon":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,42812))})),asset:{type:"BLOCK",id:"sqi-web-src-switch-demo-custom-icon",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89251).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"@sqi-ui/icons":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"@sqi-ui/icons":I},renderOpts:{compile:function(){var c=l()(s()().mark(function d(){var u,i=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(788).then(e.bind(e,28788));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,i));case 3:case"end":return a.stop()}},d)}));function p(){return c.apply(this,arguments)}return p}()}}}},80957:function(x,t,e){"use strict";var n;e.r(t),e.d(t,{demos:function(){return p}});var m=e(90819),s=e.n(m),f=e(89933),l=e.n(f),o=e(53360),v=e(45990),I=e(43261),h=e(45513),c=e(52342),p={"sqi-web-src-trigger-demo-popper":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,14552))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-popper",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(45423).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./demo.module.css":{type:"FILE",value:e(37757).Z},"./_wrapper.tsx":{type:"FILE",value:e(30596).Z}},entry:"index.tsx"},context:{"./demo.module.css":I,"./_wrapper.tsx":h,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":I,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h},renderOpts:{compile:function(){var d=l()(s()().mark(function i(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(788).then(e.bind(e,28788));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},i)}));function u(){return d.apply(this,arguments)}return u}()}},"sqi-web-src-trigger-demo-basic-trigger":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,50069))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-basic-trigger",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64872).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./motion.css":{type:"FILE",value:e(96809).Z},"./_wrapper.tsx":{type:"FILE",value:e(30596).Z},"./demo.module.css":{type:"FILE",value:e(37757).Z}},entry:"index.tsx"},context:{"./motion.css":c,"./_wrapper.tsx":h,"./demo.module.css":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/motion.css":c,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":I},renderOpts:{compile:function(){var d=l()(s()().mark(function i(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(788).then(e.bind(e,28788));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},i)}));function u(){return d.apply(this,arguments)}return u}()}},"sqi-web-src-trigger-demo-focus-outside-click":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,26906))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-focus-outside-click",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(42146).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(30596).Z},"./demo.module.css":{type:"FILE",value:e(37757).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":I},renderOpts:{compile:function(){var d=l()(s()().mark(function i(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(788).then(e.bind(e,28788));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},i)}));function u(){return d.apply(this,arguments)}return u}()}},"sqi-web-src-trigger-demo-destroy-exit":{component:o.memo(o.lazy(function(){return e.e(433).then(e.bind(e,97785))})),asset:{type:"BLOCK",id:"sqi-web-src-trigger-demo-destroy-exit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76977).Z},react:{type:"NPM",value:"19.1.1"},"@sqi-ui/web":{type:"NPM",value:"0.0.1"},"./_wrapper.tsx":{type:"FILE",value:e(30596).Z},"./demo.module.css":{type:"FILE",value:e(37757).Z}},entry:"index.tsx"},context:{"./_wrapper.tsx":h,"./demo.module.css":I,react:n||(n=e.t(o,2)),"@sqi-ui/web":v,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/_wrapper.tsx":h,"/home/runner/work/sqi-ui/sqi-ui/packages/sqi-web/src/trigger/demos/demo.module.css":I},renderOpts:{compile:function(){var d=l()(s()().mark(function i(){var r,a=arguments;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,e.e(788).then(e.bind(e,28788));case 2:return y.abrupt("return",(r=y.sent).default.apply(r,a));case 3:case"end":return y.stop()}},i)}));function u(){return d.apply(this,arguments)}return u}()}}}},75257:function(x,t,e){"use strict";e.r(t);var n=e(73193),m=e.n(n),s=e(10154),f=e.n(s),l=e(45332),o=e.n(l),v=e(84176),I=e.n(v),h=e(53360),c=e(7829),p=e(64508),d=e(80703),u=e(53175),i=["children","name","prefixCls"],r=(0,h.forwardRef)(function(a,P){var y=(0,h.useContext)(u.ConfigContext),O=a.children,g=a.name,b=a.prefixCls,M=I()(a,i),T=(0,p.Y)(M),Z=o()(T,2),J=Z[0],k=Z[1],w=(0,h.isValidElement)(O);(0,h.useImperativeHandle)(P,function(){return{toggle:k}});var L="".concat(b||y.prefixCls).concat(g?"-".concat(g):""),W=(0,c.default)(["".concat(L,"-motion")],f()({},"".concat(L,"-motion-").concat(J.status),J.status));return(0,d.mf)(O)?J.isMounted?O(m()(m()({},J),{},{className:W,toggle:k})):null:w?J.isMounted?(0,h.cloneElement)(O,{className:(0,c.default)(O.props.className,W)}):null:O});r.displayName="CSSMotion",t.default=r},4177:function(x,t,e){"use strict";e.r(t);var n=e(45332),m=e.n(n),s=e(53360),f=e(86752),l=e(60164),o=e(34028),v=e(80703),I=(0,o.J)();function h(p){return I?(0,v.mf)(p)?p():document.body:null}var c=(0,s.forwardRef)(function(p,d){var u=p.getContainer,i=p.prefixCls,r=p.children,a=p.open,P=a===void 0?!0:a,y=p.rootStyle,O=(0,s.useState)(null),g=m()(O,2),b=g[0],M=g[1],T=(0,s.useState)(null),Z=m()(T,2),J=Z[0],k=Z[1],w=J||document.body;(0,s.useEffect)(function(){var W=h(u);k(W||null)},[u]);var L=function(){if(!I||b)return null;var A=document.createElement("div");i&&(A.className="".concat(i,"-portal-wrapper")),y&&Object.assign(A.style,y),A.setAttribute("data-portal","true"),M(A)};return(0,l.L)(function(){I&&(P?L():M(null))},[P]),s.useImperativeHandle(d,function(){return b},[b]),(0,l.L)(function(){if(!(!I||!b)){var W=function(){return!b.parentNode&&w.appendChild(b)},A=function(){var F;return(F=b.parentNode)===null||F===void 0?void 0:F.removeChild(b)};return P?W():A(),function(){A()}}},[P,b]),P&&r&&b?(0,f.createPortal)(r,b):null});c.displayName="Portal",t.default=c},67324:function(x,t,e){"use strict";e.r(t);var n=e(53360),m=e(6890),s=e(8240),f=e(31716),l=e(95154),o=e(71932),v=(0,n.forwardRef)(function(I,h){var c=I.children,p=I.disabled,d=I.throttleMs,u=d===void 0?100:d,i=I.onResize,r=(0,n.isValidElement)(c),a=r?(0,f.toArray)(c):[],P=r?(0,l.getReactNodeRef)(c):null,y=(0,n.useRef)(null),O=(0,o.useComposeRef)(P,y),g=function(){return(0,l.getRefDom)(y)};(0,n.useImperativeHandle)(h,function(){return(0,l.getRefDom)(y)});var b=i?(0,m.P)(i,u):void 0;return(0,s.y)(g(),b,!p),r?(0,n.cloneElement)(c,{ref:O}):c});v.displayName="ResizeObserverComponent",t.default=v},95154:function(x,t,e){"use strict";e.r(t),e.d(t,{getDOM:function(){return l},getReactNodeRef:function(){return v},getRefDom:function(){return o},isDOM:function(){return f}});var n=e(89957),m=e.n(n),s=e(53360);function f(I){return I instanceof HTMLElement||I instanceof SVGElement}function l(I){return I&&m()(I)==="object"&&f(I.nativeElement)?I.nativeElement:f(I)?I:null}function o(I){if(I)return I.current&&m()(I.current)==="object"&&"currentElement"in I.current?I.current.currentElement:I.current}function v(I){var h=I&&(0,s.isValidElement)(I);if(!h)return null;if(parseInt(s.version,10)>=19){var c;return((c=I.props)===null||c===void 0?void 0:c.ref)||null}return I.ref}},71932:function(x,t,e){"use strict";e.r(t),e.d(t,{composeRef:function(){return l},fillRef:function(){return o},supportNodeRef:function(){return c},supportRef:function(){return I},useComposeRef:function(){return v}});var n=e(37797),m=e(80703),s=e(53360),f=e(11607),l=function(){for(var d=arguments.length,u=new Array(d),i=0;i<d;i++)u[i]=arguments[i];var r=u.filter(Boolean);return r.length<=1?r[0]:function(a){u.forEach(function(P){o(P,a)})}},o=function(d,u){(0,m.mf)(d)?d(u):(0,m.Kn)(d)&&"current"in d&&(d.current=u)},v=function(){for(var d=arguments.length,u=new Array(d),i=0;i<d;i++)u[i]=arguments[i];return(0,n.D)(function(){return l.apply(void 0,u)},u,function(r,a){return r.length!==a.length||r.every(function(P,y){return P!==a[y]})})},I=function(d){var u,i;if(!d)return!1;var r=parseInt(s.version,10);if(h(d)&&r>=19)return!0;var a=(0,f.isMemo)(d)?d.type.type:d.type;return!(typeof a=="function"&&!((u=a.prototype)!==null&&u!==void 0&&u.render)&&a.$$typeof!==f.ForwardRef||typeof d=="function"&&!((i=d.prototype)!==null&&i!==void 0&&i.render)&&d.$$typeof!==f.ForwardRef)};function h(p){return(0,s.isValidElement)(p)&&!(0,f.isFragment)(p)}var c=function(d){return h(d)&&I(d)}},31716:function(x,t,e){"use strict";e.r(t),e.d(t,{toArray:function(){return s}});var n=e(53360),m=e(11607);function s(f){var l=[];return n.Children.toArray(f).forEach(function(o){o!=null&&(Array.isArray(o)?l=l.concat(s(o)):(0,n.isValidElement)(o)&&(0,m.isFragment)(o)&&o.props?l=l.concat(s(o.props.children)):l.push(o))}),l}},84912:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),m=e(69787);function s(f){var l=f.item,o=f.checked,v={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},I={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,m.jsxs)("div",{style:v,children:[(0,m.jsx)("div",{style:I}),(0,m.jsx)("strong",{children:l}),(0,m.jsx)("div",{children:"this is a checkbox"})]})}},53175:function(x,t,e){"use strict";e.r(t),e.d(t,{ConfigContext:function(){return s},defaultConfigProps:function(){return m}});var n=e(53360),m={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(m)},66351:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),m=e(69787);function s(f){var l=f.colorPalette,o=l===void 0?6:l,v=f.children,I=f.height;return(0,m.jsx)("div",{style:{height:I||"auto",padding:12,backgroundColor:"var(--sqi-brand-color-".concat(o,")"),color:"var(--sqi-text-color-anti)",textAlign:"center",boxSizing:"border-box"},children:v})}},74944:function(x,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var n=e(53360),m=e(69787);function s(f){var l=f.item,o=f.checked,v={padding:"10px 16px",borderRadius:"4px",width:"200px",boxSizing:"border-box",border:"1px solid ".concat(o?"var(--sqi-brand-color)":"var(--sqi-component-border)"),color:o?"var(--sqi-brand-color)":"",backgroundColor:o?"var(--sqi-brand-color-1)":"",position:"relative",overflow:"hidden",transition:"all 0.3s"},I={position:"absolute",top:0,left:0,width:0,height:0,borderStyle:"solid",borderWidth:"20px 20px 0 0",borderColor:"var(--sqi-brand-color) transparent transparent transparent",opacity:o?1:0,transition:"all 0.3s"};return(0,m.jsxs)("div",{style:v,children:[(0,m.jsx)("div",{style:I}),(0,m.jsx)("strong",{children:l}),(0,m.jsx)("div",{children:"this is a radio"})]})}},45513:function(x,t,e){"use strict";e.r(t),e.d(t,{Component:function(){return f}});var n=e(53360),m=e(43261),s=e(69787),f=(0,n.forwardRef)(function(l,o){var v=l.size,I=l.backgroundColor,h=l.children;return(0,s.jsx)("div",{ref:o,className:m.default.box,style:{width:v+"px",height:v+"px",backgroundColor:I},children:h})});f.displayName="Component"},22532:function(x,t,e){"use strict";e.r(t)},43261:function(x,t,e){"use strict";e.r(t),t.default={container:"Q9mgb0HMUVYRCvHYmQWY","container-scroll":"nw3TlfRWJOA1fZppxiJ4",box:"w7rPyWaLkI1JWGNsI1Ai"}},52342:function(x,t,e){"use strict";e.r(t)},83141:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u7840\u7EC4\u4EF6\u4EC5\u4F9B\u5185\u90E8\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4E0D\u5BF9\u5916\u63D0\u4F9B\u4EFB\u4F55\u53EF\u6269\u5C55\u6027\u529F\u80FD",paraId:0,tocIndex:0},{value:"CSSMotion",paraId:1,tocIndex:3},{value:" \u7EC4\u4EF6\u57FA\u4E8E ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u8FDB\u884C\u7B80\u6613\u4E8C\u6B21\u5C01\u88C5\uFF0C\u652F\u6301\u6240\u6709\u5176 API \u53C2\u6570\uFF0C\u66F4\u591A API \u53EF\u67E5\u9605 ",paraId:1,tocIndex:3},{value:"react-transition-state",paraId:1,tocIndex:3},{value:" \u6587\u6863",paraId:1,tocIndex:3},{value:"CSSMotion",paraId:2,tocIndex:3},{value:" \u652F\u6301\u76F4\u63A5\u4F20\u5165 children \u548C \u56DE\u8C03 children \u4E24\u79CD\u65B9\u5F0F\uFF0C\u5F53\u76F4\u63A5\u4F20\u5165 children \u65F6\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u6807\u51C6\u7684 HTMLElement\uFF0C\u56E0\u4E3A\u52A8\u753B\u6548\u679C\u4F1A\u4F5C\u4E3A css \u7ED1\u5B9A\u5230\u8BE5\u8282\u70B9\uFF0C\u975E HTMLElement \u8282\u70B9\u5C06\u65E0\u6CD5\u6B63\u786E\u7ED1\u5B9A\u52A8\u753B\u6548\u679C",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u5373\u663E\u793A\uFF0C\u9690\u85CF/\u9500\u6BC1\u65F6\u4F1A\u5B58\u5728\u52A8\u753B\u8FC7\u7A0B",paraId:3,tocIndex:4},{value:"\u5F53\u8BBE\u7F6E ",paraId:4},{value:"unmountOnExit",paraId:4},{value:" \u4E3A ",paraId:4},{value:"false",paraId:4},{value:" \u65F6\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 css \u9690\u85CF\u7EC4\u4EF6",paraId:4}]},72133:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"title",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u6807\u9898",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"description",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u5185\u5BB9",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"type",paraId:0,tocIndex:4},{value:"\u63D0\u793A\u7C7B\u578B",paraId:0,tocIndex:4},{value:"success",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"warning",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"error",paraId:0,tocIndex:4},{value:"info",paraId:0,tocIndex:4},{value:"closable",paraId:0,tocIndex:4},{value:"\u662F\u5426\u53EF\u5173\u95ED",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"showIcon",paraId:0,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u63D0\u793A\u56FE\u6807",paraId:0,tocIndex:4},{value:"boolean",paraId:0,tocIndex:4},{value:"true",paraId:0,tocIndex:4},{value:"icon",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u663E\u793A\u56FE\u6807\uFF0C\u4EC5\u5728 showIcon \u4E3A true \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"action",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",paraId:0,tocIndex:4},{value:"ReactNode",paraId:0,tocIndex:4},{value:"onClose",paraId:0,tocIndex:4},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u51FD\u6570",paraId:0,tocIndex:4},{value:"(e: MouseEvent) => void",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:0,tocIndex:4},{value:"CSSProperties",paraId:0,tocIndex:4}]},57541:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u57FA\u672C\u4F7F\u7528\uFF0Ctype \u9884\u8BBE ",paraId:0,tocIndex:1},{value:"primary",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"default",paraId:0,tocIndex:1},{value:" ",paraId:0,tocIndex:1},{value:"link",paraId:0,tocIndex:1},{value:" \u4E09\u79CD\u57FA\u7840\u6309\u94AE/\u989C\u8272\u7C7B\u578B\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",paraId:0,tocIndex:1},{value:"status",paraId:0,tocIndex:1},{value:" \u6765\u83B7\u5F97\u66F4\u591A\u7684\u989C\u8272\u6309\u94AE\u3002",paraId:0,tocIndex:1},{value:"\u5F53\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"type='link;",paraId:1,tocIndex:1},{value:" \u6216 href \u5C5E\u6027\u65F6\uFF0C\u5143\u7D20\u6E32\u67D3\u5219\u4F1A\u53D8\u4E3A a \u6807\u7B7E\uFF0C\u4E14\u884C\u4E3A\u4E0E a \u6807\u7B7E\u4E00\u81F4",paraId:1,tocIndex:1},{value:"\u53EF\u8BBE\u7F6E ",paraId:2,tocIndex:4},{value:"outline",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"text",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"dashed",paraId:2,tocIndex:4},{value:" \u4E09\u79CD\u5176\u5B83\u6837\u5F0F\u53D8\u4F53",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:6},{value:"\u63CF\u8FF0",paraId:3,tocIndex:6},{value:"\u7C7B\u578B",paraId:3,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:6},{value:"children",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5185\u5BB9",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u7C7B\u578B",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"link",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:"status",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u72B6\u6001",paraId:3,tocIndex:6},{value:"primary",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"danger",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"warning",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"success",paraId:3,tocIndex:6},{value:"variant",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u53D8\u4F53",paraId:3,tocIndex:6},{value:"default",paraId:3,tocIndex:6},{value:" |",paraId:3,tocIndex:6},{value:"outline",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"text",paraId:3,tocIndex:6},{value:"|",paraId:3,tocIndex:6},{value:"dashed",paraId:3,tocIndex:6},{value:"loading",paraId:3,tocIndex:6},{value:"\u6309\u94AEloading",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"htmlType",paraId:3,tocIndex:6},{value:"\u539F\u751F ",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:" \u6807\u7B7E\u7684 type \u5C5E\u6027",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"submit",paraId:3,tocIndex:6},{value:"| ",paraId:3,tocIndex:6},{value:"reset",paraId:3,tocIndex:6},{value:"button",paraId:3,tocIndex:6},{value:"disabled",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u662F\u5426\u7981\u7528",paraId:3,tocIndex:6},{value:"boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6},{value:"icon",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u56FE\u6807",paraId:3,tocIndex:6},{value:"ReactNode",paraId:3,tocIndex:6},{value:"size",paraId:3,tocIndex:6},{value:"\u6309\u94AE\u5C3A\u5BF8",paraId:3,tocIndex:6},{value:"ConfigSize",paraId:3,tocIndex:6},{value:"md",paraId:3,tocIndex:6},{value:"href",paraId:3,tocIndex:6},{value:"\u4E0E a \u6807\u7B7E href \u884C\u4E3A\u4E00\u81F4",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"target",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E target \u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"anchorProps",paraId:3,tocIndex:6},{value:"a \u6807\u7B7E\u5C5E\u6027\uFF0Chref \u5B58\u5728\u65F6\u751F\u6548",paraId:3,tocIndex:6},{value:"HTMLProps<HTMLAnchorElement>",paraId:3,tocIndex:6},{value:"onClick",paraId:3,tocIndex:6},{value:"\u70B9\u51FB\u6309\u94AE\u7684\u56DE\u8C03",paraId:3,tocIndex:6},{value:"MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>",paraId:3,tocIndex:6}]},34349:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528\u65B9\u5F0F\u5DF2\u5C3D\u91CF\u8D34\u8FD1 ",paraId:0,tocIndex:0},{value:"Radio",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u51CF\u5C11\u5DEE\u5F02\u5316 API",paraId:0,tocIndex:0},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:1,tocIndex:4},{value:"indeterminate",paraId:1,tocIndex:4},{value:" \u6765\u5B9E\u73B0\u5168\u9009/\u534A\u9009\u6548\u679C",paraId:1,tocIndex:4},{value:"\u6CE8\u610F\uFF1A",paraId:2,tocIndex:4},{value:"indeterminate",paraId:2,tocIndex:4},{value:" \u4EC5\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:8},{value:"\u63CF\u8FF0",paraId:3,tocIndex:8},{value:"\u7C7B\u578B",paraId:3,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:8},{value:"children",paraId:3,tocIndex:8},{value:"\u5B50\u5143\u7D20",paraId:3,tocIndex:8},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"checked",paraId:3,tocIndex:8},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"defaultChecked",paraId:3,tocIndex:8},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"false",paraId:3,tocIndex:8},{value:"disabled",paraId:3,tocIndex:8},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"name",paraId:3,tocIndex:8},{value:"input \u7684 name \u5C5E\u6027",paraId:3,tocIndex:8},{value:"string",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"value",paraId:3,tocIndex:8},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:3,tocIndex:8},{value:"CheckboxValue",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"indeterminate",paraId:3,tocIndex:8},{value:"\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236",paraId:3,tocIndex:8},{value:"boolean",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"onChange",paraId:3,tocIndex:8},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:3,tocIndex:8},{value:"(e: CheckboxChangeEvent) => void",paraId:3,tocIndex:8},{value:"-",paraId:3,tocIndex:8},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"className",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"style",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:9},{value:"CSSProperties",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"\u591A\u9009\u6309\u94AE\u7EC4\u4E0B input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"defaultValue",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"CheckboxValue[]",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ACheckbox.disabled > CheckboxGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"renderOption",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:4,tocIndex:9},{value:"options",paraId:4,tocIndex:9},{value:" \u65F6\u751F\u6548",paraId:4,tocIndex:9},{value:" (params: CheckboxOptions & {checked: boolean}) => ReactNode",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: CheckboxValue) => void",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"label",paraId:5,tocIndex:10},{value:"\u663E\u793A\u6807\u7B7E",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u503C",paraId:5,tocIndex:10},{value:"CheckboxValue",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"id",paraId:5,tocIndex:10},{value:"\u5143\u7D20 ID",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"title",paraId:5,tocIndex:10},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: CheckboxChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"target",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:6,tocIndex:11},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:6,tocIndex:11},{value:"event",paraId:6,tocIndex:11},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:6,tocIndex:11},{value:"ChangeEvent<HTMLInputElement>",paraId:6,tocIndex:11}]},79341:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u8FC7\u4F7F\u7528 ",paraId:0,tocIndex:1},{value:"ConfigProvider",paraId:0,tocIndex:1},{value:" \u53EF\u4EE5\u8BBE\u7F6E\u5168\u5C40\u7684\u7EC4\u4EF6\u5C5E\u6027",paraId:0,tocIndex:1},{value:"\u5D4C\u5957 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u53EF\u4EE5\u8986\u76D6\u5916\u5C42 ",paraId:1,tocIndex:2},{value:"ConfigProvider",paraId:1,tocIndex:2},{value:" \u7684\u5C5E\u6027",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"componentConfig",paraId:2,tocIndex:3},{value:"\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u53C2\u6570",paraId:2,tocIndex:3},{value:"ComponentConfig",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u5C3A\u5BF8\uFF0C\u4EC5 ",paraId:2,tocIndex:3},{value:"size",paraId:2,tocIndex:3},{value:" \u5C5E\u6027\u751F\u6548",paraId:2,tocIndex:3},{value:"ConfigSize",paraId:2,tocIndex:3},{value:"md",paraId:2,tocIndex:3},{value:"prefixCls",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi",paraId:2,tocIndex:3},{value:"iconPrefix",paraId:2,tocIndex:3},{value:"\u7EC4\u4EF6\u56FE\u6807\u524D\u7F00",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"sqi-icon",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3}]},9344:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F20\u5165 ",paraId:0,tocIndex:2},{value:"text",paraId:0,tocIndex:2},{value:" \u5C5E\u6027\u6216 ",paraId:0,tocIndex:2},{value:"children",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u5206\u5272\u7EBF\u5185\u5BB9, \u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"align",paraId:0,tocIndex:2},{value:" \u6307\u5B9A\u6587\u5B57\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F, ",paraId:0,tocIndex:2},{value:"dashed",paraId:0,tocIndex:2},{value:" \u8BBE\u7F6E\u662F\u5426\u4E3A\u865A\u7EBF",paraId:0,tocIndex:2},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u63CF\u8FF0",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"direction",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u65B9\u5411",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"vertical",paraId:1,tocIndex:4},{value:"horizontal",paraId:1,tocIndex:4},{value:"align",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:4},{value:"left",paraId:1,tocIndex:4},{value:"|",paraId:1,tocIndex:4},{value:"right",paraId:1,tocIndex:4},{value:" |",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"center",paraId:1,tocIndex:4},{value:"dashed",paraId:1,tocIndex:4},{value:"\u662F\u5426\u865A\u7EBF",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"text",paraId:1,tocIndex:4},{value:"\u5206\u5272\u7EBF\u5185\u5BB9\uFF0C\u540C ",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4},{value:"style",paraId:1,tocIndex:4},{value:"\u5185\u8054\u6837\u5F0F",paraId:1,tocIndex:4},{value:"CSSProperties",paraId:1,tocIndex:4},{value:"className",paraId:1,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:1,tocIndex:4},{value:"string",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5185\u5BB9",paraId:1,tocIndex:4},{value:"ReactNode",paraId:1,tocIndex:4}]},49305:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C06\u533A\u57DF\u5206\u4E3A 24 \u6805\u683C\uFF0C\u89C4\u8303\u6574\u4F53\u5E03\u5C40",paraId:0,tocIndex:0},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165 ",paraId:1,tocIndex:2},{value:"[number, number]",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u5217\u95F4\u8DDD\u548C\u884C\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"gutter \u4F20\u5165\u5BF9\u8C61\uFF0C\u4F8B\u5982 ",paraId:1,tocIndex:2},{value:"{ xs: 4, sm: 8, md: 16, lg: 32 }",paraId:1,tocIndex:2},{value:"\uFF0C\u5219\u4E3A\u54CD\u5E94\u5F0F\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1A",paraId:2,tocIndex:8},{value:"xs",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"sm",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"md",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"lg",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xl",paraId:2,tocIndex:8},{value:" ",paraId:2,tocIndex:8},{value:"xxl",paraId:2,tocIndex:8},{value:" \u6765\u5B9E\u73B0",paraId:2,tocIndex:8},{value:"xs",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"sm",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"md",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"lg",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xl",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"xxl",paraId:3,tocIndex:8},{value:" \u652F\u6301\u4F20\u5165 ",paraId:3,tocIndex:8},{value:"span",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"offset",paraId:3,tocIndex:8},{value:" ",paraId:3,tocIndex:8},{value:"order",paraId:3,tocIndex:8},{value:" \u5C5E\u6027\uFF0C\u5373\u54CD\u5E94\u5F0F\u6805\u683C\u3001\u504F\u79FB\u3001\u6392\u5E8F",paraId:3,tocIndex:8},{value:"xs={6}",paraId:4},{value:" \u7B49\u4EF7\u4E8E ",paraId:4},{value:"xs={{ span: 6 }}",paraId:4},{value:"\u4E0B\u9762\u662F\u5C06\u63D0\u4F9B\u7684\u5173\u4E8E\u6805\u683C\u7CFB\u7EDF\uFF08Row\u548CCol\u7EC4\u4EF6\uFF09\u7684TypeScript\u63A5\u53E3\u5C5E\u6027\u8F6C\u6362\u6210Markdown\u683C\u5F0F\u7684\u8868\u683C\u4ECB\u7ECD\uFF1A",paraId:5,tocIndex:9},{value:"\u5C5E\u6027",paraId:6,tocIndex:10},{value:"\u63CF\u8FF0",paraId:6,tocIndex:10},{value:"\u7C7B\u578B",paraId:6,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:10},{value:"gutter",paraId:6,tocIndex:10},{value:"\u6805\u683C\u95F4\u9694",paraId:6,tocIndex:10},{value:"RowGutter",paraId:7,tocIndex:10},{value:" | ",paraId:6,tocIndex:10},{value:"RowGutter[]",paraId:6,tocIndex:10},{value:"0",paraId:6,tocIndex:10},{value:"align",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u5BF9\u9F50\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"stretch",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"justify",paraId:6,tocIndex:10},{value:"\u5217\u5143\u7D20\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"center",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"end",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-around",paraId:6,tocIndex:10},{value:"|",paraId:6,tocIndex:10},{value:"space-between",paraId:6,tocIndex:10},{value:"start",paraId:6,tocIndex:10},{value:"wrap",paraId:6,tocIndex:10},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"true",paraId:6,tocIndex:10},{value:"\u5C5E\u6027",paraId:8,tocIndex:11},{value:"\u63CF\u8FF0",paraId:8,tocIndex:11},{value:"\u7C7B\u578B",paraId:8,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:11},{value:"span",paraId:8,tocIndex:11},{value:"\u6805\u683C\u5360\u4F4D\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"offset",paraId:8,tocIndex:11},{value:"\u6805\u683C\u504F\u79FB\u683C\u6570",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"0",paraId:8,tocIndex:11},{value:"order",paraId:8,tocIndex:11},{value:"\u6805\u683C\u6392\u5217\u987A\u5E8F",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"flex",paraId:8,tocIndex:11},{value:"\u81EA\u5B9A\u4E49 flex \u5E03\u5C40\u5C5E\u6027",paraId:8,tocIndex:11},{value:"number",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"none",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"auto",paraId:8,tocIndex:11},{value:"|",paraId:8,tocIndex:11},{value:"string",paraId:8,tocIndex:11},{value:"\u5C5E\u6027",paraId:9,tocIndex:12},{value:"\u63CF\u8FF0",paraId:9,tocIndex:12},{value:"\u7C7B\u578B",paraId:9,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:12},{value:"gutter",paraId:9,tocIndex:12},{value:"\u6805\u683C\u95F4\u9694\uFF0C\u53EF\u8BBE\u7F6E\u6570\u7EC4",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"|",paraId:9,tocIndex:12},{value:"Record<'xxl'| 'xl'| 'lg'| 'md'| 'sm'| 'xs', number>",paraId:9,tocIndex:12}]},57197:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u5E93\u4E0D\u5185\u7F6E Icon\uFF0C\u9700\u5F15\u5165 ",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:"\uFF0C",paraId:0,tocIndex:0},{value:"@sqi-ui/icons",paraId:0,tocIndex:0},{value:" \u672C\u8EAB\u65E0\u6837\u5F0F\uFF0C\u7531\u7EC4\u4EF6\u5E93\u63A7\u5236",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"rotate",paraId:1,tocIndex:1},{value:" \u63A7\u5236\u56FE\u6807\u7684\u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8BBE\u7F6E ",paraId:1,tocIndex:1},{value:"spin",paraId:1,tocIndex:1},{value:" \u53EF\u65E0\u9650\u65CB\u8F6C",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:4},{value:"\u63CF\u8FF0",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"svg",paraId:2,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 SVG \u56FE\u6807\u5143\u7D20",paraId:2,tocIndex:4},{value:"ReactNode",paraId:2,tocIndex:4},{value:"spin",paraId:2,tocIndex:4},{value:"\u662F\u5426\u65CB\u8F6C\u52A8\u753B",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"rotate",paraId:2,tocIndex:4},{value:"\u56FE\u6807\u65CB\u8F6C\u89D2\u5EA6",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"type",paraId:2,tocIndex:4},{value:"\u8BBE\u7F6E\u7ED9 span \u7684 ",paraId:2,tocIndex:4},{value:"aria-label",paraId:2,tocIndex:4},{value:" \u6807\u8BC6",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4}]},5530:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 ",paraId:0,tocIndex:2},{value:"size",paraId:0,tocIndex:2},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u5C3A\u5BF8",paraId:0,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:3},{value:"variant",paraId:1,tocIndex:3},{value:" \u6539\u53D8\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:1,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:4},{value:"align",paraId:2,tocIndex:4},{value:" \u8C03\u6574\u8F93\u5165\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:2,tocIndex:4},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:5},{value:"status",paraId:3,tocIndex:5},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:4,tocIndex:6},{value:"tips",paraId:4,tocIndex:6},{value:" \u8BBE\u7F6E\u8F93\u5165\u6846\u7684\u63D0\u793A\u5185\u5BB9\uFF0C\u5185\u5BB9\u7684\u989C\u8272\u8DDF\u968F ",paraId:4,tocIndex:6},{value:"status",paraId:4,tocIndex:6},{value:" \u7684\u8BBE\u7F6E",paraId:4,tocIndex:6},{value:"\u4F7F\u7528 ",paraId:5,tocIndex:7},{value:"addonBefore",paraId:5,tocIndex:7},{value:" \u548C ",paraId:5,tocIndex:7},{value:"addonAfter",paraId:5,tocIndex:7},{value:" \u5728\u8F93\u5165\u6846\u524D\u540E\u6DFB\u52A0\u5185\u5BB9",paraId:5,tocIndex:7},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:8},{value:"prefix",paraId:6,tocIndex:8},{value:" \u548C ",paraId:6,tocIndex:8},{value:"suffix",paraId:6,tocIndex:8},{value:" \u5728\u8F93\u5165\u6846\u5185\u6DFB\u52A0\u524D\u7F00\u548C\u540E\u7F00",paraId:6,tocIndex:8},{value:"\u4F7F\u7528 ",paraId:7,tocIndex:9},{value:'type="password"',paraId:7,tocIndex:9},{value:" \u521B\u5EFA\u5BC6\u7801\u6846\uFF0C\u5904\u4E8E\u5BC6\u7801\u6846\u72B6\u6001\u4E0B\uFF0C",paraId:7,tocIndex:9},{value:"suffix",paraId:7,tocIndex:9},{value:" \u662F\u4E0D\u751F\u6548\u7684",paraId:7,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:8,tocIndex:9},{value:"visibilityToggle",paraId:8,tocIndex:9},{value:" \u63A7\u5236\u5BC6\u7801\u662F\u5426\u53EF\u89C1\uFF0C\u4E5F\u53EF\u4F20\u5165\u5BF9\u8C61 ",paraId:8,tocIndex:9},{value:"visibilityToggle.visible",paraId:8,tocIndex:9},{value:" \u8FDB\u884C\u5916\u90E8\u53D7\u63A7\uFF0C\u4F20\u5165 ",paraId:8,tocIndex:9},{value:"visibilityToggle.renderIcon",paraId:8,tocIndex:9},{value:" \u81EA\u5B9A\u4E49\u5BC6\u7801\u6846\u7684\u56FE\u6807",paraId:8,tocIndex:9},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:10},{value:"maxLength",paraId:9,tocIndex:10},{value:" \u9650\u5236\u8F93\u5165\u7684\u957F\u5EA6\uFF0C\u5F53\u4F20\u5165 ",paraId:9,tocIndex:10},{value:"number",paraId:9,tocIndex:10},{value:" \u7C7B\u578B\u65F6\uFF0C\u4F1A\u663E\u793A\u8F93\u5165\u957F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u5BF9\u8C61\u683C\u5F0F\u6765\u9690\u85CF\u5B57\u6570\u9650\u5236\u7684\u63D0\u793A",paraId:9,tocIndex:10},{value:"\u5C5E\u6027",paraId:10,tocIndex:12},{value:"\u63CF\u8FF0",paraId:10,tocIndex:12},{value:"\u7C7B\u578B",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"type",paraId:10,tocIndex:12},{value:"\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A",paraId:10,tocIndex:12},{value:"MDN",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"text",paraId:10,tocIndex:12},{value:"size",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5C3A\u5BF8",paraId:10,tocIndex:12},{value:"ConfigSize",paraId:10,tocIndex:12},{value:"md",paraId:10,tocIndex:12},{value:"status",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u72B6\u6001",paraId:10,tocIndex:12},{value:"success",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"warning",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"error",paraId:10,tocIndex:12},{value:"tips",paraId:10,tocIndex:12},{value:"\u63D0\u793A\u5185\u5BB9",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"allowClear",paraId:10,tocIndex:12},{value:"\u662F\u5426\u5141\u8BB8\u6E05\u9664",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"align",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"center",paraId:10,tocIndex:12},{value:" |",paraId:10,tocIndex:12},{value:"right",paraId:10,tocIndex:12},{value:"left",paraId:10,tocIndex:12},{value:"variant",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u6837\u5F0F\u53D8\u4F53",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"borderless",paraId:10,tocIndex:12},{value:"|",paraId:10,tocIndex:12},{value:"underline",paraId:10,tocIndex:12},{value:"outline",paraId:10,tocIndex:12},{value:"addonBefore",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"addonAfter",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F6E\u6807\u7B7E",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"prefix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u524D\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"suffix",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u6846\u540E\u7F00",paraId:10,tocIndex:12},{value:"ReactNode",paraId:10,tocIndex:12},{value:"visibilityToggle",paraId:10,tocIndex:12},{value:"\u662F\u5426\u542F\u7528\u5BC6\u7801\u663E\u9690\u5207\u6362\u53CA\u914D\u7F6E",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"VisibilityToggle",paraId:11,tocIndex:12},{value:"maxLength",paraId:10,tocIndex:12},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6\u53CA\u5176\u914D\u7F6E",paraId:10,tocIndex:12},{value:"number",paraId:10,tocIndex:12},{value:"| ",paraId:10,tocIndex:12},{value:"MaxLength",paraId:12,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1",paraId:10,tocIndex:12},{value:"(value: string, e: FormEvent<HTMLInputElement> | MouseEvent | CompositionEvent<HTMLDivElement>) => void",paraId:10,tocIndex:12},{value:"\u5C5E\u6027",paraId:13,tocIndex:13},{value:"\u63CF\u8FF0",paraId:13,tocIndex:13},{value:"\u7C7B\u578B",paraId:13,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"visible",paraId:13,tocIndex:13},{value:"\u5BC6\u7801\u662F\u5426\u53EF\u89C1",paraId:13,tocIndex:13},{value:"boolean",paraId:13,tocIndex:13},{value:"renderIcon",paraId:13,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5BC6\u7801\u56FE\u6807",paraId:13,tocIndex:13},{value:"(visible: boolean) => ReactNode",paraId:13,tocIndex:13},{value:"onVisibleChange",paraId:13,tocIndex:13},{value:"\u5207\u6362\u5BC6\u7801\u663E\u9690\u65F6\u89E6\u53D1",paraId:13,tocIndex:13},{value:"(visible: boolean) => void",paraId:13,tocIndex:13},{value:"\u5C5E\u6027",paraId:14,tocIndex:14},{value:"\u63CF\u8FF0",paraId:14,tocIndex:14},{value:"\u7C7B\u578B",paraId:14,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:14},{value:"length",paraId:14,tocIndex:14},{value:"\u5B57\u7B26\u6700\u5927\u957F\u5EA6",paraId:14,tocIndex:14},{value:"number",paraId:14,tocIndex:14},{value:"showLimit",paraId:14,tocIndex:14},{value:"\u662F\u5426\u663E\u793A\u5B57\u7B26\u957F\u5EA6\u9650\u5236",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14},{value:"true",paraId:14,tocIndex:14},{value:"errorOnly",paraId:14,tocIndex:14},{value:"\u8D85\u51FA\u5185\u5BB9\u957F\u5EA6\u4EC5\u63D0\u793A\u9519\u8BEF\uFF0C\u4E0D\u9650\u5236\u8F93\u5165",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14}]},70726:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6838\u5FC3\u529F\u80FD\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"Trigger",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\u5E76\u7EE7\u627F\u5176\u5927\u90E8\u5206\u5C5E\u6027\uFF0C\u4F46\u662F\u4F1A\u5BF9 Trigger \u7684\u90E8\u5206\u9ED8\u8BA4\u503C\u8FDB\u884C\u8986\u76D6",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u5C11\u90E8\u5206\u6837\u5F0F\uFF0C\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\u7A0B\u5EA6\u8F83\u9AD8\u7684\u5F39\u51FA\u5185\u5BB9\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u6B64\u7EC4\u4EF6\u8FDB\u884C\u8FDB\u4E00\u6B65\u6269\u5C55",paraId:1,tocIndex:0},{value:"\u8BBE\u7F6E ",paraId:2,tocIndex:3},{value:"direction",paraId:2,tocIndex:3},{value:" \u6307\u5B9A Popup \u5F39\u51FA\u4F4D\u7F6E\uFF0C\u901A\u8FC7 ",paraId:2,tocIndex:3},{value:"showArrow",paraId:2,tocIndex:3},{value:" \u6765\u9009\u62E9\u662F\u5426\u663E\u793A\u7BAD\u5934",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u4F1A\u8FDB\u884C\u8FB9\u7F18\u68C0\u6D4B\u504F\u79FB\u4EE5\u53CA\u81EA\u52A8\u7FFB\u8F6C\uFF0C\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6216\u8005\u60F3\u51CF\u5C11\u8BA1\u7B97\u5E26\u6765\u7684\u5F00\u9500\uFF0C\u53EF\u4EE5\u8BBE\u7F6E ",paraId:3,tocIndex:4},{value:"enableFlip=false",paraId:3,tocIndex:4},{value:" \u6216 ",paraId:3,tocIndex:4},{value:"enableShift=false",paraId:3,tocIndex:4},{value:" \u6765\u9009\u62E9\u6027\u5173\u95ED\u4E0D\u9700\u8981\u7684\u529F\u80FD",paraId:3,tocIndex:4},{value:"\u7BAD\u5934\u7684\u989D\u5916\u6837\u5F0F\u662F demo \u4E2D\u4E3A\u4E86\u66F4\u65B9\u4FBF\u89C2\u5BDF\u539F\u672C\u7684\u8FB9\u7F18\u78B0\u649E\u6548\u679C\u800C\u6DFB\u52A0\u7684\uFF0C\u5E76\u975E\u7EC4\u4EF6\u81EA\u5E26",paraId:4,tocIndex:4},{value:"\u7981\u7528\u5F39\u51FA\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u5F39\u51FA\u5C42\u76F8\u5173\u7684\u884C\u4E3A",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:8},{value:"\u63CF\u8FF0",paraId:6,tocIndex:8},{value:"\u7C7B\u578B",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"children",paraId:6,tocIndex:8},{value:"\u89E6\u53D1\u5143\u7D20",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"content",paraId:6,tocIndex:8},{value:"Popup \u5185\u5BB9",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"showArrow",paraId:6,tocIndex:8},{value:"\u662F\u5426\u5C55\u793A\u7BAD\u5934",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"true",paraId:6,tocIndex:8},{value:"destroyOnClose",paraId:6,tocIndex:8},{value:"\u9690\u85CF\u65F6\u662F\u5426\u9500\u6BC1",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"true",paraId:6,tocIndex:8},{value:"offset",paraId:6,tocIndex:8},{value:"\u5143\u7D20\u76F8\u5BF9\u4E8E\u89E6\u53D1\u5143\u7D20\u7684\u8DDD\u79BB",paraId:6,tocIndex:8},{value:"number",paraId:6,tocIndex:8},{value:"4",paraId:6,tocIndex:8},{value:"styles",paraId:6,tocIndex:8},{value:"style \u8BED\u6CD5\u7CD6",paraId:6,tocIndex:8},{value:"{ content?: CSSProperties; arrow?: CSSProperties;}",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"classNames",paraId:6,tocIndex:8},{value:"className \u8BED\u6CD5\u7CD6",paraId:6,tocIndex:8},{value:"{ content?: string; arrow?: string;}",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u4EE5\u4E0B\u5C5E\u6027\u7686\u7EE7\u627F\u81EA Trigger \u7EC4\u4EF6",paraId:7,tocIndex:8},{value:"\u5C5E\u6027",paraId:8,tocIndex:8},{value:"\u63CF\u8FF0",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:8},{value:"direction",paraId:8,tocIndex:8},{value:"popper \u4F4D\u7F6E",paraId:8,tocIndex:8},{value:"TriggerDirection",paraId:8,tocIndex:8},{value:"bottom",paraId:8,tocIndex:8},{value:"enableFlip",paraId:8,tocIndex:8},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"true",paraId:8,tocIndex:8},{value:"enableShift",paraId:8,tocIndex:8},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"true",paraId:8,tocIndex:8},{value:"zIndex",paraId:8,tocIndex:8},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:8,tocIndex:8},{value:"number",paraId:8,tocIndex:8},{value:"1",paraId:8,tocIndex:8},{value:"getContainer",paraId:8,tocIndex:8},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:8,tocIndex:8},{value:"string | HTMLElement | () => HTMLElement",paraId:8,tocIndex:8},{value:"document.body",paraId:8,tocIndex:8},{value:"trigger",paraId:8,tocIndex:8},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:8,tocIndex:8},{value:"TriggerType | TriggerType[]",paraId:8,tocIndex:8},{value:'"hover"',paraId:8,tocIndex:8},{value:"disabled",paraId:8,tocIndex:8},{value:"\u7981\u7528\u884C\u4E3A",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"delay",paraId:8,tocIndex:8},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:8,tocIndex:8},{value:"number",paraId:8,tocIndex:8},{value:"100",paraId:8,tocIndex:8},{value:"outFocusToClose",paraId:8,tocIndex:8},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"true",paraId:8,tocIndex:8},{value:"defaultVisible",paraId:8,tocIndex:8},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"visible",paraId:8,tocIndex:8},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"onVisibleChange",paraId:8,tocIndex:8},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:8,tocIndex:8},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8}]},35450:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u6CE8\u610F\uFF1A",paraId:0,tocIndex:2},{value:"Radio.Button",paraId:0,tocIndex:2},{value:" \u81EA\u8EAB\u4E0D\u5177\u5907\u4EA4\u4E92\u6027\uFF0C\u5FC5\u987B\u4E0E ",paraId:0,tocIndex:2},{value:"Radio.Group",paraId:0,tocIndex:2},{value:" \u4E00\u8D77\u4F7F\u7528\u624D\u53EF\u6B63\u5E38\u5DE5\u4F5C",paraId:0,tocIndex:2},{value:"\u6CE8\u610F\uFF1ARadio \u81EA\u8EAB\u7684 ",paraId:1,tocIndex:3},{value:"disabled",paraId:1,tocIndex:3},{value:" \u4F18\u5148\u7EA7\u6BD4 ",paraId:1,tocIndex:3},{value:"Radio.Group",paraId:1,tocIndex:3},{value:" \u9AD8",paraId:1,tocIndex:3},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:2,tocIndex:5},{value:"Space",paraId:2,tocIndex:5},{value:" \u7EC4\u4EF6\u6216\u8005 ",paraId:2,tocIndex:5},{value:"flex",paraId:2,tocIndex:5},{value:" \u5E03\u5C40\u6837\u5F0F\uFF0C\u521B\u5EFA\u5782\u76F4\u6392\u5217\u7684 Radio \u7EC4\u5408",paraId:2,tocIndex:5},{value:"\u8BF7\u6CE8\u610F\u793A\u4F8B\u4E2D\u7684 ",paraId:3},{value:"gap",paraId:3},{value:" \u5C5E\u6027\u7684\u517C\u5BB9\u6027\uFF0C\u8BE6\u89C1 ",paraId:3},{value:"Can I Use",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0",paraId:4,tocIndex:9},{value:"\u7C7B\u578B",paraId:4,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:9},{value:"children",paraId:4,tocIndex:9},{value:"\u5B50\u5143\u7D20",paraId:4,tocIndex:9},{value:"ReactNode | ({ checked: boolean })=>ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"checked",paraId:4,tocIndex:9},{value:"\u662F\u5426\u9009\u4E2D\uFF08\u53D7\u63A7\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"defaultChecked",paraId:4,tocIndex:9},{value:"\u975E\u53D7\u63A7\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"false",paraId:4,tocIndex:9},{value:"disabled",paraId:4,tocIndex:9},{value:"\u662F\u5426\u7981\u7528\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:4,tocIndex:9},{value:"boolean",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"label",paraId:4,tocIndex:9},{value:"\u63CF\u8FF0\u6587\u672C",paraId:4,tocIndex:9},{value:"ReactNode",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"name",paraId:4,tocIndex:9},{value:"input \u7684 name \u5C5E\u6027",paraId:4,tocIndex:9},{value:"string",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"value",paraId:4,tocIndex:9},{value:"\u5355\u9009\u6309\u94AE\u7684\u503C\uFF08\u540C\u6B65\u5230 input \u7684 value \u5C5E\u6027\uFF09",paraId:4,tocIndex:9},{value:"RadioValue",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"onChange",paraId:4,tocIndex:9},{value:"\u9009\u4E2D\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:4,tocIndex:9},{value:"(e: RadioChangeEvent) => void",paraId:4,tocIndex:9},{value:"-",paraId:4,tocIndex:9},{value:"\u5C5E\u6027",paraId:5,tocIndex:10},{value:"\u63CF\u8FF0",paraId:5,tocIndex:10},{value:"\u7C7B\u578B",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:10},{value:"className",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"style",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:5,tocIndex:10},{value:"CSSProperties",paraId:5,tocIndex:10},{value:"children",paraId:5,tocIndex:10},{value:"\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"ReactNode",paraId:5,tocIndex:10},{value:"name",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u540D\u79F0",paraId:5,tocIndex:10},{value:"string",paraId:5,tocIndex:10},{value:"value",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\uFF08\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"defaultValue",paraId:5,tocIndex:10},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879\uFF08\u975E\u53D7\u63A7\uFF09",paraId:5,tocIndex:10},{value:"sting",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number",paraId:5,tocIndex:10},{value:"disabled",paraId:5,tocIndex:10},{value:"\u662F\u5426\u7981\u7528\u6240\u6709\u5355\u9009\u6309\u94AE\uFF08\u4F18\u5148\u7EA7\uFF1ARadio.disabled > RadioGroup.disabled\uFF09",paraId:5,tocIndex:10},{value:"boolean",paraId:5,tocIndex:10},{value:"false",paraId:5,tocIndex:10},{value:"size",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u5C3A\u5BF8\uFF08\u4EC5 Button \u6837\u5F0F\u4E0B\u6709\u6548\uFF09",paraId:5,tocIndex:10},{value:"ConfigSize",paraId:5,tocIndex:10},{value:"'md'",paraId:5,tocIndex:10},{value:"appearance",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u4E3B\u9898\uFF08\u4EC5\u5728\u4F7F\u7528 options \u6E32\u67D3\u65F6\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:" |",paraId:5,tocIndex:10},{value:"button",paraId:5,tocIndex:10},{value:"radio",paraId:5,tocIndex:10},{value:"buttonVariant",paraId:5,tocIndex:10},{value:"\u5355\u9009\u6309\u94AE\u7EC4\u6837\u5F0F\uFF08\u4EC5 Button \u4E0B\u751F\u6548\uFF09",paraId:5,tocIndex:10},{value:"filled",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"outline",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:"\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20",paraId:5,tocIndex:10},{value:"RadioOptions[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"string[]",paraId:5,tocIndex:10},{value:"|",paraId:5,tocIndex:10},{value:"number[]",paraId:5,tocIndex:10},{value:"renderOption",paraId:5,tocIndex:10},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u4EC5\u914D\u7F6E ",paraId:5,tocIndex:10},{value:"options",paraId:5,tocIndex:10},{value:" \u65F6\u751F\u6548",paraId:5,tocIndex:10},{value:" (params: RadioOptions & {checked: boolean}) => ReactNode",paraId:5,tocIndex:10},{value:"onChange",paraId:5,tocIndex:10},{value:"\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1",paraId:5,tocIndex:10},{value:"(e: RadioChangeEvent) => void",paraId:5,tocIndex:10},{value:"\u5C5E\u6027",paraId:6,tocIndex:11},{value:"\u63CF\u8FF0",paraId:6,tocIndex:11},{value:"\u7C7B\u578B",paraId:6,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:11},{value:"label",paraId:6,tocIndex:11},{value:"\u663E\u793A\u6807\u7B7E",paraId:6,tocIndex:11},{value:"ReactNode",paraId:6,tocIndex:11},{value:"value",paraId:6,tocIndex:11},{value:"\u503C",paraId:6,tocIndex:11},{value:"sting",paraId:6,tocIndex:11},{value:"|",paraId:6,tocIndex:11},{value:"number",paraId:6,tocIndex:11},{value:"disabled",paraId:6,tocIndex:11},{value:"\u662F\u5426\u7981\u7528",paraId:6,tocIndex:11},{value:"boolean",paraId:6,tocIndex:11},{value:"className",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"style",paraId:6,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:6,tocIndex:11},{value:"CSSProperties",paraId:6,tocIndex:11},{value:"id",paraId:6,tocIndex:11},{value:"\u5143\u7D20 ID",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"title",paraId:6,tocIndex:11},{value:"\u989D\u5916\u63D0\u793A\u4FE1\u606F",paraId:6,tocIndex:11},{value:"string",paraId:6,tocIndex:11},{value:"onChange",paraId:6,tocIndex:11},{value:"\u503C\u53D8\u5316\u65F6\u89E6\u53D1",paraId:6,tocIndex:11},{value:"(e: RadioChangeEvent) => void",paraId:6,tocIndex:11},{value:"\u5C5E\u6027",paraId:7,tocIndex:12},{value:"\u63CF\u8FF0",paraId:7,tocIndex:12},{value:"\u7C7B\u578B",paraId:7,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:12},{value:"target",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u7684 props \u53CA\u5C11\u91CF\u6269\u5C55\u5C5E\u6027",paraId:7,tocIndex:12},{value:"Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>",paraId:7,tocIndex:12},{value:"event",paraId:7,tocIndex:12},{value:"\u539F\u751F input \u4E8B\u4EF6",paraId:7,tocIndex:12},{value:"ChangeEvent<HTMLInputElement>",paraId:7,tocIndex:12}]},44795:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u4F7F\u7528 size \u5C5E\u6027\u8BBE\u7F6E\u95F4\u8DDD\u5927\u5C0F\uFF0C\u53EF\u4F20\u5165\u6570\u5B57\u81EA\u5B9A\u4E49\u95F4\u8DDD",paraId:0,tocIndex:1},{value:"\u5C5E\u6027",paraId:1,tocIndex:6},{value:"\u63CF\u8FF0",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"size",paraId:1,tocIndex:6},{value:"\u95F4\u8DDD\u5927\u5C0F",paraId:1,tocIndex:6},{value:"SizeType",paraId:2,tocIndex:6},{value:" | ",paraId:1,tocIndex:6},{value:"[SizeType, SizeType]",paraId:1,tocIndex:6},{value:"direction",paraId:1,tocIndex:6},{value:"\u65B9\u5411",paraId:1,tocIndex:6},{value:"'horizontal' | 'vertical'",paraId:1,tocIndex:6},{value:"'horizontal'",paraId:1,tocIndex:6},{value:"align",paraId:1,tocIndex:6},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:1,tocIndex:6},{value:"'start' | 'end' | 'center' | 'baseline'",paraId:1,tocIndex:6},{value:"wrap",paraId:1,tocIndex:6},{value:"\u662F\u5426\u81EA\u52A8\u6362\u884C",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"false",paraId:1,tocIndex:6},{value:"split",paraId:1,tocIndex:6},{value:"\u5206\u9694\u7B26",paraId:1,tocIndex:6},{value:"ReactNode",paraId:1,tocIndex:6},{value:"\u5C5E\u6027",paraId:3,tocIndex:7},{value:"\u63CF\u8FF0",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"SizeType",paraId:3,tocIndex:7},{value:"\u5C3A\u5BF8\u5927\u5C0F",paraId:3,tocIndex:7},{value:"ConfigSize",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"|",paraId:3,tocIndex:7},{value:"undefined",paraId:3,tocIndex:7}]},8176:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u5C5E\u6027",paraId:0,tocIndex:5},{value:"\u63CF\u8FF0",paraId:0,tocIndex:5},{value:"\u7C7B\u578B",paraId:0,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:5},{value:"defaultChecked",paraId:0,tocIndex:5},{value:"\u975E\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"checked",paraId:0,tocIndex:5},{value:"\u53D7\u63A7 \u662F\u5426\u9009\u4E2D",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"disabled",paraId:0,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"size",paraId:0,tocIndex:5},{value:"\u5C3A\u5BF8",paraId:0,tocIndex:5},{value:"sm",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"|",paraId:0,tocIndex:5},{value:"lg",paraId:0,tocIndex:5},{value:"md",paraId:0,tocIndex:5},{value:"label",paraId:0,tocIndex:5},{value:"\u6587\u672C",paraId:0,tocIndex:5},{value:"[checked?: ReactNode, unchecked?: ReactNode]",paraId:0,tocIndex:5},{value:"loading",paraId:0,tocIndex:5},{value:"loading \u72B6\u6001",paraId:0,tocIndex:5},{value:"boolean",paraId:0,tocIndex:5},{value:"false",paraId:0,tocIndex:5},{value:"loadingIcon",paraId:0,tocIndex:5},{value:"\u81EA\u5B9A\u4E49 loading \u56FE\u6807",paraId:0,tocIndex:5},{value:"ReactNode",paraId:0,tocIndex:5},{value:"onChange",paraId:0,tocIndex:5},{value:"\u72B6\u6001\u5207\u6362\u65F6\u89E6\u53D1",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5},{value:"onClick",paraId:0,tocIndex:5},{value:"\u70B9\u51FB\u65F6\u89E6\u53D1(\u7981\u7528\u72B6\u6001\u65E0\u6548)",paraId:0,tocIndex:5},{value:" (checked: boolean, event: Event) => void",paraId:0,tocIndex:5}]},60977:function(x,t,e){"use strict";e.r(t),e.d(t,{texts:function(){return n}});const n=[{value:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528 Trigger \u7EC4\u4EF6\u3002\u4E25\u683C\u610F\u4E49\u4E0A\u8BF4\uFF0CTrigger \u7EC4\u4EF6\u4E5F\u662F\u5185\u90E8\u4F7F\u7528\u7684\uFF0C\u4E14\u4E0D\u643A\u5E26\u4EFB\u4F55\u6837\u5F0F\uFF0C\u5916\u90E8\u4F7F\u7528\u4F1A\u8BA9\u4EE3\u7801\u7EC4\u7EC7\u53D8\u5F97\u66F4\u590D\u6742\u3002",paraId:0,tocIndex:0},{value:"\u63A8\u8350\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\u6765\u66FF\u4EE3 ",paraId:1,tocIndex:0},{value:"Trigger",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u66F4\u5B8C\u6574\u7684\u4F7F\u7528\u8BF7\u67E5\u770B ",paraId:1,tocIndex:0},{value:"Popup",paraId:1,tocIndex:0},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u5B9E\u73B0\u4E00\u4E2A popper.js \u7684\u57FA\u7840\u529F\u80FD\uFF08\u903B\u8F91\u5B9E\u73B0\u5E76\u4E0D\u4F18\u96C5\uFF0C\u4E14\u8BF8\u591A\u60C5\u51B5\u672A\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:2,tocIndex:1},{value:"table th tr",paraId:2,tocIndex:1},{value:" \u4E0B\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0Ccss ",paraId:2,tocIndex:1},{value:"will-change transform",paraId:2,tocIndex:1},{value:" \u7B49\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF09",paraId:2,tocIndex:1},{value:"\u76EE\u524D\u91C7\u53D6\u628A\u7BAD\u5934\u76F8\u5BF9\u4E8E popper \u5B9A\u4F4D\uFF0C\u8FDB\u884C\u5C0F\u8303\u56F4\u504F\u79FB\u53EF\u4EE5\u51CF\u5C11\u975E\u5E38\u591A\u903B\u8F91\u4EE3\u7801",paraId:3,tocIndex:1},{value:"\u540E\u7EED\u53EF\u80FD\u4F1A\u5BF9\u5B9A\u4F4D\u529F\u80FD\u8FDB\u884C\u91CD\u5199\uFF0C\u5982\u679C\u6709\u80FD\u529B\u91CD\u5199\u7684\u8BDD\uFF0CI am very vegetable :)",paraId:4,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:5},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"top",paraId:6},{value:" \u548C ",paraId:6},{value:"bottom",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 y \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C",paraId:6},{value:"\u5F53 ",paraId:6},{value:"direction",paraId:6},{value:" \u7684\u4E3B\u8F74\u5904\u4E8E ",paraId:6},{value:"left",paraId:6},{value:" \u548C ",paraId:6},{value:"right",paraId:6},{value:" \u65F6\uFF0C",paraId:6},{value:"offset",paraId:6},{value:" ",paraId:6},{value:"\u4EC5 x \u8F74",paraId:6},{value:" \u7684\u504F\u79FB\u53EF\u5DE5\u4F5C\u3002",paraId:6},{value:"Why? \u5F53\u540C\u65F6\u652F\u6301 x y \u8F74\u7684\u504F\u79FB\uFF0C\u7531\u4E8E\u76F4\u63A5\u5BF9 popper \u672C\u8EAB\u8BBE\u7F6E\u4E86\u504F\u79FB\uFF0C\u5728\u8BA1\u7B97\u8FB9\u754C\u65F6\u5219\u4F1A\u5BF9\u6B64\u504F\u79FB\u8FDB\u884C\u503C\u7D2F\u52A0\uFF0C\u6700\u7EC8\u4F1A\u5BFC\u81F4\u8FB9\u7F18\u68C0\u6D4B\u51FA\u73B0\u660E\u663E\u7684\u8BEF\u5DEE\uFF08\u4E5F\u4E0D\u662F\u8BEF\u5DEE\uFF0C\u800C\u662F\u6B64\u65F6 popper \u7684\u8FB9\u7F18\u68C0\u6D4B\u770B\u4E0A\u53BB\u4F1A\u5F88\u5947\u602A\uFF09",paraId:7},{value:"\u52A8\u753B\u65E0\u6CD5\u6DFB\u52A0 transform\uFF0C\u56E0\u4E3A position \u7684\u5B9A\u4F4D\u4F7F\u7528 ",paraId:8,tocIndex:2},{value:"transform",paraId:8,tocIndex:2},{value:"\uFF0C\u4F1A\u6709\u51B2\u7A81",paraId:8,tocIndex:2},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53 popper \u5173\u95ED\u65F6\uFF0C\u76F8\u5173 dom \u4F1A\u88AB\u9690\u85CF\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",paraId:9,tocIndex:4},{value:"motion.unmountOnExit",paraId:9,tocIndex:4},{value:" \u4E3A true \u53EF\u4EE5\u5728\u5173\u95ED\u65F6\u9500\u6BC1 dom",paraId:9,tocIndex:4},{value:"\u5C5E\u6027",paraId:10,tocIndex:6},{value:"\u63CF\u8FF0",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:6},{value:"className",paraId:10,tocIndex:6},{value:"popper \u7684\u6839\u5143\u7D20 className",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"children",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u7684\u76EE\u6807\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"popper",paraId:10,tocIndex:6},{value:"\u60AC\u6D6E\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"arrow",paraId:10,tocIndex:6},{value:"\u7BAD\u5934\u5143\u7D20",paraId:10,tocIndex:6},{value:"ReactElement",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"motion",paraId:10,tocIndex:6},{value:"\u52A8\u753B props \u7EE7\u627F\u81EA ",paraId:10,tocIndex:6},{value:"react-transition-state",paraId:10,tocIndex:6},{value:"Omit<CSSMotionProps, 'children'>",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"direction",paraId:10,tocIndex:6},{value:"popper \u4F4D\u7F6E",paraId:10,tocIndex:6},{value:"TriggerDirection",paraId:10,tocIndex:6},{value:"bottom",paraId:10,tocIndex:6},{value:"enableFlip",paraId:10,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u7FFB\u8F6C",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"enableShift",paraId:10,tocIndex:6},{value:"\u5F00\u542F\u81EA\u52A8\u4F4D\u79FB",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"offset",paraId:10,tocIndex:6},{value:"popper \u504F\u79FB\u91CF",paraId:10,tocIndex:6},{value:"number | { x: number; y: number }",paraId:10,tocIndex:6},{value:"0",paraId:10,tocIndex:6},{value:"zIndex",paraId:10,tocIndex:6},{value:"popper \u5143\u7D20\u5C42\u7EA7",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"1",paraId:10,tocIndex:6},{value:"getContainer",paraId:10,tocIndex:6},{value:"\u6307\u5B9A popper \u6302\u8F7D\u7684\u4F4D\u7F6E",paraId:10,tocIndex:6},{value:"string | HTMLElement | () => HTMLElement",paraId:10,tocIndex:6},{value:"document.body",paraId:10,tocIndex:6},{value:"trigger",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u65B9\u5F0F",paraId:10,tocIndex:6},{value:"TriggerType | TriggerType[]",paraId:10,tocIndex:6},{value:'"hover"',paraId:10,tocIndex:6},{value:"disabled",paraId:10,tocIndex:6},{value:"\u7981\u7528\u884C\u4E3A",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"delay",paraId:10,tocIndex:6},{value:"\u89E6\u53D1\u5EF6\u8FDF\u7684\u65F6\u95F4 ms \u4EC5 hover \u751F\u6548",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"100",paraId:10,tocIndex:6},{value:"outFocusToClose",paraId:10,tocIndex:6},{value:"\u76EE\u6807\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u7684\u662F\u5BF9\u5E94\u7684 Popup \u662F\u5426\u5173\u95ED Popup",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"clickOutsideClose",paraId:10,tocIndex:6},{value:"\u70B9\u51FB\u5916\u90E8\u662F\u5426\u53EF\u5173\u95ED",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"true",paraId:10,tocIndex:6},{value:"defaultVisible",paraId:10,tocIndex:6},{value:"\u975E\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"visible",paraId:10,tocIndex:6},{value:"\u53D7\u63A7\u663E\u793A\u9690\u85CF\u72B6\u6001",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"onVisibleChange",paraId:10,tocIndex:6},{value:"\u72B6\u6001\u66F4\u6539\u89E6\u53D1",paraId:10,tocIndex:6},{value:"(visible: boolean, events?: { e: Event; trigger: TriggerType }) => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"\u5171 12 \u4E2A\u65B9\u4F4D",paraId:11,tocIndex:7},{value:"top",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"top-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"top-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"right-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"bottom-end",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left-start",paraId:12,tocIndex:7},{value:" | ",paraId:12,tocIndex:7},{value:"left-end",paraId:12,tocIndex:7},{value:"\u5BF9\u5E94 eventListener \u7684\u4E8B\u4EF6\u540D\u79F0",paraId:13,tocIndex:8},{value:"hover",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"click",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"focus",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"mousedown",paraId:14,tocIndex:8},{value:" | ",paraId:14,tocIndex:8},{value:"context-menu",paraId:14,tocIndex:8}]},58500:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useContext, useImperativeHandle } from 'react';
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
`},49821:function(x,t){"use strict";t.Z=`import React, { forwardRef, useEffect, useState } from 'react';
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
`},93201:function(x,t){"use strict";t.Z=`import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef } from 'react';
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

  useImperativeHandle(ref, () => getRefDom(elementRef) as HTMLElement);

  const throttleResize = onResize ? throttle(onResize, throttleMs) : undefined;

  useResizeObserver(getDomElement(), throttleResize, !disabled);

  return isElement ? cloneElement(children as any, { ref: mergedRef }) : children;
});

ResizeObserverComponent.displayName = 'ResizeObserverComponent';

export default ResizeObserverComponent;
`},91738:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},69563:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},12984:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},79379:function(x,t){"use strict";t.Z=`.sqi-demo-motion {
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
`},7316:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},81472:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},21780:function(x,t){"use strict";t.Z=`import { isValidElement, version } from 'react';

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
`},39270:function(x,t){"use strict";t.Z=`import { useCompareMemo } from '@sqi-ui/hooks';
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
`},89543:function(x,t){"use strict";t.Z=`import { Children, isValidElement, type ReactNode } from 'react';
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
`},25934:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},580:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},97653:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},51053:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},67925:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},77895:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},92163:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},27598:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},21020:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},7854:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},48118:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},27482:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},51122:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},8030:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},27234:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},61569:function(x,t){"use strict";t.Z=`import { createContext } from 'react';
import type { ConfigProviderProps } from './type';

export const defaultConfigProps: ConfigProviderProps = {
  componentConfig: {},
  prefixCls: 'sqi',
  iconPrefix: 'sqi',
};

export const ConfigContext = createContext<ConfigProviderProps>(defaultConfigProps);
`},89081:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},71015:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},23215:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},66320:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},20179:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},50614:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},41599:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},34194:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},32960:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},31142:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},55735:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},313:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},60004:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},1728:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},25509:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},3601:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},56993:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},96567:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},93528:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},88661:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},39151:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},88846:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},33327:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},56463:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},7378:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},89161:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},75770:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},20746:function(x,t){"use strict";t.Z=`import React from 'react';
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

      <Popup visible={visible} content="This is a Control popup. You must click button to close">
        <Button type="primary" onClick={() => setVisible(!visible)}>
          Click me
        </Button>
      </Popup>
    </Space>
  );
}
`},76406:function(x,t){"use strict";t.Z=`import React from 'react';
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
        <Popup showArrow={showArrow} direction="top-start" content={content}>
          <Button type="primary" style={styles.topStart}>
            top-start
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="top" content={content}>
          <Button type="primary" style={styles.top}>
            top
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="top-end" content={content}>
          <Button type="primary" style={styles.topEnd}>
            top-end
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="left-start" content={content}>
          <Button type="primary" style={styles.leftStart}>
            left-start
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="left" content={content}>
          <Button type="primary" style={styles.left}>
            left
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="left-end" content={content}>
          <Button type="primary" style={styles.leftEnd}>
            left-end
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="right-start" content={content}>
          <Button type="primary" style={styles.rightStart}>
            right-start
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="right" content={content}>
          <Button type="primary" style={styles.right}>
            right
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="right-end" content={content}>
          <Button type="primary" style={styles.rightEnd}>
            right-end
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="bottom-start" content={content}>
          <Button type="primary" style={styles.bottomStart}>
            bottom-start
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="bottom" content={content}>
          <Button type="primary" style={styles.bottom}>
            bottom
          </Button>
        </Popup>
        <Popup showArrow={showArrow} direction="bottom-end" content={content}>
          <Button type="primary" style={styles.bottomEnd}>
            bottom-end
          </Button>
        </Popup>
      </div>
    </>
  );
}
`},8236:function(x,t){"use strict";t.Z=`import React from 'react';
import { Button, Checkbox, Popup, Space } from '@sqi-ui/web';
export default function Demo() {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <Space>
      <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
        {disabled ? 'Enable' : 'Disable'}
      </Checkbox>

      <Popup disabled={disabled} content="This is a popup">
        <Button type="primary">Hover me</Button>
      </Popup>
    </Space>
  );
}
`},56409:function(x,t){"use strict";t.Z=`import React from 'react';
import { Button, Input, Popup } from '@sqi-ui/web';
export default function Demo() {
  return (
    <Popup
      content={
        <Popup
          trigger="click"
          direction="right"
          content={
            <Popup trigger="focus" outFocusToClose={false} direction="right" content={<h4>Three Popup</h4>}>
              <Input placeholder="Focus Me" />
            </Popup>
          }
        >
          <Button>Click Me</Button>
        </Popup>
      }
    >
      <Button>Hover Me</Button>
    </Popup>
  );
}
`},37417:function(x,t){"use strict";t.Z=`import React from 'react';
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
            styles={{ arrow: { backgroundColor: 'red' } }} // debug arrow
          >
            <Button type="primary">Scroll the window</Button>
          </Popup>
        </div>
      </div>
    </>
  );
}
`},39976:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},59230:function(x,t){"use strict";t.Z=`import React from 'react';

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
`},29083:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},47365:function(x,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},13906:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},59251:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},59129:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},13176:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},66149:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},76174:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},84432:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},80345:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},38648:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},74309:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},83650:function(x,t){"use strict";t.Z=`import React from 'react';
import { Space, Switch } from '@sqi-ui/web';

export default function Demo() {
  return (
    <Space>
      <Switch />
      <Switch label={['\u5F00', '\u5173']} />
    </Space>
  );
}
`},89251:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},20254:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},43883:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},30596:function(x,t){"use strict";t.Z=`import React, { forwardRef } from 'react';
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
`},64872:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},37757:function(x,t){"use strict";t.Z=`.container {
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
`},76977:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},42146:function(x,t){"use strict";t.Z=`import React from 'react';
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
`},96809:function(x,t){"use strict";t.Z=`.sqi-demo-trigger-motion {
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
`},45423:function(x,t){"use strict";t.Z=`import React from 'react';
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
            visible
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
`},27833:function(x,t,e){"use no memo";"use strict";var n=Object.create,m=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,l=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,v=(R,S)=>{for(var N in S)m(R,N,{get:S[N],enumerable:!0})},I=(R,S,N,H)=>{if(S&&typeof S=="object"||typeof S=="function")for(let K of f(S))!o.call(R,K)&&K!==N&&m(R,K,{get:()=>S[K],enumerable:!(H=s(S,K))||H.enumerable});return R},h=(R,S,N)=>(N=R!=null?n(l(R)):{},I(S||!R||!R.__esModule?m(N,"default",{value:R,enumerable:!0}):N,R)),c=R=>I(m({},"__esModule",{value:!0}),R),p={};v(p,{$dispatcherGuard:()=>J,$makeReadOnly:()=>w,$reset:()=>k,$structuralCheck:()=>Q,c:()=>g,clearRenderCounterRegistry:()=>W,renderCounterRegistry:()=>L,useRenderCounter:()=>F}),x.exports=c(p);var d=h(e(53360)),{useRef:u,useEffect:i,isValidElement:r}=d,a,P=(a=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE)!=null?a:d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,y=Symbol.for("react.memo_cache_sentinel"),O,g=typeof((O=d.__COMPILER_RUNTIME)==null?void 0:O.c)=="function"?d.__COMPILER_RUNTIME.c:function(S){return d.useMemo(()=>{const N=new Array(S);for(let H=0;H<S;H++)N[H]=y;return N[y]=!0,N},[])},b={};["readContext","useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","unstable_isNewReconciler","getCacheSignal","getCacheForType","useCacheRefresh"].forEach(R=>{b[R]=()=>{throw new Error(`[React] Unexpected React hook call (${R}) from a React compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') `)}});var M=null;b.useMemoCache=R=>{if(M==null)throw new Error("React Compiler internal invariant violation: unexpected null dispatcher");return M.useMemoCache(R)};function T(R){return P.ReactCurrentDispatcher.current=R,P.ReactCurrentDispatcher.current}var Z=[];function J(R){const S=P.ReactCurrentDispatcher.current;if(R===0){if(Z.push(S),Z.length===1&&(M=S),S===b)throw new Error("[React] Unexpected call to custom hook or component from a React compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.");T(b)}else if(R===1){const N=Z.pop();if(N==null)throw new Error("React Compiler internal error: unexpected null in guard stack");Z.length===0&&(M=null),T(N)}else if(R===2)Z.push(S),T(M);else if(R===3){const N=Z.pop();if(N==null)throw new Error("React Compiler internal error: unexpected null in guard stack");T(N)}else throw new Error("React Compiler internal error: unreachable block"+R)}function k(R){for(let S=0;S<R.length;S++)R[S]=y}function w(){throw new Error("TODO: implement $makeReadOnly in react-compiler-runtime")}var L=new Map;function W(){for(const R of L.values())R.forEach(S=>{S.count=0})}function A(R,S){let N=L.get(R);N==null&&(N=new Set,L.set(R,N)),N.add(S)}function V(R,S){const N=L.get(R);N!=null&&N.delete(S)}function F(R){const S=u(null);S.current!=null&&(S.current.count+=1),i(()=>{if(S.current==null){const N={count:0};A(R,N),S.current=N}return()=>{S.current!==null&&V(R,S.current)}})}var z=new Set;function Q(R,S,N,H,K,xe){function G(B,$,q,D){const fe=`${H}:${xe} [${K}] ${N}${q} changed from ${B} to ${$} at depth ${D}`;z.has(fe)||(z.add(fe),console.error(fe))}const ae=2;function ce(B,$,q,D){if(!(D>ae)){if(B===$)return;if(typeof B!=typeof $)G(`type ${typeof B}`,`type ${typeof $}`,q,D);else if(typeof B=="object"){const fe=Array.isArray(B),Ce=Array.isArray($);if(B===null&&$!==null)G("null",`type ${typeof $}`,q,D);else if($===null)G(`type ${typeof B}`,"null",q,D);else if(B instanceof Map)if(!($ instanceof Map))G("Map instance","other value",q,D);else if(B.size!==$.size)G(`Map instance with size ${B.size}`,`Map instance with size ${$.size}`,q,D);else for(const[_,ge]of B)$.has(_)?ce(ge,$.get(_),`${q}.get(${_})`,D+1):G(`Map instance with key ${_}`,`Map instance without key ${_}`,q,D);else if($ instanceof Map)G("other value","Map instance",q,D);else if(B instanceof Set)if(!($ instanceof Set))G("Set instance","other value",q,D);else if(B.size!==$.size)G(`Set instance with size ${B.size}`,`Set instance with size ${$.size}`,q,D);else for(const _ of $)B.has(_)||G(`Set instance without element ${_}`,`Set instance with element ${_}`,q,D);else if($ instanceof Set)G("other value","Set instance",q,D);else if(fe||Ce)if(fe!==Ce)G(`type ${fe?"array":"object"}`,`type ${Ce?"array":"object"}`,q,D);else if(B.length!==$.length)G(`array with length ${B.length}`,`array with length ${$.length}`,q,D);else for(let _=0;_<B.length;_++)ce(B[_],$[_],`${q}[${_}]`,D+1);else if(r(B)||r($))r(B)!==r($)?G(`type ${r(B)?"React element":"object"}`,`type ${r($)?"React element":"object"}`,q,D):B.type!==$.type?G(`React element of type ${B.type}`,`React element of type ${$.type}`,q,D):ce(B.props,$.props,`[props of ${q}]`,D+1);else{for(const _ in $)_ in B||G(`object without key ${_}`,`object with key ${_}`,q,D);for(const _ in B)_ in $?ce(B[_],$[_],`${q}.${_}`,D+1):G(`object with key ${_}`,`object without key ${_}`,q,D)}}else{if(typeof B=="function")return;isNaN(B)||isNaN($)?isNaN(B)!==isNaN($)&&G(`${isNaN(B)?"NaN":"non-NaN value"}`,`${isNaN($)?"NaN":"non-NaN value"}`,q,D):B!==$&&G(B,$,q,D)}}}ce(R,S,"",0)}},11607:function(x,t){"use strict";var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),o=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),c=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.for("react.view_transition"),u=Symbol.for("react.client.reference");function i(r){if(typeof r=="object"&&r!==null){var a=r.$$typeof;switch(a){case e:switch(r=r.type,r){case m:case f:case s:case I:case h:case d:return r;default:switch(r=r&&r.$$typeof,r){case o:case v:case p:case c:return r;case l:return r;default:return a}}case n:return a}}}t.ContextConsumer=l,t.ContextProvider=o,t.Element=e,t.ForwardRef=v,t.Fragment=m,t.Lazy=p,t.Memo=c,t.Portal=n,t.Profiler=f,t.StrictMode=s,t.Suspense=I,t.SuspenseList=h,t.isContextConsumer=function(r){return i(r)===l},t.isContextProvider=function(r){return i(r)===o},t.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===e},t.isForwardRef=function(r){return i(r)===v},t.isFragment=function(r){return i(r)===m},t.isLazy=function(r){return i(r)===p},t.isMemo=function(r){return i(r)===c},t.isPortal=function(r){return i(r)===n},t.isProfiler=function(r){return i(r)===f},t.isStrictMode=function(r){return i(r)===s},t.isSuspense=function(r){return i(r)===I},t.isSuspenseList=function(r){return i(r)===h},t.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===m||r===f||r===s||r===I||r===h||typeof r=="object"&&r!==null&&(r.$$typeof===p||r.$$typeof===c||r.$$typeof===o||r.$$typeof===l||r.$$typeof===v||r.$$typeof===u||r.getModuleId!==void 0)},t.typeOf=i},81184:function(x,t,e){"use strict";x.exports=e(11607)},37797:function(x,t,e){"use strict";e.d(t,{D:function(){return m}});var n=e(53360);function m(s,f,l){const o=(0,n.useRef)({});return(!("value"in o.current)||l(o.current.condition,f))&&(o.current.value=s(),o.current.condition=f),o.current.value}},60164:function(x,t,e){"use strict";e.d(t,{L:function(){return f}});var n=e(53360),m=e(34028);const f=(0,m.J)()?n.useLayoutEffect:n.useEffect},7657:function(x,t,e){"use strict";e.d(t,{S:function(){return m}});var n=e(53360);function m(s){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return(0,n.useMemo)(()=>{const o=j(j({},f),l),v=j({},s);for(const I in o)v[I]===void 0&&(v[I]=o[I]);return v},[s,f,l])}},62222:function(x,t,e){"use strict";e.d(t,{R:function(){return f}});var n=e(53360),m=e(80703),s=e(45844);function f(l,o){const{defaultValue:v,value:I,onChange:h}=o||{},[c,p]=(0,n.useState)(()=>(0,m.o8)(I)?(0,m.o8)(v)?(0,m.mf)(l)?l():l:(0,m.mf)(v)?v():v:I),d=(0,s.D)(I),u=(0,n.useRef)(!0);(0,n.useEffect)(()=>{if(u.current){u.current=!1;return}(0,m.o8)(I)&&d.current!==I&&p(I)},[I]);const i=(0,m.o8)(I)?c:I,r=(0,n.useCallback)(a=>{const P=(0,m.mf)(a)?a(i):a;(0,m.o8)(I)&&p(P),!Object.is(P,i)&&(h==null||h(P))},[I,i,h]);return[i,r]}},45844:function(x,t,e){"use strict";e.d(t,{D:function(){return m}});var n=e(53360);function m(s){const f=(0,n.useRef)(void 0);return(0,n.useEffect)(()=>{f.current=s},[s]),f}},8240:function(x,t,e){"use strict";e.d(t,{y:function(){return l}});var n=e(53360),m=e(20759),s=e(34028),f=e(60164);function l(o,v){let I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const h=(0,n.useRef)(null);h.current=v,(0,f.L)(()=>{let c=null;if(!I||!(0,s.J)()||!o)return;const p=d=>{var u;(u=h.current)==null||u.call(h,d)};return c=new m.Z(p),c.observe(o),()=>{if(c&&o){var d;c.unobserve(o),(d=c.disconnect)==null||d.call(c),c=null}}},[o,I])}},31136:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360);const s=(0,n.createContext)({})},37907:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(7829),s=e(31136);const f=(0,n.forwardRef)((o,v)=>{const y=o,{svg:I,type:h,spin:c,rotate:p,className:d,style:u}=y,i=Ze(y,["svg","type","spin","rotate","className","style"]),{prefixCls:r="sqi"}=(0,n.useContext)(s.Z),a=(0,m.default)(`${r}-icon`,{[`${r}-icon-spin`]:!!c&&!!I},d),P=u||{};return Number.isSafeInteger(p)&&(P.transform=`rotate(${p}deg)`),n.createElement("span",j({role:"img",ref:v,"aria-label":h,className:a,style:P},i),I)});f.displayName="Icon";const l=f},46874:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"add",ref:v},o)));f.displayName="AddIcon";const l=f},1824:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("g",{clipPath:"url(#clip0_8726_7319)"},(0,n.createElement)("path",{d:"M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z",fill:"currentColor"})))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"browse",ref:v},o)));f.displayName="BrowseIcon";const l=f},85569:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"browse-off",ref:v},o)));f.displayName="BrowseOffIcon";const l=f},23436:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"check-circle-filled",ref:v},o)));f.displayName="CheckCircleFilledIcon";const l=f},46608:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"chevron-down",ref:v},o)));f.displayName="ChevronDownIcon";const l=f},58360:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"close-circle-filled",ref:v},o)));f.displayName="CloseCircleFilledIcon";const l=f},27377:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"close",ref:v},o)));f.displayName="CloseIcon";const l=f},50397:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"info-circle-filled",ref:v},o)));f.displayName="InfoCircleFilledIcon";const l=f},60333:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.25C6.61556 2.25 2.25 6.61556 2.25 12C2.25 17.3844 6.61556 21.75 12 21.75V19.3125C7.96142 19.3125 4.6875 16.0386 4.6875 12C4.6875 7.96142 7.96142 4.6875 12 4.6875C16.0386 4.6875 19.3125 7.96142 19.3125 12H21.75C21.75 6.61556 17.3844 2.25 12 2.25Z",fill:"currentColor",fillOpacity:.9}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"loading",ref:v},o)));f.displayName="LoadingIcon";const l=f},36106:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"search",ref:v},o)));f.displayName="SearchIcon";const l=f},65466:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 2.58569L17.9142 8.49991L16.5 9.91412L13 6.41412L13 15.9999H11L11 6.41412L7.5 9.91412L6.08579 8.49991L12 2.58569ZM4.5 13.9999V18.9999H19.5V13.9999H21.5V20.9999H2.5V13.9999H4.5Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"upload",ref:v},o)));f.displayName="UploadIcon";const l=f},21925:function(x,t,e){"use strict";e.d(t,{Z:function(){return l}});var n=e(53360),m=e(37907);function s(o){return(0,n.createElement)("svg",j({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:"false","aria-hidden":"true"},o),(0,n.createElement)("path",{d:"M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z",fill:"currentColor"}))}const f=(0,n.forwardRef)((o,v)=>(0,n.createElement)(m.Z,j({svg:(0,n.createElement)(s),type:"warn-circle-filled",ref:v},o)));f.displayName="WarnCircleFilledIcon";const l=f},5629:function(x,t,e){"use strict";e.r(t),e.d(t,{AddIcon:function(){return s.Z},BrowseIcon:function(){return l.Z},BrowseOffIcon:function(){return f.Z},CheckCircleFilledIcon:function(){return o.Z},ChevronDownIcon:function(){return v.Z},CloseCircleFilledIcon:function(){return I.Z},CloseIcon:function(){return h.Z},IconContext:function(){return m.Z},InfoCircleFilledIcon:function(){return c.Z},LoadingIcon:function(){return p.Z},SearchIcon:function(){return d.Z},UploadIcon:function(){return u.Z},WarnCircleFilledIcon:function(){return i.Z},default:function(){return r}});var n=e(37907),m=e(31136),s=e(46874),f=e(85569),l=e(1824),o=e(23436),v=e(46608),I=e(58360),h=e(27377),c=e(50397),p=e(60333),d=e(36106),u=e(65466),i=e(21925);const r=n.Z},34028:function(x,t,e){"use strict";e.d(t,{J:function(){return n}});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},78831:function(x,t,e){"use strict";e.d(t,{D:function(){return n}});function n(m,s){let f=null;const l=function(){for(var o=arguments.length,v=new Array(o),I=0;I<o;I++)v[I]=arguments[I];f&&clearTimeout(f),f=setTimeout(()=>{m.apply(this,v),f=null},s)};return l.cancel=()=>{f&&(clearTimeout(f),f=null)},l}},80703:function(x,t,e){"use strict";e.d(t,{HD:function(){return l},Kn:function(){return o},Qr:function(){return v},hj:function(){return I},kJ:function(){return f},mf:function(){return m},o8:function(){return s}});const n=Object.prototype.toString;function m(h){return n.call(h)==="[object Function]"}function s(h){return h===void 0}function f(h){return n.call(h)==="[object Array]"}function l(h){return n.call(h)==="[object String]"}const o=h=>n.call(h)==="[object Object]",v=h=>{if(!o(h))return!0;for(const c in h)if(Object.prototype.hasOwnProperty.call(h,c))return!1;return!0},I=h=>n.call(h)==="[object Number]"&&!Number.isNaN(h)},12598:function(x,t,e){"use strict";e.d(t,{C:function(){return n}});function n(m,s){const f=Object.assign({},m);return Array.isArray(s)&&s.forEach(l=>{delete f[l]}),f}},6890:function(x,t,e){"use strict";e.d(t,{P:function(){return m}});var n=e(78831);function m(s,f){let l=null;const o=(0,n.D)(s,f),v=function(){for(var I=arguments.length,h=new Array(I),c=0;c<I;c++)h[c]=arguments[c];l===null?l=Date.now():Date.now()-l>=f&&(l=Date.now(),o.cancel()),o(...h)};return v.cancel=o.cancel,v}},92266:function(x,t,e){"use strict";e.d(t,{C:function(){return f},Z:function(){return l}});var n=e(53360),m=e(7829),s=e(62222);const f=(0,n.forwardRef)((o,v)=>{const T=o,{prefixCls:I,className:h,style:c,checked:p,disabled:d,defaultChecked:u=!1,type:i="checkbox",title:r,onChange:a,_getCheckedValue:P}=T,y=Ze(T,["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange","_getCheckedValue"]),[O,g]=(0,s.R)(u,{value:p});(0,n.useEffect)(()=>{P==null||P(O)},[O]);const b=(0,m.default)(I,h,{[`${I}-checked`]:O,[`${I}-disabled`]:d}),M=Z=>{d||("checked"in o||g(Z.target.checked),a==null||a({target:Pe(j({},o),{checked:Z.target.checked}),event:Z}))};return n.createElement("span",{className:b,title:r,style:c},n.createElement("input",Pe(j({},y),{className:`${I}-input`,ref:v,onChange:M,disabled:d,checked:O,type:i})),n.createElement("span",{className:`${I}-inner`}))});f.displayName="BaseCheckbox";const l=f},40549:function(x,t,e){"use strict";e.d(t,{Z:function(){return v}});var n=e(53360),m=e(7829),s=e(64508),f=e(80703),l=e(57577);const o=(0,n.forwardRef)((I,h)=>{const c=(0,n.useContext)(l.E),g=I,{children:p,name:d,prefixCls:u}=g,i=Ze(g,["children","name","prefixCls"]),[r,a]=(0,s.Y)(i),P=(0,n.isValidElement)(p);(0,n.useImperativeHandle)(h,()=>({toggle:a}));const y=`${u||c.prefixCls}${d?`-${d}`:""}`,O=(0,m.default)([`${y}-motion`],{[`${y}-motion-${r.status}`]:r.status});return(0,f.mf)(p)?r.isMounted?p(Pe(j({},r),{className:O,toggle:a})):null:P?r.isMounted?(0,n.cloneElement)(p,{className:(0,m.default)(p.props.className,O)}):null:p});o.displayName="CSSMotion";const v=o},4814:function(x,t,e){"use strict";e.d(t,{sQ:function(){return l},t4:function(){return c},x1:function(){return v}});var n=e(37797),m=e(80703),s=e(53360),f=e(11607);const l=function(){for(var p=arguments.length,d=new Array(p),u=0;u<p;u++)d[u]=arguments[u];const i=d.filter(Boolean);return i.length<=1?i[0]:r=>{d.forEach(a=>{o(a,r)})}},o=(p,d)=>{(0,m.mf)(p)?p(d):(0,m.Kn)(p)&&"current"in p&&(p.current=d)},v=function(){for(var p=arguments.length,d=new Array(p),u=0;u<p;u++)d[u]=arguments[u];return(0,n.D)(()=>l(...d),d,(i,r)=>i.length!==r.length||i.every((a,P)=>a!==r[P]))},I=p=>{var d,u;if(!p)return!1;const i=parseInt(s.version,10);if(h(p)&&i>=19)return!0;const r=(0,f.isMemo)(p)?p.type.type:p.type;return!(typeof r=="function"&&!((d=r.prototype)!=null&&d.render)&&r.$$typeof!==f.ForwardRef||typeof p=="function"&&!((u=p.prototype)!=null&&u.render)&&p.$$typeof!==f.ForwardRef)};function h(p){return(0,s.isValidElement)(p)&&!(0,f.isFragment)(p)}const c=p=>h(p)&&I(p)},21299:function(x,t,e){"use strict";e.d(t,{q:function(){return s}});var n=e(53360),m=e(11607);function s(f){let l=[];return n.Children.toArray(f).forEach(o=>{o!=null&&(Array.isArray(o)?l=l.concat(s(o)):(0,n.isValidElement)(o)&&(0,m.isFragment)(o)&&o.props?l=l.concat(s(o.props.children)):l.push(o))}),l}},69203:function(x,t,e){"use strict";e.d(t,{b:function(){return a}});var n=e(27833),m=e(53360),s=e(7829),f=e(7657),l=e(23436),o=e(50397),v=e(58360),I=e(21925),h=e(27377),c=e(40549),p=e(57577);const d={type:"info",showIcon:!0},u={success:l.Z,info:o.Z,error:v.Z,warning:I.Z},i=(0,m.forwardRef)((y,O)=>{const g=(0,n.c)(38),{prefixCls:b,componentConfig:M}=(0,m.useContext)(p.E),{className:T,style:Z,title:J,description:k,type:w,closable:L,showIcon:W,action:A,icon:V,onClose:F}=(0,f.S)(y,d,M==null?void 0:M.Alert),z=(0,m.useRef)(null);let Q;g[0]!==V||g[1]!==w?(Q=()=>(0,m.isValidElement)(V)?V:w?(0,m.createElement)(u[w]):null,g[0]=V,g[1]=w,g[2]=Q):Q=g[2];const R=Q,S=`${b}-alert`,N=`${b}-alert-${w}`;let H;g[3]!==T||g[4]!==S||g[5]!==N?(H=(0,s.default)(S,N,T),g[3]=T,g[4]=S,g[5]=N,g[6]=H):H=g[6];const K=H;let xe;g[7]!==F?(xe=ge=>{var Re;(Re=z.current)==null||Re.toggle(),F==null||F(ge)},g[7]=F,g[8]=xe):xe=g[8];const G=xe;let ae;g[9]!==b||g[10]!==R||g[11]!==W?(ae=W&&m.createElement("div",{className:`${b}-alert-icon`},R()),g[9]=b,g[10]=R,g[11]=W,g[12]=ae):ae=g[12];const ce=`${b}-alert-content`;let B;g[13]!==b||g[14]!==J?(B=!!J&&m.createElement("div",{className:`${b}-alert-title`},J),g[13]=b,g[14]=J,g[15]=B):B=g[15];const $=`${b}-alert-description`;let q;g[16]!==k||g[17]!==$?(q=m.createElement("div",{className:$},k),g[16]=k,g[17]=$,g[18]=q):q=g[18];let D;g[19]!==ce||g[20]!==B||g[21]!==q?(D=m.createElement("div",{className:ce},B,q),g[19]=ce,g[20]=B,g[21]=q,g[22]=D):D=g[22];let fe;g[23]!==A||g[24]!==b?(fe=A&&m.createElement("div",{className:`${b}-alert-action`},A),g[23]=A,g[24]=b,g[25]=fe):fe=g[25];let Ce;g[26]!==L||g[27]!==G||g[28]!==b?(Ce=L&&m.createElement("button",{type:"button",className:`${b}-alert-close`,onClick:G},m.createElement(h.Z,null)),g[26]=L,g[27]=G,g[28]=b,g[29]=Ce):Ce=g[29];let _;return g[30]!==K||g[31]!==O||g[32]!==Z||g[33]!==D||g[34]!==fe||g[35]!==Ce||g[36]!==ae?(_=m.createElement(c.Z,{ref:z,timeout:200,name:"alert",unmountOnExit:!0,initialEntered:!0},m.createElement("div",{role:"alert",className:K,style:Z,ref:O},ae,D,fe,Ce)),g[30]=K,g[31]=O,g[32]=Z,g[33]=D,g[34]=fe,g[35]=Ce,g[36]=ae,g[37]=_):_=g[37],_});i.displayName="Alert";const a=i,P=null},60884:function(x,t,e){"use strict";e.d(t,{z:function(){return h}});var n=e(53360),m=e(7829),s=e(60333),f=e(7657),l=e(57577);const o={type:"default",variant:"default",htmlType:"button"},v=(0,n.forwardRef)((p,d)=>{const{prefixCls:u,size:i="md",componentConfig:r}=(0,n.useContext)(l.E),R=(0,f.S)(p,o,r==null?void 0:r.Button),{children:P,type:y,size:O=i,htmlType:g,status:b,loading:M,disabled:T,variant:Z,icon:J,href:k,target:w,onClick:L,anchorProps:W={}}=R,A=Ze(R,["children","type","size","htmlType","status","loading","disabled","variant","icon","href","target","onClick","anchorProps"]),V=M?n.createElement(s.Z,{spin:M}):J,F=k?"link":y,z=(0,m.default)(`${u}-btn`,`${u}-btn-${F}`,{[`${u}-btn-size-${O}`]:O,[`${u}-btn-status-${b}`]:!!b,[`${u}-btn-variant-${Z}`]:Z,[`${u}-btn-loading`]:M,[`${u}-btn-disabled`]:T}),Q=S=>{if(M||T)return void S.preventDefault();L==null||L(S)};return k?n.createElement("a",Pe(j({},W),{href:k,target:w,className:z,onClick:Q,ref:d}),V,n.createElement("span",null,P)):n.createElement("button",Pe(j({},A),{type:g,className:z,onClick:Q,ref:d}),V,n.createElement("span",null,P))});v.displayName="Button";const h=v,c=null},67824:function(x,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),m=e(7829),s=e(7657),f=e(45844),l=e(80703),o=e(92266),v=e(4814),I=e(57577),h=e(81372);const c={defaultChecked:!1,indeterminate:!1},p=(0,n.forwardRef)((u,i)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(I.E),P=(0,n.useContext)(h.w),F=(0,s.S)(u,c,a==null?void 0:a.Checkbox),{children:y,style:O,className:g,indeterminate:b}=F,M=Ze(F,["children","style","className","indeterminate"]),[T,Z]=(0,n.useState)(!1),J="disabled"in M?M.disabled:P.disabled,k=(0,f.D)(M.value),w=(0,n.useRef)(null);(0,n.useEffect)(()=>{var z;(z=P.registerValue)==null||z.call(P,M.value)},[P,M.value]),(0,n.useEffect)(()=>{if(M.value!==k.current){var z,Q;(z=P.unregisterValue)==null||z.call(P,k.current),(Q=P.registerValue)==null||Q.call(P,M.value)}return()=>{var R;return(R=P.unregisterValue)==null?void 0:R.call(P,M.value)}},[P,M.value]),(0,n.useEffect)(()=>{w.current&&(w.current.indeterminate=b)},[b]);const L=j({},M);(0,l.Qr)(P)||(L.onChange=function(){for(var z=arguments.length,Q=new Array(z),R=0;R<z;R++)Q[R]=arguments[R];var S,N;(S=M.onChange)==null||S.call(M,...Q),(N=P.toggleOption)==null||N.call(P,M.value)},L.name=P.name,L.checked=P.value.includes(M.value));const W=(0,m.default)(`${r}-checkbox-wrapper`,{[`${r}-checkbox-wrapper-checked`]:L.checked,[`${r}-checkbox-wrapper-disabled`]:J},g),A=z=>{if((0,l.mf)(y)){var Q;z.preventDefault(),(Q=w.current)==null||Q.click()}},V=()=>(0,l.o8)(y)?null:(0,l.mf)(y)?y({checked:"checked"in L?!!L.checked:T}):n.createElement("span",{className:`${r}-checkbox-label`},y);return n.createElement("label",{className:W,onClick:A},n.createElement(o.C,Pe(j({},L),{type:"checkbox",ref:(0,v.sQ)(i,w),disabled:J,prefixCls:`${r}-checkbox`,className:(0,m.default)({[`${r}-checkbox-indeterminate`]:b}),style:Pe(j({},O),{display:(0,l.mf)(y)?"none":void 0}),_getCheckedValue:Z})),V())});p.displayName="Checkbox";const d=p},56104:function(x,t,e){"use strict";e.d(t,{Z:function(){return c}});var n=e(53360),m=e(7829),s=e(7657),f=e(80703),l=e(57577),o=e(81372),v=e(67824);const I={},h=(0,n.forwardRef)((p,d)=>{const{prefixCls:u,componentConfig:i}=(0,n.useContext)(l.E),r=(0,n.useId)(),N=(0,s.S)(p,I,i==null?void 0:i.CheckboxGroup),{defaultValue:a,children:P,options:y,className:O,style:g,disabled:b,name:M=r,onChange:T,renderOption:Z}=N,J=Ze(N,["defaultValue","children","options","className","style","disabled","name","onChange","renderOption"]),[k,w]=(0,n.useState)(J.value||a||[]),[L,W]=(0,n.useState)([]),A=(0,n.useRef)([]);(0,n.useEffect)(()=>{A.current=L},[L]),(0,n.useEffect)(()=>{"value"in J&&w(J.value||[])},[J.value]);const V=(0,n.useCallback)(H=>{W(K=>[...K,H])},[]),F=(0,n.useCallback)(H=>{W(K=>K.filter(xe=>xe!==H))},[]),z=(0,n.useMemo)(()=>y==null?void 0:y.map(H=>(0,f.HD)(H)||(0,f.hj)(H)?{label:H,value:H}:H),[y]),Q=(0,n.useCallback)(H=>{const K=[...k],xe=k.indexOf(H);xe===-1?K.push(H):K.splice(xe,1),"value"in J||w(K);const G=K.filter(ae=>A.current.includes(ae));T==null||T(G)},[k,T]);let R=P;if((0,f.kJ)(z)&&z.length>0){const H=(0,f.mf)(Z);R=z.map(K=>{const xe=k.includes(K.value),G=H?()=>Z(Pe(j({},K),{checked:xe})):K.label;return n.createElement(v.Z,{key:`checkbox-group-options-${K.value}`,className:K.className,style:K.style,disabled:"disabled"in K?K.disabled:b,value:K.value,checked:xe,id:K.id,title:K.title,onChange:K.onChange},G)})}const S=(0,n.useMemo)(()=>({name:M,value:k,disabled:b,toggleOption:Q,registerValue:V,unregisterValue:F}),[M,k,b,Q,V,F]);return n.createElement("div",{className:(0,m.default)(`${u}-checkbox-group`,O),style:g,ref:d},n.createElement(o.w.Provider,{value:S},R))});h.displayName="CheckboxGroup";const c=h},81372:function(x,t,e){"use strict";e.d(t,{w:function(){return m}});var n=e(53360);const m=(0,n.createContext)({})},89946:function(x,t,e){"use strict";e.r(t),e.d(t,{Checkbox:function(){return v},CheckboxGroup:function(){return I},default:function(){return h}});var n=e(67824),m=e(56104),s=e(558),f=e.n(s),l={};for(var o in s)["default","Checkbox","CheckboxGroup"].indexOf(o)<0&&(l[o]=function(c){return s[c]}.bind(0,o));e.d(t,l);const v=n.Z;v.Group=m.Z;const I=v.Group,h=v},558:function(){},57577:function(x,t,e){"use strict";e.d(t,{$:function(){return m},E:function(){return s}});var n=e(53360);const m={componentConfig:{},prefixCls:"sqi",iconPrefix:"sqi"},s=(0,n.createContext)(m)},83405:function(x,t,e){"use strict";e.d(t,{i:function(){return I}});var n=e(27833),m=e(53360),s=e(12598),f=e(7657),l=e(31136),o=e(57577);function v(h){const c=(0,n.c)(11),p=(0,f.S)(h,o.$),{iconPrefix:d,children:u}=p;let i;c[0]!==p?(i=(0,s.C)(p,["children","iconPrefix"]),c[0]=p,c[1]=i):i=c[1];const r=i,a=d?l.Z.Provider:m.Fragment;let P;c[2]!==d?(P={prefixCls:d},c[2]=d,c[3]=P):P=c[3];let y;c[4]!==a||c[5]!==u||c[6]!==P?(y=m.createElement(a,{value:P},u),c[4]=a,c[5]=u,c[6]=P,c[7]=y):y=c[7];let O;return c[8]!==r||c[9]!==y?(O=m.createElement(o.E.Provider,{value:r},y),c[8]=r,c[9]=y,c[10]=O):O=c[10],O}v.displayName="ConfigProvider";const I=v},48380:function(x,t,e){"use strict";e.d(t,{i:function(){return I}});var n=e(53360),m=e(7829),s=e(7657),f=e(57577);const l={direction:"horizontal",align:"center"},o=(0,n.forwardRef)((c,p)=>{const{prefixCls:d,componentConfig:u}=(0,n.useContext)(f.E),i=(0,s.S)(c,l,u==null?void 0:u.Divider),{direction:r,align:a,dashed:P,className:y,children:O,text:g,style:b}=i,M=O||g,T=r!=="vertical"&&!!M,Z=(0,m.default)(`${d}-divider`,{[`${d}-divider-${r}`]:r,[`${d}-divider-with-text`]:T,[`${d}-divider-with-text-${a}`]:T,[`${d}-divider-dashed`]:!!P,className:y});return n.createElement("div",{className:Z,style:b,ref:p},T&&n.createElement("span",{className:`${d}-divider-inner-text`},M))});o.displayName="Divider";const I=o,h=null},17599:function(x,t,e){"use strict";e.d(t,{J:function(){return k},X:function(){return J}});var n=e(53360),m=e(7829),s=e(7657),f=e(80703),l=e(57577);const o=["xxl","xl","lg","md","sm","xs"],v={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},I=Object.keys(v),h=new Map;let c=-1,p={};const u={handlers:{},dispatch(w){return p=w,h.forEach(L=>{L(p)}),h.size>=1},subscribe(w){return h.size||this.register(),c+=1,h.set(c,w),w(p),c},unsubscribe(w){h.delete(w),h.size||this.unregister()},register(){I.forEach(w=>{const L=V=>{let{matches:F}=V;this.dispatch(Pe(j({},p),{[w]:F}))},W=v[w],A=window.matchMedia(W);A.addListener(L),this.handlers[W]={mql:A,listener:L},L(A)})},unregister(){I.forEach(w=>{const L=v[w],W=this.handlers[L];W==null||W.mql.removeListener(W==null?void 0:W.listener)}),h.clear()}},r=(0,n.createContext)({}),a={gutter:0,align:"start",justify:"start",wrap:!0},P=(0,n.forwardRef)((w,L)=>{const{prefixCls:W,componentConfig:A}=(0,n.useContext)(l.E),_=(0,s.S)(w,a,A==null?void 0:A.Row),{align:V,justify:F,gutter:z,className:Q,wrap:R,children:S,style:N}=_,H=Ze(_,["align","justify","gutter","className","wrap","children","style"]),[K,xe]=(0,n.useState)({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1});(0,n.useEffect)(()=>{const ge=u.subscribe(Re=>{((0,f.Kn)(z)||(0,f.kJ)(z)&&((0,f.Kn)(z[0])||(0,f.Kn)(z[1])))&&xe(Re)});return()=>u.unsubscribe(ge)},[z]);const G=ae();function ae(){const ge=[void 0,void 0];return((0,f.kJ)(z)?z:[z,void 0]).forEach((C,Y)=>{if((0,f.Kn)(C))for(let E=0;E<o.length;E++){const te=o[E];if(K[te]&&C[te]!==void 0){ge[Y]=C[te];break}}else ge[Y]=C}),ge}const ce=(0,m.default)(`${W}-row`,{[`${W}-row-nowrap`]:R===!1,[`${W}-row-align-${V}`]:V,[`${W}-row-justify-${F}`]:F},Q),[B,$]=G,q=(0,n.useMemo)(()=>({gutter:[B,$],wrap:R}),[B,$,R]),D={},fe=(0,f.hj)(B)&&B!==0,Ce=(0,f.hj)($)&&$!==0;if(fe||Ce){const ge=-B/2,Re=-$/2;ge&&(D.marginLeft=ge,D.marginRight=ge),Re&&(D.marginTop=Re,D.marginBottom=Re)}return n.createElement(r.Provider,{value:q},n.createElement("div",Pe(j({},H),{ref:L,className:ce,style:j(j({},N),D)}),S))});P.displayName="Row";const y=P,O={offset:0};function g(w){return(0,f.hj)(w)?`${w} ${w} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(w)?`0 0 ${w}`:w}const b=["xs","sm","md","lg","xl","xxl"],M=(w,L)=>{let W={};return b.forEach(A=>{const V=w[A];if(!V)return;let F={};(0,f.hj)(V)?F.span=V:(0,f.Kn)(V)&&(F=V),W=Pe(j({},W),{[`${L}-col-${A}-${F.span}`]:(0,f.hj)(F.span),[`${L}-col-${A}-order-${F.order}`]:F.order,[`${L}-col-${A}-offset-${F.offset}`]:F.offset})}),W},T=(0,n.forwardRef)((w,L)=>{const{componentConfig:W,prefixCls:A}=(0,n.useContext)(l.E),{gutter:V}=(0,n.useContext)(r),_=(0,s.S)(w,O,W==null?void 0:W.Col),{span:F,offset:z,children:Q,className:R,style:S,flex:N,order:H,xs:K,sm:xe,md:G,lg:ae,xl:ce,xxl:B}=_,$=Ze(_,["span","offset","children","className","style","flex","order","xs","sm","md","lg","xl","xxl"]),q=M({xs:K,sm:xe,md:G,lg:ae,xl:ce,xxl:B},A),D=(0,m.default)(`${A}-col`,{[`${A}-col-${F}`]:(0,f.hj)(F),[`${A}-col-offset-${z}`]:z,[`${A}-col-order-${H}`]:H},q,R),fe={};if(V){const ge=V[0]?V[0]/2:0,Re=V[1]?V[1]/2:0;ge&&(fe.paddingLeft=ge,fe.paddingRight=ge),Re&&(fe.paddingTop=Re,fe.paddingBottom=Re)}const Ce={};return N&&(Ce.flex=g(N)),n.createElement("div",Pe(j({ref:L},$),{className:D,style:j(j(j({},S),Ce),fe)}),Q)});T.displayName="Col";const Z=T,J=y,k=Z},45990:function(x,t,e){"use strict";e.r(t),e.d(t,{Alert:function(){return n.b},Button:function(){return m.z},Col:function(){return v.J},ConfigProvider:function(){return l.i},Divider:function(){return o.i},Input:function(){return I.I},Popup:function(){return h.G},Row:function(){return v.X},Space:function(){return p.T},Switch:function(){return d.r}});var n=e(69203),m=e(60884),s=e(89946),i={};for(var f in s)["default","Alert","Button"].indexOf(f)<0&&(i[f]=function(r){return s[r]}.bind(0,f));e.d(t,i);var l=e(83405),o=e(48380),v=e(17599),I=e(38312),h=e(58692),c=e(37663),i={};for(var f in c)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup"].indexOf(f)<0&&(i[f]=function(a){return c[a]}.bind(0,f));e.d(t,i);var p=e(92595),d=e(9090),u=e(36112),i={};for(var f in u)["default","Alert","Button","Checkbox","CheckboxGroup","ConfigProvider","Divider","Col","Row","Input","Popup","Radio","RadioButton","RadioGroup","Space","Switch"].indexOf(f)<0&&(i[f]=function(a){return u[a]}.bind(0,f));e.d(t,i)},38312:function(x,t,e){"use strict";e.d(t,{I:function(){return i}});var n=e(53360),m=e(7829),s=e(7657),f=e(62222),l=e(80703),o=e(58360),v=e(85569),I=e(1824),h=e(57577);const c={type:"text",size:"md",align:"left",visibilityToggle:!0};function p(a,P,y){let O;return O=a===null||(0,l.o8)(a)||(0,l.HD)(a)?a||"":String(a),(0,l.hj)(P)&&!y?O.slice(0,P):O}const d=(0,n.forwardRef)((a,P)=>{const{prefixCls:y,componentConfig:O}=(0,n.useContext)(h.E),We=(0,s.S)(a,c,O==null?void 0:O.Input),{size:g,status:b,align:M,disabled:T,allowClear:Z,placeholder:J,variant:k="outline",addonBefore:w,addonAfter:L,prefix:W,suffix:A,value:V,defaultValue:F,type:z,className:Q,style:R,readOnly:S,visibilityToggle:N,maxLength:H,tips:K,onFocus:xe,onBlur:G,onChange:ae}=We,ce=Ze(We,["size","status","align","disabled","allowClear","placeholder","variant","addonBefore","addonAfter","prefix","suffix","value","defaultValue","type","className","style","readOnly","visibilityToggle","maxLength","tips","onFocus","onBlur","onChange"]),B=(0,n.useRef)(null),$=(0,n.useRef)(null);(0,n.useImperativeHandle)(P,()=>({currentElement:B.current,inputElement:$.current,focus:()=>{var me;return(me=$.current)==null?void 0:me.focus()},blur:()=>{var me;return(me=$.current)==null?void 0:me.blur()},select:()=>{var me;return(me=$.current)==null?void 0:me.select()}}));const[q,D]=(0,n.useState)(!1),fe=me=>{T||S||(D(!0),xe==null||xe(me))},Ce=me=>{T||S||(D(!1),G==null||G(me))},_=(0,l.hj)(H)?H:H==null?void 0:H.length,ge=(0,l.hj)(H)?!1:H==null?void 0:H.errorOnly,Re=(0,l.hj)(H)?!0:(H==null?void 0:H.showLimit)!==!1,[C,Y]=(0,f.R)(F,{value:V}),E=p(C,_,ge),te=(0,l.hj)(_)?E.length>_:!1,ie=me=>{const{value:Le}=me.target;Y(Le),ae==null||ae(Le,me)},re=()=>{var me;T||(me=$.current)==null||me.focus()},le=(0,m.default)(`${y}-input`,{[`${y}-input-variant-${k}`]:k,[`${y}-input-size-${g}`]:g,[`${y}-input-disabled`]:T,[`${y}-input-align-${M}`]:M,[`${y}-input-status-${b}`]:b,[`${y}-input-focus`]:q,[`${y}-input-limit-length-error`]:te},Q),ve=(0,m.default)(`${y}-input-real`),ee=Z&&E&&!T,U=n.createElement(o.Z,null),ue=me=>{me.stopPropagation(),Y(""),ae==null||ae("",me)},X=ee&&n.createElement("button",{type:"button",tabIndex:-1,className:(0,m.default)(`${y}-input-suffix`,`${y}-input-clear`),onClick:ue},U),ne=(0,l.Kn)(N)&&!(0,l.o8)(N.visible),[Ie,De]=(0,n.useState)(z),ye=(0,l.Kn)(N)?N.visible:N;(0,n.useEffect)(()=>{De(ne?ye?"text":"password":z)},[z,ne,ye]);const se=()=>{if(T)return;const me=Ie==="password"?"text":"password";if(De(me),ne){var Le;(Le=N.onVisibleChange)==null||Le.call(N,me==="text")}},Se=z==="password",oe=(0,n.useMemo)(()=>Se?(0,l.Kn)(N)&&(0,l.mf)(N.renderIcon)?N.renderIcon(Ie==="text"):Ie==="password"?n.createElement(v.Z,null):Ie==="text"?n.createElement(I.Z,null):null:A,[Se,Ie,N,A]),pe=(0,n.useMemo)(()=>function(me){let{children:Le}=me;const Ne=w||L;let $e=Le;return Ne&&($e=n.createElement("div",{ref:B,className:`${y}-input-group`},$e)),K&&($e=n.createElement("div",{ref:B,className:`${y}-input-group-extra`},$e)),$e},[y,w,L,K]),de=W&&n.createElement("span",{className:`${y}-input-prefix`},W),Ee=oe&&n.createElement("span",{role:"button",tabIndex:-1,className:(0,m.default)(`${y}-input-suffix`,{[`${y}-input-suffix-password`]:Se}),onClick:se,onMouseDown:me=>me.preventDefault(),onMouseUp:me=>me.preventDefault()},oe),Ke=(0,l.hj)(_)&&Re&&n.createElement("span",{className:`${y}-input-limit-length-text`},E.length,"/",_),ze=K&&n.createElement("div",{className:(0,m.default)(`${y}-input-tips`,{[`${y}-input-tips-status-${b}`]:b})},K),Be=n.createElement("span",{role:"group",ref:w||L?void 0:B,className:le,style:R,onClick:re},de,n.createElement("input",Pe(j({ref:$},ce),{type:Ie,value:E,readOnly:S,className:ve,placeholder:J,disabled:T,onChange:ie,onFocus:fe,onBlur:Ce})),X,Ee,Ke),Te=w&&n.createElement("span",{className:(0,m.default)(`${y}-input-group-addon`)},w),Ge=L&&n.createElement("span",{className:(0,m.default)(`${y}-input-group-addon`)},L);return n.createElement(pe,null,Te,Be,Ge,ze)});d.displayName="Input";const i=d,r=null},58692:function(x,t,e){"use strict";e.d(t,{G:function(){return c}});var n=e(27833),m=e(53360),s=e(7657),f=e(57577),l=e(36112),o=e(7829);const v={trigger:"hover",direction:"top",showArrow:!0,destroyOnClose:!0,offset:4},I=(0,m.forwardRef)((d,u)=>{var H;const i=(0,n.c)(32),{prefixCls:r,componentConfig:a}=(0,m.useContext)(f.E),P=(0,s.S)(d,v,a==null?void 0:a.Popup);let y,O,g,b,M,T,Z;i[0]!==P?(H=P,{children:y,content:g,destroyOnClose:b,showArrow:T,styles:Z,classNames:O}=H,M=Ze(H,["children","content","destroyOnClose","showArrow","styles","classNames"]),i[0]=P,i[1]=y,i[2]=O,i[3]=g,i[4]=b,i[5]=M,i[6]=T,i[7]=Z):(y=i[1],O=i[2],g=i[3],b=i[4],M=i[5],T=i[6],Z=i[7]);const J=(0,m.useRef)(null);let k;if(i[8]===Symbol.for("react.memo_cache_sentinel")?(k=()=>J.current,i[8]=k):k=i[8],(0,m.useImperativeHandle)(u,k),!y)return null;let w;i[9]!==y?(w=(0,m.isValidElement)(y)?y:m.createElement("span",null,y),i[9]=y,i[10]=w):w=i[10];const L=w,W=`${r}-popup`;let A;i[11]!==b?(A={timeout:200,name:"popup",mountOnEnter:!0,preEnter:!0,unmountOnExit:b},i[11]=b,i[12]=A):A=i[12];const V=Z==null?void 0:Z.content,F=`${r}-popup-content`,z=O==null?void 0:O.content;let Q;i[13]!==F||i[14]!==z?(Q=(0,o.default)(F,z),i[13]=F,i[14]=z,i[15]=Q):Q=i[15];let R;i[16]!==g||i[17]!==V||i[18]!==Q?(R=m.createElement("div",{style:V,className:Q},g),i[16]=g,i[17]=V,i[18]=Q,i[19]=R):R=i[19];let S;i[20]!==(O==null?void 0:O.arrow)||i[21]!==r||i[22]!==T||i[23]!==(Z==null?void 0:Z.arrow)?(S=T?m.createElement("div",{style:Z==null?void 0:Z.arrow,className:(0,o.default)(`${r}-popup-arrow`,O==null?void 0:O.arrow)}):void 0,i[20]=O==null?void 0:O.arrow,i[21]=r,i[22]=T,i[23]=Z==null?void 0:Z.arrow,i[24]=S):S=i[24];let N;return i[25]!==M||i[26]!==S||i[27]!==W||i[28]!==A||i[29]!==R||i[30]!==L?(N=m.createElement(l.default,Pe(j({},M),{ref:J,className:W,motion:A,popper:R,arrow:S}),L),i[25]=M,i[26]=S,i[27]=W,i[28]=A,i[29]=R,i[30]=L,i[31]=N):N=i[31],N});I.displayName="Popup";const c=I,p=null},74052:function(x,t,e){"use strict";e.d(t,{Z:function(){return p}});var n=e(53360),m=e(7829),s=e(7657),f=e(80703),l=e(92266),o=e(4814),v=e(57577),I=e(83595);const h={defaultChecked:!1},c=(0,n.forwardRef)((d,u)=>{const{prefixCls:i,componentConfig:r}=(0,n.useContext)(v.E),a=(0,n.useContext)(I.Z),z=(0,s.S)(d,h,r==null?void 0:r.Radio),{_IS_BUTTON_:P,value:y,children:O,style:g}=z,b=Ze(z,["_IS_BUTTON_","value","children","style"]),M=Q=>{var R,S;(R=b.onChange)==null||R.call(b,Q),a==null||(S=a.onChange)==null||S.call(a,Q)},T=j({},b);let Z="md";if(!(0,f.Qr)(a)){T.name=a.name,T.onChange=M,T.checked=y===a.value;var J;T.disabled=(J=T.disabled)!=null?J:a.disabled,Z=a.size?a.size:Z}const[k,w]=(0,n.useState)(!1),L=P?`${i}-radio-button`:`${i}-radio`,W=(0,m.default)(`${L}-wrapper`,{[`${L}-wrapper-disabled`]:T.disabled,[`${L}-wrapper-checked`]:T.checked,[`${L}-wrapper-size-${Z}`]:Z,[`${L}-wrapper-filled`]:a.buttonVariant==="filled"}),A=()=>(0,f.o8)(O)?null:(0,f.mf)(O)?O({checked:"checked"in T?!!T.checked:k}):n.createElement("span",{className:`${L}-label`},O),V=(0,n.useRef)(null),F=Q=>{if((0,f.mf)(O)){var R;Q.preventDefault(),(R=V.current)==null||R.click()}};return n.createElement("label",{className:W,onClick:F},n.createElement(l.Z,Pe(j(j({},b),T),{ref:(0,o.sQ)(u,V),value:y,type:"radio",prefixCls:L,style:Pe(j({},g),{display:(0,f.mf)(O)?"none":void 0}),disabled:T.disabled,_getCheckedValue:w})),A())});c.displayName="Radio";const p=c},89312:function(x,t,e){"use strict";e.d(t,{Z:function(){return o}});var n=e(27833),m=e.n(n),s=e(53360),f=e(74052);const l=(0,s.forwardRef)((v,I)=>{const h=(0,n.c)(3);let c;return h[0]!==v||h[1]!==I?(c=s.createElement(f.Z,Pe(j({_IS_BUTTON_:!0},v),{ref:I})),h[0]=v,h[1]=I,h[2]=c):c=h[2],c});l.displayName="RadioButton";const o=l},59803:function(x,t,e){"use strict";e.d(t,{Z:function(){return d}});var n=e(53360),m=e(7829),s=e(7657),f=e(62222),l=e(80703),o=e(57577),v=e(83595),I=e(74052),h=e(89312);const c={disabled:!1,size:"md",appearance:"radio",buttonVariant:"outline"},p=(0,n.forwardRef)((u,i)=>{const{prefixCls:r,componentConfig:a}=(0,n.useContext)(o.E),P=(0,s.S)(u,c,a==null?void 0:a.RadioGroup),y=(0,n.useId)(),{className:O,style:g,name:b=y,value:M,defaultValue:T,children:Z,disabled:J,size:k,buttonVariant:w,renderOption:L,onChange:W,appearance:A,options:V}=P,[F,z]=(0,f.R)(T,{value:M}),Q=(0,n.useCallback)(H=>{const K=H.target.value;"value"in P||z(K),K!==F&&(W==null||W(H))},[P.value,F,W]);let R=Z;const S=A==="button"?h.Z:I.Z;if((0,l.kJ)(V)&&V.length>0){const H=(0,l.mf)(L);R=V.map(K=>{if((0,l.HD)(K)||(0,l.hj)(K)){const ae=F===K,ce=H?()=>L({label:K,value:K,checked:ae}):K;return n.createElement(S,{key:K.toString(),disabled:J,value:K,checked:ae},ce)}const xe=F===K.value,G=H?()=>L(Pe(j({},K),{checked:xe})):K.label;return n.createElement(S,{key:`radio-group-options-${K.value}`,className:K.className,style:K.style,disabled:K.disabled||J,value:K.value,checked:xe,id:K.id,title:K.title,onChange:K.onChange},G)})}const N=(0,n.useMemo)(()=>({name:b,value:F,disabled:J,size:k,buttonVariant:w,onChange:Q}),[b,F,J,k,w,Q]);return n.createElement("div",{ref:i,className:(0,m.default)(`${r}-radio-group`,O),style:g},n.createElement(v.Z.Provider,{value:N},R))});p.displayName="RadioGroup";const d=p},83595:function(x,t,e){"use strict";e.d(t,{Z:function(){return s}});var n=e(53360);const s=(0,n.createContext)({})},37663:function(x,t,e){"use strict";e.r(t),e.d(t,{Radio:function(){return I},RadioButton:function(){return c},RadioGroup:function(){return h},default:function(){return p}});var n=e(74052),m=e(89312),s=e(59803),f=e(63149),l=e.n(f),o={};for(var v in f)["default","Radio","RadioButton","RadioGroup"].indexOf(v)<0&&(o[v]=function(d){return f[d]}.bind(0,v));e.d(t,o);const I=n.Z;I.Group=s.Z,I.Button=m.Z;const h=I.Group,c=I.Button,p=I},63149:function(){},92595:function(x,t,e){"use strict";e.d(t,{T:function(){return p}});var n=e(53360),m=e(7829),s=e(80703),f=e(7657),l=e(21299),o=e(57577);const v={sm:8,md:16,lg:24},I={direction:"horizontal",align:"center",wrap:!1},h=(0,n.forwardRef)((u,i)=>{const{prefixCls:r,size:a="md",componentConfig:P}=(0,n.useContext)(o.E),F=(0,f.S)(u,I,P==null?void 0:P.Space),{className:O,children:g,size:b=a,direction:M="horizontal",align:T,split:Z,wrap:J=!1}=F,k=Ze(F,["className","children","size","direction","align","split","wrap"]),w=(0,l.q)(g),L=M==="horizontal"&&T===void 0?"center":T,W=(0,m.default)(`${r}-space`,`${r}-space-direction-${M}`,{[`${r}-space-align-${L}`]:L,[`${r}-space-wrap`]:J},O),A=(0,n.useCallback)(z=>{const Q=(0,s.kJ)(b)?b:[b,b],[R,S]=Q.map(N=>(0,s.HD)(N)?v[N]:N||0);return J?{marginRight:R,marginBottom:S}:M==="vertical"?{marginBottom:S}:{marginRight:z?void 0:R}},[b,M,J]),V=w.map((z,Q)=>{const R=Q===w.length-1;return n.createElement(n.Fragment,{key:`space-item-${Q.toString()}`},n.createElement("div",{className:"space-item",style:A(R)},z),!R&&Z&&n.createElement("span",{className:"sqi-space-item-split"},Z))});return n.createElement("div",Pe(j({className:W},k),{ref:i}),V)});h.displayName="Space";const p=h,d=null},9090:function(x,t,e){"use strict";e.d(t,{r:function(){return c}});var n=e(53360),m=e(7829),s=e(7657),f=e(62222),l=e(60333),o=e(57577);const v={label:[],loading:!1,disabled:!1},I=(0,n.forwardRef)((d,u)=>{const{prefixCls:i,size:r="md",componentConfig:a}=(0,n.useContext)(o.E),z=(0,s.S)(d,v,a==null?void 0:a.Switch),{checked:P,defaultChecked:y,className:O,disabled:g,size:b=r,label:M,loading:T,loadingIcon:Z,onChange:J,onClick:k}=z,w=Ze(z,["checked","defaultChecked","className","disabled","size","label","loading","loadingIcon","onChange","onClick"]),[L,W]=(0,f.R)(!1,{value:P,defaultValue:y});function A(Q){if(g||T)return;const R=!L;W(R),J==null||J(R,Q),k==null||k(R,Q)}const V=(0,m.default)(`${i}-switch`,{[`${i}-switch-checked`]:L,[`${i}-switch-disabled`]:g,[`${i}-switch-loading`]:T,[`${i}-switch-${b}`]:b},O),F=Z||n.createElement(l.Z,{spin:!0});return n.createElement("button",Pe(j({},w),{type:"button",role:"switch","aria-checked":L,ref:u,className:V,disabled:g||T,onClick:A}),n.createElement("div",{className:`${i}-switch-handle`},T&&F),n.createElement("div",{className:`${i}-switch-content`},L?M[0]:M[1]))});I.displayName="Switch";const c=I,p=null},67171:function(x,t,e){"use strict";e.d(t,{Z:function(){return Re}});var n=e(53360),m=e(7829),s=e(7657),f=e(62222),l=e(60164),o=e(6890),v=e(8240),I=e(21299);function h(C){return C instanceof HTMLElement||C instanceof SVGElement}function c(C){return C&&typeof C=="object"&&h(C.nativeElement)?C.nativeElement:h(C)?C:null}function p(C){if(C)return C.current&&typeof C.current=="object"&&"currentElement"in C.current?C.current.currentElement:C.current}function d(C){if(!(C&&(0,n.isValidElement)(C)))return null;if(parseInt(n.version,10)>=19){var E;return((E=C.props)==null?void 0:E.ref)||null}return C.ref}var u=e(4814);const i=(0,n.forwardRef)((C,Y)=>{const{children:E,disabled:te,throttleMs:ie=100,onResize:re}=C,le=(0,n.isValidElement)(E),ve=le?(0,I.q)(E):[],ee=le?d(E):null,U=(0,n.useRef)(null),ue=(0,u.x1)(ee,U),X=()=>p(U);(0,n.useImperativeHandle)(Y,()=>p(U));const ne=re?(0,o.P)(re,ie):void 0;return(0,v.y)(X(),ne,!te),le?(0,n.cloneElement)(E,{ref:ue}):E});i.displayName="ResizeObserverComponent";const r=i;var a=e(27833),P=e(86752),y=e(34028),O=e(80703);const g=(0,y.J)();function b(C){return g?(0,O.mf)(C)?C():document.body:null}const M=(0,n.forwardRef)((C,Y)=>{const E=(0,a.c)(25),{getContainer:te,prefixCls:ie,children:re,open:le,rootStyle:ve}=C,ee=le===void 0?!0:le,[U,ue]=(0,n.useState)(null),[X,ne]=(0,n.useState)(null),Ie=X||document.body;let De,ye;E[0]!==te?(De=()=>{const Te=b(te);ne(Te||null)},ye=[te],E[0]=te,E[1]=De,E[2]=ye):(De=E[1],ye=E[2]),(0,n.useEffect)(De,ye);let se;E[3]!==U||E[4]!==ie||E[5]!==ve?(se=()=>{if(!g||U)return null;const Te=document.createElement("div");ie&&(Te.className=`${ie}-portal-wrapper`),ve&&Object.assign(Te.style,ve),Te.setAttribute("data-portal","true"),ue(Te)},E[3]=U,E[4]=ie,E[5]=ve,E[6]=se):se=E[6];const Se=se;let oe;E[7]!==Se||E[8]!==ee?(oe=()=>{g&&(ee?Se():ue(null))},E[7]=Se,E[8]=ee,E[9]=oe):oe=E[9];let pe;E[10]!==ee?(pe=[ee],E[10]=ee,E[11]=pe):pe=E[11],(0,l.L)(oe,pe);let de,Ee;E[12]!==U?(de=()=>U,Ee=[U],E[12]=U,E[13]=de,E[14]=Ee):(de=E[13],Ee=E[14]),n.useImperativeHandle(Y,de,Ee);let Ke;E[15]!==U||E[16]!==Ie||E[17]!==ee?(Ke=()=>{if(!g||!U)return;const Te=()=>!U.parentNode&&Ie.appendChild(U),Ge=()=>{var We;return(We=U.parentNode)==null?void 0:We.removeChild(U)};return ee?Te():Ge(),()=>{Ge()}},E[15]=U,E[16]=Ie,E[17]=ee,E[18]=Ke):Ke=E[18];let ze;if(E[19]!==U||E[20]!==ee?(ze=[ee,U],E[19]=U,E[20]=ee,E[21]=ze):ze=E[21],(0,l.L)(Ke,ze),!(ee&&re))return null;let Be;return E[22]!==re||E[23]!==U?(Be=U?(0,P.createPortal)(re,U):null,E[22]=re,E[23]=U,E[24]=Be):Be=E[24],Be});M.displayName="Portal";const T=M;var Z=e(40549),J=e(57577);const k="Escape",L=C=>{const{trigger:Y,delay:E,disabled:te,visible:ie,clickOutsideClose:re,triggerEl:le,outFocusToClose:ve=!0,onVisibleChange:ee}=C,U=(0,n.useRef)(!1),ue=(0,n.useRef)(!1),X=(0,n.useRef)(null),ne=(0,n.useRef)(0);(0,n.useEffect)(()=>{if(te)return;const se=Se=>{var oe;!(le==null||(oe=le.contains)==null)&&oe.call(le,Se.target)||U.current||ie&&re&&(ee==null||ee(!1,{e:Se,trigger:"document"}))};return document.addEventListener("mousedown",se),document.addEventListener("touchend",se),()=>{document.removeEventListener("mousedown",se),document.removeEventListener("touchend",se)}},[te,ie,le,re,ee]);function Ie(se){E?(clearTimeout(X.current),X.current=setTimeout(se,E)):se()}function De(){return te?{}:{onMouseEnter:se=>{Y==="hover"&&!ue.current&&(clearTimeout(X.current),ee==null||ee(!0,{e:se,trigger:"hover"}))},onMouseLeave:se=>{Y==="hover"&&(ue.current=!0,clearTimeout(X.current),ee==null||ee(!1,{e:se,trigger:"hover"}))},onMouseDown:()=>{clearTimeout(ne.current),U.current=!0,ne.current=window.setTimeout(()=>{U.current=!1})},onTouchEnd:()=>{clearTimeout(ne.current),U.current=!0,ne.current=window.setTimeout(()=>{U.current=!1})}}}function ye(se){return te?{}:{onClick:oe=>{var pe,de;Y==="click"&&(oe.preventDefault(),oe.stopPropagation(),Ie(()=>ee==null?void 0:ee(!ie,{e:oe,trigger:"click"}))),(pe=(de=se.props).onClick)==null||pe.call(de,oe)},onTouchStart:oe=>{var pe,de;Y==="hover"&&(ue.current=!1,Ie(()=>ee==null?void 0:ee(!0,{e:oe,trigger:"hover"}))),(pe=(de=se.props).onTouchStart)==null||pe.call(de,oe)},onMouseEnter:oe=>{var pe,de;Y==="hover"&&(ue.current=!1,Ie(()=>ee==null?void 0:ee(!0,{e:oe,trigger:"hover"}))),(pe=(de=se.props).onMouseEnter)==null||pe.call(de,oe)},onMouseLeave:oe=>{var pe,de;Y==="hover"&&(ue.current=!1,Ie(()=>ee==null?void 0:ee(!1,{e:oe,trigger:"hover"}))),(pe=(de=se.props).onMouseLeave)==null||pe.call(de,oe)},onFocus:oe=>{var pe,de;Y==="focus"&&Ie(()=>ee==null?void 0:ee(!0,{e:oe,trigger:"focus"})),(pe=(de=se.props).onFocus)==null||pe.call(de,oe)},onBlur:oe=>{var pe,de;if(Y==="focus"){if(U.current&&!ve)return;Ie(()=>ee==null?void 0:ee(!1,{e:oe,trigger:"blur"}))}(pe=(de=se.props).onBlur)==null||pe.call(de,oe)},onContextMenu:oe=>{var pe,de;Y==="context-menu"&&(oe.preventDefault(),Ie(()=>ee==null?void 0:ee(!0,{e:oe,trigger:"context-menu"}))),(pe=(de=se.props).onContextMenu)==null||pe.call(de,oe)},onKeyDown:oe=>{var pe,de;(oe==null?void 0:oe.key)===k&&Ie(()=>ee==null?void 0:ee(!1,{e:oe,trigger:"keydown-esc"})),(pe=(de=se.props).onKeyDown)==null||pe.call(de,oe)}}}return{genPopupProps:De,genTriggerProps:ye}};function W(C,Y,E){const{top:te,left:ie,width:re,height:le}=C.getBoundingClientRect(),ve=te+E,ee=ie+Y;return{width:re,height:le,top:ve,bottom:ve+le,left:ee,right:ee+re}}function A(C,Y,E){const te=W(C,Y,E),ie=C.clientWidth,re=C.clientHeight,le=te.left+C.clientLeft,ve=te.top+C.clientTop;return{width:ie,height:re,top:ve,bottom:ve+re,left:le,right:le+ie}}function V(C){if(!C||C.tagName==="HTML")return;const Y=window.getComputedStyle(C),E=te=>["auto","scroll"].includes(te);return C.clientHeight<C.scrollHeight&&E(Y.overflowX)||C.clientWidth<C.scrollWidth&&E(Y.overflowY)?C:V(C.parentNode)}function F(C,Y){return Math.round(Math.abs(C))>Math.round(Math.abs(Y))?C:Y}const z=(C,Y)=>`translate3d(${C}px, ${Y}px, 0)`;function Q(C){if(!C)return[0,0];const Y=window.getComputedStyle(C),E=Y.transform||Y.webkitTransform||"none";if(E==="none")return[0,0];if(E.match(/matrix\(([^)]+)\)/)){var te,ie;const ve=((ie=E.match(/matrix\((.+)\)/))==null||(te=ie[1])==null?void 0:te.split(",").map(Number))||[0,0];if(ve.length===6)return[ve[4],ve[5]]}const[,re=0,le=0]=(E.match(/translate\((.*?)px,\s(.*?)px\)/)||[]).map(ve=>Number(ve));return[re,le]}function R(C){const Y=C.split("-"),E=Y[0],te=Y[1];let ie;const re=E==="top"||E==="bottom",le=E==="left"||E==="right";return re&&(te==="start"&&(ie="left"),te==="end"&&(ie="right")),le&&(te==="start"&&(ie="top"),te==="end"&&(ie="bottom")),[E,ie,re,le]}function S(C){return C?(0,O.Kn)(C)?[C.x||0,C.y||0]:[C||0,C||0]:[0,0]}const N={direction:"bottom",enableFlip:!0,enableShift:!0};function H(C,Y){const{reference:E,popper:te,arrow:ie}=C;if(!E||!te)return;const re=j(j({},N),Y),le=te.parentNode,[ve,ee]=Q(le),U=window.pageYOffset,ue=window.pageXOffset,X=W(E,ue,U),ne=W(te,ue,U),Ie=X.width-ne.width,De=X.height-ne.height;let ye=X.left-ne.left+ve,se=X.top-ne.top+ee;const[Se,oe,pe,de]=R(re.direction);let Ee=Se;const Ke=oe==="left"?0:oe==="right"?Ie:Ie/2,ze=Ie-Ke,Be=oe==="top"?0:oe==="bottom"?De:De/2,Te=De-Be;pe&&(ye+=Ke,se+=Se==="top"?-ne.height:X.height),de&&(ye+=Se==="left"?-ne.width:X.width,se+=Be);let Ge=V(E);const[We,me]=S(re.offset),{height:Le=0,width:Ne=0}=ie?W(ie,ue,U):{};let $e=0,Ve=0;for(;Ge;){const Fe=A(Ge,ue,U);Xe(Fe),Ge=V(Ge.parentNode)}const{clientHeight:Ye,clientWidth:Qe}=document.documentElement;Xe({top:U,bottom:U+Ye,left:ue,right:ue+Qe,height:Ye,width:Qe});const ke=re.direction.split("-")[1];le.setAttribute("data-direction",`${Ee}${ke?`-${ke}`:""}`),ye-=$e,se-=Ve,He(),pe&&(se+=Ee==="bottom"?me:-me),de&&(ye+=Ee==="right"?We:-We),le.style.transform=z(ye,se);function Xe(Fe){const{top:be,bottom:je,left:Me,right:Ue,height:he,width:Oe}=Fe;if(pe){const Ae=Math.round(X.top-be+X.height/2),we=Math.round(he/2);re.enableFlip&&qe(Ae,we),re.enableShift&&an()}if(de){const Ae=Math.round(X.left-Me+X.width/2),we=Math.round(Oe/2);re.enableFlip&&rn(Ae,we),re.enableShift&&sn()}function qe(Ae,we){const _e=X.top-(ne.height+me+Le)<be,en=X.bottom+ne.height+me+Le>he+be;_e&&Ae<=we&&Ee==="top"?(se+=ne.height+X.height,Ee="bottom"):en&&Ae>=we&&Ee==="bottom"&&(se-=ne.height+X.height,Ee="top")}function an(){if(X.left+Ke<Me){const Ae=X.left+Ke-Me,we=X.right-Ne>Me?Ae:-X.width+Ke+Ne;$e=F(we,$e)}if(X.right-ze>Ue){const Ae=X.right-ze-Ue,we=X.left+Ne<Ue?Ae:X.width-ze-Ne;$e=F(we,$e)}}function rn(Ae,we){const _e=X.left-(ne.width+We+Ne)<Me,en=X.right+ne.width+We+Ne>Ue;_e&&Ae<we&&Ee==="left"?(ye+=X.width+ne.width,Ee="right"):en&&Ae>we&&Ee==="right"&&(ye-=X.width+ne.width,Ee="left")}function sn(){if(X.top+Be<be){const Ae=X.top+Be-be,we=X.bottom-Le>be?Ae:-X.height+Be+Le;Ve=F(we,Ve)}if(X.bottom-Te>je){const Ae=X.bottom-Te-je,we=X.top+Le<je?Ae:X.height-Te-Le;Ve=F(we,Ve)}}}function He(){if(!ie)return;const{height:Fe,width:be}=W(ie,ue,U);pe?se+=Ee==="bottom"?Fe:-Fe:de&&(ye+=Ee==="right"?be:-be);const je=re.direction.split("-")[1]||"center",Me={x:0,y:0};if(pe){Me.y=Ee==="top"?ne.height:-Fe;const Ue=ne.width-be,he=0;if(je==="start")Me.x=Math.max(he,Math.min(Ue,$e));else if(je==="center"){const Oe=(ne.width-be)/2;Me.x=Math.max(he,Math.min(Ue,Oe+$e))}else if(je==="end"){const Oe=ne.width-be;Me.x=Math.max(he,Math.min(Ue,Oe+$e))}}else if(de){Me.x=Ee==="left"?ne.width:-be;const Ue=ne.height-Fe,he=0;if(je==="start")Me.y=Math.max(he,Math.min(Ue,Ve));else if(je==="center"){const Oe=(ne.height-Fe)/2;Me.y=Math.max(he,Math.min(Ue,Oe+Ve))}else if(je==="end"){const Oe=ne.height-Fe;Me.y=Math.max(he,Math.min(Ue,Oe+Ve))}}ie.style.transform=z(Me.x,Me.y)}}function K(C){let Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!C)return[];const E=ce(C);if(E===C.ownerDocument.body){const re=window.visualViewport?[window.visualViewport]:[],le=G(E)?[E]:[];return[...Y,window,...re,...le]}const ie=K(xe(E));return[...Y,E,...ie]}function xe(C){return $(C)==="html"?C:C==null?void 0:C.parentNode}function G(C){if(!C)return!1;const{overflow:Y,overflowX:E,overflowY:te,display:ie}=window.getComputedStyle(C);return/auto|scroll|overlay|hidden|clip/.test(Y+te+E)&&!["contents"].includes(ie)}const ae=new Set(["html","body","#document"]);function ce(C){return C?ae.has($(C))?C.ownerDocument.body:B(C)&&G(C)?C:ce(xe(C)):document.body}function B(C){return C instanceof HTMLElement}function $(C){return C?(C.nodeName||"").toLowerCase():null}function q(C){let Y;return()=>(Y||(Y=new Promise(E=>{Promise.resolve().then(()=>{Y=void 0,E(C())})})),Y)}const D={direction:"bottom",enableFlip:!0,enableShift:!0,offset:0,zIndex:1,trigger:"hover",delay:100,outFocusToClose:!0,clickOutsideClose:!0},fe={position:"absolute",top:0,left:0,bottom:"auto",right:"auto",margin:0,willChange:"transform"},Ce=j({},fe),_=j({},fe),ge=(0,n.forwardRef)((C,Y)=>{const{prefixCls:E,componentConfig:te}=(0,n.useContext)(J.E),{className:ie,children:re,popper:le,enableShift:ve,motion:ee={},enableFlip:U,offset:ue,direction:X,getContainer:ne,zIndex:Ie,trigger:De,delay:ye,outFocusToClose:se,disabled:Se,defaultVisible:oe,visible:pe,arrow:de,clickOutsideClose:Ee,onVisibleChange:Ke}=(0,s.S)(C,D,te==null?void 0:te.Trigger),ze=(0,n.isValidElement)(re),Be=(0,n.useRef)(null),Te=(0,n.useRef)(null),Ge=d(le),We=(0,n.useRef)(null),me=(0,u.x1)(Ge,We),Le=(0,n.useRef)(null),[Ne,$e]=(0,f.R)(!1,{defaultValue:oe,value:pe,onChange:Ke}),{genPopupProps:Ve,genTriggerProps:Ye}=L({clickOutsideClose:Ee,delay:ye,disabled:Se,visible:Ne,onVisibleChange:$e,trigger:De,triggerEl:Be.current,outFocusToClose:se});(0,n.useImperativeHandle)(Y,()=>Be.current);const Qe=(0,u.t4)(re),ke=(0,u.t4)(le),Xe=(0,n.useCallback)(he=>{var Oe;he&&he.type!=="resize"&&!((Oe=he.target)!=null&&Oe.contains(Be.current))||H({reference:Be.current,popper:We.current,arrow:Te.current},{direction:X,enableFlip:U,enableShift:ve,offset:ue})},[X,U,ve,ue]),[He,Fe]=(0,n.useState)([]),be=(0,n.useCallback)(q(()=>new Promise(he=>{Xe(),he(void 0)})),[X,U,ve,ue]);(0,l.L)(()=>{const he=K(Be.current),Oe=K(We.current),qe=[...he,...Oe];Fe(qe)},[]);const je=()=>{He.forEach(he=>{he.addEventListener("scroll",be,{passive:!0})}),window.addEventListener("resize",be,{passive:!0})},Me=()=>{He.forEach(he=>{he.removeEventListener("scroll",be)}),window.removeEventListener("resize",be)};if((0,l.L)(()=>{if(Ne!==void 0){if(Ne===!0){var he;(he=Le.current)==null||he.toggle(!0),be(),je()}else if(Ne===!1){var Oe;(Oe=Le.current)==null||Oe.toggle(!1),Me()}}},[Ne]),(0,l.L)(()=>{if(Ne)return be(),Me(),je(),()=>Me()},[X,Ne,He,U,ve,ue]),!ze)return;const Ue=()=>le?n.createElement(Z.Z,j({ref:Le},ee),he=>{let{className:Oe}=he;return n.createElement(T,{getContainer:ne},n.createElement("div",Pe(j({role:"tooltip"},Ve()),{className:(0,m.default)(`${E}-trigger`,Oe,ie),style:Pe(j({},Ce),{zIndex:Ie})}),de?n.createElement("div",{className:`${E}-trigger-arrow`,ref:Te,style:Pe(j({},_),{zIndex:Ie})},de):null,(0,n.cloneElement)(le,{ref:me})))}):null;return n.createElement(n.Fragment,null,n.createElement(r,{ref:Be,onResize:()=>be()},(0,n.cloneElement)(re,j({},Ye(re)))),Ue())});ge.displayName="Trigger";const Re=ge},36112:function(x,t,e){"use strict";e.r(t),e.d(t,{Trigger:function(){return o},default:function(){return v}});var n=e(67171),m=e(98479),s=e.n(m),f={};for(var l in m)["default","Trigger"].indexOf(l)<0&&(f[l]=function(I){return m[I]}.bind(0,l));e.d(t,f);const o=n.Z,v=o},98479:function(){},84176:function(x,t,e){var n=e(75863);function m(s,f){if(s==null)return{};var l=n(s,f),o,v;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(s);for(v=0;v<I.length;v++)o=I[v],!(f.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(l[o]=s[o])}return l}x.exports=m,x.exports.__esModule=!0,x.exports.default=x.exports},75863:function(x){function t(e,n){if(e==null)return{};var m={},s=Object.keys(e),f,l;for(l=0;l<s.length;l++)f=s[l],!(n.indexOf(f)>=0)&&(m[f]=e[f]);return m}x.exports=t,x.exports.__esModule=!0,x.exports.default=x.exports},7829:function(x,t,e){"use strict";e.r(t),e.d(t,{clsx:function(){return m}});function n(s){var f,l,o="";if(typeof s=="string"||typeof s=="number")o+=s;else if(typeof s=="object")if(Array.isArray(s)){var v=s.length;for(f=0;f<v;f++)s[f]&&(l=n(s[f]))&&(o&&(o+=" "),o+=l)}else for(l in s)s[l]&&(o&&(o+=" "),o+=l);return o}function m(){for(var s,f,l=0,o="",v=arguments.length;l<v;l++)(s=arguments[l])&&(f=n(s))&&(o&&(o+=" "),o+=f);return o}t.default=m},64508:function(x,t,e){"use strict";e.d(t,{Y:function(){return f}});var n=e(53360),m=e(75601);const s=(l,o,v,I,h)=>{clearTimeout(I.current);const c=(0,m.y0)(l);o(c),v.current=c,h&&h({current:c})},f=({enter:l=!0,exit:o=!0,preEnter:v,preExit:I,timeout:h,initialEntered:c,mountOnEnter:p,unmountOnExit:d,onStateChange:u}={})=>{const[i,r]=(0,n.useState)(()=>(0,m.y0)(c?m.cn:(0,m.Ef)(p))),a=(0,n.useRef)(i),P=(0,n.useRef)(),[y,O]=(0,m.fj)(h),g=(0,n.useCallback)(()=>{const M=(0,m.XZ)(a.current._s,d);M&&s(M,r,a,P,u)},[u,d]),b=(0,n.useCallback)(M=>{const T=J=>{switch(s(J,r,a,P,u),J){case m.d0:y>=0&&(P.current=setTimeout(g,y));break;case m.Ix:O>=0&&(P.current=setTimeout(g,O));break;case m.iL:case m.iU:P.current=(0,m.Y3)(T,J);break}},Z=a.current.isEnter;typeof M!="boolean"&&(M=!Z),M?!Z&&T(l?v?m.iL:m.d0:m.cn):Z&&T(o?I?m.iU:m.Ix:(0,m.Ef)(d))},[g,u,l,o,v,I,y,O,d]);return[i,b,g]}},75601:function(x,t,e){"use strict";e.d(t,{Ef:function(){return c},Ix:function(){return l},XZ:function(){return p},Y3:function(){return u},cn:function(){return s},d0:function(){return m},fj:function(){return d},iL:function(){return n},iU:function(){return f},y0:function(){return h}});const n=0,m=1,s=2,f=3,l=4,o=5,v=6,I=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],h=i=>({_s:i,status:I[i],isEnter:i<f,isMounted:i!==v,isResolved:i===s||i>l}),c=i=>i?v:o,p=(i,r)=>{switch(i){case m:case n:return s;case l:case f:return c(r)}},d=i=>typeof i=="object"?[i.enter,i.exit]:[i,i],u=(i,r)=>setTimeout(()=>{isNaN(document.body.offsetTop)||i(r+1)},0)}}]);
}());