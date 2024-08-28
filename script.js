
function ordenarPalabras(ascendente = true) {
    const textarea = document.getElementById("listaDePalabras");
    const palabrasString = textarea.value; // Obtiene el contenido del textarea
    const palabrasArreglo = palabrasString.split(" "); // Divide la cadena en un arreglo por espacios

    if (ascendente) {
        palabrasArreglo.sort(); // Ordena las palabras alfabéticamente
    } else {
        palabrasArreglo.sort().reverse(); // Ordena las palabras alfabéticamente y luego invierte el orden
    }

    const palabrasOrdenadas = palabrasArreglo.join(" "); // Une las palabras nuevamente con espacios

    // Muestra el resultado
    const resultado = document.getElementById("palabrasOrdenadas");
    resultado.innerHTML = palabrasOrdenadas;
}


function limpiar() {
    const textarea = document.getElementById("listaDePalabras");
    textarea.value = ""; // Limpia el contenido del textarea
    
    const resultado = document.getElementById("palabrasOrdenadas");
    resultado.innerHTML = ""; // Limpia el contenido del resultado
}