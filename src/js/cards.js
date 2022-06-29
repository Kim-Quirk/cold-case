import {
  renderListWithTemplate
} from "./utils.js";

export default class Cards {
  constructor(listElement) {
    this.listElement = listElement;
  }
  async init() {
    // Grab a random list of cases from the API here...
    // const list =  require('./data.json');
    // console.log(list);
    // if (list.length === 0) {
    //   this.listElement.innerHTML =
    //     "<li> Your cart is empty</li>";
    // } else {
    //   this.renderList(list);
    // }

    var list = [
      {
        "id": 1,
        "type": "Missing Person",
        "victim": "John Doe",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "contact": "website.com",
        "picture": "./img/placeholder.png"
      },
       {
        "id": 2,
        "type": "Missing Person",
        "victim": "John Doe",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "contact": "website.com",
        "picture": "./img/placeholder.png"
      },
      {
        "id": 3,
        "type": "Missing Person",
        "victim": "John Doe",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "contact": "website.com",
        "picture": "./img/placeholder.png"
      },
      {
        "id": 4,
        "type": "Missing Person",
        "victim": "John Doe",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "contact": "website.com",
        "picture": "./img/placeholder.png"
      },
      {
        "id": 5,
        "type": "Missing Person",
        "victim": "John Doe",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "contact": "website.com",
        "picture": "./img/placeholder.png"
      }
    ]
    

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
      .addEventListener("click", () => { 
        var card = document.querySelector(`[data-id="${info.id}"]`);
        // console.log(info.id)
        console.log(card);
        var picture = card.querySelector(".overlay");
        picture.classList.toggle("hide");
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
