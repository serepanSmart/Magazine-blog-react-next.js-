import App, { AppProps } from 'next/app';
import '../styles/global.scss';
import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp);
