import { loadHeaderFooter } from "./utils.js";
import Cases from "./cases.js";
import { renderListWithTemplate } from "./utils.js";
import ExternalServices from "./externalServices.js";

loadHeaderFooter();

document.forms["search"].addEventListener("submit", (e) => {
    e.preventDefault();
    // e.target would contain our form in this case
    const caseName = document.querySelector("#caseName").value;
    const type = document.querySelector("#type").value;
    const status = document.querySelector("#status").value;
    const date = document.querySelector("#date").value;
    cases.filter(caseName, type, status, date);
  });

    class Details {
    constructor(listElement) {
      this.listElement = listElement;
      this.cases = new Cases;
      this.services = new ExternalServices();
    }
    async init() {
      var list = await this.services.fetchJSON("cases");
      this.renderList(list);
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
      
      template.querySelector("#summary").innerHTML = info.summarizedCaseDescription;
      template.querySelector("#website").innerHTML = info.websiteUrl;
      return template;
    }
    renderList(list) {
      this.listElement.innerHTML = "";
      console.log("list again?", list);
      const template = document.getElementById("case-template");
      renderListWithTemplate(
        template,
        this.listElement,
        list,
        this.prepareTemplate
      );
    }
  }
const cases = new Details(document.querySelector(".case-files"));
cases.init();