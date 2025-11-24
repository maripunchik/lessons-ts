import ILearningUIFactory from "./ILearningUIFactory.js";
import WebLessonView from "../components/web/WebLessonView.js";
import WebQuizComponent from "../components/web/WebQuizComponent.js";
import WebProgressTracker from "../components/web/WebProgressTracker.js";

export default class WebLearningUIFactory implements ILearningUIFactory {
  createLessonView() {
    return new WebLessonView();
  }
  createQuizComponent() {
    return new WebQuizComponent();
  }
  createProgressTracker() {
    return new WebProgressTracker();
  }
}
