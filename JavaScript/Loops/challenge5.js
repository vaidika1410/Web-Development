/*
Write a 'for' loop that multiplies each element in the array '[2,4,6]' by 2 and stores the results in a new array named 'multipliedNumbers'.
*/

let arr = [2, 4, 6];
let i;
let multipliedNumbers = [];

for(i = 0; i < arr.length; i++) {
    multipliedNumbers.push(arr[i] * 2);
}

console.log(multipliedNumbers)