export default class ResultEvaluator {
  private correctAnswers: string[] = [];
  private userAnswers: string[] = [];

  constructor(correctAnswers: string[]) {
    this.correctAnswers = correctAnswers;
  }

  submitAnswer(answer: string): void {
    this.userAnswers.push(answer);
  }

  evaluate(): number {
    let score = 0;
    for (let i = 0; i < this.userAnswers.length; i++) {
      if (
        this.userAnswers[i]?.trim().toLowerCase() ===
        this.correctAnswers[i]?.trim().toLowerCase()
      ) {
        score++;
      }
    }
    return score;
  }

  getTotalQuestions(): number {
    return this.correctAnswers.length;
  }
}
