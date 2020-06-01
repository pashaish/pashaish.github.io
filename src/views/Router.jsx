import React from 'react';
import { connect } from 'react-redux';
import { checkAuthAsync } from '../store/actions/authActions';
import { Login } from './Login';
import { Console } from './Console';


const mapStateToProps = (state) => ({
  session: state.auth.session,
  isAuth: state.auth.isAuth,
});


const mapDispatchToProps = (dispatch) => ({
  checkAuth: (login, password, sublogin) => {
    dispatch(checkAuthAsync(login, sublogin, password));
  },
});


export const Router = connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
  componentDidMount() {
    const { checkAuth, session } = this.props;
    checkAuth(session);
  }

  render() {
    const { isAuth } = this.props;
    return (
      <>
        {
        isAuth
          ? <Console />
          : <Login />
        }
      </>
    );
  }
});
