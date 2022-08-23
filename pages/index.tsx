import { NextSeo } from 'next-seo';
import Masonry from 'react-masonry-css';
import styles from './styles/index.module.scss';
import { Layout, Logo } from '../components/common';

const Home = () => {
  return (
    <>
      <NextSeo
        title="ouph!"
        titleTemplate="%s"
        description="Un studio de ouph! Ouph is a creative design studio based in Brussels, Belgium, specializing in branding and merchandise design."
        openGraph={{
          title: 'Ouph!',
          description:
            'Un studio de ouph! Ouph is a creative design studio based in Brussels, Belgium, specializing in branding and merchandise design.',
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
      <section className="container py-container">
        <Masonry
          breakpointCols={3}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          <div style={{ width: '100%', height: 500, background: 'red' }} />
          <div style={{ width: '100%', height: 500, background: 'green' }} />
          <div style={{ width: '100%', height: 100, background: 'blue' }} />
          <div style={{ width: '100%', height: 300, background: 'blue' }} />
          <div style={{ width: '100%', height: 200, background: 'orange' }} />
          <div style={{ width: '100%', height: 400, background: 'yellow' }} />
          <div style={{ width: '100%', height: 200, background: 'orange' }} />
        </Masonry>
      </section>
    </>
  );
};

export default Home;
Home.Layout = Layout;
