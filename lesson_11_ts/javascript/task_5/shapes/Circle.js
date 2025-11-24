export default class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    clone() {
        return new Circle(this.x, this.y, this.radius);
    }
}
