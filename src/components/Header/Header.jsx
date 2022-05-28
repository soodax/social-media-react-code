import './Header.scss';
import userPhoto from '../../assets/images/userPhoto.png';
import logo from '../../assets/images/react.svg'

import { NavLink } from 'react-router-dom';

const Header = ({
    isAuth,
    login,
    logout }) => {

    return (
        <header className='header'>
            <div>
                <a href="#">
                    <img className='header__logo' src={logo} alt='Logo'></img>
                </a>
            </div>
            <div className='header__userBlock'>

                {isAuth
                    ? <div>
                        <span className='header__currentUser'>{login}</span>
                        <button className='header__logout' onClick={logout}>Logout</button>
                    </div>
                    : <div className='header__login'>
                        <NavLink className='header__logout' to={'/login'}>Login</NavLink>
                        <img src={userPhoto} alt="" />
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;