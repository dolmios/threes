import { MoonStars, SunHorizon } from 'phosphor-react';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDarkMode } from 'usehooks-ts';

import { Button } from '../Button';
import { DefaultProps, lightTheme, theme } from '../stitches.config';
import { Toast } from '../Toast';

import { ProviderStyled, reset } from './Provider.styles';

export interface Props extends DefaultProps {
  children: ReactNode | ReactNode[];
}

export default function Provider(props: Props): JSX.Element {
  const { isDarkMode } = useDarkMode(true);
  const [mounted, setMounted] = useState(false);

  reset();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div />;
  }

  return (
    <ProviderStyled
      css={props.css}
      className={isDarkMode ? theme.toString() : lightTheme.toString()}>
      <Toast />
      {props.children}
    </ProviderStyled>
  );
}

export function ProviderToggle(css: Props['css']): JSX.Element {
  const { isDarkMode, toggle } = useDarkMode(true);

  return (
    <Button css={css} onClick={toggle}>
      {isDarkMode ? <SunHorizon weight='duotone' /> : <MoonStars weight='duotone' />}
    </Button>
  );
}
