type Addable = number | string | object;

function add(arg1: Addable, arg2: Addable) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }

    return arg1 + " " + arg2;
}

function add1(arg1: Addable, arg2: Addable) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }

    return arg1 + " " + arg2;
}

console.log(add("Niloy", "Biswas"));;
console.log(add(10, 20));