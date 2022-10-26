import Link from 'next/link';
import { FC, useState } from 'react';
import { clsx } from 'clsx';
import styles from './navbar.module.scss';

type NavbarProps = {
  isHomePage: boolean;
};

export const Navbar: FC<NavbarProps> = ({ isHomePage }) => {
  const [socialText, setSocialText] = useState("we're also on instagram :)");

  return (
    <header className={clsx(styles.root)}>
      <nav className={clsx(styles.nav, 'container')}>
        {isHomePage ? (
          <>
            <div className={styles.clients}>
              <span>Other clients include:</span>
              <span className={styles.client}>De Vaartkapoen</span>
              <span className={styles.client}>Lord Byron</span>
              <span className={styles.client}>JhMj DAR</span>
              <span className={styles.client}>Otto Kintet</span>
            </div>
            <div className={styles.links}>
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
              <Link href="/contact">Contact us</Link>
            </div>
          </>
        ) : (
          <Link href="/">
            <a>
              <svg
                id="Laag_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 814.94"
              >
                <defs>
                  <style>{`.cls-1{fill:#fff;}`}</style>
                </defs>
                <g id="Laag_1-2">
                  <path
                    className="cls-1"
                    d="M906.96,301.74l-538.2,17.88c-8.13,0-11.22-10.61-4.37-14.98,0,0,140.65-76.09,182.58-108.71,50.03-38.92,44.82-117.49,0-162.31-44.82-44.82-117.49-44.82-162.31,0,0,0-120.46,116.84-163.29,152.76-44.68,37.47-142.21,102.14-186.61,139.94-45.24,38.53-44.64,108.52-7.87,153.6,2.45,3.01,4.86,6.15,7.88,8.72,44.4,37.8,141.92,102.47,186.6,139.94,42.84,35.92,163.29,152.76,163.29,152.76,22.41,22.41,51.79,33.61,81.16,33.61s58.75-11.2,81.16-33.61c44.82-44.82,50.03-123.4,0-162.32-41.92-32.62-182.57-108.7-182.57-108.7-6.86-4.37-3.76-14.98,4.37-14.98l540.46,17.88c62.64,0,113.56-41.14,114.75-103.5,1.23-64.34-52.66-107.97-117.02-107.97Z"
                  />
                </g>
              </svg>
            </a>
          </Link>
        )}
      </nav>
    </header>
  );
};
