interface User {
    name: string;
    id: number;
    age: number
}

interface Admin {
    name: string;
}

function getInfo<T extends User | Admin>(user: T, key: keyof T) {
   console.log(user[key]);
}

const u1: User = {name: "Biswas", id: 101, age: 25};
const a1: Admin = {name: "Niloy"};

getInfo(u1, "age");
getInfo(a1, 'name');