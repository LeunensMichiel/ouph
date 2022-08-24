import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/future/image';
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
        <div className={styles.card__overlay}>
          <h2 className={styles['card__overlay-title']}>{title}</h2>
          <span className={styles['card__overlay-subtitle']}>{subtitle}</span>
        </div>
        <Image
          className={styles.card__image}
          src={image}
          alt={`${title} ${subtitle}`}
          title={title}
          priority
          width={400}
          height={400}
          quality={100}
        />
      </a>
    </Link>
  );
};
