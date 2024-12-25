/*

use a for-of loop to iterate over the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"].
and stops when the length of the current tea name is greater than 10.
store the teas iterated over in an array named 'shortTeas'.

*/

let teaCollection =["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teaCollection) {
    if(tea.length > 10)
        break;
    shortTeas.push(tea);
}

console.log(shortTeas);