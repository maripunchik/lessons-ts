import IProgressTracker from "../AbsractInterfacesProducts/IProgressTracker.js";

export default class DesctopProgressTracker implements IProgressTracker {
  render(): void {
    console.log("Rendering Desktop Progress Tracker");
  }
}
