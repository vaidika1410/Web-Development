/*
Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
*/

let total = 0;
let i = 1;

do {
    total += i;
    i++;
} while (i < 4);

console.log(total)