import { ConnectionResultFactory } from "./ConnectionResult.js";
export default class DBConnection {
    constructor(config) {
        this.config = config;
    }
    //---
    getMissingFields() {
        const requiredFields = ['host', 'port', 'username'];
        return requiredFields.filter((key) => this.config[key] == null);
    }
    //---
    connect() {
        const missing = this.getMissingFields();
        const result = missing.length === 0 ? ConnectionResultFactory.connected(this.config) : ConnectionResultFactory.failed(missing);
        console.log(result.message);
        return result;
    }
}
