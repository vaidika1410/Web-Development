const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function sayHello(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}

// Q: Call `sayHello` with:
// 1. `person1` using `call()` with "New York", "USA"
// 2. `person2` using `apply()` with ["London", "UK"]
// 3. Create a bound function for `person1` and store it in `aliceHello`. Call it later with "Paris", "France".

sayHello.call(person1, "New York", "USA")
sayHello.apply(person2, ["London", "UK"])
const aliceHello = sayHello.bind(person1, "Paris", "France")
aliceHello()