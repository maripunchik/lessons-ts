export default class QuestionBank {
  private questions: string[] = [];

  addQuestion(question: string): void {
    this.questions.push(question);
  }

  getQuestion(index: number): string {
    return this.questions[index];
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }
}
