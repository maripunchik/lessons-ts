import IImage from "./IImage.js";
import Image from "./Image.js";

export default class ImageProxy implements IImage {
  private fileName: string;
  private realImage: Image | null = null;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public display(): void {
    if (this.realImage === null) {
      this.realImage = new Image(this.fileName);
    }
    this.realImage.display();
  }
}
