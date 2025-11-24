import TaskFactory from "../TaskFactory.js";
import ITask from "../tasks/ITask.js";
import getRandomNumber from "../getRandomNumber.js";
import MathTask from "../tasks/MathTask.js";

export default class MathTaskFactory extends TaskFactory {
  constructor() {
    super("math");
  }
  createTask(): ITask {
    const a = getRandomNumber(0, 9);
    const b = getRandomNumber(0, 9);
    return new MathTask(a, b);
  }
}
