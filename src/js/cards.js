import { renderListWithTemplate } from "./utils.js";

var cardOne;
var cardTwo;

function playGame(card) {
  if (cardOne === undefined) {
    cardOne = card;
    console.log("Set the first card.");
    var picture = card.querySelector(".overlay");
    picture.classList.toggle("hide");
  } else if (cardTwo === undefined) {
    cardTwo = card;
    console.log("Set the second card.");
    var picture = card.querySelector(".overlay");
    picture.classList.toggle("hide");
  } else {
    console.log("Hide all cards.");
    var allCards = document.querySelectorAll(".overlay");
    setTimeout(() => {
      allCards.forEach((card) => {
        card.classList.remove("hide");
      });
    }, 300);
    cardOne = undefined;
    cardTwo = undefined;
  }

  checkCards();
}

function checkCards() {
  var string = "Click any card to reveal the other side."
  if (cardOne != undefined && cardTwo != undefined) {
    if(cardOne.getAttribute('data-id') === cardTwo.getAttribute('data-id')) {
      console.log('Match!');
      string = "Congrats! They match. Click another card to continue."
    } else {
      console.log('No match');
      string = "No match! Click another card to continue."
    }
  }
  document.getElementById("display").innerHTML = string;
}

export default class Cards {
  constructor(listElement) {
    this.listElement = listElement;
  }
  async init() {
    // We currently have hard coded cards.
    var list = [
      {
        id: 1,
        type: "Missing Person",
        victim: "John Doe",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contact: "website.com",
        picture: "./img/placeholder.png",
      },
      {
        id: 2,
        type: "Missing Person",
        victim: "John Doe",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contact: "website.com",
        picture: "./img/placeholder.png",
      },
      {
        id: 3,
        type: "Missing Person",
        victim: "John Doe",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contact: "website.com",
        picture: "./img/placeholder.png",
      },
      {
        id: 4,
        type: "Missing Person",
        victim: "John Doe",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contact: "website.com",
        picture: "./img/placeholder.png",
      },
      {
        id: 5,
        type: "Missing Person",
        victim: "John Doe",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contact: "website.com",
        picture: "./img/placeholder.png",
      },
    ];
    this.renderList(list);
  }
  prepareTemplate(template, info) {
    template.querySelector("#victim-name").innerHTML = info.victim;
    template.querySelector("#case-type").innerHTML = info.type;
    template.querySelector("#profile").src = info.picture;
    template.querySelector(".summary").innerHTML = info.summary;
    template.querySelector("#website").innerHTML = info.contact;
    template.querySelector(".card").setAttribute("data-id", info.id);
    template
      .querySelector(".card")
      // This might need to change. It's looking for a unique id to reveal a card. If the matching cards have the same id, it may be a problem.
      .addEventListener("click", () => {
        var card = document.querySelector(`[data-id="${info.id}"]`);
        console.log(info.id);
        playGame(card);
      });
    return template;
  }
  renderList(list) {
    this.listElement.innerHTML = "";
    const template = document.getElementById("card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );
  }
}
