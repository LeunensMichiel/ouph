import { FC, ReactNode } from 'react';
import styles from './layout.module.scss';
import { Footer } from '..';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <main className={styles.root}>{children}</main>
      <Footer />
    </>
  );
};
