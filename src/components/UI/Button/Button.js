import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
    let filled = props.filled;
    let large = props.large;
    return (
        <button className={`
            ${styles.btn} 
            ${filled ?styles.filled : null}
            ${large ? styles.large : null}
        `}>
            {props.children}
        </button>
    );
};

export default Button;