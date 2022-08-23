import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { Head } from '../components/common';
import '../styles/global/style.scss';

type NoopProps = {
  children: ReactNode;
};
const Noop = ({ children }: NoopProps) => <>{children}</>;

function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
