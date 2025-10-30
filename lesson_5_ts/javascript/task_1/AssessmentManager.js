import GradeUtils from "./GradeUtils.js";
export default class AssessmentManager {
    constructor(journal) {
        this.math = journal.math;
        this.language = journal.language;
        this.science = journal.science;
        this.allGrades = GradeUtils.getAllGrades(this);
    }
    //---
    getAllGrades() {
        return [...this.allGrades];
    }
    //---
    getAverage() {
        return GradeUtils.getAverage(this.allGrades);
    }
    //---
    getMaxGrade() {
        return GradeUtils.getMax(this.allGrades);
    }
    //---
    hasGrades() {
        return (this.math.length > 0 &&
            this.language.length > 0 &&
            this.science.length > 0);
    }
}
