import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props}/>
    }

    const AuthRedirectComponent = connect(mapStateToProps, {})(RedirectComponent);

    return AuthRedirectComponent
}




