import { loadHeaderFooter } from "./utils.js";
import Card from "./cards.js";

loadHeaderFooter();

const cards = new Card(document.querySelector(".board"));
cards.init();
