import React, { ReactNode } from 'react';

import { DefaultProps } from '../stitches.config';

import {
  TableBodyStyled,
  TableCellStyled,
  TableHeadCellStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
} from './Table.styles';

export interface Props extends DefaultProps {
  children: ReactNode;
}

export const Table = (props: Props): JSX.Element => {
  return <TableStyled {...props} />;
};

export const TableHead = (props: Props): JSX.Element => {
  return <TableHeadStyled {...props} />;
};

export const TableBody = (props: Props): JSX.Element => {
  return <TableBodyStyled {...props} />;
};

export const TableRow = (props: Props): JSX.Element => {
  return <TableRowStyled {...props} />;
};

export const TableCell = (props: Props): JSX.Element => {
  return <TableCellStyled {...props} />;
};

export const TableHeadCell = (props: Props): JSX.Element => {
  return <TableHeadCellStyled {...props} />;
};

export default Table;
