import { allowedBrandsSet } from "./allowed.js";
export default function isValidBrand(brand) {
    return allowedBrandsSet.has(brand);
}
