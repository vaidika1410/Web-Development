class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }

    get salary() {
        return `you're not allowed to see the salary`;
    }

    set salary(value) {
        if(value < 0) {
            console.log("invalid salary");
        } else {
            this._salary = value;
        }
    }
}

let employee = new Employee("Alice", -50000)

// console.log(employee.name);
console.log(employee.salary);