import Drone from "../Drone";
import type { ICommand } from "../ICommand";

export default class MoveUpCommand implements ICommand {
  constructor(private drone: Drone) {}
  execute(): void {
    this.drone.moveUp();
  }
  undo(): void {
    this.drone.moveDown();
  }
}
