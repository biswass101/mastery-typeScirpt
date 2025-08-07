class User {
    constructor(public name: string, public id: number) {
        this.name = name;
        this.id = id;
    }
}

class Admin {
    constructor(public name: string) {
        this.name = name;
    }
}

function printInfo(arg: User | Admin) {
    if(arg instanceof User) {
        console.log(`${arg.name} is a User with ID: ${arg.id}`);
    } else {
        console.log(`${arg.name} is an Admin`);
    }
}

const niloy = new Admin("Niloy");
const bis = new User("Biswas", 101);

printInfo(niloy); printInfo(bis);