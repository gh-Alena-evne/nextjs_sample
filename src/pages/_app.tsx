import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { PersistGate } from 'redux-persist/integration/react';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Roboto } from '@next/font/google';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useStore } from '@setup/configureStore';
import '../styles/global.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const { store, persistor } = useStore(pageProps.initialReduxState);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      NProgress.start();
    };
    const handleRouteEnd = () => {
      NProgress.done(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);

    router.events.on('routeChangeComplete', handleRouteEnd);

    router.events.on('routeChangeError', handleRouteEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteEnd);
      router.events.off('routeChangeError', handleRouteEnd);
    };
  }, [router]);

  const PayPalConfig = {
    'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'sb',
    currency: 'USD',
    locale: 'en_US',
    intent: 'capture',
    'disable-funding': 'mybank',
  };

  return (
    <>
      <Provider store={store}>
        <PayPalScriptProvider options={PayPalConfig}>
          <PersistGate persistor={persistor}>
            {() => (
              <main className={roboto.className}>
                <Component {...pageProps} />
              </main>
            )}
          </PersistGate>
        </PayPalScriptProvider>
      </Provider>
    </>
  );
}
