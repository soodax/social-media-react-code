import FriendsBar from './FriendsBar';
import './FriendsBar.scss';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebar.friendsData
    };
}

let mapDispatchToProps = (dispatch) => {
    return {

    };
}

const FriendsBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBar);



export default FriendsBarContainer;