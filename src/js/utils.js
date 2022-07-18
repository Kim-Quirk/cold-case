function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlItem = urlParams.get(param);
  return urlItem;
}

export function renderListWithTemplate(
  template,
  parentElement,
  list,
  callback
) {
  list.forEach((item) => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parentElement.appendChild(templateWithData);
  });
}

// export function renderCardsWithTemplate(
//   template,
//   parentElement,
//   list,
//   callback
// ) {
//   for (var i = 0; i < list.length; i++) {
//     const clone = template.content.cloneNode(true);
//     const templateWithData = callback(clone, list[i], i);
//     parentElement.appendChild(templateWithData);
//   }
//   list.forEach((item) => {
//     const clone = template.content.cloneNode(true);
//     const templateWithData = callback(clone, item);
//     parentElement.appendChild(templateWithData);
//   });
// }

export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

// load the header and footer
export async function loadHeaderFooter() {
  const header = await loadTemplate("./partials/header.html");
  const footer = await loadTemplate("./partials/footer.html");
  const headerElement = document.getElementById("main-header");
  const footerElement = document.getElementById("main-footer");
  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);
  updatedHeader();
}

export function updatedHeader() {
  // console.log(document.querySelector("#login"));
  var account = document.querySelector("#login");
  // console.log(account);
  if (getLocalStorage("verified") === true) {
    account.textContent = "Logout";
    account.removeAttribute("href", "");

    var name = document.createElement("li");
    var user = getLocalStorage("user");
    name.textContent = "Hi " + user.nickname + "!";
    name.setAttribute("id", "profileName");

    var parent = document.querySelector(".nav");
    parent.appendChild(name);
    account.addEventListener("click", () => {
      setLocalStorage("user", undefined);
      setLocalStorage("verified", false);
      location.reload();
    });
  }
}

// takes a form element and returns an object where the key is the "name" of the form input.
export function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

export function alertMessage(message, scroll = true) {
  // create element to hold our alert
  const alert = document.createElement("div");
  // add a class to style the alert
  alert.classList.add("alert");
  // set the contents. You should have a message and an X or something the user can click on to remove
  alert.innerHTML = `<p>${message}</p><span>X</span>`;
  // add a listener to the alert to see if they clicked on the X
  // if they did then remove the child
  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      // how can we tell if they clicked on our X or on something else?  hint: check out e.target.tagName or e.target.innerText
      main.removeChild(this);
    }
  });
  // add the alert to the top of main
  const main = document.querySelector("main");
  main.prepend(alert);
  // make sure they see the alert by scrolling to the top of the window
  //we may not always want to do this...so default to scroll=true, but allow it to be passed in and overridden.
  if (scroll) window.scrollTo(0, 0);
}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert));
}
