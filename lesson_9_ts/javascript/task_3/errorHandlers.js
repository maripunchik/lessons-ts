const throwErrorHandler = (input) => {
    throw new Error(`Cannot convert "${input}" to number`);
};
export default throwErrorHandler;
//---
export function logFailure(value, error) {
    const message = error instanceof Error ? error.message : "Error";
    console.warn(`${value} - (${message})`);
}
