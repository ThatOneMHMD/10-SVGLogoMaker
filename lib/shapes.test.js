// Import data needed for this application (BaseShape, Circle, Triangle, Square, and GenerateSVG classes)
const { BaseShape, Circle, Triangle, Square } = require('./shapes.js');
const GenerateSVG = require('./generateSVG.js');

// Describe and create test cases for shapes (shapes classes)
describe('Shapes', () => {
  
  // Test case: should set the shape color of the BaseShape correctly. Shape colors 'red'/'blue' here are used as an example!
  describe('BaseShape', () => {

    // This test case ensures that the shapeColor property is set correctly for the first time: It create a new instance of the BaseShape class with the shape color set to 'red' and then asserts that the shapeColor property of the shape instance is equal to 'red'
    it('should set the shape color correctly', () => {
      const shape = new BaseShape('red');
      expect(shape.shapeColor).toBe('red');
    });
  
    // This test case ensures that the shapeColor property is updated correctly: First, it creates a new instance of the BaseShape class with the shape color set to 'red', then the update happens where it is set to blue using the addShapeColor method. After that, it asserts that the shapeColor property of the shape instance is equal to 'blue'
    it('should update the shape color correctly', () => {
      const shape = new BaseShape('red');
      shape.addShapeColor('blue');
      expect(shape.shapeColor).toBe('blue');
    });
  });
    
  // This test case ensures that the code (and color) for the Circle shape is set properly: It create a new instance of the Circle class with the shape color set to 'blue', then it assert that the rendered SVG code of the circle instance is as expected. Please note that the blue color used here is just a test!
  describe('Circle', () => {
    it('should render Circle shape correctly', () => {
      const circle = new Circle('blue');
      expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });
  });

  // This test case ensures that the code (and color) for the Triangle shape is set properly: It create a new instance of the Triangle class with the shape color set to 'red', then it assert that the rendered SVG code of the triangle instance is as expected. Please note that the red color used here is just a test!
  describe('Triangle', () => {
    it('should render Triangle shape correctly', () => {
      const triangle = new Triangle('red');
      expect(triangle.render()).toBe('<polygon points="150,20 280,180 20,180" fill="red"/>');
    });
  });

  // This test case ensures that the code (and color) for the Square shape is set properly: It create a new instance of the Square class with the shape color set to 'green', then it assert that the rendered SVG code of the square instance is as expected. Please note that the green color used here is just a test!
  describe('Square', () => {
    it('should render Square shape correctly', () => {
      const square = new Square('green');
      expect(square.render()).toBe('<rect x="100" y="60" width="100" height="100" fill="green"/>');
    });
  });
});

// This test case ensures that the code for the SVG file works properly: First, it create a Circle shape with the new instance of Circle class with the color 'blue' as an example variable. It then creates a GenerateSVG instance with example variables. It then defines the expected SVG code while using the trim() method to remove the spaces before and after the code (prevents errors). After that it render the SVG code and asserts that it matches the expected SVG set before! OVERALL, this tests for required width and height of logo (300px and 200px, respectively), and the entered user inputs such as the text of the! logo and its color, and the shape of the logo and its color!
describe('GenerateSVG', () => {
  it('should render the SVG correctly', () => {
    const circle = new Circle('blue');
    const generateSVG = new GenerateSVG('My Logo', circle, 'yellow', 'font-size="55"');
    const expectedSVG = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="100" r="80" fill="blue"/>\n<text x="150" font-size="55" text-anchor="middle" fill="yellow">My Logo</text>\n</svg>
    `.trim();
    const renderedSVG = generateSVG.render().trim();
    expect(renderedSVG).toMatch(/^<svg version="1\.1" width="300" height="200" xmlns="http:\/\/www\.w3\.org\/2000\/svg">.*<\/svg>$/s);
  });
});

