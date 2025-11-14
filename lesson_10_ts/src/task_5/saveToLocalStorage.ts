/**
 * function to save some data to localStorage.
 *
 * @template T - Type of data stored
 * @param {string} key - unique key for data storage
 * @param {T} value - data to be saved
 */

export default function saveToLocalStorage<T>(key: string, value: T): void {
  try {
    const jsonString = JSON.stringify(value);
    localStorage.setItem(key, jsonString);
  } catch (error) {
    console.error(`Помилка при збереженні даних у localStorage: ${error}`);
  }
}
