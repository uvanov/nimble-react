import React from 'react';
import styles from './Welcome.module.scss';

import Title from "../UI/Title/Title";
import Paragraph from "../UI/Paragraph/Paragraph";
import Button from "../UI/Button/Button";
import Header from "../Header/Header";

import WelcomeGlow from '../../media/welcome/welcome-glow.png'
import WelcomeImage from '../../media/welcome/welcome-image.png';
import ScrollHintImage from '../../media/welcome/mouse.svg';


const Welcome = () => {
    return (
        <>
            <div className={styles.Welcome}>
                <Header/>
                <img className={styles.WelcomeGlow} src={WelcomeGlow}/>
                <div className={styles.WelcomeContent}>
                    <div>
                        <Title size='large'>
                            Присоединяйся <br/>
                            к революции в мире <br/>
                            гемблинга
                        </Title>

                        <Paragraph size="large" color="gray">
                            100% честность игры и распределения средств
                        </Paragraph>

                        <div style={{marginTop: 36}}>
                            <Button filled large>
                                Открыть аккаунт
                            </Button>
                        </div>

                    </div>

                    <div>
                        {/* Костыль для правильного отображения флекса :D */}
                    </div>
                </div>
                <img className={styles.ScrollHint} src={ScrollHintImage} alt="Mouse Icon"/>


                <ul className={styles.SideContacts}>
                    <li>
                        <a href="/" className={styles.SideContactsLink}>
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.SideContactsLink}>
                            Telegram
                        </a>
                    </li>
                    <li>
                        <a href="/" className={styles.SideContactsLink}>
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>



            <img src={WelcomeImage} alt="" className={styles.WelcomeImage}/>


        </>

    );
};

export default Welcome;