import React, { ReactNode } from 'react';

import { ThreesImage } from '../Image';
import { DefaultProps } from '../stitches.config';

import { BoxImageChildrenStyled, BoxStyled } from './Box.styles';

export interface Props extends DefaultProps {
  children: ReactNode;
  loading?: boolean;
  image?: string;
  imageCTA?: string;
  imageHeight?: string;
  imageTarget?: '_blank' | '_self';
  imagePosition?: 'top' | 'bottom' | 'center';
  imageAlt?: string;
  micro?: boolean;
  hover?: boolean;
  theme?: 'default' | 'success' | 'error';
}

export default function Box(props: Props): JSX.Element {
  return props?.image ? (
    <BoxStyled
      css={props.css}
      hover={props.hover}
      id={props.id}
      loading={props.loading || false}
      padding={'none'}
      theme={props.theme || 'default'}>
      {props.imageCTA ? (
        <a
          href={props.imageCTA}
          rel='noopener noreferrer'
          target={props.imageTarget || '_blank'}>
          <ThreesImage
            css={{
              img: {
                borderTopLeftRadius: '$3',
                borderTopRightRadius: '$3',
              },
            }}
            fillHeight={props.imageHeight || '20rem'}
            alt={props.imageAlt || ('#' as string)}
            objectFit={'cover'}
            objectPosition={props.imagePosition || 'center'}
            layout='fill'
            src={props.image.toString()}
            hover
          />
        </a>
      ) : (
        <ThreesImage
          css={{
            img: {
              borderTopLeftRadius: '$3',
              borderTopRightRadius: '$3',
            },
          }}
          fillHeight={props.imageHeight || '20rem'}
          alt={props.imageAlt || ('#' as string)}
          objectFit={'cover'}
          objectPosition={props.imagePosition || 'center'}
          layout='fill'
          src={props.image.toString()}
          hover
        />
      )}
      <BoxImageChildrenStyled padding={'default'}>
        {props.children}
      </BoxImageChildrenStyled>
    </BoxStyled>
  ) : (
    <BoxStyled
      css={props.css}
      hover={props.hover}
      id={props.id}
      loading={props.loading || false}
      micro={props.micro}
      padding={'default'}
      theme={props.theme || 'default'}>
      {props.children}
    </BoxStyled>
  );
}
