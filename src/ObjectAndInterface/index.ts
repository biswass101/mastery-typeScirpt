interface IUser {
    name: string;
    age: number;
    courses: string[];
}

interface IUserExtended extends IUser {
    permissionLevel: string;
}

type User = {
    name: string;
    age: number;
    courses: string[];
}



function printUser (user: IUserExtended | IUser) {
    console.log(user.age);
    console.log(user.name);
    console.log(user.courses.join(', '));
    if ('permissionLevel' in user) {
        console.log(user.permissionLevel);
    } else {
        console.log('No permission level');
    }
}

const user1: IUser = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

const user2: IUserExtended = {
    name: 'Daniyel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: 'admin'
};

printUser(user1);
printUser(user2)