import React from 'react';
import jss from 'jss';
import { Text } from './Text';
import { DragIcon } from '../icons/DragIcon';

const { classes } = jss
  .createStyleSheet({
    record: {
      position: 'relative',
      cursor: 'pointer',
      padding: '5px 10px',
      background: '#FFFFFF',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      margin: '10px 5px',
      '&:hover': {
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    copyLabel: {
      textAlign: 'center',
      transition: 'all 0.5s',
      background: '#F6F6F6',
      borderRadius: '5px',
      position: 'absolute',
      height: 'fit-content',
      width: 'fit-content',
      padding: '4px',
      margin: 'auto',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    isNotCopied: {
      transform: 'translateY(-50px)',
    },
    isCopied: {
      transform: 'translateY(0px)',
    },
    status: {
      borderRadius: '100%',
      width: '10px',
      height: '10px',
    },
    valid: {
      backgroundColor: '#30B800',
    },
    notValid: {
      backgroundColor: '#CF2C00',
    },
    dropdown: {
      zIndex: 1,
      width: '100%',
      position: 'absolute',
      background: '#FFFFFF',
      minWidth: 'fit-content',
      boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '3px',
      top: '100%',
    },
    dropdown_btn: {
      padding: '15px',
      '&:hover': {
        backgroundColor: '#0055FB',
        color: 'white',
      },
    },
    requestLabel: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      overflow: 'hidden',
      position: 'relative',
    },
    dropdown_btn_remove: {
      padding: '15px',
      borderRadius: '3px',
      '&:hover': {
        backgroundColor: '#CF2C00',
        color: 'white',
      },
    },
    hidden: {
      display: 'none',
    },
  })
  .attach();

export class HistoryRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isCopied: false,
    };
    this.closeMenu = this.closeMenu.bind(this);
    document.addEventListener('click', this.closeMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMenu);
  }

  closeMenu() {
    this.setState({ isOpen: false });
  }

  copyNotify() {
    this.setState({ isCopied: true });
    setTimeout(() => {
      this.setState({ isCopied: false });
    }, 1000);
  }

  copy() {
    const { record } = this.props;
    navigator.clipboard
      .writeText(JSON.stringify(JSON.parse(record.body), null, '  '))
      .then(() => {
        this.copyNotify();
      });
  }

  render() {
    const { record, onDelete, onRun } = this.props;
    const { isOpen, isCopied } = this.state;

    return (
      <div
        key={record.id}
        className={classes.record}
        onClick={() => {
          window.requestAnimationFrame(() => {
            this.setState({ isOpen: !isOpen });
          });
        }}
      >
        <div className={classes.requestLabel}>
          <div
            className={`${classes.copyLabel} ${
              isCopied ? classes.isCopied : classes.isNotCopied
            }`}
          >
            <Text fontSize="12px">Скопировано</Text>
          </div>
          <div
            className={`${classes.status} ${
              record.isValid ? classes.valid : classes.notValid
            }`}
          />
          <Text large>{JSON.parse(record.body).action}</Text>
          <DragIcon />
        </div>
        <div className={`${classes.dropdown} ${isOpen ? '' : classes.hidden}`}>
          <div
            className={classes.dropdown_btn}
            onClick={() => {
              onRun(record.body);
            }}
          >
            <Text>Выполнить</Text>
          </div>
          <div
            className={classes.dropdown_btn}
            onClick={() => {
              this.copy();
            }}
          >
            <Text>Скопировать</Text>
          </div>
          <div
            className={classes.dropdown_btn_remove}
            onClick={() => {
              onDelete(record.id);
            }}
          >
            <Text>Удалить</Text>
          </div>
        </div>
      </div>
    );
  }
}
