document.addEventListener('DOMContentLoaded', function() {
    console.log("Script de página 4 cargado correctamente");

    const loginPageButton = document.getElementById('loginPage');
    const paginaPrincipalButton = document.getElementById('paginaPrincipal');
    const pagina3Button = document.getElementById('pagina3');

    // Navegación entre páginas
    if (loginPageButton) {
        loginPageButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (paginaPrincipalButton) {
        paginaPrincipalButton.addEventListener('click', function() {
            window.location.href = 'pagina2.html';
        });
    }

    if (pagina3Button) {
        pagina3Button.addEventListener('click', function() {
            window.location.href = 'pagina3.html';
        });
    }

    // Inicializar EmailJS con tu public key
    emailjs.init("E5ftZahp1Mk5wAMtQ");

    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Formulario enviado");

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log("Datos del formulario:", {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            message: message
        });

        emailjs.send("service_ab8c7ns", "template_qdwwn9q", {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            message: message
        })
        .then((response) => {
            console.log("Correo enviado con éxito", response.status, response.text);
            alert("Mensaje enviado con éxito.");
            document.getElementById('messageForm').reset();
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            alert("Hubo un error al enviar el mensaje.");
        });
    });
});