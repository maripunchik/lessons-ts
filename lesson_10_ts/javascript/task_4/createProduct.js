export default function createProduct(title, price, discount) {
    return Object.assign({ title,
        price }, (discount !== undefined && { discount }));
}
