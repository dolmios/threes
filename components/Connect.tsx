import { Badge, Button, Dialog, Divider, Text, Element } from '@threesdev/ds';
import { PersonSimple, Wallet as WalletIcon } from 'phosphor-react';
import { useConnect, useAccount, useEnsName, useDisconnect } from 'wagmi';

import { useMount, useTruncate } from '../hooks';

export function Connect(): JSX.Element {
  const isMounted = useMount();
  const { data } = useAccount();
  const disconnect = useDisconnect();
  const { connect, connectors, error, isReconnecting } = useConnect();

  const ens = useEnsName({ address: data?.address, enabled: true });
  const address = useTruncate(data?.address || '');
  const display = data ? ens?.data || address : 'Not connected';

  if (!isMounted) {
    return null as any;
  }

  if (data?.address) {
    return (
      <Dialog
        trigger={
          <Button solid aria-label='Connect'>
            <Text as='span' css={{ hiddenInline: 'phone' }}>
              {display}
            </Text>
            <Text as='span' css={{ visible: 'phone' }}>
              <PersonSimple weight='duotone' />
            </Text>
          </Button>
        }>
        <Text as='h3' inline={4}>
          {display}
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
      <Text as='h6'>If you don&apos;t see your address after connecting, try refreshing the page. We are working on a fix.</Text>
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
