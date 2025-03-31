const person = {
    name : "Vaidika",

    greet(){
        console.log(`I am ${this.name}`);
    }
}

person.greet()

const greetFunction = person.greet;
greetFunction() //the context is missing

const boundGreet = person.greet.bind({name : "Gautam"});
boundGreet()