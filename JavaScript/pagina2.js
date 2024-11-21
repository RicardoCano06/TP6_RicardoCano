document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const personalWelcomeMessage = document.getElementById('personalWelcomeMessage');

    // Display welcome message
    welcomeMessage.innerText = "Bienvenido a la página principal.";

    // Ask for the user's name
    const userName = prompt("Bienvenido! Por favor, ingrese su nombre:");

    if (userName) {
        // Display personalized welcome message
        personalWelcomeMessage.innerText = `Bienvenido, ${userName}!`;
    } else {
        personalWelcomeMessage.innerText = "No se ingresó ningún nombre.";
    }

    // Navigation buttons
    document.getElementById('loginPage').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('pagina3').addEventListener('click', function() {
        window.location.href = 'pagina3.html';
    });

    document.getElementById('pagina4').addEventListener('click', function() {
        window.location.href = 'pagina4.html';
    });
});