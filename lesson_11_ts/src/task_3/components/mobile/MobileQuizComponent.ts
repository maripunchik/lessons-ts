import IQuizComponent from "../AbsractInterfacesProducts/IQuizComponent.js";

export default class MobileQuizComponent implements IQuizComponent {
  render(): void {
    console.log("Rendering Mobile Quiz Component");
  }
}
