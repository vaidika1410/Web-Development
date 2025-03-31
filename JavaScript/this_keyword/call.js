const person = {
    name: "Todoroki"
}

const user = {
    name: "Orochimaru"
}

function greet(city, country){
    console.log(`my name is ${this.name}. I live in ${city}, ${country}.`)
}

// The call() method invokes a function immediately and allows us to specify the this value.

greet.call(person, "Indore", "India");

greet.call(user, "Mumbai", "India");