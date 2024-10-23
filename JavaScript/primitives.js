//number

let balance = 120
let newBalance = new Number(120)

console.log(typeof(balance))
console.log(typeof(newBalance)) 

// null and undefined

let firstname;
let lastname = null;
let user = undefined

console.log(firstname);
console.log(lastname);
console.log(user);

//string

let myString = "hello"
let myString1 = 'Bonjour'
let username = `vaidika`

let oldGreet = myString + " " + username;
console.log(oldGreet)

let newGreet = `Hello ${username}`
console.log(newGreet);


//symbol
let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 == sm2);

let newSymbol = Symbol("vaidika")
let newSymbol1 = Symbol("vaidika")
console.log(newSymbol == newSymbol1);

// the main feature of symbol is that it provides a unique value