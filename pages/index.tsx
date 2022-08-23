import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styles from './styles/index.module.scss';
import { Logo } from '../components/common';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="studio"
        description=""
        openGraph={{
          title: 'studio',
          description: '',
        }}
      />
      <div className={styles.landing}>
        <div className={styles.landing__inner}>
          <span className={styles.landing__text}>un website de</span>
          <Logo />
        </div>
      </div>
    </>
  );
};

export default Home;
