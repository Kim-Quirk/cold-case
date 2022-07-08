import ExternalServices from "./externalServices.js";
import { alertMessage } from "./utils.js";

export default class User {
    constructor() {
      this.token = null;
      this.services = new ExternalServices();
    }
    async login() {
      //http://157.201.228.93:2992/login
      try {
        this.token = await this.services.loginRequest();
        // console.log("Logged in??", this.token)
        console.log("Success???");
      } catch (err) {
        // remember this from before?
        alertMessage(err.message.message);
      }
    }
}