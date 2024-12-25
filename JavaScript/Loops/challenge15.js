/*

write a for loop that iterates through the array [2, 5, 7, 9].
skip the value '7' and multiply the rest by 2. store the results in a new arrar named 'doubledNumbers'.

*/

let numbers = [2, 5, 7, 9];
let doubledNumbers = [];

for(let i=0; i<numbers.length; i++){
    if(numbers[i] == 7)
        continue;
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);