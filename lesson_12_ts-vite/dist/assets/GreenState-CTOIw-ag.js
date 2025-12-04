const t=`import type { IColorChangeState } from "./IColorChangeState";\r
import RedState from "./RedState";\r
import type TrafficLight from "./TrafficLight";\r
\r
export default class GreenState implements IColorChangeState {\r
  next(change: TrafficLight): void {\r
    change.setState(new RedState());\r
  }\r
  signal(_change: TrafficLight): void {\r
    console.log(\`Зелений! Перехід дозволено!\`);\r
  }\r
}\r
`;export{t as default};
