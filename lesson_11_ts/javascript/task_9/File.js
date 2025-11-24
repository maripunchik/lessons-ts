// Листок(Leaf): звичайний файл
export default class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    getSize() {
        return this.size;
    }
    show(indent = "") {
        console.log(`${indent} File: ${this.name} (${this.size} KB)`);
    }
}
