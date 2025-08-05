function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}

function concatenate(arg1: string, arg2: string) {
    return arg1 + arg2;
}

function check(arg: number): boolean {
    if(arg > 2) {
        return true;
    }

    return false;
}

console.log(check(19));