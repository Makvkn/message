import {authEnum, IUser, loginActionCreator} from "./types";


export const AuthActionCreators = {
    setAuth: (payload: boolean):loginActionCreator => ({type: authEnum.AUTH, payload}),
    setUser: (user: IUser) => ({type: authEnum.SET_USER, payload: user}),
    setIsError: (payload: string) => ({type: authEnum.ERROR, payload})
}