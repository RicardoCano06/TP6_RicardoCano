document.addEventListener('DOMContentLoaded', function() {
    const paginaPrincipalButton = document.getElementById('paginaPrincipal');
    const pagina2Button = document.getElementById('pagina2');

    // Navegación entre páginas
    if (paginaPrincipalButton) {
        paginaPrincipalButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (pagina2Button) {
        pagina2Button.addEventListener('click', function() {
            window.location.href = 'pagina2.html';
        });
    }

    emailjs.init("JQ-dOCicUz8NaQvUQ");

    document.getElementById('messageForm')?.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send("service_794rdxp", "template_jyjca9a", {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            message: message
        })
        .then(() => {
            document.getElementById('status-message').innerText = "Mensaje enviado con éxito.";
            document.getElementById('messageForm').reset();
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            document.getElementById('status-message').innerText = "Hubo un error al enviar el mensaje.";
        });
    });
});