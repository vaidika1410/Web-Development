// using classic JS function

function fibonacci(n){
    if(n <= 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

// console.log(fibonacci(40));

// using memoization
function memoize(fn){
    const cache = new Map();

    return function(...args){
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

const fastFib = memoize(fibonacci);
console.log(fastFib(35))
console.log(fastFib(40))