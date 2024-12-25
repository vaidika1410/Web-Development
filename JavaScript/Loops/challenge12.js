/*

    use a for-in loop to loop through an object containing city populations.
    skip any city with a population below 3 million and store the rest in a new object named 'largeCities'.

*/

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

let largeCities = {};

for(const city in worldCities){
    if(worldCities[city] < 3000000)
        continue;
    largeCities[city] = worldCities[city];
}

console.log(largeCities);