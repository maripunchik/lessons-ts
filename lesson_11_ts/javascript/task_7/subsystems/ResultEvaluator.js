export default class ResultEvaluator {
    constructor(correctAnswers) {
        this.correctAnswers = [];
        this.userAnswers = [];
        this.correctAnswers = correctAnswers;
    }
    submitAnswer(answer) {
        this.userAnswers.push(answer);
    }
    evaluate() {
        var _a, _b;
        let score = 0;
        for (let i = 0; i < this.userAnswers.length; i++) {
            if (((_a = this.userAnswers[i]) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) ===
                ((_b = this.correctAnswers[i]) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase())) {
                score++;
            }
        }
        return score;
    }
    getTotalQuestions() {
        return this.correctAnswers.length;
    }
}
