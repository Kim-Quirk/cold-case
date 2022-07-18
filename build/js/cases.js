import ExternalServices from "./externalServices.js";
import Search from "./searchPage.js";

export default class Cases {
  constructor() {
    this.token = null;
    this.services = new ExternalServices();
    this.cases;
  }
  async init() {
    var results = await this.services.fetchJSON("cases");
    this.cases = results;
    // console.log("cases", this.cases);
    return this.cases;
  }
  async filter(type, status) {
    // console.log(type, status);
    const filteredType = this.cases.filter((info) => info.caseType == type);
    // console.log(filteredType);
    const filteredStatus = this.cases.filter(
      (info) => info.caseStatus == status
    );
    // console.log(filteredStatus);

    var array;
    if (filteredStatus.length != 0 && filteredType.length != 0) {
      array = filteredStatus.filter((info) => filteredType.includes(info));
    } else if (filteredStatus.length != 0) {
      array = filteredStatus;
    } else if (filteredType.length != 0) {
      array = filteredType;
    } else {
      array = this.cases;
    }
    // console.log("did this work?", array);

    const search = new Search(document.querySelector(".case-files"), array);
    search.init();
  }
}
