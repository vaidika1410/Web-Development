/* 
Write a 'do while' loop that prompts the user to enter their favorite tea type until they enter 'stop'.
Store each tea type in an array named 'teaCollection'.
*/

let teaCollection = [];
let tea;

do{
    tea = prompt(`enter your favorite tea type : `);
    teaCollection.push(tea);
    if(tea !== "stop") {
        break;
    }

} while (tea !== "stop");

console.log(teaCollection)