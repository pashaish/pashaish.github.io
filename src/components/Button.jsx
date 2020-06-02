// @ts-check
import React from 'react';
import jss from 'jss';

const { classes } = jss
  .createStyleSheet({
    button: {
      cursor: 'pointer',
      background: 'linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4',
      borderRadius: '5px',
      width: '120px',
      height: '40px',
      border: '1px solid #C4C4C4',
      color: 'white',
      outline: '0px solid lightgray',
      '&:focus': {
        background:
          'linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4',
        border: '1px solid #45A5FF',
      },
      '&:hover': {
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4',
      },
      '&:active': {
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4',
      },
      '&:disabled': {
        background:
          'linear-gradient(0deg, #C4C4C4, #C4C4C4), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%)',
      },
    },
    text: {
      color: 'white',
    },
  })
  .attach();
/**
 * @param {{
 *  children?: any,
 *  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
 *  className?: string,
 * }} param0
 */
export const Button = ({ children = '', onClick, className }) => (
  <button
    className={`${classes.button} ${className}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);
