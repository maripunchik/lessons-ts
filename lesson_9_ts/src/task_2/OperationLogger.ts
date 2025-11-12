import OperationManager from "./OperationManager.js";
import OperationsList from "./OperstionsList.js";


export default class OperationLogger<T> {
  private manager = new OperationManager<T>;
  private operations: OperationsList<T>

  constructor(operations: OperationsList<T>
  ) {
    this.operations=operations
  }
  //---
  logAll(): void {
	const items= this.operations.getAll()
    this.manager.executeAll(items, (item) => {
      console.log("Виконую:", item);
    });
  }
}
