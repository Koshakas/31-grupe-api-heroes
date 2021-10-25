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

// app.init();

(async () => {
  const textContent = await data.read("heroes", "Rogue");
  console.log(textContent);
})();

module.exports = app;
