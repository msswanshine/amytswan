import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import sliderWrapper from './style';
import SliderContent from '../slider-content/slider-content';
import Slide from '../slide/slide';
import Arrow from '../arrow/arrow';

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
    <div
      className={`slider-wrapper ${sliderWrapper}`}
    >
      <SliderContent
        className="slider-content"
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
    </div>
  );
};

Slider.propTypes = {
  slides: shape({
    image: string.isRequired,
  }),
};

Slider.defaultProps = {
  slides: [{ image: '' }],
};

export default Slider;
