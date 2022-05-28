import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        // 'API-KEY': '29e0a73c-1ae5-4aea-ad00-7b4e7d4d7efa'
        'API-KEY': 'b6cafa4a-4de8-4e4c-9122-da31bae55591'
    }
})

export const usersApi = {
    getUsers(currentPageNumber, maxPageSize) {
        return instance.get(`users?page=${currentPageNumber}&count=${maxPageSize}`)
    },

    followUser(userID) {
        return instance.post(`follow/${userID}`)
    },

    unfollowUser(userID) {
        return instance.delete(`follow/${userID}`)
    }
}

export const profileApi = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`)
    },

    requestUserStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
    
}

export const authApi = {
    auth() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}