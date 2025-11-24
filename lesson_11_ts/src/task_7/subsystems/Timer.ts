
export default class Timer {
	private startTime: number=0
	private endTime:number=0

	start():void{
		this.startTime= Date.now()
	}

	stop():void{
		this.endTime=Date.now()
	}

	getDuration():number{
		return (this.endTime-this.startTime)/1000
	}
}