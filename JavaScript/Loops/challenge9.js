/* 
    use a 'for-of' loop to iterate through the array '[2,3,4,5]' and stop when the number '4' is found.
    Store the numbers before '4' in the array named 'smallNumbers'.

*/

let numbers = [1, 2, 3, 4];
let smallNumbers = [];

for(const num of numbers) {
    if(num == 4) {
        break;
    } else {
        smallNumbers.push(num);
    }
}

console.log(smallNumbers);