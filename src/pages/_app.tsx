import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { theme } from '../chakra/theme';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/apollo-clien';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>);
}

export default MyApp;
