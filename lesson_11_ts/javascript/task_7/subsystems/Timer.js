export default class Timer {
    constructor() {
        this.startTime = 0;
        this.endTime = 0;
    }
    start() {
        this.startTime = Date.now();
    }
    stop() {
        this.endTime = Date.now();
    }
    getDuration() {
        return (this.endTime - this.startTime) / 1000;
    }
}
