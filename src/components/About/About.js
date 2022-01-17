import React from 'react';

import styles from './About.module.scss';

import CardList from "../UI/CardList/CardList";
import Title from "../UI/Title/Title";
import Paragraph from "../UI/Paragraph/Paragraph";
import List from "../UI/List/List";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import DescriptionImage from '../../media/about/description/description-image.png';
import UsingImage from '../../media/about/using/using-image.png';

import GraphImage1 from '../../media/about/stake/grow1.png';
import GraphImage2 from '../../media/about/stake/grow2.png';
import GraphImage3 from '../../media/about/stake/grow3.png';
import GraphImage4 from '../../media/about/stake/grow4.png';
import GraphImage5 from '../../media/about/stake/grow5.png';

const About = () => {

    const UsingItems = [
        "Эксклюзивные игры на платформе KiboTron",
        "Скидки на билеты в лотереи KiboTron с крупным джекпотом",
        "Обмен на дивидендные токены KBT",
        "Стейкинг и доход от стейкинга партнеров",
        "Заработок на баунти-программе",
        "Торговля на криптовалютных биржах",
    ]
    const StakingGraph = [
        {
            image: GraphImage1,
            text: '1 - 5 000'
        },
        {
            image: GraphImage2,
            text: '5 001 - 30 000'
        },
        {
            image: GraphImage3,
            text: '30 001 - 100 000'
        },
        {
            image: GraphImage4,
            text: '100 001 - 300 000'
        },
        {
            image: GraphImage5,
            text: '300 001 - 1 000 000'
        }
    ]

    return (
        <div className={styles.About}>
            <CardList/>

            <div className={styles.Description}>
                <img src={DescriptionImage} alt="Nimble Token" className={styles.DescriptionImageStyle}/>

                <div className={styles.DescriptionInformation}>
                    <Title size='small' color='white'>
                        Nimble Token
                    </Title>




                    <Paragraph size='middle' color='gray'>
                        Nimble Token – это utility-токен игровой платформы KiboTron,
                        построенной на смарт-контрактах Tron. Применение технологии
                        блокчейн обеспечивает 100% честность игры и распределения средств,
                        мгновенные выплаты бонусов и призовых, и абсолютную анонимность.
                        <br/><br/>
                        Nimble, в переводе с английского – шустрый токен. Это энергия
                        платформы, двигатель, создающий постоянную динамику, приток
                        средств, активность игроков, и поддержание интереса к платформе.
                        <br/><br/>
                        Многообразие вариантов применения Nimble Token, его токеномика,
                        механизмы распределения и майнинга обеспечивают устойчивый рост
                        стоимости токена в перспективе.
                    </Paragraph>
                </div>
            </div>

            <div className={styles.UsingBorder}>
                <div className={styles.Using}>
                    // TODO: Пофиксить мобилку у применения. Вернуть картинку, просто засунуть вниз
                    <div className={styles.UsingInformation}>
                        <Title size='small' color='orange'>
                            Применение токена
                        </Title>

                        <List items={UsingItems}/>
                    </div>
                </div>

                <img src={UsingImage} alt="Nimble" className={styles.UsingImage}/>
            </div>

            <div className={styles.Staking}>
                <Title size='middle' color='green'>
                    Стейкинг Nimble Token
                </Title>

                <div className={styles.StakingHint}>
                    <div className={styles.OrangeHint}>Без ускорителя</div>
                    <div className={styles.GreenHint}>С ускорителем</div>
                </div>

                <div className={styles.StakingGraph}>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        {
                            StakingGraph.map((GraphItem, index) => (
                                <SwiperSlide key={index} >
                                    <div className={styles.StakingGraphItem}>
                                        <img src={GraphItem.image} alt=""/>
                                        <span>{GraphItem.text}</span>
                                    </div>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>



                </div>


                <Paragraph size='middle' color='gray'>
                    Держатель Nimble Token имеет возможность
                    получать вознаграждение за хранение токенов
                    на балансе. Процент стейкинга зависит от текущего
                    количества Nimble Token на балансе.
                    <br/><br/>
                    Стейкинг Nimble Token включается с момента
                    размещения токенов на балансе.
                    <br/><br/>
                    Ускоритель – коэффициент 1.5 к базовому проценту
                    стейкинга. Применяется для держателей токенов KBT
                    с количеством от 3000 KBT.
                </Paragraph>
            </div>

        </div>
    );
};

export default About;
