import ExternalServices from "./externalServices.js";
import { alertMessage } from "./utils.js";

export default class Cases {
  constructor() {
    this.services = new ExternalServices();
    this.caseData = "";
  }
  async init() {
    this.caseData = this.services.fetchJSON("cases");
    console.log(this.caseData);
  }
  async filter(type, date, status) {
    // const caseByType = null;
    // const caseByDate = null;
    // const caseByStatus = null;
    // var filter = { caseType: type, caseDate: date, caseStatus: status };
    // filteredCases = this.caseData.filter(function (item) {
    //   for (var key in filter) {
    //     if (item[key] === undefined || item[key] != filter[key]) return false;
    //   }
    //   return true;
    // });
  }
}
