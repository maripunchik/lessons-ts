import ITask from "./ITask";

export default class StringTask implements ITask {
  description: string;
  private input: string;
  constructor() {
    this.input = "TypeScript";
    this.description = `Перетворіть рядок "${this.input}" на нижній регістр`;
  }
  execute(): void {
    console.log(this.input.toLowerCase());
  }
}
