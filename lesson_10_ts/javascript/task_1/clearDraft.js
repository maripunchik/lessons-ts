export default function clearDraft(key) {
    localStorage.removeItem(key);
    console.log(`Чернетка '${key}' видалена з localStorage`);
}
