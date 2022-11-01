import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
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
  const [socialText, setSocialText] = useState("we're also on instagram :)");

  const height = useTransform(scrollYProgress, [0, 1.2], ['100%', '5%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const topLogo = useTransform(scrollYProgress, [0, 1], ['50%', '0%']);
  const yLogo = useTransform(scrollYProgress, [0, 1], ['-55%', '0%']);

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
          <nav className={clsx(styles.custom__nav)}>
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
          </nav>
          <motion.div
            className={styles.landing__logo__text}
            style={{ top: topLogo, y: yLogo }}
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
