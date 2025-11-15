
/**
 * Reads the value from localStorage by the given key.
 * 
 * @template T - Type of data expected
 * @param {string} key - the key under which the data is stored
 * @returns {T | null} - The parsed value or null if no data was found or an error occurred
 */

export default function loadFromLocalStorage<T>(key:string): T | null {
	try {
		const jsonString=localStorage.getItem(key)
		return jsonString ? JSON.parse(jsonString) : null
	} catch (error) {
		console.error(`Помилка при зчитуванні даних з localStorage: ${error}`);
		return null
	}
}