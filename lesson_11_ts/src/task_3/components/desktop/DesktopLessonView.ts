import ILessonView from "../AbsractInterfacesProducts/ILessonView.js";

export default class DesktopLessonView implements ILessonView {
  render(): void {
    console.log("Rendering Desktop lesson View");
  }
}
