import IImage from "./IImage.js";

export default class Image implements IImage {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Завантаження зображення з диску: ${this.fileName}`);
  }

  public display(): void {
    console.log(`Відображення зображення: ${this.fileName}`);
  }
}
