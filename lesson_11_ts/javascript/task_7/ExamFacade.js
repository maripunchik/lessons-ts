import QuestionBank from "./subsystems/QuestionBank.js";
import Timer from "./subsystems/Timer.js";
import ResultEvaluator from "./subsystems/ResultEvaluator.js";
import ReportGenerator from "./subsystems/ReportGenerator.js";
export default class ExamFacade {
    constructor(correctAnswers) {
        this.currentQuestionIndex = 0;
        this.questionBank = new QuestionBank();
        this.timer = new Timer();
        this.evaluator = new ResultEvaluator(correctAnswers);
        this.reportGenerator = new ReportGenerator();
    }
    addQuestion(question) {
        this.questionBank.addQuestion(question);
    }
    startExam() {
        var _a;
        this.timer.start();
        this.currentQuestionIndex = 0;
        return (_a = this.questionBank.getQuestion(this.currentQuestionIndex)) !== null && _a !== void 0 ? _a : null;
    }
    submitAnswer(answer) {
        this.evaluator.submitAnswer(answer);
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questionBank.getTotalQuestions()) {
            return this.questionBank.getQuestion(this.currentQuestionIndex);
        }
        else {
            return null;
        }
    }
    finishExam() {
        this.timer.stop();
        const score = this.evaluator.evaluate();
        const total = this.evaluator.getTotalQuestions();
        const duration = this.timer.getDuration();
        return this.reportGenerator.generate(score, total, duration);
    }
}
