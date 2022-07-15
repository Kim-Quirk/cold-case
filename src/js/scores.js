import ExternalServices from "./externalServices.js";
import { alertMessage, getLocalStorage } from "./utils.js";

export default class Scores {
  constructor() {
    this.token = null;
    this.services = new ExternalServices();
    this.scores;
  }
  async init() {
    var results = await this.services.fetchJSON("scores");
    this.scores = results;
    console.log("scores", this.scores);
    this.sortScores();
  }
  sortScores() {
    this.scores.sort(function (a, b) {
      return a.score - b.score;
    });
    console.log("sorted?", this.scores);
    this.updateLeaderboard();
    this.personalHighscores();
  }
  updateLeaderboard() {
    var parent = document.querySelector("#leaderboard");
    console.log("Test??", this.scores);
    for (var i = 0; i < 5; i++) {
      var tr = document.createElement("tr");
      var rank = i + 1;
      tr.innerHTML =
        `
        <td class="rank">` +
        rank +
        `</td>
        <td class="user">` +
        this.scores[i].nickname +
        `</td>
        <td class="score">` +
        this.scores[i].score.toFixed(2) +
        `</td>
        `;
      parent.append(tr);
    }
  }
  personalHighscores() {
    if (getLocalStorage("verified") == true) {
      console.log("Logged in!");
      document.querySelector(".personalBests").style.display = "block";
      var parent = document.querySelector(".highscores");
      var userScores = this.filterScores();
      console.log(userScores);
      if (userScores.length != 0) {
        for (var i = 0; i < userScores.length && i < 6; i++) {
          var li = document.createElement("li");
          li.innerHTML =
            `
            <span class="score">` +
            userScores[i].score.toFixed(2) +
            `</span><span id="delete" data-id="`+ i +`">X</span>
            `;
          parent.append(li);
        }
        var del = document.querySelectorAll("#delete");
        for (var i = 0; i < del.length; i++) {
          del[i].addEventListener("click", () => {
            this.deleteScores()
          });
        }
      } else {
        parent.innerHTML = `<p>Play a game of memory to see your personal high scores here!<p>`;
      }
    } else {
      console.log("Not logged in!");
    }
  }
  filterScores() {
    var user = getLocalStorage("user");
    var userScores = this.scores.filter(function (score) {
      return score.userid == user.userid;
    });
    return userScores;
  }
  deleteScores() {
   alertMessage("Pretend this worked. This would be implemented with access to a database. Deleting from JSON and updating JSON files is difficult   ):")
  }
}
