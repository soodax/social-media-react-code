import './NewPost.scss';
import React from 'react';
import AddPostForm from './AddPostForm/AddPostForm';

const NewPost = ({ addPost }) => {
    return (
        <AddPostForm addPost={addPost} />
    );
}

export default NewPost;