import React from "react";
import { object, number } from "prop-types";

import styled from "styled-components";
import mediaQueries from "../utils/media-queries";

function Project({
  project, index,
}) {
  return (
    <ProjectCard
      key={index}
    >
      <ImageWrapper>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={project.image} alt={`${project.name}'s website`} />
          </div>
          <div className="flip-card-back">
            {project.description}
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

  ${mediaQueries.ph`
    flex: 0 1 48%;
    margin: 0 1% 40px;
  `}

  ${mediaQueries.lg`
    flex: 0 1 31%;
  `}
`;

const ImageWrapper = styled.div`
  border: 2px solid #e9e9e9;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #dcd060;
    color: black;
  }

  .flip-card-back {
    background-color: #61639e;
    color: white;
    transform: rotateY(180deg);
  }
`;

const TextWrapper = styled.div`
  text-align: center;
`;
