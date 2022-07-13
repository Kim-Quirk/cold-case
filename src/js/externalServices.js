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
    return await fetch(`./json/` + file + `.json`).then(convertToJson);
  }
  // Unsure how to get this to work...
  // saveJSON(file, data) {
  //   const json = JSON.stringify(data);
  //   try {
  //     fs.writeFileSync(`./json/` + file + `.json`, json);
  //     console.log("JSON data is saved.");
  //   } catch (error) {
  //     console.error(err);
  //   }
}
