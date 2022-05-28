import './FriendsBar.scss';
import FriendsItem from './FriendsItem/FriendsItem';

const FriendsBar = (props) => {

    let friendsElements = props.friendsData
        .map(el => <FriendsItem id={el.id} name={el.name} />);
    return (

        <div className='friendsBar'>
            <h2>Friends</h2>
            <div className='friendsBar__row'>
                {/* {friendsElements} */}
            </div>
        </div>
    );
}

export default FriendsBar;