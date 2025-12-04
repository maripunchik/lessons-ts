import Drone from "../Drone";
import type { ICommand } from "../ICommand";

export default class TurnLeftCommand implements ICommand {
  constructor(private drone: Drone) {}
  execute(): void {
	 this.drone.turnLeft();
  }
  undo(): void {
	 this.drone.turnRight();
  }
}
