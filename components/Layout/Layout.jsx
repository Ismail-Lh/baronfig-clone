/* eslint-disable @next/next/no-page-custom-font */
import { Header } from '@sections';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name='description' content='description' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
