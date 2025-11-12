export default function getRandom(array) {
    const index = Math.floor(Math.random() * array.length);
    return array.length > 0 ? array[index] : undefined;
}
