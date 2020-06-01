// @ts-check
import React from 'react';
import jss from 'jss';
import { Text } from './Text';

const { classes } = jss.createStyleSheet({
  button: {
    background: 'linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4',
    borderRadius: '5px',
    width: '120px',
    height: '40px',
    border: '0px',
    color: 'white',
  },
  text: {
    color: 'white',
  },
}).attach();
/**
 * @param {{
 *  children?: any,
 *  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
 * }} param0
 */
export const Button = ({ children = '', onClick }) => (
  <button
    className={classes.button}
    onClick={onClick}
    type="button"
  >
    <Text className={classes.text}>{children}</Text>
  </button>
);
