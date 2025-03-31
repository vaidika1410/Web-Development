const player = {
    name: "Virat Kohli"
};

function introduce() {
    console.log(`Hello, my name is ${this.name}`);
}

// Q: Use `call()` to make `introduce()` use `player` as `this`.

introduce.call(player)