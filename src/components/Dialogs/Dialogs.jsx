import './Dialogs.scss';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = ({
    usersElements,
    messagesElements,
    addMessage }) => {

    return (
        <div className='dialogs'>
            <div className='dialogs__users'>
                {usersElements}
            </div>
            <div className="dialogs__messages">
                <div className='dialogs__chat'>
                    {messagesElements}
                </div>
                <AddMessageForm addMessage={addMessage} />
            </div>
            <div className="dialogs__banner">
                Banner
            </div>
        </div>
    );
}

export default Dialogs;