class Car {
    #speed; //private variable declaration

    constructor(speed, brand) {
        this.#speed = speed;
        this.brand = brand;
    }

    accelerate(amount) {
        this.#speed += amount;
        console.log(`${this.brand} is moving at ${this.#speed} km/hr`);
    }

    getSpeed() {
        return this.#speed;
    }
}

let myCar = new Car(100, 'Porsche 911');
console.log(myCar.getSpeed() + ' km/hr');
myCar.accelerate(20);