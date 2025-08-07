interface IsSized {
    length: number;
}

class DataBox<Type extends IsSized> {
    content: Type;
    constructor(content: Type) {
        this.content = content
    }

    printContent() {
        console.log(this.content);
    }
}

const d1 = new DataBox<string>("Hello, World!");
const d2 = new DataBox<number[]>([1, 2, 3, 4, 5]);

console.log(d1.printContent());
console.log(d2.printContent());