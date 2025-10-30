import IGradeManager from "./types/IGradeManager";

export default class AssessmentReporter {
	private manager: IGradeManager

	constructor(manager: IGradeManager) {
		this.manager=manager
	}
	//---
	private showResult(label:string, value:number | null):void {
	const result = value !== null ? value.toFixed(2) : `немає ${label}`
	console.log(`${label}: ${result}`);
}
//---
public report(): void {
	if(this.manager.hasGrades()) {
		const grades = this.manager.getAllGrades()
		console.log('Усі оцінки:', grades.join(", "));
		
		const avg = this.manager.getAverage()
		this.showResult("середнє", avg)

		const max=this.manager.getMaxGrade()
		this.showResult("максимальне", max)
	}else{
		console.log(`Дані неповні. В одному чи декількох предметах немає оцінок`);
	}
}
}