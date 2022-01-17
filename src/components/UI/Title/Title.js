import React from 'react';
import styles from './Title.module.scss';

const Title = ({children, size, color}) => {

    const fontSize = styles[size];
    const textColor = styles[color];

    return (
        <p className={`
            ${styles.Title} 
            ${fontSize}
            ${textColor}
         `}>
            {children}
        </p>
    );
};

export default Title;