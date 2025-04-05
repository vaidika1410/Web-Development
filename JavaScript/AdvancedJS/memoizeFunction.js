// 💡 What is a memoize function?
// A memoize function is like a shortcut memory for your code.

// It remembers the result of a function call so you don’t have to do the work again if the same inputs come up later.

// example of a slow function
function slowSquare(n) {
    console.log("Working hard...");
    return n * n;
  }
  
  console.log(slowSquare(5)); // "Working hard..." → 25
  console.log(slowSquare(5)); // "Working hard..." again → 25
  

// using a memoize function
function memoize(fn){
    const cache = new Map;

    return function(...args){
        const key = JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    } 
}

const fastSquare = memoize(slowSquare)
console.log(fastSquare(8));