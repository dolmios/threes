import React, { ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../stitches.config';

import { ElementStyled } from './Element.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
  flexduo?: boolean;
}

export default function Element(props: Props): JSX.Element {
  return (
    <ElementStyled
      css={{
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
        ...props.css,
      }}
      flexduo={props.flexduo}
      id={props.id}>
      {props.children}
    </ElementStyled>
  );
}
