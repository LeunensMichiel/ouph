import { FC, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './layout.module.scss';
import { Navbar } from '..';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    window.addEventListener('resize', () => {
      document.documentElement.style.setProperty(
        '--viewport-height',
        `${window.visualViewport?.height}px`
      );
    });
  }, []);

  return (
    <>
      {!isHomePage && <Navbar />}
      <main className={styles.root}>{children}</main>
    </>
  );
};
