import isValidBrand from "./isValidBrand.js";
import isValidColor from "./isValidColor.js";
export default function saveDraftAutoIfValid(key, draft) {
    const isValid = (!draft.brand || isValidBrand(draft.brand)) && (!draft.color || isValidColor(draft.color));
    isValid ? localStorage.setItem(key, JSON.stringify(draft)) : console.warn(`Невалідні значення в чернетці '${key}':`, draft);
}
