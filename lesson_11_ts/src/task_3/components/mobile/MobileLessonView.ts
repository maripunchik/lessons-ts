import ILessonView from "../AbsractInterfacesProducts/ILessonView.js";

export default class MobileLessonViev implements ILessonView {
  render(): void {
    console.log("Rendering Mobile lesson View");
  }
}
