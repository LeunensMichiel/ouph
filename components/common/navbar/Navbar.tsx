import Link from 'next/link';
import { FC } from 'react';
import { clsx } from 'clsx';
import styles from './navbar.module.scss';
import { Logo } from '../logo/Logo';

type NavbarProps = {
  isHomePage: boolean;
};

export const Navbar: FC<NavbarProps> = ({ isHomePage }) => {
  return (
    <header className={clsx(styles.root, isHomePage && styles.homepage)}>
      <nav className={clsx(styles.nav, 'container py-container--sm')}>
        {isHomePage ? (
          <Link href="/contact">
            <a className={styles['link-contact']}>contact</a>
          </Link>
        ) : (
          <Link href="/">
            <a>
              <Logo className={styles.logo} />
            </a>
          </Link>
        )}
      </nav>
    </header>
  );
};
