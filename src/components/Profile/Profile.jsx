import './Profile.scss';
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({
    profile,
    userStatus,
    updateUserStatus,
    setUserStatus,
    currentID,
    isAuth }) => {

    return (
        <div className='profile'>
            <UserInfo profile={profile}
                userStatus={userStatus}
                updateUserStatus={updateUserStatus}
                setUserStatus={setUserStatus}
                currentID={currentID} 
                isAuth={isAuth}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;