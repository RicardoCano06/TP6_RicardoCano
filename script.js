emailjs.init("JQ-dOCicUz8NaQvUQ");

function welcomeUser() {
  const userName = prompt("Por favor, ingresa tu nombre:");
  if (userName) {
    document.getElementById('welcomeMessage').innerText = `Bienvenido, ${userName}!`;
  } else {
    document.getElementById('welcomeMessage').innerText = 'Por favor, ingresa tu nombre.';
  }
}

// Llamar a la función welcomeUser al cargar la página
window.onload = welcomeUser;

document.getElementById('personalDataForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  emailjs.send("service_794rdxp", "template_nhl7nnj", {
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: address,
    phone: phone,
    email: email,
    city: city,
    country: country
  })
  .then(() => {
    document.getElementById('status-message').innerText = "Datos enviados con éxito.";
    document.getElementById('personalDataForm').reset();
  })
  .catch((error) => {
    console.error("Error al enviar los datos:", error);
    document.getElementById('status-message').innerText = "Hubo un error al enviar los datos.";
  });
});

document.getElementById('messageForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.send("service_794rdxp", "template_nhl7nnj", {
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