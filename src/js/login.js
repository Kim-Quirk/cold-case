import { loadHeaderFooter, alertMessage, getLocalStorage } from "./utils.js";
import User from "./user.js";

loadHeaderFooter();

const users = new User();
users.init();

if (window.location.href.indexOf("/login") > -1) {
  document.forms["login"].addEventListener("submit", (e) => {
    e.preventDefault();
    // e.target would contain our form in this case
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    //   console.log(email, password);
    users.login(email, password);
  });
  if (getLocalStorage("verified") === true) {
    alertMessage(`Login successful! Welcome, ` + getLocalStorage("user").nickname + `!`);
  }
}

if (window.location.href.indexOf("/signup") > -1) {
  document.forms["signup"].addEventListener("submit", (e) => {
    console.log("Sign up?");
    e.preventDefault();
    // e.target would contain our form in this case
    const name = document.querySelector("#name").value;
    const nickname = document.querySelector("#nickname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const repassword = document.querySelector("#repassword").value;
    //   console.log(email, password);
    users.signup(name, nickname, email, password, repassword);
  });
  if (getLocalStorage("verified") === true) {
    alertMessage(`Sign up successful! Welcome, ` + getLocalStorage("user").nickname + `!`);
  }
}
