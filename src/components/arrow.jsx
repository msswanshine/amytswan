import React from 'react';
import styled from 'styled-components';
import { string, func } from 'prop-types';
import leftArrow from '../../public/images/pngs/arrow-left.png';
import rightArrow from '../../public/images/pngs/arrow-right.png';

const Arrow = ({ direction, handleClick }) => (
  <ArrowItem
    onClick={handleClick}
    direction={direction}
  >
    <img src={direction === 'left' ? leftArrow : rightArrow} alt={`Arrow pointing ${direction}.`} />
  </ArrowItem>
);

const ArrowItem = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? 'right: 25px' : 'left: 25px')};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    transform: translateX(${(props) => (props.direction === 'left' ? '-2' : '2')}px);
    height: 20px;
    width: 20px;
    
    &:focus {
      outline: 0;
    }
  }
`;

Arrow.propTypes = {
  direction: string.isRequired,
  handleClick: func.isRequired,
};

export default Arrow;
