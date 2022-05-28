import './UserInfo.scss';
import userPhoto from '../../../assets/images/userPhoto.png'
import Preloader from '../../Common/Preloader/Preloader';
import UserStatus from './UserStatus/UserStatus';

const UserInfo = ({
    profile,
    userStatus,
    updateUserStatus,
    setUserStatus,
    currentID,
    isAuth }) => {

    if (!profile || !profile.photos) {
        return <Preloader />
    }

    return (
        <div className='userInfo'>
            <div className='userInfo__name'>
                <img src={profile.photos.large != null
                    ? profile.photos.large
                    : userPhoto} alt="" />
                <h2>{!isAuth && currentID == '23462' ? 'Test user' : profile.fullName}</h2>
                <UserStatus userStatus={userStatus}
                    updateUserStatus={updateUserStatus}
                    setUserStatus={setUserStatus}
                    currentID={currentID} 
                    isAuth={isAuth}/>
            </div>
            <div className='userInfo__block'>
                <div className='userInfo__city'>
                    <h2>Looking for a job: {profile.lookingForAJob === true
                        ? 'Yes'
                        : 'No'}</h2>
                </div>
                <div className="userInfo__birthdate">
                    <h2>Description: {profile.lookingForAJobDescription === true
                        ? profile.lookingForAJobDescription
                        : 'No'}</h2>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;