// Abstraction (Hiding Complexity)
// Task: Create a Car class that:

// Has private properties like engineStatus and fuelLevel.
// Has public methods like startCar(), drive(), and refuel().
// The startCar() method should check if there is enough fuel before starting.

class Car {
    #engineStatus;
    #fuelLevel;

    constructor(fuelLevel) {
        this.#fuelLevel = fuelLevel;
    }

    startCar() {
        if(this.#fuelLevel >= 5) {
            console.log("car starts");
            state = true;
        } else {
            console.log("Not enough fuel, please refuel first!");
        }
    }

    drive() {
        return `the car has enough fuel and is on drive mode`;
    }

    refuel(fuel) {
        if(fuel > 0) {
            this.#fuelLevel += fuel;
        }
    }

    get status() {
        return this.#fuelLevel;
    }
}

let myCar = new Car(4);
console.log(`${myCar.status}`);