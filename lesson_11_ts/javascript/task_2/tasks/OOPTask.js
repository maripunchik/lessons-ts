export default class OOPTask {
    constructor() {
        this.description =
            "Створіть клас Animal з методом speak(), а потім клас Dog, який його наслідує";
    }
    execute() {
        class Animal {
            speak() {
                console.log("Animal speaks");
            }
        }
        class Dog extends Animal {
            speak() {
                console.log("Dog barks");
            }
        }
        const dog = new Dog();
        dog.speak();
    }
}
