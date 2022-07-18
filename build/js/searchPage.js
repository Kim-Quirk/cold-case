// import Cases from "./cases.js";
import { renderListWithTemplate } from "./utils.js";
// import ExternalServices from "./externalServices.js";

export default class Search {
  constructor(listElement, list) {
    this.listElement = listElement;
    this.list = list;
  }
  async init() {
    this.renderList(this.list);
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

    template.querySelector("#summary").innerHTML =
      info.summarizedCaseDescription;
    template.querySelector("#website").href = info.websiteUrl;
    template.querySelector("#website").alt = info.agencyInformation;
    template.querySelector("#agency").innerHTML = info.agencyInformation;
    template.querySelector("#case-status").innerHTML = info.caseStatus;
    template.querySelector(".case").setAttribute("data-id", info.id);
    template.querySelector("#details-link").href += info.id;
    return template;
  }
  renderList(list) {
    this.listElement.innerHTML = "";
    // console.log("list again?", list);
    const template = document.getElementById("case-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list,
      this.prepareTemplate
    );

    if (list.length == 0) {
      document.querySelector("main").innerHTML +=
        "<h2>It appears no cases match your search parameters. Please try searching for something different.</h2>";
    }
  }
}
