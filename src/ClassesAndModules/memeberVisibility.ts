class Point2D {
    private xPos: number;
    private yPos: number;

    public static NUM_DIM: number = 2;

    constructor(xPos: number, yPos: number) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
    public getCordinates() {
        return {x : this.xPos, y: this.yPos};
    }
    public setCordinates(x: number, y: number) {
        this.xPos = x;
        this.yPos = y;
    }
}

class Point3D extends Point2D {
    private zPos: number;

    public static override NUM_DIM: number = 3;

    constructor(xPos: number, yPos: number, zPos: number) {
        super(xPos, yPos);
        this.zPos = zPos;
    }
    public getCordinates() {
        const res = super.getCordinates();
        return {...res, z: this.zPos}
    }
    public setCordinates3D(x: number, y: number, z: number) {
       super.setCordinates(x, y);
       this.zPos = z;
    }
}

const p1 = new Point2D(10, 11);
const p2 = new Point3D(10, 11, 12);
console.log(p1);
console.log(p2);

console.log(Point2D.NUM_DIM);
console.log(Point3D.NUM_DIM);
