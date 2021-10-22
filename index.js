const server = require("./lib/server.js");
const data = require("./lib/data.js");

const app = {};

app.init = () => {
  // pasiruosti pradinius folder'ius
  // pasiruosti pradinius failus
  // prisijungti prie DB
  // uzkurti serveri
  server.init();
};

app.init();

data.create("heroes", "Archangel", {
  Prestige: 10820,
  HP: 45961,
  Attack: 3393,
  "Crit Rate": 658,
  "Crit Damage": 773,
  Armor: 517,
  "Block Proficiency": 3912,
  "Energy Resist": 0,
  "Physical Resist": 0,
  "Crit Resistance": 0,
  Tags: ["Hero", "X-Men", "X-Force", { Size: "M" }, "Metal", "Male"]
});

module.exports = app;
