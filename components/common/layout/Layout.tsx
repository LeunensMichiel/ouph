import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import styles from './layout.module.scss';
import { Footer, Navbar } from '..';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
      <Navbar isHomePage={isHomePage} />
      <main className={styles.root}>{children}</main>
      <Footer />
    </>
  );
};
