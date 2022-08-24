import { NextSeo } from 'next-seo';
import Masonry from 'react-masonry-css';
import { GetStaticProps } from 'next';
import styles from './styles/index.module.scss';
import { Layout, Logo } from '../components/common';
import data from '../public/data.json';
import { Card } from '../components/ui';

type HomePageProps = {
  items?: Array<typeof data[0]>;
  errors?: string;
};

const Home = ({ errors, items }: HomePageProps) => {
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
        {errors && <p>Error displaying items</p>}
        <Masonry
          breakpointCols={3}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {items?.map((item) => (
            <Card
              key={item.slug}
              image={item.images?.[0]}
              subtitle={item.subtitle}
              title={item.title}
              to={item.slug}
            />
          ))}
        </Masonry>
      </section>
    </>
  );
};

export default Home;
Home.Layout = Layout;

export const getStaticProps: GetStaticProps = async (_context) => {
  try {
    return { props: { items: data } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
