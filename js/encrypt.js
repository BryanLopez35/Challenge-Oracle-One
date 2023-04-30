// Obtenemos la referencia al elemento del DOM con el ID "texto".
const entrada = document.getElementById("texto");

// Obtenemos la referencia al elemento del DOM con el ID "texto2".
const salida = document.getElementById("texto2");


function verificador() {
    // Obtenemos el elemento contenedor del DOM.
    const contenedor = document.getElementById("texto");

    // Añadimos un evento input al contenedor.
    contenedor.addEventListener("input", function (event) {
        // Obtenemos el elemento que desencadenó el evento input.
        const textoInput = event.target;

        // Verificamos si el elemento es un textarea.
        if (textoInput.tagName === "TEXTAREA") {
            const textoIngresado = textoInput.value;

            // Utilizamos una expresión regular para verificar si el texto ingresado cumple ciertos requisitos.
            if (/^[a-z\s]*$/.test(textoIngresado)) {
                ocultar();
                mostrarTexto();
            } else {
                // Si el texto ingresado no es válido, eliminamos el último carácter ingresado.
                textoInput.value = textoInput.value.slice(0, -1);
                alert("Solo se permiten letras minúsculas y sin acentos");
            }
        }
    });
}


// Objeto que asigna letras vocales a cadenas de texto correspondientes.
const llaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función que encripta el texto ingresado y muestra el resultado en un cuadro de diálogo de alerta.
function procesar() {
    const texto = entrada.value;
    const resultado = encriptar(texto);
    if (salida.value !== resultado) {
        salida.value = resultado;
    }
    alert(resultado);
}

// Función que desencripta el texto encriptado ingresado y muestra el resultado en un cuadro de diálogo de alerta.
function procesar2() {
    const textoEncriptado = entrada.value;
    const resultado = desencriptar(textoEncriptado);
    if (salida.value !== resultado) {
        salida.value = resultado;
    }
    alert(resultado);
}

// Función auxiliar que reemplaza las vocales del texto ingresado por sus valores correspondientes en el objeto "llaves".
function encriptar(texto) {
    return texto.replace(/[aeiou]/g, function (match) {
        return llaves[match];
    });
}

// Función auxiliar que desencripta el texto encriptado, utilizando un objeto invertido dinámicamente creado para hacer la inversión.
function desencriptar(textoEncriptado) {
    const llavesInvertidas = {};
    // Recorremos el objeto "llaves" para crear un objeto nuevo "llavesInvertidas" que tenga como claves los valores del objeto original y como valores las claves correspondientes.
    for (let llave in llaves) {
        llavesInvertidas[llaves[llave]] = llave;
    }
    // Reemplazamos las cadenas de texto encriptado correspondientes con sus valores desencriptados utilizando el objeto "llavesInvertidas".
    return textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, function (match) {
        return llavesInvertidas[match];
    });
}
