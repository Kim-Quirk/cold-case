import Cases from "./cases.js";
import { renderListWithTemplate } from "./utils.js";
import ExternalServices from "./externalServices.js";
var cardOne;
var cardTwo;

function playGame(card) {
  if (cardOne === undefined) {
    cardOne = card;
    console.log("Set the first card.");
    var picture = card.querySelector(".overlay");
    var cardFront = card.querySelector(".card_information")
    picture.classList.toggle("hide");
    cardFront.classList.toggle("hide");
    card.classList.toggle("hide");
  } else if (cardTwo === undefined) {
    cardTwo = card;
    console.log("Set the second card.");
    var picture = card.querySelector(".overlay");
    var cardFront = card.querySelector(".card_information")
    picture.classList.toggle("hide");
    cardFront.classList.toggle("hide");
    card.classList.toggle("hide");
  } else {
    console.log("Hide all cards.");
    
    var allCards = document.querySelectorAll(".card");
    var allCardbacks = document.querySelectorAll(".overlay");
    var allFronts = document.querySelectorAll(".card_information");
    setTimeout(() => {
      allCards.forEach((card) => {
        card.classList.remove("hide");
      });
      allCardbacks.forEach((card) => {
        card.classList.remove("hide");
      });
      allFronts.forEach((card) => {
        card.classList.remove("hide");
      });
    }, 300);
    cardOne = undefined;
    cardTwo = undefined;
  }

  checkCards();
}

function checkCards() {
  var string = "Click any card to reveal the other side.";
  if (cardOne != undefined && cardTwo != undefined) {
    if (cardOne.getAttribute("data-id") === cardTwo.getAttribute("data-id")) {
      console.log("Match!");
      string = "Congrats! They match. Click another card to continue.";
      cardOne.classList.toggle("matched");
      cardTwo.classList.toggle("matched");
    } else {
      console.log("No match");
      string = "No match! Click another card to continue.";
    }
  }
  document.getElementById("display").innerHTML = string;
}

export default class Cards {
  constructor(listElement) {
    this.listElement = listElement;
    this.services = new ExternalServices();
  }
  async init() {
    // We currently have hard coded cards.
    var list = await this.services.fetchJSON("game");
    list = this.shuffle(list);
    this.renderList(list);
  }
  shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  prepareTemplate(template, info) {
    template.querySelector("#case-name").innerHTML = info.caseName;
    template.querySelector("#victim-name").innerHTML = info.victimName;
    template.querySelector("#case-type").innerHTML = info.caseType;
    // We should add/display the case "name"??
    if (info.victimPicture == "any") {
      template.querySelector("#profile").src = "./img/placeholder.png";
    } else {
      template.querySelector("#profile").src = info.victimPicture;
    }
    
    template.querySelector(".summary").innerHTML = info.summarizedCaseDescription;
    template.querySelector("#website").innerHTML = info.websiteUrl;
    template.querySelector(".card").setAttribute("data-id", info.id);
    template.querySelector(".card").setAttribute("data-num", info.num);
    template
      .querySelector(".card")
      // This might need to change. It's looking for a unique id to reveal a card. If the matching cards have the same id, it may be a problem.
      .addEventListener("click", () => {
        var card = document.querySelector(`[data-num="${info.num}"]`);
        console.log(info.num);
        playGame(card);
      });
    template.querySelector("#details-link").href += info.id;
    return template;
  }
  renderList(list) {
    this.listElement.innerHTML = "";
    console.log("list again?", list);
    const template = document.getElementById("card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );
  }
}
