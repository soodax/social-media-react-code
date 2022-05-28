import { NavLink } from 'react-router-dom';
import './Nav.scss';
import FriendsBarContainer from './FriendsBar/FriendsBarContainer';

const Nav = (props) => {
    return (
        <nav className='nav'>
            <ul>
                <li> <NavLink className={navData => navData.isActive ? 'nav__link_active' : 'nav__link'} to='/profile'>Profile</NavLink> </li>
                <li> <NavLink className={navData => navData.isActive ? 'nav__link_active' : 'nav__link'} to='/users'>Users</NavLink> </li>
                <li> <NavLink className={navData => navData.isActive ? 'nav__link_active' : 'nav__link'} to='/dialogs'>Messages</NavLink> </li>
                {/* <li> <NavLink className={navData => navData.isActive ? 'nav__link_active' : 'nav__link'} to='/news'>News</NavLink> </li>
                <li> <NavLink className={navData => navData.isActive ? 'nav__link_active' : 'nav__link'} to='/music'>Music</NavLink> </li>
                <li> <NavLink className={navData => navData.isActive ? 'nav__link_active' : 'nav__link'} to='/settings'>Settings</NavLink> </li> */}
            </ul>
            {/* <FriendsBarContainer /> */}
        </nav>
    
    );
}

export default Nav;