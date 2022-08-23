import type { NextPage } from 'next';
import styles from './styles/index.module.scss';
import { Logo } from '../components/common';

const Home: NextPage = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.landing__inner}>
        <span className={styles.landing__text}>un website de</span>
        <Logo />
      </div>
    </div>
  );
};

export default Home;
