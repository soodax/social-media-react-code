import './Post.scss';
import userPhoto from '../../../../assets/images/userPhoto.png';
import likeImage from '../../../../assets/images/like.png';

const Post = (props) => {
    return (
        <div className='post'>
            <div className='post__row'>
                <div className='post__img'>
                    <img src={userPhoto} alt="" />
                </div>
                <div className='post__text'>
                    {props.message} <img src={likeImage} width="20px" alt="likes" /> {props.likesCount}
                </div>
            </div>
        </div>
    );
}

export default Post;