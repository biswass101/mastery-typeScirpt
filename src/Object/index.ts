type User = {
    name: string;
    age: number;
    courses: string[];
}

interface IUser {
    name: string;
    age: number;
    courses: string[];
}

function printUser (user: User) {
    console.log(user.age);
    console.log(user.name);
    console.log(user.courses.join(', '));
}

const user1: IUser = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

const user2: User = {
    name: 'Daniyel',
    age: 24,
    courses: ['Java', 'C#'],
};

printUser(user1);