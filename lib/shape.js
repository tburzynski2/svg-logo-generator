// Define a generic Shape class for creating SVG shapes.
class Shape {
  // Constructor initializes default properties of the shape.
  constructor() {
    this.width = 300; // Default width of the shape.
    this.height = 200; // Default height of the shape.
    this.text = "TOM"; // Default text displayed inside the shape.
    this.shapeColor = "black"; // Default color of the shape.
    this.textColor = "white"; // Default color of the text inside the shape.
  }

  // Method to set the text displayed inside the shape.
  setText(text) {
    this.text = text;
  }

  // Method to set the color of the shape.
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  // Method to set the color of the text inside the shape.
  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

module.exports = Shape; // Export the Shape class for use in other parts of the application.
