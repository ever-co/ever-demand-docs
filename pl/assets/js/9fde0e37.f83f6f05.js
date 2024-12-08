"use strict";(self.webpackChunkever_demand_docs=self.webpackChunkever_demand_docs||[]).push([[188],{7525:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"diagrams/CQRS","title":"CQRS Diagram","description":"","source":"@site/docs/i18n/pl/docusaurus-plugin-content-docs/current/diagrams/CQRS.md","sourceDirName":"diagrams","slug":"/diagrams/CQRS","permalink":"/pl/docs/diagrams/CQRS","draft":false,"unlisted":false,"editUrl":"https://github.com/ever-co/ever-demand-docs/docs/diagrams/CQRS.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"CQRS Diagram","permalink":"/pl/docs/diagrams/CQRS copy"}}');var o=r(4848),t=r(8453);const s={},i="CQRS Diagram",c={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"cqrs-diagram",children:"CQRS Diagram"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mermaid",children:"sequenceDiagram\n   participant Controller\n   participant CommandHandler\n   participant EventHandler\n   participant Service\n   participant Repository\n   participant Database\n   Controller ->>CommandHandler: Dispatching Command\n   Note left of CommandHandler: Command is a plain <br />TS Class\n   CommandHandler->>Service: Calls one or more Services\n   CommandHandler->>Repository: Calls one or more Repositories directly for simple operations\n   Service->>Repository: Using Repository for DB operations\n   CommandHandler ->> EventHandler: Fires some events\n   EventHandler ->> Service: Calls one or more Services\n   EventHandler ->> Repository: Calls one or more Repositories directly for simple operations\n   EventHandler ->> CommandHandler: Dispatch other commands\n   Repository ->> Database: Access to DB\n   Note right of Repository: Direct access or <br /> via ORM\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var a=r(6540);const o={},t=a.createContext(o);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);