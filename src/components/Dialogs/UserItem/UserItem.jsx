import './UserItem.scss';
import { NavLink } from 'react-router-dom';

const UserItem = ({ id, name }) => {
    return (
        <div>
            <NavLink className='userLink' to={id}>{name}</NavLink>
        </div>
    );
}

export default UserItem;