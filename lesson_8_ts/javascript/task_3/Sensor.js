export default class Sensor {
    constructor() {
        this._isOn = true;
    }
    //---
    turnOn() {
        this._isOn = true;
        console.log("✅ Sensor turned ON");
    }
    //---
    turnOff() {
        this._isOn = false;
        console.log("⚙️ Sensor turned OFF");
    }
    //---
    isOn() {
        return this._isOn;
    }
    //---
    getValue() {
        return this._isOn ? Math.random() * 100 : 0;
    }
}
