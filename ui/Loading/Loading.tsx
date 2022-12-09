import React from 'react';

export interface Props {
  stroke?: string;
  width?: number;
}

export default function Loading({
  stroke = '#969696',
  width = 16,
}: Props): JSX.Element {
  return (
    <svg
      height={width}
      stroke={stroke}
      viewBox={'0 0 38 38'}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}>
      <g fill='none' fillRule='evenodd'>
        <g strokeWidth='2' transform='translate(1 1)'>
          <circle cx='18' cy='18' r='18' strokeOpacity='.5' />
          <path d='M36 18c0-9.94-8.06-18-18-18'>
            <animateTransform
              attributeName='transform'
              dur='1s'
              from='0 18 18'
              repeatCount='indefinite'
              to='360 18 18'
              type='rotate'
            />
          </path>
        </g>
      </g>
    </svg>
  );
}
