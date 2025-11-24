import IProgressTracker from "../AbsractInterfacesProducts/IProgressTracker.js";

export default class WebProgressTracker implements IProgressTracker {
  render(): void {
    console.log("Rendering Web Progress Tracker");
  }
}
