import React from 'react';
import { connect } from 'react-redux';
import jss from 'jss';
import { logoutAction } from '../store/actions/authActions';
import { Header } from '../components/Header';
import { HistoryLine } from '../components/HistoryLine';
import { QueryEditor } from '../components/QueryEditor';
import { changeGlutter } from '../store/actions/consoleApiActions';
import { Text } from '../components/Text';
import { TransparentButton } from '../components/TransparentButton';
import { FormatIcon } from '../icons/FormatIcon';

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
        reqValue: '',
        errorMessage: '',
      };
    }

    reqJsonFormat() {
      const { reqValue } = this.state;
      try {
        const formatedJson = JSON.stringify(JSON.parse(reqValue), null, '  ');
        this.setState({ reqValue: formatedJson });
      } catch (e) {
        this.setState({ errorMessage: e.message });
      }
    }

    render() {
      const {
        logout, login, glutterSize, glutterSizeChange,
      } = this.props;
      const { reqValue, errorMessage } = this.state;

      return (
        <div className={classes.wrapp}>
          <Header login={login} onLogout={() => logout()} />
          <HistoryLine />
          <QueryEditor
            glutterSize={glutterSize}
            requestValue={reqValue}
            errorMessage={errorMessage}
            onReqChange={(e) => this.setState({ reqValue: e, errorMessage: '' })}
            onGlutterSizeChange={(e) => {
              glutterSizeChange(e);
            }}
          />
          <TransparentButton onClick={() => this.reqJsonFormat()}>
            <FormatIcon />
            <Text fontSize="16px">
              Форматировать
            </Text>
          </TransparentButton>
        </div>
      );
    }
  },
);
