// @ts-check
import React from 'react';
import jss from 'jss';
import { Text } from './Text';

const { classes } = jss.createStyleSheet({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '460px',
  },
  input: {
    marginTop: '3px',
    fontSize: '18px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
    width: '460px',
    padding: '3px',
    height: '40px',
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    borderRadius: '5px',
  },
  sublabel: {
    float: 'right',
    color: '#999999',
    fontSize: '12px',
  },
  error: {
    '& input': {
      borderColor: '#CF2C00',
    },
    '& span': {
      color: '#CF2C00',
    },
  },
  errorText: {
    height: '6px',
    fontSize: '12px',
  },
}).attach();

/**
 * @param {{
 *  value?: string,
 *  label?: string,
 *  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
 *  type?: string,
 *  sublabel?: string,
 *  error?: string | null
 * }} param0
 */
export const Input = ({
  value = '', label = '', onChange, type = 'input', sublabel = '', error = null,
}) => (
  <div className={`${classes.wrapper} ${error ? classes.error : ''}`}>
    <div>
      <Text type="span">{label}</Text>
      <Text className={classes.sublabel} type="span">{sublabel}</Text>
    </div>
    <input type={type} className={classes.input} value={value} onChange={onChange} />
    <Text className={classes.errorText}>{error || ''}</Text>
  </div>
);
