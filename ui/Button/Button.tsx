import React, { HTMLAttributes, ReactNode } from 'react';

import { Loading } from '../Loading';
import { breakpoints, DefaultProps } from '../stitches.config';

import { ButtonIconStyled, ButtonStyled } from './Button.styles';

export interface Props
  extends HTMLAttributes<HTMLButtonElement>,
    Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  solid?: boolean;
  block?: boolean;
  icon?: ReactNode;
  inline?: DefaultProps['spacing'] | 'auto';
}

export default function Button(props: Props): JSX.Element {
  return (
    <ButtonStyled
      css={{
        ...props.css,
        ...(props.inline && {
          display: 'inline-block',
          marginBottom: '0 !important',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,
          verticalAlign: 'middle',
          [breakpoints.phone]: {
            marginRight:
              props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.8)`,
          },
        }),
      }}
      id={props.id}
      block={props.block || false}
      solid={props.solid || false}
      {...props}>
      {props.icon && <ButtonIconStyled>{props.icon}</ButtonIconStyled>}
      {props.loading ? <Loading /> : props.children}
    </ButtonStyled>
  );
}
