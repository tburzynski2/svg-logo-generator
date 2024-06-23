const Square = require("./square.js");

describe("Square class", () => {
  let square = new Square();
  square.setShapeColor("red");
  square.setTextColor("white");
  square.setText("TRB");

  test("should render correct SVG for default properties", () => {
    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:red;" />
    <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="white" style="font-size: 45px; font-weight: bold; font-family: sans-serif">TRB</text>
</svg>`;
    expect(square.render()).toBe(expectedSVG);
  });
});
