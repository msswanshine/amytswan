import React from 'react';
import { string } from 'prop-types';
import slideItem from './style';

const Slide = ({ content }) => (
  <div className={slideItem}>
    <img src={content} alt="slide of something" />
  </div>
);

Slide.propTypes = {
  content: string.isRequired,
};

export default Slide;
