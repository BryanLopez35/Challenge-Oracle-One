// Creamos un objeto fecha con la fecha y hora actuales
const fecha = new Date();

// Obtenemos el año actual del objeto fecha creado anteriormente
const anio = fecha.getFullYear();

// Esperamos a que se cargue completamente la página y luego actualizamos
// el contenido del elemento cuyo id es "fecha-footer" con el año actual
window.onload = function() {
    document.getElementById("fecha-footer").textContent = anio;
};


// Un objeto que asigna letras vocales a cadenas de texto correspondientes.
let condiciones = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

// Una función que muestra una alerta con un texto.
function showText(texto) {
    // Obtiene el contenido de texto de un elemento input con ID "texto".
    var inputText = document.getElementById("texto").value;
    // Muestra una alerta con el texto ingresado.
    alert(inputText);
}


// Seleccionamos el campo input con id "texto" del DOM y lo almacenamos en la variable "input"
const input = document.getElementById('texto');

// Seleccionamos los elementos div con los ids "imageAlura" y "mensajes" del DOM y los almacenamos en la variable "divs"
const divs = document.querySelectorAll('#imageAlura, #mensajes');

// Agregamos un listener al evento 'input' del elemento input seleccionado, que dispara una función anónima cada vez que el usuario introduce texto.
input.addEventListener('input', function() {
  
  // Si el valor del input es una cadena vacía
  if (input.value === '') {
    
    // Iteramos a través de todos los elementos div almacenados en la variable "divs"
    divs.forEach(function(div) {
      // Establecemos la propiedad CSS display del div en "block", es decir, hacemos que el div sea visible en la página
      div.style.display = 'block';
    });
    
  } else { // Si el valor del input no es una cadena vacía
    
    // Iteramos a través de todos los elementos div almacenados en la variable "divs"
    divs.forEach(function(div) {
      // Establecemos la propiedad CSS display del div en "none", es decir, hacemos que el div no sea visible en la página
      div.style.display = 'none';
    });
    
  }
});



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



