export default class ChartRenderer {
    constructor(strategy) {
        this.strategy = strategy;
    }
    render(data) {
        this.strategy.render(data);
    }
}
