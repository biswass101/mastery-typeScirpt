function printUser (user: {
    name: string;
    age: number;
    courses: string[];
}) {
    console.log(user.age);
    console.log(user.name);
    console.log(user.courses.join(', '));
}

const user1 = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

const user2 = {
    name: 'Daniyel',
    age: 24,
    courses: ['Java', 'C#'],
};

printUser(user1);