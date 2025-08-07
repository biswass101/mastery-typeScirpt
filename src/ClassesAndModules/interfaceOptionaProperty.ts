interface Point2D {
    name?: string;
    yPos: number;
    readonly xPos: number;
}

const p1: Point2D = {name: "Square", xPos: 10, yPos: 20 }; 
// p1.xPos = 15; //error: Cannot assign to 'xPos' because it is a read-only property