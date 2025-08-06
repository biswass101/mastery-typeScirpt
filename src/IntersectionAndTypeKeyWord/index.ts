type TUser ={
    name: string;
    age: number;
    courses: string[];
}

type TPermission = {
    permissionLevel: string;
}

type TUserExtended = TUser & TPermission;



function printUser (user: TUserExtended | TUser) {
    console.log(user.age);
    console.log(user.name);
    console.log(user.courses.join(', '));
    if ('permissionLevel' in user) {
        console.log(user.permissionLevel);
    } else {
        console.log('No permission level');
    }
}

const user1: TUser = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

const user2: TUserExtended = {
    name: 'Daniyel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: 'admin'
};

printUser(user1);
printUser(user2)