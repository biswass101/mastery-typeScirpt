interface User {
    name: string;
    email: string;
    id?: number
}

type UserOptional = Partial<User>
type UserRequired = Required<User>
type UserBasicInfo = Pick<User, 'name' | 'email'>
type UserInfo = Omit<User, 'name' | 'id'>

//nesting utility type
type UserBaseInfoRequired = Required<Pick<User, 'name' | 'email'>>

function updateUser(user: User, data: UserOptional) {
    user1 = {...user, ...data}
    return {
        ...user,
        ...data,
    }
}
let user1: User = {name: 'Niloy', email: 'biswassnaeemcse@gmail.com'};
console.log(user1);
updateUser(user1, {email: "xy@z.com"})
console.log(user1);