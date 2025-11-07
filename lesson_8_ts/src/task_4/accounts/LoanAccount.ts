
import ILoanService from "../interfaces/ILoanService.js";

export default class LoanAccount implements ILoanService {
	loanRequest(a: number): void {
		console.log(`LoanAccount: Loan of ${a} requested`);
	}
}