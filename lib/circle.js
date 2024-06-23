const Shape = require("./shape.js"); // Import the Shape class for inheritance.

class Circle extends Shape {
  constructor() {
    super(); // Call the constructor of the Shape class to inherit its properties.
  }

  // Method to render the Circle as an SVG string.
  render() {
    // Generate SVG string representing the Circle with dynamic properties.
    const svgString = `<svg width="${this.width}" height="${
      this.height
    }" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${this.width / 2}" cy="${this.height / 2}" r="${
      Math.min(this.width, this.height) / 2
    }" style="fill:${this.shapeColor};" />
  <text x="${this.width / 2}" y="${
      this.height / 2
    }" dominant-baseline="middle" text-anchor="middle" fill="${
      this.textColor
    }" style="font-size: 45px; font-weight: bold; font-family: sans-serif">${
      this.text
    }</text>
</svg>`;

    return svgString; // Return the generated SVG string.
  }
}

module.exports = Circle; // Export the Circle class for use in other parts of the application.
