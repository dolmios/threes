import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Heartbeat } from 'phosphor-react';
import { ReactNode } from 'react';

import { Element, Stack, Text, View, Badge, ProviderToggle } from '../ui';

import { Submit, Connect } from './';

const ConnectWrapper = (): JSX.Element => {
  return <Connect />;
};

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  const router = useRouter();

  return (
    <>
      <View container>
        <Stack direction='row' flex='center' top={5}>
          <Stack direction='column' widthPhone={10} width={30} widthTablet={20}>
            <Link href='/'>
              <a>
                <Element
                  css={{
                    alignItems: 'center',
                    display: 'inline-flex',
                    gap: 'calc($3 / 1.8)',
                    justifyContent: 'left',
                    verticalAlign: 'middle',
                    width: 'auto',
                  }}>
                  <Image alt='' height={30} src='/logo.png' width={30} />
                  <Text
                    as='h4'
                    css={{
                      fontWeight: 'bold',
                      hiddenInline: 'phone',
                    }}>
                    Threes
                  </Text>
                </Element>
              </a>
            </Link>
          </Stack>
          <Stack
            direction='column'
            align='center'
            width={40}
            widthPhone={55}
            widthTablet={50}>
            <Text
              as='h5'
              css={{
                opacity: router.pathname === '/' ? 0.66 : 1,
              }}
              inline={4}>
              <Link href='/'>
                <a>Index</a>
              </Link>
            </Text>
            <Text
              as='h5'
              css={{
                opacity: router.pathname === '/votes' ? 0.66 : 1,
              }}
              inline={4}>
              <Link href='/votes'>
                <a>Votes</a>
              </Link>
            </Text>
            <Text
              as='h5'
              css={{
                opacity: router.pathname === '/saved' ? 0.66 : 1,
              }}
              inline={4}>
              <Link href='/saved'>
                <a>Saved</a>
              </Link>
            </Text>
            <Element
              css={{
                display: 'inline-block',
                hidden: 'phone',
              }}>
              <Text as='h5' inline={4}>
                <a
                  href='https://twitter.com/threesdev?utm_source=threes.dev'
                  target='_blank'
                  rel='noreferrer'>
                  Twitter
                </a>
              </Text>
              <Text as='h5' inline='auto'>
                <a
                  href='https://github.com/threesdev?utm_source=threes.dev'
                  target='_blank'
                  rel='noreferrer'>
                  Github
                </a>
              </Text>
            </Element>
          </Stack>
          <Stack
            direction='column'
            align='right'
            width={30}
            widthPhone={35}
            widthTablet={30}>
            <Submit />
            <ConnectWrapper />
          </Stack>
        </Stack>
      </View>
      {children}
      <Element>
        <Element top={7}>&nbsp;</Element>
        <Element
          css={{
            bottom: '0',
            position: 'absolute',
            width: '100%',
          }}>
          <View container bottom={5}>
            <Stack direction='row' flex='center'>
              <Stack direction='column' width={60} widthPhone={70}>
                <a href='https://www.buymeacryptocoffee.xyz/threesdev.eth?utm_source=threes.dev'>
                  <Badge icon={<Heartbeat weight='duotone' />}>
                    threesdev.eth
                  </Badge>
                </a>
              </Stack>

              <Stack direction='column' align='right' width={40} widthPhone={30}>
                <ProviderToggle />
              </Stack>
            </Stack>
          </View>
        </Element>
      </Element>
    </>
  );
}
