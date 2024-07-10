export interface User {
    isLoggedIn: boolean;
    username: string;
    fullName: string;
    email: string; 
    password: string;
}

export interface UserSliceState {
    user: User;
}