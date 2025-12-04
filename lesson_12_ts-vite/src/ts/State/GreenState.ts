import type { IColorChangeState } from "./IColorChangeState";
import RedState from "./RedState";
import type TrafficLight from "./TrafficLight";

export default class GreenState implements IColorChangeState {
  next(change: TrafficLight): void {
    change.setState(new RedState());
  }
  signal(_change: TrafficLight): void {
    console.log(`Зелений! Перехід дозволено!`);
  }
}
