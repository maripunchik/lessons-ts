export default class Image {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk();
    }
    loadFromDisk() {
        console.log(`Завантаження зображення з диску: ${this.fileName}`);
    }
    display() {
        console.log(`Відображення зображення: ${this.fileName}`);
    }
}
