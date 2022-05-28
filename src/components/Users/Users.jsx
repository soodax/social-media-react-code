import './Users.scss';
import User from './User/User';
import Paginator from '../Common/Paginator/Paginator';


const Users = ({
    usersElements,
    isFollowingProcess,
    followUser,
    unfollowUser,
    pages,
    currentPageNumber,
    onCurrentPageUpdate,
    maxUsersCount,
    maxPageSize,
    isAuth }) => {

    return (
        <div>
            <Paginator pages={pages}
                currentPageNumber={currentPageNumber}
                onCurrentPageUpdate={onCurrentPageUpdate}
                maxUsersCount={maxUsersCount}
                maxPageSize={maxPageSize} />
            {usersElements.map(user =>
                <User key={user.id}
                    user={user}
                    isFollowingProcess={isFollowingProcess}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                    isAuth={isAuth} />)}
        </div>
    )
}

export default Users