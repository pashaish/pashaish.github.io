import React from 'react';
import jss from 'jss';

const { classes } = jss.createStyleSheet({
    btn: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        border: 'none',
        stroke: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10px',
        marginRight: '10px',
        '&:focus': {
            color: '#0055FB',
            outline: '2px solid #45A5FF',
            stroke: "#0055FB"

        },
        '&:hover': {
            color: '#0055FB',
            stroke: "#0055FB"
        },
        '&:hover *': {
            color: '#0055FB',
        },
        '&:active': {

        },
        '&:disabled': {

        }
    },
}).attach();

export const TransparentButton = ({ onClick, children }) => {
    return <button onClick={onClick} type="button" className={classes.btn}>
        {children}
    </button>
}