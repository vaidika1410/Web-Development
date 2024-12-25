/*

    write a 'for' loop that loops through an array ['green tea', 'black tea', 'chai', 'oolong tea'], and stops the loop when it finds 'chai'.
    Store all the teas before 'chai' and store them in an array named 'selectedTeas'.

*/

let teas = ['green tea', 'black tea', 'chai', 'oolong tea'];
let selectedTeas = [];

for(let i = 0; i<teas.length; i++) { 
    if(teas[i] === 'chai') {
        break;
    } else {
        selectedTeas.push(teas[i]);
    }
}

console.log(selectedTeas);