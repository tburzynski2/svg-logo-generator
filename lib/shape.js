class Shape {
  constructor() {
    this.width = 300;
    this.height = 200;
    this.text = "TOM";
    this.shapeColor = "black";
    this.textColor = "white";
  }

  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }
}

module.exports = Shape;
