let computer = {cpu : 12}
let lenovo = {
    screen : "HD",
    __proto__ : computer
}

console.log(`lenovo`, lenovo.__proto__, lenovo.screen) //the double underscore is known as "dundar" prototype
//there is another way to create prototypes of some object for another object

let genericCar = {
    tyres: 4
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla`, Object.getPrototypeOf(tesla))

//to check whether the object is having its own property, 
console.log(tesla.hasOwnProperty('tyres')) //false => its inheriting it from genericClass
console.log(genericCar.hasOwnProperty('tyres')) //true