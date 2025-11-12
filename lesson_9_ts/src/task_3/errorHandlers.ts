
const throwErrorHandler = (input:string):never =>{
	throw new Error(`Cannot convert "${input}" to number`);
}

export default throwErrorHandler
//---

export function logFailure(value:unknown, error:unknown):void {
	const message = error instanceof Error ? error.message : "Error"
	console.warn(`${value} - (${message})`);
}