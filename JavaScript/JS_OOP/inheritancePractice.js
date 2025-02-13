class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`This is a ${this.year} ${this.make} ${this.model}.`)
    }

    startEngine() {
        console.log("The engine is starting...")
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    displayInfo() {
        console.log(`This is a ${this.year} ${this.make} ${this.model}. It has ${this.numDoors} doors`);
    }
}

class Bike extends Vehicle {
    constructor(make, model, year, type) {
        super(make, model, year);
        this.type = type;
    }

    displayInfo() {
        console.log(`This is a ${this.year} ${this.make} ${this.model}. It is a ${this.type} bike`);
    }
}

let myCar = new Car("Toyota", "Camry", 2022, 4);
myCar.displayInfo();

let myBike = new Bike("Kawasaki", "Ninja ZX-10R", 2004, "sports");
myBike.displayInfo(); 

myCar.startEngine();
myBike.startEngine();