document.addEventListener('DOMContentLoaded', () => {
    const botonVolver = document.getElementById('btn-volver');

    if (botonVolver) {
        botonVolver.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'pagina1.html';
        });
    }
});
