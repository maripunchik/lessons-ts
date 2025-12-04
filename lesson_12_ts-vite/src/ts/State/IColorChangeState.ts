import TrafficLight from "./TrafficLight";

export interface IColorChangeState {
  next(change: TrafficLight): void;
  signal(change: TrafficLight): void;
}