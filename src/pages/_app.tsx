import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import React from 'react';
//components
import Layout from 'components/Layout';
import Header from 'components/Header';
//helpers & plugins & hooks
import 'plugins/axios';
//styling
import { ThemeProvider } from '@emotion/react';
import { Fonts } from 'styles/fonts';
import { Reset } from 'styles/reset';
import theme from 'styles/theme';

const queryClient = new QueryClient();

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Typescript Movie Project</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Fonts />
          <Reset theme={theme} />
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
