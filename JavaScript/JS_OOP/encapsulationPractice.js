
// Encapsulation (Data Hiding & Getters/Setters)
// Task: Create a BankAccount class with:

// A private balance variable.
// A method to deposit money.
// A method to withdraw money (only if the balance is sufficient).
// A getter to check the balance.

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
            this.#balance -= amount;
            return `amount withdrawn : ${amount}`;
        } else {
            return `insufficient balance in the account`;
        }
    }

    get showBalance() {
        return this.#balance;
    }
}

let myAcc = new BankAccount(5000);
console.log(myAcc);
myAcc.deposit(500);
myAcc.withdraw(200);
console.log(`${myAcc.showBalance}`)