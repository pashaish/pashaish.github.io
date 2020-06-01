import React from 'react';
import jss from 'jss';
import { Text } from './Text';

const { classes } = jss.createStyleSheet({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(207, 44, 0, 0.1)',
    padding: '15px',
    borderRadius: '5px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& > *': {
      color: '#CF2C00',
    },
    '& > svg': {
      margin: '4px',
    },
  },
  errorBox: {
    color: '#CF2C00',
    opacity: '0.5',
    marginLeft: '32px',
    fontSize: '12px',
  },
}).attach();

export const AuthErrorBox = ({ message = '' }) => (
  <>
    {
      message
        ? (
          <div className={classes.wrapper}>
            <div className={classes.row}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#CF2C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 15H16" stroke="#CF2C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9H9.01" stroke="#CF2C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 9H15.01" stroke="#CF2C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <Text>Вход не вышел</Text>
            </div>
            <Text className={classes.errorBox}>{message}</Text>
          </div>
        )
        : ''
    }
  </>
);
