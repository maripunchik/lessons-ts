import IFileSystemItem from "./IFileSystemItem.js";
// Листок(Leaf): звичайний файл
export default class File implements IFileSystemItem {
  constructor(private name: string, private size: number) {}
  getSize(): number {
    return this.size;
  }
  show(indent: string = ""): void {
    console.log(`${indent} File: ${this.name} (${this.size} KB)`);
  }
}
