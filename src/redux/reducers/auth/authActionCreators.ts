import {authEnum, IUser} from "./types";


export const AuthActionCreators = {
    setAuth: (payload: boolean) => ({type: authEnum.AUTH, payload}),
    setUser: (user: IUser) => ({type: authEnum.SET_USER, payload: user}),
    setIsError: (payload: string) => ({type: authEnum.ERROR, payload})
}