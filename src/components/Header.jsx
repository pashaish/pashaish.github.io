import React from 'react';
import jss from 'jss';
import { LogoIcon } from '../icons/LogoIcon';
import { Text } from './Text';
import { LogoutIcon } from '../icons/LogoutIcon';
import { FullscreenIcon } from '../icons/FullscreenIcon';

const { classes } = jss.createStyleSheet({
  spacer: {
    marginLeft: 'auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  },
  loginWrapper: {
    padding: '5px',
    border: '1px solid rgba(0, 0, 0, 0.2);',
    borderRadius: '5px',
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    border: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px',
    marginRight: '10px',
  },
}).attach();


export const Header = ({ login = '', onLogout = () => {} }) => {
  const [isFullscreen, setFullscreen] = React.useState(document.fullscreen);
  const fullscreenToggle = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setFullscreen(!isFullscreen);
  };
  return (
    <>
      <div className={classes.header}>
        <LogoIcon />
        <Text fontSize="20px">API-консолька</Text>
        <div className={classes.spacer} />
        <div className={classes.loginWrapper}>
          <Text>{login}</Text>
        </div>
        <button type="button" onClick={() => onLogout()} className={classes.btn}>
          <Text fontSize="16px">Выйти</Text>
          <LogoutIcon />
        </button>
        <button
          type="button"
          className={classes.btn}
          onClick={() => fullscreenToggle()}
        >
          <FullscreenIcon />
        </button>
      </div>
    </>
  );
};
