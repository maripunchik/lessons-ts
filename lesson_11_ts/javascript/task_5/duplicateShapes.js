export default function duplicateShapes(shapes) {
    const clonedShapes = shapes.map((shape) => shape.clone());
    console.log(clonedShapes);
    return clonedShapes;
}
