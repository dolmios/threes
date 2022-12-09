import Image from 'next/image';
import React from 'react';

import { DefaultProps } from '../stitches.config';

import { AvatarFallbackStyled, AvatarImageStyled, AvatarStyled } from './Avatar.styles';

export interface Props extends DefaultProps {
  image?: string;
  fallback: string;
}

export default function Avatar(props: Props): JSX.Element {
  return (
    <AvatarStyled css={props.css} id={props.id}>
      {props.image ? (
        <AvatarImageStyled>
          <Image alt={props.fallback} layout='fill' src={props.image} />
        </AvatarImageStyled>
      ) : (
        <AvatarFallbackStyled>{props.fallback}</AvatarFallbackStyled>
      )}
    </AvatarStyled>
  );
}
