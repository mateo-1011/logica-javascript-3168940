///Soliticar datos al usuario
/* let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));

// Verificar si puede ingresar a la discoteca
if (edad >= 18) {
  alert("Puede ingresar a la discoteca.");

  // Verificar si puede ingresar a VIP
  if (nombre === "Carlos" || nombre === "Mario") {
    alert("Puede ingresar a VIP.");
  }

} else {
  // Si es menor de edad, no puede ingresar a nada
  alert("No puede ingresar a la discoteca ni a la zona VIP.");
}
 */








// Pedir datos al usuario
let nombre = prompt("¿Cuál es tu nombre?");
let estatura = parseInt(prompt("¿Cuál es tu estatura en cm?"));
let velocidad = parseInt(prompt("¿Cuál es tu velocidad en km/h?"));
let edad = parseInt(prompt("¿Cuál es tu edad en años?"));

// Validar si el usuario cumple con la estatura y velocidad
if (estatura >= 170 && velocidad >= 27) {
  alert("Felicidades, cumples con los requisitos para ingresar al equipo.");

  // Verificar edad para determinar división
  if (edad < 18) {
    alert("Eres menor de edad, puedes ingresar a la división juvenil.");
  } else {
    alert("Eres mayor de edad, puedes ingresar a la división adulta.");
  }

} else {
  alert("Lo siento, no cumples con los requisitos para ingresar al equipo.");
}
