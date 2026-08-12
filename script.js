document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card-btn');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const title = button.parentElement.querySelector('h2').innerText;
            alert(`Você clicou para ler mais sobre: "${title}"`);
        });
    });
});
