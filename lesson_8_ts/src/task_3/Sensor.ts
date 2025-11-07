
import ISwitchable from "./interfaces/ISwitchable.js";
import ISensorReadable from "./interfaces/ISensorReadable.js";
import IStateReadable from "./interfaces/IStateReadable.js";

export default class Sensor implements ISwitchable,ISensorReadable,IStateReadable{
	private _isOn:boolean=true
//---
	turnOn():void {
	this._isOn=true
	console.log("✅ Sensor turned ON");
	}
//---
   turnOff():void {
   this._isOn = false;
   console.log("⚙️ Sensor turned OFF");
  }
  //---
   isOn(): boolean {
	return this._isOn
  }
  //---
   getValue(): number {
	return this._isOn ? Math.random() * 100 : 0
  }
}