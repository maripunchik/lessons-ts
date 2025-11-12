import isValidArray from "../../isValidArray.js";
export default function processDatasets(datasets, transformer, processor) {
    for (const [label, array] of Object.entries(datasets)) {
        if (!isValidArray(array)) {
            console.warn(`${label}: Масив невалідний або порожній.`);
            continue;
        }
        processor(label, array, transformer);
    }
}
