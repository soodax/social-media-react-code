import './User.scss';
import userPhoto from '../../../assets/images/userPhoto.png'
import { NavLink } from 'react-router-dom';

const User = ({
    user,
    isFollowingProcess,
    unfollowUser,
    followUser,
    isAuth }) => {

    return (
        <div className='userItem'>
            <div className='userItem__image'>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null
                        ? user.photos.small
                        : userPhoto} width="80" alt="" />
                </NavLink>
            </div>
            <div className='userItem__main'>
                <div className='userItem__info'>
                    <div className='userItem__fullname'>{user.name}</div>
                </div>
                <div className='userItem__status'>
                    {user.status != null
                        ? user.status
                        : 'No status'}
                </div>
            </div>
            <div className='userItem__bottom'>
                {user.followed
                    ? <input
                        disabled={isFollowingProcess.some(id => id === user.id)}
                        onClick={() => { unfollowUser(user.id, isAuth) }}
                        className="userItem__buttonUnfollow userItem__button"
                        type="button"
                        value="Unfollow" />

                    : <input
                        disabled={isFollowingProcess.some(id => id === user.id)}
                        onClick={() => { followUser(user.id, isAuth) }}
                        className="userItem__buttonFollow userItem__button"
                        type="button"
                        value="Follow" />
                }
            </div>
        </div>)
}

export default User
