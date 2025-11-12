
export default class OperationsList<T> {
	private operations: T[]=[]
//---
	add(operation:T):void {
		this.operations.push(operation)
	}
	//---
	getAll(): T[]{
		return [...this.operations]
	}
	//---
	clear(): void{
		this.operations=[]
	}
}