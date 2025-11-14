import createProduct from "./createProduct.js";

export default function createProductFromArgs([
  title,
  price,
  discount,
]: Parameters<typeof createProduct>): ReturnType<typeof createProduct> {
  return {
    title,
    price,
    ...(discount !== undefined && { discount }),
  };
}
