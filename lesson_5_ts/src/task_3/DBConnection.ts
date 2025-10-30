import IDatabaseConfig from "./IDatabaseConfig.js";
import { ConnectionStatus } from "./ConnectionStatus.js";
import {ConnectionResult, ConnectionResultFactory} from "./ConnectionResult.js";

export default class DBConnection{
	private config: IDatabaseConfig

	constructor(config:IDatabaseConfig){
		this.config=config
	}
//---
private getMissingFields(): string[]{
const requiredFields: (keyof IDatabaseConfig)[]=['host','port','username']
return requiredFields.filter((key)=>this.config[key] == null)
}
//---
	connect(): ConnectionResult {
		const missing=this.getMissingFields()

const result=missing.length===0 ?ConnectionResultFactory.connected(this.config) : ConnectionResultFactory.failed(missing)

console.log(result.message);
return result
}
}