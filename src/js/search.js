import { loadHeaderFooter } from "./utils.js";
import Cases from "./cases.js";
import Search from "./searchPage.js";

loadHeaderFooter();

var cases = new Cases();
var list = await cases.init();

document.forms["search"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  const type = document.querySelector("#type").value;
  // const caseName = document.querySelector("#caseName").value;
  const status = document.querySelector("#status").value;
  list = cases.filter(type, status);
});

const search = new Search(document.querySelector(".case-files"), list);
search.init();
