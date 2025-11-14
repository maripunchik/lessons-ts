
export default function showDraft<T>(key:string,fields: [keyof T, string][]): void {
  const savedDraft = localStorage.getItem(key);

  if (!savedDraft) {
    console.log(`Чернетка '${key}' не знайдена в LocalStorage`);
    return;
  }

  const parsedDraft: Partial<T> = JSON.parse(savedDraft);
  console.log(`Чернетка '${key}':`, parsedDraft);

  fields.forEach(([key, label]) => {
    console.log(`${label}:`, parsedDraft[key] ?? "-");
  });
}
