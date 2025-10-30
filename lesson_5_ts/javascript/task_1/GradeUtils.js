export default class GradeUtils {
    static getAllGrades(journal) {
        return [...journal.math, ...journal.language, ...journal.science];
    }
    //---
    static getSum(arr) {
        return arr.reduce((prevSum, number) => prevSum + number, 0);
    }
    //---
    static getAverage(arr) {
        return arr.length ? this.getSum(arr) / arr.length : null;
    }
    //---
    static getMax(arr) {
        return arr.length ? arr.reduce((prevMax, number) => (number > prevMax ? number : prevMax)) : null;
    }
}
