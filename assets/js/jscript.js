const btnMobile = document.getElementById('btn-mobile');
const ul = document.querySelector('ul#menu');
const nav = document.getElementById('nav');
const copyrightText = document.querySelector('.copyright');

const getDataAtual = new Date();

const lis = ul.querySelectorAll('li');

lis.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('active');
    })
});



function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label','Fechar menu');
    }else{
        event.currentTarget.setAttribute('aria-label','Abrir menu');
    }
}

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const texto = document.querySelector('.textoHero');

typeWriter(texto);

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

copyrightText.innerHTML = `&copy; ${getDataAtual.getFullYear()} Softbas - Desenvolvido por Igor Eliseo.`;