import {Auth, authEnum, IUser} from "./types";

const initialState: Auth = {
    user: {} as IUser,
    isAuth: false,
    error: ''
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.payload) {
        case authEnum.AUTH:
            return {...state, isAuth: action.payload};
        case authEnum.SET_USER:
            return {...state, user: action.payload}
        case authEnum.ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}