# SVG Logo Maker

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This is the code files for the corresponsing command-line application that functions as a Professional Logo (SVG File) Generator. Once run properly, the user will be presented with questions regarding their logo's text, shape, color, etc. Once answered, the user's input is then used to create the corresponding professional logo! This serves as a measure for reducing production costs as the user can avoid paying a graphic designer by making their own logo! Check out logo.svg, inside the examples folder, for a quick look and what the end result might look like!

## Table of Contents

  - [Demo Video](#demo-video)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)

## Demo Video

This video is approximately 2 mins long. Through it, two sample logo (SVG files) are created. The first one showcases the limitations set to the program, such as the number of letters for the logo text, while the second simply provides another logo to showcase the variety of options available while also using a hex code for the text color as an alternative to words. Please note that his video has no audio.

Link: https://youtu.be/76MCFFXsN2M

## Features

- When the user is prompted for information about their logo, then a professional logo.svg is generated with text, shape, and colours of their choosing
- When the user is prompted for logo text, they can enter up to three characters; any more and an error will pop up reminding them against doing so
- When the user is prompted for text color, they can enter a color keyword (OR a hexadecimal number); if they misspell or enter a wrong code, an error will pop out to highlight that they must choose a valid color
- When the user is prompted for a logo shape, they are presented with a list of shapes to choose from: circle, triangle, and square
- When the user is prompted for the shape's color, they can enter a color keyword (OR a hexadecimal number); if they misspell or enter a wrong code, an error will pop out to highlight that they must choose a valid color
- When the user has entered input for all the prompts, then an SVG file is created named `logo.svg` and the output text "Successfully created your logo! Go to the "examples" folder to check it out!" is printed in the command line; note that this name is only the default and the user is able to change it at will
- When the user opens their logo file in a browser, they are shown a 300x200 pixel image that matches the criteria they entered
- when "npm run test" is entered in the console, all tests pass (6 out of 6)

## Installation

To generate your own professional logo, "git clone" the repo down to your local so you have the Node project on your local. Run "npm install" in order to install the npm package dependencies as specified in the package.json: inquirer- for question propmts for inputs from the command line in terminal, tinycolor2- for checking errors in color inputs, and jest- for class tests.

## Usage

To use the application, run "node index.js" in the command line. Please make sure you are in the right directory when doing so! After answering the questions, the logo.svg file will be swiftly generated and will be ready for you at the root of the repo! Please note that in order to run a jest test, you need to type "npm run test" in the command line and the result will automatically be generated!

## License

MIT

## Credits

ThatOneMHMD - The creator of this website!
(Link: https://github.com/ThatOneMHMD)
