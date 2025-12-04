import Drone from "../Drone";
import type { ICommand } from "../ICommand";

export default class MoveDownCommand implements ICommand {
  constructor(private drone: Drone) {}
  execute(): void {
	 this.drone.moveDown();
  }
  undo(): void {
	 this.drone.moveUp();
  }
}
