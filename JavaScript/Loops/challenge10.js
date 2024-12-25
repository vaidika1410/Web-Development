/*
    use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip the 'herbal tea'.
    Store the other teas in an array named 'preferredTeas'.
*/

let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teas) {
    if(tea === 'herbal tea')
        continue;
    preferredTeas.push(tea);
}

console.log(preferredTeas);