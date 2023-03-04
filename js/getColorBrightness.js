// Get Color Parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const colorParam = urlParams.get('color');

// Get separate HEX values from the colorParam
const redHEX = colorParam.substring(0, 1);
const greenHEX = colorParam.substring(2, 3);
const blueHEX = colorParam.substring(4, 5);

// Convert HEX values to RGB
const redRGB = parseInt(redHEX, 16);
const blueRGB = parseInt(blueHEX, 16);
const greenRGB = parseInt(greenHEX, 16);

// Create an average of all RGB values
const rgbRGB = redRGB + blueRGB + greenRGB;
const avgRGB = Math.round(rgbRGB / 3);

// Get color brightness from the average of RGB values
const brightness = Math.round(avgRGB / 25.5);
