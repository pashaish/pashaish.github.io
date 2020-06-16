// @ts-check
import React from 'react';
import jss from 'jss';

const { classes } = jss
  .createStyleSheet({
    text: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
      color: 'inherit',
    },
    large: {
      margin: '0 12px',
      fontSize: '21px',
    },
  })
  .attach();

export const Text = ({
  children = '',
  type = 'span',
  large,
  fontSize = null,
  className = '',
}) => React.createElement(
  type,
  {
    style: { fontSize },
    className: `${classes.text} ${className} ${large ? classes.large : ''}`,
  },
  children,
);
