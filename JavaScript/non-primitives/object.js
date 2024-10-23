let obj = {}

console.log(obj)
console.log(typeof(obj))


let username = {firstname: "vaidika", isLoggedin: true}
console.log(username)

const user = {
    firstname: "vaidika",
    lastname: "kaul",
    isLoggedin: true
}

// the object user is a constant now that means the memory space is reserved for this object,
// but we can change the values inside the object as they are mutable and primitives

user.isLoggedin = false

console.log(user)

// there are cases when the name of the keys are in spaces, to declare and print those keys, 
let product = {
    'product name': "iphone 13",
    color: "white",
    variant: "128Gb"
}

console.log(product['product name'])

// dates 
let today = new Date();

console.log(today)
console.log(today.getDate())