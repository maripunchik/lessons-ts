import IShape from "./IShape.js";

export default function duplicateShapes(shapes: IShape[]): IShape[] {
  const clonedShapes = shapes.map((shape) => shape.clone());
  console.log(clonedShapes);
  return clonedShapes;
}
