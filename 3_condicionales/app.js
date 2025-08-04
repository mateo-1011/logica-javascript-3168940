///Soliticar datos al usuario
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");

//Validar si el usuario es mayor de edad y si puede ingresar al bar 
if (edad >= 18) {
    alert("Bienvenido " + nombre + ", eres mayor de edad, puedes ingresar al bar.");
} else {
    alert("Lo siento " + nombre + ", eres menor de edad, no puedes ingresar al bar.");
}

//Verificar si puede entrar a VIP
if (nombre === "Mario" || nombre === "Carlos") {
    alert("Felicidades , puedes entrar a la zona VIP.");
}

else {
    alert("Lo siento , no puedes entrar a la zona VIP.");
}






/* //Pedir datos al usuario
let nombre = prompt("¿Cuál es tu nombre?");
let estatura = parseInt(prompt("¿Cuál es tu estatura en cm?"));
let velocidad = parseInt(prompt("¿Cuál es tu velocidad en km/h?"));
let edad = parseInt(prompt("¿Cuál es tu edad en años?"));

//Validar si el usuario cumple con la estatura y la velocidad para ingresar al equipo
if (estatura >= 170 && velocidad >= 27) {
    alert("Felicidades " + nombre + ", cumples con los requisitos para ingresar al equipo.");
} else {
    alert("Lo siento " + nombre + ", no cumples con los requisitos para ingresar al equipo.");
}  */