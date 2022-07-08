// const baseURL = "https://fp-matching-game.herokuapp.com/";

async function convertToJson(res) {
  const jsonResponse = await res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: "servicesError", message: jsonResponse };
  }
}

export default class ExternalServices {
  constructor() {}
  async fetchJSON(file) {
    return await fetch(`./json/` + file + `.json`)
      .then(convertToJson);
    // return await fetch(`./json/` + file + `.json`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((jsondata) => console.log(jsondata));
  }
  // getData() {
  //   return fetch(baseURL + `cases`)
  //     .then(convertToJson)
  //     .then((data) => data.Result);
  // }
  // async findCaseById(id) {
  //   return await fetch(baseURL + `cases/${id}`)
  //     .then(convertToJson)
  //     .then((data) => data.Result);
  // }
  // async findCaseByType(type) {
  //   return await fetch(baseURL + `cases/${type}`)
  //     .then(convertToJson)
  //     .then((data) => data.Result);
  // }
  // async findCaseByDate(date) {
  //   return await fetch(baseURL + `cases/${date}`)
  //     .then(convertToJson)
  //     .then((data) => data.Result);
  // }
  // async findCaseByStatus(status) {
  //   return await fetch(baseURL + `cases/${status}`)
  //     .then(convertToJson)
  //     .then((data) => data.Result);
  // }
  //   async checkout(payload) {
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     };
  //     return await fetch(baseURL + "checkout/", options).then(convertToJson);
  //   }
  // async loginRequest() {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   };
  //   const response = await fetch(baseURL + "login", options).then(
  //     convertToJson
  //   );
  //   console.log(response);
  //   return response.accessToken;
  // }
  // async getScores() {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   };
  //   const response = await fetch(baseURL + "scores", options).then(
  //     convertToJson
  //   );
  //   console.log(response);
  //   return response;
  // }
  //   async orderRequests(token) {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     return await fetch(baseURL + "orders", options).then(convertToJson);
  //   }
}
