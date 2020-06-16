import * as React from 'react';
import jss from 'jss';

const { classes } = jss
  .createStyleSheet({
    input: {
      marginTop: '3px',
      fontSize: '18px',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
      width: '460px',
      padding: '3px',
      height: '40px',
      backgroundColor: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      boxSizing: 'border-box',
      borderRadius: '5px',
    },
    error: {
      '& input': {
        borderColor: '#CF2C00',
      },
      '& span': {
        color: '#CF2C00',
      },
    },
  })
  .attach();

export const Input = ({
  value = '', type = 'text', name = '', onChange,
}) => (
  <input
    name={name}
    className={classes.input}
    value={value}
    type={type}
    onChange={onChange}
  />
);
