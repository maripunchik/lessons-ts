
export default class ReportGenerator{
	generate(score:number, total:number, duration:number):string{
		const persentage=((score/total)*100).toFixed(1)
		return `Результат: ${score}/${total} (${persentage}%)\nЧас: ${duration.toFixed(2)} сек.`
	}
}