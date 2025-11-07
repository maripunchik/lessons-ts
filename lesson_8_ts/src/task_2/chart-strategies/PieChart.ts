
import IChartStrategy from "../IChartStrategy.js"

export default class PieChart implements IChartStrategy{
	render(data: number[]): void {
		console.log("Rendering pie chart with", data)
	}
}