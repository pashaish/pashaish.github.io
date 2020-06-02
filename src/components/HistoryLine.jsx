import React from 'react';
import jss from 'jss';
import { TransparentButton } from './TransparentButton';
import { ClearIcon } from '../icons/ClearIcon';

const { classes } = jss
  .createStyleSheet({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      padding: '2px',
      alignItems: 'center',
      borderBottom: '1px solid lightgray',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
    },
    historyLine: {
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'row',
      borderRight: '1px solid lightgray',
      width: '100%',
    },
    clearHistory: {
      position: 'relative',
      margin: 'auto',
      '&:before': {
        content: '""',
        width: '20px',
        pointerEvents: 'none',
        height: '49px',
        display: 'block',
        position: 'absolute',
        left: '-21px',
        background:
          'linear-gradient(269.98deg, #F6F6F6 0.06%, rgba(246, 246, 246, 0) 99.93%)',
        top: '-14px',
      },
    },
    req: {
      padding: '15px',
    },
  })
  .attach();

export const HistoryLine = ({ history }) => (
  <div className={classes.wrapper}>
    <div
      onWheel={(e) => e.currentTarget.scrollBy(e.deltaY, 0)}
      className={classes.historyLine}
    >
      {history.map((req) => (
        <div key={req.id} className={classes.req}>
          {JSON.parse(req.body).action}
        </div>
      ))}
    </div>
    <div className={classes.clearHistory}>
      <TransparentButton onClick={() => {}}>
        <ClearIcon />
      </TransparentButton>
    </div>
  </div>
);
