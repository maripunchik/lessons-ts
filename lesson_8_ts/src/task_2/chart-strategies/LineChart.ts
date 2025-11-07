
import IChartStrategy from "../IChartStrategy.js";

export default class LineChart implements IChartStrategy{
	render(data: number[]): void {
		console.log("Rendering line chart with", data);
	}
}