class CoffeeMachine {
    start() {
        return `starting the machine...`;
    }

    brewCoffee() {
        return `brewing coffee`;
    }

    pressStartButton() {
        //will return undefined until the values are stored in a variable
        // this.start();
        // this.brewCoffee();

        
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        
        return `${msgOne} + ${msgTwo}` 
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());