/**
 * Checks if data exists in localStorage with the given key.
 * @param {string} key - Key to check
 * @returns {boolean} true if the data exists, else-false
 */

export default function checkDataInLocalStorage(key: string): boolean {
  return localStorage.getItem(key) !== null;
}
