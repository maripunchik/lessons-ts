const n=`import Drone from "../Drone";\r
import type { ICommand } from "../ICommand";\r
\r
export default class TurnRightCommand implements ICommand {\r
  constructor(private drone: Drone) {}\r
  execute(): void {\r
	 this.drone.turnRight();\r
  }\r
  undo(): void {\r
	 this.drone.turnLeft();\r
  }\r
}\r
`;export{n as default};
