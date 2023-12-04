import React from 'react';
import { Global, css } from '@emotion/react';

const Fonts: React.FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Inter Soft';
        src: url('/fonts/intersoft-regular.woff') format('woff'),
          url('/fonts/intersoft-regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Inter Soft';
        src: url('/fonts/intersoft-medium.woff') format('woff'),
          url('/fonts/intersoft-medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'Inter Soft';
        src: url('/fonts/intersoft-semibold.woff') format('woff'),
          url('/fonts/intersoft-semibold.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: 'Inter Soft';
        src: url('/fonts/intersoft-bold.woff') format('woff'),
          url('/fonts/intersoft-bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
      }
    `}
  />
);

export { Fonts };
