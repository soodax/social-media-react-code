import './MyPosts.scss';
import NewPostContainer from './NewPost/NewPostContainer';

const MyPosts = ({ postsData }) => {
    return (
        <div className='myPosts'>
            <div className='myPosts__posts'>
                <NewPostContainer />
                {postsData}
            </div>
            <div className='myPosts__block'>

            </div>
        </div>
    );
}

export default MyPosts;