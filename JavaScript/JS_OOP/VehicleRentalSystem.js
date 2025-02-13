class Vehicle {

    #fuelLevel;
    #rentalStatus; // if true -> can be rented , if false -> already rented
    #engineStatus = false; // engine is off by default

    constructor(fuelLevel, rentalStatus) {
        this.#fuelLevel = fuelLevel;
        this.#rentalStatus = rentalStatus;
    }

    start() {
        if (!this.#rentalStatus) {
            return "The vehicle is available for rent and cannot be started.";
        }
        if(this.#engineStatus === false) {
        if(this.#fuelLevel >= 5) {
            this.#engineStatus = true;
            return "The vehicle has enough fuel and is ready to drive";
        } else {
            return "The vehicle does not have enough fuel... please refuel";
        }
    } else {
        return `engine is already on`;
    }
    }

    stop() {
        if(this.#engineStatus === true) {
            this.#engineStatus = false;
            return "The vehicle has stopped...";
        }
        return "The vehicle is already stopped."
    }

    rent() {
        if (this.#rentalStatus) {
            this.#rentalStatus = false;
            return "The vehicle is now rented.";
        }
        this.#rentalStatus = true;
        return "The vehicle has been returned and is available for rent.";
    }
}

class Car extends Vehicle {
    constructor(fuelLevel, rentalStatus, numDoors) {
        super(fuelLevel, rentalStatus);
        this.numDoors = numDoors;
    }
}

class Bike extends Vehicle {
    constructor(fuelLevel, rentalStatus, type) {
        super(fuelLevel, rentalStatus);
        this.type = type;
    }
}

let myCar = new Car(10, true, 4);
console.log(myCar.rent());  // "The vehicle is now rented."
console.log(myCar.start()); // "The vehicle has enough fuel and is ready to drive."
console.log(myCar.stop());  // "The vehicle has stopped."

console.log("\n");

let myBike = new Bike(3, false, "sports");
console.log(myBike.rent());
console.log(myBike.start());
console.log(myBike.stop());
