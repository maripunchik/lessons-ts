import type { IColorChangeState } from "./IColorChangeState";
import RedState from "./RedState";

export default class TrafficLight {
  private state: IColorChangeState;
  constructor() {
    this.state = new RedState();
  }
  next() {
    this.state.next(this);
  }
  signal() {
    this.state.signal(this);
  }
  setState(newState: IColorChangeState) {
    this.state = newState;
  }
  autoCycle(cycles: number = 1) {
    const steps = ["Red", "Yellow", "Green"];

    for (let i = 0; i < cycles; i++) {
      for (const step of steps) {
        console.log(`Крок: ${step}`);
        this.signal();
        this.next();
      }
    }
  }
}
