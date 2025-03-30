var O=Object.defineProperty;var I=(t,n,r)=>n in t?O(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var m=(t,n,r)=>I(t,typeof n!="symbol"?n+"":n,r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const N=()=>{const t=new Set;return{subscribe:l=>t.add(l),notify:()=>t.forEach(l=>l())}},P=(t,n)=>{const{subscribe:r,notify:l}=N();let o={...t};const s=f=>{o={...o,...f},l()},a=()=>({...o}),x=Object.fromEntries(Object.entries(n).map(([f,E])=>[f,(...L)=>s(E(a(),...L))]));return{getState:a,setState:s,subscribe:r,actions:x}},D=(t,n=window.localStorage)=>({get:()=>JSON.parse(n.getItem(t)),set:s=>n.setItem(t,JSON.stringify(s)),reset:()=>n.removeItem(t)}),M=t=>{const{subscribe:n,notify:r}=N(),l=()=>window.location.pathname,o=()=>t[l()],s=a=>{window.history.pushState(null,null,a),r()};return window.addEventListener("popstate",()=>r()),{get path(){return l()},push:s,subscribe:n,getTarget:o}};function e(t,n,...r){return{}}const $=1e3,w=$*60,S=w*60,A=S*24,U=t=>{const n=Date.now()-t;return n<w?"방금 전":n<S?`${Math.floor(n/w)}분 전`:n<A?`${Math.floor(n/S)}시간 전`:new Date(t).toLocaleString()},j=({author:t,time:n,content:r,likeUsers:l,activationLike:o=!1})=>e("div",{},e("div",{className:"flex items-center mb-2"},e("div",null,e("div",{className:"font-bold"},t),e("div",{className:"text-gray-500 text-sm"},U(n)))),e("p",null,r),e("div",{className:"mt-2 flex justify-between text-gray-500"},e("span",{className:`like-button cursor-pointer${o?" text-blue-500":""}`},"좋아요 ",l.length),e("span",null,"댓글"),e("span",null,"공유"))),F=()=>e("div",{},e("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),e("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded"},"게시")),G=()=>e("header",{},e("h1",{className:"text-2xl font-bold"},"항해플러스")),H=()=>e("footer",{},e("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),T={value:null,get(){return this.value},set(t){this.value=t}},g=D("user"),k=1e3,c=k*60,q=c*60,i=P({currentUser:g.get(),loggedIn:!!g.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*c,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*c,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*c,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*c,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*q,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(t){return g.reset(),{...t,currentUser:null,loggedIn:!1}}}),p=t=>window.location.pathname===t?"text-blue-600 font-bold":"text-gray-600";function h({onClick:t,children:n,...r}){return e("a",{...r},n)}const C=()=>{const{loggedIn:t}=i.getState(),{logout:n}=i.actions;return e("nav",{},e("ul",{className:"flex justify-around"},e("li",null,e(h,{href:"/",className:p("/")},"홈")),!t&&e("li",null,e(h,{href:"/login",className:p("/login")},"로그인")),t&&e("li",null,e(h,{href:"/profile",className:p("/profile")},"프로필")),t&&e("li",null,e("a",{href:"#",id:"logout",className:"text-gray-600",onClick:r=>{r.preventDefault(),n()}},"로그아웃"))))},B=()=>{const{posts:t}=i.getState();return e("div",{},e("div",{className:"max-w-md w-full"},e(G,null),e(C,null),e("main",{className:"p-4"},e(F,null),e("div",{id:"posts-container",className:"space-y-4"},[...t].sort((n,r)=>r.time-n.time).map(n=>e(j,{...n,activationLike:!1})))),e(H,null)))},u=class u extends Error{constructor(){super(u.MESSAGE)}};m(u,"MESSAGE","ForbiddenError");let b=u;const d=class d extends Error{constructor(){super(d.MESSAGE)}};m(d,"MESSAGE","UnauthorizedError");let y=d;T.set(M({"/":B,"/login":()=>{const{loggedIn:t}=i.getState();if(t)throw new b;return e()},"/profile":()=>{const{loggedIn:t}=i.getState();if(!t)throw new y;return e()}}));const v="/front_5th_chapter1-1/";function J(){document.querySelector("#root").innerHTML=`<a href="${v}login">로그인</a>`,window.location.pathname==="/login"&&(document.querySelector("#root").innerHTML=`<a href="${v}">홈</a>`)}J();
