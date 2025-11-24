import IQuizComponent from "../AbsractInterfacesProducts/IQuizComponent.js";

export default class WebQuizComponent implements IQuizComponent {
  render(): void {
    console.log("Rendering Web Quiz Component");
  }
}
