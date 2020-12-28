import '../styles/global.css';
import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import { NextPageContext, NextComponentType } from 'next';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return <Component {...pageProps} />;
};

const getServerSideProps = async (context: NextPageContext) => {
  return {};
};

const getClientSideProps = async (context: NextPageContext) => {
  return {};
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
