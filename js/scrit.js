const comoEntero = document.getElementById("comoEntero");
const bloqueEspecifique = document.getElementById("bloqueEspecifique");
const formulario = document.getElementById("formularioContacto");


comoEntero.addEventListener("change", function () {
    const op = this.value;
    if (op === "otro") {
        bloqueEspecifique.classList.remove("escondido");
    } else {
        bloqueEspecifique.classList.add("escondido");
    }
});

// Mostramos el mensaje de confirmación que pidieron
    alert("Mensaje enviado");

   

