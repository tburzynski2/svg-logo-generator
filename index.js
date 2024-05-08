const inquirer = require("inquirer");
const fs = require("fs");

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
      name: "contact",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      message: "Enter shape background color (name or hexadecimal number):",
      name: "shapeColor",
    },
  ])
  .then((data) => {
    const filename = "logo.svg";
    const shapeType = data.shape;

    if (shapeType === "circle") {
      const shape = new Circle();
    } else if (shapeType === "triangle") {
      const shape = new Triangle();
    } else {
      const shape = new Square();
    }

    shape.setColor(data.shapeColor);
    shape.setText(data.text, data.textColor);

    fs.writeFile(filename, JSON.stringify(shape.render()), (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
