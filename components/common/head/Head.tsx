import NextHead from 'next/head';
import { DefaultSeo } from 'next-seo';
import { FC } from 'react';

export const Head: FC = () => {
  const url = process.env.SITE_URL;

  return (
    <>
      <DefaultSeo
        titleTemplate="%s || ouph"
        defaultTitle="ouph"
        description="Un studio de ouph! Ouph is a creative design studio based in Brussels, Belgium, specializing in branding and merchandise design."
        openGraph={{
          title: 'ouph',
          description:
            'Un studio de ouph! Ouph is a creative design studio based in Brussels, Belgium, specializing in branding and merchandise design.',
          type: 'website',
          url,
          locale: 'en',
          site_name: 'ouph',
          images: [
            {
              url: '/assets/card.jpg',
              width: 1200,
              height: 630,
              alt: 'ouph',
            },
          ],
        }}
      />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/meta/safari-pinned-tab.svg"
          color="#ff5800"
        />
        <link rel="shortcut icon" href="/meta/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/meta/browserconfig.xml" />
        <meta name="theme-color" content="#ff5800" />
      </NextHead>
    </>
  );
};
