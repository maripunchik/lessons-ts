import ILearningUIFactory from "./factories/ILearningUIFactory";

export default function renderPlatformUI(factory: ILearningUIFactory) {
  const lesson = factory.createLessonView();
  const quiz = factory.createQuizComponent();
  const tracker = factory.createProgressTracker();

  lesson.render();
  quiz.render();
  tracker.render();
}
