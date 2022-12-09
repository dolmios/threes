import { breakpoints, styled } from '../stitches.config';

export const TableStyled = styled('table', {
  '*': {
    verticalAlign: 'middle',
  },
  borderRadius: '$1',
  borderSpacing: 0,
  display: 'inline-table',
  fontSize: '1.5rem',
  overflowX: 'auto',

  [breakpoints.phone]: {
    display: 'block',
    paddingBottom: '$3',
  },
  width: '100%',
});

export const TableHeadStyled = styled('thead', {
  borderBottom: '0.1rem solid $border',
  textAlign: 'left',
  width: '100%',
});

export const TableBodyStyled = styled('tbody', {
  width: '100%',
});

export const TableRowStyled = styled('tr', {
  borderBottom: '0.1rem solid $overlay',
  borderRadius: '$3',
  'tbody > &:hover': {
    background: '$overlay',
  },
  transition: '$default',
});

export const TableCellStyled = styled('td', {
  '&:last-child': {
    textAlign: 'right',
  },
  padding: '$3 $3 $3 $3',
  whiteSpace: 'nowrap',
});

export const TableHeadCellStyled = styled('th', {
  '&:last-child': {
    textAlign: 'right',
  },

  fontSize: '1.4rem',
  fontWeight: '500',
  opacity: 0.6,
  padding: '0 $3 $4 $3',
});

export default TableStyled;
