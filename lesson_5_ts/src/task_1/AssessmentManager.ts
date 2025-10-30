import IStudentJournal from "./types/IStudentJournal.js";
import GradeUtils from "./GradeUtils.js";

export default class AssessmentManager {
  math: number[];
  language: number[];
  science: number[];
  private allGrades: number[];

  constructor(journal: IStudentJournal) {
    this.math = journal.math;
    this.language = journal.language;
    this.science = journal.science;

    this.allGrades = GradeUtils.getAllGrades(this);
  }
  //---
  public getAllGrades(): number[] {
    return [...this.allGrades];
  }
  //---
  getAverage(): number | null {
    return GradeUtils.getAverage(this.allGrades);
  }
  //---
  getMaxGrade(): number | null {
    return GradeUtils.getMax(this.allGrades);
  }
  //---
  hasGrades(): boolean {
    return (
      this.math.length > 0 &&
      this.language.length > 0 &&
      this.science.length > 0
    );
  }
}
