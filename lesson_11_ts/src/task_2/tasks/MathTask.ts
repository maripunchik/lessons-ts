import ITask from "./ITask.js";

export default class MathTask implements ITask {
  description: string;
  constructor(private a: number, private b: number) {
    this.description = `Обчисліть: ${a} + ${b}`;
  }
  execute(): void {
    let sum = this.a + this.b;
    console.log(`${this.a} + ${this.b} = ${sum}`);
  }
}
