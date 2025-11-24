export default function renderPlatformUI(factory) {
    const lesson = factory.createLessonView();
    const quiz = factory.createQuizComponent();
    const tracker = factory.createProgressTracker();
    lesson.render();
    quiz.render();
    tracker.render();
}
