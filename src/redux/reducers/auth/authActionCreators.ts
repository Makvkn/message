import {authEnum, IUser, loginActionCreator} from "./types";
import axios from "axios/index";
import {AppDispatch} from "../../store";


export const AuthActionCreators = {
    setAuth: (payload: boolean):loginActionCreator => ({type: authEnum.AUTH, payload}),
    setUser: (user: IUser) => ({type: authEnum.SET_USER, payload: user}),
    setIsError: (payload: string) => ({type: authEnum.ERROR, payload}),
    setRegistration: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await axios.get("./users.json")
            console.log(response)
            let mockUser = response.data.find((user: IUser) => user.username === username && user.password === password)
            if (mockUser) {
                dispatch(AuthActionCreators.setAuth(true))
                dispatch(AuthActionCreators.setUser(mockUser))

                // navigate("/direct");

            } else {
                dispatch(AuthActionCreators.setIsError('Username or password is not correct'))
    // console.log(useIsError)
}
} catch (e) {
    console.log('error', (e))
}
    }
}