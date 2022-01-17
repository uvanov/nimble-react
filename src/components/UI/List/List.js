import React from 'react';
import styles from './List.module.scss';

const List = ({items}) => {


    return (
        <ul className={styles.List}>
            {
                items.map((item, index) => (
                    <li key={index} className={styles.ListItem}>{item}</li>
                ))
            }
        </ul>
    );
};

export default List;