import './UserMessage.scss';

const UserMessage = ({ message }) => {
    return (
        <div className='userMessage'>
            <div className='userMessage__item'>
                {message}
            </div>
        </div>
    );
}

export default UserMessage;