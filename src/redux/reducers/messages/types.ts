export interface IUser {
    username: string;
    password: string;
}

export interface Auth {
    user: IUser;
    isAuth: boolean;
    error: string;
}

export enum authEnum {
    AUTH = 'AUTH',
    SET_USER = "SET_USER",
    ERROR = 'ERROR',
}

export interface loginActionCreator {
    type: authEnum.AUTH;
    payload: boolean;
}

export interface userActionCreator {
    type: authEnum.SET_USER;
    payload: IUser;
}

export interface errorActionCreator {
    type: authEnum.ERROR;
    payload: string;
}

