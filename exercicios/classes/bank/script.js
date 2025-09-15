class BankAccount {
    constructor(holder) {
        this.holder = holder
        this.balance = 0
    }

    get availableBalance() {
        return `Current balance of ${this.holder}: R$${this.balance}`
    }

    set deposit(value) {
        this.balance += value
    }

    set withDraw(value) {
        if (value > this.balance) {
            console.log("Insufficiente balance!");   
        } else {
            this.balance -= value
        }
    }
}

const account = new BankAccount("Ismael")

account.deposit = 500
account.withDraw = 100
console.log(account.availableBalance);
