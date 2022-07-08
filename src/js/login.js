import { loadHeaderFooter } from "./utils.js";
import User from "./user.js";

loadHeaderFooter();

const users = new User();
users.init();

document.forms["login"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
//   console.log(email, password);
  users.login(email, password);
});
