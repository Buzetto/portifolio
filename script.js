// Espera todo o HTML ser carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Função digitação
    function typeWriter(element) {
        const textArray = element.innerHTML.split(''); // Pega o texto e divide em letras
        element.innerHTML = ''; // Limpa o texto do elemento

        // Percorre o array de letras
        textArray.forEach((letter, i) => {
            // Usa setTimeout para adicionar cada letra com um atraso
            setTimeout(() => {
                element.innerHTML += letter;
            }, 100 * i); // 100ms de atraso por letra. Ajuste esse valor!
        });
    }

    // Seleciona o elemento que queremos animar
    const p = document.querySelector('.typing-effect');
    
    // Inicia a função
    typeWriter(p);

});