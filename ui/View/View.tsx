import React, { ReactNode } from 'react';

import { breakpoints, DefaultProps } from '../stitches.config';

import { ViewStyled } from './View.styles';

export interface Props extends Omit<DefaultProps, 'spacing'> {
  children: ReactNode;
  container?: boolean;
  top?: DefaultProps['spacing'];
  bottom?: DefaultProps['spacing'];
}

export default function View(props: Props): JSX.Element {
  return (
    <ViewStyled
      container={props.container}
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
      }}
      id={props.id}>
      {props.children}
    </ViewStyled>
  );
}
