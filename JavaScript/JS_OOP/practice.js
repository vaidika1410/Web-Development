class BankAccount {
    //private balance variable
    #balance;

    constructor(intitalBalance) {
        this.#balance = intitalBalance;
    }

    deposit(amount) {
        if (amount < 0) {
            return `amount should not be in negative`;
        } else {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if(amount > 0 && amount <= this.#balance){

        }
    }
}