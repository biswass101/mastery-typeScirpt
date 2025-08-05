let arr = [1, 2, 3];

function printArray(arr: number[]):string {
    console.log(arr);
    return "Array printed successfully!";
}

function printTuple(tuple: [number, string]) {
    console.log(tuple);
    return "Tuple printed successfully!";
}

let tuple: [number, string] = [1, "Niloy"];

console.log(printArray(arr));
console.log(printTuple(tuple));
