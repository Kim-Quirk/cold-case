var h=(d,s,e)=>new Promise((r,t)=>{var n=i=>{try{o(e.next(i))}catch(f){t(f)}},u=i=>{try{o(e.throw(i))}catch(f){t(f)}},o=i=>i.done?r(i.value):Promise.resolve(i.value).then(n,u);o((e=e.apply(d,s)).next())});import m from"./externalServices.js";import{alertMessage as l,setLocalStorage as a,getLocalStorage as c}from"./utils.js";export default class g{constructor(){this.token=null,this.services=new m,this.users=[]}init(){return h(this,null,function*(){var s=yield this.services.fetchJSON("users");this.users=s,console.log("users",this.users)})}login(s,e){this.users.forEach(r=>{r.email==s&&(console.log("Match!"),r.password==e&&(console.log("Match!"),a("verified",!0),a("user",r),window.location.reload()))}),c("verified")===!0?l("Login successful! Welcome, "+c("user").nickname+"!"):l("Incorrect email or password.")}signup(s,e,r,t,n){if(t==n){var u=this.users.length+1;const o={name:s,nickname:e,email:r,password:t,userid:u};console.log(o),a("verified",!0),a("user",o),window.location.reload()}else l("Passwords do not match.");c("verified")===!0&&l("Sign up successful! Welcome, "+c("user").nickname+"!")}}
