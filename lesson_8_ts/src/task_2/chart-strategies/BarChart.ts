
import IChartStrategy from "../IChartStrategy.js";

export default class BarChart implements IChartStrategy{
	render(data: number[]): void {
		console.log("Rendering bar chart with", data);
	}
}