import { loadHeaderFooter } from "./utils.js";
import Scores from "./scores.js";

loadHeaderFooter();

const score = new Scores();
score.init();