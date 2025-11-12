import OperationManager from "./OperationManager.js";
export default class OperationLogger {
    constructor(operations) {
        this.manager = new OperationManager;
        this.operations = operations;
    }
    //---
    logAll() {
        const items = this.operations.getAll();
        this.manager.executeAll(items, (item) => {
            console.log("Виконую:", item);
        });
    }
}
