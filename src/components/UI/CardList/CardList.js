import React from 'react';

import {ReactComponent as TronIcon} from "../../../media/card-list/tron.svg";
import {ReactComponent as LotteryIcon} from "../../../media/card-list/lottery.svg";
import {ReactComponent as StakeIcon} from "../../../media/card-list/stake.svg";
import {ReactComponent as GainIcon} from "../../../media/card-list/gain.svg";

import Card from "../Card/Card";
import styles from './CardList.module.scss';

const CardList = () => {


    const Cards = [
        {
            icon: TronIcon,
            name: 'Tron',
            text: 'Экслюзивные игры\n на блокчейне Tron'
        },

        {
            icon: LotteryIcon,
            name: 'lottery',
            text: 'Лотереи с крупным\n призовым фондом'
        },

        {
            icon: StakeIcon,
            name: 'STAKKE',
            text: 'Стейкинг и доход от\n стейкинга партнёров'
        },

        {
            icon: GainIcon,
            name: 'GAIN',
            text: 'Игровая платформа с\n 5 источниками дохода'
        },
    ]

    return (
        <div className={styles.CardList}>
            {
                Cards.map(CardObject => (
                    <Card
                        icon={<CardObject.icon/>}
                        title={CardObject.name}
                        text={CardObject.text}
                        smallText={true}
                    />
                ))
            }
        </div>
    );
};

export default CardList;