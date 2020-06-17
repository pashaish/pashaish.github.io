// @ts-check
import React from 'react';
import jss from 'jss';
import { Text } from './Text';

const { classes } = jss
  .createStyleSheet({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '460px',
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
      marginTop: '2px',
      height: '6px',
      fontSize: '12px',
    },
  })
  .attach();

export const Field = ({
  label = '',
  sublabel = '',
  error = null,
  children,
}) => (
  <div className={`${classes.wrapper} ${error ? classes.error : ''}`}>
    <div>
      <Text type="span">{label}</Text>
      <Text className={classes.sublabel} type="span">
        {sublabel}
      </Text>
    </div>
    {children}
    <Text className={classes.errorText}>{error || ''}</Text>
  </div>
);
