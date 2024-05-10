import Circle from "./lib/circle.js";
import Triangle from "./lib/triangle.js";
import Square from "./lib/square.js";

import inquirer from "inquirer";
import fs from "fs";

import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    const filename = "logo.svg";
    const shapeType = data.shape;
    let shape;

    if (shapeType === "circle") {
      shape = new Circle();
    } else if (shapeType === "triangle") {
      shape = new Triangle();
    } else {
      shape = new Square();
    }

    shape.setShapeColor(data.shapeColor);
    shape.setText(data.text, data.textColor);
    let exportPath = path.join(__dirname, "examples", filename);

    fs.writeFile(exportPath, shape.render(), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  });
