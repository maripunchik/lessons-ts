
export default function getRandom<T>(array: T[]):T | undefined {

	const index = Math.floor(Math.random()*array.length)
	return array.length > 0 ? array[index] : undefined
}