import React, { useState } from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import SliderContent from './slider-content';
import Slide from './slide';
import Arrow from './arrow';

const Slider = ({ slides }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    debugger;
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <SliderWrapper>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            content={slide}
          />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderWrapper>
  );
};

Slider.propTypes = {
  slides: shape({
    image: string.isRequired,
  }),
};

Slider.defaultProps = {
  slides: [{ image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80' }],
};

const SliderWrapper = styled.div`
  position: relative;
  height: 800px;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

export default Slider;
