import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import slideItem from './style';

function Slide({ project }) {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => setIsActive(!isActive);

  return (
    <div
      className={`slide-item ${slideItem}`}
      onClick={toggleClass}
      role="button"
    >
      <div className={`image-wrapper ${isActive ? 'active' : ''}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={project.image} alt={`${project.name}'s website`} />
            <div className="card-overlay">
              <div className="text-wrapper">
                <h2>{project.name}</h2>
                <p>{project.role}</p>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="text-wrapper">
              {project.about}
            </div>
          </div>
        </div>
      </div>
    </div>
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
