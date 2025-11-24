import ExamFacade from "./ExamFacade.js";

export default function runExamSession(
  questions: string[],
  correctAnswers: string[],
  userAnswers: string[]
): void {
  const exam = new ExamFacade(correctAnswers);
  questions.forEach((q) => exam.addQuestion(q));

  console.log(exam.startExam());

  userAnswers.forEach((ans) => {
    const next = exam.submitAnswer(ans);
    if (next) console.log(next);
  });
  console.log(exam.finishExam());
}
