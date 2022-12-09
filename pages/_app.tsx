/* eslint-disable @typescript-eslint/no-explicit-any */
import { Analytics } from '@vercel/analytics/react';
import { providers } from 'ethers';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import React from 'react';
import { SWRConfig } from 'swr';
import { createClient, defaultChains, WagmiProvider, chain } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import { Layout } from '../components';
import { useFetcher } from '../hooks';
import { Provider } from '../ui';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const fetcher = useFetcher;

  const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID as string;
  const chains = defaultChains;
  const defaultChain = chain.mainnet;
  const isChainSupported = (chainId?: number): boolean => chains.some((x) => x.id === chainId);

  const client = createClient({
    autoConnect: true,
    connectors({ chainId }) {
      const chain = chains.find((x) => x.id === chainId) ?? defaultChain;
      const rpcUrl = chain.rpcUrls.alchemy ? `${chain.rpcUrls.alchemy}/${alchemyId}` : chain.rpcUrls.default;
      return [
        new InjectedConnector({ chains }),
        new WalletConnectConnector({
          chains,
          options: {
            qrcode: true,
            rpc: {
              [chain.id]: rpcUrl,
            },
          },
        }),
      ];
    },
    provider({ chainId }) {
      return new providers.AlchemyProvider(isChainSupported(chainId) ? chainId : defaultChain.id, alchemyId);
    },
    webSocketProvider({ chainId }) {
      return new providers.AlchemyWebSocketProvider(isChainSupported(chainId) ? chainId : defaultChain.id, alchemyId);
    },
  });

  return (
    <>
      <DefaultSeo
        openGraph={{
          description: 'Bringing together the finest and most user-friendly projects in web3 to inspire those building the next thing.',

          images: [
            {
              alt: 'Threes',
              url: 'https://threes.dev/meta.jpg',
            },
          ],
          locale: 'en_AU',
          site_name: 'Threes',
          title: 'Threes - Web3 Design Inspiration',
          type: 'website',
          url: 'https://threes.dev',
        }}
        titleTemplate={'%s — Threes'}
      />
      <WagmiProvider client={client}>
        <Provider>
          <SWRConfig
            value={{
              dedupingInterval: 100_000,
              errorRetryCount: 2,
              fetcher,
              revalidateOnFocus: false,
              suspense: false,
            }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
          <Analytics />
        </Provider>
      </WagmiProvider>
    </>
  );
}
