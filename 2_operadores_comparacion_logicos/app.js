//Bolean(...)

console.log(' "5" == "5"', "5" == "5"); // true
console.log(' "5" === "5"', "5" === "5"); // true
console.log(' 5 === "5"', 5 === "5"); // false
console.log(' 5 == "5"', 5 == "5"); // true
console.log(' 5 === (3+2)', "5" === (3+2)); // false
console.log(' 5 === 5', 5 === 5); // true

//Concatenación
console.log( 5 + "3"); // "53"
console.log( 5 + Number("3")); // 8
console.log( 5 * "3"); // 15
console.log( 5 + 3); // 8

//Pida dos números y sume
/* let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let resultado = num1 + num2;
alert("La suma es: " + resultado); */

//Pedir dos números con prompt
const valorA = Number(prompt("Ingresa el valor A:"));
const valorB = Number(prompt("Ingresa el valor B:"));

//Imprimir los valores ingresados
console.log(`El valor A es = "${valorA}" y el valor B es = "${valorB}".`);

//Realizar operaciones
console.log(`La suma de "${valorA}" + "${valorB}" = "${valorA + valorB}"`);
console.log(`La resta de "${valorB}" - "${valorA}" = "${valorB - valorA}"`);
console.log(`La multiplicación de "${valorA}" * "${valorB}" = "${valorA * valorB}"`);
console.log(`La división de "${valorA}" / "${valorB}" = "${valorB !== 0 ? (valorA / valorB) : 'indefinida (división por 0)'}"`);
