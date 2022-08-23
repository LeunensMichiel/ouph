import React, { FC } from 'react';
import { clsx } from 'clsx';
import styles from './footer.module.scss';
import { Logo } from '../logo/Logo';
export const Footer: FC = () => {
  return (
    <footer className={clsx(styles.root, 'container py-container--sm')}>
      <div className={styles.clients}>
        <span>Other clients include:</span>
        <span className={styles.client}>De Vaartkapoen</span>
        <span className={styles.client}>Lord Byron</span>
        <span className={styles.client}>JhMj DAR</span>
        <span className={styles.client}>Otto Kintet</span>
      </div>
      <Logo />
      <div className={styles.socials}>we&apos;re also on instagram :)</div>
    </footer>
  );
};
