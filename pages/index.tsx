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
      <section className={styles.landing}>
        <video
          playsInline
          autoPlay
          muted
          poster="/assets/card.jpg"
          loop
          preload="auto"
          className={styles.landing__video}
        >
          <source src="/assets/landing_video.mp4" type="video/mp4" />
        </video>
        <div className={styles.landing__inner}>
          <span className={styles.landing__text}>un website de</span>
          <Logo />
        </div>
      </section>
    </>
  );
};

export default Home;
