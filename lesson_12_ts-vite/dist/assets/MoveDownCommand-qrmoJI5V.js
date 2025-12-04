const n=`import Drone from "../Drone";\r
import type { ICommand } from "../ICommand";\r
\r
export default class MoveDownCommand implements ICommand {\r
  constructor(private drone: Drone) {}\r
  execute(): void {\r
	 this.drone.moveDown();\r
  }\r
  undo(): void {\r
	 this.drone.moveUp();\r
  }\r
}\r
`;export{n as default};
