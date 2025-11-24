// Композит (Composite): папка, що містить інші елементи
export default class Directory {
    constructor(name, items = []) {
        this.name = name;
        this.items = [];
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    addMany(items) {
        this.items.push(...items);
    }
    getSize() {
        return this.items.reduce((total, item) => total + item.getSize(), 0);
    }
    show(indent = "") {
        console.log(`${indent} Directory: ${this.name} (Total: ${this.getSize()} KB)`);
        this.items.forEach((item) => item.show(indent + "   "));
    }
}
