function Tea(tea){
    this.tea = tea;
}

let lemonTea = new Tea("lemon tea");
let oolongTea = new Tea("oolong tea");
let greenTea = new Tea("green tea");
let blackTea = new Tea("black tea");

// console.log(lemonTea)
// console.log(oolongTea)
// console.log(greenTea)
// console.log(blackTea)

function Fruits(name, color, flavor){
    this.name = name;
    this.color = color;
    this.flavor = flavor;
    this.describe = function(){
        return `this is a/an ${this.name} with the flavor ${this.flavor}`;
    }
}

let apple = new Fruits("apple", "red", "sweet")
let mango = new Fruits("mango", "yellow", "sweet, sour or tart")
let grape = new Fruits("grape", "green", "sweet or sour")
let banana = new Fruits("banana", "yellow", "sweet")
// console.log(apple, "\n", apple.describe(), "\n", mango, "\n", mango.describe(), "\n", grapes, "\n", grapes.describe(), "\n", banana, "\n", banana.describe())

function Animal(species) {
    this.species = species;
}

let dog = new Animal("dog")
let cat = new Animal("cat")
// console.log(dog)

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

// console.log(dog.sound())
// console.log(cat.sound())

function Drink(drink){
    this.drink = drink;
    if(!new.target){ // generate error if the object is not instantiated using new keyword
        throw new Error("Drink must be called with new keyword")
    }
}

let tea = new Drink("tea")
let coffee = Drink("coffee")