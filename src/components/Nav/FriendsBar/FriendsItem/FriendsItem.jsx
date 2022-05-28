import './FriendsItem.scss';

const FriendsItem = (props) => {
    return (
        <div className='friendsItem'>
            {props.name}
        </div>
    );
}

export default FriendsItem;