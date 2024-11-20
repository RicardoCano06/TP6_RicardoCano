document.addEventListener('DOMContentLoaded', function() {
    console.log("Script de página 2 cargado correctamente");

    const paginaPrincipalButton = document.getElementById('paginaPrincipal');
    const pagina3Button = document.getElementById('pagina3');

    // Navegación entre páginas
    if (paginaPrincipalButton) {
        paginaPrincipalButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    if (pagina3Button) {
        pagina3Button.addEventListener('click', function() {
            window.location.href = 'pagina3.html';
        });
    }

    document.getElementById('personalDataForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Formulario enviado");

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        console.log("Datos del formulario:", {
            firstName: firstName,
            lastName: lastName,
            age: age,
            address: address,
            phone: phone,
            email: email,
            city: city,
            country: country
        });

        emailjs.send("service_ab8c7ns", "template_qdwwn9q", {
            firstName: firstName,
            lastName: lastName,
            age: age,
            address: address,
            phone: phone,
            email: email,
            city: city,
            country: country
        })
        .then((response) => {
            console.log("Correo enviado con éxito", response.status, response.text);
            document.getElementById('status-message').innerText = "Datos enviados con éxito.";
            document.getElementById('personalDataForm').reset();
        })
        .catch((error) => {
            console.error("Error al enviar los datos:", error);
            document.getElementById('status-message').innerText = "Hubo un error al enviar los datos.";
        });
    });
});