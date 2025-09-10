const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const userPage = document.getElementById("userPage");
const imgEquipo = document.getElementById("img-equipo");
const textSaludo = document.getElementById("text-saludo");
const textEquipo = document.querySelector(".text-equipo");
const logoutBtn = document.getElementById("logout");


formulario.addEventListener("submit", function(event) {
  event.preventDefault();  

  userPage.style.display = "block";
  formulario.style.display = "none";
  textSaludo.textContent = `Hola ${document.getElementById("nombre").value}`;
  textEquipo.textContent = document.querySelector('input[name="equipo"]:checked').value;

  const nombre = document.getElementById("nombre").value;
  const color = document.getElementById("color").value;
  const equipo = document.querySelector('input[name="equipo"]:checked');


  logoutBtn.addEventListener("click", function() {
  userPage.style.display = "none";
  formulario.style.display = "block";

  formulario.reset();
  document.body.style.backgroundColor = "";
  });

  if (equipo.value === "Mapaches") {
    imgEquipo.src = "mapache.png";
    imgEquipo.alt = "Logo de Mapaches";
  }



  if (!nombre || !color || !equipo) {
    resultado.textContent = "Por favor completa todos los campos.";
    return;
  }

  document.body.style.backgroundColor = color;

  console.log("Formulario enviado:");
  console.log("Nombre:", nombre);
  console.log("Color:", color); 
  console.log("Equipo:", equipo.value);
});



