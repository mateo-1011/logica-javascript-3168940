
const contenedor = document.getElementById("contenedor");
const titulo = document.getElementById("titulo");
const btnAnterior = document.getElementById("Anterior");
const btnSiguiente = document.getElementById("Siguiente");
const imagenes = contenedor.getElementsByTagName("img");
let indice = 0; 


const titulos = [
  "Primera Imagen",
  "Segunda Imagen",
  "Tercera Imagen",
  "Cuarta Imagen",
  "Quinta Imagen"
];

function actualizarGaleria() {
  contenedor.style.marginLeft = (-400 * indice) + "px";
  contenedor.style.transitionDuration = "0.5s";

  titulo.textContent = titulos[indice];
}

btnSiguiente.addEventListener("click", () => {
  if (indice < imagenes.length - 1) {
    indice++;
    actualizarGaleria();
  }
});

btnAnterior.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    actualizarGaleria();
  }
});


actualizarGaleria();
