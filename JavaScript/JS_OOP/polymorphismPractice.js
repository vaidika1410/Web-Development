class Shape {
    calculateArea() {
        return `no area formulas are defined`;
    }   
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return (3.14 * this.radius * this.radius);
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    calculateArea() {
        return (this.height * this.width);
    }
}

let circle = new Circle(1);
let rectangle = new Rectangle(4, 5);

console.log(circle.calculateArea());
console.log(rectangle.calculateArea());