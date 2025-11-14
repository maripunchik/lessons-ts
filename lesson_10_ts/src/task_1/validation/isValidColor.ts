import { AutoColor } from "../types.js"
import { allowedColorsSet } from "./allowed.js"


export default function isValidColor(color:string): color is AutoColor {
	return allowedColorsSet.has(color)
}