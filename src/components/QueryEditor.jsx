
import React from 'react';
import AceEditor from 'react-ace';
import jss from 'jss';
import SplitPane from 'react-split';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';

const { classes } = jss.createStyleSheet({
  wrap: {
    padding: '15px',
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
  },
  resizer: {
    width: '10px',
  },
}).attach();

export const QueryEditor = () => (
  <div className={classes.wrap}>
    <SplitPane
      className={classes.split_pane}
      sizes={[50, 50]}
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
        <AceEditor
          fontSize="14px"
          showPrintMargin={false}
          showGutter={false}
          mode="json"
          width="auto"
          theme="github"
          onChange={() => {}}
          editorProps={{

          }}
          name="response"
        />
      </div>
      <div className={classes.editor}>
        <AceEditor
          readOnly
          showPrintMargin={false}
          fontSize="14px"
          showGutter={false}
          mode="json"
          width="auto"
          theme="github"
          onChange={() => {}}
          editorProps={{

          }}
          name="request"
        />
      </div>
    </SplitPane>
  </div>
);
