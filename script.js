// Color picker input element
const colorPicker = document.getElementById('colorPicker');

// Color hex code display element
const colorHexCode = document.getElementById('colorHexCode');

// Event listener for color picker change
colorPicker.addEventListener('input', updateColorHexCode);

// Function to update the color hex code display
function updateColorHexCode() {
    const color = colorPicker.value;
    colorHexCode.textContent = color;
}
