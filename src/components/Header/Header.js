import React from 'react';
import Navbar from "../Navbar/Navbar";
import styles from './Header.module.scss';
import Logo from "../Logo/Logo";

import SignInIcon from '../../media/header/sign-in.svg';
import MenuIcon from '../../media/header/menu-icon.svg';

const Header = () => {
    return (
        <div className={styles.Header}>
            <Logo/>
            <Navbar/>

            <div className={styles.MobileNavbar}>
                <div className="sign-in-button">
                    <img src={SignInIcon} alt="Sign In Icon"/>
                </div>
                <div className="menu-button">
                    <img src={MenuIcon} alt="Menu Icon"/>
                </div>
            </div>
        </div>
    );
};

export default Header;