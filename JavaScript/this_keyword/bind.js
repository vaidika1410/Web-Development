const person = {
    name: "Todoroki"
}

const user = {
    name: "Orochimaru"
}

function greet(city, country){
    console.log(`my name is ${this.name}. I live in ${city}, ${country}.`)
}

// The bind() method does not immediately invoke the function. Instead, it returns a new function with this permanently bound to the given object.

const boundGreet = greet.bind(person, "Indore", "India");
boundGreet();
const boundGreet_ = greet.bind(user, "Delhi", "India");
boundGreet_();