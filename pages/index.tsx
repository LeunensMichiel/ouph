import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './styles/index.module.scss';
import { Layout, Logo } from '../components/common';
import data from '../public/data.json';

type HomePageProps = {
  items?: Array<typeof data[0]>;
  errors?: string;
};

const Home = ({ errors, items }: HomePageProps) => {
  const innerContainer = useRef(null);
  const { scrollYProgress } = useScroll({ container: innerContainer });

  const height = useTransform(scrollYProgress, [0, 0.4], ['100%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const translateLogo = useTransform(scrollYProgress, [0, 0.33], ['50%', '0%']);

  const itemAnim = {
    hover: { y: -8 },
    initial: { y: 0 },
  };

  return (
    <>
      <NextSeo
        title="ouph"
        titleTemplate="%s"
        description="Un studio de ouph! Ouph is a creative design studio based in Brussels, Belgium, specializing in branding and merchandise design."
        openGraph={{
          title: 'Ouph',
          description:
            'Un studio de ouph! Ouph is a creative design studio based in Brussels, Belgium, specializing in branding and merchandise design.',
        }}
      />
      <section className={styles.landing}>
        <video
          playsInline
          autoPlay
          muted
          poster="/assets/poster.jpg"
          loop
          preload="auto"
          className={styles.landing__video}
        >
          <source src="/assets/landing_video.mp4" type="video/mp4" />
        </video>
        <motion.div
          className={styles.landing__inner}
          layoutScroll
          ref={innerContainer}
        >
          <motion.div
            className={styles.landing__logo__text}
            style={{ y: translateLogo }}
          >
            <motion.span
              className={styles.landing__text}
              style={{ opacity, height }}
            >
              un website de
            </motion.span>
            <Logo style={{ height }} />
          </motion.div>
          <div className={styles.landing__portfolio}>
            {items?.map((item) => (
              <motion.a
                className={styles.landing__portfolio__item}
                key={item.title}
                href={`/work/${item.slug}`}
                variants={itemAnim}
                initial="initial"
                whileHover="hover"
              >
                {item.title}
              </motion.a>
            ))}
          </div>
        </motion.div>
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
