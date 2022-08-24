import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../../components/common';
import data from '../../public/data.json';

type WorkPageProps = {
  item?: typeof data[0];
  errors?: string;
};

const WorkPage = ({ errors, item }: WorkPageProps) => {
  return <div>{item?.title}</div>;
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
