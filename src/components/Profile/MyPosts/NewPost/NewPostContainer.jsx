import { connect } from 'react-redux';
import { addPost } from '../../../../redux/profileReducer';
import NewPost from './NewPost';

const NewPostContainer = connect(null, {
    addPost
})(NewPost);

export default NewPostContainer;