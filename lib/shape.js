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

  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }
}

export default Shape;
