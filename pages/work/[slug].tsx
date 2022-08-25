import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/future/image';
import { Layout } from '../../components/common';
import data from '../../public/data.json';
import styles from '../styles/workpage.module.scss';

type WorkPageProps = {
  item?: typeof data[0];
  errors?: string;
};

const WorkPage = ({ errors, item }: WorkPageProps) => {
  return (
    <section className="container py-container--sm">
      <div className={styles.root}>
        <article>
          <h1 className={styles.title}>{item?.title}</h1>
          <span className={styles.year}>{item?.year}</span>
          <p className={styles.description}>{item?.description}</p>
        </article>
        <aside className={styles.images}>
          {item?.images?.map((url, n) => (
            <Image
              className={styles.image}
              src={url}
              alt={`${item?.title} ${item?.subtitle} - image ${n + 1}`}
              priority
              width={400}
              height={400}
              quality={100}
              key={url}
            />
          ))}
        </aside>
      </div>
      <span className={styles.footnote}>
        Thanks for scrolling till the end :)
      </span>
    </section>
  );
};

export default WorkPage;

WorkPage.Layout = Layout;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((work) => ({
    params: { slug: work.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    const item = data.find((work) => work.slug === slug);

    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
