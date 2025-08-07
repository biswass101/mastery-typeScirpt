// class Point2D {
//     xPos: number = 0;
//     yPos: number = 0;
// }

// const p1 = new Point2D();
// console.log(p1);

class Point2D {
    xPos: number;
    yPos: number;
    constructor(xPos: number, yPos: number) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

class Point3D extends Point2D {
    zPos: number;
    constructor(xPos: number, yPos: number, zPos: number) {
        super(xPos, yPos);
        this.zPos = zPos;
    }
}

const p1 = new Point2D(10, 11);
const p2 = new Point3D(10, 11, 12);
console.log(p1);
console.log(p2);