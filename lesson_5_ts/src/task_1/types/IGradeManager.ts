import IStudentJournal from "./IStudentJournal";

export default interface IGradeManager extends IStudentJournal {
getAverage():number | null 
getMaxGrade(): number | null
hasGrades(): boolean
getAllGrades(): number[]
}