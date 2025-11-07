export default class BankAccount {
    constructor(accountType) {
        this.accountType = accountType;
    }
    //---
    deposit(a) {
        console.log(`${this.accountType}: Deposited ${a}`);
    }
    //---
    withdraw(a) {
        console.log(`${this.accountType}: Withdrawn ${a}`);
    }
    //---
    transfer(to, a) {
        console.log(`${this.accountType}: Transferred ${a} to ${to}`);
    }
}
