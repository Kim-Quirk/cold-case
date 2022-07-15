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
  async filter(caseName, type, status, date) {
    console.log(caseName, type, status, date);
  }
  buildDetails() {
    // Add code to direct/build details page
  }
}
