import ILearningUIFactory from "./ILearningUIFactory.js";
import DesktopLessonView from "../components/desktop/DesktopLessonView.js";
import DesktopQuizComponent from "../components/desktop/DesktopQuizComponent.js";
import DesctopProgressTracker from "../components/desktop/DesktopProgressTracker.js";

export default class DesktopLearningUIFactory implements ILearningUIFactory {
  createLessonView() {
    return new DesktopLessonView();
  }
  createQuizComponent() {
    return new DesktopQuizComponent();
  }
  createProgressTracker() {
    return new DesctopProgressTracker();
  }
}
