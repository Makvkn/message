import {Auth, authEnum, IUser} from "../auth/types";
import {userEnum} from "./types";



const initialState: IUser[] = [
    {
        username: 'lol',
        password: 'lol',
        id: 0
    },
    {
        username: 'lol',
        password: 'lol',
        id: 1
    },
    {
        username: 'lol',
        password: 'lol',
        id: 2
    }
]

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userEnum.GET_USER:
            return {...state, }
        // case authEnum.AUTH:
        //     return {...state, isAuth: action.payload};
        // case authEnum.SET_USER:
        //     return {...state, user: action.payload}
        // case authEnum.ERROR:
        //     return {...state, error: action.payload};
        default:
            return state;
    }
}