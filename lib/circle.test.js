const Circle = require("./circle.js"); // Import the Circle class to be tested.

describe("Circle class", () => {
  // Create an instance of Circle and set specific properties for testing.
  let circle = new Circle();
  circle.setShapeColor("red");
  circle.setTextColor("white");
  circle.setText("TRB");

  // Test case to verify rendering of SVG for default properties.
  test("should render correct SVG for default properties", () => {
    // Expected SVG string with hardcoded values for default properties.
    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="100" style="fill:red;" />
  <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="white" style="font-size: 45px; font-weight: bold; font-family: sans-serif">TRB</text>
</svg>`;
    // Assert that the rendered SVG matches the expected SVG string.
    expect(circle.render()).toBe(expectedSVG);
  });
});
