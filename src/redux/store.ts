import { combineReducers, legacy_createStore} from "redux";
import {authReducer} from "./reducers/auth/authReducer";
import {composeWithDevTools} from "redux-devtools-extension";


 const rootReducers = combineReducers({
  authReducer
 })

 const store = legacy_createStore(rootReducers, composeWithDevTools())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store