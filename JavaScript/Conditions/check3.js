//checking if a variable is number or not:

let score = 44;

if (typeof score === 'number') { //strict checking
    console.log("yep, this is a number");
} else { 
    console.log("no that is not a number");
}

let balance = "502"

if(typeof balance === 'number'){
    console.log("yes it is a number")
} else {
    console.log("no it is not a number")
}

let user = []

if (typeof user === 'object') { //'array' is not a type
    console.log("yes it is an object")
} else {
    console.log("no it is not an object")
}