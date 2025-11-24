import ITask from "./tasks/ITask.js";

export default abstract class TaskFactory {
  constructor(public readonly type: string) {}
  abstract createTask(): ITask;
}
