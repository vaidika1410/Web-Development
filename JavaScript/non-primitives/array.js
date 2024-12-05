let user = ["vaidika", true]

console.log(user[0])
//unlike objects, arrays do not have keys thus to access any value from the array, we need to use indexing
//array indexing starts from 0


//implicit type conversion
console.log("1" + 1);
console.log(1 + "2")

let isValue = true
console.log(isValue + 1) //js is assuming true as 1 and hence adding it as an integer
console.log(isValue + "hello") //this time js is treating isValue as boolean only as the other operand is also string
console.log(isValue + false) //again treating it as an integer along with the other operand resulting in a numerical calculation

console.log(typeof isValue)
let value = "2abc"
console.log(typeof value)
console.log(Number(value))
console.log(typeof Number(value))
console.log("type of null : " + typeof null)
console.log("number value of null : " + Number(null))
console.log("type of number value of null : " + typeof Number(null))