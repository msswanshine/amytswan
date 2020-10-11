import React, { useState } from 'react';
import { string } from 'prop-types';
import sliderWrapper from './style';
import SliderContent from '../slider-content/slider-content';
import Slide from '../slide/slide';
import Arrow from '../arrow/arrow';

const Slider = ({ projects }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === projects.length - 1) {
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
        translate: (projects.length - 1) * getWidth(),
        activeIndex: projects.length - 1,
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
        width={getWidth() * projects.length}
      >
        {projects.map((project) => (
          <Slide
            key={project.id}
            project={project}
          />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

Slider.propTypes = {
  projects: string,
};

Slider.defaultProps = {
  projects: '',
};

export default Slider;
