import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../i18n'
import Head from 'next/head';
import Banner from '../components/Bricks/Banner/Banner.jsx';
import FormSignUp from '../components/Bricks/FormSignUp/FormSignUp';
import { Layout } from '../components/Layout';

const Home = ({t}) => {
  return (
    <Layout home>
      <Head>
        <title>Sign In</title>
      </Head>
      <Banner
      title={t('banner:h1')}
      subtitle = {t('banner:subtitle')}
      />
     <FormSignUp/>
    </Layout>
  );
};


Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'signup'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation(['common', 'banner', 'signup'])(Home);
