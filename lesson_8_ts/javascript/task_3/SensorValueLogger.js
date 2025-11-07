export default class SensorValueLogger {
    static log(sensor) {
        console.log('Значення', sensor.getValue());
    }
}
