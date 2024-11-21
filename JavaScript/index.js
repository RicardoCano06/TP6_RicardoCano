document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("E5ftZahp1Mk5wAMtQ");

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginMessage = document.getElementById('loginMessage');

        // Validate login credentials
        if (username === "admin" && password === "1234") {
            loginMessage.innerText = "Ingreso correcto.";
            emailjs.send("service_ab8c7ns", "template_jyjca9a", {
                username: username,
                message: "Ha ingresado a la página web."
            })
            .then((response) => {
                console.log("Correo enviado con éxito", response.status, response.text);
                window.location.href = 'pagina2.html';
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                loginMessage.innerText = "Hubo un error al enviar el correo.";
            });
        } else {
            loginMessage.innerText = "Usuario o contraseña incorrecta.";
        }
    });
});