const user = {
    name: "Todoroki"
}

const person = {
    name: "Videl"
}

function greet(city, country){
    console.log(`My name is ${this.name}. I live in ${city}, ${country}.`);
}

// The apply() method is the same as call(), except it takes an array of arguments instead of listing them separately.
greet.apply(person, ["Indore", "India"]);
greet.apply(user, ["Indore", "India"]);