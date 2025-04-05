function rateLimiter(fn, limit) {
    let lastTime = 0;

    return function (...args) {
        let now = Date.now();
        if (now - lastTime >= limit) {
            lastTime = now;
            return fn(...args);
        }
        return "Rate limit exceeded";
    };
}

function slowSquare(n) {
    console.log("Working hard...");
    return n * n;
}

let square = slowSquare(4);

let result = rateLimiter(square, 2);
console.log(result);