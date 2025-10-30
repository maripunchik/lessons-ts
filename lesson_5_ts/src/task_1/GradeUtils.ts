import IStudentJournal from "./types/IStudentJournal";

export default class GradeUtils {
	static getAllGrades(journal: IStudentJournal):number[] {
		return [...journal.math,...journal.language,...journal.science]
	}
//---
	static getSum(arr: number[]):number {
		return arr.reduce((prevSum, number)=> prevSum+number,0)
	}
//---
	static getAverage(arr: number[]): number | null {
		return arr.length ? this.getSum(arr)/arr.length : null
	}
//---
static getMax(arr:number[]): number | null {
	return arr.length ? arr.reduce ((prevMax, number)=>(number>prevMax ? number : prevMax)) : null
}
}