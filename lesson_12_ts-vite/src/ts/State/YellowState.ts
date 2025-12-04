import GreenState from "./GreenState";
import type { IColorChangeState } from "./IColorChangeState";
import type TrafficLight from "./TrafficLight";

export default class YellowState implements IColorChangeState {
  next(change: TrafficLight): void {
    change.setState(new GreenState());
  }
  signal(_change: TrafficLight): void {
    console.log(`Жовтий! Приготуйтеся!`);
  }
}
