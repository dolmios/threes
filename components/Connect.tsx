import { Badge, Button, Dialog, Divider, Text, Element } from '@threesdev/ds';
import { UserCircle, Wallet as WalletIcon } from 'phosphor-react';
import { useState } from 'react';
import { useConnect, useAccount, useEnsName, useDisconnect } from 'wagmi';

import { useMount, useTruncate } from '../hooks';

export function Connect(): JSX.Element {
  const isMounted = useMount();

  const { data } = useAccount();
  const [isConnected, setIsConnected] = useState(data !== null);

  const disconnect = useDisconnect({
    onSuccess: () => {
      setIsConnected(false);
    },
  });
  const { connect, connectors, error, isReconnecting } = useConnect({
    onConnect: () => {
      setIsConnected(true);
    },
  });

  const ens = useEnsName({ address: data?.address });
  const address = useTruncate(data?.address || '');

  if (!isMounted) {
    return null as any;
  }

  if (isConnected) {
    return (
      <Dialog
        key={data?.address || Math.random()}
        trigger={
          <Button solid aria-label='Connect'>
            <Text as='span' css={{ hiddenInline: 'phone' }}>
              {ens?.data ? ens.data : data?.address ? address : null}
            </Text>
            <Text as='span' css={{ visible: 'phone' }}>
              <UserCircle weight='duotone' />
            </Text>
          </Button>
        }>
        <Text as='h3' inline={4}>
          {ens?.data ? ens.data : data?.address ? address : null}
        </Text>
        <Text as='h6'>{ens?.data && address}</Text>
        <Divider
          bottom={5}
          top={4}
          css={{
            hidden: 'phone',
          }}
        />

        <Button aria-label='Disconnect' onClick={(): void => disconnect.disconnect()}>
          Disconnect
        </Button>
      </Dialog>
    );
  }

  return (
    <Dialog
      key={!isConnected ? 'connect' : Math.random()}
      trigger={
        <Button aria-label='Connect Wallet' inline='auto' solid>
          {error ? (
            '😢'
          ) : (
            <>
              <Text as='span' css={{ hiddenInline: 'phone' }}>
                Connect
              </Text>
              <Text as='span' css={{ visible: 'phone' }}>
                <WalletIcon weight='duotone' />
              </Text>
            </>
          )}
        </Button>
      }>
      <Text as='h3' inline={4}>
        Connect with Ethereum
      </Text>
      {isReconnecting && <Badge theme='purple'>Reconnecting...</Badge>}
      <Divider bottom={5} top={4} />

      {connectors.map((x, index) => (
        <Button aria-label={x.name || 'Connect Wallet'} disabled={isMounted ? !x.ready : false} key={index} onClick={(): any => connect(x)} inline={4}>
          {x.name && isMounted ? x.name : null}
        </Button>
      ))}

      {error && (
        <Element top={4}>
          <Badge theme='orange'>{error?.message || 'An unknown error occurred'}</Badge>
        </Element>
      )}
    </Dialog>
  );
}
