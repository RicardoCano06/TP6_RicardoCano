document.addEventListener('DOMContentLoaded', function() {
    const pagina2Button = document.getElementById('pagina2');
    const pagina3Button = document.getElementById('pagina3');
    const welcomeMessageDiv = document.getElementById('welcomeMessage');

    // Navegación entre páginas
    if (pagina2Button) {
        pagina2Button.addEventListener('click', function() {
            window.location.href = 'pagina2.html';
        });
    }

    if (pagina3Button) {
        pagina3Button.addEventListener('click', function() {
            window.location.href = 'pagina3.html';
        });
    }

    // Interacciones de bienvenida solo en la página principal
    if (welcomeMessageDiv) {
        alert("Bienvenido a la página principal");
        const userName = prompt("Por favor, ingresa tu nombre:");
        if (userName) {
            welcomeMessageDiv.innerHTML = `<h2>Bienvenido, ${userName}!</h2>`;
        } else {
            welcomeMessageDiv.innerHTML = `<h2>Bienvenido, visitante!</h2>`;
        }
    }
});