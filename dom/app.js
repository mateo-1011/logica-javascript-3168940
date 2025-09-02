const pantalla = document.querySelector('.pantalla');
const btnMas = document.querySelector('.btn-mas');
const btnMenos = document.querySelector('.btn-menos');

let contador = 1;

function incrementar() {
    pantalla.textContent = ++contador;

    if (contador >= 10) {
    pantalla.style.color = 'red';
    pantalla.textContent =  contador
  } 
}


function decrementar() {
    pantalla.textContent = --contador;

    if (contador < 10) {
    pantalla.style.color = 'black';
    pantalla.textContent =  contador
  }
}


btnMas.addEventListener('click', () => {
  contador++;
  incrementar();
});

btnMenos.addEventListener('click', () => {
  if (contador > 0) {
    contador--;
    decrementar();
  }
});


incrementar();



        
