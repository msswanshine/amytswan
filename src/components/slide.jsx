import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Slide = ({ content }) => (
  <SlideItem>
    <img src={content} alt="slide of something" />
  </SlideItem>
);

Slide.propTypes = {
  content: string.isRequired,
};

const SlideItem = styled.div`
  height: 100%;
  width: 100%;
`;

export default Slide;
