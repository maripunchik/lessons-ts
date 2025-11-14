import { allowedBrandsSet } from "./allowed.js"
import { AutoBrand } from "../types.js"


export default function isValidBrand(brand:string): brand is AutoBrand{
	return allowedBrandsSet.has(brand)
}