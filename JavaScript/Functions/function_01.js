/**
 
write a function named 'makeTea' that takes a parameter, 'typeOfTea' and returns a string like 'making green tea' when called with 'green tea'.
Store the result in a variable named 'teaOrder'.

 */

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("Green tea");

console.log(teaOrder)