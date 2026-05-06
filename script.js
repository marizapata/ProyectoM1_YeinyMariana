const generateBtn = document.getElementById("generateBtn");

const paletteContainer = document.getElementById("paletteContainer");

const paletteSize = document.getElementById("paletteSize");



// Escuchar el click del botón
generateBtn.addEventListener("click", generatePalette);



// Función principal
function generatePalette() {

  // Limpiar colores anteriores
  paletteContainer.innerHTML = "";



  // Obtener cantidad seleccionada
  const totalColors = paletteSize.value;



  // Crear colores
  for (let i = 0; i < totalColors; i++) {

    const randomColor = generateRandomColor();



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

      <p>${randomColor}</p>

    `;



    // Agregar caja al contenedor
    paletteContainer.appendChild(colorBox);

  }

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