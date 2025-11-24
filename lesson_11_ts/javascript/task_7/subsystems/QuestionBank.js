export default class QuestionBank {
    constructor() {
        this.questions = [];
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    getQuestion(index) {
        return this.questions[index];
    }
    getTotalQuestions() {
        return this.questions.length;
    }
}
