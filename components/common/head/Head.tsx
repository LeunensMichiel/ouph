import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import { FC } from 'react';

export const Head: FC = () => {
  const url = process.env.SITE_URL;

  return (
    <>
      <DefaultSeo
        title="OUPH"
        titleTemplate="%s | OUPH"
        defaultTitle="OUPH"
        description="ouph."
        openGraph={{
          title: 'OUPH',
          description: 'ouph.',
          type: 'website',
          url,
          locale: 'en',
          site_name: 'OUPH',
          images: [
            {
              url: '/assets/card.jpg',
              width: 1200,
              height: 630,
              alt: 'OUPH',
            },
          ],
        }}
      />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/meta/favicon-32x32.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/meta/favicon-16x16.png?v=1"
        />
        <link rel="manifest" href="/meta/site.webmanifest?v=1" />
        <link
          rel="mask-icon"
          href="/meta/safari-pinned-tab.svg?v=1"
          color="#de350b"
        />
        <link rel="shortcut icon" href="/meta/favicon.ico?v=1" />
        <meta name="msapplication-TileColor" content="#de350b" />
        <meta
          name="msapplication-config"
          content="/meta/browserconfig.xml?v=1"
        />
        <meta name="theme-color" content="#de350b" />
      </NextHead>
    </>
  );
};
