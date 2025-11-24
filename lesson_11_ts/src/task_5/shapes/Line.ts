import IShape from "../IShape.js";

export default class Line implements IShape {
  constructor(
    public x1: number,
    public y1: number,
    public x2: number,
    public y2: number
  ) {}
  clone(): IShape {
    return new Line(this.x1, this.y1, this.x2, this.y2);
  }
}
