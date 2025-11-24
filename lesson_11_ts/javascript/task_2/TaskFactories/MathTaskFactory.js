import TaskFactory from "../TaskFactory.js";
import getRandomNumber from "../getRandomNumber.js";
import MathTask from "../tasks/MathTask.js";
export default class MathTaskFactory extends TaskFactory {
    constructor() {
        super("math");
    }
    createTask() {
        const a = getRandomNumber(0, 9);
        const b = getRandomNumber(0, 9);
        return new MathTask(a, b);
    }
}
