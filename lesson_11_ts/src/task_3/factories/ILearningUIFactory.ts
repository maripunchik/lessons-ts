import ILessonView from "../components/AbsractInterfacesProducts/ILessonView.js";
import IProgressTracker from "../components/AbsractInterfacesProducts/IProgressTracker.js";
import IQuizComponent from "../components/AbsractInterfacesProducts/IQuizComponent.js";

export default interface ILearningUIFactory {
  createLessonView(): ILessonView;
  createQuizComponent(): IQuizComponent;
  createProgressTracker(): IProgressTracker;
}
