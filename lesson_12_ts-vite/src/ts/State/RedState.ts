import type { IColorChangeState } from "./IColorChangeState";
import type TrafficLight from "./TrafficLight";
import YellowState from "./YellowState";

export default class RedState implements IColorChangeState {
  next(change: TrafficLight): void {
    change.setState(new YellowState());
  }
  signal(_change: TrafficLight): void {
    console.log(`Червоний! Стоп!`);
  }
}

