import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import { round } from 'lodash';
import styles from './index.module.scss';
import { StockInfo } from "types/common";
import { getDailyStats } from "helpers/api";
import { formatStockDate } from "utils";
import {ReactComponent as ArrowUpSvg} from "assets/icons/arrow_up.svg";
import Image from 'components/Image';

interface StockCompanyProps {
  stock: StockInfo,
}

const StockCompany: React.FC<StockCompanyProps> = ({ stock }) => {
  const [stockValue, setStockValue] = useState(Object)
  const [diffPrice, setDiffPrice] = useState(0);

  const fetchData = () => {
    if (!stock.ticker) {
      return;
    }
    const date = new Date();
    date.setDate(date.getDate() - 2);
    getDailyStats(stock.ticker, formatStockDate(date))
      .then(data => {
        const diff = data.close - data.open;
        setDiffPrice(diff);
        setStockValue(data);
      })
  }

  useEffect(fetchData, [stock]);

  if (!stock.ticker) {
    return <div data-testid="clear-stock"></div>;
  }

  return (
    <div className={styles.stock}>
      <div className={styles.stock__logo}>
        <Image
          className={styles.label__img}
          src={`https://s3.polygon.io/logos/${stock.ticker.toLowerCase()}/logo.png`}
        />
      </div>
      <div className={styles.stock__name}>
        {stock.ticker}
      </div>
      <div className={styles.stock__description}>
        {stock.name}
      </div>
      <div className={styles.stock__value}>
        {stockValue.close} USD
      </div>
      <div className={classNames(
        styles.stock__changes,
        {
          [styles['stock__changes--down']]: diffPrice < 0
        })
      }>
        <span className={styles.changes__diff}>
          {round(diffPrice, 4)}
        </span>
        <span className={styles.changes__percents}>
          ({round(diffPrice/stockValue.open, 2)}%)
        </span>
        <ArrowUpSvg></ArrowUpSvg>
      </div>
    </div>
  );
}

export default StockCompany;