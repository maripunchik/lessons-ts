import IQuizComponent from "../AbsractInterfacesProducts/IQuizComponent.js";

export default class DesktopQuizComponent implements IQuizComponent {
  render(): void {
    console.log("Rendering Desktop Quiz Component");
  }
}
