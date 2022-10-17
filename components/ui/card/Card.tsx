import Link from 'next/link';
import { FC } from 'react';
import styles from './card.module.scss';

type CardProps = {
  to: string;
  title: string;
  subtitle: string;
  image: string;
};

export const Card: FC<CardProps> = ({ image, subtitle, title, to }) => {
  return (
    <Link href={`/work/${to}`}>
      <a className={styles.card}>
        <img
          className={styles.card__image}
          src={image}
          alt={`${title} ${subtitle}`}
          title={title}
        />
        <div className={styles.card__overlay}>
          <h2 className={styles['card__overlay-title']}>{title}</h2>
          <span className={styles['card__overlay-subtitle']}>{subtitle}</span>
        </div>
      </a>
    </Link>
  );
};
