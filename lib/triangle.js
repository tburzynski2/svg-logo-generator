const Shape = import("./shape");

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
    }" style="fill:${this.color};" />
    <text x="${this.width / 2}" y="${
      this.height / 2
    }" dominant-baseline="middle" text-anchor="middle" fill="white">${
      this.text
    }</text>
</svg>`;

    return svgString;
  }
}

module.exports = Triangle;
