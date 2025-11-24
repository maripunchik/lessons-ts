export default function runTask(factory) {
    console.log(`Тип завдання: ${factory.type}`);
    const task = factory.createTask();
    console.log("Завдання: ", task.description);
    task.execute();
}
