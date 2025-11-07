
import IChartStrategy from "./IChartStrategy.js";

export default class ChartRenderer {
	constructor(private strategy: IChartStrategy){}
	render(data: number[]):void{
		this.strategy.render(data)
	}
}