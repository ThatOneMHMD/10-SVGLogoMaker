// Included packages needed for this application (inquirer and tinycolor2 were installed using npm in node js)
const inquirer = require('inquirer');
const tinycolor = require('tinycolor2');
const fs = require('fs');
const path = require('path');

// Imported data needed for this application
const GenerateSVG = require('./lib/generateSVG.js')
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// The array of questions for user input. Note, the library tinycolor2 and the validate method of the inquirer library are being used here to test if the user's input for color matches true color. This ensures no spelling errors or the such are included. Additionally, the validate method is also used to make sure user does not input more than 3 letters for the logo text!
const questions = [  
{
    type: 'input',
    name: 'logoText',
    message: 'What would you like the logo text to display? (please enter up to 3 letters only)',
    validate: function (input) {
        if (input.length > 3) {
        return 'Please enter up to 3 letters only.';
        }
        return true;
      },
},
{
    type: 'input',
    name: 'textColor',
    message: 'What would you like the text color to be?',
    validate: function (input) {
        if (tinycolor(input).isValid()) {
          return true;
        } else {
          return 'Please enter a valid color.';
        }
    },
},
{
    type: 'list',
    name: 'shape',
    message: 'What shape would you like the logo to be?',
    choices: ["Circle", "Triangle", "Square"],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'What would you like the color of the shape to be?',
    validate: function (input) {
        if (tinycolor(input).isValid()) {
          return true;
        } else {
          return 'Please enter a valid color.';
        }
    },
},
{
  type: 'input',
  name: 'SVGName',
  message: 'What would you like to name this logo file? (spaces are not recommended)',
  default: 'logo',
},
];

// This function creates the SVG file (once provided with the parameters and properly executed) and saves it in the designated folder!
function writeToFile(fileName, data) {
    const folderPath = 'examples'; 
    const filePath = path.join(folderPath, fileName);
  
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully created your logo! Go to the "examples" folder to check it out!');
      }
    });
}

// This function initializes app (runs inquirer with the question array made previously/above) and runs the function that creates the SVG file, thus physically creating and saving the file after the user inputs their answers!
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            // Implements special dimensions for the corresponding shapes to make sure logo looks good overall (ex: matches position of text to be inside shape etc.)
            let shape;
            let textDimension;
            if (answers.shape === "Circle") {
              shape = new Circle(answers.shapeColor);
              textDimension = 'y="120" font-size="55"';

            } else if (answers.shape === "Triangle") {
              shape = new Triangle(answers.shapeColor);
              textDimension = 'y="140" font-size="50"';
                
            } else if (answers.shape === "Square") {
              shape = new Square(answers.shapeColor);
              textDimension = 'y="125" font-size="35"';
            }

            const svg = new GenerateSVG(answers.logoText, shape, answers.textColor, textDimension);
            const svgContent = svg.render();
            writeToFile(`${answers.SVGName}.svg`, svgContent);
        });
}

// Function call to initialize app
init();