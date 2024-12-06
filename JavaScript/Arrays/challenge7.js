/*
You have an array named 'topCities' containing "Berlin", "Singapore", "New York".
Create a hard copy of 'topCities' and store it in a variable named 'hardCopyCities'.
*/

let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities]
// let hardCopyCities = topCities.slice();

console.log(topCities)
console.log(hardCopyCities)

topCities.pop()
console.log(topCities)
console.log(hardCopyCities)