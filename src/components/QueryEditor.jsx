
import React from 'react';
import AceEditor from 'react-ace';
import jss from 'jss';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';

const { classes } = jss.createStyleSheet({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  editor: {
    width: '50%',
  },
}).attach();

export const QueryEditor = () => (
  <div className={classes.wrap}>
    <div className={classes.editor}>
      <AceEditor
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
        mode="json"
        width="auto"
        theme="github"
        onChange={() => {}}
        editorProps={{

        }}
        name="request"
      />
    </div>
  </div>
);
