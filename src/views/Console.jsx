import React from 'react';
import { connect } from 'react-redux';
import jss from 'jss';
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
  historyDeleteAct,
  historyDeleteAllAct,
  requestHistoryAsyncAct,
  historyReqValueSet,
} from '../store/actions/historyActions';

const { classes } = jss
  .createStyleSheet({
    wrapp: {
      overflow: 'hidden',
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
  })
  .attach();

const mapStateToProps = (state) => ({
  login: state.auth.login,
  session: state.auth.session,
  glutterSize: state.consoleApi.glutter,
  history: state.history,
  initialReqValue: state.editor.reqValue,
  initialResValue: state.editor.resValue,
  initialResValid: state.editor.isValid,
});

const mapDispatchToProps = (dispatch) => ({
  setReqValue: (reqValue) => {
    dispatch(historyReqValueSet({ reqValue }));
  },
  logout: () => {
    dispatch(logoutAct());
  },
  requestHistory: (reqValue, session) => {
    dispatch(requestHistoryAsyncAct(reqValue, session));
  },
  historyDelete: (id) => {
    dispatch(historyDeleteAct(id));
  },
  historyDeleteAll: () => {
    dispatch(historyDeleteAllAct());
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
      const { initialReqValue } = props;
      this.state = {
        reqValue: initialReqValue,
        errorMessage: '',
      };
      this.reqJsonFormat = this.reqJsonFormat.bind(this);
    }

    reqJsonFormat(reqValue) {
      try {
        const formatedJson = JSON.stringify(JSON.parse(reqValue), null, '  ');
        return formatedJson;
      } catch (e) {
        this.setState({ errorMessage: e.message });
      }
      return null;
    }

    render() {
      const {
        logout,
        login,
        glutterSize,
        glutterSizeChange,
        historyDelete,
        history,
        historyDeleteAll,
        requestHistory,
        session,
        initialResValue,
        setReqValue,
        initialReqValue,
        initialResValid,
      } = this.props;
      const { errorMessage } = this.state;

      return (
        <div className={classes.wrapp}>
          <Header login={login} onLogout={() => logout()} />
          <HistoryLine
            history={history}
            onHistoryClear={() => historyDeleteAll()}
            onDeleteRecord={(id) => {
              historyDelete(id);
            }}
            onRunRecord={(body) => {
              requestHistory(
                JSON.stringify(JSON.parse(body), null, '  '),
                session,
              );
            }}
          />
          <QueryEditor
            glutterSize={glutterSize}
            responceValue={initialResValue}
            requestValue={initialReqValue}
            resValid={initialResValid}
            errorMessage={errorMessage}
            onReqChange={(e) => {
              setReqValue(e);
              this.setState({ errorMessage: '' });
            }}
            onGlutterSizeChange={(e) => {
              glutterSizeChange(e);
            }}
          />
          <div className={classes.footer}>
            <Button
              onClick={() => {
                const formated = this.reqJsonFormat(initialReqValue);
                if (formated) {
                  requestHistory(formated, session);
                }
              }}
            >
              <Text fontSize="16px">Отправить</Text>
            </Button>
            <div className={classes.spacer} />
            <a className={classes.href} href="https://github.com/pashaish">
              <Text>https://github.com/pashaish</Text>
            </a>
            <div className={classes.spacer} />
            <TransparentButton
              onClick={() => {
                const formated = this.reqJsonFormat(initialReqValue);
                if (formated) {
                  setReqValue(formated);
                }
              }}
            >
              <FormatIcon />
              <Text fontSize="16px">Форматировать</Text>
            </TransparentButton>
          </div>
        </div>
      );
    }
  },
);
