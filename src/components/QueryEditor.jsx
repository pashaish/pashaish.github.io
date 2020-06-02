import React from 'react';
import jss from 'jss';
import SplitPane from 'react-split';
import { Text } from './Text';

const { classes } = jss
  .createStyleSheet({
    wrap: {
      padding: '30px 15px',
      height: '100%',
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    },
    editor: {
      background: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      boxSizing: 'border-box',
      borderRadius: '5px',
      padding: '5px',
    },
    editorError: {
      borderColor: '#CF2C00',
      'box-shadow': '0px 0px 5px rgba(207, 44, 0, 0.5)',
    },
    errorMessage: {
      position: 'relative',
      top: '-25px',
    },
    split_pane: {
      display: 'flex',
    },
    resizer: {
      width: '10px',
    },
    txtarea: {
      border: 'none',
      resize: 'none',
      outline: 'none',
      fontFamily: 'monospace',
      fontSize: '14px',
      width: '100%',
    },
    errorTxt: {
      color: '#CF2C00',
    },
    fullHeight: {
      height: '100%',
    },
  })
  .attach();

export const QueryEditor = ({
  onGlutterSizeChange,
  glutterSize,
  requestValue,
  responceValue,
  onReqChange,
  resValid,
  errorMessage,
}) => (
  <div className={classes.wrap}>
    <SplitPane
      onDragEnd={(e) => onGlutterSizeChange(parseInt(e[0], 10))}
      className={`${classes.split_pane} ${classes.fullHeight}`}
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
      <div className={classes.fullHeight}>
        <Text className={errorMessage ? classes.errorTxt : ''}>Запрос</Text>
        <div
          className={`${classes.editor} ${classes.fullHeight} ${
            errorMessage ? classes.editorError : ''
          }`}
        >
          <textarea
            value={requestValue}
            onChange={(e) => onReqChange(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 9 || e.which === 9) {
                e.preventDefault();
                const s = e.currentTarget.selectionStart;
                e.currentTarget.value = `${e.currentTarget.value.substring(
                  0,
                  e.currentTarget.selectionStart,
                )}  ${e.currentTarget.value.substring(
                  e.currentTarget.selectionEnd,
                )}`;
                e.currentTarget.selectionEnd = s + 2;
              }
            }}
            className={`${classes.txtarea} ${classes.fullHeight}`}
          />
          {errorMessage ? (
            <Text className={`${classes.errorTxt} ${classes.errorMessage}`}>
              {errorMessage}
            </Text>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={classes.fullHeight}>
        <Text className={!resValid ? classes.errorTxt : ''}>Ответ</Text>
        <div
          className={`${classes.editor} ${classes.fullHeight} ${
            !resValid ? classes.editorError : ''
          }`}
        >
          <textarea
            value={responceValue}
            readOnly
            className={`${classes.txtarea} ${classes.fullHeight}`}
          />
        </div>
      </div>
    </SplitPane>
  </div>
);
