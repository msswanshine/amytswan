import React, { useState } from 'react';
import { object, number } from 'prop-types';

import styled from 'styled-components';
import mediaQueries from '../utils/media-queries';

function Project({ project, index }) {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => setIsActive(!isActive);

  return (
    <ProjectCard
      key={index}
      onClick={toggleClass}
    >
      <ImageWrapper className={isActive ? 'active' : ''}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={project.image} alt={`${project.name}'s website`} />
          </div>
          <div className="flip-card-back">
            {project.about}
          </div>
        </div>
      </ImageWrapper>
      <TextWrapper>
        <h3>{project.name}</h3>
        <p>{project.role}</p>
      </TextWrapper>
    </ProjectCard>
  );
}

Project.propTypes = {
  index: number.isRequired,
  project: object.isRequired,
};

export default Project;

const ProjectCard = styled.div`
  margin-bottom: 20px;
  perspective: 1000px;

  ${mediaQueries.ph`
    flex: 0 1 48%;
    margin: 0 1% 40px;
  `}

  ${mediaQueries.lg`
    flex: 0 1 31%;
  `}
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }

  .flip-card-inner {
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    width: 100%;
  }

  &.active .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    backface-visibility: hidden;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  .flip-card-front {
    background-color: #dcd060;
    color: black;
  }

  .flip-card-back {
    background-color: #61639e;
    color: white;
    position: absolute;
    top: 0;
    transform: rotateY(180deg);
  }
`;

const TextWrapper = styled.div`
  text-align: center;
`;
