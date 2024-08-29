function ordenarPalabras(ascendente = true) {
  const textarea = document.getElementById("listaDePalabras");
  // Obtiene el contenido del textarea
  const palabrasString = textarea.value;
  // Verifica si el textarea está vacío
  if (palabrasString.trim() === "") {
    alert("Por favor, ingresa algunas palabras para ordenar.");
    return; // Detiene la ejecución de la función si el textarea está vacío
  }

  // Divide el texto en un arreglo de palabras usando espacios y comas como delimitadores
  const palabrasArreglo = palabrasString.split(/[\s,]+/).filter(Boolean); // Filtra elementos vacíos

  // ---------------------Muestra el arreglo de palabras antes de la validación--------------------
  // console.log("Arreglo de palabras antes de validación:", palabrasArreglo);

  // if (palabrasInvalidas.length > 0) {
  //  ---------------Muestra las palabras no válidas en la consola--------------------
  //   console.log("Palabras con números o caracteres especiales:", palabrasInvalidas);

  //   alert("Por favor, ingresa solo palabras sin números ni caracteres especiales.");
  //   return; // Detiene la ejecución de la función si se encuentra una palabra no válida
  // }

  // Verifica si alguna palabra contiene números o caracteres especiales. Ademas de mostrar una alerta.
  if (palabrasArreglo.some((palabra) => !/^[a-zA-Z]+$/.test(palabra))) {
    alert(
      "Por favor, ingresa solo palabras sin números ni caracteres especiales."
    );
    return; // Se detiene la ejecución de la función si se encuentra un número o carácter no válido
  } else if (ascendente) {
    // Ordena las palabras de forma ascendente
    palabrasArreglo.sort();
  } else {
    // Ordena las palabras de forma ascendente y luego se invierte el orden
    palabrasArreglo.sort().reverse();
  }

  // Une las palabras nuevamente con espacios
  const palabrasOrdenadas = palabrasArreglo.join("-");

  // Mostrar el resultado de las palabras ordendas
  const resultado = document.getElementById("palabrasOrdenadas");
  resultado.innerHTML = palabrasOrdenadas;
}

// Limpieza del contenido del textarea y el resultado
function limpiar() {
  const textarea = document.getElementById("listaDePalabras");
  textarea.value = "";

  const resultado = document.getElementById("palabrasOrdenadas");
  resultado.innerHTML = "";
}
