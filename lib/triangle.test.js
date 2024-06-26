const Triangle = require("./triangle.js"); // Import the Triangle class to be tested.

describe("Triangle class", () => {
  // Create an instance of Triangle and set specific properties for testing.
  let triangle = new Triangle();
  triangle.setShapeColor("red");
  triangle.setTextColor("blue");
  triangle.setText("TRB");

  // Test case to verify rendering of SVG for default properties.
  test("should render correct SVG for default properties", () => {
    // Expected SVG string with hardcoded values for default properties.
    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,200 150,0 300,200" style="fill:red;" />
    <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="blue" style="font-size: 45px; font-weight: bold; font-family: sans-serif">TRB</text>
</svg>`;
    // Assert that the rendered SVG matches the expected SVG string.
    expect(triangle.render()).toBe(expectedSVG);
  });
});
