const fs = require("fs");
let data = require("./data.json");

const chars = ["(", ")", "'", "-", "_", ",", "."];
function removeChaars(name) {
  chars.forEach((char) => {
    let parts = name.split(char);
    parts = parts.map((part) => {
      return part.trim("");
    });
    if (char == ".") parts = parts.join("").trim("");
    else parts = parts.join(" ").trim("");

    name = parts;
  });
  return name.split(" ").join("_").toLocaleLowerCase();
}

data = data.map((country) => {
  return {
    ...country,
    url: "/" + removeChaars(country.name),
  };
});

fs.writeFileSync("countries.json", JSON.stringify(data), (err) => {
  if (err) console.log(err);
  else {
    console.log("done");
  }
});
