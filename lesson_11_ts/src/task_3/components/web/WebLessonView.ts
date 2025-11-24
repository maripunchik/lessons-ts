import ILessonView from "../AbsractInterfacesProducts/ILessonView.js";

export default class WebLessonView implements ILessonView {
  render(): void {
    console.log("Rendering Web lesson View");
  }
}
