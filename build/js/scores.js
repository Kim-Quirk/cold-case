var i=(n,r,e)=>new Promise((s,t)=>{var c=o=>{try{a(e.next(o))}catch(l){t(l)}},h=o=>{try{a(e.throw(o))}catch(l){t(l)}},a=o=>o.done?s(o.value):Promise.resolve(o.value).then(c,h);a((e=e.apply(n,r)).next())});import u from"./externalServices.js";import{alertMessage as g,getLocalStorage as d}from"./utils.js";export default class p{constructor(){this.token=null,this.services=new u,this.scores}init(){return i(this,null,function*(){var r=yield this.services.fetchJSON("scores");this.scores=r,console.log("scores",this.scores),this.sortScores()})}sortScores(){this.scores.sort(function(r,e){return r.score-e.score}),console.log("sorted?",this.scores),this.updateLeaderboard(),this.personalHighscores()}updateLeaderboard(){var r=document.querySelector("#leaderboard");console.log("Test??",this.scores);for(var e=0;e<5;e++){var s=document.createElement("tr"),t=e+1;s.innerHTML=`
        <td class="rank">`+t+`</td>
        <td class="user">`+this.scores[e].nickname+`</td>
        <td class="score">`+this.scores[e].score.toFixed(2)+`</td>
        `,r.append(s)}}personalHighscores(){if(d("verified")==!0){console.log("Logged in!"),document.querySelector(".personalBests").style.display="block";var r=document.querySelector(".highscores"),e=this.filterScores();if(console.log(e),e.length!=0){for(var s=0;s<e.length&&s<6;s++){var t=document.createElement("li");t.innerHTML=`
            <span class="score">`+e[s].score.toFixed(2)+'</span><span id="delete" data-id="'+s+`">X</span>
            `,r.append(t)}for(var c=document.querySelectorAll("#delete"),s=0;s<c.length;s++)c[s].addEventListener("click",()=>{this.deleteScores()})}else r.innerHTML="<p>Play a game of memory to see your personal high scores here!<p>"}else console.log("Not logged in!")}filterScores(){var r=d("user"),e=this.scores.filter(function(s){return s.userid==r.userid});return e}deleteScores(){g("Pretend this worked. This would be implemented with access to a database. Deleting from JSON and updating JSON files is difficult   ):")}}
