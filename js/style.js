window.onload = function () {
    document.getElementById("fecha-footer").textContent = obtenerAnioActual();
    verificador();
};


// Esta función permite obtener el año actual.
function obtenerAnioActual() {
    // Creamos un objeto Date con la fecha y hora actuales.
    const fecha = new Date();
    // Obtenemos el año del objeto fecha creado anteriormente.
    return fecha.getFullYear();
}


// La función mostrarTexto está diseñada para mostrar un div con id "texto-encriptado" 
// cuando se escribe algún texto en un textarea con id "texto", y ocultarlo de nuevo
// cuando no hay ningún texto en el textarea.
function mostrarTexto() {
    // Obtenemos el elemento textarea del DOM mediante su ID.
    const textarea = document.getElementById("texto");
    // También obtenemos el elemento div correspondiente al texto encriptado.
    const miDiv = document.getElementById("texto-encriptado");

    // Añadimos un evento oninput al textarea, que se ejecuta cada vez que se
    // escribe algo en dicho elemento.
    textarea.oninput = function () {
        // Dependiendo de si hay o no texto en el textarea, hacemos visible o invisible
        // el elemento div correspondiente al texto encriptado. 
        miDiv.style.display = textarea.value.length > 0 ? "block" : "none";
    };
}


function ocultar() {
    // Obtener el elemento input del DOM con el ID "texto"
    const input = document.getElementById('texto');

    // Obtener todos los elementos div con los IDs "imageAlura" y "mensajes" del DOM
    const divs = document.querySelectorAll('#imageAlura, #mensajes');

    // Crear una función para alternar la visibilidad de los elementos div anteriores en función de si el campo de entrada está vacío o no
    const toggleDivsDisplay = () => {
        const displayVal = input.value === '' ? 'block' : 'none'; // Determinar si mostrar o ocultar los divs
        divs.forEach(div => div.style.display = displayVal); // Establecer el estilo de visibilidad de cada elemento div
    }

    // Agregar un event listener al campo de entrada que escuche los cambios en su valor y active la función toggleDivsDisplay correspondientemente
    input.addEventListener('input', toggleDivsDisplay);
}




/*
const input = document.getElementById('texto');
const div = document.getElementById('contenedor-lateral');

input.addEventListener('input', function() {
  // Creamos el elemento textarea
  const textarea = document.createElement('textarea');

  // Asignamos el valor del input al contenido del textarea
  textarea.value = this.value;

  // Agregamos el textarea al div
  div.appendChild(textarea);
});
*/

