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