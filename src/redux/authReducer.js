import { authApi } from "../api/api";

const SET_DATA = 'auth/SET_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                ...action.data,
                // isAuth: action.isAuth
            };
        default:
            return state;
    }
}

export const setData = (id, email, login, isAuth) => ({ type: SET_DATA, data: { id, email, login, isAuth } });

export const authProcess = () => {
    return async (dispatch) => {
        let response = await authApi.auth();

        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authApi.login(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(authProcess());
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authApi.logout();

        if (response.data.resultCode === 0) {
            dispatch(setData(null, null, null, false));
        }
    }
}

export default authReducer