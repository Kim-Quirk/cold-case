import { loadHeaderFooter } from "./utils.js";
import Details from "./detailsPage.js";

loadHeaderFooter();
window.addEventListener("load", () => { 
    const details = new Details();
    details.init();
})

