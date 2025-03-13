document.addEventListener("DOMContentLoaded", function () {
    // Get the slider elements
    const redSlider = document.getElementById("redslider");
    const greenSlider = document.getElementById("greenslider");
    const blueSlider = document.getElementById("blueslider");

    // Get the span elements that show current RGB values
    const redValue = document.getElementById("redvalue");
    const greenValue = document.getElementById("greenvalue");
    const blueValue = document.getElementById("bluevalue");

    // Get elements for displaying and copying RGB values
    const colorBox = document.getElementById("color-box");
    const rgbText = document.getElementById("input-value");
    const copyButton = document.getElementById("copyrgbvalue");

    // Function to update RGB color dynamically
    function updateColor() {
        let r = redSlider.value;
        let g = greenSlider.value;
        let b = blueSlider.value;

        // Update the span text values
        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;

        // Construct RGB color
        let rgbColor = `rgb(${r}, ${g}, ${b})`;

        // Update the color box background
        colorBox.style.backgroundColor = rgbColor;

        // Update the displayed RGB value
        rgbText.textContent = rgbColor;

        // Update the copy button value
        copyButton.setAttribute("data-rgb", rgbColor);
    }

    // Attach event listeners to sliders
    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);

    // Function to copy RGB value to clipboard
    copyButton.addEventListener("click", function () {
        const rgbColor = copyButton.getAttribute("data-rgb");
        navigator.clipboard.writeText(rgbColor).then(() => {
            alert(`Copied to clipboard: ${rgbColor}`);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    });

    // Initialize the color on page load
    updateColor();
});
