import React, { ReactNode } from 'react';

import { Loading } from '../Loading';
import { breakpoints, DefaultProps } from '../stitches.config';

import { BadgeIconStyled, BadgeStyled } from './Badge.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  loading?: boolean;
  theme?: 'red' | 'orange' | 'pink' | 'purple' | 'blue' | 'green';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  icon?: ReactNode;
  inline?: DefaultProps['spacing'] | 'auto';
}

export default function Badge(props: Props): JSX.Element {
  return (
    <BadgeStyled
      css={{
        ...props.css,
        ...(props.inline && {
          display: 'inline-block',
          marginBottom: '0 !important',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,
          [breakpoints.phone]: {
            marginRight:
              props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.8)`,
          },
          verticalAlign: 'middle',
        }),
      }}
      id={props.id}
      onClick={props.onClick}
      theme={props.theme || 'default'}>
      {props.icon && <BadgeIconStyled>{props.icon}</BadgeIconStyled>}
      {props.loading ? <Loading /> : props.children}
    </BadgeStyled>
  );
}
