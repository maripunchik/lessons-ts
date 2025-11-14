export default function showDraft(key, fields) {
    const savedDraft = localStorage.getItem(key);
    if (!savedDraft) {
        console.log(`Чернетка '${key}' не знайдена в LocalStorage`);
        return;
    }
    const parsedDraft = JSON.parse(savedDraft);
    console.log(`Чернетка '${key}':`, parsedDraft);
    fields.forEach(([key, label]) => {
        var _a;
        console.log(`${label}:`, (_a = parsedDraft[key]) !== null && _a !== void 0 ? _a : "-");
    });
}
