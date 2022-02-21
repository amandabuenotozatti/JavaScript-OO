export class CheckingAccount {
    agency;
    _balance = 0;
    //By default in JS we use the "_" to indicate that an attribute is private and should not be changed.


    withdraw(value) {
        if(this._balance >= value) {
            this._balance -= value;
            return value;
        }
    }

    deposit(value) {
        if(value <= 0) return;
        this._balance += value;
    }

    transfer(value, checkingAccount) {
        const amountWithdraw = this.withdraw(value);
        checkingAccount.deposit(amountWithdraw);
    }
}