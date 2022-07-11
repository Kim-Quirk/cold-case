import ExternalServices from "./externalServices.js";
import { alertMessage, setLocalStorage, getLocalStorage } from "./utils.js";

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
            setLocalStorage("verified", true);
            setLocalStorage("user", user);
          }
        }
        
      });
      if (getLocalStorage("verified") === true) {
        alertMessage("Correct email or password.");
      }
      else {
        alertMessage("Incorrect email or password.");
      }
    }
    signup(name, nickname, email, password, repassword) {
      if (password == repassword) {
        const newUser = {
          name: name,
          nickname: nickname,
          email: email,
          password: password
        };
        console.log(newUser);
        this.users.push(newUser);
        // Currently not working.
        // this.services.saveJSON("signup", this.users);
      }
      else {
        alertMessage("Passwords do not match.");
      }
    }
}