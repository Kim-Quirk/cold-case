var m=(e,t,n)=>new Promise((o,r)=>{var c=a=>{try{i(n.next(a))}catch(s){r(s)}},l=a=>{try{i(n.throw(a))}catch(s){r(s)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(c,l);i((n=n.apply(e,t)).next())});function u(e){if(e.ok)return e.text();throw new Error("Bad Response")}export function qs(e,t=document){return t.querySelector(e)}export function getLocalStorage(e){return JSON.parse(localStorage.getItem(e))}export function setLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}export function setClick(e,t){qs(e).addEventListener("touchend",n=>{n.preventDefault(),t()}),qs(e).addEventListener("click",t)}export function getParam(e){const t=window.location.search;return new URLSearchParams(t).get(e)}export function renderListWithTemplate(e,t,n,o){n.forEach(r=>{const c=e.content.cloneNode(!0),l=o(c,r);t.appendChild(l)})}export function renderWithTemplate(e,t,n,o){let r=e.content.cloneNode(!0);o&&(r=o(r,n)),t.appendChild(r)}export function loadTemplate(e){return m(this,null,function*(){const t=yield fetch(e).then(u),n=document.createElement("template");return n.innerHTML=t,n})}export function loadHeaderFooter(){return m(this,null,function*(){const e=yield loadTemplate("./partials/header.html"),t=yield loadTemplate("./partials/footer.html"),n=document.getElementById("main-header"),o=document.getElementById("main-footer");renderWithTemplate(e,n),renderWithTemplate(t,o)})}export function formDataToJSON(e){const t=new FormData(e),n={};return t.forEach(function(o,r){n[r]=o}),n}export function alertMessage(e,t=!0){const n=document.createElement("div");n.classList.add("alert"),n.innerHTML=`<p>${e}</p><span>X</span>`,n.addEventListener("click",function(r){r.target.tagName=="SPAN"&&o.removeChild(this)});const o=document.querySelector("main");o.prepend(n),t&&window.scrollTo(0,0)}export function removeAllAlerts(){document.querySelectorAll(".alert").forEach(t=>document.querySelector("main").removeChild(t))}
