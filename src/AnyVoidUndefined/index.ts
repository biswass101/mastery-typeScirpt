function foo(arg: any) {
    if (arg) {
        console.log("Argument is truthy:", arg);
    } else {
        console.log("Argument is falsy or undefined");
    }
    return;
}

let a: number | undefined = 10;

foo(a);