import { allowedColorsSet } from "./allowed.js";
export default function isValidColor(color) {
    return allowedColorsSet.has(color);
}
