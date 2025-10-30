export default function assertNever(value:never): never {
	throw new Error(`Невідоме значення: ${JSON.stringify(value)}`);
}