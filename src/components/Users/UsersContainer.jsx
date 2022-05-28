import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser
} from '../../redux/usersReducer';
import Preloader from '../Common/Preloader/Preloader';
import {
    getUsersElements,
    getMaxUsersCount,
    getMaxPageSize,
    getCurrentPageNumber,
    getIsFetching,
    getIsFollowingProcess
} from '../../selectors/user-selector';
import { getIsAuth } from '../../selectors/auth-selector';

const UsersContainer = ({
    usersElements,
    getUsers,
    currentPageNumber,
    maxPageSize,
    setCurrentPage,
    maxUsersCount,
    isFollowingProcess,
    followUser,
    unfollowUser,
    isFetching,
    isAuth }) => {

    useEffect(() => {
        if (usersElements.length === 0) {
            getUsers(currentPageNumber, maxPageSize);
        }
    }, [])

    let onCurrentPageUpdate = (currentPageNumber) => {
        setCurrentPage(currentPageNumber);
        getUsers(currentPageNumber, maxPageSize);
    }

    return (
        <div>
            {isFetching === true ? <Preloader /> : null}
            <Users maxUsersCount={maxUsersCount}
                maxPageSize={maxPageSize}
                usersElements={usersElements}
                currentPageNumber={currentPageNumber}
                onCurrentPageUpdate={onCurrentPageUpdate}
                isFollowingProcess={isFollowingProcess}
                followUser={followUser}
                unfollowUser={unfollowUser}
                isAuth={isAuth}/>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        usersElements: getUsersElements(state),
        maxUsersCount: getMaxUsersCount(state),
        maxPageSize: getMaxPageSize(state),
        currentPageNumber: getCurrentPageNumber(state),
        isFetching: getIsFetching(state),
        isFollowingProcess: getIsFollowingProcess(state),
        isAuth: getIsAuth(state)
    };
}

export default connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser
})(UsersContainer);

