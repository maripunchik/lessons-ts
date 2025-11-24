import ITask from "./ITask.js";

export default class OOPTask implements ITask {
  description: string;
  constructor() {
    this.description =
      "Створіть клас Animal з методом speak(), а потім клас Dog, який його наслідує";
  }
  execute(): void {
    class Animal {
      speak() {
        console.log("Animal speaks");
      }
    }

    class Dog extends Animal {
      speak(): void {
        console.log("Dog barks");
      }
    }

    const dog = new Dog();
    dog.speak();
  }
}
