import TaskFactory from "../TaskFactory.js";
import OOPTask from "../tasks/OOPTask.js";
export default class OOPTaskFactory extends TaskFactory {
    constructor() {
        super("OOP");
    }
    createTask() {
        return new OOPTask();
    }
}
