import React from 'react';
import jss from 'jss';
import { TransparentButton } from './TransparentButton';
import { ClearIcon } from '../icons/ClearIcon';
import { HistoryRecord } from './HistoryRecord';

const { classes } = jss
  .createStyleSheet({
    scroll: {
      display: 'flex',
      flexDirection: 'row',
    },
    wrapper: {
      minHeight: '55px',
      display: 'flex',
      flexDirection: 'row',
      padding: '2px',
      position: 'relative',
      alignItems: 'center',
      borderBottom: '1px solid lightgray',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
    },
    historyLine: {
      display: 'flex',
      overflow: 'visible',
      flexDirection: 'row',
      borderRight: '1px solid lightgray',
      width: '100%',
    },
    clearHistory: {
      position: 'absolute',
      right: '0',
      top: '0',
      backgroundColor: 'inherit',
      borderLeft: '1px solid gray',
      margin: 'auto',
      height: '100%',
      '&:before': {
        content: '""',
        width: '20px',
        pointerEvents: 'none',
        top: '0',
        bottom: '0',
        display: 'block',
        position: 'absolute',
        left: '-18px',
        background:
          'linear-gradient(269.98deg, #F6F6F6 0.06%, rgba(246, 246, 246, 0) 99.93%)',
      },
    },
    req: {
      padding: '15px',
    },
  })
  .attach();

export const HistoryLine = ({
  history, onHistoryClear, onDeleteRecord, onRunRecord,
}) => {
  const [scroll, setScroll] = React.useState(0);
  let scrollElement = null;

  const changeScroll = (deltaY) => {
    if (window.innerWidth > scrollElement.offsetWidth) {
      setScroll(0);
    } else if (scrollElement) {
      const newScroll = scroll + (Math.abs(deltaY) / deltaY) * 30;
      const clearBtnWidth = 53;
      const min = -(scrollElement.offsetWidth - window.innerWidth + clearBtnWidth);
      if (min > newScroll) {
        setScroll(min);
      } else if (newScroll > 0) {
        setScroll(0);
      } else {
        setScroll(newScroll);
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <div
        onWheel={(e) => changeScroll(e.deltaY)}
        className={classes.historyLine}
      >
        <div
          ref={(el) => { scrollElement = el; }}
          className={classes.scroll}
          style={{ marginLeft: `${scroll}px` }}
        >
          {history.map((record) => (
            <HistoryRecord
              onDelete={onDeleteRecord}
              onRun={onRunRecord}
              key={record.id}
              record={record}
            />
          ))}
        </div>
      </div>
      <div className={classes.clearHistory}>
        <TransparentButton onClick={() => onHistoryClear()}>
          <ClearIcon />
        </TransparentButton>
      </div>
    </div>
  );
};
