// TALLER MATEO VARELAS Y JIMENA HERNANDEZ 

/*   // 1. Leer numero, imprimir y decir si es positivo o negativo 
let numero = parseFloat (prompt("Ingrese un número:"));
console.log("El número ingresado es: " + numero);
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
} */



/* // 2. Leer dos números, imprimir solo los positivos 
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
if (numero1 > 0) {
    console.log(numero1 , " es positivo.");
}
if (numero2 > 0) {
    console.log(numero2 , " es positivo.");
}
 */



/* // 3. Lea dos números, si son iguales multiplicar, si el primero es mayor que el segundo los reste 
let a = parseFloat(prompt("Ingrese el primer número:"));
let b = parseFloat(prompt("Ingrese el segundo número:"));
if (a === b) {
    console.log("Son iguales, la multiplicación es: " + (a * b));
} else if (a > b) {
    console.log("El primero es mayor, la resta es: " + (a - b));
}else {
    console.log("El segundo es mayor, la suma es: " + (b + a));
} */



/* // 4. 

let costo = parseFloat(prompt("Ingrese el costo del producto:"));
let pago = parseFloat(prompt("Ingrese la cantidad de dinero entregado:"));
let cambio = pago - costo;
if (cambio < 0) {
    console.log("El pago es insuficiente, Faltan:", cambio.toLocaleString("es-CO"));
} else {
    console.log("El cambio a devolver es: " , cambio.toLocaleString("es-CO"));
} */

/* // 5. 
 let numVacunas = parseInt(prompt("Ingrese el número de vacunas aplicadas:"));
 let costoVacuna = parseFloat(prompt("Ingrese el costo de cada vacuna:"));
 let costoAplicacion = parseFloat(prompt("Ingrese el costo de la aplicación de cada vacuna:"));
 let totalgastado = numVacunas * (costoVacuna + costoAplicacion)
 console.log("El costo total de la aplicación de vacunas es: " + totalgastado.toLocaleString("es-CO"));
*/

/* // 6. 
let cantidadCamisas = parseInt(prompt("Ingrese la cantidad de camisas:"));
let precioCamisa = parseFloat(prompt("Ingrese el precio de cada camisa:"));
let total = cantidadCamisas * precioCamisa;
let descuento = (cantidadCamisas >= 3) ?   0.20 :  0.10; //20% si son 3 o más, 10% si son menos
let totalConDescuento = total - (total * descuento);
console.log(`el descuento es del ${descuento * 100}%`, `el total a pagar es: ${totalConDescuento.toLocaleString("es-CO")}`); */

/* // 7. 

let dineroInicial = parseFloat(prompt("Ingrese la cantidad de dinero con que inicia el día:"));
let totalVentas =  4 * 800000 ; // 4 ventas de 800,000 cada una
let dineroDespuesVentas = dineroInicial + totalVentas;
let pagoAcreedores = dineroDespuesVentas * 0.10;
let dineroFinal = dineroDespuesVentas - pagoAcreedores;
console.log("El dinero inicial es: " + dineroInicial.toLocaleString("es-CO"));
console.log("El dinero después de ventas es: " + dineroDespuesVentas.toLocaleString("es-CO"));
console.log("El pago a acreedores es: " + pagoAcreedores.toLocaleString("es-CO"));
console.log("El dinero final en caja es: " + dineroFinal.toLocaleString("es-CO")); */


/* // 8. 

let totalVentas5 = 0;

for (let i = 1; i <= 5; i++) {
    let ventaDia = parseFloat(prompt(`ingrese el valor de la venta del día ${i}:`));
    totalVentas5  += ventaDia;
}
let promedio = totalVentas5 / 5;
console.log("El promedio de ventas es: " + promedio.toLocaleString("es-CO")); */


/* // 9. Calculadora básica 

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");

let resultado;
let mensaje; 

if (operacion === "+") {
    resultado = num1 + num2;
    mensaje = "El resultado de la suma es";
} else if (operacion === "-") {
    resultado = num1 - num2;
    mensaje = "El resultado de la resta es";
} else if (operacion === "*") {
    resultado = num1 * num2;
    mensaje = "El resultado de la multiplicación es";
} else if (operacion === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
        mensaje = "El resultado de la división es";
    } else {
        console.log("Error: No se puede dividir entre 0");
    }
} else {
    console.log("Operación inválida");
}

// Mostrar el resultado solo si se calculó correctamente
if (resultado !== undefined) {
    // Si alguno de los números tiene decimales → redondeamos el resultado
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        resultado = Math.round(resultado);
    }

    console.log(`${mensaje}: ${resultado}`);
} */


