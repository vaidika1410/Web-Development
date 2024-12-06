/*
You have an array named 'popularTeas' containing "green tea", "oolong tea", and "chai".
Create a soft copy of this array named 'softCopyTeas'.
*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas // a soft copy of popularTeas is being stored

console.log(softCopyTeas) 

popularTeas.pop() // any changes in popularTeas will affect softCopyTeas as it points towards the same reference as the popularTeas does
console.log(popularTeas)
console.log(softCopyTeas)