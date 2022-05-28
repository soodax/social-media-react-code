import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import Post from './Post/Post';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
            .map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)
    };
}

const MyPostsContainer = connect(mapStateToProps, null)(MyPosts);


export default MyPostsContainer;