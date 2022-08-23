import React, { FC, useState } from 'react';
import { clsx } from 'clsx';
import styles from './footer.module.scss';
import { Logo } from '../logo/Logo';
export const Footer: FC = () => {
  const [socialText, setSocialText] = useState("we're also on instagram :)");

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
      <a
        onMouseEnter={() => setSocialText('@ouph.studio')}
        onTouchStart={() => setSocialText('@ouph.studio')}
        onMouseLeave={() => setSocialText("we're also on instagram :)")}
        onTouchEnd={() => setSocialText("we're also on instagram :)")}
        className={clsx(
          styles.socials,
          socialText === '@ouph.studio' && styles['socials--hover']
        )}
        href="https://www.instagram.com/ouph.studio/"
        target="_blank"
        rel="noreferrer"
      >
        {socialText}
      </a>
    </footer>
  );
};
