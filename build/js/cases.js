var c=(i,r,e)=>new Promise((o,l)=>{var n=s=>{try{t(e.next(s))}catch(a){l(a)}},h=s=>{try{t(e.throw(s))}catch(a){l(a)}},t=s=>s.done?o(s.value):Promise.resolve(s.value).then(n,h);t((e=e.apply(i,r)).next())});import f from"./externalServices.js";import"./utils.js";export default class m{constructor(){this.services=new f,this.caseData=""}init(){return c(this,null,function*(){this.caseData=this.services.fetchJSON("cases"),console.log(this.caseData)})}filter(r,e,o){return c(this,null,function*(){})}}
