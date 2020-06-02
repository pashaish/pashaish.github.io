
import React from 'react';
import jss from 'jss';
import SplitPane from 'react-split';

const { classes } = jss.createStyleSheet({
  wrap: {
    padding: '15px',
    height: '100%',
  },
  editor: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    borderRadius: '5px',
    padding: '5px',
  },
  split_pane: {
    display: 'flex',
    height: '100%',
  },
  resizer: {
    width: '10px',
  },
  txtarea: {
    border: 'none',
    resize: 'none',
    outline: 'none',
    width: '100%',
    height: '100%',
  },
}).attach();

export const QueryEditor = ({ onGlutterSizeChange, glutterSize }) => (
  <div className={classes.wrap}>
    <SplitPane
      onDragEnd={(e) => onGlutterSizeChange(parseInt(e[0], 10))}
      className={classes.split_pane}
      sizes={[glutterSize, 100 - glutterSize]}
      minSize={50}
      expandToMin={false}
      gutterSize={20}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <div className={classes.editor}>
        <textarea className={classes.txtarea} />
      </div>
      <div className={classes.editor}>
        <textarea className={classes.txtarea} />
      </div>
    </SplitPane>
  </div>
);
