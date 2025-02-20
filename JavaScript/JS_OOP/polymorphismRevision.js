class Shape {
    area() {
        return `area formula is not defined`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area(){
        return Math.PI * this.radius * this.radius + ' sq';
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width + ` sq`;
    }
}

let circle = new Circle(1);
console.log(circle.area());
let rect = new Rectangle(2, 5);
console.log(rect.area());

let shapes = [new Circle(3), new Rectangle(4, 6)];
shapes.forEach(shape => console.log(shape.area()));