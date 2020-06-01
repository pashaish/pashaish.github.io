import React from 'react';
import { connect } from 'react-redux';
import { logoutAction } from '../store/actions/authActions';

const mapStateToProps = () => ({
});


const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutAction());
  },
});

export const Console = connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    const { logout } = this.props;
    return (
      <>
        <button type="button" onClick={() => logout()}>Logout</button>
      </>
    );
  }
});
