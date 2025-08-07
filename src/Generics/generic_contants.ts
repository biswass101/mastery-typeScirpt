interface IUserList {
    users: string[]
    length: number;
}


function lengthComparison<T extends {length: number}>(a: T, b: T) {
    if (a.length >= b.length) return a;
    else return b;
}

// const arr = [1, 2];
// const arr2 = [1, 2, 3, 4];

const arr: IUserList = {users: ["Alice", "Bob"], length: 2};
const arr2: IUserList = {users: ["Charlie", "Dave", "Eve"], length: 3};

console.log(lengthComparison(arr, arr2));