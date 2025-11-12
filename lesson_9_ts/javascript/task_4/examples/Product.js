export default class Product {
    constructor(title) {
        this.title = title;
    }
    print() {
        console.log(`Product: ${this.title}`);
    }
}
