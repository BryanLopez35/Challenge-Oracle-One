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


