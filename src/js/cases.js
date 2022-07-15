import ExternalServices from "./externalServices.js";
import { alertMessage, getLocalStorage } from "./utils.js";

export default class Cases {
    constructor() {
      this.token = null;
      this.services = new ExternalServices();
      this.cases;
    }
    async init() {
      var results = await this.services.fetchJSON("cases");
      this.cases = results;
      console.log("cases", this.cases);
      return this.cases;
    }
  // async filter(type, date, status) {
  //   // const caseByType = null;
  //   // const caseByDate = null;
  //   // const caseByStatus = null;
  //   // var filter = { caseType: type, caseDate: date, caseStatus: status };
  //   // filteredCases = this.caseData.filter(function (item) {
  //   //   for (var key in filter) {
  //   //     if (item[key] === undefined || item[key] != filter[key]) return false;
  //   //   }
  //   //   return true;
  //   // });
  // }
}
