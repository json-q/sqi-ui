"use strict";(self.webpackChunk_sqi_ui_dumi=self.webpackChunk_sqi_ui_dumi||[]).push([[655],{92503:function(u,n,s){s.r(n);var i=s(8918),o=s(6177),c=s(40797),m=s(44915),x=s(99251),a=s(82254),h=s(26303),p=s(30098),d=s(1586),l=s(87054),r=s(55826),e=s(32171),_=s(70813);function t(){return(0,_.jsx)(d.dY,{children:(0,_.jsx)(r.Suspense,{fallback:(0,_.jsx)(l.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"\u5FEB\u901F\u5F00\u59CB",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u5F00\u59CB",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u5F00\u59CB"]}),(0,_.jsxs)("h2",{id:"\u5B89\u88C5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5"]}),(0,_.jsx)(a.Z,{lang:"bash",children:e.texts[0].value}),(0,_.jsxs)("h2",{id:"\u57FA\u7840\u4F7F\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u4F7F\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u4F7F\u7528"]}),(0,_.jsx)("p",{children:e.texts[1].value}),(0,_.jsx)(a.Z,{lang:"tsx",children:e.texts[2].value}),(0,_.jsxs)("h2",{id:"\u6309\u9700\u52A0\u8F7D",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6309\u9700\u52A0\u8F7D",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u6309\u9700\u52A0\u8F7D"]}),(0,_.jsxs)("p",{children:[e.texts[3].value,(0,_.jsx)("code",{children:e.texts[4].value}),e.texts[5].value]}),(0,_.jsxs)("h3",{id:"rsbuild-\u4E2D\u6309\u9700\u52A0\u8F7D",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#rsbuild-\u4E2D\u6309\u9700\u52A0\u8F7D",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"rsbuild \u4E2D\u6309\u9700\u52A0\u8F7D"]}),(0,_.jsxs)("p",{children:[e.texts[6].value,(0,_.jsx)("code",{children:e.texts[7].value}),e.texts[8].value,(0,_.jsx)("code",{children:e.texts[9].value}),e.texts[10].value]}),(0,_.jsx)(a.Z,{lang:"ts",children:e.texts[11].value}),(0,_.jsxs)("h3",{id:"\u4F7F\u7528-babel-plugin-import",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528-babel-plugin-import",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528 babel-plugin-import"]}),(0,_.jsxs)("p",{children:[e.texts[12].value,(0,_.jsx)("a",{href:"https://www.npmjs.com/package/babel-plugin-import",children:e.texts[13].value}),e.texts[14].value]}),(0,_.jsx)(a.Z,{lang:"bash",children:e.texts[15].value}),(0,_.jsx)("p",{children:e.texts[16].value}),(0,_.jsx)(a.Z,{lang:"js",children:e.texts[17].value})]})})})})}n.default=t},32171:function(u,n,s){s.r(n),s.d(n,{texts:function(){return i}});const i=[{value:`npm i @sqi-ui/web
`,paraId:0,tocIndex:1},{value:"\u63A8\u8350\u5728 webpack\u3001rspack\u3001vite \u7B49\u73B0\u4EE3\u6784\u5EFA\u5DE5\u5177\u4E2D\u4F7F\u7528",paraId:1,tocIndex:2},{value:`import { Button } from '@sqi-ui/web';
// \u9700\u5F15\u5165\u5C11\u91CF\u7684\u5168\u5C40\u6837\u5F0F\u5C5E\u6027\u624D\u53EF\u4F7F\u7528
import '@sqi-ui/web/es/style/index.css';
`,paraId:2,tocIndex:2},{value:"\u7EC4\u4EF6\u672C\u8EAB\u9ED8\u8BA4\u4F1A\u88AB\u6784\u5EFA\u5DE5\u5177 tree shake, css \u9700\u4F7F\u7528 ",paraId:3,tocIndex:3},{value:"babel-plugin-import",paraId:3,tocIndex:3},{value:" \u7B49\u5DE5\u5177\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D",paraId:3,tocIndex:3},{value:"\u5982\u679C\u4F7F\u7528 ",paraId:4,tocIndex:4},{value:"rsbuild",paraId:4,tocIndex:4},{value:"\uFF0C\u5219\u5176\u81EA\u5E26\u7C7B\u4F3C\u4E8E ",paraId:4,tocIndex:4},{value:"babel-plugin-import",paraId:4,tocIndex:4},{value:" \u7684\u529F\u80FD",paraId:4,tocIndex:4},{value:`// in rsbuild.config.ts
  source: {
    transformImport: [
      {
        libraryName: '@sqi-ui/web',
        libraryDirectory: 'es',
        style: 'css', // set \`true\` to import .less/.scss
      },
    ],
  },
`,paraId:5,tocIndex:4},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:6,tocIndex:5},{value:"babel-plugin-import",paraId:6,tocIndex:5},{value:" \u6765\u5B9E\u73B0 css \u7684\u6309\u9700\u52A0\u8F7D",paraId:6,tocIndex:5},{value:`npm i babel-plugin-import -D
`,paraId:7,tocIndex:5},{value:"\u5728 babel \u914D\u7F6E\u4E2D\u52A0\u5165",paraId:8,tocIndex:5},{value:`plugins: [
  [
    'babel-plugin-import',
    {
      libraryName: '@sqi-ui/web',
      libraryDirectory: 'es',
      style: 'css',
    },
  ],
];
`,paraId:9,tocIndex:5}]}}]);
