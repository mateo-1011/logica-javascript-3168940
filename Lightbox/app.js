const flotante = document.querySelector('#flotante');
const cuadro = document.querySelector('#cuadro');
const equis = document.querySelector('#equis');
const sig = document.querySelector('#sig');
const ant = document.querySelector('#ant');
const imgPrincipal = document.querySelector('#imgprincipal');
const fath = document.querySelector('#fath');

let imagenes = [];
for (let i = 0; i < fath.children.length; i++) {
  imagenes.push(fath.children[i].src);
}

let indiceActual = 0;

function abrirLigthBox(src) {
 flotante.style.top = '0';
 imgPrincipal.src = src;
}

function cerrarLightBox() {
  flotante.style.top = '-100vh';

}

for (let i = 0; i < fath.children.length; i++) {
    fath.children[i].addEventListener('click', function() {
      abrirLigthBox(fath.children[i].src);
      indiceActual = i;
    });
}


sig.addEventListener('click', function() {
  indiceActual++;
  if (indiceActual >= imagenes.length) indiceActual = 0;
  imgPrincipal.src = imagenes[indiceActual];
});

ant.addEventListener('click', function() {
  indiceActual--;
  if (indiceActual < 0) indiceActual = imagenes.length - 1;
  imgPrincipal.src = imagenes[indiceActual];
});

equis.addEventListener('click', cerrarLightBox);

cuadro.addEventListener('click', function(event) {
  if (event.target === cuadro) {
    cerrarLightBox();
  }
});

imgPrincipal.addEventListener('click', cerrarLightBox);
  
