/*

    write a for-each loop that iterates over the array ["Berlin", "Tokyo", "Sydney", "Paris"]
    skip "Sydney" and store the other cities in a new array named 'travelledCities'.

*/

let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];

cities.forEach((city) => {
    if(city === "Sydney")
        return
    travelledCities.push(city);
})

console.log(travelledCities);