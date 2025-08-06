enum EPermissionLevel {
    Admin = 'Admin',
    User =  'User',
    Guest = 'Guest'
}

interface TRole {
    persmissionLevel: EPermissionLevel;
}

interface IUser {
    name: string;
    age: number;
    courses: string[];
    permission: EPermissionLevel.Admin
}

const user1: IUser = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permission: EPermissionLevel.Admin
}