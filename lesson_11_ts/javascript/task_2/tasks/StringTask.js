export default class StringTask {
    constructor() {
        this.input = "TypeScript";
        this.description = `Перетворіть рядок "${this.input}" на нижній регістр`;
    }
    execute() {
        console.log(this.input.toLowerCase());
    }
}
