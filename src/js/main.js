import { loadHeaderFooter } from "./utils.js";

import User from "./user.js";

loadHeaderFooter();

if (window.location.href.indexOf("/login") > -1) {
  var user = new User();
  await user.login();
}
