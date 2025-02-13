// Abstraction (Hiding Complexity)
// Task: Create a Car class that:

// Has private properties like engineStatus and fuelLevel.
// Has public methods like startCar(), drive(), and refuel().
// The startCar() method should check if there is enough fuel before starting.

class Car {
    #engineStatus;
    #fuelLevel;

    constructor(fuelLevel){
        this.#fuelLevel = fuelLevel;
        this.#engineStatus = false; //initialising engine status as false as the car is off
    }

    startCar() {
        //the minimum fuel level required is 5 litres
        if(this.#fuelLevel >= 5) {
            this.#engineStatus = true;
            console.log(`Car started successfully!`);
        } else {
            console.log("Not enough fuel! Please refuel at least 5 liters.");
        }
    }

    drive() {
        if(this.#engineStatus) {
            return `The car has enough fuel and is in drive mode. 🚙`;
        } else {
            return "Start the car first before driving! 🛑";
        }
    }

    refuel(fuelAmount) {
        if(fuelAmount <= 0) {
            console.log("Invalid fuel amount! Please add a positive value.");
        } else {
            this.#fuelLevel += fuelAmount;
        }
    }

    get fuelLevel() {
        return this.#fuelLevel;
    }
}

let myCar = new Car(4);
// console.log(myCar.drive()); //not enough fuel

myCar.refuel(2);
console.log(`${myCar.fuelLevel}`); //fuel level increased

myCar.startCar();
console.log(myCar.drive());