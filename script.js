const generateBtn = document.getElementById("generateBtn");

const paletteContainer = document.getElementById("paletteContainer");

const paletteSize = document.getElementById("paletteSize");

const colorFormat = document.getElementById("colorFormat");

const message = document.getElementById("message");



// Escuchar el click del botón
generateBtn.addEventListener("click", generatePalette);



// Función principal
function generatePalette() {

  // Limpiar colores anteriores
  paletteContainer.innerHTML = "";



  // Obtener cantidad seleccionada
  const totalColors = paletteSize.value;


  // Guarda: HEX o HSL según lo que el usuario elija
  const selectedFormat = colorFormat.value;


  // Crear colores
  for (let i = 0; i < totalColors; i++) {

   let randomColor;

if (selectedFormat === "HEX") {

  randomColor = generateRandomColor();

} else {

  randomColor = generateRandomHSL();

}



    // Crear caja del color
    const colorBox = document.createElement("div");



    // Aplicar estilos
    colorBox.style.backgroundColor = randomColor;

    colorBox.style.height = "150px";

    colorBox.style.borderRadius = "10px";

    colorBox.style.display = "flex";

    colorBox.style.alignItems = "center";

    colorBox.style.justifyContent = "center";



    // Mostrar código HEX
   colorBox.innerHTML = `

  <p class="colorCode">${randomColor}</p>

`;


    // Agregar caja al contenedor
    paletteContainer.appendChild(colorBox);

  }
    // Mostrar mensaje
  message.textContent = "Paleta generada correctamente ✅";

  // Borrar mensaje después de 3 segundos
  setTimeout(() => {

    message.textContent = "";

  }, 3000);

}



// Generar color HEX aleatorio
function generateRandomColor() {

  const letters = "0123456789ABCDEF";



  let color = "#";



  for (let i = 0; i < 6; i++) {

    color += letters[Math.floor(Math.random() * 16)];

  }



  return color;

}

// Generar color HSL aleatorio
function generateRandomHSL() {

  // Generar tono entre 0 y 360
  const hue = Math.floor(Math.random() * 360);

  // Generar saturación entre 0% y 100%
  const saturation = Math.floor(Math.random() * 100);

  // Generar iluminación entre 0% y 100%
  const lightness = Math.floor(Math.random() * 100);

  // Retornar color en formato HSL
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;

}