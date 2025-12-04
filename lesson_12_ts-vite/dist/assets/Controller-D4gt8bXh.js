const n=`\r
import type { ICommand } from "./ICommand";\r
\r
export default class Controller {\r
  private movementsHistory: ICommand[] = [];\r
  executeCommand(command: ICommand) {\r
    command.execute();\r
    this.movementsHistory.push(command);\r
  }\r
  undoLast() {\r
    const lastCommand = this.movementsHistory.pop();\r
	 if(lastCommand) lastCommand.undo()\r
  }\r
}`;export{n as default};
