export default class MathTask {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.description = `Обчисліть: ${a} + ${b}`;
    }
    execute() {
        let sum = this.a + this.b;
        console.log(`${this.a} + ${this.b} = ${sum}`);
    }
}
