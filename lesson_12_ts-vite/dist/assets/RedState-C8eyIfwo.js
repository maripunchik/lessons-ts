const t=`import type { IColorChangeState } from "./IColorChangeState";\r
import type TrafficLight from "./TrafficLight";\r
import YellowState from "./YellowState";\r
\r
export default class RedState implements IColorChangeState {\r
  next(change: TrafficLight): void {\r
    change.setState(new YellowState());\r
  }\r
  signal(_change: TrafficLight): void {\r
    console.log(\`Червоний! Стоп!\`);\r
  }\r
}\r
\r
`;export{t as default};