/* // 10: Mayor, menor y medio.

// Pedimos los 3 números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor, medio, menor;

// Comparamos 
if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
        medio = num2;
        menor = num3;
    } else {
        medio = num3;
        menor = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
        medio = num1;
        menor = num3;
    } else {
        medio = num3;
        menor = num1;
    }
} else {
    mayor = num3;
    if (num1 >= num2) {
        medio = num1;
        menor = num2;
    } else {
        medio = num2;
        menor = num1;
    }
}

// Mostramos resultados
console.log("El número mayor es:", mayor);
console.log("El número medio es:", medio);
console.log("El número menor es:", menor);

// Verificamos si hay iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales:", num1, "y aparece 3 veces.");
} else if (num1 === num2 && num1 !== num3) {
    console.log("El número", num1, "se repite 2 veces.");
} else if (num1 === num3 && num1 !== num2) {
    console.log("El número", num1, "se repite 2 veces.");
} else if (num2 === num3 && num2 !== num1) {
    console.log("El número", num2, "se repite 2 veces.");
} else {
    console.log("No hay números repetidos.");
}
 */
 


/* // 11.
// Pedimos los datos al usuario
let edad = parseInt(prompt("Ingrese la edad del jugador:"));
let estatura = parseFloat(prompt("Ingrese la estatura del jugador en metros (ej: 1.75):"));
let peso = parseFloat(prompt("Ingrese el peso del jugador en kilogramos:"));

if (edad >= 18 && estatura > 1.70 && peso >= 50 && peso <= 90) {
    console.log("El jugador cumple con los requisitos y ha sido SELECCIONADO");
} else {
    console.log("El jugador NO cumple con los requisitos");
}
 */


/* // 12.
let sueldoMinimo = 1300000;

// Pedir el sueldo 
let sueldo = parseFloat(prompt("Ingrese el sueldo actual del trabajador:"));

// Verificamos si gana el sueldo mínimo
if (sueldo < sueldoMinimo) {
    console.log("Ningún trabajador gana ese sueldo.");
} else if (sueldo === sueldoMinimo) {
    let aumento = sueldo * 0.10;
    let nuevoSueldo = sueldo + aumento;

    console.log(
        "El sueldo mínimo era $" + sueldo.toLocaleString("es-CO") +
        ", con el aumento del 10% el nuevo sueldo es $" + nuevoSueldo.toLocaleString("es-CO")
    );
} else {
    console.log(
        "El trabajador gana $" + sueldo.toLocaleString("es-CO") +
        ", por lo tanto no recibe aumento porque gana más del sueldo mínimo."
    );
} */


/* // 13.

// Array vacío
let datos = [];

datos[0] = prompt("Ingrese su nombre:");
datos[1] = prompt("Ingrese su canción favorita");
datos[2] = prompt("Ingrese su comida favorita:");


// Mostramos todo el contenido del array
console.log("Los datos ingresados son:", datos); */


/* // 14.

// Array vacío para guardar los nombres
let nombres = [];
let nombre;

//ciclo while que se repite hasta que el usuario escriba "salir"
while (true) {
    nombre = prompt("Ingrese un nombre (en caso de terminar escriba 'salir' para terminar):");

    if (nombre.toLowerCase() === "salir") {
        break; 
    }

    nombres.push(nombre);

    document.write( nombre + "<br>");
}

// Mostramos todos los nombres guardados en consola
console.log("Lista de nombres ingresados:", nombres);
 */


/* // 15. JUEGO

let correcto = false;

do {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 100);

    let respuesta = parseInt(prompt(`¿Cuánto es ${num1} x ${num2}?`));

    if (respuesta === num1 * num2) {
        alert("¡Ganaste Chamo! ");
        correcto = true;
    } else {
        alert("Respuesta incorrecta, prueba desertar.");
    }

} while (!correcto);
 */


//Ejercicio extra 

// Cree un array de 8 frutas y con ayuda del ciclo for imprímalos en pantallana en una lista numerada

let frutas = ["Manzana", "Banana", "Naranja", "Fresa", "Kiwi", "Mango", "Pera", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log((i + 1) + ". " + frutas[i]);
}

