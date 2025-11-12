

export default class OperationManager<T> {
  executeAll(items: T[], callback: (item: T) => void):void{
	for (const item of items) {
		callback(item)
	}
  }
}