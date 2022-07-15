import { loadHeaderFooter } from "./utils.js";
import Cases from "./cases.js";

loadHeaderFooter();

const cases = new Cases();
cases.init();

document.forms["search"].addEventListener("submit", (e) => {
    e.preventDefault();
    // e.target would contain our form in this case
    const caseName = document.querySelector("#caseName").value;
    const type = document.querySelector("#type").value;
    const status = document.querySelector("#status").value;
    const date = document.querySelector("#date").value;
    cases.filter(caseName, type, status, date);
  });