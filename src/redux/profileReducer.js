import { profileApi } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';

let initialState = {
    postsData: [
        { id: 1, message: 'First post', likesCount: 2 },
        { id: 2, message: 'Second post', likesCount: 4 },
        { id: 3, message: 'Third post', likesCount: 8 },
    ],
    profile: [],
    userStatus: ''

};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 4, message: action.text, likesCount: 0 }],
                newPostText: ''

            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            };
        default:
            return state;
    }
}

export const addPost = (text) => ({ type: ADD_POST, text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setUserStatus = (userStatus) => ({ type: SET_USER_STATUS, userStatus })

export const getUserProfile = (userID) => {
    return async (dispatch) => {
        let response = await profileApi.getProfile(userID);
        dispatch(setProfile(response.data));
    }
}

export const requestUserStatus = (userID) => {
    return async (dispatch) => {
        let response = await profileApi.requestUserStatus(userID);
        dispatch(setUserStatus(response.data));
    }
}

export const updateUserStatus = (body) => {
    return async (dispatch) => {
        let response = await profileApi.updateUserStatus(body);
        
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(body));
        }
    }
}

export default profileReducer