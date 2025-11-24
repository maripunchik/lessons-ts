import Image from "./Image.js";
export default class ImageProxy {
    constructor(fileName) {
        this.realImage = null;
        this.fileName = fileName;
    }
    display() {
        if (this.realImage === null) {
            this.realImage = new Image(this.fileName);
        }
        this.realImage.display();
    }
}
