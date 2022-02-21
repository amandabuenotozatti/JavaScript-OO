class CheckingAccount {
    agency;
    _balance;
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
}


// JS is an open scope language and therefore it is possible 
// to visualize any attribute or property of our class

const checkingAccount1 = new CheckingAccount();
const checkingAccount2 = new CheckingAccount();



checkingAccount1.agency = 4444;
checkingAccount1.balance = 200;

checkingAccount2.agency = 4445;
checkingAccount2.balance = 0;

checkingAccount1.withdraw(50);
console.log(checkingAccount1.balance);