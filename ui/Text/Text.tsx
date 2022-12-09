import React, { ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../stitches.config';

import { TextStyled } from './Text.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  bold?: boolean;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'span';
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  inline?: DefaultProps['spacing'] | 'auto';
}

export default function Text(props: Props): JSX.Element {
  return (
    <TextStyled
      css={{
        ...props.css,
        ...(props.top && {
          paddingTop: `$${props.top}`,
          [breakpoints.phone]: {
            paddingTop: `calc($${props.top} * 0.9)`,
          },
        }),
        ...(props.bottom && {
          paddingBottom: `$${props.bottom}`,
          [breakpoints.phone]: {
            paddingBottom: `calc($${props.bottom} * 0.9)`,
          },
        }),
        ...(props.inline && {
          display: 'inline-block',
          marginBottom: '0 !important',
          marginRight: props.inline === 'auto' ? 'auto' : `$${props.inline}`,
          verticalAlign: 'middle',
          [breakpoints.phone]: {
            marginRight: props.inline === 'auto' ? 'auto' : `calc($${props.inline} * 0.8)`,
          },
        }),
      }}
      as={props.as}
      bold={props.bold}
      size={props.as}>
      {props.children}
    </TextStyled>
  );
}
