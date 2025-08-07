function sum(...args: number[]) {
    return args.reduce((acc, curr) => {
        console.log(acc, curr);
        return acc + curr;
    }, 0);
}

sum(1, 2, 3, 4, 5); // Output: 15