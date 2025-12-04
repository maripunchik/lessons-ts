const e=`import GreenState from "./GreenState";\r
import type { IColorChangeState } from "./IColorChangeState";\r
import type TrafficLight from "./TrafficLight";\r
\r
export default class YellowState implements IColorChangeState {\r
  next(change: TrafficLight): void {\r
    change.setState(new GreenState());\r
  }\r
  signal(_change: TrafficLight): void {\r
    console.log(\`Жовтий! Приготуйтеся!\`);\r
  }\r
}\r
`;export{e as default};
