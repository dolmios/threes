import React, { ReactNode, useRef, useState } from 'react';
import { useEventListener, useLockedBody, useOnClickOutside } from 'usehooks-ts';

import { Box } from '../Box';
import { Button } from '../Button';
import { breakpoints, DefaultProps } from '../stitches.config';

import {
  DialogContentStyled,
  DialogExitStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from './Dialog.styles';

export interface Props extends DefaultProps {
  children: ReactNode;
  trigger: ReactNode;
}

export default function Dialog(props: Props): JSX.Element {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 420);
  }

  useOnClickOutside(ref, () => {
    handleClose();
  });

  useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  useLockedBody(isOpen);

  return (
    <DialogStyled id={props.id}>
      <DialogTriggerStyled
        onClickCapture={(e): void => {
          e.persist();
          setIsOpen(true);
          setIsMounted(true);
        }}>
        {props.trigger}
      </DialogTriggerStyled>
      {isMounted && (
        <DialogOverlayStyled animation={isOpen}>
          <DialogContentStyled animation={isOpen} css={props.css} ref={ref}>
            <Box
              css={{
                '&:hover': {
                  background: '$background',
                },
                'background': '$background',
                'paddingBottom': '$6',
                'paddingTop': '$6',
                [breakpoints.phone]: {
                  paddingBottom: '$5',
                  paddingTop: '$5',
                },
              }}>
              <DialogExitStyled onClick={(): void => handleClose()}>
                <Button>Close</Button>
              </DialogExitStyled>
              {props.children}
            </Box>
          </DialogContentStyled>
        </DialogOverlayStyled>
      )}
    </DialogStyled>
  );
}
