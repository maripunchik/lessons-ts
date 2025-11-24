import IFileSystemItem from "./IFileSystemItem.js";
// Композит (Composite): папка, що містить інші елементи
export default class Directory implements IFileSystemItem {
  private items: IFileSystemItem[] = [];

  constructor(private name: string, items: IFileSystemItem[] = []) {
    this.items = items;
  }

  add(item: IFileSystemItem): void {
    this.items.push(item);
  }

  addMany(items: IFileSystemItem[]): void {
    this.items.push(...items);
  }
  getSize(): number {
    return this.items.reduce((total, item) => total + item.getSize(), 0);
  }
  show(indent: string = ""): void {
    console.log(
      `${indent} Directory: ${this.name} (Total: ${this.getSize()} KB)`
    );
    this.items.forEach((item) => item.show(indent + "   "));
  }
}
