
export default function clearDraft(key:string) {
	localStorage.removeItem(key)
	console.log(`Чернетка '${key}' видалена з localStorage`);
	
}