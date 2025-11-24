import MobileLessonViev from "../components/mobile/MobileLessonView.js";
import MobileQuizComponent from "../components/mobile/MobileQuizComponent.js";
import MobileProgressTracker from "../components/mobile/MobileProgressTracker.js";
export default class MobileLearningUIFactory {
    createLessonView() {
        return new MobileLessonViev();
    }
    createQuizComponent() {
        return new MobileQuizComponent();
    }
    createProgressTracker() {
        return new MobileProgressTracker();
    }
}
