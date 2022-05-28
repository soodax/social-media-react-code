import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import { login } from '../../redux/authReducer';
import { getIsAuth } from '../../selectors/auth-selector';

const Login = ({ isAuth, login, }) => {
    if (isAuth === true) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div className='login'>
            <div className='login__block'>
                <h1>Login</h1>
                <LoginForm login={login} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state)
    }
}

export default connect(mapStateToProps, {
    login
})(Login)