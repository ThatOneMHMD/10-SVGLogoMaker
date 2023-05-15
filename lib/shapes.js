// base class: shapecolor property will be used for all shapes so instead of rewriting it again and again, we just extend this base shape!
class BaseShape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    // This method is later used with tests!
    addShapeColor(shapeColor){
        this.shapeColor = shapeColor;
    }
};

// class that renders (uses the render method for) an SVG code for a circle with the specified shapeColor
class Circle extends BaseShape {
    render() {
        return(`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`);
    } 
};

// class that renders an SVG code for a triangle with the specified shapeColor
class Triangle extends BaseShape {
    render() {
        return(`<polygon points="150,20 280,180 20,180" fill="${this.shapeColor}"/>`);
    } 
};

// class that renders an SVG code for a square with the specified shapeColor
class Square extends BaseShape {
    render() {
        return(`<rect x="100" y="60" width="100" height="100" fill="${this.shapeColor}"/>`);
    } 
};

// Export the (BaseShape, Circle, Triangle, and Square) classes for use in other files
module.exports = {BaseShape, Circle, Triangle, Square};