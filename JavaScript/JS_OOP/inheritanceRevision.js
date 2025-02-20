class Animal {
    constructor(name) {
        this.name = name;
    }

    sound(){
        return `${this.name} makes a sound`;
    }
}

class Dog extends Animal {
    sound() {
        return `${this.name} barks...`;
    }
}

let myDog = new Dog('Truxii');
console.log(myDog.sound());