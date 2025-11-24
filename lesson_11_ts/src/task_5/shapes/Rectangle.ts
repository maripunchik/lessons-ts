import IShape from "../IShape.js";

export default class Rectangle implements IShape {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}
  clone(): IShape {
    return new Rectangle(this.x, this.y, this.width, this.height);
  }
}
