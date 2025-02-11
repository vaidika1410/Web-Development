class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBalance() {
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount();
account.deposit(100)

console.log(account.getBalance()) //undefined => not accessible outside class