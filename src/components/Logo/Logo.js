import React from 'react';
import styles from "./Logo.module.scss";
import LogoImage from "../../media/header/logo.svg";

const Logo = () => {
    return (
        <a className={styles.Logo} href="/">
                <div className={styles.LogoImage}>
                   <img src={LogoImage} alt="Logotype"/>
                </div>

                <span className={styles.LogoText}>
                    nimble <br/>
                    token
                </span>
        </a>
    );
};

export default Logo;