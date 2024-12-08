"use strict";(self.webpackChunkever_demand_docs=self.webpackChunkever_demand_docs||[]).push([[901],{5064:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"diagrams/CQRS copy","title":"CQRS Diagram","description":"","source":"@site/docs/diagrams/CQRS copy.md","sourceDirName":"diagrams","slug":"/diagrams/CQRS copy","permalink":"/pt/docs/diagrams/CQRS copy","draft":false,"unlisted":false,"editUrl":"https://github.com/ever-co/ever-demand-docs/docs/diagrams/CQRS copy.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Ever Platform Diagrams","permalink":"/pt/docs/diagrams/"},"next":{"title":"CQRS Diagram","permalink":"/pt/docs/diagrams/CQRS"}}');var o=n(4848),t=n(8453);const s={},i="CQRS Diagram",c={},d=[];function m(e){const r={code:"code",h1:"h1",header:"header",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"cqrs-diagram",children:"CQRS Diagram"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-mermaid",children:"sequenceDiagram\n   participant Controller\n   participant CommandHandler\n   participant EventHandler\n   participant Service\n   participant Repository\n   participant Database\n   Controller ->>CommandHandler: Dispatching Command\n   Note left of CommandHandler: Command is a plain <br />TS Class\n   CommandHandler->>Service: Calls one or more Services\n   CommandHandler->>Repository: Calls one or more Repositories directly for simple operations\n   Service->>Repository: Using Repository for DB operations\n   CommandHandler ->> EventHandler: Fires some events\n   EventHandler ->> Service: Calls one or more Services\n   EventHandler ->> Repository: Calls one or more Repositories directly for simple operations\n   EventHandler ->> CommandHandler: Dispatch other commands\n   Repository ->> Database: Access to DB\n   Note right of Repository: Direct access or <br /> via ORM\n"})})]})}function l(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var a=n(6540);const o={},t=a.createContext(o);function s(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);