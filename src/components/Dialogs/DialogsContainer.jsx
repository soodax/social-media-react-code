import UserItem from './UserItem/UserItem';
import UserMessage from './UserMessage/UserMessage';
import { addMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getIsAuth } from '../../selectors/auth-selector';

const mapStateToProps = (state) => {
    return {
        usersElements: state.dialogsPage.usersData
            .map(el => <UserItem key={el.id} name={el.name} id={el.id} />),

        messagesElements: state.dialogsPage.messagesData
            .map(el => <UserMessage key={el.id} message={el.message} id={el.id}></UserMessage>),
            
        isAuth: getIsAuth(state)
    };
}

export default compose(
    connect(mapStateToProps, {
        addMessage
    }),
    // withAuthRedirect
)(Dialogs)
