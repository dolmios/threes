import { Check, ClipboardText, Warning } from 'phosphor-react';
import React, { InputHTMLAttributes, useState } from 'react';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Loading } from '../Loading';
import { DefaultProps } from '../stitches.config';

import { InputAreaStyled, InputFunctionStyled, InputStyled } from './Input.styles';

export interface Props extends InputHTMLAttributes<HTMLInputElement>, DefaultProps {
  copy?: boolean;
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
  reveal?: boolean;
  submit?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submitFunction?: any;
  submitValid?: boolean;
  success?: boolean;
  successMessage?: string;
  warning?: boolean;
  warningMessage?: string;
  disabled?: boolean;
  maxWidth?: string;
}

export default function Input(props: Props): JSX.Element {
  const [value, setValue] = useState(props.value || '');
  const [isCopied, setIsCopied] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  }

  function handleCopy(): void {
    if (props.copy) {
      navigator.clipboard.writeText(value as string);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }

  return (
    <InputStyled
      css={{
        maxWidth: props.maxWidth || '80%',
        width: props.maxWidth || '80%',
      }}
      disabled={props.disabled}
      id={props.id}
      state={
        props.success
          ? 'success'
          : props.warning
          ? 'warning'
          : props.error
          ? 'error'
          : 'default'
      }>
      <InputAreaStyled
        css={props.css}
        disabled={props.disabled}
        onChange={handleChange}
        placeholder={props.placeholder}
        value={value}
      />
      {(props.error ||
        props.success ||
        props.warning ||
        props.loading ||
        props.submit ||
        props.copy) && (
        <InputFunctionStyled>
          {props.error && (
            <Badge icon={<Warning weight='duotone' />} theme='red'>
              {props.errorMessage || 'Error'}
            </Badge>
          )}
          {props.success && (
            <Badge icon={<Check weight='duotone' />} theme='green'>
              {props.successMessage || 'Success'}
            </Badge>
          )}
          {props.warning && (
            <Badge icon={<Warning weight='duotone' />} theme='orange'>
              {props.warningMessage || 'Warning'}
            </Badge>
          )}
          {props.loading && (
            <Badge>
              <Loading />
            </Badge>
          )}
          {props.copy && (
            <Button
              icon={
                isCopied ? (
                  <ClipboardText opacity={0.4} weight='duotone' />
                ) : (
                  <ClipboardText weight='duotone' />
                )
              }
              onClick={handleCopy}>
              Copy
            </Button>
          )}

          {props.submit && props.submitFunction && (
            <Button
              disabled={!props.submitValid}
              onClick={(): void => props.submitFunction(value)}
              solid>
              {props.submit}
            </Button>
          )}
        </InputFunctionStyled>
      )}
    </InputStyled>
  );
}
