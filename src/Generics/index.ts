// Generic Functions
function printVal<T>(val: T) {
    console.log(val);
    return;
}

printVal<string>("Hello, Generics!");
printVal<number>(42);
printVal<boolean>(true);
printVal<string[]>(["Generics", "are", "powerful"]);

// Generic Interfaces
interface IApiResponse<T> {
    status: number;
    data: T;
}

const userResponse: IApiResponse<{message: string, id: number}>  = {
    status: 200,
    data: {
        message: "User created successfully",
        id: 1
    }
}

const postResponse: IApiResponse<{success: boolean, message: string, id: number}> = {
    status: 201,
    data: {
        success: true,
        message: "Post created successfully",
        id: 101 
    }
}