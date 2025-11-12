export default class OperationsList {
    constructor() {
        this.operations = [];
    }
    //---
    add(operation) {
        this.operations.push(operation);
    }
    //---
    getAll() {
        return [...this.operations];
    }
    //---
    clear() {
        this.operations = [];
    }
}
