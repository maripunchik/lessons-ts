//Спільний інтерфейс (Component)
export default interface IFileSystemItem {
  getSize(): number;
  show(indent?:string): void
}
