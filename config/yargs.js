const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base to multiply",
  })
  .option("m", {
    alias: "multiplicador",
    type: "number",
    demandOption: true,
    default: 10,
    describe: "Base multiplier",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Show X multiplication table",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "El tipo de la base debe ser number";
    }
    return true;
  }).argv; //importa todos lo argumentos que se ingresan por consola

module.exports = argv;
