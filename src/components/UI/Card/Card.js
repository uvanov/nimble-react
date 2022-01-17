import React from 'react';

import styles from './Card.module.scss';
import Paragraph from "../Paragraph/Paragraph";

const Card = ({icon, title, text, smallText}) => {
    return (
        <div className={styles.Card}> {/* Сам Card служит в качестве градиентной обводки */}
            <div className={styles.CardInner}> {/* Inner же в свою очередь фактически является Card'ом */}
                <div className={styles.CardHeader}>
                    <div className={styles.CardImageWrapper}>
                        {icon} {/* Компонент icon у нас является SVG */}
                    </div>

                    <span className={styles.CardTitle}>{title}</span>
                </div>

                <p className={`${styles.CardText} ${smallText ? styles.small : null}`}>
                    {text}
                </p>

            </div>
        </div>
    );
};

export default Card;