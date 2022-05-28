import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/authReducer";
import { getIsAuth, getLogin } from "../../selectors/auth-selector";

const HeaderContainer = (props) => {
        return <Header {...props} />
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state),
    }
}

export default connect(mapStateToProps, {
    logout
})(HeaderContainer)