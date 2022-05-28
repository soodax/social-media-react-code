import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    setProfile,
    getUserProfile,
    requestUserStatus,
    updateUserStatus,
    setUserStatus
} from '../../redux/profileReducer';
import Profile from './Profile';
import { isFetchingChange } from '../../redux/usersReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { useParams } from "react-router-dom";
import {
    getProfile,
    getUserStatus,
} from '../../selectors/profile-selector';
import { getIsAuth } from '../../selectors/auth-selector';

const ProfileContainer = ({ 
    getUserProfile, 
    requestUserStatus, 
    profile, 
    userStatus, 
    updateUserStatus, 
    setUserStatus,
    isAuth }) => {

    const [currentID, setCurrentID] = useState(null);

    let { id } = useParams();
    useEffect(() => {
        if (!id) {
            id = '23462';
        }
        getUserProfile(id);
        requestUserStatus(id);
        setCurrentID(id)
    }, [])

    return (
        <div className='profile'>
            <Profile 
                profile={profile}
                userStatus={userStatus}
                updateUserStatus={updateUserStatus}
                setUserStatus={setUserStatus} 
                currentID={currentID}
                isAuth={isAuth}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        isAuth: getIsAuth(state),
        userStatus: getUserStatus(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setProfile,
        isFetchingChange,
        getUserProfile,
        requestUserStatus,
        updateUserStatus,
        setUserStatus
    }),
    // withAuthRedirect
)(ProfileContainer)
