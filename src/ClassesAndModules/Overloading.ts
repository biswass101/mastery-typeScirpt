class Point2D {
    xPos: number;
    yPos: number;
    constructor(xPos: number, yPos: number) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

function printPoint(point: Point2D): void;
function printPoint(x: number, y: number): void;

function printPoint(arg1: unknown, arg2?: unknown): void {
    if(typeof arg1 === 'object') {
        console.log((arg1 as Point2D).xPos, (arg1 as Point2D).yPos);
    } else {
        console.log(arg1, arg2);
    }
}

const p = new Point2D(10, 2);

console.log(printPoint(p));
console.log(printPoint(10, 20));