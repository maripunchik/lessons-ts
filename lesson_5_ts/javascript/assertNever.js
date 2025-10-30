export default function assertNever(value) {
    throw new Error(`Невідоме значення: ${JSON.stringify(value)}`);
}
