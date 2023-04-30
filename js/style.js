// Creamos un objeto con la fecha y hora actuales
const fecha = new Date();

// Obtenemos el año actual del objeto fecha creado anteriormente
const anio = fecha.getFullYear();

// Esperamos a que se cargue completamente la página y luego actualizamos
// el contenido del elemento cuyo id es "fecha-footer" con el año actual
window.onload = function() {
    document.getElementById("fecha-footer").textContent = anio;
};



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

