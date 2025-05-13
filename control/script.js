// script.js

// Get the hue slider and the hue phrase display
const hueSlider = document.getElementById('hueSlider');
const huePhrase = document.getElementById('huePhrase');

// Function to map hue to a color-related phrase
function getColorPhrase(hue) {
    if (hue >= 0 && hue < 30) {
        return "Warm Red";  // Reds and oranges
    } else if (hue >= 30 && hue < 90) {
        return "hello";  // Yellows
    } else if (hue >= 90 && hue < 150) {
        return "Fresh Green";  // Greens
    } else if (hue >= 150 && hue < 210) {
        return "Calm Blue";  // Blues
    } else if (hue >= 210 && hue < 270) {
        return "Cool Purple";  // Purples
    } else if (hue >= 270 && hue < 330) {
        return "Pinkish Hue";  // Pinks
    } else {
        return "Warm Red";  // Reds again after 330
    }
}

// Function to update the background gradient dynamically based on the hue
function updatePulseBackground() {
    // Get the hue value from the slider
    const hue = hueSlider.value;

    // Update the displayed hue phrase
    huePhrase.textContent = getColorPhrase(hue);

    // Generate new colors based on the hue
    const startColor = `hsl(${hue}, 100%, 50%)`;  // Full saturation and medium brightness for a vibrant color
    const endColor = `hsl(${(hue + 180) % 360}, 100%, 50%)`; // Opposite color for contrast

    // Update the background gradient with pulsing effect
    document.body.style.backgroundImage = `radial-gradient(circle, ${startColor}, ${endColor}`;
}

// Initialize with default hue value
updatePulseBackground();

// Add event listener to the hue slider to update the background and phrase in real-time
hueSlider.addEventListener('input', updatePulseBackground);
