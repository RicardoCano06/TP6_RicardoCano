document.addEventListener('DOMContentLoaded', function() {
    console.log("Script de página 3 cargado correctamente");

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

    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Formulario enviado");

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        console.log("Datos del formulario:", {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
        });

        emailjs.send("service_ab8c7ns", "template_jyjca9a", {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
        })
        .then((response) => {
            console.log("Correo enviado con éxito", response.status, response.text);
            document.getElementById('status-message').innerText = "Mensaje enviado con éxito.";
            document.getElementById('messageForm').reset();
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            document.getElementById('status-message').innerText = "Hubo un error al enviar el mensaje.";
        });
    });
});