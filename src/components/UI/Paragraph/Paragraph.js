import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({children, size, color}) => {

    const newSize = {
        small: 14,
        middle: 16,
        large: 18
    }

    const newColor = {
        gray: '#8FA2A6',
        white: 'white'
    }

    return (
        <p style={{color: newColor[color], fontSize: newSize[size]}}>
            {children}
        </p>
    );
};

export default Paragraph;