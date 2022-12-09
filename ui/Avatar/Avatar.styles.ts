import { styled } from '../stitches.config';

export const AvatarStyled = styled('div', {
  alignItems: 'center',
  borderRadius: '100%',
  display: 'inline-flex',
  height: 20,
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  userSelect: 'none',
  width: 20,
});

export const AvatarImageStyled = styled('div', {
  borderRadius: 'inherit',
  height: '100%',
  position: 'relative',
  width: '100%',
});

export const AvatarFallbackStyled = styled('div', {
  alignItems: 'center',
  background: '$overlay',
  color: '$text',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  lineHeight: 1,
  textAlign: 'center',
  width: '100%',
});

export default AvatarStyled;
