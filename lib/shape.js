class Shape {
  constructor() {
    this.width = 300;
    this.height = 200;
    this.text = "TOM";
    this.shapeColor = "black";
    this.textColor = "white";
  }

  setText(text) {
    this.text = text;
  }

  setColor(color) {
    this.color = color;
  }
}

module.exports = Shape;
