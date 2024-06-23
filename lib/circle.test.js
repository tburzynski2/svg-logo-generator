const Circle = require("./circle.js");

describe("Circle class", () => {
  let circle = new Circle();
  circle.setShapeColor("red");
  circle.setTextColor("blue");
  circle.setText("TRB");

  test("should render correct SVG for default properties", () => {
    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" style="fill:red;" />
<text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="blue" style="font-size: 45px; font-weight: bold; font-family: sans-serif">TOM</text>
</svg>`;
    expect(circle.render()).toBe(expectedSVG);
  });

  test("should handle empty text correctly", () => {
    circle.text = "";
    expect(circle.render()).toContain('fill="blue"');
  });
});
