function printAll(arg: string | string[]) {
    if(typeof arg === 'object') arg.forEach(item => console.log(item));
    if(typeof arg === 'string') console.log(arg);
}

printAll('Jan');
printAll(['Jan', 'Feb', 'Mar']);

let v: number | undefined = undefined
if(!v) {
    console.log('v is falsy');
}