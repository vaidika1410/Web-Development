/*
Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.
*/

let i = 1;
let sum = 0;

while(i < 6) {
    sum += i;
    i++;
}

console.log("sum : " + sum)