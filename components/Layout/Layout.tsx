import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children, home }: { children: React.ReactNode; home?: boolean }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
