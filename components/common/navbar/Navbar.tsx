import Link from 'next/link';
import { FC } from 'react';
import { clsx } from 'clsx';
import styles from './navbar.module.scss';
import { Arrow } from '../../icons';

export const Navbar: FC = () => {
  return (
    <header className={clsx(styles.root)}>
      <nav className={clsx(styles.nav)}>
        <Link href="/">
          <a>
            <Arrow />
          </a>
        </Link>
      </nav>
    </header>
  );
};
