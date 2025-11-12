import IPrintable from "../IPrintable.js";

export default class User implements IPrintable{
	constructor(private name:string){}
	print(): void {
		console.log(`User: ${this.name}`);
	}
}