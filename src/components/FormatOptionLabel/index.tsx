import React from 'react';
import { components } from 'react-select';
import Image from 'components/Image';
import styles from './index.module.scss';


const FormatOptionLabel: React.FC = (props: any) => {
  const { ticker, name } = props.data;
  return (
    <components.Option {...props}>
      <div className={styles.label}>
        <div className={styles.label__data}>
          <Image
            className={styles.label__img}
            src={`https://s3.polygon.io/logos/${ticker.toLowerCase()}/logo.png`}
          />
          <div className={styles.label__info}>
            <div className={styles.label__name}>
              {ticker}
            </div>
            <div className={styles.label__description}>
              {name}
            </div>
          </div>
        </div>
        <div className={styles.label__price}>
          $752.20
        </div>
      </div>
    </components.Option>
  );
}

export default FormatOptionLabel;