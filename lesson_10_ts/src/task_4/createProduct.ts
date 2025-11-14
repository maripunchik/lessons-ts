export default function createProduct(
  title: string,
  price: number,
  discount?: number
) {
  return {
    title,
    price,
    ...(discount !== undefined && { discount }),
  };
}
