import QuestionBank from "./subsystems/QuestionBank.js";
import Timer from "./subsystems/Timer.js";
import ResultEvaluator from "./subsystems/ResultEvaluator.js";
import ReportGenerator from "./subsystems/ReportGenerator.js";

export default class ExamFacade {
  private questionBank: QuestionBank;
  private timer: Timer;
  private evaluator: ResultEvaluator;
  private reportGenerator: ReportGenerator;
  private currentQuestionIndex: number = 0;

  constructor(correctAnswers: string[]) {
    this.questionBank = new QuestionBank();
    this.timer = new Timer();
    this.evaluator = new ResultEvaluator(correctAnswers);
    this.reportGenerator = new ReportGenerator();
  }

  addQuestion(question: string): void {
    this.questionBank.addQuestion(question);
  }

  startExam(): string | null {
    this.timer.start();
    this.currentQuestionIndex = 0;
    return this.questionBank.getQuestion(this.currentQuestionIndex) ?? null;
  }

  submitAnswer(answer: string): string | null {
    this.evaluator.submitAnswer(answer);
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.questionBank.getTotalQuestions()) {
      return this.questionBank.getQuestion(this.currentQuestionIndex);
    } else {
      return null;
    }
  }

  finishExam(): string {
    this.timer.stop();
    const score = this.evaluator.evaluate();
    const total = this.evaluator.getTotalQuestions();
    const duration = this.timer.getDuration();
    return this.reportGenerator.generate(score, total, duration);
  }
}
