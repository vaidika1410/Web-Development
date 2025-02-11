class Bird {
    fly() {
        return `hey! I'm flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `penguins can't fly`;
    }
}

class Sparrow extends Bird {
    fly() {
        return `sparrows fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
let sparrow = new Sparrow();

console.log(bird.fly());
console.log(penguin.fly());
console.log(sparrow.fly());


//static method

class Calculator {
    static add(a, b){
        // static method can only be called by the class itself
        return a + b;
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

console.log(Calculator.add(2, 3));