import { Client } from "./Client.js";
import { CheckingAccount } from "./CheckingAccount.js";

//We create modules to share code between the different files on my system, helping to organize it

const client1 = new Client();
const client2 = new Client();

client1.name = "Melissa";
client1.nin = 1234567890;
client1.id = 111111111;


client2.name = "Arthur";
client2.nin = 9999999999;
client2.id = 222222222;


// JS is an open scope language and therefore it is possible 
// to visualize any attribute or property of our class

const checkingAccount1 = new CheckingAccount();
const checkingAccount2 = new CheckingAccount();

checkingAccount1.agency = 4444;

checkingAccount2.agency = 4445;

checkingAccount1.deposit(100);
checkingAccount1.withdraw(50);
checkingAccount1.transfer(10, checkingAccount2);

console.log(checkingAccount1);
console.log(checkingAccount2);