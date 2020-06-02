import React from 'react';
import { connect } from 'react-redux';
// import jss from 'jss';
import { logoutAction } from '../store/actions/authActions';
import { Header } from '../components/Header';
import { HistoryLine } from '../components/HistoryLine';

// const { classes } = jss.createStyleSheet({

// }).attach();

const mapStateToProps = (state) => ({
  login: state.auth.login,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutAction());
  },
});

export const Console = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //
      };
    }

    render() {
      const { logout, login } = this.props;
      return (
        <>
          <Header login={login} onLogout={() => logout()} />
          <HistoryLine />
        </>
      );
    }
  },
);
