import React from 'react';
import styles from './Navbar.module.scss';
import Button from "../UI/Button/Button";

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <ul className={styles.NavbarList}>
                <li className={styles.NavbarItem}>О токене</li>
                <li className={styles.NavbarItem}>Партнёрка</li>
                <li className={styles.NavbarItem}>Токенсейл</li>
                <li className={styles.NavbarItem}>Bounty</li>
                <li className={styles.NavbarItem}>Kibotron</li>
            </ul>

            <div className={styles.NavbarButtonSection}>
                <Button filled>Регистрация</Button>
                <Button>Авторизация</Button>
            </div>
        </div>
    );
};

export default Navbar;