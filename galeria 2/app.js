
const imagenG = document.querySelector(".screen");
const titulo = document.querySelector(".titulo");
const miniaturas = document.querySelectorAll(".miniatura");

function cambiarImagen (event) {
    if(event.target.scr) return;
  imagenG.src = event.target.src;
  titulo.textContent = event.target.name;
  document.body.style.backgroundImage = `url(${event.target.src})`;
}

miniaturas.forEach(miniatura => {
  miniatura.addEventListener("click", cambiarImagen);
});

