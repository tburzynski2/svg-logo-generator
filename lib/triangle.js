import Shape from "./shape.js";

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    const svgString = `<svg width="${this.width}" height="${
      this.height
    }" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,${this.height} ${this.width / 2},0 ${this.width},${
      this.height
    }" style="fill:${this.shapeColor};" />
    <text x="${this.width / 2}" y="${
      this.height / 2
    }" dominant-baseline="middle" text-anchor="middle" fill="${
      this.textColor
    }" style="font-size: 45px; font-weight: bold; font-family: sans-serif">${
      this.text
    }</text>
</svg>`;

    return svgString;
  }
}

export default Triangle;
