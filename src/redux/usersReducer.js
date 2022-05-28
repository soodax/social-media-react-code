import { usersApi } from "../api/api"

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_MAX_USERS_COUNT = 'users/SET-MAX-USERS-COUNT';
const IS_FETCHING = 'users/IS-FETCHING';
const IS_FOLLOWING_PROCESS = 'users/IS_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    maxUsersCount: 200,
    maxPageSize: 5,
    currentPageNumber: 1,
    isFetching: false,
    isFollowingProcess: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPageNumber: action.currentPageNumber
            };
        case SET_MAX_USERS_COUNT:
            return {
                ...state, maxUsersCount: action.maxUsersCount
            };
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching,
            };
        case IS_FOLLOWING_PROCESS:
            return {
                ...state,
                isFollowingProcess: action.isFollowingProcess
                    ? [...state.isFollowingProcess, action.userID]
                    : state.isFollowingProcess.filter(id => id !== action.userID)
            };
        default:
            return state;
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPageNumber) => ({ type: SET_CURRENT_PAGE, currentPageNumber })
export const setMaxUsersCount = (maxUsersCount) => ({ type: SET_MAX_USERS_COUNT, maxUsersCount })
export const isFetchingChange = (isFetching) => ({ type: IS_FETCHING, isFetching })
export const isFollowingProcessChange = (isFollowingProcess, userID) => ({ type: IS_FOLLOWING_PROCESS, isFollowingProcess, userID })

export const getUsers = (currentPageNumber, maxPageSize) => {
    return async (dispatch) => {
        dispatch(isFetchingChange(true));
        let response = await usersApi.getUsers(currentPageNumber, maxPageSize);
        dispatch(setUsers(response.data.items));
        dispatch(setMaxUsersCount(response.data.totalCount));
        dispatch(isFetchingChange(false));
    }
}

export const followUser = (userID, isAuth) => {
    return async (dispatch) => {
        if (!isAuth) {
            return alert('You must be logged in!')
        }
        let response = await usersApi.followUser(userID);
        dispatch(isFollowingProcessChange(true, userID));


        if (response.data.resultCode === 0) {
            dispatch(follow(userID));
            dispatch(isFollowingProcessChange(false, userID));
        }
    }
}

export const unfollowUser = (userID, isAuth) => {
    return async (dispatch) => {
        if (!isAuth) {
            return alert('You must be logged in!')
        }
        let response = await usersApi.unfollowUser(userID);
        dispatch(isFollowingProcessChange(true, userID));

        if (response.data.resultCode === 0) {
            dispatch(unfollow(userID));
            dispatch(isFollowingProcessChange(false, userID));
        }
    }
}

export default usersReducer