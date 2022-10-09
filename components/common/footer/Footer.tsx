import React, { FC, useState } from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import styles from './footer.module.scss';
import { Logo } from '../logo/Logo';

type FooterProps = {
  isHomePage: boolean;
};

export const Footer: FC<FooterProps> = ({ isHomePage }) => {
  const [socialText, setSocialText] = useState("we're also on instagram :)");

  return (
    <footer
      className={clsx(styles.root, 'container py-container--sm', {
        [styles['root--homepage']]: isHomePage,
      })}
    >
      {isHomePage && (
        <div className={styles.clients}>
          <span>Other clients include:</span>
          <span className={styles.client}>De Vaartkapoen</span>
          <span className={styles.client}>Lord Byron</span>
          <span className={styles.client}>JhMj DAR</span>
          <span className={styles.client}>Otto Kintet</span>
        </div>
      )}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
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
