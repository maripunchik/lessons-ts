export default function createProductFromArgs([title, price, discount,]) {
    return Object.assign({ title,
        price }, (discount !== undefined && { discount }));
}
