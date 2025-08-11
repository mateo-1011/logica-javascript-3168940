/* //Array
let frutas = ["mango","piña","papaya","uva","limón","aguacate"]
let jugadores = [
  {
    id: 1,
    nombre: "diaz", 
    pais: "col"
  },
    "james",
    "messi"
]
console.log( jugadores[0].nombre ) //Imprimir nombre "diaz"

//Objeto
let pelicula = {
  nombre: "Back to the future",
  estreno: 1986,
  director:  "Robert Zemeckis",
  calificacion: "8.5"
}

console.log( pelicula.director ) */


/* //Pedir número al usuario usando while 
let numero = 0; 
while (numero <= 0) {
    numero = parseInt(prompt("Ingrese un número mayor a 0: "));
        console.log("Gracias, el número ingresado es: " + numero);
    }
 */








/* //Pedir al usuario un número límite y mostrar los números del 1 al número límite ingresado
let limite = parseInt(prompt("Ingrese el número límite: "));

//Mostar los miltiplos de 5 del 1 al número límite ingresado
for (let i = 1; i <= limite; i++)
    if (i % 5 === 0) {
  console.log(i);
} */




/* //Mismo ejercio usando Do While 

let limite = parseInt(prompt("Ingrese el número límite: "));
let i = 1; //Contador
do {                         //Ejecuta el bloque primero y luego evalua la condición para ver si puede seguir
  if (i % 5 === 0) {    //Ver si es multiplo de 5
    console.log(i);
  }
  i++;
} while (i <= limite);

 */



/* //Programa que imprime los números impares de 1 

for (let i = 1; i <= 100; i++) {  //Inicio bucle desde 1 hasta 100
  if (i % 2 !== 0) { //Verifico si es impar
    console.log(i);
  }
}
 */



 //Programa que imprime los números pares de 1 a 100 y excluir un rango de 10 números

let inicio = parseInt(prompt("Ingrese el número de inicio: "));
let fin = parseInt(prompt("Ingrese el número de fin: "));


//Validar que el rango sea de 10 números

if (fin - inicio !== 10) {
  console.log("Eror, el rango debe ser de 10 números.");
}


for (let i = 1; i <= 100; i++) {  //Inicio del bucle 
    
    if (i >= inicio && i <= fin) { //Verifico si el número está fuera del rango
            continue;

        } else {
            console.log(i); //Imprimo el número si no está en el rango
        }
    }
 










