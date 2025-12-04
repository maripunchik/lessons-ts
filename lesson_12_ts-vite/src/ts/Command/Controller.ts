
import type { ICommand } from "./ICommand";

export default class Controller {
  private movementsHistory: ICommand[] = [];
  executeCommand(command: ICommand) {
    command.execute();
    this.movementsHistory.push(command);
  }
  undoLast() {
    const lastCommand = this.movementsHistory.pop();
	 if(lastCommand) lastCommand.undo()
  }
}