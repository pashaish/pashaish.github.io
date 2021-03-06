import React from 'react';
import jss from 'jss';

const { classes } = jss
  .createStyleSheet({
    btn: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      border: 'none',
      stroke: '#121212',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '10px',
      height: '100%',
      widows: '100%',
      marginRight: '10px',
      '&:focus': {
        color: '#0055FB',
        outline: '0',
        stroke: '#0055FB',
      },
      '&:hover': {
        color: '#0055FB',
        stroke: '#0055FB',
      },
      '&:hover *': {
        color: '#0055FB',
      },
      '&:active': {},
      '&:disabled': {},
    },
  })
  .attach();

export const TransparentButton = ({ onClick, children }) => (
  <button onClick={onClick} type="button" className={classes.btn}>
    {children}
  </button>
);
