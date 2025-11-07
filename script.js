// FUNCTION FOR ANIMATE TYPING
// Espera todo o HTML ser carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Função digitação
    function typeWriter(element) {
        const textArray = element.innerHTML.split(''); // 
        element.innerHTML = '';

        // Percorre o array de letras
        textArray.forEach((letter, i) => {
            setTimeout(() => {
                element.innerHTML += letter;
            }, 100 * i); 
        });
    }

    const p = document.querySelector('.typing-effect');
    
    typeWriter(p);
});

// OPEN AND CLOSE MENU MOBILE
let btnMenu = document.getElementById('btn-open-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu-mobile');

btnMenu.addEventListener('click', () => { 
    menu.classList.add('open-menu');
})

menu.addEventListener('click', () => { 
    menu.classList.remove('open-menu');
})

overlay.addEventListener('click', () => { 
    menu.classList.remove('open-menu');
})