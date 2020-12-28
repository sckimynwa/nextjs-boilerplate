import '../styles/global.css';
import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import { NextPageContext, NextComponentType } from 'next';
import RootStore, { IRootStore } from '../stores/RootStore';
import { createContext } from 'react';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  // create mobx store
  const rootStore = RootStore.create();
  const RootStoreContext = createContext<IRootStore>({} as IRootStore);

  return (
    <>
      <RootStoreContext.Provider value={rootStore}>
        <Component {...pageProps} />
      </RootStoreContext.Provider>
    </>
  );
};

const getServerSideProps = async (context: NextPageContext) => {
  return {};
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const serverSideProps = await getServerSideProps(appContext.ctx);

  return { ...appProps, ...serverSideProps };
};

export default MyApp;
