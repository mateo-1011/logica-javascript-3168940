const pantalla = document.querySelector('.pantalla');
const btnMas = document.querySelector('.btn-mas');
const btnMenos = document.querySelector('.btn-menos');

let contador = 1;

function incrementar() {
    pantalla.textContent = ++contador;

    if (contador >= 10) {
    pantalla.style.color = 'purple';
    pantalla.textContent =  contador
  } 

  if (contador >= 30) {
    document.body.style.backgroundColor= 'red'
  } else {
    document.body.style.backgroundColor= ''
  }
  
}


function decrementar() {
    pantalla.textContent = --contador;

    if (contador < 10) {
    pantalla.style.color = 'black';
    pantalla.textContent =  contador
  }

    if (contador >= 30) {
    document.body.style.backgroundColor= 'red'
  } else {
    document.body.style.backgroundColor= ''
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



        
