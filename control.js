  const formulario = document.getElementById("formulario");
  const inputs = document.querySelectorAll("#formulario input");
  const mensaje = document.getElementById("mjeFormulario");

  const campos = {
    usuario: false,
    clave: false,
  };

  function validarCampo(e) {

    inputs.forEach((input) => {

    switch (input.name) {
      case "usuario":
        if (!(input.value.indexOf("@", 0) == -1)) {
          if (
            !(
              input.value.length == 0 ||
              input.value == null ||
              /^\s*$/.test(input.value)
            )
          ) {
            console.log("usuario OK")
            usuario = true
            return usuario;
          }
        } else {
          console.log("Error usuario")
          mostrarAlerta(input);
          usuario = false;
          return usuario;
        }

      case "clave":
        if (
          input.value.length == 0 ||
          input.value == null ||
          /^\s*$/.test(input.value)
        ) {
          console.log("Error clave")
          mostrarAlerta(input);
          clave = false;
          return clave;
        } else {
          console.log("Clave OK")
          clave = true;
          return clave;
        }
    }

  });
  };

  // Mostrar mensaje de error
  function mostrarAlerta(input) {
    document.getElementById(`alerta-${input.name}`).classList.add("mostrarMje");
    document.querySelector(`#${input.name}`).style.borderColor = "red";
  }

  // Quitar mensaje de error al escribir en los inputs
  inputs.forEach((input) => {
    input.addEventListener("keyup", () => {
      document
        .getElementById(`alerta-${input.name}`)
        .classList.remove("mostrarMje");
        document.querySelector(`#${input.name}`).style.borderColor = "black";
    });
  });

  // Evento SUBMIT del formulario
  formulario.addEventListener("submit", (e) => {
    validarCampo(e);

    if (usuario && clave) {
      formulario.reset();
      console.log("Formulario enviado");
      mensaje.textContent = "¡Datos enviados correctamente!";
      mensaje.classList.add("mostrarMje");
      mensaje.style.color = "green";
      setTimeout(() => {
        mensaje.classList.remove("mostrarMje");
      }, 5000);
    } else {
      console.log("ERROR");
      e.preventDefault();
      mensaje.textContent = "Error: Por favor revisa los datos del formulario";
      mensaje.classList.add("mostrarMje");
      mensaje.style.color = "red";
      setTimeout(() => {
        mensaje.classList.remove("mostrarMje");
      }, 5000);
    }
  });