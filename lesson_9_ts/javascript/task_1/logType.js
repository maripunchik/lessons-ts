export default function logType(label, array, processor) {
    const value = processor(array);
    const type = typeof value;
    console.log(`${label} = [${array.join(", ")}] - Тип: ${type}, Значення: ${value}`);
}
