const  titulo = document.querySelector('.titulo');
const screen = document.querySelectorAll('.screen');
const miniaturas = document.querySelector('.container-min');

function cambiarImagen(e){
    imagen.src = e.target.src;
    titulo.textContent = e.target.name;
}

miniaturas.addEventListener('click', cambiarImagen);

