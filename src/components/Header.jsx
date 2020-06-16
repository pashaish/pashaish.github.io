import React from 'react';
import jss from 'jss';
import { LogoIcon } from '../icons/LogoIcon';
import { Text } from './Text';
import { LogoutIcon } from '../icons/LogoutIcon';
import { FullscreenInIcon } from '../icons/FullscreenInIcon';
import { TransparentButton } from './TransparentButton';
import { FullscreenOutIcon } from '../icons/FullscreenOutIcon';

const { classes } = jss
  .createStyleSheet({
    spacer: {
      marginLeft: 'auto',
    },
    header: {
      backgroundColor: '#F6F6F6',
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
    consoleTitle: {
      marginLeft: '15px',
    },
    logoutTxt: {
      marginRight: '13px',
    },
  })
  .attach();

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
        <Text className={classes.consoleTitle} fontSize="20px">
          API-консолька
        </Text>
        <div className={classes.spacer} />
        <div className={classes.loginWrapper}>
          <Text>{login}</Text>
        </div>
        <TransparentButton onClick={onLogout}>
          <Text className={classes.logoutTxt} fontSize="16px">
            Выйти
          </Text>
          <LogoutIcon />
        </TransparentButton>
        <TransparentButton onClick={fullscreenToggle}>
          {isFullscreen ? <FullscreenOutIcon /> : <FullscreenInIcon />}
        </TransparentButton>
      </div>
    </>
  );
};
