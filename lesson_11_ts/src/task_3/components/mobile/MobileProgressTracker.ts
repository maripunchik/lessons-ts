import IProgressTracker from "../AbsractInterfacesProducts/IProgressTracker.js";

export default class MobileProgressTracker implements IProgressTracker {
  render(): void {
    console.log("Rendering Mobile Progress Tracker");
  }
}
