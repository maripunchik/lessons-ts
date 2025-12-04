const t=`import type { IColorChangeState } from "./IColorChangeState";\r
import RedState from "./RedState";\r
\r
export default class TrafficLight {\r
  private state: IColorChangeState;\r
  constructor() {\r
    this.state = new RedState();\r
  }\r
  next() {\r
    this.state.next(this);\r
  }\r
  signal() {\r
    this.state.signal(this);\r
  }\r
  setState(newState: IColorChangeState) {\r
    this.state = newState;\r
  }\r
  autoCycle(cycles: number = 1) {\r
    const steps = ["Red", "Yellow", "Green"];\r
\r
    for (let i = 0; i < cycles; i++) {\r
      for (const step of steps) {\r
        console.log(\`Крок: \${step}\`);\r
        this.signal();\r
        this.next();\r
      }\r
    }\r
  }\r
}\r
`;export{t as default};
