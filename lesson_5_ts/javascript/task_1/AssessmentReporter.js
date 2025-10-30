export default class AssessmentReporter {
    constructor(manager) {
        this.manager = manager;
    }
    //---
    showResult(label, value) {
        const result = value !== null ? value.toFixed(2) : `немає ${label}`;
        console.log(`${label}: ${result}`);
    }
    //---
    report() {
        if (this.manager.hasGrades()) {
            const grades = this.manager.getAllGrades();
            console.log('Усі оцінки:', grades.join(", "));
            const avg = this.manager.getAverage();
            this.showResult("середнє", avg);
            const max = this.manager.getMaxGrade();
            this.showResult("максимальне", max);
        }
        else {
            console.log(`Дані неповні. В одному чи декількох предметах немає оцінок`);
        }
    }
}
