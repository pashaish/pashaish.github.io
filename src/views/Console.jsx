import React from 'react';
import { connect } from 'react-redux';
import jss from 'jss';
import Sendsay from 'sendsay-api';
import { logoutAct } from '../store/actions/authActions';
import { Header } from '../components/Header';
import { HistoryLine } from '../components/HistoryLine';
import { QueryEditor } from '../components/QueryEditor';
import { changeGlutterAct } from '../store/actions/consoleApiActions';
import { Text } from '../components/Text';
import { TransparentButton } from '../components/TransparentButton';
import { Button } from '../components/Button';
import { FormatIcon } from '../icons/FormatIcon';
import {
  historyAddAct,
  historyDeleteAct,
} from '../store/actions/historyActions';

const { classes } = jss
  .createStyleSheet({
    wrapp: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    footer: {
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'row',
      padding: '5px 15px',
      '& > *': {
        margin: 'auto',
      },
    },
    spacer: {
      width: '100%',
      height: '100%',
    },
    href: {
      color: '#999999',
      textDecoration: 'none',
      '& *': {
        color: '#999999',
      },
    },
    btn: {
      padding: '10px',
    },
  })
  .attach();

const mapStateToProps = (state) => ({
  login: state.auth.login,
  session: state.auth.session,
  glutterSize: state.consoleApi.glutter,
  history: state.history,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutAct());
  },
  historyAdd: (body, isValid) => {
    dispatch(historyAddAct(body, isValid));
  },
  historyDelete: (id) => {
    dispatch(historyDeleteAct(id));
  },
  glutterSizeChange: (size) => {
    dispatch(changeGlutterAct(size));
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
        resValue: '',
        errorMessage: '',
        resValid: true,
      };
      this.reqJsonFormat = this.reqJsonFormat.bind(this);
      this.request = this.request.bind(this);
    }

    reqJsonFormat() {
      const { reqValue } = this.state;
      try {
        const formatedJson = JSON.stringify(JSON.parse(reqValue), null, '  ');
        this.setState({ reqValue: formatedJson });
        return true;
      } catch (e) {
        this.setState({ errorMessage: e.message });
      }
      return false;
    }

    request() {
      if (!this.reqJsonFormat()) {
        return;
      }
      const { session, historyAdd } = this.props;
      const { reqValue } = this.state;
      const ss = new Sendsay();
      ss.request({
        ...JSON.parse(reqValue),
        session,
      })
        .then((e) => {
          this.setState({
            resValue: JSON.stringify(e, null, '  '),
            resValid: true,
          });
          historyAdd(reqValue, true);
        })
        .catch((e) => {
          this.setState({
            resValue: JSON.stringify(e, null, '  '),
            resValid: false,
          });
          historyAdd(reqValue, true);
        });
    }

    render() {
      const {
        logout,
        login,
        glutterSize,
        glutterSizeChange,
        history,
      } = this.props;
      const {
        reqValue, errorMessage, resValue, resValid,
      } = this.state;

      return (
        <div className={classes.wrapp}>
          <Header login={login} onLogout={() => logout()} />
          <HistoryLine history={history} />
          <QueryEditor
            glutterSize={glutterSize}
            responceValue={resValue}
            requestValue={reqValue}
            resValid={resValid}
            errorMessage={errorMessage}
            onReqChange={(e) => this.setState({ reqValue: e, errorMessage: '' })}
            onGlutterSizeChange={(e) => {
              glutterSizeChange(e);
            }}
          />
          <div className={classes.footer}>
            <Button className={classes.btn} onClick={() => this.request()}>
              <Text fontSize="16px">Отправить</Text>
            </Button>
            <div className={classes.spacer} />
            <a className={classes.href} href="https://github.com/pashaish">
              <Text>https://github.com/pashaish</Text>
            </a>
            <div className={classes.spacer} />
            <TransparentButton onClick={() => this.reqJsonFormat()}>
              <FormatIcon />
              <Text fontSize="16px">Форматировать</Text>
            </TransparentButton>
          </div>
        </div>
      );
    }
  },
);
