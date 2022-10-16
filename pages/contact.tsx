import { NextSeo } from 'next-seo';
import { clsx } from 'clsx';
import styles from './styles/contact.module.scss';
import { Layout } from '../components/common';

const Contact = () => {
  return (
    <>
      <NextSeo title="contact" />
      <section className={clsx(styles.contact, 'container-page')}>
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
      </section>
    </>
  );
};

export default Contact;
Contact.Layout = Layout;
