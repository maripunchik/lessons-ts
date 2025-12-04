const r=`import TrafficLight from "./TrafficLight";\r
\r
export interface IColorChangeState {\r
  next(change: TrafficLight): void;\r
  signal(change: TrafficLight): void;\r
}`;export{r as default};
