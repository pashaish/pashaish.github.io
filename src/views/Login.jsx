// @ts-check
import React from 'react';
import jss from 'jss';
import { connect } from 'react-redux';
import { Text } from '../components/Text';
import { Logo } from '../components/Logo';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { tryAuthAsync } from '../store/actions/authActions';
import { AuthErrorBox } from '../components/AuthErrorBox';

const { classes } = jss.createStyleSheet({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 30px',
    marginTop: '20px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    '& > *:not(:first-child)': {
      marginTop: '25px',
    },
  },
  href: {
    marginTop: '8px',
    color: '#999999',
    textDecoration: 'none',
    '& *': {
      color: '#999999',
    },
  },
}).attach();


const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});


const mapDispatchToProps = (dispatch) => ({
  tryAuth: (login, password, sublogin) => {
    dispatch(tryAuthAsync(login, sublogin, password));
  },
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
  constructor(props) {
    super(props);
    this.auth = this.auth.bind(this);
    this.state = {
      login: { value: '', error: null },
      sublogin: { value: '', error: null },
      password: { value: '', error: null },
      showError: false,
    };
  }

  auth() {
    const { login, password, sublogin } = this.state;
    const { tryAuth } = this.props;
    let isValid = true;

    if (login.value.match(/\s/)) {
      this.setState({
        login: { ...login, error: 'Поле не должно содержать пробелы' },
      });
      isValid = false;
    }
    if (login.value.toLowerCase().match(/[а-я]/)) {
      this.setState({
        login: { ...login, error: 'Поле не должно содержать кириллицы' },
      });
      isValid = false;
    }
    if (password.value.toLowerCase().match(/[а-я]/)) {
      this.setState({
        password: { ...password, error: 'Поле не должно содержать кириллицы' },
      });
      isValid = false;
    }
    if (login.value.length < 4) {
      this.setState({
        login: { ...login, error: 'Поле должно содержать больше 3 символов' },
      });
      isValid = false;
    }
    if (password.value.length < 9) {
      this.setState({
        password: { ...password, error: 'Поле должно содержать больше 8 символов' },
      });
      isValid = false;
    }
    if (isValid) {
      tryAuth(login.value, password.value, sublogin.value);
      this.setState({ showError: true });
    }
  }

  render() {
    const { showError, login, password, sublogin } = this.state;
    const { errorMessage } = this.props;
    return (
      <div className={classes.wrapper}>
        <Logo />
        <div className={classes.card}>
          <Text fontSize="24px" type="span">API-консолька</Text>
          {showError ? <AuthErrorBox message={errorMessage} /> : ''}
          <Input
            label="Логин"
            error={login.error}
            value={login.value}
            onChange={(e) => this.setState({
              login: { value: e.currentTarget.value, error: null },
            })}
          />
          <Input
            label="Сублогин"
            sublabel="Опционально"
            error={sublogin.error}
            value={sublogin.value}
            onChange={(e) => this.setState({
              sublogin: { value: e.currentTarget.value, error: null },
            })}
          />
          <Input
            type="password"
            label="Пароль"
            error={password.error}
            value={password.value}
            onChange={(e) => this.setState({
              password: { value: e.currentTarget.value, error: null },
            })}
          />
          <Button onClick={this.auth}>
            Войти
          </Button>
        </div>
        <a className={classes.href} href="https://github.com/pashaish">
          <Text>https://github.com/pashaish</Text>
        </a>
      </div>
    );
  }
});
