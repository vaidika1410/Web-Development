/*

    Write a 'for' loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
    Store the cities in a new array named visitedCities.

*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for(let i=0; i<cities.length; i++) {
    if(cities[i] === 'Paris') {
        continue;
    } else {
        visitedCities.push(cities[i]);
    }
}

console.log(visitedCities);