class CoffeeMaker {
    #waterLevel = 0; //private field
    flag = false;

    addWater(amount) {
        if(amount > 0) {
            this.#waterLevel += amount;
        } else {
            console.log("invalid amount");
        }
    }

    #boilWater() {
        if(this.#waterLevel > 0){
        console.log("water is boiling...");
        this.flag = true;
        }
    }

    makeCoffee() {
        this.#boilWater();
        if(this.flag) {
            console.log("coffee is ready!");
        } else {
            console.log("boil water first");
        }
    }
}

let coffeeMachine = new CoffeeMaker();
coffeeMachine.addWater(400);
coffeeMachine.makeCoffee();