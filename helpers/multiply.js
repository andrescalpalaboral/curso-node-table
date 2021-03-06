const fs = require("fs"); //Importación por defecto del fileSystem con node
const colors = require("colors");

const createMultiplicationFile = async (
  baseP = 5,
  multiplicadorP = 10,
  listarP = false
) => {
  try {
    let salida = "";
    let consola = "";
    for (let index = 1; index <= multiplicadorP; index++) {
      salida += `${baseP} x ${index} = ${baseP * index}\n`;
      consola += `${colors.yellow(baseP)} ${"x".cyan} ${colors.yellow(index)} ${ "=".cyan } ${baseP * index}\n`;
   }
    if (listarP) {
      console.log(
        `=======================
    Tabla del: ${baseP}    
    =======================`.yellow
      );
      console.log(consola);
    }

    //Method tha create or write a file in system with FileSystem API, if would you like get error, you have to do try and catch
    fs.writeFileSync(`tabla-${baseP}.txt`, salida);

    return `tabla-${baseP}.txt`;
  } catch (err) {
    throw err;
  }
};
//Method than create or write a file in system with FileSystem API
//fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//  if (err) throw err;
//  console.log(`File tabla-${base}.txt has been created`);
//});

module.exports = {
  createMultiplicationFile,
};
