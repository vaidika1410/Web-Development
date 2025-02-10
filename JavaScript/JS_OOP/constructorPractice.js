// Create a Car constructor that takes brand, model, and year, and includes a method to display car details.

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    //adding another property 
    this.mileage = 0;

    // In your original code, displayDetails is re-created for every instance of Car.
    // this.displayDetails = function() {
    //     return `Car : ${this.brand} ${this.model} (${this.year})`;
    // }
}

// Using Car.prototype.displayDetails makes it shared across all instances, improving memory efficiency.
Car.prototype.displayDetails = function() {
    return `Car : ${this.brand} ${this.model} (${this.year})`;
}

Car.prototype.updatedMileage = function(mileage){
    this.mileage = mileage;
    return `updated mileage is ${mileage} km`
}

Car.prototype.needsService = function() {
    if(this.mileage > 10000) {
        return "Car needs servicing";
    } else {
        return "Car is good to go!";
    }
}

let Toyota = new Car("Toyota", "Corolla", (2022))
console.log(Toyota)
console.log(Toyota.displayDetails())
console.log(Toyota.mileage)
console.log(Toyota.updatedMileage(12500))
console.log(Toyota.needsService())