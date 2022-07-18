import Cases from "./cases.js";
import { getParam } from "./utils.js";

export default class Details {
  constructor() {
    this.cases = new Cases();
    this.caseId = getParam("id");
    //   this.services = new ExternalServices();
  }
  async init() {
    await this.findCase();
  }
  async findCase() {
    var cases = await this.cases.init();
    // console.log(this.caseId);
    const oneCase = cases.find((victim) => victim.id == this.caseId);
    // console.log(oneCase);
    this.buildDetails(oneCase);
  }
  buildDetails(info) {
    var parentElement = document.querySelector(".details");
    parentElement.querySelector("#case-name").innerHTML = info.caseName;
    parentElement.querySelector("#victim-name").innerHTML = info.victimName;
    parentElement.querySelector("#case-type").innerHTML = info.caseType;
    // We should add/display the case "name"??
    if (info.victimPicture == "any") {
      parentElement.querySelector("#profile").src = "./img/placeholder.png";
    } else {
      parentElement.querySelector("#profile").src = info.victimPicture;
    }
    parentElement.querySelector("#description").innerHTML = info.description;
    parentElement.querySelector("#summary").innerHTML =
      info.summarizedCaseDescription;
    parentElement.querySelector("#website").href = info.websiteUrl;
    parentElement.querySelector("#website").alt = info.agencyInformation;
    parentElement.querySelector("#agency").innerHTML = info.agencyInformation;
    parentElement.querySelector("#case-status").innerHTML = info.caseStatus;
  }
}
