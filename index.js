const Circle = require("./lib/circle.js"); // Import Circle class for creating circle logos.
const Triangle = require("./lib/triangle.js"); // Import Triangle class for creating triangle logos.
const Square = require("./lib/square.js"); // Import Square class for creating square logos.

const inquirer = require("inquirer"); // Import Inquirer for interactive CLI prompts.
const fs = require("fs"); // Import fs (File System) module for file operations.

const path = require("path"); // Import path module for working with file paths.

// Prompt the user for logo details using Inquirer.
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter logo text (three letters maximum):",
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        } else {
          return "Text must be no more than 3 characters.";
        }
      },
    },
    {
      type: "input",
      message: "Enter text color (name or hexadecimal number):",
      name: "textColor",
    },
    {
      type: "list",
      message: "Choose logo shape:",
      name: "shape",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "Enter shape background color (name or hexadecimal number):",
      name: "shapeColor",
    },
  ])
  .then((data) => {
    const filename = "logo.svg"; // Name of the SVG file to be generated.
    const shapeType = data.shape; // Determine which shape the user selected.
    let shape;

    // Instantiate the appropriate shape object based on user choice.
    if (shapeType === "circle") {
      shape = new Circle();
    } else if (shapeType === "triangle") {
      shape = new Triangle();
    } else {
      shape = new Square();
    }

    // Set the shape's properties based on user input.
    shape.setShapeColor(data.shapeColor);
    shape.setTextColor(data.textColor);
    shape.setText(data.text);

    // Construct the path where the SVG file will be saved.
    let exportPath = path.join(__dirname, "examples", filename);

    // Write the SVG content to a file.
    fs.writeFile(exportPath, shape.render(), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  });
