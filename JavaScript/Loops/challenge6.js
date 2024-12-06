/*
Write a 'for' loop that lists all the cities in the array ["Paris", "New York", "Tokyo", "London"] and stores each city in a new array named 'cityList'.
*/

let city = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for(let i = 0; i < city.length; i++) {
    cityList.push(city[i]);
}

console.log(cityList)