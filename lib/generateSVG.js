// class where logo/svg file code is made. This code takes responses from user and implements them accordingly (note that logo is only really made when this class is applied in index.js). This class implements logoText (text in the logo), shape, text color, and text dimension which is explained later in index.js (mainly makes sure text is inside shape)
class GenerateSVG {
    constructor(logoText, shape, textColor, textDimension) {
        this.logoText = logoText;
        this.shape = shape;
        this.textColor = textColor;
        this.textDimension = textDimension;
    }

    render() {
        return (
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n${this.shape.render()}\n<text x="150" ${this.textDimension} text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>\n</svg>`
        );
    }
}

// Export the GenerateSVG class for use in other files
module.exports = GenerateSVG;