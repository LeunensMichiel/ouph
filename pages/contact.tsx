import { NextSeo } from 'next-seo';
import Image from 'next/future/image';
import styles from './styles/contact.module.scss';
import { Layout } from '../components/common';

const Contact = () => {
  return (
    <>
      <NextSeo title="contact" />
      <section className={styles.contact}>
        <article className={styles.contact__inner}>
          <h1>Contact</h1>
          <p>
            We’re based in Brussels, Belgium but we’re ready to answer your
            questions no matter where you are from. You can reach us via email{' '}
            <a
              href="mailto:contact@ouph.studio"
              target="_blank"
              rel="noreferrer"
            >
              contact@ouph.studio
            </a>
          </p>
          <p>
            If that feels too official feel free to slide in our{' '}
            <a
              target="_blank"
              href="https://www.instagram.com/ouph.studio/"
              rel="noreferrer"
            >
              instagram
            </a>{' '}
            DM.
          </p>
        </article>
        <aside>
          <Image
            className={styles.contact__image}
            src="/assets/contact.jpg"
            alt={`Old school seventies images of customer service`}
            priority
            width={1310}
            height={1080}
            quality={100}
          />
        </aside>
      </section>
    </>
  );
};

export default Contact;
Contact.Layout = Layout;
