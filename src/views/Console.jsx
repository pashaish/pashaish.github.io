import React from 'react';
import { connect } from 'react-redux';
import jss from 'jss';
import { logoutAction } from '../store/actions/authActions';
import { Header } from '../components/Header';
import { HistoryLine } from '../components/HistoryLine';
import { QueryEditor } from '../components/QueryEditor';
import { changeGlutter } from '../store/actions/consoleApiActions';
import { Text } from '../components/Text';

const { classes } = jss.createStyleSheet({
  wrapp: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
}).attach();

const mapStateToProps = (state) => ({
  login: state.auth.login,
  glutterSize: state.consoleApi.glutter,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutAction());
  },
  glutterSizeChange: (size) => {
    dispatch(changeGlutter(size));
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
      const {
        logout, login, glutterSize, glutterSizeChange,
      } = this.props;
      return (
        <div className={classes.wrapp}>
          <Header login={login} onLogout={() => logout()} />
          <HistoryLine />
          <QueryEditor
            glutterSize={glutterSize}
            onGlutterSizeChange={(e) => {
              glutterSizeChange(e);
            }}
          />
          <Text>Action panel</Text>
        </div>
      );
    }
  },
);
