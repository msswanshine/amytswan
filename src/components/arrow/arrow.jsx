import React from 'react';
import { css } from 'emotion';
import { string, func } from 'prop-types';
import ArrowLeft from './arrow-left';
import ArrowRight from './arrow-right';

const Arrow = ({ direction, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className={css`
    display: flex;
    position: absolute;
    top: calc(50% - 25px);
    ${direction === 'right' ? 'right: 6px' : 'left: 6px'};
    height: 50px;
    width: 50px;
    justify-content: center;
    background: rgba(143, 136, 142, 0.85);
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
    {direction === 'right' ? <ArrowRight /> : <ArrowLeft /> }
  </button>
);

Arrow.propTypes = {
  direction: string.isRequired,
  handleClick: func.isRequired,
};

export default Arrow;
