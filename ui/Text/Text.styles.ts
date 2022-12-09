import { breakpoints, styled } from '../stitches.config';

export const TextStyled = styled('div', {
  '&:last-child': {
    marginBottom: `${0}!important`,
  },
  display: 'block',

  variants: {
    bold: {
      false: {
        fontWeight: 'inherit',
      },
      true: {
        fontWeight: '700',
      },
    },
    size: {
      h1: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$h1',
        fontWeight: '$h1',
        lineHeight: '$h1',

        [breakpoints.phone]: {
          fontSize: 'calc($h1 * 0.8)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h1 * 0.9)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h1 * 0.94)',
        },
      },
      h2: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$h2',
        fontWeight: '$h2',
        lineHeight: '$h2',

        [breakpoints.phone]: {
          fontSize: 'calc($h2 * 0.84)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h2 * 0.92)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h2 * 0.94)',
        },
      },
      h3: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$h3',
        fontWeight: '$h3',
        lineHeight: '$h3',

        [breakpoints.phone]: {
          fontSize: 'calc($h3 * 0.86)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h3 * 0.92)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h3 * 0.94)',
        },
      },
      h4: {
        '&:not(:last-child)': {
          marginBottom: '$3',
        },
        fontSize: '$h4',
        fontWeight: '$h4',
        lineHeight: '$h4',

        [breakpoints.phone]: {
          fontSize: 'calc($h4 * 0.88)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h4 * 0.94)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h4 * 0.96)',
        },
      },
      h5: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$h5',
        fontWeight: '$h5',
        lineHeight: '$h5',

        [breakpoints.phone]: {
          fontSize: 'calc($h5 * 0.92)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h5 * 0.96)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h5 * 0.98)',
        },
      },
      h6: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$h6',
        fontWeight: '$h6',
        lineHeight: '$h6',
        opacity: '0.77',

        [breakpoints.phone]: {
          fontSize: 'calc($h6 * 0.9)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($h6 * 0.94)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($h6 * 0.96)',
        },
      },
      p: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$p',
        fontWeight: '$p',
        lineHeight: '$p',

        [breakpoints.phone]: {
          fontSize: 'calc($p * 0.9)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($p * 0.96)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($p * 0.98)',
        },
      },
      small: {
        '&:not(:last-child)': {
          marginBottom: '$4',
        },
        fontSize: '$small',
        fontWeight: '$small',
        lineHeight: '$small',

        [breakpoints.phone]: {
          fontSize: 'calc($small * 0.9)',
        },
        [breakpoints.tabletX]: {
          fontSize: 'calc($small * 0.96)',
        },
        [breakpoints.laptopX]: {
          fontSize: 'calc($small * 0.98)',
        },
      },
      span: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
      },
    },
  },
});

export default TextStyled;
