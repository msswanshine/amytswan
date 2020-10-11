import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import SlideItem from './style';

function Slide({ project }) {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => setIsActive(!isActive);

  return (
    <SlideItem
      className="slide-item"
      onClick={() => toggleClass}
    >
      <div className={isActive ? 'active' : ''}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={project.image} alt={`${project.name}'s website`} />
          </div>
          <div className="flip-card-back">
            {project.about}
          </div>
        </div>
      </div>
      <div>
        <h3>{project.name}</h3>
        <p>{project.role}</p>
      </div>
    </SlideItem>
  );
}

Slide.propTypes = {
  project: shape({
    name: string.isRequired,
    image: string.isRequired,
    about: string.isRequired,
  }),
};

Slide.defaultProps = {
  project: {
    name: '',
    image: '',
    about: '',
  },
};

export default Slide;
