function add(arg1: number | string, arg2: number | string) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }

    return arg1 + " " + arg2;
}

console.log(add("Niloy", "Biswas"));;
console.log(add(10, 20));