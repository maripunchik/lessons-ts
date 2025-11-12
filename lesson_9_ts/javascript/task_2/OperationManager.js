export default class OperationManager {
    executeAll(items, callback) {
        for (const item of items) {
            callback(item);
        }
    }
}
