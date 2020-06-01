// @ts-check
import React from 'react';
import jss from 'jss';
import { Text } from '../components/Text';
import { Logo } from '../components/Logo';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

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
}).attach();



export const Login = () => {
  const [login, setLogin] = React.useState({ value: '', error: null });
  const [sublogin, setSublogin] = React.useState({ value: '', error: null });
  const [password, setPassword] = React.useState({ value: '', error: null });

  const auth = () => {
    if (login.value.length < 4) {
      setLogin({ ...login, error: 'Поле должно содержать больше 3 символов' });
    }
    if (password.value.length < 5) {
      setPassword({ ...password, error: 'Поле должно содержать больше 4 символов' });
    }
  };

  return (
    <div className={classes.wrapper}>
      <Logo />
      <div className={classes.card}>
        <Text fontSize="24px" type="span">API-консолька</Text>
        <Input
          label="Логин"
          error={login.error}
          value={login.value}
          onChange={(e) => setLogin({ value: e.currentTarget.value, error: null })}
        />
        <Input
          label="Сублогин"
          sublabel="Опционально"
          error={sublogin.error}
          value={sublogin.value}
          onChange={(e) => setSublogin({ value: e.currentTarget.value, error: null })}
        />
        <Input
          type="password"
          label="Пароль"
          error={password.error}
          value={password.value}
          onChange={(e) => setPassword({ value: e.currentTarget.value, error: null })}
        />
        <Button onClick={auth}>
          Войти
        </Button>
      </div>
    </div>
  );
};
