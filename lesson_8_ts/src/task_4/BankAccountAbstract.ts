
import IDepositService from "./interfaces/IDepositService.js";
import IWithdrawService from "./interfaces/IWithdrawService.js";
import ITransferService from "./interfaces/ITransferService.js";


export default abstract class BankAccount implements IDepositService,IWithdrawService,ITransferService {
	constructor(protected accountType: string){}
		//---
	deposit(a: number) { 
	console.log(`${this.accountType}: Deposited ${a}`); 
	}
	//---
   withdraw(a: number) { 
	console.log(`${this.accountType}: Withdrawn ${a}`); 
   }
  //---
   transfer(to: string, a: number) { 
	console.log(`${this.accountType}: Transferred ${a} to ${to}`); 
	}
}