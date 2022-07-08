import ExternalServices from "./externalServices.js";
import { alertMessage } from "./utils.js";

export default class User {
    constructor() {
      this.token = null;
      this.services = new ExternalServices();
      this.users = [];
    }
    async init() {
      var results = await this.services.fetchJSON("users");
      this.users = results;
      console.log("users", this.users);
    }
    login(email, password) {
      // console.log(email, password);
      this.users.forEach(user => {
          if (user.email == email) {
          console.log("Match!");
          if (user.password == password) {
            console.log("Match!");
          }
        }
      });
    }
}