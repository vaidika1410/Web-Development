function outer(){
    let x = 0;

    return function increment(){
        return x++;
    }
}

let value = outer();
value();
console.log(value());
console.log(value());
console.log(value());
console.log(value());
console.log(value());