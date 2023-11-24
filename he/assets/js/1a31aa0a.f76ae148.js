"use strict";(self.webpackChunkdocusaurus_website_typescript=self.webpackChunkdocusaurus_website_typescript||[]).push([[388],{6620:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(5893),a=n(1151);const o={},s="CQRS Diagram",i={id:"diagrams/CQRS",title:"CQRS Diagram",description:"",source:"@site/../docs/i18n/he/docusaurus-plugin-content-docs/current/diagrams/CQRS.md",sourceDirName:"diagrams",slug:"/diagrams/CQRS",permalink:"/he/docs/diagrams/CQRS",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/../docs/diagrams/CQRS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ever Platform Diagrams",permalink:"/he/docs/diagrams/"}},c={},d=[];function m(e){const r={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"cqrs-diagram",children:"CQRS Diagram"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mermaid",children:"sequenceDiagram\n   participant Controller\n   participant CommandHandler\n   participant EventHandler\n   participant Service\n   participant Repository\n   participant Database\n   Controller ->>CommandHandler: Dispatching Command\n   Note left of CommandHandler: Command is a plain <br />TS Class\n   CommandHandler->>Service: Calls one or more Services\n   CommandHandler->>Repository: Calls one or more Repositories directly for simple operations\n   Service->>Repository: Using Repository for DB operations\n   CommandHandler ->> EventHandler: Fires some events\n   EventHandler ->> Service: Calls one or more Services\n   EventHandler ->> Repository: Calls one or more Repositories directly for simple operations\n   EventHandler ->> CommandHandler: Dispatch other commands\n   Repository ->> Database: Access to DB\n   Note right of Repository: Direct access or <br /> via ORM\n"})})]})}function l(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>s});var t=n(7294);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);