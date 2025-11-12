import IPrintable from "../IPrintable.js";

export default class Product implements IPrintable{
	constructor(private title:string){}
	print(): void {
		console.log(`Product: ${this.title}`);
	}
}