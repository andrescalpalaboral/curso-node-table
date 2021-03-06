//EVITAR LLENAR DE CÓDIGO EL ARCHIVO DE LANZAMIENTO app.js o index.js
const { createMultiplicationFile } = require("./helpers/multiply");
const argv = require("./config/yargs");
require("colors");

console.clear();

const base = argv.base; //obtiene el argumento llamado base
const multiplicador = argv.m;
const listar = argv.l;

createMultiplicationFile(base, multiplicador, listar)
  .then((name) => {
    console.log(name.rainbow, "creado!!");
  })
  .catch((err) => {
    console.log(err);
  });
