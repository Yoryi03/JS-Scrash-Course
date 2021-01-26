let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

document.write(numeros)


let pc1 = {
  nombre: "Yorgi Pc",
  procesador: "i7",
  ram: "16GB",
  Disco: "1TB"

};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let disco = pc1["disco"];

document.write(`${nombre} <br>
  ${procesador} <br>
  ${ram} <br>
  ${disco}`)