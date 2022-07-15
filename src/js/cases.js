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
  async filter(caseName, type, status, date) {
    console.log(caseName, type, status, date);
  }
}
