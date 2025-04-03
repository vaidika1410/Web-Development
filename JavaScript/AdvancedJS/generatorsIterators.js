// the * when used with a function creates a generator

function* generateNumber(){
    yield 1;
    yield 2;
    yield 3;
}

let gen = generateNumber();
let gen1 = generateNumber();


//the next() method is an iterator
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);