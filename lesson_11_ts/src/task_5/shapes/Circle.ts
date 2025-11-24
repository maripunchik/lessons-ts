import IShape from "../IShape.js";

export default class Circle implements IShape {
  constructor(public x: number, public y: number, public radius: number) {}
  clone(): IShape {
    return new Circle(this.x, this.y, this.radius);
  }
}
