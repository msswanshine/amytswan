import React from 'react';
import { css } from 'emotion';
import { string, func } from 'prop-types';
import leftArrow from '../../../public/images/pngs/arrow-left.svg';
import rightArrow from '../../../public/images/pngs/arrow-right.svg';

const Arrow = ({ direction, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className={css`
    display: flex;
    position: absolute;
    top: 50%;
    ${direction === 'right' ? 'right: 25px' : 'left: 25px'};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: transform ease-in 0.1s;
    &:hover {
      transform: scale(1.1);
    }
    svg {
      transform: translateX(${direction === 'left' ? '-2' : '2'}px);
      &:focus {
        outline: 0;
      }
    }
  `}
  >
    {direction === 'right' ? rightArrow : leftArrow }
  </button>
);

Arrow.propTypes = {
  direction: string.isRequired,
  handleClick: func.isRequired,
};

export default Arrow;
