/* write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType', and return a message like 'making green tea'.
Store the returned function in a variable named 'teaMaker' and call it with 'green tea'.
*/

function createTeaMaker(teaType){
    return TeaMaker(teaType);
}

function TeaMaker(typeOfTea){
    return `making ${typeOfTea}`;
}

let teaMaker = createTeaMaker("green tea");
console.log(teaMaker);