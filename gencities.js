const fs = require("fs");
let data = require("./cities.js");

let keys = Object.keys(data);
data = keys.map((key) => {
  return data[key];
});

data = data.map(({ id, name, iata, regId, contId, countryId, countryName }) => {
  return {
    url: "/" + name.split(" ").join("_").toLocaleLowerCase(),
    id,
    name,
    iata,
    regId,
    contId,
    countryId,
    countryName,
  };
});

fs.writeFileSync("cities.json", JSON.stringify(data), (err) => {
  if (err) console.log(err);
  else {
    console.log("done");
  }
});
