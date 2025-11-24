import ITask from "../tasks/ITask.js";
import TaskFactory from "../TaskFactory.js";
import stringTask from "../tasks/StringTask.js";

export default class StringTaskFactory extends TaskFactory {
  constructor() {
    super("string");
  }
  createTask(): ITask {
    return new stringTask();
  }
}
