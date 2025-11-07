import BankAccount from "../BankAccountAbstract.js";
export default class CheckingAccount extends BankAccount {
    constructor() {
        super("CheckingAccount");
    }
}
