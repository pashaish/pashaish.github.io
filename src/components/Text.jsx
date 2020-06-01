// @ts-check
import React from 'react';
import jss from 'jss';

const { classes } = jss.createStyleSheet({
  text: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
    color: '#0D0D0D',
  },
}).attach();

/**
 * @param {{
  *  children?: string | number | boolean,
  *  type?: string,
  *  fontSize?: string | null,
  *  className?: string,
  * }} param0
  */
export const Text = ({
  children = '', type = 'span', fontSize = null, className = '',
}) => (
  React.createElement(type, {
    style: { fontSize },
    className: `${classes.text} ${className}`,
  }, children)
);
