const main = document.querySelector('#main');
const valorVertical = document.querySelector('.valor-vertical');
const valorHorizontal = document.querySelector('.valor-horizontal');
const pelota = document.querySelector('#pelota');





console.log(main);
console.log(valorVertical);
console.log(valorHorizontal);

function verScroll() {
    let scrollVertical = main.scrollTop;
    let scrollHorizontal = main.scrollLeft;
    valorVertical.textContent = `V: ${scrollVertical}`;
    valorHorizontal.textContent = `H: ${scrollHorizontal}`;
    pelota.style.top = `${scrollVertical}px`;
    pelota.style.left = `${scrollHorizontal}px`;
    pelota.style.transform = `scale(${scrollVertical / 30})`;
    
}

main.addEventListener('scroll', verScroll);



