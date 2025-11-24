import TaskFactory from "./TaskFactory";

export default function runTask(factory: TaskFactory){
	console.log(`Тип завдання: ${factory.type}`);
	const task = factory.createTask()
	console.log("Завдання: ", task.description);
	task.execute()
}