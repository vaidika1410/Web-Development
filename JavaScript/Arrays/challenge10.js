/*
You have an array named 'cityBucketList' containing "Kyoto", "London", "Cape Town" and "Vancouver".
Check if "London" is in the array and store the result in a variable named 'isLondonInList'.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList;

cityBucketList.forEach(function(x){
    if(x == "London"){
        isLondonInList = true
    }
}) 
// complex!!!
// easy peasy lemon squeezy method

let anotherCheck = cityBucketList.includes("London") // this is a strict checking method
console.log(anotherCheck)
console.log(isLondonInList)