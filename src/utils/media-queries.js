import { css } from 'emotion';

const sizes = {
  sm: 0,
  ph: 500,
  md: 768,
  lg: 1024,
  xl: 1442,
  xxl: 2000,
};

const media = Object.keys(sizes).reduce((object, label) => {
  object[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return object;
}, {});

export default media;
