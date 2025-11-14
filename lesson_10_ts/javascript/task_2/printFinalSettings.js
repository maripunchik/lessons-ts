export default function printFinalSettings(data, labels) {
    for (const key in data) {
        const label = labels[key] || key;
        console.log(`${label}:${data[key]}`);
    }
}
