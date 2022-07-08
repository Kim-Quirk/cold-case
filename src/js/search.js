import { loadHeaderFooter } from "./utils.js";
import Cases from "./cases.js";

loadHeaderFooter();

const cases = new Cases();
cases.init();