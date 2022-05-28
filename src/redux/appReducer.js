import { authProcess } from "./authReducer";

const INITIAL_PROCESS = 'app/INITIAL_PROCESS';

let initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_PROCESS:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state
    }
}

export const initialProcess = () => ({ type: INITIAL_PROCESS })

export const initialization = () => {
    return (dispatch) => {
        let promise = dispatch(authProcess());

        Promise.all([promise]).then(() => {
            dispatch(initialProcess());
        })

    }
}

export default appReducer
