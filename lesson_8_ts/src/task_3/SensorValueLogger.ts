
import ISensorReadable from "./interfaces/ISensorReadable.js";

export default class SensorValueLogger{
	static log(sensor: ISensorReadable):void {
		console.log('Значення', sensor.getValue());
	}
}